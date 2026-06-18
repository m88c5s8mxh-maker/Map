#!/usr/bin/env node
/**
 * Morio Solutions AI — VS Code Bridge Runner
 *
 *   node bridge/runner.js            — Vollbetrieb (Sync + Polling)
 *   node bridge/runner.js --sync-only — Nur Skills + Wiki synchronisieren
 *
 * Das Gehirn: Agents haben Zugriff auf alle Skills UND Wiki-Seiten aus dem
 * Map-Repo. Vor jedem Task wird automatisch relevantes Wissen gesucht und
 * in den System-Prompt injiziert.
 */

const fs   = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { industryProfile } = require("./industry-dna");

// ── .env laden ────────────────────────────────────────────────────────────────
function loadEnvFile() {
  const envPaths = [
    path.join(__dirname, ".env"),
    path.join(__dirname, "..", ".env.production"),
    path.join(__dirname, "..", ".env.local"),
  ];
  for (const envPath of envPaths) {
    if (!fs.existsSync(envPath)) continue;
    fs.readFileSync(envPath, "utf8").split("\n").forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const idx = trimmed.indexOf("=");
      if (idx < 0) return;
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = val;
    });
    break;
  }
}
loadEnvFile();

// ── Konfiguration ─────────────────────────────────────────────────────────────
const CRM_URL        = process.env.CRM_URL         || "https://intra.moriosolutions.de";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET  || "c8a193196cd733b0101769ce";
const ANTHROPIC_KEY  = process.env.ANTHROPIC_API_KEY;
const MAP_PATH       = process.env.MAP_PATH        || "C:/Users/kbeck/OneDrive/Dokumente/Agency/Map/raw/skills";
const PROJECTS_PATH  = process.env.PROJECTS_PATH   || "C:/Users/kbeck/OneDrive/Dokumente/Agency";
const POLL_INTERVAL  = parseInt(process.env.POLL_INTERVAL || "30000");
const SYNC_ONLY      = process.argv.includes("--sync-only");

// Pfade aus MAP_PATH ableiten
const MAP_BASE  = path.resolve(MAP_PATH, "../..");       // .../Agency/Map
const WIKI_PATH = path.join(MAP_BASE, "wiki");           // .../Agency/Map/wiki

// ── Skill-Kategorien ──────────────────────────────────────────────────────────
const SKILL_CATEGORIES = {
  "web-factory": "Web Design", "cinematic-web": "Web Design", "ux-design": "Web Design",
  "canvas-design": "Web Design", "design-system": "Web Design", "ux-copy": "Web Design",
  "content-creation": "Marketing", "draft-content": "Marketing", "email-sequence": "Marketing",
  "campaign-plan": "Marketing", "seo-audit": "Marketing", "brand-guidelines": "Marketing",
  "brand-review": "Marketing", "competitive-intelligence": "Marketing",
  "code-review": "Engineering", "debug": "Engineering", "architecture": "Engineering",
  "system-design": "Engineering", "build-with-claude-code": "Engineering",
  "mcp-builder": "Engineering", "deploy-checklist": "Engineering",
  "account-research": "Sales & CRM", "call-prep": "Sales & CRM", "compose-outreach": "Sales & CRM",
  "prospect": "Sales & CRM", "close-management": "Sales & CRM",
  "analyze": "Data & Analytics", "forecast": "Data & Analytics", "create-viz": "Data & Analytics",
  "graphify": "Knowledge", "obsidian-wiki": "Knowledge", "research-synthesis": "Knowledge",
  "daily-briefing": "Knowledge", "knowledge-synthesis": "Knowledge",
};

function getCategory(slug) {
  return SKILL_CATEGORIES[slug] || "Allgemein";
}

// ── HTTP ──────────────────────────────────────────────────────────────────────
const authHeader = { "Authorization": `Bearer ${WEBHOOK_SECRET}` };

async function apiGet(apiPath) {
  const res = await fetch(`${CRM_URL}${apiPath}`, { headers: authHeader });
  return res.json();
}

async function apiPost(apiPath, body) {
  const res = await fetch(`${CRM_URL}${apiPath}`, {
    method: "POST", headers: { "Content-Type": "application/json", ...authHeader },
    body: JSON.stringify(body),
  });
  return res.json();
}

async function apiPut(apiPath, body) {
  const res = await fetch(`${CRM_URL}${apiPath}`, {
    method: "PUT", headers: { "Content-Type": "application/json", ...authHeader },
    body: JSON.stringify(body),
  });
  return res.json();
}

// ── Skills-Sync ───────────────────────────────────────────────────────────────
async function syncSkills() {
  console.log("🧠 Synchronisiere Skills aus Map-Repo...");
  if (!fs.existsSync(MAP_PATH)) { console.warn(`   ⚠️  Map-Pfad nicht gefunden: ${MAP_PATH}`); return; }

  const skills = [];

  // .md Dateien im Root
  const files = fs.readdirSync(MAP_PATH).filter(f => f.endsWith(".md"));
  for (const file of files) {
    const slug = file.replace(".md", "");
    const content = fs.readFileSync(path.join(MAP_PATH, file), "utf8");
    const lines = content.split("\n");
    const description = lines.find(l => l.trim() && !l.startsWith("#") && !l.startsWith("---"))?.trim()?.slice(0, 200) || "";
    const nameMatch = content.match(/^#\s+(.+)/m);
    const name = nameMatch ? nameMatch[1].replace(/[`*]/g, "").trim() : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    skills.push({ slug, name, category: getCategory(slug), description, content: content.slice(0, 8000), source_path: `Map/raw/skills/${file}` });
  }

  // Unterverzeichnisse (SKILL.md)
  const dirs = fs.readdirSync(MAP_PATH, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
  for (const dir of dirs) {
    const skillFile = path.join(MAP_PATH, dir, "SKILL.md");
    if (!fs.existsSync(skillFile)) continue;
    const content = fs.readFileSync(skillFile, "utf8");
    const lines = content.split("\n");
    const description = lines.find(l => l.trim() && !l.startsWith("#") && !l.startsWith("---"))?.trim()?.slice(0, 200) || "";
    const nameMatch = content.match(/^#\s+(.+)/m);
    const name = nameMatch ? nameMatch[1].replace(/[`*]/g, "").trim() : dir;
    skills.push({ slug: dir, name, category: getCategory(dir), description, content: content.slice(0, 8000), source_path: `Map/raw/skills/${dir}/SKILL.md` });
  }

  if (skills.length === 0) { console.log("   Keine Skills gefunden."); return; }
  const result = await apiPost("/api/skills", skills);
  console.log(`   ✅ ${result.synced || skills.length} Skills synchronisiert`);
}

// ── Wiki-Sync ─────────────────────────────────────────────────────────────────
async function syncWiki() {
  if (!fs.existsSync(WIKI_PATH)) {
    console.warn(`   ⚠️  Wiki-Pfad nicht gefunden: ${WIKI_PATH}`);
    return 0;
  }
  console.log("📚 Synchronisiere Wiki-Seiten...");
  const files = fs.readdirSync(WIKI_PATH).filter(f => f.endsWith(".md"));

  const batch = [];
  for (const file of files) {
    const slug = file.replace(/\.md$/, "").replace(/\s+/g, "-").toLowerCase();
    const title = file.replace(/\.md$/, "");
    let content = "";
    try { content = fs.readFileSync(path.join(WIKI_PATH, file), "utf8").slice(0, 6000); } catch { continue; }
    // Tags aus Überschriften und fett-Text extrahieren
    const headings = [...content.matchAll(/^#{1,3}\s+(.+)/gm)].map(m => m[1]).slice(0, 8).join(", ");
    const tags = title.toLowerCase().replace(/[^a-z0-9äöüß\s]/gi, " ") + (headings ? ", " + headings : "");
    batch.push({ slug, title, category: "Wiki", content, tags, source_path: `Map/wiki/${file}` });
  }

  // In Batches von 50 hochladen
  let synced = 0;
  for (let i = 0; i < batch.length; i += 50) {
    try {
      const res = await apiPost("/api/knowledge", batch.slice(i, i + 50));
      synced += res.synced || 0;
    } catch (e) {
      console.warn(`   ⚠️  Batch ${i} fehlgeschlagen: ${e.message}`);
    }
  }
  console.log(`   ✅ ${synced} Wiki-Seiten synchronisiert`);
  return synced;
}

// ── Gehirn: Lokale Wissenssuche ───────────────────────────────────────────────
const STOP_WORDS = new Set(["ein","eine","der","die","das","ist","bitte","und","oder","für","mit","von","zu","an","auf","es","ich","du","er","sie","wir","ihr","sie","als","auch","bei","bis","im","in","nach","nicht","noch","nur","seit","so","über","um","uns","vom","vor","wie","zum","zur","dem","den","des","uns","was","wer","wie","bitte","soll","kann","muss","wird","haben","sein","werden","wurde","hatte"]);

function extractKeywords(text, limit = 8) {
  return text.toLowerCase()
    .replace(/[^\wäöüß\s]/gi, " ")
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w))
    .slice(0, limit);
}

// Direkt im lokalen Map-Repo nach relevanten Wiki-Seiten suchen
function searchLocalWiki(keywords, maxResults = 3) {
  if (!fs.existsSync(WIKI_PATH)) return [];
  const results = [];
  try {
    const files = fs.readdirSync(WIKI_PATH).filter(f => f.endsWith(".md"));
    for (const file of files) {
      const title = file.replace(/\.md$/, "").toLowerCase();
      const score = keywords.filter(k => title.includes(k)).length;
      if (score > 0) results.push({ file, title: file.replace(/\.md$/, ""), score });
    }
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, maxResults).map(r => {
      try {
        const content = fs.readFileSync(path.join(WIKI_PATH, r.file), "utf8");
        return { title: r.title, content: content.slice(0, 2500) };
      } catch { return null; }
    }).filter(Boolean);
  } catch { return []; }
}

// Direkt im lokalen Map-Repo nach relevanten Skills suchen
function searchLocalSkills(keywords, maxResults = 3) {
  if (!fs.existsSync(MAP_PATH)) return [];
  const results = [];
  try {
    const files = fs.readdirSync(MAP_PATH).filter(f => f.endsWith(".md"));
    for (const file of files) {
      const slug = file.replace(/\.md$/, "").toLowerCase();
      const score = keywords.filter(k => slug.includes(k)).length;
      if (score > 0) results.push({ file, slug, score });
    }
    // Unterverzeichnisse
    const dirs = fs.readdirSync(MAP_PATH, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
    for (const dir of dirs) {
      const score = keywords.filter(k => dir.toLowerCase().includes(k)).length;
      if (score > 0) {
        const skillFile = path.join(MAP_PATH, dir, "SKILL.md");
        if (fs.existsSync(skillFile)) results.push({ file: dir + "/SKILL.md", slug: dir, score, isDir: true });
      }
    }
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, maxResults).map(r => {
      try {
        const filePath = r.isDir ? path.join(MAP_PATH, r.file) : path.join(MAP_PATH, r.file);
        const content = fs.readFileSync(filePath, "utf8");
        return { title: r.slug, content: content.slice(0, 3000) };
      } catch { return null; }
    }).filter(Boolean);
  } catch { return []; }
}

// Gehirn-Kontext für einen Task aufbauen
function buildBrainContext(taskInput, agentType) {
  const keywords = extractKeywords(taskInput);
  if (keywords.length === 0) return "";

  const relevantSkills = searchLocalSkills(keywords);
  const relevantWiki   = searchLocalWiki(keywords);

  if (relevantSkills.length === 0 && relevantWiki.length === 0) return "";

  const parts = ["## Relevantes Wissen aus dem Morio-Gehirn\n"];

  if (relevantSkills.length > 0) {
    parts.push("### Skills");
    for (const s of relevantSkills) {
      parts.push(`**${s.title}**\n${s.content}`);
    }
  }

  if (relevantWiki.length > 0) {
    parts.push("\n### Wiki-Wissen");
    for (const w of relevantWiki) {
      parts.push(`**${w.title}**\n${w.content}`);
    }
  }

  return parts.join("\n\n");
}

// ── Claude API ────────────────────────────────────────────────────────────────
async function runWithClaude(prompt, systemPrompt) {
  if (!ANTHROPIC_KEY) throw new Error("ANTHROPIC_API_KEY nicht gesetzt");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.content[0].text;
}

// ── Website-Task ──────────────────────────────────────────────────────────────
function isWebsiteTask(input) {
  const l = input.toLowerCase();
  return l.includes("website") || l.includes("landing") || l.includes("webseite") || l.includes("html");
}

// Vollständigen cinematic-web Skill laden (NICHT gekürzt — das war der Bug)
function loadCinematicSkill() {
  const candidates = [
    path.join(MAP_PATH, "cinematic-web", "SKILL.md"),
    path.join(MAP_PATH, "web-factory", "SKILL.md"),
  ];
  for (const p of candidates) {
    try { if (fs.existsSync(p)) return fs.readFileSync(p, "utf8"); } catch {}
  }
  return "";
}

// Streaming-Call für große Outputs (Websites brauchen 15k–40k Tokens → kein 4096-Limit!)
async function runWithClaudeStreaming(prompt, systemPrompt, model, maxTokens) {
  if (!ANTHROPIC_KEY) throw new Error("ANTHROPIC_API_KEY nicht gesetzt");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({
      model: model || "claude-opus-4-8",
      max_tokens: maxTokens || 32000,
      stream: true,
      // Skill als gecachter System-Block (spart Kosten bei wiederholten Generierungen)
      system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok || !res.body) {
    const err = await res.text().catch(() => "");
    throw new Error(`Anthropic ${res.status}: ${err.slice(0, 200)}`);
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "", text = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      try {
        const evt = JSON.parse(line.slice(6));
        if (evt.type === "content_block_delta" && evt.delta?.type === "text_delta") text += evt.delta.text;
        if (evt.type === "error") throw new Error(evt.error?.message || "stream error");
      } catch (e) { if (e.message && e.message !== "Unexpected end of JSON input") { /* ignore parse noise */ } }
    }
  }
  return text;
}

// Lokale Kunden-Assets (Logos, Fotos) im Projektordner finden
function scanAssets(projectPath) {
  const exts = /\.(png|jpe?g|svg|webp|gif|avif|mp4|webm)$/i;
  const dirs = ["assets", "bilder", "images", "img", "logos", "media", "."];
  const found = [];
  for (const d of dirs) {
    const dir = d === "." ? projectPath : path.join(projectPath, d);
    try {
      if (!fs.existsSync(dir)) continue;
      for (const f of fs.readdirSync(dir)) {
        if (f === "index.html" || f === "CLAUDE.md") continue;
        if (exts.test(f)) found.push(d === "." ? f : `${d}/${f}`);
      }
    } catch { /* skip */ }
  }
  return [...new Set(found)];
}

// Bilder als Base64-Data-URIs einbetten → selbst-enthaltenes HTML für die CRM-Vorschau
function inlineAssets(html, projectPath) {
  const mime = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", svg: "image/svg+xml", webp: "image/webp", gif: "image/gif", avif: "image/avif" };
  return html.replace(
    /(["'(])((?:assets|bilder|images|img|logos|media)\/[^"')]+\.(png|jpe?g|svg|webp|gif|avif))(["')])/gi,
    (m, pre, rel, ext, post) => {
      try {
        const fp = path.join(projectPath, rel);
        if (!fs.existsSync(fp)) return m;
        const b64 = fs.readFileSync(fp).toString("base64");
        return `${pre}data:${mime[ext.toLowerCase()] || "image/jpeg"};base64,${b64}${post}`;
      } catch { return m; }
    }
  );
}

// Dedizierter Website-Generator — voller Skill + Opus 4.8 + Streaming
async function generateWebsite(task) {
  const projectName = task.title || "website-projekt";
  const projectPath = openInVSCode(projectName, task.input);
  const skill = loadCinematicSkill();
  if (!skill) console.warn("   ⚠️  cinematic-web Skill nicht gefunden — generiere ohne Skill-DNA");

  // Kunden-Assets erkennen und dem Agent mitgeben
  const assets = scanAssets(projectPath);
  let assetNote;
  if (assets.length) {
    console.log(`   🖼️  ${assets.length} lokale Asset(s) gefunden: ${assets.join(", ")}`);
    const logo = assets.find(a => /logo/i.test(a));
    assetNote = `

VERFÜGBARE LOKALE ASSETS (vom Kunden bereitgestellt) — verwende GENAU diese Dateien mit relativen Pfaden:
${assets.map(a => `- ${a}`).join("\n")}

ASSET-REGELN (ZWINGEND — keine Ausnahme):
- Kopiere jeden Dateinamen ZEICHENGENAU wie oben gelistet, inklusive Endung. "logo.jpg" bleibt "logo.jpg" — ändere NIEMALS die Endung (kein .png aus .jpg).
- Benenne NICHTS um. Verwende NIEMALS erfundene oder "aufgeräumte" Namen wie bar-1.jpg, bar-2.jpg, image1.jpg, hero.jpg — nur exakt die Pfade aus der Liste.
- Binde sie per relativem Pfad ein, z.B. <img src="${assets[0]}" alt="...">.${logo ? `\n- Das Logo ist exakt "${logo}" → in die Navigation (und ggf. Loader/Footer), NICHT als Text-Logo.` : ""}
- Setze die Fotos sinnvoll ein (Bar-Fotos in Hero/Atmosphäre, Drink-Fotos im Cocktail-Grid).
- Brauchst du mehr Bilder als gelistet? Dann nutze die vorhandenen mehrfach ODER Canvas-/CSS-Visuals — erfinde KEINE zusätzlichen Dateinamen und KEINE Stock-URLs.`;
  } else {
    console.log("   🖼️  Keine lokalen Assets gefunden → CSS/Canvas-Visuals");
    assetNote = `

KEINE lokalen Bilddateien vorhanden. Erzeuge alle Visuals per Canvas/CSS (Gradients, Partikel, geometrische Formen). KEINE externen Bild-URLs / Stock-Platzhalter. Logo als sauberes Text-Logo gestalten.`;
  }

  const system = `Du bist ein Awwwards-Level Web-Designer der Morio Solutions Agentur. Du erstellst EINE vollständige, produktionsreife Single-File HTML-Website (HTML + inline <style> + inline <script>).

ABSOLUTE REGELN:
- Gib AUSSCHLIESSLICH den HTML-Code aus — beginne mit <!DOCTYPE html>, ende mit </html>. KEIN Markdown, KEINE \`\`\`-Blöcke, KEINE Erklärung davor oder danach.
- Die Seite muss VOLLSTÄNDIG sein: alle Sektionen, alle 7 Pflicht-Systeme aus dem Skill, keine Platzhalter, kein "TODO", nichts abgeschnitten.
- Dark-first, branchenspezifische DNA exakt nach dem Skill unten. Wähle die Branche automatisch aus dem Auftrag.
- Wo konkrete Daten fehlen (Adresse, Telefon, Stats): plausible Platzhalter, die der Kunde leicht ersetzen kann.
- Deutscher Content. Responsiv. Inkl. Impressum- und Datenschutz-Sektion.

Befolge diesen Skill exakt:

${skill}${industryProfile(task.input)}`;

  const detectedProfile = industryProfile(task.input);
  if (detectedProfile) console.log("   🎯 Branchen-Profil erkannt und injiziert");

  const prompt = `AUFTRAG:\n${task.input}${assetNote}\n\nErstelle jetzt die komplette, fertige index.html nach dem Skill UND der Branchen-Referenz. Nur HTML-Code ausgeben.`;

  console.log("   🎨 Generiere Website mit Opus 4.8 (Streaming, bis 32k Tokens)…");
  let html = await runWithClaudeStreaming(prompt, system, "claude-opus-4-8", 32000);

  // Code-Fences entfernen + auf das reine Dokument zuschneiden
  html = html.trim().replace(/^```html?\s*/i, "").replace(/```\s*$/i, "").trim();
  const start = html.indexOf("<!DOCTYPE");
  const end = html.lastIndexOf("</html>");
  if (start >= 0 && end >= 0) html = html.slice(start, end + 7);

  const ok = html.includes("</html>");
  fs.writeFileSync(path.join(projectPath, "index.html"), html);
  console.log(`   ${ok ? "✅" : "⚠️"} index.html geschrieben (${html.length} Zeichen)`);

  // Validierung: referenzierte lokale Bilder gegen echte Dateien prüfen
  const refs = [...html.matchAll(/(?:src|href)=["']((?:assets|bilder|images|img|logos|media)\/[^"']+\.(?:png|jpe?g|svg|webp|gif|avif|mp4|webm))["']/gi)].map(m => m[1]);
  const missing = [...new Set(refs)].filter(r => !fs.existsSync(path.join(projectPath, r)));
  if (missing.length) console.warn(`   ⚠️  ${missing.length} referenzierte Bilddatei(en) FEHLEN: ${missing.join(", ")}`);

  let note = ok ? " ✅ vollständig" : " ⚠️ evtl. unvollständig — bitte prüfen";
  if (missing.length) note += `\n⚠️ Fehlende Bilder (Agent hat falsche Namen verwendet): ${missing.join(", ")} — vorhandene Assets: ${assets.join(", ") || "keine"}`;

  // Projekt + Vorschau im CRM anlegen (Bilder inline → Vorschau funktioniert auf dem Server)
  try {
    const selfContained = inlineAssets(html, projectPath);
    const res = await apiPost("/api/projects/from-website", { name: projectName, html: selfContained, status: "design" });
    if (res?.preview_url) {
      const url = `${CRM_URL}${res.preview_url}`;
      console.log(`   📋 Projekt im CRM angelegt · Vorschau: ${url}`);
      note += `\n📋 Im CRM als Projekt "${projectName}" angelegt → Projekte-Seite → "Website-Vorschau öffnen".\n🔗 Direkt: ${url}`;
    }
  } catch (e) { console.warn(`   ⚠️  Projekt-Anlage im CRM fehlgeschlagen: ${e.message}`); }

  return `📂 Projektordner: ${projectPath}\nDatei: index.html (${html.length} Zeichen)${note}\n\nÖffne die Datei im Browser zur Vorschau. Danach /kling-prompts für Video-Hintergründe aufrufen.`;
}

function openInVSCode(projectName, taskInput) {
  const safeName = projectName.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  const projectPath = path.join(PROJECTS_PATH, safeName);
  if (!fs.existsSync(projectPath)) fs.mkdirSync(projectPath, { recursive: true });
  fs.writeFileSync(path.join(projectPath, "CLAUDE.md"), `# ${projectName}\n\n## Aufgabe\n${taskInput}\n\n## Skills\n- /web-factory\n- /cinematic-web\n`);
  try { exec(`code "${projectPath}"`); console.log(`   📂 VS Code: ${projectPath}`); }
  catch { console.warn("   ⚠️  VS Code nicht gefunden:", projectPath); }
  return projectPath;
}

// ── N8N Automation triggern ───────────────────────────────────────────────────
async function triggerAutomation(automationId, payload) {
  if (!automationId) return;
  try {
    const res = await apiPost(`/api/automations/${automationId}/trigger`, payload);
    console.log(`   🔗 N8N Automation ausgelöst: ${res.automation || automationId} (${res.ok ? "✅" : "❌"})`);
  } catch (e) {
    console.warn(`   ⚠️  N8N Trigger fehlgeschlagen: ${e.message}`);
  }
}

// ── Agent-Chaining ────────────────────────────────────────────────────────────
async function chainNextAgent(nextAgentId, originalTask, output) {
  if (!nextAgentId) return;
  try {
    await apiPost("/api/agents/tasks", {
      agent_id: nextAgentId,
      input: `Vorherige Aufgabe:\n${originalTask.input}\n\nErgebnis:\n${output}\n\nBitte führe die nächste Aufgabe aus.`,
      title: `Chained: ${originalTask.title || "Task"}`,
      priority: originalTask.priority || 5,
      source: "scheduled",
    });
    console.log(`   🔄 Agent-Chaining: nächster Agent ${nextAgentId} eingeplant`);
  } catch (e) {
    console.warn(`   ⚠️  Agent-Chaining fehlgeschlagen: ${e.message}`);
  }
}

// ── Auto-Healing Watchdog ───────────────────────────────────────────────────
// Prüft den CRM extern; wenn 3× in Folge nicht erreichbar → Hetzner-Reset.
const HETZNER_TOKEN   = process.env.HETZNER_API_TOKEN;
const HETZNER_SERVER  = process.env.HETZNER_SERVER_ID || "129127144";
let healthFails = 0;
let lastResetAt = 0;

async function watchdog() {
  if (!HETZNER_TOKEN) return; // nur aktiv, wenn Token gesetzt
  let ok = false;
  try {
    const res = await fetch(`${CRM_URL}/login`, { signal: AbortSignal.timeout(15000) });
    ok = res.ok;
  } catch { ok = false; }

  if (ok) { if (healthFails > 0) console.log("   💚 CRM wieder erreichbar"); healthFails = 0; return; }

  healthFails++;
  console.warn(`   ⚠️  CRM nicht erreichbar (${healthFails}/3)`);
  // Nach 3 Fehlschlägen reseten, aber max. 1× pro 10 Min (Cooldown)
  if (healthFails >= 3 && Date.now() - lastResetAt > 600000) {
    lastResetAt = Date.now();
    healthFails = 0;
    console.error("   🔴 CRM down → Hetzner-Reset wird ausgelöst");
    try {
      await fetch(`https://api.hetzner.cloud/v1/servers/${HETZNER_SERVER}/actions/reset`, {
        method: "POST", headers: { Authorization: `Bearer ${HETZNER_TOKEN}` },
      });
      console.error("   ↻ Reset gesendet. Warte auf Boot…");
    } catch (e) { console.error("   Reset fehlgeschlagen:", e.message); }
  }
}

// ── Heartbeat ─────────────────────────────────────────────────────────────────
const os = require("os");
async function sendHeartbeat() {
  try {
    await apiPost("/api/runner/heartbeat", {
      hostname: os.hostname(),
      version: "1.0",
      poll_interval_s: POLL_INTERVAL / 1000,
    });
  } catch { /* still verarbeiten, Heartbeat ist best-effort */ }
}

// ── Task-Processing ───────────────────────────────────────────────────────────
async function processTasks() {
  await sendHeartbeat();

  let tasks;
  try {
    const res = await fetch(`${CRM_URL}/api/agents/tasks?status=pending`, { headers: authHeader });
    tasks = await res.json();
  } catch (e) {
    console.error("   Verbindungsfehler:", e.message);
    return;
  }

  if (!Array.isArray(tasks) || tasks.length === 0) return;
  console.log(`\n📋 ${tasks.length} Task(s) in der Queue`);

  for (const task of tasks) {
    // Atomar beanspruchen — bei mehreren Runnern gewinnt genau einer pro Task
    const claim = await apiPost(`/api/agents/tasks/${task.id}/claim`, { worker: os.hostname() });
    if (!claim?.claimed) {
      console.log(`   ⏭️  [${task.id.slice(0, 8)}] bereits von anderem Runner übernommen — überspringe`);
      continue;
    }
    console.log(`\n▶ [${task.id.slice(0, 8)}] ${task.title || task.input.slice(0, 60)}`);

    try {
      // Agent-Profil laden
      let agentPrompt = "Du bist ein hilfreicher AI-Agent der Morio Solutions Agentur.";
      let agentType   = "custom";
      if (task.agent_id) {
        try {
          const agentRes = await fetch(`${CRM_URL}/api/agents/${task.agent_id}`, { headers: authHeader });
          if (agentRes.ok) {
            const agent = await agentRes.json();
            if (agent.prompt_template) agentPrompt = agent.prompt_template;
            if (agent.type) agentType = agent.type;
          }
        } catch {}
      }

      // Gehirn-Kontext aufbauen: relevante Skills + Wiki
      const brainContext = buildBrainContext(task.input, agentType);
      const contextCount = brainContext ? brainContext.match(/\*\*/g)?.length / 2 || 1 : 0;
      if (brainContext) console.log(`   🧠 ${Math.round(contextCount)} Wissensquellen gefunden`);

      // System-Prompt zusammensetzen
      let systemPrompt = agentPrompt;
      if (brainContext) {
        systemPrompt = `${agentPrompt}\n\n---\n\n${brainContext}`;
      }

      let output;
      if (isWebsiteTask(task.input)) {
        output = await generateWebsite(task);
      } else {
        output = await runWithClaude(task.input, systemPrompt);
      }

      await apiPut(`/api/agents/tasks/${task.id}`, { status: "completed", output });
      console.log(`   ✅ Fertig (${output.length} Zeichen)`);

      // N8N Automation nach Abschluss triggern
      if (task.n8n_automation_id) {
        await triggerAutomation(task.n8n_automation_id, {
          task_id: task.id, task_title: task.title, agent_id: task.agent_id,
          output_preview: output.slice(0, 500),
        });
      }

      // Nächsten Agent in Chain starten
      if (task.next_agent_id) {
        await chainNextAgent(task.next_agent_id, task, output);
      }

    } catch (err) {
      await apiPut(`/api/agents/tasks/${task.id}`, { status: "failed", error: err.message });
      console.error(`   ❌ Fehler: ${err.message}`);
    }
  }
}

// ── Hauptschleife ─────────────────────────────────────────────────────────────
async function main() {
  console.log("╔═══════════════════════════════════════════════════╗");
  console.log("║   Morio Solutions AI — VS Code Bridge Runner  🧠  ║");
  console.log("╚═══════════════════════════════════════════════════╝");
  console.log(`CRM:      ${CRM_URL}`);
  console.log(`Map-Repo: ${MAP_BASE}`);
  console.log(`Wiki:     ${fs.existsSync(WIKI_PATH) ? `✅ ${WIKI_PATH}` : `⚠️ nicht gefunden`}`);
  console.log(`Claude:   ${ANTHROPIC_KEY ? "✅ API Key vorhanden" : "❌ kein API Key!"}`);
  console.log("");

  await syncSkills();
  await syncWiki();

  if (SYNC_ONLY) {
    console.log("\n✅ Sync abgeschlossen. Beende."); process.exit(0);
  }

  console.log(`\n🔄 Polling alle ${POLL_INTERVAL / 1000}s... (Ctrl+C zum Beenden)`);
  console.log(`🛡️  Auto-Healing Watchdog: ${HETZNER_TOKEN ? "aktiv" : "inaktiv (kein HETZNER_API_TOKEN)"}\n`);
  await processTasks();
  setInterval(processTasks, POLL_INTERVAL);
  // Watchdog alle 60s (unabhängig vom Task-Polling)
  setInterval(watchdog, 60000);
}

main().catch(console.error);

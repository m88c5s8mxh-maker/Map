---
session_id: 7a28d146-acb8-4e9f-a56f-be6d8bfe4338
title: "Claude Flair Übersicht und Funktionen"
date: 2026-08-31
cwd: /Users/tyrone
duration_min: 1260
score: 29
tier: 1
tools: [ToolSearchx1, Bashx2, WebSearchx3, WebFetchx3]
tags: [session, claude-code]
---

# Claude Flair Übersicht und Funktionen

> Session vom 2026-08-31 · 1260 Min · Arbeitsverzeichnis `/Users/tyrone`

## Verlauf

### 👤 User

sag mir alles über claude flair was ich wissen muss

> 🔧 ToolSearch, Bash×2, WebSearch×3, WebFetch×3

### 🤖 Claude

## Zuerst: den Namen klären

**„Claude Flair" gibt es nicht** als Produkt. Es existiert eine Domain `claudeflair.com` in Suchindizes ("spec → Cloudflare Worker"), aber die löst nicht mehr auf (DNS tot) – also entweder aufgegeben oder nie gestartet.

Was du fast sicher meinst: **Claude Flow**. Und das Wichtigste daran zuerst: **Claude Flow heißt seit Anfang 2026 „Ruflo"**.

---

## Claude Flow / Ruflo – was es ist

Ein Open-Source **Agent-Orchestrierungs-Layer über Claude Code** von Reuven Cohen (rUv). Statt einer Claude-Session, die sequenziell arbeitet, startet es einen „Swarm" aus vielen spezialisierten Agents, die parallel an einer Codebase arbeiten.

- Repo: `ruvnet/claude-flow` → jetzt Ruflo, ~70k Stars, MIT-Lizenz
- npm: `ruflo` **und** `claude-flow` zeigen beide auf **v3.38.20** (letztes Update 24.08.2026) – der alte Paketname wird also noch mitgepflegt
- Web-UI (Beta): `flo.ruv.io`

## Wie es funktioniert

| Konzept | Was es macht |
|---|---|
| **Hive-Mind / Queen-Worker** | Eine „Queen" zerlegt die Aufgabe und verteilt sie an Sub-Agents (coder, tester, reviewer, architect, security …), 100+ Agent-Typen |
| **Swarm-Konsens** | Raft / Byzantine-Consensus, damit parallele Agents sich nicht widersprechen |
| **Memory** | AgentDB, Vektor-DB mit HNSW-Index – persistentes Gedächtnis über Sessions hinweg |
| **MCP-Tools** | ~210 Tools, die per MCP in Claude Code eingehängt werden |
| **Hooks** | 27 Routing-Punkte, an denen Claude Code automatisch Agents im Hintergrund triggert |
| **SPARC** | Erzwungene Methodik: Specification → Pseudocode → Architecture → Refinement → Completion |
| **v3-Neuheiten** | Rust/WASM-Rewrite, SONA Self-Learning, ReasoningBank (lernt aus erfolgreichen Läufen) |

## Installation

```bash
npx ruflo@latest init
# oder
npm install -g ruflo@latest
```

Braucht Node.js. Läuft auf macOS, Linux, WSL, Windows PowerShell.

---

## Die ehrliche Einschätzung (das, was du wirklich wissen musst)

**Die Marketing-Zahlen sind Marketing.** „84.8% SWE-Bench", „352x schneller", „75% API-Kosten gespart" – das sind Selbstangaben des Projekts, nicht unabhängig verifiziert. Behandle sie als Werbung.

**Was in der Praxis stimmt:**
- Es ist **kein „install and go"**. Hoher Setup- und Konfigurationsaufwand.
- **SPARC ist starr.** Der erzwungene Phasenablauf ist bei echter Arbeit oft mehr Reibung als Hilfe.
- **Massiver Overkill** für alles unter „große Migration / Audit über die ganze Codebase".
- **Token-Kosten:** Dutzende parallele Agents verbrennen dein Limit sehr schnell. Auf Max-Plan spürbar, auf Pro schmerzhaft.
- Der Trend geht ohnehin weg davon: von starren Phasen hin zu komponierbaren Skills.

**Für dich konkret:** Du hast in deinem Claude Code Setup schon Skills, Subagents (`morio-api`, `marketing-*` etc.) und das eingebaute Workflow-Tool für Fan-out mit mehreren Agents. Das deckt ~80% von dem ab, was Ruflo verspricht – ohne zusätzliche Abstraktionsschicht, ohne 210 fremde MCP-Tools in deinem Kontext und ohne dass du dein Token-Budge

*[gekürzt]*

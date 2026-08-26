#!/usr/bin/env python3
"""Claude-Code-Transkript (JSONL) -> lesbares Markdown + Wichtigkeits-Score.

Aufruf:  session_extract.py <transcript.jsonl> [--out <datei.md>]
Ausgabe: JSON-Zusammenfassung auf stdout (score, tier, title, ...)

Tiers:
  0 = verwerfen            (Trivial-Session, nichts wird geschrieben)
  1 = nur Rohmitschnitt    (raw/sessions/, kein Wiki-Eintrag)
  2 = Rohmitschnitt + Wiki (LLM-Kondensation laeuft)
"""
import json, re, sys, os
from datetime import datetime, timezone

TIER1_MIN = 15   # ab hier Rohmitschnitt
TIER2_MIN = 45   # ab hier Wiki-Integration (LLM hat Veto)

WRITE_TOOLS = {"Write", "Edit", "MultiEdit", "NotebookEdit"}
NOISE_RE = re.compile(
    r"<system-reminder>.*?</system-reminder>"
    r"|<ide_selection>.*?</ide_selection>"
    r"|<local-command-stdout>.*?</local-command-stdout>"
    r"|<command-(?:name|message|args)>.*?</command-(?:name|message|args)>",
    re.S,
)
KEYWORDS = [
    # Entscheidungen / Wissen
    "entschieden", "entscheidung", "wir machen", "stattdessen", "warum",
    "architektur", "konzept", "plan", "strategie", "loesung", "lösung",
    "workflow", "setup", "konfiguration", "eingerichtet", "gebaut",
    "problem", "bug", "fehler", "gefixt", "behoben", "ursache",
    "erkenntnis", "wichtig", "merken", "regel", "prinzip",
    "decided", "decision", "instead", "because", "architecture",
    "concept", "solution", "root cause", "insight", "takeaway",
]


def blocks(msg):
    c = (msg or {}).get("content")
    if isinstance(c, str):
        return [{"type": "text", "text": c}]
    return c if isinstance(c, list) else []


def clean(txt):
    return NOISE_RE.sub("", txt or "").strip()


def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "no transcript path"})); return 2
    path = sys.argv[1]
    out_path = None
    if "--out" in sys.argv:
        out_path = sys.argv[sys.argv.index("--out") + 1]
    if not os.path.isfile(path):
        print(json.dumps({"error": f"not found: {path}"})); return 2

    title, session_id, cwd = None, None, None
    turns = []            # (rolle, text) in Reihenfolge
    tool_counts, files_touched = {}, []
    writes = 0
    prose_chars = 0
    user_turns = 0
    stamps = []

    with open(path, encoding="utf-8", errors="replace") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            try:
                e = json.loads(line)
            except Exception:
                continue
            session_id = e.get("sessionId") or session_id
            cwd = e.get("cwd") or cwd
            if e.get("timestamp"):
                stamps.append(e["timestamp"])
            t = e.get("type")

            if t == "ai-title" and e.get("aiTitle"):
                title = e["aiTitle"]

            elif t == "user":
                parts = []
                for b in blocks(e.get("message")):
                    if b.get("type") == "text":
                        c = clean(b.get("text"))
                        if c:
                            parts.append(c)
                if parts:
                    user_turns += 1
                    turns.append(("user", "\n\n".join(parts)))

            elif t == "assistant":
                parts, tools_here = [], []
                for b in blocks(e.get("message")):
                    bt = b.get("type")
                    if bt == "text":
                        c = clean(b.get("text"))
                        if c:
                            parts.append(c); prose_chars += len(c)
                    elif bt == "tool_use":
                        name = b.get("name", "?")
                        tool_counts[name] = tool_counts.get(name, 0) + 1
                        tools_here.append(name)
                        if name in WRITE_TOOLS:
                            writes += 1
                        fp = (b.get("input") or {}).get("file_path")
                        if fp and fp not in files_touched:
                            files_touched.append(fp)
                if parts:
                    turns.append(("assistant", "\n\n".join(parts)))
                if tools_here:
                    turns.append(("tools", ", ".join(tools_here)))

    corpus = " ".join(x[1] for x in turns).lower()
    kw_hits = sum(1 for k in KEYWORDS if k in corpus)

    # Dialog ist der Haupttreiber: Wissen entsteht im Hin und Her, nicht durch
    # Schreibvolumen. Ein Einzelauftrag ("oeffne X, mach Y") kann 13 Dateien
    # aendern und traegt trotzdem null wiederverwendbares Wissen.
    score = (
        min(user_turns, 10) * 7
        + min(writes, 8) * 3
        + min(prose_chars // 2000, 8) * 2
        + min(kw_hits, 10) * 2
        + min(len(tool_counts), 6)
    )
    tier = 2 if score >= TIER2_MIN else (1 if score >= TIER1_MIN else 0)

    # Deckel: mechanische Ausfuehrung kommt nie ins Wiki.
    cap_reason = ""
    if user_turns <= 1:
        if tier > 1:
            cap_reason = "Einzelauftrag ohne Dialog"
        tier = min(tier, 1)
    elif user_turns == 2 and writes == 0 and kw_hits < 8:
        if tier > 1:
            cap_reason = "kaum Dialog, keine Aenderungen"
        tier = min(tier, 1)

    stamps.sort()
    started = stamps[0] if stamps else datetime.now(timezone.utc).isoformat()
    date = started[:10]
    dur = ""
    if len(stamps) > 1:
        try:
            a = datetime.fromisoformat(stamps[0].replace("Z", "+00:00"))
            b = datetime.fromisoformat(stamps[-1].replace("Z", "+00:00"))
            dur = str(max(1, round((b - a).total_seconds() / 60)))
        except Exception:
            pass

    if not title:
        first = next((x[1] for x in turns if x[0] == "user"), "Session")
        title = " ".join(first.split())[:70] or "Session"

    result = {
        "session_id": session_id or "unknown",
        "title": title,
        "date": date,
        "cwd": cwd or "",
        "score": score,
        "tier": tier,
        "user_turns": user_turns,
        "writes": writes,
        "prose_chars": prose_chars,
        "keyword_hits": kw_hits,
        "tools": tool_counts,
        "files_touched": files_touched[:40],
        "duration_min": dur,
        "cap_reason": cap_reason,
    }

    if out_path and tier >= 1:
        safe = re.sub(r"[^\w\s-]", "", title).strip()[:60] or "session"
        safe = re.sub(r"\s+", "-", safe).lower()
        out_path = out_path.replace("{date}", date).replace("{slug}", safe)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        L = []
        L.append("---")
        L.append(f"session_id: {result['session_id']}")
        L.append(f'title: "{title.replace(chr(34), chr(39))}"')
        L.append(f"date: {date}")
        L.append(f"cwd: {result['cwd']}")
        L.append(f"duration_min: {dur}")
        L.append(f"score: {score}")
        L.append(f"tier: {tier}")
        L.append("tools: [" + ", ".join(f"{k}x{v}" for k, v in tool_counts.items()) + "]")
        L.append("tags: [session, claude-code]")
        L.append("---\n")
        L.append(f"# {title}\n")
        L.append(f"> Session vom {date} · {dur or '?'} Min · Arbeitsverzeichnis `{result['cwd'] or '?'}`\n")
        if files_touched:
            L.append("**Berührte Dateien:** " + ", ".join(f"`{p}`" for p in files_touched[:15]) + "\n")
        L.append("## Verlauf\n")
        # Aufeinanderfolgende Tool-Laeufe zu einer Zeile zusammenfassen,
        # sonst besteht der Mitschnitt zur Haelfte aus "> Bash"-Zeilen.
        merged = []
        for role, text in turns:
            if role == "tools" and merged and merged[-1][0] == "tools":
                merged[-1][1].extend(t.strip() for t in text.split(","))
            elif role == "tools":
                merged.append(["tools", [t.strip() for t in text.split(",")]])
            else:
                merged.append([role, text])
        for role, payload in merged:
            if role == "user":
                L.append("### 👤 User\n")
                L.append(payload[:3000] + ("\n\n*[gekürzt]*" if len(payload) > 3000 else "") + "\n")
            elif role == "assistant":
                L.append("### 🤖 Claude\n")
                L.append(payload[:3000] + ("\n\n*[gekürzt]*" if len(payload) > 3000 else "") + "\n")
            else:
                agg = {}
                for n in payload:
                    agg[n] = agg.get(n, 0) + 1
                L.append("> 🔧 " + ", ".join(
                    f"{k}×{v}" if v > 1 else k for k, v in agg.items()) + "\n")
        body = "\n".join(L)
        if len(body) > 120_000:
            body = body[:120_000] + "\n\n*[Mitschnitt bei 120k Zeichen abgeschnitten]*\n"
        with open(out_path, "w", encoding="utf-8") as fh:
            fh.write(body)
        result["raw_file"] = out_path

    print(json.dumps(result, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())

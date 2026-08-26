# Map — Claude Code Konfiguration

## Graphify Map
Dieser Repo hat einen Wissens-Graph unter `graphify-out/`.

**Regeln:**
- Vor Architektur- oder Inhaltsfragen: `graphify-out/index.md` lesen
- Community-Übersichten: `graphify-out/Community_*.md`
- Nach Änderungen an Dateien in `raw/` oder `wiki/`: Map neu bauen

**Map neu bauen (lokal):**
```bash
graphify . --update --no-viz
```

## Obsidian Wiki
Das Wiki liegt unter `wiki/`. Rohdaten unter `raw/`.

**Schema:** Immer zuerst `WIKI.md` lesen bevor Wiki-Seiten bearbeitet werden.

**Verfügbare Befehle:**
- `/obsidian-wiki ingest <datei>` — Quelle einlesen & Wiki aktualisieren
- `/obsidian-wiki query "<frage>"` — Wiki abfragen
- `/obsidian-wiki lint` — Lücken & Widersprüche finden
- `/obsidian-wiki status` — Übersicht

## Graphify Map Befehle
- `/graphify query "<frage>"` — Graph abfragen
- `/graphify path "<A>" "<B>"` — Verbindung zwischen Themen finden
- `/graphify .` — Map komplett neu bauen

## Session-Erfassung (automatisch)

Jede beendete Claude-Code-Session wird per `SessionEnd`-Hook bewertet und bei
ausreichendem Wissenswert ins Wiki übernommen. Zwei Tore verhindern Wiki-Müll:

| Tor | Wer | Wirkung |
|-----|-----|---------|
| Heuristik (`session_extract.py`) | kostenlos, lokal | Tier 0 verwerfen · Tier 1 nur `raw/sessions/` · Tier 2 weiter |
| LLM-Veto (`session-integrate.sh`) | `claude -p` | darf trotz Tier 2 „SKIP" sagen, dann nur Log-Zeile |

Der Score wird vom **Dialog** dominiert (User-Turns × 7), nicht vom
Schreibvolumen — Wissen entsteht im Hin und Her. Einzelaufträge ohne Dialog
sind auf Tier 1 gedeckelt, egal wie viele Dateien sie ändern.
Schwellen: Tier 1 ab 15, Tier 2 ab 45.

**Dateien:**
- `scripts/session_extract.py` — Transkript → Markdown + Score
- `scripts/session-capture.sh` — Hook-Einstieg, Dedupe, Tier-Weiche
- `scripts/session-integrate.sh` — Kondensation ins Wiki (`NO_PUSH=1` für Tests)
- `scripts/map-git-sync.sh` — Vault nach GitHub sichern
- `raw/sessions/.captured` — Ledger verarbeiteter Session-IDs
- `scripts/.session-capture.log` — Protokoll aller Läufe

**Manuell:** `/session-save` · `--dry` · `--force` · `backlog` · `status`

## Context Navigation
1. Immer zuerst `graphify-out/index.md` lesen
2. Rohdateien nur lesen wenn explizit gefragt
3. Nach Code-Änderungen Map aktualisieren: `graphify . --update --no-viz`

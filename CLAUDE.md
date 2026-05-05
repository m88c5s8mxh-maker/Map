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

## Context Navigation
1. Immer zuerst `graphify-out/index.md` lesen
2. Rohdateien nur lesen wenn explizit gefragt
3. Nach Code-Änderungen Map aktualisieren: `graphify . --update --no-viz`

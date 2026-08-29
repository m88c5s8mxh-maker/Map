---
tags: [entity, skill, knowledge-graph, tool]
sources: [raw/skills/graphify.md, raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]
trigger: /graphify
updated: 2026-04-17
---

# graphify

**Trigger:** `/graphify`  
**Zweck:** Beliebige Dateien (Code, Docs, PDFs, Bilder) → Knowledge Graph → HTML-Visualisierung + JSON + GRAPH_REPORT.md

## Übersicht
graphify wandelt einen ganzen Ordner in einen navigierbaren Wissensgraphen um. Es erkennt Community-Strukturen (Cluster zusammengehöriger Konzepte), erstellt einen ehrlichen Audit-Trail und liefert drei Ausgaben: interaktives HTML, GraphRAG-fähiges JSON, Klartextbericht.

## Key Commands
```bash
/graphify                          # aktuelles Verzeichnis
/graphify <path> --mode deep       # tiefere Extraktion, mehr INFERRED-Kanten
/graphify <path> --update          # inkrementell, nur neue/geänderte Dateien
/graphify <path> --directed        # gerichteter Graph
/graphify <path> --watch           # Auto-Rebuild bei Code-Änderungen
/graphify <path> --neo4j           # Cypher-Export für Neo4j
/graphify <path> --mcp             # MCP stdio server für Agent-Zugriff
```

## Ausgaben
| Datei | Inhalt |
|-------|--------|
| `graphify-out/index.md` | Token-sparende Navigationskarte (primärer Einstiegspunkt) |
| `graphify-out/graph.json` | GraphRAG-fähiges JSON (Nodes, Edges, Communities) |
| `graphify-out/GRAPH_REPORT.md` | Klartextbericht: God Nodes, Communities, Statistiken |
| `graphify-out/graph.html` | Interaktive HTML-Visualisierung |

## Token-Budget Prinzip
Map lesen (~280 Token) statt alle Dateien (~20.000 Token) → 71.5x Reduktion.

## Git Hooks
Nach `setup.sh` werden post-commit und post-checkout Hooks installiert — der Graph wird automatisch nach jedem Commit neu gebaut.

> ⚠️ WIDERSPRUCH mit der Befehlsliste oben: ein Aufruf `graphify . --update` **existiert nicht**.
> `graphify --help` listet die echten Befehle (`query`, `path`, `explain`, `hook`, …). Der Graph
> wird ausschließlich über den `post-commit`-Hook neu gebaut (`graphify hook status` zeigt ihn an);
> ein expliziter Aufruf in einem Automatisierungsskript war falsch **und** unnötig. `Map/CLAUDE.md`
> wurde entsprechend korrigiert. #prüfen — ob die übrigen Flags aus `raw/skills/graphify.md`
> (`--mode deep`, `--watch`, `--neo4j`, `--mcp`) in der installierten Version noch stimmen, wurde
> nicht geprüft.
> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

Nebenwirkung beim Arbeiten mit Git: `post-commit` und `post-checkout` bauen den Report bei jedem
Commit bzw. Branch-Wechsel neu und machen den Arbeitsbaum dirty — das kann einen Merge blockieren.
Siehe [[stiller-sync-ausfall]].

## Beziehungen
- [[llm-wiki-pattern]] — komplementäres Wissenssystem
- [[obsidian-wiki]] — nutzt graphify-out als Einstiegspunkt
- [[claude-skills-system]] — graphify ist ein Top-Skill für Codebase-Navigation

## Quellen
> [Source: raw/skills/graphify.md]

## Verbindungen (Graph-Extraktion)
- [[Context Navigation Rules]] - `depends_on` [EXTRACTED]
- [[global-CLAUDE]] - `defines_trigger_for` [EXTRACTED]
- [[morioCRM-CLAUDE]] - `integrates_with` [EXTRACTED]

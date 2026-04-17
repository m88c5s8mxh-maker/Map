---
tags: [concept, knowledge-management, pattern]
sources: [raw/skills/obsidian-wiki.md]
updated: 2026-04-17
---

# LLM Wiki Pattern

## Definition
Ein von Andrej Karpathy beschriebenes Muster für persistente, wachsende Wissensdatenbanken: Der LLM übernimmt die gesamte Buchführung (Querverweise, Zusammenfassungen, Widerspruchs-Flags), während der Nutzer Quellen einbringt und Fragen stellt.

## Kernprinzip
Statt bei jeder Frage Dokumente neu zu durchsuchen (RAG-Ansatz), wird Wissen **einmalig extrahiert und dauerhaft integriert**. Das Wiki wächst und verdichtet sich mit jeder neuen Quelle.

## Architektur
```
raw/    ← unveränderliche Quellen (Nutzer legt ab, LLM liest nur)
wiki/   ← LLM-generierte Seiten (LLM besitzt diesen Bereich vollständig)
  concept/    → Ideen und Begriffe
  entity/     → Personen, Projekte, Tools
  synthesis/  → Queranalysen
  index.md    → Inhaltsverzeichnis
  log.md      → Chronologisches Protokoll
WIKI.md ← Schema-Dokument (Konventionen, Workflows)
```

## Vorteile gegenüber RAG
| RAG | LLM Wiki |
|-----|----------|
| Wissen temporär | Wissen permanent |
| Keine Querverweise | Explizite `[[Links]]` |
| Keine Synthese | Synthesis-Seiten |
| Maintenance-Last beim Nutzer | LLM übernimmt Pflege |

## Werkzeuge
- **Obsidian** als Browser für `wiki/` (Graph View, Dataview, Backlinks)
- **[[obsidian-wiki]]** als Claude-Skill für Ingest, Query, Lint
- **Git** für Versionierung der Wiki-Änderungen

## Verbindungen
- [[obsidian-wiki]] — Implementierung dieses Patterns als Claude-Skill
- [[graphify]] — ergänzendes Konzept: strukturierter Knowledge Graph
- [[memory-management]] — verwandtes Konzept für Session-übergreifenden Kontext


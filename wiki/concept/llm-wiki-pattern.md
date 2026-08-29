---
tags: [concept, knowledge-management, pattern]
sources: [raw/skills/obsidian-wiki.md, raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]
updated: 2026-08-29
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

## Relevanzschwelle: der Preis der Automatisierung

Sobald Quellen **automatisch** einfließen (etwa jede beendete Claude-Session), kippt das Muster
ohne Filter: 90 % einer Session ist Tool-Rauschen und Zwischenschritte, und das Wiki wird
innerhalb weniger Wochen zur Müllhalde.

Der Ausweg liegt in der Trennung, die das Muster ohnehin vorgibt: **`raw/` behält alles, `wiki/`
bleibt kuratiert.** Rohmitschnitt darf vollautomatisch entstehen, die Wiki-Integration nur über
einer Relevanzschwelle — also nur bei Sessions mit echten Entscheidungen oder neuem Wissen.

Zwei Erkenntnisse aus der Umsetzung in [[session-erfassung-map]]:

- **Der Wert einer Quelle bemisst sich am Dialog, nicht am Schreibvolumen.** Ein Score, der
  Datei-Änderungen belohnt, lässt mechanische Einzelaufträge durch (27 von 46 Sessions).
- **Zwei Tore sind besser als eines:** eine kostenlose lokale Heuristik als Vorfilter, dahinter
  ein LLM mit ausdrücklichem Veto-Recht. Das teure Urteil trifft nur, was die Heuristik durchlässt.

Bei mehreren hundert bestehenden Seiten wird außerdem die **Duplikat-Vermeidung** zum wichtigsten
Teil des Ingest-Prompts — nicht die Extraktion.

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

## Verbindungen
- [[obsidian-wiki]] — Implementierung dieses Patterns als Claude-Skill
- [[graphify]] — ergänzendes Konzept: strukturierter Knowledge Graph
- [[memory-management]] — verwandtes Konzept für Session-übergreifenden Kontext
- [[session-erfassung-map]] — automatische Quellenzufuhr mit Relevanzschwelle


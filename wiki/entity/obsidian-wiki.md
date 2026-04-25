---
tags: [entity, skill, knowledge-management]
sources: [raw/skills/obsidian-wiki.md]
trigger: /obsidian-wiki
updated: 2026-04-24
---

# obsidian-wiki

**Trigger:** `/obsidian-wiki`  
**Kategorie:** [[knowledge-productivity-skills]]  
**Vollständige Seite:** [[obsidian-wiki-skill]]

## Zweck
LLM-gepflegte persistente Wissensdatenbank — Quellen einlesen, abfragen, Gesundheitscheck. Basiert auf Karpathy's LLM-Wiki-Pattern: raw/ unveränderlich, wiki/ LLM-owned.

## Befehle
| Befehl | Funktion |
|--------|---------|
| `/obsidian-wiki setup` | Wiki-Struktur initialisieren |
| `/obsidian-wiki ingest <datei>` | Quelle einlesen + Wiki aktualisieren |
| `/obsidian-wiki ingest --batch` | Alle neuen Dateien in raw/ verarbeiten |
| `/obsidian-wiki query "<frage>"` | Aus Wiki beantworten |
| `/obsidian-wiki lint` | Gesundheitscheck: Waisen, Widersprüche, Lücken |
| `/obsidian-wiki status` | Statistiken: Seiten, Quellen, Aktivität |

## Beziehungen
- [[llm-wiki-pattern]] — theoretische Grundlage
- [[graphify]] — für Code/Dateien besser geeignet
- [[memory-management]] — ergänzend
- [[map-sync]] — Sync-Mechanismus

## Quellen
> [Source: raw/skills/obsidian-wiki.md]

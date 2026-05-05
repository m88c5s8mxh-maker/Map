---
tags: [entity, skill, knowledge-management]
sources: [raw/skills/obsidian-wiki.md]
trigger: /obsidian-wiki
updated: 2026-04-17
---

# obsidian-wiki (Skill)

**Trigger:** `/obsidian-wiki`  
**Zweck:** LLM-gepflegte persistente Wissensdatenbank — Quellen einlesen, abfragen, Gesundheitscheck

## Befehle
```
/obsidian-wiki setup              # Wiki-Struktur initialisieren
/obsidian-wiki ingest <datei>     # Quelle einlesen und Wiki aktualisieren
/obsidian-wiki ingest --batch     # Alle neuen Dateien in raw/ verarbeiten
/obsidian-wiki query "<frage>"    # Aus Wiki beantworten, Antwort speichern
/obsidian-wiki lint               # Gesundheitscheck: Waisen, Widersprüche, Lücken
/obsidian-wiki status             # Statistiken: Seiten, Quellen, letzte Aktivität
```

## Ingest-Workflow (5 Schritte)
1. Quelle vollständig lesen
2. `wiki/index.md` lesen → relevante bestehende Seiten identifizieren
3. Bestehende Seiten lesen (3–7 relevanteste)
4. Neue Seiten erstellen / bestehende erweitern (5–15 Seiten pro Ingest)
5. `index.md` + `log.md` aktualisieren

## Besonderheit: Compounding Knowledge
Jede neue Quelle reichert bestehende Seiten an. Querverweise existieren. Widersprüche werden geflaggt. Das Wiki wird mit jeder Quelle wertvoller — nicht nur größer.

## Beziehungen
- [[llm-wiki-pattern]] — theoretische Grundlage
- [[graphify]] — für Code/Dateien der bessere Einstieg
- [[memory-management]] — ergänzend für Session-Kontext

## Quellen
> [Source: raw/skills/obsidian-wiki.md]

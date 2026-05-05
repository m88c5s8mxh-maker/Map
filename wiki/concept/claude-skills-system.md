---
tags: [concept, system, claude-code]
sources: [raw/config/global-CLAUDE.md, raw/skills/skill-creator.md]
updated: 2026-04-17
---

# Claude Skills System

## Definition
Das Claude Skills System ist ein Erweiterungs-Framework für Claude Code CLI. Skills sind strukturierte Markdown-Prompts (SKILL.md), die komplexe, mehrstufige Arbeitsabläufe kapseln und per Slash-Command aufrufbar sind.

## Struktur eines Skills
```
~/.claude/skills/<name>/SKILL.md
```
Jede SKILL.md enthält:
- **YAML Frontmatter**: `name`, `description`, `trigger`, `argument-hint`
- **Zweck & Kontext**: Wann und warum nutzen
- **Usage**: Befehlsbeispiele
- **Workflow**: Schritt-für-Schritt was der LLM tun soll

## Trigger-Mechanismus
Skills werden via `/skill-name` aufgerufen. Claude Code erkennt den Slash-Command und lädt die SKILL.md als Kontext. Das `Skill`-Tool in der Antwort führt die Aktivierung durch.

## Kategorien (131 Skills)
| Kategorie | Anzahl | Beispiele |
|-----------|--------|-----------|
| Sales & CRM | ~12 | [[pipeline-review]], [[forecast]], [[prospect]] |
| Daten & Analytik | ~8 | [[analyze]], [[explore-data]], [[statistical-analysis]] |
| Finance | ~7 | [[journal-entry]], [[close-management]], [[variance-analysis]] |
| Engineering | ~9 | [[code-review]], [[debug]], [[system-design]] |
| Marketing | ~8 | [[campaign-plan]], [[email-sequence]], [[seo-audit]] |
| Design & UX | ~8 | [[ux-design]], [[design-critique]], [[canvas-design]] |
| HR & People | ~8 | [[recruiting-pipeline]], [[performance-review]], [[comp-analysis]] |
| Wissen | ~6 | [[graphify]], [[obsidian-wiki]], [[knowledge-synthesis]] |
| Produktivität | ~8 | [[memory-management]], [[skill-creator]], [[schedule]] |
| Kommunikation | ~5 | [[stakeholder-update]], [[standup]], [[documentation]] |
| Dokumente | ~4 | [[pdf]], [[docx]], [[pptx]], [[xlsx]] |

## Key Properties
- Skills laufen vollständig im LLM-Kontext — kein separater Code
- Jeder Skill enthält seinen eigenen vollständigen Workflow
- Skills können andere Skills referenzieren (z.B. [[graphify]] nach Code-Änderungen)
- `skill-creator` kann neue Skills erstellen und bestehende optimieren

## Verbindungen
- [[graphify]] — baut Knowledge Graphs aus Skills und Dateien
- [[obsidian-wiki]] — nutzt dieses Wiki-System für Wissensaufbau
- [[memory-management]] — persistiert Kontext zwischen Sessions
- [[skill-creator]] — Werkzeug zur Erstellung neuer Skills

## Offene Fragen
- Wie werden Skills zwischen Nutzern geteilt/synchronisiert?
- Gibt es ein zentrales Skill-Repository?

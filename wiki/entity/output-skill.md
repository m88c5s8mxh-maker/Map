---
tags: [entity, skill, productivity]
sources: [raw/skills/output-skill/SKILL.md]
trigger: /output-skill
updated: 2026-04-24
---

# output-skill

**Trigger:** `/output-skill`  
**Kategorie:** [[knowledge-productivity-skills]]

## Zweck
Full Output Enforcement — überschreibt Standard-LLM-Truncation-Verhalten. Erzwingt vollständige Code-Generierung, verbietet Placeholder-Patterns und handhabt Token-Limit-Splits sauber.

## Wann nutzen
- Aufgaben die exhaustiven, vollständigen Output erfordern
- Code-Generierung die kein "// ... rest of code here" erlaubt
- Wenn Claude typischerweise abschneidet oder kürzt

## Merkmale
- Überschreibt RLHF-Brevity-Bias
- Verbietet Placeholder-Patterns (TODO, ...)
- Handhabt Token-Limit-Splits sauber
- Erzwingt vollständige, unabgekürzte Ausgabe

## Beziehungen
- [[claude-efficiency]] — verwandt (Context-Effizienz)
- [[claude-max-effort]] — verwandt (Effort-Enforcement)
- [[knowledge-productivity-skills]] — Kategorie

## Quellen
> [Source: raw/skills/output-skill/SKILL.md]

---
tags: [entity, skill, sales-crm]
sources: [raw/skills/account-research.md]
trigger: /account-research
updated: 2026-04-17
---

# account-research

**Trigger:** `/account-research`  
**Argument:** `Firmenname`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Firma über Common Room Daten recherchieren.

## Wann nutzen
Vollständiger Account-Überblick, gezielte Feldfragen, CRM-Signale

## Quellen
> [Source: raw/skills/account-research.md]

## Verbindungen (Graph-Extraktion)
- [[Common Room]] - `uses_tool` [EXTRACTED]
- [[call-prep]] - `depends_on` [EXTRACTED]
- [[global-CLAUDE]] - `registers_skill` [EXTRACTED]

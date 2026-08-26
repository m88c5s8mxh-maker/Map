---
tags: [entity, skill, sales-crm]
sources: [raw/skills/contact-research.md]
trigger: /contact-research
updated: 2026-04-17
---

# contact-research

**Trigger:** `/contact-research`  
**Argument:** `Name, E-Mail oder Social Handle`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Einzelperson über Common Room Daten recherchieren.

## Wann nutzen
Aktivitätshistorie, Spark-Scores, Website-Visits, CRM-Felder abrufen

## Quellen
> [Source: raw/skills/contact-research.md]

## Verbindungen (Graph-Extraktion)
- [[Common Room]] - `uses_connector` [EXTRACTED]
- [[Contact Profile]] - `produces` [EXTRACTED]
- [[Persona Classification]] - `produces` [EXTRACTED]
- [[Sales Enablement]] - `belongs_to` [EXTRACTED]
- [[Sales Intelligence Workflow]] - `part_of` [INFERRED]
- [[Spark Enrichment]] - `uses` [EXTRACTED]
- [[compose-outreach]] - `depends_on` [EXTRACTED]

---
tags: [entity, skill, sales-crm]
sources: [raw/skills/sequence-load.md]
trigger: /sequence-load
updated: 2026-04-17
---

# sequence-load

**Trigger:** `/sequence-load`  
**Argument:** `Targeting-Kriterien + Sequenz-Name`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Leads nach Kriterien finden und in Apollo-Outreach-Sequenz laden.

## Wann nutzen
Anreicherung, Kontakt-Erstellung, Deduplizierung, Enrollment in einem Flow

## Quellen
> [Source: raw/skills/sequence-load.md]

## Verbindungen (Graph-Extraktion)
- [[Apollo MCP]] - `uses` [EXTRACTED]
- [[Lead Enrichment]] - `implements` [EXTRACTED]
- [[Outreach Sequence]] - `manages` [EXTRACTED]

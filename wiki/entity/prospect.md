---
tags: [entity, skill, sales-crm]
sources: [raw/skills/prospect.md]
trigger: /prospect
updated: 2026-04-17
---

# prospect

**Trigger:** `/prospect`  
**Argument:** `Ideales Kundenprofil beschreiben`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Vollständige ICP-to-Leads-Pipeline — ICP beschreiben → priorisierte angereicherte Lead-Liste.

## Wann nutzen
Entscheidungsträger-Leads mit E-Mails und Telefonnummern, ranked

## Quellen
> [Source: raw/skills/prospect.md]

## Verbindungen (Graph-Extraktion)
- [[Apollo MCP (Lead Enrichment)]] - `uses` [EXTRACTED]
- [[Ideal Customer Profile (ICP)]] - `parses` [EXTRACTED]
- [[Sales Operations Domain]] - `belongs_to_domain` [INFERRED]
- [[pipeline-review]] - `semantically_similar_to` [INFERRED]

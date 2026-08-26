---
tags: [entity, skill, sales-crm]
sources: [raw/skills/compose-outreach.md]
trigger: /compose-outreach
updated: 2026-04-17
---

# compose-outreach

**Trigger:** `/compose-outreach`  
**Argument:** `Person oder Firma`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Personalisierte Outreach-Nachrichten mit Common Room Signalen generieren.

## Wann nutzen
E-Mail, Call-Script und LinkedIn-Nachricht — alle drei Formate auf einmal

## Quellen
> [Source: raw/skills/compose-outreach.md]

## Verbindungen (Graph-Extraktion)
- [[Common Room]] - `uses_connector` [EXTRACTED]
- [[Outreach Personalization]] - `implements` [EXTRACTED]
- [[Sales Enablement]] - `belongs_to` [EXTRACTED]
- [[Signal-Based Outreach]] - `implements` [EXTRACTED]
- [[contact-research]] - `depends_on` [EXTRACTED]
- [[content-creation]] - `semantically_similar_to` [INFERRED]

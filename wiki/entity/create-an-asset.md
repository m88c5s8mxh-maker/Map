---
tags: [entity, skill, sales-crm]
sources: [raw/skills/create-an-asset.md]
trigger: /create-an-asset
updated: 2026-04-17
---

# create-an-asset

**Trigger:** `/create-an-asset`  
**Argument:** `Prospect, Zielgruppe, Ziel`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Maßgeschneiderte Sales Assets aus Deal-Kontext generieren.

## Wann nutzen
Landing Pages, Decks, One-Pagers, Workflow-Demos für Kunden

## Quellen
> [Source: raw/skills/create-an-asset.md]

## Verbindungen (Graph-Extraktion)
- [[Asset Creation Workflow]] - `uses` [EXTRACTED]
- [[ROI Calculator]] - `implements` [EXTRACTED]
- [[Sales Asset]] - `produces` [EXTRACTED]
- [[Sales Enablement]] - `belongs_to` [EXTRACTED]
- [[Workflow Demo]] - `produces` [EXTRACTED]
- [[competitive-intelligence]] - `related_to` [EXTRACTED]
- [[content-creation]] - `semantically_similar_to` [INFERRED]

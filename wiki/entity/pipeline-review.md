---
tags: [entity, skill, sales-crm]
sources: [raw/skills/pipeline-review.md]
trigger: /pipeline-review
updated: 2026-04-17
---

# pipeline-review

**Trigger:** `/pipeline-review`  
**Argument:** `Segment oder Rep`  
**Kategorie:** [[sales-crm-skills]]

## Zweck
Pipeline-Gesundheit analysieren — Deals priorisieren, Risiken flaggen, Wochenplan.

## Wann nutzen
Wöchentlicher Pipeline-Review, stockende Deals, schlechte Close-Dates, single-threaded

## Quellen
> [Source: raw/skills/pipeline-review.md]

## Verbindungen (Graph-Extraktion)
- [[CRM Connector]] - `uses_when_available` [EXTRACTED]
- [[CRM Hygiene]] - `audits_for` [EXTRACTED]
- [[Deal Prioritization Framework]] - `implements` [EXTRACTED]
- [[Sales Operations Domain]] - `belongs_to_domain` [INFERRED]
- [[Sales Pipeline Health Score]] - `produces` [EXTRACTED]
- [[prospect]] - `semantically_similar_to` [INFERRED]

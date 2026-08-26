---
tags: [entity, skill, engineering]
sources: [raw/skills/deploy-checklist.md]
trigger: /deploy-checklist
updated: 2026-04-17
---

# deploy-checklist

**Trigger:** `/deploy-checklist`  
**Argument:** `Service oder Release-Name`  
**Kategorie:** [[engineering-skills]]

## Zweck
Pre-Deployment-Verifikations-Checkliste.

## Wann nutzen
Vor Release, Datenbankmigrationen, Feature Flags, CI-Status, Rollback-Trigger

## Quellen
> [Source: raw/skills/deploy-checklist.md]

## Verbindungen (Graph-Extraktion)
- [[Deploy Checklist]] - `implements` [EXTRACTED]
- [[Engineering]] - `belongs_to` [EXTRACTED]
- [[Rollback Plan]] - `includes` [EXTRACTED]
- [[debug]] - `semantically_similar_to` [INFERRED]

---
tags: [entity, skill, hr-people]
sources: [raw/skills/people-report.md]
trigger: /people-report
updated: 2026-04-17
---

# people-report

**Trigger:** `/people-report`  
**Argument:** `Report-Typ`  
**Kategorie:** [[hr-people-skills]]

## Zweck
Headcount-, Fluktuation-, Diversity- oder Org-Health-Berichte generieren.

## Wann nutzen
Headcount-Snapshot, Turnover-Trends, Diversity-Metriken, Span of Control

## Quellen
> [Source: raw/skills/people-report.md]

## Verbindungen (Graph-Extraktion)
- [[Attrition Analysis]] - `produces` [EXTRACTED]
- [[Diversity Representation Metrics]] - `produces` [EXTRACTED]
- [[HR  People Operations Domain]] - `belongs_to_domain` [INFERRED]
- [[HRIS Connector]] - `uses_when_available` [EXTRACTED]
- [[People Analytics]] - `implements` [EXTRACTED]
- [[Span of Control]] - `analyzes` [EXTRACTED]
- [[eNPS (Employee Net Promoter Score)]] - `tracks` [EXTRACTED]
- [[recruiting-pipeline]] - `feeds_data_into` [INFERRED]

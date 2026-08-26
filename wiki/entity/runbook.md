---
tags: [entity, skill, engineering]
sources: [raw/skills/runbook.md]
trigger: /runbook
updated: 2026-04-17
---

# runbook

**Trigger:** `/runbook`  
**Argument:** `Prozess oder Aufgabenname`  
**Kategorie:** [[engineering-skills]]

## Zweck
Operatives Runbook für wiederkehrende Aufgaben erstellen oder aktualisieren.

## Wann nutzen
On-Call/Ops-Aufgaben, Tribal Knowledge in Schritt-für-Schritt-Befehle, Eskalationspfade

## Quellen
> [Source: raw/skills/runbook.md]

## Verbindungen (Graph-Extraktion)
- [[Escalation Path]] - `includes` [EXTRACTED]
- [[Knowledge Base Connector]] - `uses_when_available` [EXTRACTED]
- [[Operational Runbook]] - `produces` [EXTRACTED]
- [[process-doc]] - `semantically_similar_to` [INFERRED]

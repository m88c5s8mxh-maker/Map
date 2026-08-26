---
tags: [entity, skill, finance]
sources: [raw/skills/reconciliation.md]
trigger: /reconciliation
updated: 2026-04-17
---

# reconciliation

**Trigger:** `/reconciliation`  
**Argument:** `Konto + Periode`  
**Kategorie:** [[finance-skills]]

## Zweck
Konten abgleichen: GL vs. Nebenbuch, Bankkonten oder Drittdaten.

## Wann nutzen
Bankabstimmung, GL-zu-Subledger-Rec, Intercompany-Reconciliation

## Quellen
> [Source: raw/skills/reconciliation.md]

## Verbindungen (Graph-Extraktion)
- [[Bank Reconciliation]] - `implements` [EXTRACTED]
- [[Finance  Accounting Operations Domain]] - `belongs_to_domain` [INFERRED]
- [[GL-to-Subledger Reconciliation]] - `implements` [EXTRACTED]
- [[Intercompany Reconciliation]] - `implements` [EXTRACTED]

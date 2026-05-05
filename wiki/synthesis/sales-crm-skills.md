---
tags: [synthesis, sales, crm, category]
sources: [raw/skills/pipeline-review.md, raw/skills/forecast.md, raw/skills/prospect.md, raw/skills/enrich-lead.md, raw/skills/call-prep.md, raw/skills/call-summary.md, raw/skills/draft-outreach.md, raw/skills/daily-briefing.md]
updated: 2026-04-17
---

# Sales & CRM Skills

## Übersicht
12 Skills für den kompletten Sales-Zyklus — von der Lead-Generierung bis zum Abschluss.

## Skills nach Phase

### Prospecting & Lead-Generierung
| Skill | Trigger | Zweck |
|-------|---------|-------|
| prospect | `/prospect` | ICP → priorisierte Lead-Liste mit Anreicherung |
| enrich-lead | `/enrich-lead` | Name/Firma/Email → vollständige Kontaktkarte |
| sequence-load | `/sequence-load` | Leads nach Kriterien finden + Apollo-Sequence laden |
| contact-research | `/contact-research` | Einzelperson recherchieren |
| account-research | `/account-research` | Firma recherchieren |

### Outreach & Kommunikation
| Skill | Trigger | Zweck |
|-------|---------|-------|
| draft-outreach | `/draft-outreach` | Prospect recherchieren → personalisierte Nachricht |
| compose-outreach | `/compose-outreach` | Outreach mit Signalen personalisieren |
| email-sequence | `/email-sequence` | Multi-E-Mail-Sequenz mit Timing und Branching |

### Pipeline & Forecasting
| Skill | Trigger | Zweck |
|-------|---------|-------|
| pipeline-review | `/pipeline-review` | Pipeline-Gesundheit, Deal-Priorisierung, Risiken |
| forecast | `/forecast` | Gewichtete Prognose: best/likely/worst Szenarien |
| daily-briefing | `/daily-briefing` | Priorisiertes tägliches Sales-Briefing |

### Calls & Meetings
| Skill | Trigger | Zweck |
|-------|---------|-------|
| call-prep | `/call-prep` | Vorbereitung für Kunden-/Prospect-Call |
| call-summary | `/call-summary` | Transkript → Action Items + Follow-up E-Mail |

## Typischer Workflow
```
/prospect → /enrich-lead → /draft-outreach → /call-prep → /call-summary → /pipeline-review → /forecast
```

## Verbindungen
- [[analyze]] — für tiefere Pipeline-Datenanalyse
- [[competitive-intelligence]] — Wettbewerber-Kontext für Sales
- [[create-an-asset]] — Sales Assets für Deals generieren

## Quellen
> [Source: raw/skills/pipeline-review.md, forecast.md, prospect.md u.a.]

---
name: _skill-map
description: Master map of all skill workflow chains and cross-domain connections. Read this when deciding which skills to combine, planning a multi-step workflow, or looking for the best skill sequence for a task. Not a user-invocable skill — use it as navigation context.
---

# Skill Map — Workflow Chains & Cross-Domain Connections

This file documents how all 130+ skills connect into end-to-end workflows. Use it to pick the right skill sequence for any task.

---

## Sales Funnel Chain

Full end-to-end: Ideal Customer → Enriched Leads → Personalized Outreach → Pipeline → Forecast

```
[prospect] → [enrich-lead] → [contact-research] / [account-research]
    ↓
[draft-outreach] / [compose-outreach]
    ↓
[email-sequence] → [sequence-load]  ← loads into Apollo
    ↓
[call-prep] → [call-summary]
    ↓
[pipeline-review] → [forecast]
    ↓
[create-an-asset]  ← deal-specific sales assets
```

**Key connectors:** Apollo MCP (prospect, enrich, sequence), Gmail MCP (email-sorter, outreach), CRM (pipeline, forecast)

**When to chain:**
- New market entry → `prospect` + `enrich-lead` + `email-sequence`
- Warm leads → `contact-research` + `compose-outreach`
- Pre-call → `call-prep` + `account-research`
- Weekly review → `pipeline-review` + `forecast` + `daily-briefing`

---

## Design & UI Workflow Chain

Full end-to-end: Brief → Design → Review → Handoff → Implementation

```
[ux-design] → [design-critique] → [design-handoff]
    ↓                                    ↓
[design-system]                   [web-artifacts-builder] / [canvas-design]
    ↓
[accessibility-review]

Style layer (pick one):
[taste-skill]         ← Senior UI, anti-generic, premium
[brutalist-skill]     ← Industrial, Swiss typography, military terminal
[minimalist-skill]    ← Warm monochrome, editorial, flat bento
[manus-vacu-landing]  ← Dark glassmorphism landing pages
[stitch-skill]        ← Google Stitch DESIGN.md system
[emil-design-eng]     ← Animation polish, spring physics
```

**When to chain:**
- New product UI → `ux-design` + `taste-skill` + `web-artifacts-builder`
- Design review → `design-critique` + `accessibility-review`
- Handoff to dev → `design-handoff` + `design-system`
- Brand work → `brand-guidelines` + `brand-review` + `canvas-design`

---

## Data Analytics Stack

Full end-to-end: Raw Data → Exploration → Analysis → Visualization → Dashboard

```
[explore-data] → [data-context-extractor]
    ↓
[sql-queries] / [write-query]
    ↓
[analyze] / [statistical-analysis]
    ↓
[validate-data]  ← QA before sharing
    ↓
[create-viz] / [data-visualization]
    ↓
[build-dashboard]
    ↓
[metrics-review]  ← ongoing monitoring
```

**When to chain:**
- New dataset → `explore-data` + `data-context-extractor` + `sql-queries`
- Investigation → `analyze` + `statistical-analysis` + `create-viz`
- Reporting → `metrics-review` + `build-dashboard` + `variance-analysis`
- Stakeholder report → `validate-data` + `build-dashboard` + `stakeholder-update`

---

## Finance & Accounting Chain

Full end-to-end: Transactions → Journals → Close → Statements → Analysis

```
[journal-entry-prep] → [journal-entry]
    ↓
[close-management]  ← month-end orchestration
    ↓
[financial-statements]  ← P&L, Balance Sheet, Cash Flow
    ↓
[variance-analysis]  ← vs. budget/prior period
    ↓
[reconciliation]  ← GL vs. bank/subledger
    ↓
[audit-support] / [sox-testing]  ← compliance layer
    ↓
[compliance-tracking]  ← ongoing SOC2/GDPR/ISO
```

**When to chain:**
- Month-end → `close-management` + `journal-entry` + `reconciliation`
- Board prep → `financial-statements` + `variance-analysis` + `forecast`
- Audit → `audit-support` + `sox-testing` + `compliance-tracking`

---

## Engineering Development Chain

Full end-to-end: Problem → Spec → Design → Code → Test → Deploy → Monitor

```
[write-spec] → [system-design] → [architecture]
    ↓
[code-review] → [testing-strategy] → [debug]
    ↓
[deploy-checklist]
    ↓
[incident-response] → [runbook]
    ↓
[tech-debt] → [change-request]
```

**When to chain:**
- New feature → `write-spec` + `system-design` + `web-artifacts-builder`
- Code review → `code-review` + `testing-strategy` + `accessibility-review`
- Deployment → `deploy-checklist` + `change-request`
- Incident → `incident-response` + `runbook` + `stakeholder-update`

---

## HR Employee Lifecycle Chain

Full end-to-end: Headcount → Hire → Onboard → Develop → Review

```
[org-planning] → [capacity-plan] → [recruiting-pipeline]
    ↓
[interview-prep] → [draft-offer]
    ↓
[onboarding]
    ↓
[performance-review] → [comp-analysis]
    ↓
[people-report]  ← headcount, attrition, diversity
```

**When to chain:**
- Hiring → `recruiting-pipeline` + `interview-prep` + `draft-offer`
- Review cycle → `performance-review` + `comp-analysis`
- Team planning → `org-planning` + `capacity-plan` + `people-report`

---

## Content Marketing Chain

Full end-to-end: Intel → Strategy → Content → Distribution → Performance

```
[competitive-intelligence] / [competitive-brief]
    ↓
[campaign-plan] + [brand-guidelines]
    ↓
[draft-content] / [content-creation]
    ↓
[email-sequence]  ← newsletter, nurture
    ↓
[seo-audit]  ← optimize for search
    ↓
[performance-report] / [metrics-review]
```

**When to chain:**
- Campaign launch → `campaign-plan` + `draft-content` + `email-sequence`
- SEO push → `seo-audit` + `draft-content` + `content-creation`
- Brand → `brand-review` + `brand-guidelines` + `ux-copy`

---

## Knowledge Management Chain

Full end-to-end: Raw Data → Graph → Wiki → Memory → Query

```
[graphify]  ← builds knowledge graph from files
    ↓
[obsidian-wiki]  ← LLM-maintained persistent wiki
    ↓
[memory-management]  ← two-tier memory system
    ↓
[knowledge-synthesis] / [research-synthesis]
    ↓
[search] / [search-strategy]  ← query across sources
    ↓
[doc-coauthoring] / [documentation]  ← output
```

**When to chain:**
- New project → `graphify` + `obsidian-wiki` + `memory-management`
- Research → `search-strategy` + `knowledge-synthesis` + `research-synthesis`
- Docs → `documentation` + `doc-coauthoring` + `template-saver`

---

## Product Management Loop

Continuous product cycle:

```
[product-brainstorming] → [write-spec] → [roadmap-update]
    ↓
[sprint-planning] → [standup] → [tech-debt]
    ↓
[metrics-review] → [user-research] → [research-synthesis]
    ↓ (back to top)
```

**When to chain:**
- Planning → `product-brainstorming` + `write-spec` + `roadmap-update`
- Sprint → `sprint-planning` + `standup` + `tech-debt`
- Insight loop → `metrics-review` + `user-research` + `research-synthesis`

---

## Document Output Layer

Any workflow can output to these formats:

| Format | Skill | Best For |
|--------|-------|----------|
| PDF | `pdf` | Reports, proposals, overviews |
| Word | `docx` | Editable documents, contracts |
| PowerPoint | `pptx` | Presentations, board decks |
| Excel | `xlsx` | Data tables, financial models |
| HTML | `build-dashboard` / `web-artifacts-builder` | Interactive dashboards, landing pages |
| Image | `canvas-design` / `algorithmic-art` | Visual assets |

---

## Claude Optimization Skills

Use these to get better results from Claude:

| Skill | When to Use |
|-------|-------------|
| `claude-efficiency` | Context window filling up, slow responses |
| `claude-max-effort` | Claude being lazy or skipping steps |
| `full-output-enforcement` | Claude truncating code or content |
| `skill-creator` | Building new skills from scratch |
| `template-saver` | Save a generated output as a reusable template |
| `consolidate-memory` | Memory files getting messy |
| `conversation-context` | Re-establishing context across sessions |

---

## Cross-Domain Bridges

These skills connect multiple domains — use them as hubs:

| Skill | Connects |
|-------|----------|
| `metrics-review` | Data ↔ Product ↔ Finance |
| `roadmap-update` | Product ↔ Engineering ↔ Strategy |
| `stakeholder-update` | Any domain → Communication |
| `search` + `search-strategy` | Knowledge ↔ All domains |
| `build-dashboard` | Data ↔ Product ↔ Engineering |
| `content-creation` | Marketing ↔ Sales ↔ Brand |
| `analyze` | Data ↔ Finance ↔ Product ↔ HR |
| `forecast` | Sales ↔ Finance ↔ Product |
| `schedule` | Any skill → Automated recurring task |
| `map-sync` | Local skills ↔ Shared brain (GitHub) |

---

## Quick Skill Picker

**"I need to find leads"** → `prospect` → `enrich-lead` → `draft-outreach`  
**"I need to write content"** → `draft-content` or `content-creation`  
**"I need to analyze data"** → `explore-data` → `analyze` → `create-viz`  
**"I need to review metrics"** → `metrics-review` + `build-dashboard`  
**"I need to close the month"** → `close-management` → `financial-statements`  
**"I need to build a UI"** → `ux-design` + `taste-skill` + `web-artifacts-builder`  
**"I need to hire someone"** → `recruiting-pipeline` → `interview-prep` → `draft-offer`  
**"I need to debug code"** → `debug` + `code-review` + `testing-strategy`  
**"I need to plan a sprint"** → `sprint-planning` → `standup` → `tech-debt`  
**"I need to write a PDF"** → workflow skill + `pdf`  
**"I need to remember this"** → `memory-management` or `template-saver`  
**"I need to build a new skill"** → `skill-creator`  

# Knowledge Graph Index

> Zuletzt aktualisiert: 2026-05-04 · 585 Knoten · 655 Kanten · 670 Wiki-Seiten · 148 Quelldateien

---

## Schnellzugriff

- **Graph abfragen:** `/graphify query "<frage>"`  
- **Verbindung finden:** `/graphify path "<A>" "<B>"`  
- **Knoten erklären:** `/graphify explain "<konzept>"`  
- **Skill-Workflow:** Lies `raw/skills/_SKILL_MAP.md`
- **Visualisierung:** `graphify-out/graph.html` im Browser öffnen

---

## Wissens-Communities (61 Cluster)

Die wichtigsten thematischen Cluster im Graph:

| Community | Thema | Wichtigste Knoten |
|-----------|-------|-------------------|
| 0 | Design System & UI Patterns | brutalist-skill, taste-skill, anti-generic rules, bento grid, CRT terminal |
| 1 | Brand & Marketing | Anthropic identity, campaign brief, Claude limits, generative art |
| 2 | LLM Output Research | Laziness research, truncation studies, context reduction patterns |
| 3 | Stitch Design System | DESIGN.md, Floria examples, asymmetric layouts, botanical photography |
| 4 | Sales Intelligence | Battlecard, competitive analysis, outreach personalization, persona |
| 5 | Product Analytics | CAC, DAU/WAU/MAU, JTBD, resource planning, dashboard design |
| 6 | Email & Outreach | AIDA structure, LinkedIn, Gmail MCP, email-sorter, draft-outreach |
| 7 | HR & People | Onboarding, attrition, HRIS, diversity metrics, performance calibration |
| 8 | Engineering | Debug, deploy, design tokens, developer handoff, tech documentation |
| 9 | Product & UX | Acceptance criteria, MoSCoW, persona development, PRD, affinity mapping |
| 10 | Premium UI Patterns | AI tells, anti-slop rules, motion-engine bento, creative arsenal |
| 11 | Data & Testing | CTE, SQL, data validation, financial model, testing pyramid |
| 12 | Content & SEO | Blog, landing page copy, draft-content, email performance, sequencing |
| 13 | Finance & Sales | GAAP, income statement, financial-statements, variance, pipeline |
| 14 | Data Visualization | Chart selection, data warehouse, create-viz, data-context-extractor |
| 15 | Knowledge Systems | Karpathy wiki pattern, runbook, RACI, SOP, escalation paths |
| 16 | UX & Web | CTA, landing page, microcopy, React, ux-copy, web-artifacts-builder |
| 17 | Strategy & Roadmap | ADR, KPI reporting, ROAM risk, stakeholder-update, architecture |
| 18 | CRM & Pipeline | Deal prioritization, ICP, pipeline health, pipeline-review, prospect |
| 19 | Enterprise Search | MCP sources, parallel search, query decomposition, rate limiting |
| 20 | Agile Workflow | Backlog, sprint capacity, standup, tech-debt, sprint-planning |
| 21 | Compensation | Benchmarking, equity modeling, total comp, comp-analysis, HRIS |
| 22 | Document Output | docx-js, LibreOffice, Pandoc, DOCX skill, tracked changes |
| 23 | Incident & Comms | 5 Whys, blameless postmortem, incident-response, internal-comms |
| 24 | Compliance & Security | GDPR, SOC 2, audit readiness, compliance-tracking |
| 25 | Task & Memory | TASKS.md, working memory bootstrap, update, start, task-management |
| 26 | Graph Automation | update_map.py, GitHub Actions, graphify rebuild |
| 27 | PDF Tools | pdf skill, pdfplumber, pypdf, OCR, reportlab |
| 28 | Reconciliation | Bank recon, GL-to-subledger, intercompany, reconciliation skill |
| 29 | Data Exploration | Data profiling, quality assessment, explore-data, warehouse connector |
| 30 | Claude Memory | CLAUDE.md hot cache, memory management, two-tier architecture |
| 31 | SEO | Content gap, keyword research, audit types, seo-audit |
| 32 | Cowork Platform | Connector registry, plugin marketplace, setup-cowork |
| 33 | Skill Development | Skill description optimization, evaluation loop, skill-creator |
| 34 | Lead Sequences | Lead enrichment, outreach sequence, sequence-load, Apollo MCP |
| 35 | YouTube & Video | Faceless channel, viral titles, youtube-channel-ai |
| 36–60 | Specialized clusters | Output enforcement, memory, scheduling, design components, SQL, GIFs, etc. |

---

## God Nodes (meistvernetzte Konzepte)

Diese Knoten verbinden die meisten anderen — hier ist das Kern-Wissen:

1. `Taste Skill (design-taste-frontend)` — 14 Kanten
2. `DESIGN.md — Stitch Design System` — 13 Kanten
3. `LLM Output Truncation Research` — 12 Kanten
4. `Taste Skill README — Collection Overview` — 10 Kanten
5. `output-skill` — 9 Kanten
6. `metrics-review` — 9 Kanten
7. `roadmap-update` — 9 Kanten

---

## Workflow Chains (Skill-Sequenzen)

Vollständige Workflows: Lies `raw/skills/_SKILL_MAP.md`

| Workflow | Skill-Kette |
|----------|-------------|
| Sales Funnel | `prospect` → `enrich-lead` → `draft-outreach` → `email-sequence` → `call-prep` → `pipeline-review` → `forecast` |
| Design | `ux-design` → `design-critique` → `design-handoff` + style layer (`taste-skill`/`brutalist-skill`) |
| Data Analytics | `explore-data` → `sql-queries` → `analyze` → `create-viz` → `build-dashboard` |
| Finance | `journal-entry` → `close-management` → `financial-statements` → `variance-analysis` |
| Engineering | `write-spec` → `system-design` → `code-review` → `testing-strategy` → `deploy-checklist` |
| HR | `recruiting-pipeline` → `interview-prep` → `onboarding` → `performance-review` |
| Marketing | `campaign-plan` → `draft-content` → `email-sequence` → `seo-audit` → `performance-report` |
| Knowledge | `graphify` → `obsidian-wiki` → `memory-management` → `search` |

---

## Wiki (670 Seiten)

Strukturiertes Wissen unter `wiki/`. Einstieg: `wiki/index.md`

---

## Rohdaten (148 Dateien)

Alle Quelldateien unter `raw/`. Skills unter `raw/skills/`.

- **Skill-Navigation:** `raw/skills/_SKILL_MAP.md`
- **Skill-Verzeichnis:** `wiki/index.md` (alle Skills A-Z)

---

*Generiert von [graphify](https://pypi.org/project/graphifyy/)*

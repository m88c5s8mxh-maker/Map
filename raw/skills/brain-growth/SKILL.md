---
name: brain-growth
description: Automatischer Wachstums-Workflow für das Map-Gehirn. Liest alle Skills, scrapt relevante Quellen pro Skill-Kategorie, extrahiert Wissen und fügt es als Research-Nodes ins Map-Repo ein. Trigger: /brain-growth [Kategorie] oder /brain-growth all
argument-hint: "<Kategorie: design|sales|marketing|engineering|ai|finance|hr|data|all>"
---

# Brain Growth — Automatischer Wachstums-Workflow

Erweitert das Map-Gehirn systematisch: für jede Skill-Kategorie werden kuratierte Quellen gescrapt, aufbereitet und als neue Wissensknoten committed.

---

## Workflow (immer dieser Ablauf)

1. **Kategorie bestimmen** — Argument oder `all` für vollständigen Durchlauf
2. **URL-Map lesen** — `brain-growth/url-map.md` für die Kategorie
3. **Scrapen** — `firecrawl scrape "<URL>" --only-main-content` für jede Quelle
4. **Extrahieren** — Kernaussagen, Patterns, Techniken destillieren (kein Copy-Paste)
5. **Research-Node schreiben** — in `raw/research/<kategorie>-<thema>-<YYYY-MM>.md`
6. **Skill verlinken** — relevante Skills in "Verbundene Skills" Sektion eintragen
7. **Committen + Pushen** — `git add → git commit → git push origin main`

---

## Kategorien & Priorität

| Priorität | Kategorie | Skills | Quellen |
|-----------|-----------|--------|---------|
| 1 | **design** | web-factory, cinematic-web, taste-skill, design-system | Awwwards, Codrops, Smashing Magazine |
| 2 | **ai** | mcp-builder, graphify, claude-efficiency, brain-growth | Anthropic News, Simon Willison, Promptingguide |
| 3 | **sales** | prospect, compose-outreach, enrich-lead, pipeline-review | Apollo Blog, HubSpot Sales, Gong |
| 4 | **marketing** | content-creation, email-sequence, campaign-plan, seo-audit | HubSpot Marketing, Ahrefs, Backlinko |
| 5 | **engineering** | architecture, system-design, debug, code-review | Martin Fowler, Pragmatic Engineer, InfoQ |
| 6 | **data** | analyze, data-visualization, sql-queries, explore-data | Mode Blog, Towards Data Science |
| 7 | **hr** | onboarding, recruiting-pipeline, performance-review | SHRM, LinkedIn Talent Blog |
| 8 | **finance** | financial-statements, reconciliation, audit-support | CFI, Accounting Today |

---

## Datei-Namenskonvention

```
raw/research/<kategorie>-<thema>-<YYYY-MM>.md
```

Beispiele:
- `raw/research/design-animation-trends-2026-05.md`
- `raw/research/ai-mcp-patterns-2026-05.md`
- `raw/research/sales-outreach-tactics-2026-05.md`

---

## Research-Node Template

```markdown
# <Titel>

**Quelle:** <URL(s)>
**Gescrapt:** <DATUM>
**Kategorie:** <Kategorie>

## Kernaussagen

- ...

## Patterns & Techniken

...

## Verbundene Skills

| Skill | Relevanz |
|-------|---------|
| `raw/skills/...` | ... |

## Tags
`#<kategorie>` `#<thema>` `#<YYYY>`
```

---

## Qualitätsregeln

- **Kein Copy-Paste** — immer destillieren, was wirklich neu/nützlich ist
- **Max. 150 Zeilen** pro Research-Node — prägnant halten
- **Mindestens 2 Skill-Links** pro Node — sonst kein Mehrwert für den Graph
- **Keine veralteten Inhalte** — Quellen müssen aus dem laufenden Jahr stammen
- **Nur Substanz** — kein Marketing-Fluff, nur konkrete Patterns

---

## Trigger-Punkte (wann ausführen)

- Wenn ein Skill eingesetzt wurde und neue Erkenntnisse entstanden sind
- Wöchentlich für Kategorie `design` und `ai` (schnellster Wandel)
- Monatlich für alle anderen Kategorien
- Immer nach einem großen Kundenprojekt (z.B. nach Triple B → Gastronomie enriched)

→ URL-Map: `brain-growth/url-map.md`

---
name: brain-grower
description: Automatischer Wachstums-Workflow für das Map-Gehirn. Liest alle Skills, scrapt relevante Quellen pro Skill-Kategorie, extrahiert Wissen und fügt es als Research-Nodes ins Map-Repo ein. Trigger: /brain-grower [Kategorie] oder /brain-grower all
argument-hint: "<Kategorie: design|sales|marketing|engineering|ai|finance|hr|data|all>"
---

# Brain Grower — Automatischer Wachstums-Workflow

Erweitert das Map-Gehirn systematisch: für jede Skill-Kategorie werden kuratierte Quellen gescrapt, aufbereitet und als neue Wissensknoten committed.

---

## FULL RUN — Alles gleichzeitig (`/brain-grower all`)

**Maximale Parallelisierung: alle URLs gleichzeitig als Background-Tasks.**

### Phase 1 — Alle Scrapes gleichzeitig starten
Alle URLs aus der url-map werden als parallele Background-Tasks gestartet. Während sie laufen:
→ Öffne Obsidian → `Ctrl+G` → Graph View beobachten

### Phase 2 — Verarbeiten sobald fertig
Für jede fertige Scrape: Kernaussagen destillieren, Research-Node schreiben, Skill-Links eintragen.

### Phase 3 — Nach jeder Kategorie sofort committen
```
git add raw/research/ && git commit && git push origin main
```
→ **Jeder Push triggert graphify-Hook → Obsidian Graph wächst sichtbar**

### Phase 4 — Nächste Kategorie sofort
Keine Pause zwischen Kategorien.

---

## Kategorien & Priorität

| Priorität | Kategorie | Skills | Quellen |
|-----------|-----------|--------|---------|
| 1 | **webdesign** | web-factory, cinematic-web, taste-skill | Awwwards, Codrops, Godly, Hoverstates, GSAP Showcase |
| 2 | **ai** | mcp-builder, graphify, claude-efficiency | Anthropic News, Simon Willison, n8n Blog |
| 3 | **instagram** | instagram-digital-products, content-creation | Later, Social Media Examiner, Creator Economy |
| 4 | **automation** | mcp-builder, map-sync, email-sequence | n8n Templates, Make, Zapier, Bardeen |
| 5 | **sales** | prospect, compose-outreach, pipeline-review | Apollo Blog, HubSpot Sales, Gong |
| 6 | **marketing** | seo-audit, content-creation, campaign-plan | Ahrefs, Backlinko, HubSpot Marketing |
| 7 | **engineering** | architecture, system-design, code-review | Martin Fowler, Pragmatic Engineer |
| 8 | **data** | analyze, data-visualization, sql-queries | Mode Blog, Towards Data Science |
| 9 | **hr** | onboarding, recruiting-pipeline | SHRM, LinkedIn Talent Blog |
| 10 | **finance** | financial-statements, reconciliation | CFI, Accounting Today |

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

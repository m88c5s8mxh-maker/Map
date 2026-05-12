# AI Engineering Insights — Mai 2026

**Quelle:** simonwillison.net
**Gescrapt:** 2026-05-12
**Kategorie:** engineering, ai

## Kernaussagen

### Das Maintenance-Kosten-Paradox (James Shore via Simon Willison)
**Kritischste Erkenntnis für AI-gestütztes Coding:**

> "Your AI coding agent needs to reduce your maintenance costs. Not by a little bit. You write code twice as quick now? Better hope you've halved your maintenance costs."

- **Formel:** Produktivität × Wartungskosten = Gesamtkosten
- Doppelte Geschwindigkeit + gleiche Wartung = doppelter Tech Debt
- AI-Code ist nur wertvoll wenn er die Wartungslast *reduziert*, nicht nur die Produktionsgeschwindigkeit erhöht
- **Konsequenz für uns:** Code-Qualität und Einfachheit wichtiger als Speed

### GitLab Act 2 — Agentic Era beeinflusst Org-Strukturen
- GitLab flacht auf max. 3 Management-Ebenen ab
- "60 kleinere, unabhängige Teams mit End-to-End Ownership" — Jevons-Paradox: weniger Kosten → mehr Nachfrage nach Software
- **Muster:** Agenten multiplizieren Software-Nachfrage, reduzieren Kosten-Constraint

### Zombie Internet (Jason Koebler)
- "Menschen die AI nutzen sprechen mit Menschen die AI nutzen" — neue Qualitäts-Schicht
- AI-Content nicht erkennbar, verändert menschlichen Schreibstil
- **Konsequenz:** Anti-Slop Regeln werden *wichtiger*, nicht unwichtiger

### LLM als Shebang-Interpreter
```bash
#!/usr/bin/env -S llm -f
Generate an SVG of a pelican riding a bicycle
```
- English-language scripts direkt ausführbar via `llm` CLI
- Neue Kategorie: natürlichsprachliche Shell-Skripte

## Patterns für Engineering Skills

| Pattern | Anwendung |
|---------|-----------|
| Maintenance-Cost-First | Code Review: nicht nur "funktioniert es?" sondern "wie hoch sind Folgekosten?" |
| End-to-End Team Ownership | System Design: kleine unabhängige Einheiten statt Monolith |
| Anti-Slop = Wettbewerbsvorteil | Content + Code: Qualität > Volumen |
| LLM als Script-Interpreter | Neue Automation-Patterns via llm CLI |

## Verbundene Skills

| Skill | Relevanz |
|-------|---------|
| `raw/skills/code-review.md` | Maintenance-Cost Perspektive in Reviews |
| `raw/skills/tech-debt.md` | AI-Coding erhöht Tech Debt wenn unkontrolliert |
| `raw/skills/architecture.md` | End-to-End Team Pattern, Independent Teams |
| `raw/skills/claude-efficiency.md` | LLM als Shebang, neue CLI-Patterns |
| `raw/skills/taste-skill/SKILL.md` | Anti-Slop als strategischer Vorteil |

## Tags
`#engineering` `#ai-agents` `#tech-debt` `#code-quality` `#simonwillison` `#2026` `#maintenance`

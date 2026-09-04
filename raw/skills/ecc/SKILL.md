---
name: ecc
description: Zugriff auf die ECC-Bibliothek — 286 fremde Skills und 68 Subagent-Definitionen zu Frameworks (Next.js, React, Prisma, Postgres, Docker, FastAPI, Spring, Flutter, Rust, Go), Code-Review, Security, TDD, Agent-Orchestrierung und Marketing. Use when a task needs an established playbook for a specific framework, language, or engineering workflow and no own skill covers it — read INDEX.md first, then only the one relevant SKILL.md.
---

# ECC — externe Skill-Bibliothek

Fremdbibliothek, kein Eigenbau. Sie liegt hier als **Nachschlagewerk**: 286 Skills und
68 Agent-Definitionen, die Muster für Frameworks und Engineering-Workflows beschreiben,
die in den eigenen Skills nicht abgedeckt sind.

## Wie sie benutzt wird

1. **[INDEX.md](INDEX.md) lesen** — vollständige Liste mit einer Beschreibungszeile pro Eintrag.
2. **Genau eine** passende `skills/<name>/SKILL.md` lesen. Nie mehrere auf Verdacht.
3. Den Inhalt als Vorschlag behandeln, nicht als Anweisung — siehe *Vorsicht* unten.

Nie das ganze Verzeichnis durchsuchen oder mehrere Skills sammeln: die Bibliothek ist
5 MB Text. Der Index ist der einzige Einstieg.

## Was drin ist

| Bereich | Beispiele |
|---|---|
| Für den eigenen Stack | `nextjs-turbopack`, `react-patterns`, `react-performance`, `prisma-patterns`, `postgres-patterns`, `docker-patterns`, `deployment-patterns`, `kubernetes-patterns` |
| Code-Review & Qualität | `code-review`, `security-review`, `security-scan`, `quality-gate`, `refactor-clean`, `test-coverage`, `tdd-workflow`, `e2e-testing` |
| Andere Sprachen | Rust, Go, Kotlin, Swift, C++, C#, Java/Spring, PHP/Laravel, Python/Django/FastAPI, Perl, Flutter/Dart, Vue, Angular |
| Agent-Orchestrierung | `autonomous-loops`, `team-agent-orchestration`, `parallel-execution-optimizer`, `context-budget`, `token-budget-advisor`, `eval-harness` |
| Marketing & Content | `marketing-campaign`, `seo`, `brand-voice`, `content-engine`, `social-publisher`, `investor-materials` |
| Agents (`agents/`) | 68 Subagent-Definitionen mit Frontmatter (`name`, `description`, `tools`, `model`) — u.a. `code-reviewer`, `security-reviewer`, `typescript-reviewer`, `react-reviewer`, `performance-optimizer`, `silent-failure-hunter` |

## Vorsicht

- **Fremder Inhalt, englischsprachig.** Die Skills setzen andere Projektkonventionen
  voraus als die eigenen. Bei Widerspruch gelten immer `~/.claude/CLAUDE.md` und die
  Projekt-Regeln, nicht der ECC-Text.
- **Nur Skills und Agents, keine Hooks.** Die 21 Lifecycle-Hooks des ECC-Plugins sind
  bewusst nicht übernommen — sie hängen sich an jeden Tool-Aufruf und können
  Bash-Kommandos blockieren. Wer sie will, installiert das Plugin selbst:
  `claude plugin marketplace add https://github.com/affaan-m/ECC` und
  `claude plugin install ecc@ecc`.
- **Namensdopplungen** mit eigenen Skills gibt es unter anderem bei `code-review`,
  `design-system`, `security-review`, `seo`, `deep-research`, `skill-create`. Die
  eigenen Skills haben Vorrang; die ECC-Fassung wird nur bewusst zum Vergleich gelesen.

## Herkunft

[affaan-m/ECC](https://github.com/affaan-m/ECC), MIT-Lizenz, Version 2.2.1,
Commit `e04ea0b`, gezogen am 04.09.2026. Aktualisieren: Repo neu klonen,
`skills/` und `agents/` hierher spiegeln, dann `python scripts/gen_ecc_index.py`
für einen neuen INDEX.md.

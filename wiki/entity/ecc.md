---
tags: [entity, werkzeug, skills, fremdbibliothek]
sources: [raw/skills/ecc/SKILL.md, raw/skills/ecc/INDEX.md, https://github.com/affaan-m/ECC]
trigger: /ecc — Nachschlagewerk, kein ausführbarer Workflow
updated: 2026-09-04
---

# ECC

**Kategorie:** [[Skills-Index|Externe Skill-Bibliothek]]

## Zweck
Fremdbibliothek von Affaan Mustafa (MIT, v2.2.1): **286 Skills** und **68 Subagent-Definitionen**
als Nachschlagewerk für Frameworks und Engineering-Workflows, die die eigenen ~148 Skills nicht
abdecken. Liegt vollständig im Repo unter `raw/skills/ecc/`, Einstieg über `INDEX.md`.

## Wann nutzen
Wenn eine Aufgabe ein etabliertes Muster für ein bestimmtes Framework, eine Sprache oder einen
Engineering-Workflow braucht und **kein eigener Skill das deckt**. Nicht als Ersatz für die
eigenen Skills — die haben bei Namensdopplungen Vorrang.

Für den eigenen Stack relevant: `nextjs-turbopack`, `react-patterns`, `react-performance`,
`prisma-patterns`, `postgres-patterns`, `docker-patterns`, `deployment-patterns`,
`security-review`, `test-coverage`, `tdd-workflow`.

## Kernaussagen
- **Ein Skill, nicht 286.** Bewusst als Bündel mit einer einzigen `SKILL.md` abgelegt. Der
  Ladeweg ist zweistufig: `INDEX.md` lesen → genau eine `skills/<name>/SKILL.md` lesen.
  Als Plugin installiert kostet dieselbe Bibliothek **~40.600 Token in jeder Session**,
  als Bündel-Skill nur die eine Beschreibungszeile.
- **Ohne Hooks übernommen.** Das ECC-Plugin bringt 21 Lifecycle-Hooks über 7 Events mit,
  mehrere mit Matcher `.*` bzw. `Bash` — die können Kommandos blockieren und damit
  SSH-Deploys stören. Sie sind hier nicht enthalten. Siehe [[server-quellcode-drift]] für
  den Grund, warum an der Deploy-Kette nichts Unkontrolliertes hängen darf.
- **Fremder, englischsprachiger Inhalt.** Setzt andere Projektkonventionen voraus. Bei
  Widerspruch gilt `~/.claude/CLAUDE.md`, nicht der ECC-Text.
- **Namensdopplungen** mit eigenen Skills: `code-review`, `design-system`, `security-review`,
  `seo`, `deep-research`, `skill-create`.

## Beziehungen
- Ergänzt die eigene Skill-Bibliothek → [[_SKILL_MAP]]
- Wird installiert wie alle Map-Skills → `scripts/install-skills.ps1`
- Index wird generiert von → `scripts/gen_ecc_index.py`
- Konkurriert als Bezugsweg mit dem Plugin-Marketplace `ecc@ecc` (in
  `~/.claude/settings.json` eingetragen) — beide gleichzeitig aktiv wäre doppelt

## Quellen
> [Source: raw/skills/ecc/SKILL.md]
> [Source: https://github.com/affaan-m/ECC, Commit e04ea0b, 03.09.2026]

---
name: superpowers
description: Pre-coding planning loop — research, spec, plan, test, then build. Claude stops guessing and thinks like a senior dev.
install: npx claude code plugin add obra/superpowers
source: https://github.com/obra/superpowers
added: 2026-04-22
---

# Superpowers — Claude Code Planning Skill

Structured development methodology that forces Claude to plan before it codes.

## Was es tut
Bevor Claude Code schreibt, durchläuft es einen vollständigen Loop:
1. **Research** — Kontext und Requirements verstehen
2. **Spec** — Design-Dokument erstellen, Architektur entscheiden
3. **Plan** — Implementierungsschritte aufteilen
4. **Test** — Baseline sicherstellen
5. **Build** — Erst jetzt Code schreiben

## Install
```bash
npx claude code plugin add obra/superpowers
# oder global:
npx skills add obra/superpowers -g
```

## Kern-Skills im Paket
- `brainstorming` — verfeinert Ideen durch Fragen, validiert Design in Sektionen
- `using-git-worktrees` — isolierter Workspace nach Design-Approval
- `spec` — speichert Design-Dokument vor Implementierung

## Wann nutzen
- Neues Feature oder Projekt starten
- Architekturentscheidungen treffen
- Wenn der Agent zu schnell "einfach losschreibt"

## Philosophie
> Jede Entscheidung, die die Spec festlegt, ist billiger auf Papier als im Code rückgängig zu machen.

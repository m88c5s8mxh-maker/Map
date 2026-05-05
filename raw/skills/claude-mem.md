---
name: claude-mem
description: Persistentes Gedächtnis für Claude Code — captured, compressed, re-injected. Kein Re-Explaining mehr zwischen Sessions.
install: npx claude-mem install
source: https://github.com/thedotmack/claude-mem
added: 2026-04-22
---

# Claude-Mem — Persistent Memory für Claude Code

Automatisches Session-Gedächtnis. Claude erinnert sich an deine Codebase, Präferenzen und Kontext — session-übergreifend.

## Was es tut
1. **Captured** — alles was Claude tut wird automatisch erfasst
2. **Compressed** — via Claude Agent SDK komprimiert und kategorisiert
3. **Injected** — relevanter Kontext wird in neue Sessions injiziert

## 5 Lifecycle Hooks
```
SessionStart → UserPromptSubmit → PostToolUse → Summary → SessionEnd
```

## Install
```bash
npx claude-mem install
# NICHT: npm install (immer npx verwenden)
```

## Features
- Auto-generierte CLAUDE.md in Projekt-Ordnern mit Activity Timeline
- SQLite-Datenbank für persistente Speicherung
- Worker Service: Express API auf Port 37777
- React Viewer UI: http://localhost:37777
- Unterstützt 28 Sprachen

## Wann nutzen
- Längere Projekte über mehrere Sessions
- Wenn man immer wieder "erkläre meinen Stack" tippen muss
- Team-Setups mit geteiltem Kontext
- Codebase-Präferenzen dauerhaft festlegen

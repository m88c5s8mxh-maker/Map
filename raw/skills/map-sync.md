---
name: map-sync
description: Synchronisiert beide Gehirne mit GitHub — Map-Gehirn + Morio-Solutions. git pull + git push für beide Repos. Trigger mit /map-sync.
trigger: /map-sync
---

# /map-sync

Synchronisiert beide Wissens-Graphen mit GitHub:
- **Map-Gehirn** (`~/Map`) — 131 Skills, gemeinsame Wissensbasis
- **Morio Solutions** (`~/Morio-Solutions`) — Automationen, Kundendaten, Geschäftsdokumente

## Workflow

Wenn der Skill aufgerufen wird, führe folgendes aus:

### 1. Beide Repos pullen
```bash
cd /Users/tyrone/Map && git pull
cd /Users/tyrone/Morio-Solutions && git pull
```

### 2. Neue Commits anzeigen
```bash
cd /Users/tyrone/Map && git log --oneline -5
cd /Users/tyrone/Morio-Solutions && git log --oneline -5
```

### 3. Lokale Änderungen pushen
```bash
cd /Users/tyrone/Map && git add -A && git diff --cached --quiet || git commit -m "Manual sync: $(date '+%Y-%m-%d %H:%M')" && git push
cd /Users/tyrone/Morio-Solutions && git add -A && git diff --cached --quiet || git commit -m "Manual sync: $(date '+%Y-%m-%d %H:%M')" && git push
```

### 4. Kurzer Bericht
- Neue Commits vom Kollegen (Map)
- Eigene Commits gepusht (Map + Morio)
- Status beider Repos

## Automatischer Sync (Hooks)
- **SessionStart** → `git pull` für beide Repos
- **Stop** → `git push` für beide Repos nach jeder Antwort

# Setup für Mc

Hey Mc! Diesen Text einfach in Claude Code einfügen — Claude richtet alles automatisch ein.

---

## Schritt 1 — Repo klonen

```bash
git clone https://github.com/m88c5s8mxh-maker/Map.git ~/Map
cd ~/Map
./setup.sh
```

---

## Schritt 2 — Diesen Prompt in Claude Code einfügen

```
Bitte richte folgendes für mich ein:

1. Erstelle die Datei ~/.claude/skills/map-sync/SKILL.md mit folgendem Inhalt:

---
name: map-sync
description: Synchronisiert das gemeinsame Map-Gehirn mit GitHub — git pull + git push. Trigger mit /map-sync.
trigger: /map-sync
---

# /map-sync

Synchronisiert das gemeinsame Gehirn unter ~/Map mit GitHub.

## Was dieser Skill tut

1. `git pull` — holt alle Änderungen vom Team
2. Zeigt was neu ist (falls vorhanden)
3. `git add -A && git commit && git push` — pusht eigene Änderungen hoch

## Automatisches Sync (Hooks)

Dieser Skill ist auch als automatischer Hook konfiguriert:
- **SessionStart** → `git pull` (Map immer aktuell beim Start)
- **Stop** → `git push` (Map wird nach jeder Antwort gespeichert)

## Manueller Aufruf

/map-sync

## Workflow

Wenn der Skill aufgerufen wird:

1. Führe aus: cd ~/Map && git pull
2. Zeige was neu reingekommen ist
3. Falls lokale Änderungen: cd ~/Map && git add -A && git commit -m "Mc: $(date '+%Y-%m-%d %H:%M')" && git push
4. Berichte kurz: wieviele neue Commits vom Team, wieviele eigene gepusht.

2. Füge in ~/.claude/settings.json folgende Hooks ein (bestehende Einträge beibehalten):

SessionStart-Hook: cd ~/Map && git pull --ff-only 2>/dev/null || true
Stop-Hook: cd ~/Map && git add -A && git diff --cached --quiet || git commit -m "Mc: wiki sync $(date '+%Y-%m-%d %H:%M')" && git push 2>/dev/null || true

3. Füge am Anfang von ~/.claude/CLAUDE.md folgendes ein:

# map-sync
- **map-sync** (~/.claude/skills/map-sync/SKILL.md) - Synchronisiert das gemeinsame Map-Gehirn mit GitHub (git pull + push). Trigger: /map-sync
When the user types /map-sync, invoke the Skill tool with skill: "map-sync" before doing anything else.

Bitte erledige alle drei Schritte und bestätige wenn fertig.
```

---

## Was danach automatisch passiert

| Zeitpunkt | Aktion |
|-----------|--------|
| Session-Start | `git pull` — Map ist immer aktuell |
| Nach jeder Antwort | `git push` — Änderungen werden sofort gesichert |
| Manuell mit `/map-sync` | Pull + Push auf Abruf |

---

## Obsidian (optional aber empfohlen)

1. [Obsidian](https://obsidian.md) installieren
2. "Vault öffnen" → `~/Map/wiki/` wählen
3. Obsidian Git Plugin installieren → synchronisiert automatisch

---

## Graph ansehen

```bash
open ~/Map/graphify-out/graph.html
```

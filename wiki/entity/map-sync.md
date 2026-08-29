---
tags: [entity, skill, knowledge-management]
sources: [raw/skills/map-sync.md, raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]
trigger: /map-sync
updated: 2026-08-29
---

# map-sync

**Trigger:** `/map-sync`  
**Kategorie:** [[knowledge-productivity-skills]]

## Zweck
Synchronisiert beide Wissens-Graphen mit GitHub — Map-Gehirn + Morio-Solutions. `git pull` + `git push` für beide Repos, damit alle Kollegen immer den aktuellen Stand haben.

## Repos
- **Map** (`~/Map`) — 131+ Skills, gemeinsame Wissensbasis
- **Morio Solutions** (`~/Morio-Solutions`) — Automationen, Kundendaten, Geschäftsdokumente

## Workflow
1. `git pull` für beide Repos
2. Neue Commits anzeigen (was vom Kollegen kam)
3. Lokale Änderungen pushen
4. Kurzer Status-Bericht

## Hooks (automatisch)
| Zeitpunkt | Aktion |
|-----------|--------|
| SessionStart | git pull (Map immer aktuell) |
| Stop | git push (Änderungen sofort gesichert) |

## Absicherung der Hooks (Nachtrag 2026-08-26)

Die oben beschriebenen Hooks haben zwei Monate lang **stillschweigend nicht funktioniert**:
`SessionStart` nutzt `git pull --ff-only … || true` und meldet bei Divergenz trotzdem Erfolg,
`Stop` committete mit `git add -A` ohne Zustandsprüfung — auf einen detached HEAD. Vollständige
Rekonstruktion, Wiederherstellungsweg und die übertragbare Regel in [[stiller-sync-ausfall]].

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

Empfohlener Ersatz für den Map-Eintrag im `Stop`-Block — gleiche Funktion, bricht aber bei
detached HEAD oder hängendem Rebase ab und schreibt den Grund ins Log (beide Guards getestet):

```json
{
  "type": "command",
  "command": "/Users/tyrone/Map/scripts/map-git-sync.sh \"Auto: wiki sync $(date '+%Y-%m-%d %H:%M')\"",
  "statusMessage": "Map wird gespeichert (git push)..."
},
```

Der `Morio-Solutions`-Eintrag kann bleiben — dieses Repo war und ist synchron, betroffen war nur
`Map`. Fertige Datei zum Übernehmen: `scripts/settings.json.vorschlag`, Anleitung in
`scripts/HOOK_EINRICHTEN.md`.

## Beziehungen
- [[graphify]] — Graph-Update nach Code-Änderungen
- [[obsidian-wiki]] — Wiki-Ingest für neue Inhalte
- [[memory-management]] — ergänzend für Session-Kontext
- [[stiller-sync-ausfall]] — warum diese Hooks abgesichert gehören
- [[session-erfassung-map]] — nutzt `map-git-sync.sh` als letzte Stufe ihrer Pipeline

## Quellen
> [Source: raw/skills/map-sync.md]

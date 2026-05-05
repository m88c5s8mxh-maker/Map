---
tags: [entity, skill, knowledge-management]
sources: [raw/skills/map-sync.md]
trigger: /map-sync
updated: 2026-04-24
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

## Beziehungen
- [[graphify]] — Graph-Update nach Code-Änderungen
- [[obsidian-wiki]] — Wiki-Ingest für neue Inhalte
- [[memory-management]] — ergänzend für Session-Kontext

## Quellen
> [Source: raw/skills/map-sync.md]

---
tags: [entity, skill, memory, context]
sources: [raw/skills/memory-management.md]
updated: 2026-04-17
---

# memory-management (Skill)

**Zweck:** Zwei-Schicht-Gedächtnissystem — Claude als echter Arbeitspartner der interne Sprache, Abkürzungen und Kontext kennt.

## Das Kernprinzip
```
User: "ask todd to do the PSR for oracle"
                ↓ Claude dekodiert
"Ask Todd Martinez (Finance lead) to prepare the Pipeline Status Report
 for the Oracle Systems deal ($2.3M, closing Q2)"
```

## Zwei Schichten
| Schicht | Ort | Inhalt |
|---------|-----|--------|
| Arbeitsgedächtnis | `CLAUDE.md` | Aktuelle Anweisungen, Regeln, Kurzkontext |
| Wissensbasis | `memory/` Verzeichnis | Persistente Fakten, Präferenzen, Projektkontext |

## Memory-Typen
- **user** — Rolle, Ziele, Wissen, Präferenzen des Nutzers
- **feedback** — Korrekturen und bestätigte Ansätze (was zu tun/lassen)
- **project** — laufende Aufgaben, Ziele, Entscheidungen
- **reference** — Zeiger auf externe Systeme (Linear, Grafana, Slack)

## Beziehungen
- [[obsidian-wiki-skill]] — Wiki für tieferes Dokumenten-Wissen
- [[claude-skills-system]] — Teil des Produktivitäts-Skill-Clusters
- [[consolidate-memory]] — Skill zum Bereinigen veralteter Memory-Einträge

## Quellen
> [Source: raw/skills/memory-management.md]

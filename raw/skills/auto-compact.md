---
name: auto-compact
description: Aktiviert automatisches /compact wenn der Kontext voll wird. Spart Tokens durch regelmäßige Kontextkomprimierung ohne manuellen Eingriff. Eingestellt via autoCompactEnabled in ~/.claude/settings.json.
---

# Auto-Compact

Komprimiert den Chat-Kontext automatisch wenn das Kontextfenster voll läuft.

## Einrichtung

In `~/.claude/settings.json`:

```json
{
  "autoCompactEnabled": true
}
```

## Was passiert

- Claude Code erkennt wenn der Kontext groß wird
- Führt automatisch `/compact` aus — komprimiert den Chat-Verlauf zu einer Zusammenfassung
- Setzt danach die Arbeit mit reduziertem Kontext fort
- Kein manueller Eingriff nötig

## Manuell auslösen

```
/compact
```

## Token-Einsparung

- Lange Chats = aufgeblähter Kontext = langsamere, teurere Antworten
- Auto-compact hält den Kontext schlank ohne Informationen zu verlieren
- Ergänzt Fix #2 aus claude-efficiency (Frischer Chat alle 15-20 Nachrichten)

## Verwandte Skills

- `claude-efficiency` — 8 Token-Spar-Fixes
- `skill-router` — automatische Skill-Ketten

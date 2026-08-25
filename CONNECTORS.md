# CONNECTORS.md

> Nachträglich angelegt (2026-08-25) — 55 Dateien unter `raw/skills/` verweisen auf `../../CONNECTORS.md`, das im Repo bisher nicht existierte.

Diese Datei listet keine festen Zugangsdaten (die werden pro Umgebung/Client konfiguriert), sondern dient als Platzhalter-Ziel für die Skill-Referenzen. Welche Connectors (Gmail, Kalender, CRM, Slack, Figma, Apollo etc.) tatsächlich verbunden sind, hängt von der jeweiligen Cowork-/Claude-Umgebung ab, in der ein Skill ausgeführt wird — dort in den Connector-/Plugin-Einstellungen prüfen.

## Zweck der Referenz in den Skills
Skills wie `financial-statements`, `build-dashboard`, `code-review` etc. verlinken hierher, damit unbekannte `$PLACEHOLDER`-Variablen im Skill-Text nachvollziehbar sind: "Falls du unbekannte Platzhalter siehst oder prüfen willst, welche Tools verbunden sind, siehe CONNECTORS.md."

## Siehe auch
- [[Connector Registry]]
- [[MCP Connected Sources]]
- [[Skills-Index]]

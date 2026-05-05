---
name: browser-use
description: Gibt Claude Kontrolle über einen echten Browser — Buttons klicken, Forms ausfüllen, Screenshots, parallele Sessions. Kein API nötig.
install: npx claude code plugin add browser-use/browser-use
source: https://github.com/browser-use/browser-use
added: 2026-04-22
---

# Browser-Use — Real Browser Control für Claude Code

Claude kontrolliert einen echten Chrome-Browser via Chrome DevTools Protocol (CDP). Kein Puppeteer-Wrapper, echter Browser.

## Was es tut
- Buttons klicken, Links folgen
- Forms ausfüllen und absenden
- Screenshots aufnehmen
- Parallele Browser-Sessions
- Seiten-Extraktion und Daten-Scraping
- Kein separates API notwendig

## Install
```bash
npx claude code plugin add browser-use/browser-use
# oder als MCP Server:
npx skills add browser-use/browser-use
```

## Performance
3-5x schneller als andere Browser-Automation-Tools bei state-of-the-art Accuracy.

## Technisch
- Async Python >= 3.11
- Chrome DevTools Protocol (CDP)
- Läuft lokal — keine externe API

## Wann nutzen
- Web-Scraping-Tasks
- Formular-Automatisierung
- E2E-Testing im Browser
- Wenn Claude auf Web-Inhalte zugreifen soll die kein API haben
- Screenshot-basierte Workflows

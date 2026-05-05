---
name: conversation-context
description: >
  Gespeicherter Gesprächskontext und Nutzerpräferenzen für wiederkehrende Zusammenarbeit.
  Aktiviere diesen Skill immer wenn der Nutzer auf frühere Gespräche verweist, Präferenzen
  erwähnt oder Kontext aus vergangenen Sessions benötigt. Auch bei Aufgaben rund um
  Skill-Erstellung, Web-Scraping, MCP-Server, Firecrawl oder Claude-Artifacts nutzen.
---

# Gesprächskontext & Nutzerpräferenzen

## Nutzer-Profil

- **Sprache**: Deutsch (immer auf Deutsch antworten, sofern nicht anders gewünscht)
- **Standort**: Ulm, Baden-Württemberg, DE
- **Technisches Level**: Fortgeschritten — versteht APIs, MCP-Server, Skills, Artifacts
- **Kommunikationsstil**: Direkt, kompakt, kein Overhead

## Bekannte Projekte & Workflows

### Firecrawl-System (erstellt in dieser Session)
- Ein Firecrawl-ähnliches Web-Scraping-System wurde als HTML-Artifact gebaut
- Features: URL scrapen, Website crawlen, Markdown-Output, Metadaten
- Nutzt die Anthropic Claude API intern mit `web_search` Tool
- Artifact gespeichert unter: `/mnt/user-data/outputs/firecrawl_system.html`

### Skills
- Nutzer möchte Skills erstellen, die über Gespräche hinweg persistent sind
- Dieser Skill (`conversation-context`) dient als Gedächtnis zwischen Sessions
- Skill-Erstellung erfolgt via skill-creator Workflow

## Präferenzen

### Antwort-Format
- Kurz und direkt — kein unnötiges Blabla
- Code bevorzugt in vollständigen, lauffähigen Blöcken
- Markdown-Tabellen für Vergleiche OK
- Keine übermäßigen Bullet-Listen

### Technische Präferenzen
- Python oder TypeScript für Backend/MCP
- HTML/React für Artifacts (Single-File bevorzugt)
- Artifact-Storage für Persistenz in Artifacts

## Anweisungen für Claude

Wenn dieser Skill aktiv ist:
1. Greife auf obige Kontextinformationen zurück, bevor du antwortest
2. Frage nicht nach bereits bekannten Präferenzen (Sprache, Stil etc.)
3. Verweise auf frühere Projekte wenn relevant (z.B. "wie beim Firecrawl-System...")
4. Aktualisiere diesen Skill wenn neue wichtige Informationen entstehen

## Versions-Log

| Datum | Änderung |
|-------|----------|
| 2026-04-03 | Initialer Skill erstellt — Firecrawl-System, Gesprächskontext |

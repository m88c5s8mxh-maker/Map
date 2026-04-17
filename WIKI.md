# Wiki Schema

## Domain
Geteilte Wissensbasis — Notizen, Artikel, Recherchen, Konzepte

## Page Types
- **concept/** — eine Seite pro Kernidee oder Begriff
  - Sections: Definition, Eigenschaften, Verbindungen, Offene Fragen
- **entity/** — eine Seite pro Person, Projekt, Firma, Werkzeug
  - Sections: Übersicht, Kernaussagen, Beziehungen, Quellen
- **synthesis/** — übergreifende Analysen aus mehreren Quellen
  - Sections: These, Belege, Gegenargumente, Konfidenz
- **_overview** — Community-Zusammenfassungen (auto-generiert)

## Conventions
- Interne Links: `[[seiten-name]]` (Obsidian Wiki-Link Format)
- Quellenangaben: `> [Quelle: dateiname, Abschnitt]`
- Widerspruchs-Flags: `> ⚠️ WIDERSPRUCH mit [[andere-seite]]: ...`
- Konfidenz-Tags: `#hoch` / `#abgeleitet` / `#prüfen`
- YAML Frontmatter auf jeder Seite: `tags`, `sources`, `updated`

## Ingest Workflow
1. Quelle vollständig lesen
2. Neue Konzepte, Entitäten, Behauptungen, Widersprüche identifizieren
3. Seiten anlegen/aktualisieren — bestehenden Inhalt nie löschen, nur ergänzen
4. `wiki/index.md` aktualisieren — Zeile für jede berührte Seite
5. An `wiki/log.md` anhängen

## Query Workflow
1. `wiki/index.md` lesen um relevante Seiten zu finden
2. Relevante Seiten lesen
3. Antwort mit Quellenangaben synthetisieren
4. Nicht-triviale Antworten als `synthesis/`-Seite speichern

## Lint Checks
- Verwaiste Seiten (keine eingehenden `[[Links]]`)
- Im Text erwähnte Konzepte ohne eigene Seite
- Veraltete Behauptungen (Quelle neuer als `updated`-Datum der Seite)
- Fehlende Querverweise zwischen offensichtlich verwandten Seiten
- Markierte Widersprüche die noch nicht aufgelöst wurden

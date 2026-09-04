# Wiki Log

<!-- Format: ## [YYYY-MM-DD] operation | titel -->

## [2026-04-17] ingest --batch | 138 Dateien aus raw/ (131 Skills + Config + Memory)

- Seiten erstellt: 14
- Seiten aktualisiert: 2 (index.md, WIKI.md)
- Quellen verarbeitet: 138 Dateien (raw/skills/, raw/config/, raw/memory/)
- Neue Konzepte: claude-skills-system, llm-wiki-pattern
- Neue Entities: graphify, obsidian-wiki-skill, memory-management
- Neue Synthesen: sales-crm-skills, data-analytics-skills, finance-skills, engineering-skills, marketing-content-skills, design-ux-skills, hr-people-skills, knowledge-productivity-skills, document-comms-skills
- Widersprüche geflaggt: keine
- Schlüssel-Erkenntnis: Das Skill-System deckt den kompletten Business-Zyklus ab — von Lead-Generierung bis SOX-Compliance. Der Knowledge-Stack (graphify → obsidian-wiki → memory-management → skill-creator) ist das Meta-System das alle anderen Skills organisiert.

## [2026-04-22] ingest | Emil Kowalski - Design Engineering Skill

- Neue Seiten: entity/emil-kowalski.md, concept/design-engineering.md
- Neue Skill-Datei: raw/skills/emil-design-eng.md
- Index aktualisiert: 2 neue Eintraege
- Skill installiert via: npx skills add emilkowalski/skill

## [2026-05-14] ingest | cinematic-threejs-techniques.md

- Pages created: 2 (concept/cinematic-threejs-scrollytelling.md, concept/backdrop-shader-animated.md)
- Pages updated: 0
- New concepts: Earth-to-Forest Transition, Animated ShaderMaterial Backdrops, Procedural Water Stream, Chromatic Aberration, 3D Bottle Two-Layer
- Contradictions flagged: none
- Key takeaway: Scroll-p [0,1] treibt CatmullRom-Kamera + ShaderMaterial-Backdrops mit Parallax/Shimmer/Breath für cinematic luxury web

## [2026-08-26] session | Preview-Reiter in CRM Intranet einbauen

- Neue Seiten: entity/morio-crm.md, concept/server-quellcode-drift.md, entity/vorschau-webseiten.md
- Aktualisierte Seiten: index.md (neuer Abschnitt „Morio Solutions — Betrieb & Produktion")
- Widersprüche geflaggt: keine offenen — die frühere Annahme „intra läuft auf dem FastAPI-`reviewcrm`" ist in [[morio-crm]] korrigiert und als Verwechslungsfalle dokumentiert
- Schlüssel-Erkenntnis: Ein Deploy-Skript, das nur das gebaute Image überträgt, macht den Quellcode auf dem Server wertlos als Referenz — ein Build von dort hat drei Produktionsbereiche gelöscht. Vor jedem Build aus einem Server-Ordner: `deploy.sh` lesen und die Seitenliste des laufenden Artefakts als Soll-Zustand gegenprüfen. Diese Liste gehört ins Backup.

## [2026-08-26] session | Vertriebsskript für Webseitenverkauf schreiben

- Neue Seiten: concept/vertrieb-niedrigpreis-abschluss.md
- Aktualisierte Seiten: index.md (Morio-Solutions-Tabelle + Verweis unter „Web Factory — Angebotsstufen")
- Widersprüche geflaggt: Preisspanne — Skript arbeitet mit 890–1.890 €, dokumentierte Standard-Stufe [[web-factory]] mit 1.000–3.000 € (#prüfen)
- Schlüssel-Erkenntnis: Der Projektpreis bestimmt die Verkaufsmechanik. Bei 1.000–1.500 € kostet ein zweistufiger Prozess (Termin → Angebot → Nachfassen) 4–5 Stunden pro Abschluss und frisst die Marge — deshalb Abschluss im ersten Gespräch und Preis früh als Filter statt spät als Risiko. Die margenkritische Frage ist nicht der Preis, sondern „Haben Sie Texte und Bilder da?" — fehlende Inhalte machen aus einem 1.200-€-Projekt 30 Stunden.

## [2026-09-04] ingest | ECC-Skill-Bibliothek aus affaan-m/ECC

- Neue Seiten: entity/ecc.md
- Aktualisierte Seiten: index.md (neue Sektion „Externe Skill-Bibliotheken")
- Neue Quellen: raw/skills/ecc/ — 286 Skills, 68 Agents, INDEX.md, SKILL.md (535 Dateien, 5 MB)
- Schlüssel-Erkenntnis: Eine fremde Skill-Sammlung als Plugin zu installieren kostet ihre gesamte Beschreibungsfläche in jeder Session — hier ~40.600 Token always-on für 380 Einträge. Als ein Bündel-Skill mit einer SKILL.md und einem generierten INDEX.md abgelegt, kostet dieselbe Bibliothek eine Beschreibungszeile, und der Inhalt wird erst beim konkreten Zugriff gelesen. Die 21 Lifecycle-Hooks des Plugins wurden nicht übernommen: mehrere greifen mit Matcher `.*` bzw. `Bash` in jeden Tool-Aufruf ein und können Deploy-Kommandos blockieren.

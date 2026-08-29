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

## [2026-08-29] session | Obsidian integration for Claude session archiving

- Neue Seiten: entity/session-erfassung-map.md, concept/stiller-sync-ausfall.md
- Aktualisierte Seiten: concept/llm-wiki-pattern.md (Abschnitt „Relevanzschwelle"), entity/map-sync.md (Hook-Absicherung), entity/graphify.md (Widerspruchs-Flag), index.md (neuer Abschnitt „Map-Vault — Infrastruktur & Wissenszufuhr")
- Widersprüche geflaggt: [[graphify]] — `graphify . --update` existiert nicht, der Graph wird ausschließlich über den `post-commit`-Hook gebaut; die übrigen Flags aus `raw/skills/graphify.md` sind ungeprüft (#prüfen). Außerdem #prüfen in [[session-erfassung-map]]: die Kalibrierungszahlen 12/20/16 summieren sich auf 48 statt der genannten 46 Transkripte.
- Schlüssel-Erkenntnis: Zwei Regeln, die aus derselben Sitzung stammen und dasselbe Grundmuster teilen — eine Automatik, deren Ergebnis niemand gegenprüft. (1) Bei automatischer Wissenszufuhr bemisst sich der Wert einer Quelle am **Dialog**, nicht am Schreibvolumen: ein Score, der Datei-Änderungen belohnt, ließ 27 von 46 Sessions ins Wiki, darunter 12 rein mechanische Einzelaufträge. (2) `|| true` an einem Sync-Kommando ist keine Fehlerbehandlung, sondern eine Fehlerlöschung — sie verwandelte einen hängengebliebenen Rebase vom 18.06. in zwei Monate unbemerkten Sync-Stillstand. Eine Automatik muss bei unklarem Zustand laut abbrechen statt blind zu committen.

## [2026-08-29] session | Add scrollbar to expandable accordion boxes

- Neue Seiten: concept/lenis-scroll-container-konflikt.md
- Aktualisierte Seiten: entity/moriosolutions-website.md (Nachtrag 27.08. — Scroll-Fix, nginx-Container, Sicherheitsaudit, Soft-404, Ablage/Umbenennung, zwei offene Punkte), concept/server-quellcode-drift.md (drei weitere Deploy-Fallen + Präzisierung `cp` statt `mv` beim Einzeldatei-Mount), entity/morio-crm.md (nginx läuft im Container, nicht als Systemdienst), index.md
- Widersprüche geflaggt: Der Kommentar in der nginx-Config behauptet, Docker umgehe ufw bei veröffentlichten Container-Ports. Empirisch falsch in dieser Konstellation — der userland-proxy ist aktiv, Verbindungen laufen durch die INPUT-Kette, ufw greift (Timeouts auf 3000/3001/3002 von außen). Markiert in [[moriosolutions-website]].
- Schlüssel-Erkenntnis: Ein innerer Scroll-Container ist auf einer Lenis-Seite scrollbar, aber nicht scrollbar zu bedienen — Lenis fängt Wheel-Events global ab, das CSS ist unschuldig. Fix ist `data-lenis-prevent-wheel` plus `overscroll-behavior: contain`, und zwar **konditional**: pauschales Blocken erzeugt einen toten Streifen, wenn der Inhalt kürzer ist als sein Ausschnitt. Zweite Lehre aus derselben Sitzung: mehrere Prüfungen meldeten Erfolg, während live etwas anderes lief (`gzip_static` liefert die alte `.gz`, `systemctl is-active nginx` prüft einen abgeschalteten Dienst, ein Escaping-Fehler im eigenen grep erzeugte fast einen Falschbefund) — ein überraschender Negativbefund gehört gegengeprüft, bevor er zum Befund wird.

## [2026-08-29] session | Optimize Moriosolutions landing page for mobile view

- Neue Seiten: entity/moriosolutions-website.md, concept/mobile-choreografie-portierung.md, concept/unerreichbarer-dienst-ufw-docker.md
- Aktualisierte Seiten: entity/morio-crm.md (Nachtrag 26.–28.08.: `Vertrieb → Anfragen` live, Formularstrecke auf Port 3001, `.env.production` 5 → 18 Schlüssel, Build-Reparatur `React.ElementType` → `LucideIcon`, tote Variable `NOTIFY_CUSTOMERS`, Parallelarbeit am Repo, `migrate.sh`- und `~/package-lock.json`-Landmine), concept/server-quellcode-drift.md (Nachtrag: die Drift schlägt auch in die Gegenrichtung aus — Fehlalarm gegen den Server-Quelltext, richtige Referenz ist die Routenliste des laufenden Images), index.md
- Widersprüche geflaggt: (1) [[morio-crm]] — der Abschnitt „Deploy — der funktionierende Weg" sagt, `scp .env.production → .env` sei aus `deploy.sh` entfernt; am 26.08. lag die Zeile wieder/noch drin (Zeile 27) und hätte 13 Server-Schlüssel gelöscht (#prüfen). (2) [[unerreichbarer-dienst-ufw-docker]] — die Erklärung „Docker umgeht ufw bei veröffentlichten Ports" kollidiert mit der Gegenmessung vom 27.08. in [[moriosolutions-website]]; als Richtungsunterschied (INPUT von außen vs. FORWARD aus dem Container) aufgelöst, aber unverifiziert (#prüfen).
- Schlüssel-Erkenntnis: Drei Fehlerbilder, ein Muster — was gebaut ist, ist damit weder erreichbar noch wirksam. (1) Das Kontaktformular war vollständig gebaut (nginx-Route da, Bridge lief seit dem 18.08.) und hat trotzdem **acht Tage lang keine einzige Anfrage** zugestellt: die ufw-Regel für Port 3010 kannte nur `172.17.0.0/16`, der nginx-Container liegt auf `172.19.0.4`. Der `405` dahinter war kein Methodenfehler, sondern ein 307-Auth-Redirect auf `/login`, dem `fetch` methodenerhaltend folgte. (2) Ein Mobile-Layer, der Sektionen auf `height:auto` zurücksetzt, macht den Nenner der Scroll-Choreografie **negativ** (−114) — die Animation läuft rückwärts und außerhalb ihres Gates, was als „lädt nicht" erscheint; und weil derselbe Layer `opacity`/`transform` überschreibt, aber **nicht `visibility`**, standen live 19 (Portrait) bzw. 40 (Landscape) Scrollpositionen mit unsichtbaren, klickblockierenden Karten. (3) Die richtige Referenz für „löscht mein Deploy etwas?" ist nie der Quellcode auf dem Server, sondern die Routenliste des **laufenden Images** — der Vergleich gegen den Server-Quelltext erzeugte hier einen kompletten Fehlalarm samt abgebrochenem Deploy.

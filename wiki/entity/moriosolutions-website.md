---
tags: [entity, projekt, landingpage, frontend, morio-solutions, hoch]
sources: [raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]
updated: 2026-08-29
---

# moriosolutions.de (öffentliche Landingpage)

Die öffentliche Website von Morio Solutions — **eine einzige statische `index.html`** (265 KB)
mit three.js-Globus, gepinnter Scroll-Choreografie, [[cinematic-web|Lenis-Smoothscroll]] und
einem 5-Sprachen-Wörterbuch. Nicht zu verwechseln mit dem Intranet-CRM
[[morio-crm]] auf `intra.moriosolutions.de`.

## Aufbau

| | |
|---|---|
Arbeitskopie | `~/Downloads/moriosolutions-website/site/index.html` — war byte-identisch mit live |
Deploy | `deploy.sh` rsyncт **nur** den `site/`-Ordner, Standard `PRUNE=0` (kein `--delete`) |
Auslieferung | nginx mit `gzip_static on` — liefert bevorzugt `index.html.gz` |
Sprachen | de/en/it/es/tr; `applyLang` läuft über `querySelectorAll('[data-i18n]')` + `textContent` |
3D | `PerspectiveCamera(42, W/H)`, Globus + Partikelwelt teilen sich **dieselbe** Kamera |
Zweite Bühne | „Zwei Köpfe, ein System" — Canvas-Partikel bilden erst einen Kreis, dann ein M |
Sicherung alt | `~/Desktop/Morio Solutions/MS Landing (alt).html`, per `cmp` gegen live geprüft |

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Zwei Deploy-Fallen dieser Seite

**Das vorkomprimierte `.gz` ist die eigentlich ausgelieferte Datei.** `deploy.sh` erzeugt es
**nicht** neu, es rsyncт nur. Wer `index.html` ändert und deployt, ohne `index.html.gz`
neu zu bauen, kombiniert eine neue Quelle mit einem alten Auslieferungsstand — echte Besucher
sehen dann die alte Seite, jede Prüfung per `curl` ohne `Accept-Encoding: gzip` aber die neue.

**Der Deploy löscht nichts, das ist Absicht.** `PRUNE=0` schützt Impressum, Datenschutz, AGB,
`robots.txt`, `sitemap.xml`, favicon und `.well-known`, die nur auf dem Server liegen.
Wer `PRUNE=1` setzt, löscht die Pflichtseiten. Ein Backup im `site/`-Ordner abzulegen ist
dagegen gefährlich — es würde ins öffentliche Webroot hochgeladen.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Stand nach der Mobil-Überarbeitung (26.–28.08.2026)

Live und gegen den Live-Stand verifiziert, 16 Eingriffe, alle in Mobile-Media-Queries —
Desktop rechnerisch unverändert (Dokumenthöhe 11.202 px, Hero-Sektion 340vh = 3.060 px):

- **Globus** von 120–147 % auf **70 % Füllgrad**, FOV adaptiv statt fix (siehe
  [[mobile-choreografie-portierung]]). Kleiner heißt hier direkt **schärfer**, weil mobil
  bewusst kleinere Texturen geladen werden (`earthMap.m.webp`) und weniger hochskaliert werden.
- **Kreis-und-M-Bühne** wieder gepinnt (Sektion 240vh, Bühne `sticky` 100dvh), Canvas
  breitenbegrenzt: `height: min(58dvh, calc(86vw * 171 / 188))`.
- **Animationslängen** mobil verlängert: Hero 591 → **1.350 px** Scrollweg, Leistungen
  1.037 → **1.253 px**. Die Choreografie läuft über Scrollweg, nicht über Zeit — eine Sektion
  „langsamer" zu machen heißt, sie **höher** zu machen.
- **Leistungen als zweistufige Accordions** (`<details>`, bewusst ohne eigenes JavaScript,
  damit nichts mit der Scroll-Choreografie kollidiert): Karte 1 heißt jetzt
  „Programm-/Appentwicklung", CRM ist erster Bestandteil mit eigener Erklärung.
  30 Aufklapper, 16 Langtexte × 5 Sprachen. Karten im Grundzustand 271 statt ~1.000 px.
- **Cookie-Banner**: Aktionszeile klebt am Kartenrand, alle drei Buttons auch auf 320 px
  sichtbar; die 25-px-Schalter haben per `::after` eine 44-px-Trefferfläche ohne Optikänderung.
- **Textkontrast**: Hero und Team mit engem dunklem Schatten, Team zusätzlich Scrim — der
  Globus *rotiert* hinter der Schrift, Kontrast darf also nicht von einem Frame abhängen.

Geprüft auf 320×568, 360×740, 390×844, 430×932, 844×390, 768×1024, 1440×900: kein
horizontaler Overflow, kein Element kreuzt eine Viewport-Kante, keine JS-Fehler, alle
Tippziele ≥ 44 px. Kontaktformular: alle fünf Felder 16 px (kein iOS-Zoom) und 48 px hoch.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Das Anfrageformular

Das Formular POSTet an `/api/contact`. Diese Strecke war **seit dem 18. August tot** —
Ursache und Auflösung stehen in [[unerreichbarer-dienst-ufw-docker]]. Seit dem 26.08. zeigt
`/api/contact` per exaktem nginx-Match auf `/api/inquiries/public` des CRM: jede Anfrage
landet als Mail bei `info@moriosolutions.de` **und** unter *Vertrieb → Anfragen* im
[[morio-crm]]. Ende-zu-Ende bewiesen: `{"ok":true}` in 0,37 s, DB-Eintrag `status=neu`,
`lang=de`, `mail_ok=t`.

## Es arbeitet jemand parallel an dieser Datei

Während der Überarbeitung liefen **zwei fremde Deploys** (Backups 16:08 und 16:18) und es lag
**fremder Code in der Arbeitskopie**: ein 138-zeiliges `ms-accfit`-Skript für die
Accordion-Höhen auf dem Desktop (`min-width: 821px`), dazu ~60 weitere geänderte Zeilen.
Es wurde getestet und mitgenommen, aber der Befund bleibt: an dieser Datei arbeitet mehr als
eine Sitzung gleichzeitig. Vor jedem Eingriff **erst live gegen Arbeitskopie diffen**,
sonst überschreiben sich zwei Stände gegenseitig.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Offene Punkte

- Die 16 Fachtexte in **it/es/tr** sind maschinell erzeugter Marketingtext auf einer
  Firmenseite und sollten fachlich gegengelesen werden. #prüfen
- Automatische Lead-Anlage aus jeder Anfrage entfällt bewusst — die Anfrage landet unter
  *Anfragen* mit „als Lead übernehmen" als Klick.

## Verbindungen
- [[morio-crm]] — das Intranet-CRM, das jetzt die Anfragen entgegennimmt
- [[mobile-choreografie-portierung]] — warum die Animationen mobil brachen
- [[unerreichbarer-dienst-ufw-docker]] — warum das Formular acht Tage lang niemanden erreichte
- [[lenis-scroll-container-konflikt]] — Folgearbeit an denselben Accordions
- [[Responsive Rules — Mobile-first, no horizontal scroll, clamp typography, touch targets 44px]]
- [[cinematic-threejs-scrollytelling]] · [[Deploy Checklist]] · [[web-factory]]

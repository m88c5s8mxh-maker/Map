---
tags: [entity, projekt, landingpage, frontend, morio-solutions, hoch]
sources: [raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md, raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]
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
Deploy | `deploy.sh` rsynct **nur** den `site/`-Ordner, Standard `PRUNE=0` (kein `--delete`) |
Auslieferung | nginx mit `gzip_static on` — liefert bevorzugt `index.html.gz` |
Sprachen | de/en/it/es/tr; `applyLang` läuft über `querySelectorAll('[data-i18n]')` + `textContent` |
3D | `PerspectiveCamera(42, W/H)`, Globus + Partikelwelt teilen sich **dieselbe** Kamera |
Zweite Bühne | „Zwei Köpfe, ein System" — Canvas-Partikel bilden erst einen Kreis, dann ein M |
Sicherung alt | `~/Desktop/Morio Solutions/MS Landing (alt).html`, per `cmp` gegen live geprüft |

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Zwei Deploy-Fallen dieser Seite

**Das vorkomprimierte `.gz` ist die eigentlich ausgelieferte Datei.** `deploy.sh` erzeugt es
**nicht** neu, es rsynct nur. Wer `index.html` ändert und deployt, ohne `index.html.gz`
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

## Nachtrag 27.08. — Scroll-Fix, nginx-Befunde, Sicherheitsaudit

### Die Accordions scrollen jetzt

Die Leistungs-Karten hatten bereits `overflow-y: auto`, ließen sich aber nicht scrollen: Lenis
fing das Mausrad global ab, und `max-height: 40vh` galt für alle drei Karten, obwohl die unteren
beiden 20 vh tiefer sitzen — dort liefen 121 px aus der `overflow:hidden`-Bühne. Mechanik,
Messwerte und die übertragbare Regel stehen in [[lenis-scroll-container-konflikt]]. Live und
über vier Auflösungen plus Mobile verifiziert; das `ms-accfit`-Skript aus der Fremdarbeit
(siehe unten) wurde dabei mitgenommen und scroll-robust gemacht.

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

### nginx läuft NICHT als Systemdienst

Das Deploy-Skript meldete dauerhaft „WARNUNG: nginx läuft nicht". **Fehlalarm:** Der Host-nginx
ist `inactive` **und** `disabled`, bedient wird alles vom Docker-Container
**`kiendl-crm-nginx-1`** (nginx:alpine, Ports 80/443), der die Domains hält. Deshalb kam trotz
Warnung sauber HTTP 200. Korrigiert: Das Skript erkennt jetzt den Container und prüft dessen
Config; auch die Rollback-Zeile riet zu `systemctl reload nginx` und wäre ins Leere gelaufen —
ausgerechnet dort, wo man sie benutzt, wenn etwas kaputt ist. Ein Reload braucht diese Seite
ohnehin nur bei **Config**-Änderungen: statische Dateien liest nginx bei jeder Anfrage neu.

Die Config ist ein **Host-Mount einer einzelnen Datei** (`/opt/kiendl-crm/nginx.conf`) und
bedient sechs Domains. Änderungen darum mit `cp` (Inode bleibt), nie mit `mv`/`scp` —
Begründung in [[server-quellcode-drift]].

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

### Sicherheitsaudit von `site/` — sauber

49 Dateien geprüft: keine Secrets/Keys/Tokens, keine internen Adressen (IPs, Ports, Hostnamen),
**keine Source Maps** (die hätten den Originalcode offengelegt), keine Tracker und keine
Fremd-CDNs — nur eigene Domains und Social-Links, dadurch auch datenschutzrechtlich unkritisch.
Genau ein Endpunkt wird gerufen, `/api/contact`, relativ. Zwei Fehlalarme festgehalten, damit
sie nicht wieder Arbeit kosten: `.env` war `scene.environment` aus three.js, „password" steht
im Marketingtext („passwords expire").

**Interne Dienste sind von außen dicht:** 3000, 3001 (CRM), 3002 (Site-Editor) laufen ins
Timeout, 443 verbindet sofort. ufw erlaubt diese Ports nur aus `172.17.0.0/16` und localhost,
Default-Policy `deny (routed)`; die Datenbanken sind gar nicht veröffentlicht.

> ⚠️ WIDERSPRUCH mit dem Kommentar in der nginx-Config: Dort steht, Docker umgehe ufw bei
> veröffentlichten Container-Ports über eigene iptables-Regeln. **In dieser Konstellation stimmt
> das nicht** — der userland-proxy ist aktiv (11 `docker-proxy`-Prozesse), Verbindungen laufen
> darum über einen Host-Prozess und damit durch die INPUT-Kette, wo ufw greift. Empirisch durch
> die Timeouts bestätigt. Der Kommentar könnte zu einem unnötigen Umbau verleiten.
> Vgl. [[unerreichbarer-dienst-ufw-docker]].
> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

### Soft-404 abgestellt

`location /` hatte `try_files $uri $uri/ /index.html`. Nicht existierende URLs bekamen dadurch
**200 mit der Startseite** statt 404 — `/admin`, `/wp-login.php`, `/.htaccess`, verirrte
`.bak`-URLs. **Kein Leak** (ausgeliefert wurde immer nur die öffentliche Startseite), aber
Suchmaschinen indexieren solche 200er als echte Seiten und jeder Scanner sieht eine
„Treffer"-Antwort. Geändert auf `try_files $uri $uri/ =404;` — die Seite ist keine SPA.

Das Vorgehen ist die eigentliche Lehre, denn die Config enthielt **zwei identische**
`try_files`-Zeilen (Zeile 103 = oezlem-makeup.de, Zeile 226 = moriosolutions.de):

1. Interne Links der Seite extrahieren → jeder hat eine Dateiendung, `/api/contact` läuft über
   einen eigenen `location`-Block **vor** `try_files`. Die Seite braucht den Fallback nirgends.
2. **Baseline** aller 13 Endpunkte über sechs Domains aufnehmen, bevor etwas angefasst wird.
3. Config herunterladen, lokal ändern, **Diff prüfen** — genau eine Zeile, im richtigen Block.
4. `cp`, `nginx -t`, dann Reload.
5. Gegen dieselbe Baseline messen: keine Abweichung. `/api/contact` antwortet **400 statt 404**,
   der Endpunkt wird also erreicht — das Formular läuft weiter.

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

### Ablage und alte Fassungen

Backups liegen bewusst **eine Ebene über** `site/` (`index.html.bak-svcscroll-20260827-151502`):
Was in `site/` liegt, wandert beim Deploy vollständig ins öffentliche Webroot. 13 veraltete
Landing-Fassungen auf Desktop, in Downloads und die ZIP wurden auf das Präfix
**`Moriosolutions Landing Alt` + Datum** umbenannt; Rückgängig-Skript liegt als
`RUECKGAENGIG-umbenennung.sh` im Paketordner (`mv -n`, überschreibt nichts). Bewusst **nicht**
angefasst: Verträge und Rechtstexte, CRM-Frontends, `morio-animation.html` (Animations-Experiment
ohne Seiteninhalt) sowie die Morio-Landings **in Projektordnern** (`reviewcrm-rt 6/`) — dort
könnte ein Server oder Build darauf verweisen. Drei Kandidaten gehörten bei näherer Prüfung
**fremden Projekten** (ReviewCRM, Theke 1): blind umbenannt wäre Kundenarbeit betroffen gewesen.

## Offene Punkte

- **Warnungs-Bereinigung der nginx-Config steht noch aus.** Die bereinigte Datei liegt auf dem
  Server als `/tmp/conf.clean`, Backup als `nginx.conf.bak-warnfix-20260827-183218`. Der
  Sicherheitsfilter der Claude-Umgebung blockte schreibenden **und** lesenden Zugriff auf die
  System-Config, daher muss der Nutzer selbst ausführen: `cp` → `nginx -t` → `nginx -s reload`,
  **Test vor dem Reload**, bei `[emerg]` das Backup zurückspielen. Inhalt: `text/html` aus zwei
  `gzip_types`-Zeilen entfernt (nginx komprimiert HTML implizit, die Wiederholung erzeugt nur die
  Warnung) und `ssl_stapling` bei crm-kiendl.de auskommentiert (Let's Encrypt hat OCSP im Mai 2025
  abgeschaltet, nginx ignorierte die Direktive ohnehin). Reine Rauschbeseitigung, danach
  `rm -f /tmp/conf.clean /tmp/nginx.conf.new`. Die vier `nginx.conf.bak-*` in `/opt/kiendl-crm/`
  bewusst liegen lassen — sie sind der Rückweg. #prüfen
- **Der Paketordner liegt in `Downloads`**, wo macOS optional automatisch aufräumt („Papierkorb
  nach 30 Tagen leeren"). Für die einzige aktuelle Kopie der Firmenwebsite kein guter Platz;
  Umzug nach `~/Morio-Solutions/` empfohlen, die Skripte arbeiten relativ. Noch nicht umgesetzt.
- Die 16 Fachtexte in **it/es/tr** sind maschinell erzeugter Marketingtext auf einer
  Firmenseite und sollten fachlich gegengelesen werden. #prüfen
- Automatische Lead-Anlage aus jeder Anfrage entfällt bewusst — die Anfrage landet unter
  *Anfragen* mit „als Lead übernehmen" als Klick.

## Verbindungen
- [[morio-crm]] — das Intranet-CRM, das jetzt die Anfragen entgegennimmt
- [[mobile-choreografie-portierung]] — warum die Animationen mobil brachen
- [[unerreichbarer-dienst-ufw-docker]] — warum das Formular acht Tage lang niemanden erreichte
- [[lenis-scroll-container-konflikt]] — Folgearbeit an denselben Accordions
- [[server-quellcode-drift]] — `gzip_static`-Falle, Einzeldatei-Mount, tote Rauchtests
- [[Responsive Rules — Mobile-first, no horizontal scroll, clamp typography, touch targets 44px]]
- [[cinematic-threejs-scrollytelling]] · [[Deploy Checklist]] · [[web-factory]]

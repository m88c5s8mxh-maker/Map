---
tags: [entity, projekt, crm, infrastruktur, morio-solutions]
sources: [raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md, raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md, raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]
updated: 2026-08-29
---

# Morio CRM (intra.moriosolutions.de)

Das produktive CRM von Morio Solutions. Diese Seite hält fest, **welches** System tatsächlich
läuft und wo sein Quellcode liegt — beides war lange falsch dokumentiert und hat einen
Datenverlust verursacht (siehe [[server-quellcode-drift]]).

## Was wirklich läuft

| | |
|---|---|
Stack | [[Next.js]] 15.5.19 · React 19 · PostgreSQL 16 · iron-session · Docker |
Container | `morio-app` (Image `morio-solutions-ai:latest`), `morio-db` |
Server | Hetzner, `178.104.201.195`, Projektpfad `/opt/morio-solutions-ai` |
Eingang | `kiendl-crm-nginx-1` bedient **alle sechs Domains**; `intra.moriosolutions.de` → `proxy_pass http://172.17.0.1:3001` |
Bereiche (18) | `abos agents analytics angebote automations copilot einstellungen kunden leads passwoerter projekte rechnungen team telefon uptime websites wissensbasis zeiterfassung` |

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Was NICHT läuft (die Verwechslung)

Es existiert ein zweites, gleichnamiges CRM: der **FastAPI-`reviewcrm`** (`main.py`, `frontend/`,
eigener nginx, `/opt/reviewcrm`). Er antwortet zwar noch auf `127.0.0.1:8000`, ist aber seit
rund zwei Monaten **nicht mehr verdrahtet** — sein `reviewcrm-nginx-1` steht auf „Exited".
Eine `nginx.conf` mit `server_name intra.moriosolutions.de` im Ordner beweist gar nichts;
maßgeblich ist allein, wohin `proxy_pass` der *aktiven* nginx-Instanz zeigt.

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Quellcode — welches Repo gilt

| Repo | Inhalt | gültig? |
|---|---|---|
`Beckomate88/MorioCRM`, Branch **`redesign-ui`** | der echte Next.js-Quellcode, Commit 19.08. 20:29 | **ja** |
`Beckomate88/MorioCRM`, Branch `main` | Stand 21. Juli, Logo `logo.png` | nein, veraltet |
`m88c5s8mxh-maker/CRM` (öffentlich) | der FastAPI-`reviewcrm`, letzter Commit Mai | anderes Programm |

**Falle:** Der Standardbranch des Repos ist `main`. Wer einfach klont, bekommt den Juli-Stand.
Immer `--branch redesign-ui`.

Beweisführung für die Branch-Zuordnung (übertragbares Vorgehen): der laufende Build
referenziert `logo-weiss.png`, `main` referenziert `logo.png`; und der Commit liegt auf die
Sekunde im selben Vorgang wie `deploy.tar.gz` auf dem Server.
Secrets liegen korrekt in **keinem** Repo — `.gitignore` verbietet es ausdrücklich; die echten
Werte kommen aus dem Server-Backup.

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Deploy — der funktionierende Weg

Vom Mac aus, ohne lokales Docker: **Quellcode per rsync hoch, Build auf dem Server.**
Das alte `deploy.sh` (`docker save` + `scp` des Images) setzt ein lokal gebautes Image voraus
und lief nur auf dem Windows-Rechner des Kollegen.

Repariert wurde:
- `rsync` überträgt jetzt auch `app components lib db public` — `--delete` wirkt bewusst **pro
  Ordner**, nie auf das Wurzelverzeichnis (dort liegen `.env`, `bridge/`, `backups/`).
- `scp .env.production → .env` ist entfernt. Vorher löschte **jeder Deploy** stillschweigend
  Google-, Twilio-, Hetzner- und Anthropic-Schlüssel auf dem Server.

Rückweg: vor jedem Deploy Image taggen (`:vor-vorschau-live`), zurück per `docker tag … :latest`
+ `docker compose up -d --no-deps app`. Siehe [[Rollback Plan]] und [[Deploy Checklist]].

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Betriebs-Eigenheiten

- **nginx-Konfiguration ist als einzelne Datei eingebunden** → der Container hängt am **Inode**,
  nicht am Pfad. Ein `mv` erzeugt einen neuen Inode, `nginx -t` und `reload` melden Erfolg,
  der Container liest aber weiter die alte Datei. Richtig: `cat neu > alt` — oder `cp neu alt`,
  das überschreibt ebenfalls den Inhalt der bestehenden Inode (am 27.08. so aufgespielt und
  verifiziert, bevor neu geladen wurde). Der Mount-Pfad auf dem Host ist
  `/opt/kiendl-crm/nginx.conf`.
- **`nginx` läuft nicht als Systemdienst** — der Host-Dienst ist `inactive` **und** `disabled`,
  alles läuft im Container `kiendl-crm-nginx-1` (nginx:alpine). Jeder `systemctl`-Check auf nginx
  ist deshalb ein Fehlalarm; prüfen mit `docker exec kiendl-crm-nginx-1 nginx -t`.
  > [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]
- `client_max_body_size` gilt **pro Server-Block** — eine Änderung an `intra` kann die anderen
  fünf Domains nicht erreichen. Steht jetzt auf **300 MB** (vorher 50), Zeitgrenzen 300 s.
- `proxy_pass http://dienst:port` löst nginx **beim Start** auf: fehlt der Container, startet
  nginx nicht und nimmt das CRM mit. Über Docker-DNS mit Variable gibt es stattdessen ein 502.
- Container läuft als `nextjs` (uid 1001), ein frisches Docker-Volume gehört aber `root` →
  das `Dockerfile` muss den Ordner **vor** dem Benutzerwechsel anlegen und `chown`en.
- Lint-Regel des Projekts verbietet synchron aus einem Effekt erreichbares `setState`.
  Hausmuster ist `.then()` statt `async/await` — sonst schlägt der **Build** fehl, nicht nur der Lint.
- Nach vielen schnellen SSH-Verbindungen sperrt der Server für ~2 Minuten (vermutlich
  fail2ban). HTTP läuft dabei ungestört weiter — abwarten statt nachdrücken.
- Bekannter Fremdfehler: `analytics_events_event_type_check` lehnt den Wert `heartbeat`
  laufend ab; jeder Heartbeat erzeugt einen DB-Fehler. Ein Migrations-Einzeiler behebt es.

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Backup

Vorhanden war nur ein Postgres-Dump (täglich 03:30, 7 Stände) — **auf derselben Platte wie die
Daten**. Ergänzt: Vorschau-Daten, `.env`-Archive (Rechte 600) und ein `stand-*.txt` mit
Containern, Image-Tags, Build-ID **und der Seitenliste des laufenden Builds**. Genau diese
Seitenliste als Soll-Zustand hätte die Regression aus [[server-quellcode-drift]] verhindert.
SQLite im WAL-Modus wird per `VACUUM INTO` gesichert, nicht per Kopie.

## Nachtrag 26.–28.08.2026 — Anfragen-Reiter, Formularstrecke, Build repariert

**Neuer Bereich `Vertrieb → Anfragen`** (19. Bereich), live und verifiziert: Tabelle
`inquiries` (14 Spalten, 3 Indizes), drei Endpunkte, Status-Workflow
(Neu → In Bearbeitung → Beantwortet → Kunde), „als Lead übernehmen", Volltextsuche.
Genau **ein** Pfad ist öffentlich (`/api/inquiries/public` in `PUBLIC_PATHS`), nach dem
Muster des Stripe-Webhooks: exakte URL, nicht der ganze Namensraum. Reihenfolge bewusst
**erst speichern, dann mailen** — geht die Mail schief, steht die Anfrage trotzdem im CRM
mit rotem Warnhinweis statt verloren zu sein.

Damit nimmt das CRM jetzt das Kontaktformular von [[moriosolutions-website]] entgegen:
`/api/contact` zeigt per exaktem nginx-Match auf Port 3001. Vorgeschichte und die zwei
Fehler, die das acht Tage lang verhindert haben, stehen in
[[unerreichbarer-dienst-ufw-docker]].

**Das Repo ließ sich nicht bauen — schon vorher.** 16 Typfehler, `next build` bricht ab.
Ursache: `React.ElementType` als Typ für Icon-Komponenten; bei dieser breiten Union löst
TypeScript die Props zur **Schnittmenge** auf, `size`/`color` werden dadurch `never`.
Die Hauskonvention ist `LucideIcon` (nutzt `empty-state.tsx` bereits). Gegengeprüft per
`git stash`: 16 Fehler vorher, 0 nachher. Commit `8171c08`, das Feature `a0bc272`.

**`.env.production` von 5 auf 18 Schlüssel ergänzt**, Werte byte-identisch mit der
Server-`.env`. Dazu kam u. a. `RESEND_API_KEY`, `ALERT_FROM`, `ALERT_EMAIL`, Twilio,
Google, Hetzner — und `MAGNIFIC_API_KEY`, das **nur** auf dem Server existierte und sonst
verloren gegangen wäre. `ANTHROPIC_API_KEY` und `APP_URL` wichen ab, hier gilt der Server.

> ⚠️ WIDERSPRUCH mit dem Abschnitt „Deploy — der funktionierende Weg" oben: dort steht,
> `scp .env.production → .env` sei **entfernt**. Am 26.08. lag die Zeile wieder/noch in
> `deploy.sh` (Zeile 27) und hätte 13 Schlüssel auf dem Server gelöscht. Entweder betrifft
> die frühere Reparatur ein anderes Skript, oder sie ist verlorengegangen. #prüfen
> Aktuell ist der Schritt **wirkungslos statt zerstörend**, weil beide Dateien deckungsgleich
> sind — das ist aber eine Momentaufnahme, keine strukturelle Lösung.

**`NOTIFY_CUSTOMERS` ist eine tote Variable.** Sie steht ausschließlich in
`docker-compose.yml`, kein `process.env.NOTIFY_CUSTOMERS` im Quellcode, kein Treffer im
gebauten Image, weder Bridge noch Skript liest sie; im Container kommt ein Leerstring an.
Sie schaltet nichts frei und zeigt nichts an — vermutlich Rest einer entfernten Funktion.
Streichen ist reine Kosmetik.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

### Es arbeitet jemand parallel an diesem Repo

Belegt: zwei fremde Landingpage-Deploys, ein fremder CRM-Build, ein fremder Image-Tag
`before-anfragen-deploy` — und die eigenen Änderungen wurden **von außen committet**
(`8171c08`, `a0bc272`), später standen 3 fremde Commits auf `origin/redesign-ui`
(Bank-Import, Excel-Import, Modelle, Suchberater — 23 Dateien). Ein Build aus dem alten
Baum hätte sie gelöscht. **Vor jedem Build: `git fetch` und Abgleich `0/0` herstellen.**
Diesmal ging es gut aus; die umgekehrte Richtung ist genauso wahrscheinlich.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

### Zwei weitere Deploy-Landminen dieser Runde

- **`migrate.sh` liegt auf dem Server nicht in git.** Es wurde versehentlich überschrieben,
  das Original ist nicht wiederherstellbar; die drei nur serverseitig angelegten Migrationen
  (`add-freigabe-login`, `add-vorschau`, `vorschau-zugaenge`) fehlen jetzt in seiner Liste.
  Sie sind angewandt, es ist nichts kaputt — aber die Einträge müssten zurück. #prüfen
  Konsequenz: Migrationen **einzeln** anwenden statt die ganze Liste laufen zu lassen,
  und vorher einen frischen Dump ziehen.
- **Ein 85 Byte großes `~/package-lock.json`** lässt Next das Home-Verzeichnis als
  Workspace-Root sehen — `server.js` landet dann eine Ebene tiefer im `standalone`-Output.
  Der Dockerfile kopiert `.next/standalone` flach und ruft `node server.js`: der Container
  wäre in eine Crash-Loop gelaufen. Nicht das Lockfile anfassen, sondern den **echten**
  standalone-Root hochladen.
- Der Dockerfile **baut nicht selbst**, er verpackt nur den vorher erzeugten
  `standalone`-Output. Ein `pkill` auf den Dev-Server kann die Build-Artefakte zerschießen —
  `.next` vor dem Upload prüfen.

## Offene Risiken

- Das **Server-Root-Passwort steht im Klartext** in `~/Downloads/reviewcrm-rt/deploy.py`.
  Passwort ändern, Zeile löschen — der Zugang läuft ohnehin über den SSH-Schlüssel.
- Der Quellcode auf `/opt/morio-solutions-ai` bleibt eine Stolperfalle für jeden, der von dort
  baut, solange nicht bei jedem Deploy die echte Quelle darüber gespiegelt wird.

## Verbindungen
- [[server-quellcode-drift]] — die Regression und ihre Lehre
- [[vorschau-webseiten]] — das darauf aufbauende Feature
- [[moriosolutions-website]] — die öffentliche Seite, deren Anfragen hier landen
- [[unerreichbarer-dienst-ufw-docker]] — warum die Formularstrecke acht Tage tot war
- [[Next.js]] · [[Deploy Checklist]] · [[Rollback Plan]] · [[CRM]]

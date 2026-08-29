---
tags: [concept, deployment, postmortem, hoch]
sources: [raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md, raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md, raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md, raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]
updated: 2026-08-29
---

# Server-Quellcode-Drift

## Definition

Wenn ein Deploy-Skript nur das **fertig gebaute Artefakt** überträgt (Docker-Image, Bundle) und
den Quellcode nicht, dann ist der Quellcode, der auf dem Server liegt, **kein Beweis** für das,
was dort läuft. Er kann Monate alt sein oder aus einer ganz anderen Entwicklungslinie stammen.
Wer von diesem Ordner aus neu baut, überschreibt die Produktion mit einem Geisterstand.

## Der Schadensfall

`deploy.sh` des [[morio-crm]] übertrug ausschließlich Image, `docker-compose.yml` und die
SQL-Dateien — nie `app/`, `components/`, `lib/`. Der Ordner auf dem Server war deshalb ein
Juni-Stand. Ein Build daraus hat drei komplette Bereiche der Produktion gelöscht
(`abos`, `angebote`, `telefon`) und das Logo ausgetauscht. Der Server-Stand war dabei nicht
bloß älter, sondern eine **andere Linie**: er enthielt ein `anfragen`, das im Live-Build fehlte.

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

Verschärfend: nach dem Rollback des Images lag der **fehlerhafte `.next`-Build weiterhin im
Projektordner**. Der nächste beliebige `docker build` hätte denselben Schaden erneut angerichtet,
ohne erkennbaren Auslöser. Ein Rollback des Images ist also kein vollständiges Rollback.

## Die Prüfung, die gefehlt hat

Vor jedem Build aus einem Server-Ordner:

1. **`deploy.sh` lesen.** Die `scp`/`rsync`-Zeilen sagen in Sekunden, ob Quellcode überhaupt
   übertragen wird. Das allein hätte gereicht.
2. **Soll-Ist-Vergleich gegen das laufende Artefakt.** Aus dem Image lässt sich die Liste der
   gebauten Seiten/Routen lesen, auch wenn der Quellcode nicht rekonstruierbar ist. Stimmt sie
   nicht mit dem Ordner überein, ist der Ordner nicht die Quelle.
3. **Diese Soll-Liste ins Backup schreiben.** Sie in `stand-*.txt` mitzusichern macht die
   Regression bei jedem künftigen Deploy sichtbar, statt sie einem Zufallsblick zu überlassen.

## Verwandte Deploy-Fallen aus derselben Sitzung

| Falle | Wirkung | Gegenmittel |
|---|---|---|
`scp .env.production → .env` im Deploy-Skript | jeder Deploy löscht still die Server-Secrets | `.env` nur anlegen wenn keine da ist; fehlende Schlüssel **melden** statt überschreiben |
`rsync --delete` auf das Zielwurzelverzeichnis | löscht `.env`, `bridge/`, `backups/` | pro Ordner spiegeln, nie die Wurzel |
Einzeldatei-Mount in nginx + `mv` | Container hängt am alten Inode, `reload` meldet trotzdem Erfolg | `cat neu > alt` statt `mv` |
`proxy_pass` auf einen Container | fehlt der Container, startet nginx nicht und nimmt alle Domains mit | Docker-DNS mit Variable → im schlimmsten Fall 502 |
`ADD CONSTRAINT` in einer Migration | kein `IF NOT EXISTS`; beim zweiten Lauf bricht `ON_ERROR_STOP` ab | Migrationen idempotent schreiben und zweimal laufen lassen |
neue Migration hochgeladen, `migrate.sh` vergessen | Datei liegt da, wird aber nie ausgeführt | Ausgabe der Migration gegenlesen, nicht nur den Exit-Code |

## Nachtrag 2026-08-27 — drei weitere Fallen aus der Website-Sitzung

Alle drei folgen demselben Muster: **die Prüfung meldet Erfolg, ausgeliefert wird etwas anderes.**

| Falle | Wirkung | Gegenmittel |
|---|---|---|
`gzip_static on`, aber nur `index.html` deployt | nginx bevorzugt die alte `index.html.gz` und liefert sie an praktisch jeden Browser — der Deploy sieht erfolgreich aus, live ändert sich nichts | `.gz` bei jeder Änderung neu erzeugen; entpackten Hash gegen `index.html` prüfen |
`systemctl is-active nginx` als Rauchtest | meldet „läuft nicht", obwohl nginx im Container `kiendl-crm-nginx-1` läuft — ein Alarm, der immer schreit, wird ignoriert, und dann auch der echte | den Container prüfen (`docker exec … nginx -t`), nicht den toten Dienst |
Rollback-Anweisung zeigt auf `systemctl reload nginx` | läuft ins Leere — ausgerechnet dort, wo man sie benutzt, wenn etwas kaputt ist | Rückweg **einmal ausführen**, nicht nur aufschreiben |

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

**Bestätigt** wurde dabei die Einzeldatei-Mount-Falle aus der Tabelle oben, mit einer Präzisierung:
`cp quelle ziel` ist der richtige Weg — es überschreibt den Inhalt der bestehenden Inode, der
Bind-Mount bleibt gültig. `mv` und `scp` legen eine neue Inode an, der Container liest weiter die
alte Fassung, und `nginx -t` plus `reload` melden trotzdem Erfolg. Vor dem Reload nachweisen,
dass der **Container** die neue Datei sieht.

Ergänzend zum Vorgehen bei Änderungen an einer Config, die mehrere Domains bedient (hier sechs,
mit **zwei identischen** `try_files`-Zeilen für verschiedene Domains): **Baseline aller Endpunkte
vor dem Eingriff aufnehmen, Änderung lokal an der Kopie machen, Diff prüfen, dann erst aufspielen,
danach gegen dieselbe Baseline messen.** Details am konkreten Fall in [[moriosolutions-website]].

Und eine methodische Lehre aus derselben Sitzung: Ein **Escaping-Fehler im eigenen `grep`** meldete
„0 Treffer" für beide `try_files`-Varianten — beinahe ein Befund über ein überschriebenes Serverfile,
tatsächlich ein Messfehler. Ein überraschender Negativbefund gehört gegengeprüft, **bevor** er zum
Befund wird. Dasselbe passierte mit einem vermeintlichen Leak: `index.html.bak-…` gab HTTP 200,
ausgeliefert wurde aber nur die Startseite über den `try_files`-Fallback.

## Übertragbare Regel

**Ein Artefakt-Deploy ohne Quellcode-Übertragung erzeugt zwangsläufig Drift.** Entweder das
Deploy-Skript spiegelt die Quelle mit, oder der Server-Ordner muss als „nicht vertrauenswürdig"
gelten. Ein Zwischending gibt es nicht — und es fällt erst auf, wenn jemand von dort baut.

Zweite Regel, aus dem Wiederherstellungsteil: **Rückweg vor dem Eingriff anlegen und ihn
nachweisen.** Image taggen, Konfiguration sichern, nach jedem Schritt alle betroffenen Domains
prüfen — vorher *und* nachher, mit identischer Messung. Siehe [[Rollback Plan]],
[[Deploy Checklist]] und [[incident-response]].

## Nachtrag 26.08.2026 — die Drift schlägt in die andere Richtung aus

Derselbe Ordner, umgekehrter Fehlschluss. Beim Deploy des Anfragen-Reiters wurde der eigene
Checkout gegen den **Quellcode** auf `/opt/morio-solutions-ai` verglichen. Der enthielt
`/freigabe`, `/api/freigabe` und `/passwort-aendern`, die im eigenen Baum fehlten — und
tatsächlich einen Commit (`f6bc90c`), den das eigene Repo überhaupt nicht kennt. Schluss:
„die Bäume sind in beide Richtungen auseinandergelaufen, ein Deploy löscht Live-Funktionen."

**Das war ein Fehlalarm** — und zwar genau der Fehler, vor dem diese Seite warnt, nur mit
umgekehrtem Vorzeichen. Der Vergleich gegen das **laufende Image** ergab: 20 Dashboard-Seiten
und 38 API-Routen identisch, **keine einzige nur live**, dazu die zwei neuen. Der Server-
Quelltext war ein nie gebauter Parallelstand: lokales Repo **ohne Remote**, Branch `master`,
**39 uncommittete Änderungen** inklusive gelöschtem `app/page.tsx`. Er enthielt `/freigabe`,
das laufende Image nicht.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

**Die verschärfte Regel:** Der Server-Quellcode ist nicht nur kein Beweis für das, was läuft —
er ist auch **kein gültiger Grund, einen Deploy abzubrechen**. Die einzige belastbare Referenz
ist in beide Richtungen dieselbe: die **Routen-/Seitenliste aus dem laufenden Artefakt**.
Ist der eigene Build eine echte Obermenge davon, löscht er nichts, egal wie fremd der Ordner
daneben aussieht.

Kostenpunkt des falschen Alarms: eine abgebrochene Sitzung, eine unnötige Rückfrage an den
Nutzer nach dem „richtigen Branch" — und die Gefahr, dass die Warnung beim nächsten Mal
ignoriert wird, wenn sie berechtigt ist.

## Nachtrag 25.08.2026 — dritte Variante: der lokale Arbeitsordner

Dieselbe Drift, wieder ein anderer Ordner. `~/morio-solutions-ai` auf dem Arbeitsrechner war
**kein git-Repo**, sondern eine losgelöste Kopie — und kannte weder die neue Sidebar-Gruppierung
noch vier live existierende Seiten. Zwei Einbauversuche gingen an die falsche Stelle, bevor ein
Klon des echten Repos (`redesign-ui`) den Unterschied zeigte. Ein `deploy.sh` aus diesem Ordner
hätte die Produktion auf den alten Stand zurückgesetzt.

**Verallgemeinerung:** Nicht der *Server*-Ordner ist das Problem, sondern **jeder Ordner ohne
Remote**. Ein Verzeichnis, das nicht `git fetch` kann, kann auch nicht veralten *hörbar* — es
altert still. Erste Prüfung vor jeder Arbeit an fremdem Bestand: `git remote -v` und
`git status`. Details am Fall in [[morio-crm]] und [[morio-studio]].

> [Quelle: raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]

## Offene Fragen

- Lohnt ein CI-Push-Deploy (Push auf `main` → rsync), wie es das `Server`-Repo schon vormacht?
  Das würde die Drift strukturell unmöglich machen.

## Verbindungen
- [[morio-crm]] — das betroffene System
- [[vorschau-webseiten]] — das Vorhaben, bei dem es passierte
- [[unerreichbarer-dienst-ufw-docker]] — dieselbe Familie: gebaut ist nicht erreichbar
- [[moriosolutions-website]] — die zweite Codebasis auf demselben Server
- [[Rollback Plan]] · [[Deploy Checklist]] · [[incident-response]] · [[5 Whys Root Cause Analysis]]

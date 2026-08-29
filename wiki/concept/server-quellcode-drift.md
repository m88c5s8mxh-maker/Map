---
tags: [concept, deployment, postmortem, hoch]
sources: [raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md, raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]
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

## Offene Fragen

- Lohnt ein CI-Push-Deploy (Push auf `main` → rsync), wie es das `Server`-Repo schon vormacht?
  Das würde die Drift strukturell unmöglich machen.

## Verbindungen
- [[morio-crm]] — das betroffene System
- [[vorschau-webseiten]] — das Vorhaben, bei dem es passierte
- [[Rollback Plan]] · [[Deploy Checklist]] · [[incident-response]] · [[5 Whys Root Cause Analysis]]

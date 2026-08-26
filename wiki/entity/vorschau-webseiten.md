---
tags: [entity, projekt, crm, feature, morio-solutions]
sources: [raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]
updated: 2026-08-26
---

# Preview Webseiten (Vorschau-Reiter im CRM)

Kunden-Freigabeworkflow für Website-Entwürfe, **nativ** im [[morio-crm]] gebaut.
Erreichbar unter `intra.moriosolutions.de` → **Projekte → Preview Webseiten**.

**Stand: live und deployed** (Stand der Sitzung vom 2026-08-20).

## Die Entscheidung: nativ statt separater Dienst

Zuerst wurde ein fertiges Node-Tool (Port 4300, SQLite) per Proxy angedockt. Verworfen zugunsten
eines nativen Einbaus, weil das CRM die Bausteine schon hatte — `site_previews`, `/preview/[id]`,
Kundenportal mit Token unter `/portal/[token]`, `clients`, `projects.preview_url`, gesetzter
`ANTHROPIC_API_KEY`.

| | nativ | separater Dienst |
|---|---|---|
Design | passt automatisch (Haus-Token) | müsste angeglichen werden |
Anmeldung | die vorhandene | zweite, plus Dienst-Schlüssel |
Datenbank | nur Postgres | zusätzlich SQLite |
Kundenzugang | vorhandenes Portal-Muster | eigene Domain nötig |

Der separate Dienst wurde auf Anweisung des Nutzers gelöscht und ist **nicht wiederherstellbar**
(kein Time Machine, keine Drive-Kopie, `rm -rf`). Die Funktion wurde nativ neu gebaut.

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Was es kann

**Admin (Reiter unter Projekte)**
- Vorschau anlegen → **erzeugt automatisch ein Projekt** und setzt `preview_url`; passt der
  Kundenname, wird gleich verknüpft
- ZIP hochladen → wird entpackt, ein einzelner Wurzelordner wird geglättet, Abschnitte und
  Farben werden ausgelesen
- **Werkbank** öffnet sich automatisch nach Anlegen/Upload: Iframe der Seite, „Als HTML
  herunterladen", Hintergrundfarbe (so lassen / einfarbig / zweifarbig), Abschnitte umsortieren.
  „Anwenden" wirkt **sofort** und legt eine neue Version an; alte Versionen bleiben als Rückweg
- Entwürfe der Kunden ansehen und per Knopfdruck **übernehmen oder ablehnen**, Anmerkungen,
  Verlauf, drei Kennzahlen

**Kunde (Token-Link, ohne Konto)** — Seitenfenster, Farbwahl, Abschnitte ziehen, Textfeld für
konkrete Wünsche. **Nichts wirkt sofort:** beim Einreichen entsteht ein HTML als Entwurf, das
Admins prüfen und übernehmen.

Statusabbildung Vorschau → Projekte: `draft → design`, `in_review → development`,
`approved → launch`. Neue Vorschauen starten auf `in_review`, nicht `draft`.

## Tragende Entwurfsentscheidungen

- **Löschen wird nicht gespiegelt.** Ein verworfener Entwurf soll keinen CRM-Eintrag mit
  Zeiterfassung und Rechnungsbezug mitreißen; nur der Verweis wird gelöst.
- **Ein Entwurf speichert nur die geänderte Startseite**, nicht eine Kopie der 11–31 MB.
  Bilder und Videos kommen per Rückfall aus der Basisversion; kopiert wird erst beim Übernehmen.
- **Websites tragen ihre Struktur selbst.** Die erzeugten Seiten haben bereits
  `data-screen-label`-Marken (`Hero`, `Karte`, `Über uns` …), flach auf Tiefe 1 — das Umsortieren
  muss nichts raten und braucht keinen Parser.
- **Hintergrundfarbe per Überschreib-Block**, nicht durch Schneiden in fremdem CSS: der
  Hintergrund steht zweimal fest im Dokument, nicht in einer Variablen.
- **Farbwerte werden streng geprüft** — sie kommen vom Kunden und landen in einem `<style>`-Block.
  Fünf CSS-Einschleusungsversuche wurden im Test abgewiesen.
- **Uploads brauchen ein Volume**, kein Postgres: die Seiten sind 11–31 MB mit Videos und
  WebP-Sequenzen.

> [Quelle: raw/sessions/2026-08-20-preview-reiter-in-crm-intranet-einbauen.md]

## Zugänge

`adkins@` und `becker@moriosolutions.de` wurden mit einem Startpasswort und
`must_change_password = true` angelegt. Zwangswechsel war im CRM **nicht** vorhanden und wurde
mitgebaut: Flag in der Session, Middleware-Umleitung auf `/passwort-aendern` (die Seite selbst
muss öffentlich sein, sonst entsteht eine Schleife), eigene Route zum Setzen.

## Prüfung vor dem Deploy

Der Ablauf wurde in einer **komplett isolierten Umgebung** gegen echtes Postgres durchgespielt —
eigene Datenbank, eigenes Docker-Netz, eigener Port, das echte gebaute Image; `morio-app`,
`morio-db` und das Live-Volume unberührt. **36/36** Prüfungen im ersten Durchgang, **20/20** für
die Werkbank. Die beiden entscheidenden: die Kundenseite bleibt bis zur Übernahme exakt
unverändert, und danach zeigt sie wirklich die neue Fassung.

Das ist das Muster, das nach der Regression aus [[server-quellcode-drift]] eingeführt wurde und
sich bewährt hat — siehe auch [[testing-strategy]] und [[Deploy Checklist]].

## Nächste Schritte

- Unterseiten separat editierbar machen — „Übernehmen" setzt derzeit immer `startseite` als
  angepasste Seite; `datenschutz.html`/`impressum.html` gehen mit, aber nicht einzeln
- Design-Feinschliff durch den Nutzer nach dem Livegang
- Klären, was für die Kundenseite noch fehlt (war ausdrücklich als nächstes Thema angekündigt)
- Claude-Fenster, Änderungsvorschläge und Protokoll aus dem alten Tool nachziehen
- Offen aus [[morio-crm]]: Root-Passwort im Klartext, CI-Deploy statt Skript

## Verbindungen
- [[morio-crm]] — das System, in dem es lebt
- [[server-quellcode-drift]] — der Fehlschlag, der diesen Bau um zwei Tage verzögert hat
- [[Next.js]] · [[Deploy Checklist]] · [[testing-strategy]]

---
session_id: 2f5cfbdb-1b5b-403e-b815-7b64c81585db
title: "Theke 1 Referenzlink auf Moriosolutions konfigurieren"
date: 2026-08-21
cwd: /Users/tyrone/Downloads/moriosolutions-website
duration_min: 142
score: 37
tier: 1
tools: [Bashx32]
tags: [session, claude-code]
---

# Theke 1 Referenzlink auf Moriosolutions konfigurieren

> Session vom 2026-08-21 · 142 Min · Arbeitsverzeichnis `/Users/tyrone/Downloads/moriosolutions-website`

## Verlauf

### 👤 User

bei der moriosolutions seite kannst du bei referenzen wenn man auf theke 1 drückt hier hin weiterleiten https://theke1.bar

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

### 🤖 Claude

Erledigt. Die Referenz-Karte „Theke 1" verlinkt jetzt auf https://theke1.bar.

**Geändert:** [site/index.html:735](Downloads/moriosolutions-website/site/index.html#L735)

```
- <a href="#" data-reveal="" data-refcard="" ...>
+ <a href="https://theke1.bar" target="_blank" rel="noopener" data-reveal="" data-refcard="" ...>
```

Öffnet in neuem Tab mit `rel="noopener"` — genau wie die Özlem-Cengiz-Karte daneben.

Zwei Hinweise:
- `site/index.html.gz` habe ich neu erzeugt, weil in der nginx-Config `gzip_static on` steht ([deploy/moriosolutions.de.nginx:61](Downloads/moriosolutions-website/deploy/moriosolutions.de.nginx#L61)) — die alte .gz-Datei wäre sonst weiter mit dem `href="#"` ausgeliefert worden.
- Ich habe den aktuellsten Ordner bearbeitet: `~/Downloads/moriosolutions-website` (Stand 20. Aug). Es liegen daneben noch `moriosolutions-website 2` und `3` vom 5. Aug — die sind unangetastet.

Die Karte „Kiendl CRM" hat übrigens ebenfalls noch `href="#"` — sag Bescheid, wenn die auch ein Ziel bekommen soll. Deployt habe ich nichts; das läuft über `deploy/deploy.sh`, wenn du willst.

### 👤 User

deploy den theke 1 link bei referenzen den kasten gibt es ja bereits zu kiendl gebe ich dir dannach anweisungen

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

### 🤖 Claude

Live-Seite und lokale Datei unterscheiden sich **nur** in meiner einen Zeile. Jetzt Dry-Run:

> 🔧 Bash

### 🤖 Claude

Dry-Run sauber: genau 2 Dateien (`index.html` + `index.html.gz`), keine Altdateien betroffen, Rechtsseiten geschützt. Jetzt echt:

> 🔧 Bash

### 🤖 Claude

Verbindung mitten im Lauf abgebrochen — der Backup-Schritt kam nicht durch. **Es wurde nichts geschrieben** (rsync läuft erst nach dem Backup). Prüfe SSH:

> 🔧 Bash

### 🤖 Claude

SSH läuft wieder — der Abbruch war transient (das Skript öffnet mehrere Verbindungen kurz hintereinander; sieht nach sshd-Ratelimit/fail2ban aus). Zweiter Versuch:

> 🔧 Bash

### 🤖 Claude

rsync ist durch (2 Dateien übertragen), nur die Nacharbeit-SSH-Session wurde wieder abgewiesen. Verifiziere live per HTTP:

> 🔧 Bash

> 🔧 Bash

### 🤖 Claude

Deployt und live verifiziert. ✅

**Was live ist:**
- `https://moriosolutions.de` → Referenz-Karte „Theke 1" verlinkt auf `https://theke1.bar` (neuer Tab, `rel="noopener"`)
- Auch in der vorkomprimierten `index.html.gz` enthalten — also identisch für gzip- und non-gzip-Clients
- www-Variante: HTTP 200
- Impressum / Datenschutz / AGB: alle 200, unangetastet
- Backup vorher gezogen: `/var/backups/moriosolutions/site-20260821-171208.tar.gz` (2.0M)
- Ownership auf `www-data:www-data` gesetzt

**Zwei Sachen, die du wissen solltest:**

1. **SSH bricht wiederholt ab.** Zwei Deploy-Läufe sind mit `Connection refused` gestorben — beim ersten vor dem Upload, beim zweiten *nach* dem rsync in der Nacharbeit-Phase (chown/nginx-reload/Rauchtest). Das Skript öffnet 4–5 Verbindungen kurz hintereinander, sieht nach fail2ban- oder `MaxStartups`-Ratelimit aus. Deshalb habe ich chown manuell nachgezogen. Ein `nginx -t && systemctl reload nginx` war für statische Dateien nicht nötig — der neue Inhalt wird nachweislich ausgeliefert. Wenn du willst, kann ich das Skript auf eine einzige wiederverwendete SSH-Verbindung (`ControlMaster`) umstellen, dann passiert das nicht mehr.

2. **Der erste Deploy-Lauf hat nichts geschrieben** — Abbruch kam vor rsync. Kein halb-deployter Zustand entstanden.

Der Kasten „Kiendl CRM" steht weiterhin auf `href="#"` — ich warte auf deine Anweisungen dazu.

### 👤 User

ja schreib das um und füge dann den link in den kasten damit man sobald man drauf klickt direkt auf der theke 1 website landet

### 🤖 Claude

You've hit your session limit · resets 7:20pm (Europe/Berlin)

### 👤 User

mach weiter der link funktioniert bereits

### 🤖 Claude

Zwei Dinge: Deploy-Skript auf eine SSH-Verbindung umstellen, und den Klick auf die Theke-1-Karte prüfen. Zuerst schaue ich, ob JS den Klick abfängt — in einer horizontalen Scroll-Sektion passiert das oft:

> 🔧 Bash

> 🔧 Bash

### 🤖 Claude

JS fängt nichts ab — nur Hover-Effekte. Der Klick geht also durch. Aber es gibt einen Mobile-Layer (`ms-mobile`) — prüfe, ob der eigene Referenz-Karten hat:

> 🔧 Bash

### 🤖 Claude

Mobile-Layer ist nur ein `<style>`-Block, keine zweiten Karten — der Theke-1-Link gilt also für Desktop und Mobil. Jetzt das Deploy-Skript. Ich sehe mir den Rest an:

> 🔧 Bash

### 🤖 Claude

Klar. Fünf frische SSH-Verbindungen in wenigen Sekunden — genau das hat fail2ban/`MaxStartups` ausgelöst. Ich stelle das Skript auf eine einzige, geteilte Verbindung um:

> 🔧 Bash

> 🔧 Bash

> 🔧 Bash

### 🤖 Claude

Dry-Run läuft durch, 0 Dateien zu übertragen — bestätigt zusätzlich, dass Live und Lokal identisch sind. Jetzt der Beweis, dass wirklich nur *eine* Anmeldung stattfindet:

> 🔧 Bash

### 🤖 Claude

Das 90-Sekunden-Fenster hat noch den vorherigen Dry-Run mit erfasst. Enger messen:

> 🔧 Bash

> 🔧 Bash

### 🤖 Claude

Beides erledigt.

**1. Deploy-Skript auf eine gemeinsame SSH-Verbindung umgestellt** — [deploy/deploy.sh:81-108](Downloads/moriosolutions-website/deploy/deploy.sh#L81-L108)

`ControlMaster` baut jetzt *eine* Verbindung auf, alle Folgeschritte teilen sie über einen Unix-Socket. Dazu:
- Alle fünf Kontaktpunkte umgestellt (Prüfung, Orphan-Scan, Backup, rsync, Nacharbeit) — die beiden rsync-Aufrufe über `-e "$RSYNC_SSH"`
- 3 Verbindungsversuche mit steigender Wartezeit, falls die Sperre schon greift, plus Hinweis auf `fail2ban-client status sshd`
- `trap ssh_close EXIT` schließt den Socket auch bei Abbruch
- `ServerAliveInterval` gegen stille Timeouts
- Socket in `/tmp`, nicht `$TMPDIR` — ein `ControlPath` darf inkl. Pfad ~104 Zeichen nicht überschreiten, und macOS' `$TMPDIR` ist dafür zu lang

**Gemessen am Server-Log:** vorher 3 Anmeldungen pro Dry-Run (5 beim echten Deploy), jetzt genau 1. Leerlauf-Referenz war 1 pro Abfrage, im Skript-Fenster kamen 2 an — davon 1 meine Messabfrage.

**2. Theke-1-Karte** — war schon mit dem letzten Deploy live und ist verifiziert:
- Die gesamte Karte ist das `<a>`-Element, Bild und Titel inklusive — ein Klick irgendwo drauf landet direkt auf theke1.bar
- JS fängt nichts ab: `[data-refcard]` bekommt in [index.html:1277](Downloads/moriosolutions-website/site/index.html#L1277) nur Hover-Handler, kein `click`/`preventDefault`
- Der Mobile-Layer `ms-mobile` ist nur ein `<style>`-Block, keine zweite Kartengruppe — gilt also für Desktop und Mobil gleichermaßen

Neu deployen war nicht nötig: `deploy.sh` liegt außerhalb von `site/` und ist reines Werkzeug. Der Dry-Run meldet 0 zu übertragende Dateien, Live und Lokal sind deckungsgleich.

**Zum Kiendl-Kasten:** der steht weiter auf `href="#"`. Welches Ziel soll da rein? Ein öffentlicher Link fehlt mir — `intra.moriosolutions.de` ist das eingeloggte CRM und wäre auf einer öffentlichen Referenzkarte wohl falsch. Sag mir die URL, dann baue ich sie nach demselben Muster ein und deploye zusammen mit allem anderen.

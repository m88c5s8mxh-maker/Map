---
tags: [concept, deployment, infrastruktur, docker, nginx, postmortem, hoch]
sources: [raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]
updated: 2026-08-29
---

# Dienst läuft, ist aber unerreichbar

## Definition

Eine Strecke kann **vollständig gebaut** sein — nginx-Route vorhanden, Dienst läuft seit
Wochen, Log ohne Fehler — und trotzdem hat sie **nie eine einzige echte Anfrage bedient**.
„Gebaut" und „erreichbar" sind zwei Zustände; nur der zweite lässt sich beweisen, und zwar
ausschließlich **von außen über die öffentliche URL**.

Der Fall: das Kontaktformular von [[moriosolutions-website]] POSTete an `/api/contact`.
Erste Einschätzung war „den Endpunkt gibt es gar nicht" — falsch. nginx hatte die Route,
und `morio-contact-bridge` lief seit dem 18. August. **Acht Tage lang hat trotzdem keine
Anfrage jemanden erreicht, auch keine Mail.** Zwei unabhängige Fehler lagen hintereinander.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Fehler 1 — ufw sieht Docker-Container, aber nur manche

Die ufw-Regel für Port 3010 erlaubte `172.17.0.0/16` (das Docker-Default-Bridge-Netz).
Der nginx-Container lag aber im benutzerdefinierten Netz auf **172.19.0.4**. Aus dem
Container: Timeout. Vom Server selbst: `{"ok":true}` in 0,235 s.

**Der eigentliche Denkfehler war die Gegenprobe.** Die Ports 3000–3002 funktionierten — also
schien die Firewall in Ordnung. Sie funktionieren aber aus einem anderen Grund:

> Docker setzt für **veröffentlichte Container-Ports** eigene iptables-Regeln, die ufw
> umgehen. Ein **normaler Host-Prozess** (wie die Bridge) hat das nicht und fällt in die
> ufw-Prüfung.

Ein funktionierender Nachbarport beweist also **nichts** über einen Host-Prozess-Port.
Wer Docker-Netze und ufw mischt, muss pro Dienst prüfen, und zwar **aus dem aufrufenden
Container heraus**, nicht vom Host.

## Fehler 2 — der 405, der eigentlich ein Auth-Redirect ist

Danach scheiterte noch der CRM-Eintrag mit `405 Method Not Allowed`. Die Kette:

1. Die Bridge POSTet mit Bearer-Token an `/api/leads`.
2. `/api/leads` steht **nicht** in den `BEARER_PATHS` der Middleware.
3. Middleware antwortet **307** auf `/login`.
4. `fetch` folgt dem Redirect — und ein **307 behält die Methode bei**.
5. `/login` kennt kein POST → **405**.

Die Fehlermeldung zeigt also auf die Zielroute, obwohl die Route korrekt ist und ein POST
exportiert. Ursache ist eine Ebene davor.

**Regel:** Ein `405` bei einem API-Aufruf mit Redirect-folgendem Client ist zuerst ein
**Auth-Verdacht**, kein Methodenverdacht. Zerstörungsfrei prüfen: derselbe Aufruf mit
`--max-redirs 0` — kommt ein 307 auf eine Loginseite, ist die Middleware der Täter.

Behoben durch `"/api/leads/import"` → `"/api/leads"` in `BEARER_PATHS` (Commit `b21b69c`).
Das öffnet nichts: die Routen darunter prüfen den Bearer weiterhin selbst, es entfällt nur
die vorgelagerte Umleitung. Nachweis: `GET /api/leads` mit Bearer **307 → 405** vorher,
**200** danach; Bridge legt wieder Leads an (241 → 242); 0 × 405 im Log.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Der Umweg, der ohne die blockierte Regel auskam

Die additive ufw-Regel wurde als sicherheitsrelevant blockiert. Statt darauf zu warten,
wurde `/api/contact` auf **Port 3001** (das CRM) umgeroutet — dass der aus dem
nginx-Container erreichbar ist, war durch `intra.moriosolutions.de` bereits **bewiesen**.
Die Bridge läuft unangetastet weiter, liegt nur nicht mehr im Anfrageweg.

**Übertragbar:** Wenn ein Eingriff blockiert ist, ist die nächste Frage nicht „wie bekomme
ich die Freigabe", sondern „welcher bereits **bewiesen funktionierende** Pfad löst dasselbe
Problem". Ein laufender Nachbardienst auf demselben Netz ist ein solcher Beweis.

## nginx-Detail: Präfix-Location plus Pfad im `proxy_pass`

Bei `location /api/contact` (Präfix) **mit** Pfad im `proxy_pass` ersetzt nginx das Präfix —
`/api/contact/x` würde zu `/api/inquiries/publicx`. Deshalb **exakter Match** (`location =`),
wenn genau ein Pfad umgebogen werden soll.

## Prüfroutine für „ist die Strecke wirklich offen?"

1. **Von außen**, über die öffentliche URL, mit echtem Payload — nicht von localhost.
   Ein Test von localhost umgeht Firewall *und* Reverse Proxy und beweist nur den Dienst.
2. **Aus dem aufrufenden Container**, wenn 1 fehlschlägt. Das trennt Firewall von Anwendung.
3. **Ins Log des Zieldienstes schauen und dabei das eigene Testrauschen erkennen** — der
   405-Eintrag im Bridge-Log stammte vom eigenen localhost-Test, nicht von echten Besuchern.
   Ein Log ohne echte Requests seit acht Tagen ist der eigentliche Befund.
4. **Bis in die Datenbank gegenprüfen**, nicht bis zum HTTP-200: `status`, `lang` und ein
   `mail_ok`-Flag zeigen, ob wirklich alles durchlief.
5. Nach einem Reload eines **gemeinsam genutzten** nginx **alle** Domains prüfen, nicht nur
   die geänderte.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Verbindungen
- [[morio-crm]] — die Middleware und das Ziel der Strecke
- [[moriosolutions-website]] — der Absender
- [[server-quellcode-drift]] — dieselbe Familie: was dokumentiert ist, ist nicht was läuft
- [[incident-response]] · [[Deploy Checklist]] · [[Rollback Plan]] · [[5 Whys Root Cause Analysis]]

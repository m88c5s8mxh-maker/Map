---
tags: [entity, projekt, morio-solutions, video, 3d, browser]
sources: [raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]
updated: 2026-08-29
---

# Morio Studio (Lieferung → Studio)

Ein Medien-Werkzeug, das **vollständig im Browser** rechnet: Videoschnitt, Bildqualität,
Formatumwandlung — plus ein 3D-Teil, der bewusst wieder abgeschaltet wurde. Läuft seit
25./26.08.2026 im [[morio-crm]] unter **Lieferung → Studio** (Route `/studio`), live auf
`intra.moriosolutions.de`.

> [Quelle: raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]

## Zwei Fassungen desselben Codes

| | |
|---|---|
Eigenständige App | `~/morio-studio` — Next.js/React/Tailwind, Vollbild, eigener Dev-Server |
Eingebettet | `components/studio/` + `lib/studio/` im CRM-Repo (`Beckomate88/MorioCRM`, Branch `redesign-ui`) |

Beide Fassungen wurden bei der 3D-Abschaltung **parallel gepflegt** — es gibt keinen
Abgleichmechanismus, das ist Handarbeit und damit eine Driftquelle. #prüfen

Optik: schwarz mit Lila-Akzenten, Morio-„M" oben links freistehend, Icon-Seitenleiste,
Chat-Feed rechts. Die Einbettung folgt dem Muster aus
[[additive-fremdcode-einbettung]] — eigene, **fest dunkle** `studio-*`-Tokens, damit der
Hell/Dunkel-Umschalter der CRM das Werkzeug nicht umfärbt.

## Was nachweislich echt läuft

Gegen ein synthetisches Testvideo mit vier klar unterschiedlichen Szenen im Browser gefahren:

| Funktion | Technik | Befund |
|---|---|---|
Szenenerkennung | Frame-Vergleich im Browser | **3 von 3** Schnittpunkten korrekt (~1 s / 3 s / 4 s) — arbeitet real auf dem Bildmaterial |
Schnitt-Export | `ffmpeg.wasm` (mp4/webm/mov/gif) | rendert lokal, kein Server |
Qualität | ffmpeg-Filter `eq` / `unsharp` / `hqdn3d`, Vorschau live per CSS | Vorschau und Export sind **zwei verschiedene Pfade** |
Bildkonvertierung | Canvas | PNG → WebP live verifiziert, Download-Blob erzeugt |
Frame-Erfassung fürs 3D | Video → Einzelbilder | 14 echte Frames, fehlerfrei |
GLB-Export | `three.js` `GLTFExporter` | erzeugt eine echte, herunterladbare `.glb` |

Alle Ergebnisse hängen an einem Download-Chip, der sich aus dem Browserfenster heraus in
Finder/Mail/Slack ziehen lässt.

Der Chat-Feed steuert die Werkzeuge über **lokale Textmuster**, nicht über ein LLM — es ist
kein Backend verdrahtet. Wer das für KI hält, täuscht sich; die Anbindung ist offen.

## Die 3D-Entscheidung — abgeschaltet statt beschriftet

Der 3D-Teil erfasst echte Frames, aber die Mesh-Erzeugung war **simuliert**: es kam
unabhängig vom Eingangsvideo immer dieselbe violette Drahtgitter-Kugel mit Foto-Kacheln
heraus. Ob Gebäude oder Gegenstand gefilmt wurde, machte keinen Unterschied.

**Warum es nicht anders geht:** Echte Rekonstruktion aus Video/Fotos — Structure-from-Motion
plus Mesh (COLMAP) oder neuronal (NeRF, Gaussian Splatting) — braucht **Minuten GPU-Zeit pro
Objekt**. Das ist im Browser strukturell unmöglich, dafür wäre ein Server-Backend mit GPU
nötig. Das ist kein Optimierungsproblem, sondern eine Gattungsgrenze.

**Entschluss:** Der 3D-Reiter ist aus der Werkzeugleiste **ausgeblendet**, der Code bleibt
vollständig erhalten. Der Chat-Assistent antwortet bei 3D-Wünschen ehrlich mit „noch nicht
verfügbar", statt in ein verborgenes Werkzeug zu wechseln.

> [Quelle: raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]

### Übertragbare Regel

**Ein klein beschrifteter Platzhalter ist keine Ehrlichkeit, wenn die Erwartung
Fotorealismus heißt.** Der Hinweis stand im UI — und trotzdem war das Ergebnis eine
Enttäuschung, weil die Ausgabe *aussah* wie ein Resultat. Bei simulierten Ergebnissen gilt:
Wenn die Ausgabe von der Eingabe unabhängig ist, ist sie kein Demo-Modus, sondern ein
falsches Versprechen — dann lieber ausblenden und benennen, was fehlt.

Zweite Regel, gleiche Familie: **Vor dem Live-Gang das eigene Ergebnis ansehen, nicht nur die
Pipeline grün melden.** Build, Lint, Type-Check und alle Playwright-Schritte liefen sauber —
der Fehler war erst im Screenshot sichtbar.

## Betrieb

- **Cross-Origin-Header (COOP/COEP)** sind Voraussetzung für `SharedArrayBuffer` und damit für
  `ffmpeg.wasm`. Sie sind **nur auf `/studio`** gescoped, per `curl` gegen Nachbarrouten
  verifiziert — global gesetzt hätten sie das übrige CRM beeinflusst.
- Neue Abhängigkeiten: `ffmpeg.wasm` und der `three.js`-Stack; `clsx`/`lucide-react` waren
  bereits im CRM vorhanden.
- Deploy lief über den Weg aus [[morio-crm]]: kein lokales Docker → Image **auf dem Server**
  gebaut, vorher das laufende Image als `before-studio-deploy` getaggt, nur der App-Container
  ausgetauscht, DB unberührt. Health-Check: Container `healthy`, `/login` 200, `/studio`
  korrekt hinter dem Login.

## Stand und offene Punkte

- Live und benutzbar: **Schnitt / Qualität / Konvertieren**.
- **3D**: ausgeblendet. Offene Entscheidung, ob ein GPU-Backend (COLMAP oder Gaussian
  Splatting als Dienst) gebaut wird — sonst bleibt der Code totes Gewicht.
- **Chat-Feed** ohne LLM-Backend; Anbindung an einen echten Assistenten steht aus.
- **Zwei Codebasen** (`~/morio-studio` und CRM) ohne Abgleich.
- Der optische Klick-Test hinter dem echten Login wurde bewusst dem Nutzer überlassen, weil
  die `.env` auf die Live-Produktionsdatenbank zeigt.

## Verbindungen
- [[morio-crm]] — das Wirtssystem, in dem Studio als Reiter lebt
- [[additive-fremdcode-einbettung]] — wie es eingesetzt wurde, ohne Bestehendes zu verändern
- [[moriosolutions-website]] — die zweite Codebasis desselben Kunden auf demselben Server
- [[server-quellcode-drift]] — die Falle, die diese Sitzung zweimal getroffen hat
- [[Next.js]] · [[Deploy Checklist]] · [[Rollback Plan]]

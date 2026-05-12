# Skill: kling-prompts
**Trigger:** `/kling-prompts`
**Verknüpft mit:** `cinematic-web` (liefert Prompts für Phase 3 des Scroll-Video-Erlebnisses)

---

## Zweck

Dieses Skill generiert und verbessert Kling 3.0 Video-Prompts für cinematic Scroll-Websites. Es lernt aus jedem generierten Video und baut eine wachsende Bibliothek aus getesteten Prompt-Mustern auf — damit jeder neue Auftrag schneller, treffsicherer und mit weniger Token-Aufwand ausgeführt wird.

**Workflow-Position im cinematic-web Pipeline:**
```
cinematic-web Skill → Konzept + HTML/JS Website
        ↓
kling-prompts Skill → AI Video Prompts (max. 3 Videos)
        ↓
Kling 3.0 generiert Videos
        ↓
Videos werden in Website als Scroll-Background eingebettet
```

---

## Die 5-Element Formel (jeder Prompt braucht alle 5)

```
[1] KAMERA-BEWEGUNG  — Kling Motion Setting (nur echte Kling-Optionen verwenden — siehe Tabelle)
[2] SETTING          — Wo? Welches Gebäude/Raum, welche Tageszeit, welches Licht?
[3] STANDORT-DNA     — Was macht diesen Ort einzigartig? (immer konkret, nie generisch)
[4] STIMMUNG         — Welche Emotion soll das Video auslösen?
[5] COLOR GRADE      — Welche Farbtöne dominieren? Kontraste? Film Grain?
```

Negative Prompt ist Pflicht — immer als separates Feld in Kling.

---

## Prompt-Bausteine Bibliothek

### Kamera-Bewegungen — NUR ECHTE KLING MOTION SETTINGS (verifiziert 2026-05-10)
**WICHTIG:** Niemals erfundene Begriffe wie "Dolly Forward", "Tracking Shot" oder "Lateral Slide" als Kling-Setting angeben — diese existieren nicht in der UI.

| Kling Motion Setting | Beschreibung | Wann einsetzen |
|---|---|---|
| **Push in** | Kamera bewegt sich vorwärts auf Motiv zu | Exterior Annäherung, Interior Walkthrough, Eingang |
| **Pull out** | Kamera zieht zurück, enthüllt größeres Bild | Reveal, Close-Up → Full Shot, Käsespätzle |
| **Pan left** | Kamera schwenkt nach links (rotiert, bewegt sich nicht) | Panorama, Übergang zu linkem Element |
| **Pan right** | Kamera schwenkt nach rechts | Panorama, Übergang zu rechtem Element |
| **Orbit left** | Kamera kreist um das Motiv herum (links) | Objekte, Produkte, Food Orbital |
| **Lazy Susan** | Motiv dreht sich, Kamera bleibt | Food Beauty Shot, Objekt 360° |
| **Zoom in** | Optischer Zoom (kein Kamerabewegung) | Detail-Reveal, Emphasis |
| **Zoom out** | Optischer Zoom raus | Kontext zeigen |
| **Jib down** | Kamera fährt von oben nach unten | Overhead → Eye Level |
| **Jib up** | Kamera fährt von unten nach oben | Dramatische Enthüllung |
| **Crane up** | Kamera hebt sich | Aufstieg, Überblick |
| **Crane down** | Kamera senkt sich | Ankunft, Landung |
| **Tilt down** | Kamera kippt nach unten | Von Schild → Eingang |
| **Tilt up** | Kamera kippt nach oben | Von Boden → Gebäude |
| **Arc** | Kamera fährt im Halbkreis | Objekt umfahren |
| **Overhead** | Vogelperspektive | Draufsicht Food, Tischansicht |
| **Focus change** | Schärfeverlagerung | Bokeh-Effekt, Aufmerksamkeit lenken |
| **Handheld** | Leichte Verwacklung simuliert | **NICHT für Triple B verwenden** |
| **Whip pan** | Schneller Schwenk | Dynamische Übergänge |
| **Dutch angle** | Gekippter Horizont | Dramatik, Spannung |
| **Hyperlapse** | Zeitraffer mit Bewegung | Außenaufnahmen Zeitverlauf |
| **Eyes in** | Extreme Close-Up Zoom | Detail-Fokus |
| **Crash zoom in** | Sehr schneller Zoom | Schock, Überraschung |

### Empfehlungen für Triple B Videos
| Video | Kling Motion Setting |
|---|---|
| V1 Exterior Approach | **Push in** |
| V2 Interior Walkthrough | **Push in** (Lateraldrifts über Prompt-Text steuern) |
| V3 Burger | **Lazy Susan** oder **Orbit left** |
| V3 Bowl | **Push in** |
| V3 Käsespätzle | **Pull out** |

### Tageszeiten & Lichtstimmungen
| Zeitpunkt | Beschreibung im Prompt | Wirkung |
|---|---|---|
| Blue Hour / Dusk | "deep blue-to-soft purple dusk sky, last warm glow on horizon" | Dramatisch, einladend |
| Golden Hour | "warm golden side light, long shadows, soft orange sky" | Warm, premium |
| Night / Evening | "dark exterior, interior amber light glowing through windows" | Intim, geheimnisvoll |
| Overcast | "soft diffused light, no harsh shadows, muted natural tones" | Clean, dokumentarisch |

### Interior Licht-Beschreibungen
| Stil | Prompt-Formulierung |
|---|---|
| Amber Pendant | "warm amber Edison-style pendant lamps casting circular pools of golden light on each table" |
| Candlelight | "small candles on each table, warm flickering amber points of light" |
| Sidelight Food | "single warm amber light source from upper-left at 45 degrees, deep right-side shadows, glossy highlights" |
| Natürlich (Tag) | "warm natural daylight through large panoramic windows, soft interior shadows" |

---

## Standort-Anreicherung (kritisch für Realismus)

**Regel:** Jede Standort-Beschreibung muss KONKRET sein. Niemals generische Begriffe wie "mountain", "forest", "city" ohne Qualifikation.

### Checkliste vor jedem Prompt
- [ ] Echte Fotos des Gebäudes angesehen?
- [ ] Gebäude-Farbe / Material korrekt beschrieben?
- [ ] Umgebung (Vegetation, Landschaft) stimmt mit Realität überein?
- [ ] Referenz-Bild in 16:9 zugeschnitten vor dem Upload?
- [ ] Negative Prompt enthält die spezifischen Fehler die für diesen Standort wahrscheinlich sind?

### Standort-Muster (lernend — wird nach jedem Projekt erweitert)

**Bayern / Oberpfalz (gelernt aus Triple B):**
```
Umgebung: dense Bavarian pine forest (dark green tall conifers),
rolling hills and farmland in background, modest European building
proportions, light ceramic tile or paved surfaces, normal German
parking area (small, not American scale)
Himmel: soft blue-to-grey Central European sky, not dramatic
Vegetation: pine trees, deciduous mixed forest, green meadows
NICHT: arid desert, dramatic volcanic peaks, American strip mall,
massive parking lots, palm trees, Mediterranean landscape
```

**Monte Kaolino spezifisch (Hirschau, Oberpfalz):**
```
"a 120-meter tall conical pale white-grey quartz sand heap visible
above the treeline in the background — distinctive conical shape,
smooth sandy surface catching warm light, surrounded by dense
Bavarian pine forest at its base. Unique, calm, not dramatic."
NICHT: "massive desert mountain", "sand dunes", "volcanic peaks"
```

---

## Negative Prompt Bibliothek (nach Kategorie)

### Allgemein (immer rein)
```
cartoon, CGI obvious, animation, fast movement, camera shake,
text overlays, watermarks, lens flare, overexposed
```

### Für Exterior / Außenaufnahmen
```
American strip mall, massive empty parking lot, desert landscape,
arid environment, dramatic rocky mountains, tropical vegetation,
fluorescent signage, people crowds, fast cuts
```

### Für Interior / Innenaufnahmen
```
bright overhead fluorescent lighting, TV screens, people, staff,
generic cafeteria look, white sterile walls, cold blue tones,
fast movement, camera shake, fish-eye distortion
```

### Für Food Beauty Shots
```
white studio background, cold blue lighting, hands visible,
utensils moving, plastic-looking food, fast cuts, shaky camera,
multiple light sources, generic plating, stock photo look
```

---

## Kling 3.0 Technische Settings

| Parameter | Empfehlung | Notizen |
|---|---|---|
| Stil | Cinematic | Immer für Premium-Look |
| Dauer | 10 Sek. | 5 Sek. nur für schnelle Tests |
| Ratio | **Manuell 16:9 setzen** | Nicht vom Reference Image ableiten lassen |
| Reference Image | Echtes Foto in 16:9 zuschneiden | Verhindert Ratio-Übernahme — **max. 3 Slots** |
| Seed | Gleichen Seed für alle 3 Videos | Stilkonsistenz über alle Clips |
| Konsistenz-Tipp | Gleiches Reference Image für alle 3 Videos | Gleiche Lichtstimmung sichern |
| **First Frame** | Folgt immer aus dem Animations-Konzept — siehe Tabelle unten | Nie isoliert entscheiden ohne das Konzept zu kennen |

**Ratio-Fix:** Wenn Kling das Reference Image-Ratio übernimmt → Reference Image vor Upload manuell auf 16:9 zuschneiden.

---

## First Frame — Konzept-getriebene Entscheidung

Der First Frame ist **keine technische Entscheidung**, sondern eine **konzeptionelle**. Er ergibt sich direkt aus dem Animations-Konzept das in Phase 1 (Creative Direction) definiert wurde.

**Frage vor jedem First Frame:**
> "Wie verhalten sich V1, V2 und V3 im Konzept zueinander?"

| Konzept-Typ | Beispiel | First Frame |
|---|---|---|
| **Nahtlose Durchfahrt** | Kamera fliegt von außen rein, durch die Tür, weiter zur Bar — eine einzige Bewegung über 3 Videos | Vn First Frame = letzter extrahierter Frame von V(n-1) (`frames/vN/XXXX.jpg`) |
| **Szenenwechsel mit Schnitt** | V1 Exterior, V2 springt direkt auf Detailaufnahme Food, V3 zurück zur Bar | Jedes Video erhält einen eigenen First Frame (Imagen 3 oder echtes Foto) |
| **Parallele Perspektiven** | Alle 3 Videos zeigen denselben Raum aus verschiedenen Winkeln | Jedes Video bekommt eine eigene Startkomposition |
| **Zeitlicher Sprung** | V1 Dusk Exterior, V2 Night Interior — bewusster Zeitsprung | Eigener First Frame pro Video, kein Anschluss an Vorgänger |

**Regel:** Das Konzept aus cinematic-web Phase 1 muss explizit festhalten, ob die Videos **durchgehend** oder **eigenständig** sind — das ist die Grundlage für alle First Frame Entscheidungen.

---

## First Frame Generierung (Google Imagen 3)

**Gilt für:** Videos die einen frischen Start brauchen (kein Anschluss an Vorgänger-Video im Konzept).

**Warum Imagen 3:** Erzeugt photorealistische, cinematische Einzelbilder in 16:9. Das generierte Bild wird als First Frame in Kling hochgeladen, um die exakte Startkomposition vorzugeben.

**Imagen 3 Prompt-Formel:**
```
[Komposition/Kamerawinkel], [Hauptmotiv], [Lichtstimmung], 
[Oberflächentextur/Material], [Atmosphäre], 
photorealistic, cinematic, 16:9, film grain, no people, no text
```

**Beispiel V3 First Frame:**
```
extreme close-up looking straight down onto a dark charcoal ceramic 
restaurant plate on a dark wooden tabletop, single warm amber pendant 
light from directly above casting tight circular golden glow on plate 
surface, deep black shadows on all sides, shallow depth of field, 
no food on plate yet, photorealistic, cinematic, 16:9, film grain, 
moody restaurant interior atmosphere, no people, no text
```

**Wichtig:** Generiertes Imagen 3 Bild immer auf 16:9 zuschneiden bevor es in Kling hochgeladen wird (Python PIL center-crop oder manuell).

---

## Pflicht-Output-Format (IMMER nach jedem Prompt)

Jeder Prompt-Output endet IMMER mit diesem Block — ohne Ausnahme:

```
First Frame (Google Imagen 3 Prompt):
[Imagen 3 Prompt für das Startbild — immer konkret, immer 16:9]
→ Generiertes Bild auf 16:9 zuschneiden → als First Frame in Kling hochladen

Kling Settings:
- Motion: [echtes Kling Motion Setting aus der Tabelle oben]
- Stil: Cinematic
- Dauer: 10 Sek.
- Ratio: 16:9 (manuell setzen — nicht vom Bild übernehmen lassen)
- First Frame: [Kommt auf das Ziel an — bei nahtloser Scroll-Sequenz (V1→V2→V3 fließen cinematisch ineinander): letzter extrahierter Frame des Vorgänger-Videos. Bei standalone Video oder bewusstem Szenenwechsel: Imagen 3 Bild oder echtes Foto. Immer zuerst fragen: Sollen die Videos eine durchgehende Animation sein oder eigenständige Clips?]

Reference Images (max. 3 — alle 16:9 zugeschnitten):
- [dateiname_16x9.jpg] — [wofür: Raumstruktur / Außenansicht / Food-Stil]
- [dateiname_16x9.jpg] — [wofür]
- [dateiname_16x9.jpg] — [wofür]

Priorität: Wenn First Frame gesetzt → Lichtstimmung/Atmosphäre bereits abgedeckt → 
3 Slots für Inhalt (Food, Gebäude, Produkt) nutzen.
```

**Komprimierter Prompt Triple B V2 (verifiziert, zeichenoptimiert):**
```
Cinematic floating dolly, smooth as camera on rails — no handheld bounce,
no walking motion. Glass doors swing open, camera glides into Triple B
restaurant: beech wood chairs with navy cushions, dark charcoal tabletops,
warm amber pendant lights casting golden pools, large panoramic windows
revealing pine forest and Monte Kaolino's pale sandy slope at dusk.
Camera drifts left — Triple Stack Smash Burger on dark ceramic plate,
three smashed beef patties, triple melted cheddar draping over edges,
amber Triple B sauce, golden sesame brioche bun, pendant light above.
Drifts right — dark ceramic bowl, crispy golden chicken pieces, mixed
salad, cream-amber sauce zigzag. Passes third table: Käsespätzle, golden
egg noodles, thick melted Emmental, dark caramelized Röstzwiebeln, fresh
Schnittlauch. Camera glides straight to back wall — dark walnut bar,
amber-backlit shelving, large circular illuminated "TRIPLE B · BURGER
BOWLS BASICS" emblem above bar. Camera settles. 16:9, photorealistic,
no people, no text errors, no empty tables.
```

Kling Settings:
- Motion: Push in
- Stil: Cinematic
- Dauer: 10 Sek.
- Ratio: 16:9 (manuell setzen)
- First Frame: letzter Frame von V1 als Bild hochladen

Reference Images (alle 16:9 zugeschnitten):
- 9S3A2620_16x9.jpg — Innenraum Raumstruktur
- logo.png — Triple B Logo / Bar-Emblem Referenz

---

## Feedback-Protokoll (wächst mit jedem Projekt)

Jedes generierte Video wird hier eingetragen. Das ist die Hauptlernquelle des Skills.

### Protokoll-Format
```
Projekt: [Name]
Video: [V1/V2/V3]
Datum: [Datum]
Ergebnis: ✅ Gut / ⚠️ Teilweise / ❌ Falsch
Problem: [Was war falsch?]
Ursache: [Warum ist es passiert?]
Fix: [Was wurde im Prompt geändert?]
Regel: [Neue Regel die daraus entstand]
```

### Einträge

---
**Projekt:** Triple B, Hirschau
**Video:** V1 (Exterior)
**Datum:** 2026-05-10
**Ergebnis:** ❌ Falsch
**Problem:** Gebäude sah aus wie amerikanisches Strip-Mall-Restaurant in Atacama-Wüste
**Ursache 1:** Monte Kaolino als "vast pale yellow-white sand dune mountain" beschrieben → Kling interpretierte das als dramatischen Wüstenberg (Atacama/Andes-Stil)
**Ursache 2:** Kein echtes Referenzfoto des Gebäudes verwendet, sondern KI-Render (Lokal.png) als Basis für Prompt-Texte → generische amerikanische Gebäudebeschreibung entstand
**Ursache 3:** Referenzfoto war 3:4 → Kling übernahm das Ratio statt 16:9
**Fix:** Prompt mit echtem Foto (9S3A2659.jpg) neu geschrieben: Gebäude als warme Ocker-Beige Stuckfassade, Monte Kaolino als "120m conical pale quartz sand heap above treeline, surrounded by Bavarian pine forest", Referenzfoto auf 16:9 zugeschnitten (9S3A2659_16x9.jpg)
**Neue Regeln:**
- Niemals KI-Renders oder idealisierte Konzeptbilder als Prompt-Basis verwenden — immer echte Fotos
- Monte Kaolino niemals als "mountain" oder "sand dunes" beschreiben — immer als "conical quartz sand heap" mit Bayerischer Waldumgebung
- Referenzfotos immer vor Upload auf 16:9 zuschneiden
- Negative Prompt muss "American strip mall, desert landscape, massive parking lot" für Bayerische Standorte immer enthalten

---
**Projekt:** Triple B, Hirschau
**Video:** V2 (Interior)
**Datum:** 2026-05-12
**Ergebnis:** ❌ Falsch
**Problem 1:** Smash Burger auf Tischen viel zu groß — unrealistisch, wirkt wie CGI-Platzhalter
**Problem 2:** Menschen im Restaurant sichtbar — widerspricht Anforderung "no people"
**Ursache:** Prompt enthielt "Triple Stack Smash Burger on dark ceramic plate" als explizite Tisch-Objekte → Kling interpretierte das als dominante Bildelemente, wählte unrealistische Proportionen; "no people" wurde im Prompt nicht prominent genug wiederholt
**Fix:** Alle Speisen vollständig aus dem Prompt entfernen. Kein Tisch-Objekt mehr nennen. Fokus liegt auf Raumarchitektur, Licht, Bar — die Speisen kommen NUR in V3.
**Neue Regel:** V2 = reiner Raumfilm ohne Essen und ohne Menschen. "No food on tables. Empty restaurant interior. No people." als erste Zeile des Prompts setzen.

**Korrigierter V2 Prompt (Triple B, 2026-05-12):**
```
No food on tables. Empty restaurant interior. No people, no staff.
Cinematic smooth push-in — camera glides through the entrance of a modern
Bavarian restaurant at dusk. Wood-paneled bar counter with stainless steel
accents, shelves lined with glassware and bottles, warm light bar stools.
High ceiling with track lighting casting warm pools on empty dark tabletops.
Large panoramic windows revealing Bavarian pine forest at blue hour.
Camera drifts slowly forward toward the illuminated Triple B logo on the
back wall — circular emblem, warm amber backlight. Deep amber and charcoal
color grade, film grain, no people, no food, no text errors, no camera
shake. 16:9, photorealistic, cinematic.
```

Kling Settings:
- Motion: Push in
- Stil: Cinematic
- Dauer: 10 Sek.
- Ratio: 16:9 (manuell setzen)
- First Frame: **letzter extrahierter Frame von V1** (`frames/v1/XXXX.jpg`) — damit V2 nahtlos an V1 anschließt
- ⚠️ NICHT: ein echtes Foto als First Frame für V2 — das war der Fehler in der ersten Korrektur

Reference Images (alle 16:9 zugeschnitten):
- 9S3A2620_16x9.jpg — Innenraum Atmosphäre (Licht, Bar, Architektur)
- Optional: 9S3A2659_16x9.jpg — Exterior für Stilkonsistenz

**Neue allgemeine Regeln aus V2:**
- V2 enthält NIEMALS Essen auf Tischen — das ist V3's Job
- "no people" in V2 muss als ERSTE Zeile im Prompt stehen
- Interior-Prompt fokussiert auf: Bar, Shelving, Licht, Architektur — nie auf Tisch-Objekte
- **First Frame für V2 (und alle Folge-Videos) = letzter Frame des Vorgänger-Videos, nicht ein Referenzfoto**

---

## Verbindung zu cinematic-web

Wenn `/cinematic-web` eine neue Website baut, wird `/kling-prompts` **immer am Ende** aufgerufen um die Video-Prompts zu generieren. Die Verbindung ist:

1. **cinematic-web** liefert: Konzept, Farbpalette, Scroll-Szenen-Anzahl (max. 3), Tonalität
2. **kling-prompts** empfängt: Branche, Konzept, Standort, echte Referenzfotos
3. **kling-prompts** liefert: fertige Kling-Prompts (V1 Exterior, V2 Interior, V3 Food/Produkt), zugeschnittene Reference Images, Kling-Settings
4. **cinematic-web** baut: Video-Scroll-Engine die die generierten MP4s als Hintergrund einbettet

### Video-Scroll-Engine Integration (HTML-Snippet)
```javascript
// Scroll-driven video playback — Videos ersetzen Three.js Korridor
const videos = ['V1.mp4', 'V2.mp4', 'V3.mp4'];
const vid = document.createElement('video');
vid.src = videos[currentScene];
vid.muted = true; vid.playsInline = true; vid.preload = 'auto';

ScrollTrigger.create({
  trigger: '#cv-wrap',
  scrub: true,
  onUpdate(self) {
    const sceneProgress = (self.progress * 3) % 1;
    const sceneIndex = Math.floor(self.progress * 3);
    if (vid.src !== videos[sceneIndex]) vid.src = videos[sceneIndex];
    vid.currentTime = sceneProgress * vid.duration;
  }
});
```

---

## Qualitätsskala

| Level | Merkmale | Ergebnis |
|---|---|---|
| ❌ Generic | Keine Referenzfotos, generische Location-Beschreibung, kein Negative Prompt | Wüste statt Bayern |
| ⚠️ Standard | Referenzfotos vorhanden, aber Location ungenau beschrieben | Teilweise passend |
| ✅ Good | Echte Fotos, genaue Location, vollständiger Negative Prompt, 16:9 Reference | Passt zum Ort |
| 🏆 Agency | Alle oben + Seed-Konsistenz + Feedback-Loop integriert + 3 Videos stilistisch einheitlich | Cinematic perfekt |

---

## Anwendung: Neues Projekt starten

```
1. Echte Fotos sammeln (Außen + Innen + Produkt/Speisen)
2. Standort-DNA bestimmen (Was macht diesen Ort einzigartig? Was darf NICHT erscheinen?)
3. Negative Prompts für diesen Standort definieren
4. Referenzfotos auf 16:9 zuschneiden (Python PIL center-crop)
5. 5-Element Formel für jeden der 3 Videos ausfüllen
6. Für V2 + V3: Imagen 3 Prompt schreiben → First Frame generieren → auf 16:9 zuschneiden
7. Kling: Ratio manuell 16:9 setzen → First Frame hochladen → Reference Images hochladen → Prompt einfügen
8. Video-Ergebnis im Feedback-Protokoll eintragen
9. Regeln ableiten und Bibliothek erweitern
```

**Prompt-Länge:** Kling hat ein Zeichenlimit. Prompts immer als kompakter Fließtext ohne Zeilenumbrüche schreiben. Wenn zu lang: Adjektive kürzen, keine Wiederholungen, kein "the camera"-Prefix vor jeder Bewegungsanweisung.

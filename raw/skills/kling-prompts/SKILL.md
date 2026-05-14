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
[Optional] Magnific API Auto-Generate → V1 + V2 + V3 direkt rendern lassen
        ↓
Fertige MP4-URLs → in Website als Scroll-Background einbetten
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

## Kling 3.0 — Erweiterte Prompt-Struktur (neu 2026)

### 5-Layer Formel für komplexe Szenen

```
Scene → Characters → Action → Camera → Audio & Style
```

1. **Scene** — Environment, Tageszeit, Atmosphäre zuerst verankern
2. **Characters** — Konkrete Labels vergeben, konsistent wiederholen (`[Character A: Name, Ton]`)
3. **Action** — Timeline aufbauen: Anfang → Mitte → Ende, nie alles auf einmal
4. **Camera** — Shot-Typ + Bewegung explizit: "slow dolly push-in", "handheld tracking shot", nie "camera moves"
5. **Audio & Style** — Dialogue, SFX, Ambient, Film-Ästhetik

### Multi-Shot Syntax (Director Mode — bis 6 Shots)

```
Shot 1 (0-3 seconds): Wide establishing shot of restaurant exterior at blue hour
Shot 2 (3-7 seconds): Camera glides through entrance doors, push in
Shot 3 (7-11 seconds): Close-up on bar, warm amber backlighting
[Character A: Barkeeper, calm warm voice]: "Welcome."
Shot 4 (11-15 seconds): Pull back, reveal full dining room, empty tables, golden light
```

**Intelligence Mode** — AI plant Kameraabdeckung automatisch aus einem Prompt
**Customization Mode** — Creator definiert jeden Shot explizit (obige Syntax)

### Native Audio Syntax (Kling O3 Omni Audio)

```
[Character A: Lead Detective, controlled serious voice]: "Let's stop pretending."
Immediately, the suspect shifts in chair, tense.
[Character B: Prime Suspect, sharp defensive voice]: "I already told you everything."
The detective slides a folder across the table. Paper scraping sound.
SFX: Heavy footsteps echoing in corridor
```

**Regeln:**
- `[Name, Ton]: "Text"` — immer unique Labels
- Transition-Wörter für Pacing: "Immediately," "Then," "Suddenly," "A moment later"
- `SFX:` für explizite Soundeffekte
- Für reine Cinematic-Websites ohne Dialogue → Audio-Sektion weglassen reicht

### Omni Reference Tags (Kling 3.0 Syntax)

```
<<<element_1>>> — Charakter / Objekt → bewahrt Identität
<<<image_1>>>   — Referenzbild → Stil oder Startframe
<<<video_1>>>   — Referenzvideo → Motion-Pattern übertragen
<<<voice_1>>>   — Voice Profile → Stimme an Charakter binden
```

Beispiel: `@Character_A sits in the setting defined by <<<image_1>>>.`

### Die 4 Kling-Regeln

1. **Motion Verbs** — "Dolly push", "whip-pan", "shoulder-cam drift", "crash zoom" — nie "camera moves"
2. **Texture = Credibility** — Film grain, lens flare, condensation, fabric sway, steam, sweat
3. **Temporal Flow** — Immer: Beginning → Middle → End — kein eingefrorener Moment
4. **Real Light Sources** — Nicht "dramatic lighting" sondern: neon signs, candlelight, golden hour, flickering fluorescents

### Film-Stock Ästhetik (versteht Kling direkt)

```
"Shot on 35mm film with shallow focus and glowing bokeh"
"VHS camcorder with heavy grain and chromatic aberration"
"Super 8 film look with warm vintage tones"
"Digital cinema with anamorphic lens flare"
"Desaturated teal grade, crushed blacks"
```

### Micro-Motions für Realismus

Statt eine komplexe Szene zu beschreiben → **eine Hauptaktion + Micro-Details:**

```
breathing, blinking, subtle hand movements, drifting dust,
fabric sway, hair moving in wind, steam rising, light flickering,
condensation fogging window, rain beading on surface
```

Beispiel: "Static tripod in neon-lit ramen shop, condensation fogs window, steam rising from bowls,
couple eating in slow rhythm, broth splattering gently, 35mm shallow focus, glowing bokeh behind them."

---

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
- [ ] **Soll ein Logo/Markenzeichen im Video erscheinen?** → Wenn ja: Logo als Reference Image Slot belegen (sonst erfindet Kling ein eigenes — verschwendete Generation)

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
text overlays, watermarks, lens flare, overexposed,
deformed hands, extra fingers, warped limbs, morphing textures,
morphing clothes, blur, flicker, distorted faces, unrealistic proportions,
glitch, artifacts, warped text, unreadable typography
```

### Für Exterior / Außenaufnahmen
```
American strip mall, massive empty parking lot, desert landscape,
arid environment, dramatic rocky mountains, tropical vegetation,
fluorescent signage, people crowds, fast cuts
```

### Für Interior / Innenaufnahmen
```
people, humans, customers, guests, staff, waiter, cook, silhouettes,
figures, shadows of people, person in background,
bright overhead fluorescent lighting, TV screens,
generic cafeteria look, white sterile walls, cold blue tones,
fast movement, camera shake, fish-eye distortion
```

**Logo in Video — Text-Beschreibung schlägt Reference Image:**
Kling kann ein spezifisches Logo nicht aus einem Reference Image in eine bestimmte Stelle im Video einbauen (Reference Images steuern Stil/Atmosphäre, nicht Objekt-Placement). Zuverlässigste Methode: Logo als physisches Wandschild im Prompt präzise beschreiben:
`"A large circular wall sign, dark background, bold capital letters reading '[NAME]' in the center, smaller text '[SLOGAN]' curved around the bottom edge, warm amber backlit, glowing against dark wall."`

**Tür-Animation bei Sequenz-Videos:**
Wenn V1 vor dem Eingang endet → V2 First Frame = Eingangsbereich → V2 muss mit der Tür beginnen (das ist korrekt und gewollt). Das Problem ist nicht die Tür selbst, sondern dass Kling Doppeltüren oft asymmetrisch animiert (eine Tür öffnet, andere bleibt stehen). Fix: Türen als bereits offen beschreiben, keine Animation nötig — `"entrance doors are already standing open, camera glides smoothly through the open doorway"`. In den Negative Prompt: `"door swinging, door moving, door animation, one door open one door closed, asymmetric doors"`.

**Menschen-Fix — kontextueller Rahmen statt reines Verbot:**
Kling füllt Restaurant-Szenen automatisch mit Menschen (Trainingsdaten-Bias). Reine Verbote wie "no people" wirken schwach. Stattdessen: **einen Grund einbauen warum niemand da ist:**
- `"One hour before opening. The restaurant is completely empty."` → stärkstes Frame
- `"Restaurant closed for private event, all guests have left."` → Alternative
- `"Early morning setup before service begins."` → Alternative
Dann trotzdem "no people, no staff, zero humans" im Prompt wiederholen + alle Varianten in den Negative Prompt.

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
| Dauer | **10 Sek. (Standard) / 15 Sek. (Narrative)** | 5 Sek. nur für Tests — beste Qualität bei 5–10 Sek. |
| Ratio | **Manuell 16:9 setzen** | Nicht vom Reference Image ableiten lassen |
| Reference Image | Echtes Foto in 16:9 zuschneiden | Verhindert Ratio-Übernahme — **max. 4 Slots** (nicht 3). Logo als Slot 1 wenn Markenzeichen erscheinen soll |
| Seed | Gleichen Seed für alle 3 Videos | Stilkonsistenz über alle Clips |
| Konsistenz-Tipp | Gleiches Reference Image für alle 3 Videos | Gleiche Lichtstimmung sichern |
| **First Frame** | Folgt immer aus dem Animations-Konzept — siehe Tabelle unten | Nie isoliert entscheiden ohne das Konzept zu kennen |
| **Model** | **Kling O3** für maximale Qualität, V3 für Speed | O3 = "Omni One" Architektur mit Chain-of-Thought reasoning |

**Ratio-Fix:** Wenn Kling das Reference Image-Ratio übernimmt → Reference Image vor Upload manuell auf 16:9 zuschneiden.

### V3 vs O3 — Wann welches Modell?

| Szenario | Empfehlung |
|---|---|
| Restaurant/Location Website | **O3** — Physics, Licht-Realismus, Charakter-Konsistenz |
| Schnelle Tests / Iteration | **V3** — Günstiger, schneller |
| Multi-Shot Sequenz (Director Mode) | **O3** — bessere Narrative-Kontrolle |
| Social Media Content (Budget) | **V3 Standard** |
| Premium Agency-Output | **O3 Pro** — 1080p/4K, nativer Audio |

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
- [logo.png wenn Logo im Video erscheinen soll — sonst erfindet Kling eines]
- [dateiname_16x9.jpg] — [wofür: Raumstruktur / Außenansicht / Food-Stil]
- [dateiname_16x9.jpg] — [wofür]

Slot-Priorität: Logo > Haupt-Referenzfoto (Gebäude/Innenraum) > Food/Produkt-Stil.
Wenn First Frame gesetzt → Lichtstimmung bereits abgedeckt → Slots für Logo + Inhalt nutzen.
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
- **logo.png** — echtes Triple B Logo → damit Kling das richtige Emblem verwendet, nicht ein erfundenes
- 9S3A2620_16x9.jpg — Innenraum Atmosphäre (Licht, Bar, Architektur)
- Optional: 9S3A2659_16x9.jpg — Exterior für Stilkonsistenz

**Neue allgemeine Regeln aus V2:**
- V2 enthält NIEMALS Essen auf Tischen — das ist V3's Job
- "no people" in V2 muss als ERSTE Zeile im Prompt stehen
- Interior-Prompt fokussiert auf: Bar, Shelving, Licht, Architektur — nie auf Tisch-Objekte
- **Wenn ein Logo/Markenzeichen im Video erscheinen soll → Logo immer als Reference Image hochladen, sonst erfindet Kling ein eigenes**

---

## Physics Prompting (Kling O3)

O3 versteht Physics-Keywords und aktiviert spezifische Simulationsmodule:

| Keyword im Prompt | Aktiviertes Modul | Effekt |
|---|---|---|
| "realistic gravity" | Z-axis Trajectory | Objekte fallen korrekt |
| "smooth motion" | Inertia Simulation | Natürliche Bewegung ohne Sprünge |
| "fluid dynamics" | Particle Flow | Wasser, Farbe, Rauch realistisch |
| "surface texture" | Friction Model | Glätte vs. Widerstand |

**Für Food Beauty Shots:** "liquid color flows across surface with fluid dynamics" → realistisches Fließen
**Für Exterior:** "realistic wind through trees, grass moves naturally" → echte Luftbewegung

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
6. Für V2 + V3: Imagen 4 Ultra Prompt schreiben → First Frame via Magnific API generieren → auf 16:9 zuschneiden
7. [Optional] Magnific API Auto-Generate: MAGNIFIC_API_KEY setzen → Script ausführen → 3 Video-URLs erhalten
8. Kling manuell (falls kein API Key): Ratio 16:9 → First Frame → Reference Images → Prompt einfügen
9. Video-Ergebnis im Feedback-Protokoll eintragen
10. Regeln ableiten und Bibliothek erweitern
```

**Prompt-Länge:** Kling hat ein Zeichenlimit. Prompts immer als kompakter Fließtext ohne Zeilenumbrüche schreiben. Wenn zu lang: Adjektive kürzen, keine Wiederholungen, kein "the camera"-Prefix vor jeder Bewegungsanweisung.

---

## Magnific API — Auto-Generate (Phase 4)

Nach der Prompt-Generierung (V1, V2, V3) immer fragen:
> **"Soll ich die Prompts jetzt direkt auf Magnific generieren?"**

Wenn ja → API Key prüfen → alle 3 Videos parallel submiten → URLs zurückgeben.

### Setup

```bash
# Einmalig als Env-Variable setzen
export MAGNIFIC_API_KEY="dein-key-hier"
# Key holen: https://www.magnific.com/api → Dashboard → API Key
```

### Verfügbare Video-Modelle auf Magnific

| Modell | Endpoint | Empfehlung |
|---|---|---|
| **Kling 3 Pro** | `/v1/ai/video/kling-v3-pro` | Standard für alle Cinematic Websites |
| **Kling 3 Standard** | `/v1/ai/video/kling-v3-std` | Schnellere Tests, günstiger |
| **Happy Horse 1.0** | `/v1/ai/video/happy-horse-...` | #1 Video Arena April 2026 — für maximale Qualität |
| **Kling 4K T2V** | `/v1/ai/video/kling-4k-t2v` | 4K Output wenn Website retina-ready ist |
| **Runway Gen 4.5** | `/v1/ai/video/runway-gen45` | Alternative wenn Kling-Style nicht passt |

**Default für cinematic-web: Kling 3 (`kling-v3-pro`) — fest, nicht ändern**

### Verfügbare Bild-Modelle (für First Frame Generierung)

| Modell | Endpoint | Empfehlung |
|---|---|---|
| **Nano Banana 2** | `/v1/ai/image/nano-banana-2` | **Default** — Gemini 3, bis zu 3 Reference Images |
| **Google Imagen 4 Ultra** | `/v1/ai/image/imagen-4-ultra` | Photorealistisch, alternativ |
| **Google Imagen 4 Fast** | `/v1/ai/image/imagen-4-fast` | Schnell + günstig für Tests |
| **Mystic** | `/v1/ai/mystic` | Magnific Eigenmodell, hohe Detailtiefe |

**Default für First Frame: Nano Banana 2 (`nano-banana-2`) — fest, nicht ändern**

### Auto-Submit Script

```python
import requests, time, os, sys

API_KEY = os.environ.get("MAGNIFIC_API_KEY", "")
BASE    = "https://api.magnific.com/v1/ai"
HDR     = {"x-magnific-api-key": API_KEY, "Content-Type": "application/json"}

PROMPTS = {
    "V1": {
        "prompt": "HIER_V1_PROMPT",
        "negative_prompt": "cartoon, CGI, camera shake, blur, deformed hands, text overlays, watermarks"
    },
    "V2": {
        "prompt": "HIER_V2_PROMPT",
        "negative_prompt": "people, humans, food on tables, camera shake, fluorescent lighting, cold blue tones"
    },
    "V3": {
        "prompt": "HIER_V3_PROMPT",
        "negative_prompt": "white studio background, cold blue lighting, hands visible, shaky camera, stock photo look"
    }
}

MODEL       = "kling-v3-pro"    # fest: Kling 3 — nicht ändern
IMAGE_MODEL = "nano-banana-2"   # fest: Nano Banana 2 — nicht ändern
DURATION    = "10"              # String! (validiert 2026-05-15) — für Tests: "5"
RATIO       = "16:9"

def submit(name, p):
    r = requests.post(f"{BASE}/video/{MODEL}", headers=HDR, json={
        "prompt": p["prompt"],
        "negative_prompt": p["negative_prompt"],
        "duration": DURATION,
        "aspect_ratio": RATIO,
        "cfg_scale": 0.5,
    })
    d = r.json()
    task_id = d.get("task_id") or d.get("id")
    print(f"[{name}] Submitted → Task ID: {task_id}")
    return task_id

def poll(name, task_id):
    # Poll-Endpoint verifiziert 2026-05-15: /video/kling-v3/{task_id}
    poll_url = f"{BASE}/video/kling-v3/{task_id}"
    while True:
        r = requests.get(poll_url, headers=HDR)
        d = r.json().get("data", r.json())
        status = d.get("status", "")
        if status == "COMPLETED":
            url = (d.get("generated") or [""])[0]
            print(f"[{name}] ✅ Fertig → {url}")
            return url
        elif status in ("FAILED", "ERROR"):
            print(f"[{name}] ❌ Fehlgeschlagen: {d}")
            return None
        else:
            print(f"[{name}] ⏳ Status: {status} — warte 15s...")
            time.sleep(15)

if not API_KEY:
    print("Fehler: MAGNIFIC_API_KEY nicht gesetzt"); sys.exit(1)

# 1. Alle 3 Videos parallel submiten
task_ids = {name: submit(name, p) for name, p in PROMPTS.items()}

# 2. Auf alle warten + URLs sammeln
results = {}
for name, tid in task_ids.items():
    if tid:
        results[name] = poll(name, tid)

# 3. Ausgabe
print("\n=== FERTIGE VIDEO-URLs ===")
for name, url in results.items():
    print(f"{name}: {url}")
```

### First Frame via Imagen 4 generieren

```python
def gen_first_frame(prompt, output_path="first_frame.jpg"):
    r = requests.post(f"{BASE}/image/nano-banana-2", headers=HDR, json={
        "prompt": prompt + ", photorealistic, cinematic, 16:9, film grain, no people, no text",
        "aspect_ratio": "16:9",
    })
    d = r.json()
    img_url = d.get("image_url") or d.get("output", {}).get("url")
    # Bild herunterladen + als First Frame in Kling hochladen
    img_data = requests.get(img_url).content
    with open(output_path, "wb") as f:
        f.write(img_data)
    print(f"First Frame gespeichert: {output_path} → jetzt in Kling als First Frame hochladen")
    return output_path
```

### Ablauf bei "ja — direkt generieren"

1. `MAGNIFIC_API_KEY` vorhanden? → wenn nein: Key beim User erfragen
2. Modelle: Video = `kling-v3-pro` (Kling 3), Bild = `nano-banana-2` — beide fest, keine Auswahl nötig
3. Script mit den 3 generierten Prompts befüllen
4. Bash ausführen → Task IDs loggen
5. Pollen bis alle 3 fertig (30–120s pro Video)
6. 3 Video-URLs ausgeben
7. Embed-Code für die cinematic-web Website generieren:

```html
<!-- V1, V2, V3 MP4s direkt aus Magnific-URLs laden -->
<video id="scene-video" muted playsinline preload="auto"
  data-v1="MAGNIFIC_V1_URL"
  data-v2="MAGNIFIC_V2_URL"
  data-v3="MAGNIFIC_V3_URL">
</video>
```

### Wichtig: Magnific Modell-IDs können sich ändern

Die exakten Endpoint-Namen (`kling-v3-pro`, `happy-horse-...`) werden vom Magnific Team gelegentlich aktualisiert. Vor jedem Projekt aktuelle IDs prüfen:
```bash
curl -s https://api.magnific.com/v1/ai/models -H "x-magnific-api-key: $MAGNIFIC_API_KEY" | python -m json.tool
```

---
tags: [concept, frontend, mobile, scroll, threejs, design-engineering, hoch]
sources: [raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]
updated: 2026-08-29
---

# Scroll-Choreografie auf Mobil portieren

## Definition

Eine gepinnte, scrollgetriebene Desktop-Choreografie (three.js-Bühne, Canvas-Partikel,
Karten-Fenster) bricht auf dem Handy nicht als Layout, sondern **rechnerisch**. Ein
Mobile-Layer, der die Sektionen auf `height:auto` zurücksetzt und das Pinnen abschaltet,
löst die Layoutprobleme und zerstört dabei genau die Größen, aus denen die Choreografie
ihren Fortschritt berechnet. Das Ergebnis sieht aus wie „die Animation lädt nicht" und ist
in Wahrheit ein Vorzeichenfehler.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Die fünf Bruchstellen

### 1. Der negative Nenner

`rawHP = (scrollY − sectionTop) / (sectionH − vh)`

Ist die Sektion mobil **kürzer als der Viewport** (730 px Sektion, 844 px Viewport), wird der
Nenner **−114**. `rawHP` läuft dann invertiert und weit außerhalb: **+3,70 → −2,70**. Die
Zielform startet fertig und löst sich auf, statt sich zu bilden. Und weil ein Gate
(`rawHP > −0,15 && < 1,15`) den Zeichenaufruf schützt, wird für den größten Teil des Wegs
**gar nicht mehr gezeichnet** — der Canvas behält ein altes Bild stehen. Das ist das
„lädt nicht richtig".

**Regel:** Jeder Nenner aus Layoutmaßen braucht eine Untergrenze oder eine Bühne, die
garantiert höher ist als der Viewport. Der Fix war reines CSS: Sektion 240vh, Bühne `sticky`
100dvh → Nenner **+1.182**, `rawHP` monoton 0 → 1.

### 2. Feste vertikale FOV bei Portrait-Aspect

`PerspectiveCamera(42, W/H, …)` hält die **vertikale** FOV fest. Bei Portrait-Aspect 0,46
schrumpft die horizontale FOV so stark, dass die halbe Bildbreite auf Objekthöhe nur noch
0,68 Einheiten misst — bei Kugelradius 1. Die Erde wird links und rechts abgeschnitten und
liest sich als blaue Fläche statt als Planet.

Lösung: FOV **geometrisch aus dem Aspect ableiten**, gedeckelt, mit fester Luft rundum.
Desktop und Landscape bleiben exakt auf dem Designwert 42°, die Kurve greift nur, wo sie muss.

| Gerät | Aspect | FOV |
|---|---|---|
| iPhone 14 | 0,462 | 56° (gedeckelt) |
| iPhone SE | 0,563 | 55,9° |
| Desktop / Landscape | ≥ 0,778 | **42,0° unverändert** |

### 3. Gekoppelte Hebel heben sich auf

Erster Anlauf: Kugel kleiner **und** FOV mitschrumpfen lassen. Ergebnis — die Kugel blieb auf
dem Schirm **exakt gleich groß** (87 %), weil beide Hebel proportional wirken.
**Regel:** Objektskalierung und Kamerawinkel sind ein Hebelpaar; wer beide gleichzeitig
verstellt, misst am Ende nichts. Entkoppeln und **den Füllgrad messen**, nicht die Parameter.

### 4. Der Mobile-Layer überschreibt `visibility` nicht

Eine Desktop-Performance-Optimierung setzte `visibility: hidden` auf Karten außerhalb ihres
Scroll-Fensters. Der Mobile-Layer überschrieb per CSS `opacity` und `transform` — **nicht
`visibility`**. Auf Mobil liegen die Karten im normalen Fluss, die Fenster beschreiben aber
Desktop-Positionen: Messung am Live-Stand **19 Scrollpositionen im Hochformat und 40 im
Querformat**, an denen Karten im Bild standen und unsichtbar waren.

Doppelt bösartig: **was `visibility:hidden` ist, nimmt auch keine Klicks an** — deshalb war
das neue Accordion zuerst „nicht anklickbar". Ein Hit-Test (`elementFromPoint`) überspringt
solche Elemente komplett, obwohl das DOM korrekt aussieht.

**Regel:** Wenn ein Mobile-Layer eine Desktop-Choreografie neutralisiert, muss er **jede**
Eigenschaft neutralisieren, die sie setzt — `opacity`, `transform` *und* `visibility`.

### 5. Der Breakpoint kennt das gedrehte Handy nicht

Ein gedrehtes iPhone ist **844–932 px breit** und fällt damit über einen 820-px-Breakpoint.
Es bekommt die gepinnte Desktop-Choreografie auf 390 px Höhe: die Leistungskarten waren dort
**515 px hoch in einem 390-px-Viewport**, und weil die Sektion gepinnt ist, war das untere
Drittel jeder Karte **nicht scrollbar, also unerreichbar**.

**Regel:** Der Mobile-Layer muss auch bei **kurzen breiten** Viewports greifen
(`max-width` ODER `max-height`), nicht nur bei schmalen.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Zwei Nebenfallen aus derselben Runde

| Falle | Wirkung | Gegenmittel |
|---|---|---|
| `content-visibility: hidden` (eingeklappte `<details>`) | behält die **Layoutbreite** und zählt in `scrollWidth`; Chromes Shrink-to-fit weitet die Seite auf (320 → 358 px), der Overflow-Check greift dadurch nicht mehr | Grid-Spalten `minmax(0, 1fr)` statt `1fr` — `1fr` schrumpft nie unter min-content |
| Ein GPU-Klassen-Flag als Layout-Schalter missbrauchen | `__MS_MOBILE` = coarse pointer **oder** ≤ 820 px → ein iPad mit 1194 px hat es gesetzt, bekommt aber Desktop-Layout | Die CSS-Query per `matchMedia` **spiegeln**, nicht ein fremdes Flag mitbenutzen |

Dazu ein Klassiker ohne Technik: **„Programm-/Appentwicklung" ist ein einziges unteilbares
Wort** (327 px in einer 258-px-Box). Und in einem `data-i18n`-System, das über `textContent`
schreibt, erscheint ein `&amp;` **wörtlich** — HTML-Entities gehören dort nicht hinein.

## Messen statt vermuten

- **Echte Touch-Events über CDP.** `mouse.drag` erzeugt keine Touch-Events und scrollt keinen
  `overflow`-Container — ein negativer Test ist dann nicht negativ, sondern **methodisch
  kaputt**. Das Pinnen war das eigentliche Risiko (bleibt vertikales Scrollen im Swipe-Track
  hängen?); erst der CDP-Test bewies: vertikal Δ 1.427 px, kein Trap, horizontal exakt ein
  Panel Δ 390 px.
- **Auf das Verschwinden des Preloaders warten**, nicht auf eine feste Zeit. Ein Canvas mit
  `opacity: 0` fängt Klicks trotzdem ab, solange er im Layout steht.
- **[[lenis-scroll-container-konflikt|Lenis]] bewegt die Seite weiter**, während der Testrunner
  klickt — mit gesetzter Scrollposition und echtem Treffer-Check testen.
- **Selektoren nach Canvas-Reihenfolge sind instabil**, und die Runtime serialisiert
  Inline-Styles neu (`z-index:100` → `z-index: 100`) — Attribut-Selektoren treffen dann nichts.
  Über den *computed* Wert gehen.
- **Desktop-Gegenprobe rechnerisch**, nicht optisch: Dokumenthöhe und Sektionshöhen vorher/
  nachher vergleichen. Bleiben sie identisch, ist die Choreografie unangetastet.

> [Quelle: raw/sessions/2026-08-26-optimize-moriosolutions-landing-page-for-mobile-view.md]

## Offene Fragen

- Größer heißt hier unschärfer, weil mobil kleinere Texturen geladen werden. Ab welchem
  Füllgrad kippt das? 70 % war sichtbar scharf, 120 % sichtbar matschig. #prüfen

## Verbindungen
- [[moriosolutions-website]] — der konkrete Fall
- [[lenis-scroll-container-konflikt]] — dieselbe Seite, dieselbe Bauform
- [[cinematic-threejs-scrollytelling]] — Scroll-p [0,1] treibt Kamera und Bühne
- [[design-engineering]] · [[GPU-Safe Animation (transform + opacity only)]]
- [[Responsive Rules — Mobile-first, no horizontal scroll, clamp typography, touch targets 44px]]

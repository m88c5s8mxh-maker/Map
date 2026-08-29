---
tags: [concept, frontend, scroll, lenis, design-engineering, hoch]
sources: [raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]
updated: 2026-08-29
---

# Lenis-Scroll-Container-Konflikt

## Definition

Auf einer Seite mit **Lenis-Smoothscroll** (`smoothWheel: true`) ist ein innerer Scroll-Container
mit `overflow-y: auto` zwar *scrollbar*, lässt sich aber **nicht scrollen**. Lenis greift
Wheel-Events **global** ab und übersetzt sie in seine eigene Seitenbewegung — der innere Container
bekommt nie ein Scroll-Delta. Das CSS ist korrekt, die Ursache liegt eine Ebene darüber.

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

Symptom im Alltag: „Die Box hat eine Scrollleiste, aber das Mausrad scrollt die Seite."
Wer nur das CSS prüft, sucht endlos an der falschen Stelle.

## Die Lösung — drei Bausteine

| Baustein | Wirkung |
|---|---|
| `data-lenis-prevent-wheel` am Scroll-Container | Lenis steigt für dieses Ziel aus, der Browser scrollt die Box nativ |
| `overscroll-behavior: contain` (CSS) | Am Ende der Liste springt die Bewegung **nicht** auf die Seite über |
| **Konditional** blocken statt pauschal | Nur blocken, wenn es tatsächlich etwas zu scrollen gibt |

Der dritte Punkt ist der, den man beim ersten Anlauf vergisst. Ist der Inhalt kürzer als sein
Ausschnitt (Reiter auf, Unterpunkte zu), gibt es nichts zu scrollen — das Rad wird trotzdem
geblockt und die Seite steht über einem toten Streifen, in dem gar nichts passieren kann.
Nachgewiesen im Livetest: `seiteBewegtSichUm: 0` bei leerem Container.

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

Ergebnis nach der Korrektur, beides gemessen: Rad **mit** Ziel in der Box → Seite bewegt sich
**0 px**. Rad **daneben** → Seite bewegt sich **299 px**. Das ist die saubere Trennung.

## Zweite Ursache, die gern mitläuft: der geschätzte Deckel

Im selben Fall war `max-height: 40vh` für alle drei Karten gesetzt — Karte 1 sitzt aber bei
`top: 21 %`, die Karten 2 und 3 bei `top: 41 %`. Bei 1440×900 liefen dort **121 px unten aus der
gepinnten Bühne** heraus, und die hat `overflow: hidden`: der Text war unerreichbar.

**Regel:** In einer gepinnten Bühne wird der verfügbare Platz **gemessen, nicht geschätzt**.
Ein fester `vh`-Wert ist immer in einem Fall falsch — Fensterhöhe, Elementposition und Sprache
spielen mit (der spanische Beschreibungstext ist eine Zeile länger und drückt die Liste tiefer).
Das CSS behält den `vh`-Wert als Fallback, falls das Skript nicht läuft.

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

## `top` animieren ist auf so einer Seite die falsche Wahl

Beim Aufklappen rücken die unteren Karten auf die Höhe der ersten. Der naheliegende Weg — eine
340-ms-Transition auf `top` — ist eine **Layout-Animation**: sie erzwingt pro Frame Layout und
Paint. Auf einer Karte mit `backdrop-filter: blur(14px)`, während daneben three.js rendert,
bleibt sie bei belastetem Main-Thread **stehen**: die Karte stand bei der Messung noch 180 px
zu tief. Bewusst ohne Animation umgesetzt.

> [Quelle: raw/sessions/2026-08-27-add-scrollbar-to-expandable-accordion-boxes.md]

Passt zu den Compositor-Regeln aus [[design-engineering]]: animiert wird `transform`/`opacity`,
nicht `top`/`height`/`width` — und auf einer WebGL-Seite gilt das doppelt.

## Sichtbarkeit: die macOS-Overlay-Leiste verrät nichts

Die Systemscrollleiste erscheint auf macOS erst **beim Scrollen**. Einer Box sieht man dadurch
nicht an, dass sie weitergeht — der Nutzer hält den sichtbaren Ausschnitt für den ganzen Inhalt.
Für Lese-Container deshalb eine **dauerhaft sichtbare Leiste** mit eingefärbtem Track (hier 8 px).

## Prüfvorgehen, das hier funktioniert hat

1. Im **echten Browser** messen, nicht im Kopf rechnen — über vier Auflösungen
   (1024×640 bis 1920×1080) plus Mobile (390×844).
2. **In die Sektion scrollen**, bevor gemessen wird. Eine gepinnte Bühne liegt sonst bei
   `y = 1980` außerhalb des Viewports, synthetische Klicks und Wheel-Events treffen ins Leere —
   der Test ist dann nicht negativ, sondern **methodisch kaputt**.
3. Ist die Choreografie an Scrollposition gekoppelt (`visibility: hidden` pro Frame), Sichtbarkeit
   für den Test per `!important` erzwingen, sonst gibt es kein Hit-Testing.
4. Nicht nur den Fix prüfen, sondern auch das **Zuklappen** und den unberührten Mobile-Pfad.

## Verbindungen
- [[design-engineering]] — Compositor-Properties, warum Layout-Animationen teuer sind
- [[cinematic-web]] — der GSAP/Lenis-Stack, in dem dieses Problem entsteht
- [[cinematic-threejs-scrollytelling]] — dieselbe Bauform: Scroll steuert die Bühne
- [[moriosolutions-website]] — der konkrete Fall
- [[web-factory]] · [[immersive-web-experience]]

## Offene Fragen

- Gilt derselbe Konflikt für Touch-Scrolling auf Tablets? Hier war Mobile (≤820 px) bewusst
  ohne Deckel und ohne Scroll-Container gebaut, der Fall trat gar nicht auf. #prüfen

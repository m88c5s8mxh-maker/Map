---
tags: [concept, threejs, cinematic, webgl, scrollytelling]
sources: [cinematic-threejs-techniques.md]
updated: 2026-05-14
---

# Cinematic Three.js Scrollytelling

Scroll-gesteuerte 3D-Filmsequenz: Space → Earth → Forest → Wall-Fly-Through.
Umgesetzt für MARCINIOO'S Parfüm-Brand als luxury landing page.

## Kernarchitektur

- **1 Canvas** (THREE.WebGLRenderer), scroll position `p ∈ [0,1]` treibt alles
- **CatmullRomCurve3** für Kamera- und Look-At-Pfad (26 Punkte)
- `smoothScroll += (rawScroll - smoothScroll) * 0.032` — organisches Lerping
- Smoothstep helper `ss(a,b,t)` für alle Timing-Gates

## Earth-to-Forest Transition

CSS-Overlay (`#aerial-forest`, z-index:11) mit Drohnen-Bild:
- Fade-in p=0.07–0.14, Fade-out p=0.19–0.30
- Scale zoom 1.0→1.12 + langsamer `backgroundPosition` Satellite-Pan
- Atmosphere-Bloom Flash (radial gradient div) beim Eintritt
- Earth-ShaderMaterial opacity sinkt parallel → nahtloser Crossfade

## Motion Philosophy

Aus [[Motion Philosophy — Spring physics stiffness100 damping20]]:
- Alle Floats: `sin(time·a)·amp1 + sin(time·b)·amp2` — nie lineare Easing
- Perpetual micro-loops: jedes Element hat Dauerbewegung
- Stagger via `phase`-Offset pro Instanz

## Verbindungen

- [[Backdrop Shader — Animated Images]] — ShaderMaterial Technik
- [[Motion Philosophy — Spring physics stiffness100 damping20]]
- [[Design Advisor (design)]]

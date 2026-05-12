# Design & Animation Techniken — Mai 2026

**Quelle:** Codrops (tympanus.net/codrops)
**Gescrapt:** 2026-05-12
**Kategorie:** design

## Aktuelle Artikel & Techniken

### GSAP-Fokus dominiert Mai 2026
- **Clip-Path Wipes mit GSAP** — `clip-path` von `inset(0 100% 0 0)` zu `inset(0 0% 0 0)` als elegante Transition; kombinierbar mit ScrollTrigger
- **Shader Uniforms via GSAP** — GLSL Uniforms direkt aus GSAP-Timelines steuern (z.B. `uProgress`); Shader und GSAP als hybride Animation-Engine
- **Claude AI Mascot Animations** — SVG-Elemente mit GSAP morph animiert; Codrops reverse-engineered die Anthropic Mascot-Animation: organische Pfad-Interpolation via `MorphSVGPlugin`

### Scroll-Driven 3D Experiences
- **Three.js + Shaders + Watercolor-Effekte** (Susurrus Projekt) — `ShaderMaterial` mit Texture-Blending für organische Hintergründe, keine Canvas 2D
- **Scroll-driven 3D World** — Kamera-Bewegung entlang einer CatmullRom-Kurve synchronisiert mit Scroll; `gsap.to(camera.position, { scrollTrigger: {...} })`
- **Distortion + Blur als Motion Language** (4WIDE) — `CSS filter: blur()` + `transform: skewX()` kombiniert für kinetische Energie-Effekte

### Studio Spotlights (Techniken lernen)
- **Akaru** (akaru.fr) — Precision-driven experiences: micro-interactions, keine Überanimation, jedes Element hat Intention
- **Lemma Studio** — "Feeling behind the screen": Emotion durch Timing, nicht durch Komplexität
- **Layered Portfolio Artem** — Z-Achsen-Layering mit `perspective` + `translateZ` für Tiefenwirkung ohne WebGL

## Destillierte Patterns für cinematic-web

| Technik | Implementierung | MOTION_INTENSITY |
|---------|----------------|-----------------|
| Clip-Path Wipe Transition | `clip-path: inset(0 X% 0 0)` + GSAP | 5+ |
| Shader Uniform Control | GSAP + Three.js/GLSL | 8 |
| Kamera auf Pfad-Kurve | `CatmullRomCurve3` + ScrollTrigger | 8 |
| Distortion Energy Effect | `filter: blur + skewX` via GSAP | 6+ |
| SVG Morph | `MorphSVGPlugin` (GSAP Club) | 6+ |
| Z-Layer Parallax | `perspective + translateZ` (kein WebGL) | 5+ |

## Verbundene Skills

| Skill | Relevanz |
|-------|---------|
| `raw/skills/cinematic-web/SKILL.md` | Clip-Path Wipes, Shader-Control, Kamera-Kurve direkt einsetzbar |
| `raw/skills/web-factory/SKILL.md` | MOTION_INTENSITY 7–8 Level — Distortion, Clip-Path |
| `raw/skills/algorithmic-art.md` | Three.js Shader-Patterns für generative Art |
| `raw/skills/taste-skill/SKILL.md` | Akaru-Prinzip: Precision over Overanimation |

## Tags
`#design` `#animation` `#gsap` `#three-js` `#shaders` `#cinematic` `#codrops` `#2026`

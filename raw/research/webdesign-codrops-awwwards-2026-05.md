# Codrops & Awwwards — Webdesign Trends Mai 2026

**Quellen:** tympanus.net/codrops, awwwards.com/blog
**Gescrapt:** 2026-05-14
**Kategorie:** webdesign

## Aktuelle Codrops-Artikel (Mai 2026)

| Artikel | Technik | Relevanz |
|---------|---------|---------|
| HTML in Canvas Proposal | Neues Web-API: HTML direkt in Canvas rendern | Zukunft: DOM-Elemente als Canvas-Textur |
| Lemma Studio: Feeling behind the screen | Studio-Philosophie | Case Study Ansatz |
| Shader uniforms to clip-path wipes: GSAP portfolio | Clip-Path + GSAP Transition | **Direkt für cinematic-web** |
| Reverse-engineering Claude AI mascot animations (SVG + GSAP) | SVG-Path-Animation + GSAP | Morphing SVG Figuren ohne Plugin |
| Akaru: Precision-driven digital experiences | Motion Precision | Studio Spotlight |
| Layered Portfolio Experience (2-year journey) | Scroll-Layering, Z-Index-Storytelling | Anti-Gallery Ansatz |
| Susurrus: Watercolor world with Three.js + Shaders | Three.js + Fragment Shaders | WebGL Atmosphäre |

## Key Technique: Clip-Path + GSAP Transitions

Aus "Shader uniforms to clip-path wipes" (Mai 2026):
- Früheres Portfolio nutzte WebGL-Shader für Page Transitions
- Neuansatz: `clip-path` CSS-Property statt Shader — **kein WebGL nötig**
- GSAP animiert `clip-path: polygon(...)` zwischen States
- Performance identisch, Code 80% einfacher

```javascript
// Clip-Path Wipe Transition (GSAP, kein WebGL)
gsap.to(overlay, {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power3.inOut",
  duration: 0.8
});
```

## Claude AI Mascot Animations (SVG + GSAP) — Mai 2026

Codrops reverse-engineered Anthropic's Claude mascot:
- Reine SVG-Path-Morphing ohne externe Plugins
- GSAP `MorphSVG` Alternative: direkte `d`-Attribute animation
- Technik: `<path>` mit identischer Punkt-Anzahl → smooth morphing

**Für cinematic-web relevant:** Claude-ähnliche organische Blob-Formen ohne Club-Lizenz:
```javascript
// SVG Blob Morphing ohne MorphSVG Plugin
const paths = ["M 50,30 C...", "M 50,25 C..."];
let i = 0;
setInterval(() => {
  gsap.to("#blob path", { attr: { d: paths[i++ % paths.length] }, duration: 2, ease: "power2.inOut" });
}, 2000);
```

## Awwwards Blog — Neue Artikel

- **"Fluid Glass" Case Study** (Mai 2026) — UK Structural Glazing Firma mit Premium-Webdesign → Bauwesen als Cinematic-Web-Referenz
- **"Mapping the Uncharted: San Rita Project"** (Apr 2026) — Portfolio als "Home not just portfolio"
- **"Not a Portfolio. A Presence."** (Apr 2026) — **Trend: Website als Presence statt Portfolio**

## Trend: "Presence over Portfolio"

Awwwards-Artikel "Not a Portfolio. A Presence." beschreibt:
→ Websites sollen nicht zeigen was man macht, sondern wie man denkt
→ Scroll-Erlebnis = Markenerfahrung, nicht Werkzeugshow
→ Direkte Verstärkung der cinematic-web Philosophie

## Verbundene Skills

| Skill | Update |
|-------|--------|
| `raw/skills/cinematic-web/SKILL.md` | Clip-Path Wipe als GSAP-Alternative zu WebGL; SVG Morphing ohne MorphSVG |
| `raw/skills/algorithmic-art.md` | Susurrus-Technik: Three.js + Fragment Shader für atmosphärische Welten |
| `raw/skills/web-factory/SKILL.md` | "Presence over Portfolio" als Positionierungsargument für Premium-Tier |

## Tags
`#webdesign` `#codrops` `#awwwards` `#gsap` `#clippath` `#svg-morphing` `#cinematic` `#2026`

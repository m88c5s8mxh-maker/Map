# GSAP Showcase — Beste Webdesigns Mai 2026

**Quelle:** gsap.com/showcase
**Gescrapt:** 2026-05-12
**Kategorie:** webdesign

## Aktuelle Showcase-Einträge (Mai 2026)

| Site | Studio | GSAP Plugins |
|------|--------|-------------|
| [Bottega53](https://www.bottega53.com/) | The First The Last agency | ScrollTrigger, SplitText, CustomEase, ScrollTo |
| [KVS](https://www.kvs.services/) | Karan Chouhan + Team | ScrollTrigger, Observer, Draggable, SplitText |
| [Škoda Vision Concept](https://vision.doanbao.com/) | Bao Nam Doan | WebGL + GSAP |
| [Studio375](https://375.studio/) | Studio375 | — |
| [Maxima Therapy](https://maximatherapy.com/) | — | — |
| [Joseph Santamaria Portfolio](https://joseph-san.com/) | Joseph Santamaria | — |
| [Apex](https://apex-psi-indol.vercel.app/) | — | — |

## Dominante Plugin-Kombination 2026

**ScrollTrigger + SplitText** ist die mit Abstand häufigste Kombination in aktuellen Award-Sites:
- `SplitText` — Text in Zeichen/Wörter/Zeilen aufteilen → animierbar
- `ScrollTrigger` — Animationen an Scroll-Position binden
- `CustomEase` — eigene Bezier-Kurven für unverwechselbares Timing
- `Observer` — Touch, Pointer, Scroll unified → für Mobile-optimierte Scroll-Hijack-Experiences

## Pattern: Therapy/Medical + Premium Design
Auffällig: **Maxima Therapy** im GSAP Showcase — Arztpraxis/Therapie-Seiten werden zu Premium-Design-Referenzen. Das ist relevant für web-factory/Arztpraxis-Branche.

## GSAP Showreel 2025
YouTube-Showreel verfügbar: `youtu.be/rOs-TFUeuSg` — alle besten GSAP-Sites des Jahres in 2 Minuten. Beste Inspirationsquelle für Cinematic Web Projekte.

## Konsequenz für cinematic-web Skill

| GSAP Plugin | Verfügbarkeit | Einsatz |
|-------------|--------------|---------|
| ScrollTrigger | Kostenlos CDN | ✅ bereits im Stack |
| SplitText | Club GSAP | ⚠️ benötigt Lizenz — Alternative: manuell chars splitten |
| CustomEase | Kostenlos CDN | ✅ sofort nutzbar |
| Observer | Kostenlos CDN | ✅ für Touch-Scroll-Experiences |
| Draggable | Kostenlos CDN | ✅ für interaktive Elemente |
| MorphSVG | Club GSAP | ⚠️ benötigt Lizenz |

**SplitText Alternative ohne Lizenz:**
```javascript
const chars = text.textContent.split('').map(c => `<span>${c}</span>`).join('');
text.innerHTML = chars;
gsap.from(text.querySelectorAll('span'), { yPercent: 110, stagger: 0.03, duration: 0.8 });
```

## Verbundene Skills

| Skill | Relevanz |
|-------|---------|
| `raw/skills/cinematic-web/SKILL.md` | SplitText Alternative, CustomEase, Observer Pattern |
| `raw/skills/web-factory/SKILL.md` | Therapy-Site als Premium-Referenz für Arztpraxis-Branche |
| `raw/skills/web-factory/industries/arztpraxis.md` | Maxima Therapy Referenz |
| `raw/skills/algorithmic-art.md` | WebGL + GSAP Kombination |

## Tags
`#gsap` `#webdesign` `#animation` `#scrolltrigger` `#splittext` `#cinematic` `#showcase` `#2026`

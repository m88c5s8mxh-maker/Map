---
name: cinematic-web
description: Generates complete, production-ready single-file HTML websites with cinematic, award-tier aesthetics. Dark palette, scroll-driven animations, GSAP + Lenis, scramble text reveals, kinetic marquees, canvas particles. For agencies, premium restaurants, studios, and any brand that needs Awwwards-level presence. Trigger with "/cinematic-web [Branche] [Firmenname]" or any premium website request.
argument-hint: "<Branche> | <Firmenname> | <Akzentfarbe>"
---

# Cinematic Web — Premium Single-File HTML Generator

Erzeugt fertige, deployfähige Single-File HTML-Websites auf Awwwards-Niveau. Kein Build-Schritt, keine Abhängigkeiten außer CDN-Links. Dark-first Ästhetik, cinematic Scroll-Erlebnis, echte Animationen — kein Template-Look.

Inspirationsreferenz: [sidewave.it](https://sidewave.it) — Editorial Dark, All-Caps Headlines, Scramble Reveals, Cinematic Flow.

---

## Schritt 1 — Brief aufnehmen

Frage alle fehlenden **Pflichtfelder** auf einmal als nummerierte Liste ab. Sobald alle da sind, direkt zur Generierung.

### Basis-Pflichtfelder
- `BRANCHE` — Agentur / Gastronomie / Studio / Kanzlei / Produkt / Portfolio
- `FIRMENNAME` — vollständiger Name
- `LEISTUNGEN` — 3–6 Kernleistungen, kommagetrennt
- `ADRESSE` — Straße, PLZ, Ort
- `TELEFON`
- `EMAIL`
- `SLOGAN` — ein prägnanter Positioning-Satz (oder aus Leistungen ableiten)

### Impressum-Pflichtfelder (§5 TMG)
- `GESCHÄFTSFÜHRER`
- `RECHTSFORM` — GmbH / UG / GbR / Einzelunternehmen
- `HRB` — falls vorhanden
- `UST_ID` — falls vorhanden

### Optionale Felder (verbessern Qualität stark)
- `AKZENTFARBE` — Hex oder Farbname (Default: `#F5A523` Amber)
- `LOGO` — SVG-Code, Bild-URL, oder "Text"
- `HERO_BILD` — URL (sonst Canvas-generiertes Visual)
- `STATS` — 2–4 Kennzahlen: `Label | Zahl` z.B. "Jahre Erfahrung | 12+"
- `KUNDEN` — 4–8 Kundenlogos oder Firmennamen (für Marquee-Band)
- `PROJEKTE` — 3–6 Einträge: `Projektname | Kategorie | Kurzbeschreibung`
- `TONE` — brutal / editorial / warm / luxury (Default: editorial)
- `GRÜNDUNGSJAHR`

### Branchenspezifische Felder

**Gastronomie:**
- `ÖFFNUNGSZEITEN`
- `SPEISEKARTE` — `Kategorie | Name | Beschreibung | Preis`
- `RESERVIERUNG`

**Agentur / Studio:**
- `TEAM_GRÖSSE`
- `AWARDS` — falls vorhanden

---

## Schritt 2 — Creative Direction (Phase 1)

Vor dem Coden: kreative Richtung definieren. KEIN Code in diesem Schritt.

### Aesthetic Archetype (wähle einen)

| Code | Ästhetik | Wenn |
|------|----------|------|
| `VOID` | Tiefes Off-Black, einzelner Akzent, maximale Stille | Agentur, Studio, Portfolio |
| `EMBER` | Warmes Dark + Amber/Orange, organische Formen | Premium Gastronomie, Handwerk |
| `FROST` | Dunkelblau-Grau, Eis-Weiß Akzent, scharf | Kanzlei, Beratung, Tech |
| `LUXE` | Tiefdunkel + Gold, serif Display-Font | Luxury, Premium Produkt |

Wähle Archetype basierend auf Branche und Akzentfarbe.

### Motion Language (wähle einen)
- **Drift** — langsame schwebende Bewegung (Partikel, Elemente)
- **Cut** — harte Cuts zwischen Zuständen, digitale Energie
- **Morph** — organische Übergänge, Flüssigkeit
- **Surge** — Aufwärtsbewegung, Energie, Wachstum

### Signature Moments (2–3)
Definiere die 3 Szenen die der User im Gedächtnis behält. Konkret und bold.

Beispiel:
1. Scramble-Text: Firmenname dekodiert sich aus Zeichen-Chaos
2. Stats-Explosion: Zahlen zählen hoch wenn sichtbar
3. Kunden-Marquee: Logos gleiten endlos durch — Beweis durch Masse

---

## Schritt 3 — Tech-System

### Stack

```
HTML inline + <style> + <script> — Single File
GSAP 3 CDN + ScrollTrigger Plugin
Lenis (Smooth Scroll) CDN
Google Fonts CDN
Phosphor Icons CDN
```

CDN-Links (immer aktuell nutzen):
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
```

### CSS-Architektur

```css
:root {
  /* Dark Base */
  --black:      #080705;        /* tiefstes Schwarz */
  --surface:    #0E0C09;        /* Hintergrund Sektionen */
  --card:       #161310;        /* Card-Oberflächen */
  --card-hi:    #1E1A14;        /* Card Hover */

  /* Akzent — aus AKZENTFARBE befüllen */
  --accent:     [AKZENTFARBE];
  --accent-hi:  [10% heller];
  --accent-dim: rgba([R],[G],[B], 0.09);
  --accent-bdr: rgba([R],[G],[B], 0.22);
  --accent-glow: rgba([R],[G],[B], 0.14);

  /* Text */
  --ivory:      #EDE8DF;
  --ivory-dim:  rgba(237,232,223,0.55);
  --muted:      #6E665A;
  --border:     rgba([R],[G],[B], 0.10);

  /* Fonts */
  --font-head:  'Fraunces', Georgia, serif;    /* Display / Editorial */
  --font-body:  'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono:  'JetBrains Mono', monospace;   /* Stats, Zahlen */

  /* Easing */
  --ease-out:    cubic-bezier(0.32, 0.72, 0, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-expo:   cubic-bezier(0.16, 1, 0.3, 1);
}
```

**Alternative Fonts nach Archetype:**
- `VOID`: `'Clash Display'` oder `'Cabinet Grotesk'` — kein Serif
- `EMBER`: `'Fraunces'` (Serif Display) + `'Plus Jakarta Sans'`
- `FROST`: `'Geist'` + `'Geist Mono'`
- `LUXE`: `'Cormorant Garamond'` + `'Plus Jakarta Sans'`

---

## Schritt 4 — Pflicht-Systeme

Jede cinematic-web Site hat diese 7 Systeme. Alle vollständig implementieren.

---

### SYSTEM 1 — Loader

```html
<div id="loader">
  <div class="ld-brand">
    <!-- Firmenname als einzelne Buchstaben-Spans -->
    <span style="--i:0">T</span><span style="--i:1">r</span>...
  </div>
  <div class="ld-sub">Slogan oder Tagline</div>
  <div class="ld-line-wrap"><div class="ld-line-fill"></div></div>
</div>
```

```css
#loader {
  position: fixed; inset: 0; z-index: 9000;
  background: var(--black);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 2rem;
}
.ld-brand span {
  display: inline-block;
  opacity: 0; transform: translateY(100%);
}
.ld-line-fill {
  height: 100%; width: 0%;
  background: var(--accent);
  transition: width 1.4s var(--ease-expo);
}
```

```javascript
// Loader Timing — exakt einhalten
const LOADER_REVEAL   = 200;    // ms: erste Buchstaben erscheinen
const LOADER_PROGRESS = 300;    // ms: Progress-Bar startet
const LOADER_DISMISS  = 1900;   // ms: Loader faded aus
const LOADED_CLASS    = 2650;   // ms: body.loaded gesetzt → CSS Transitions starten

// Buchstaben mit GSAP staggered einblenden
gsap.to('.ld-brand span', {
  opacity: 1, y: 0, duration: 0.6,
  stagger: 0.06, ease: 'power3.out', delay: LOADER_REVEAL / 1000
});

// Progress Bar
setTimeout(() => {
  document.querySelector('.ld-line-fill').style.width = '100%';
}, LOADER_PROGRESS);

// Loader ausblenden
setTimeout(() => {
  gsap.to('#loader', {
    opacity: 0, duration: 0.75, ease: 'power2.inOut',
    onComplete: () => {
      document.getElementById('loader').style.display = 'none';
      document.body.classList.remove('no-scroll');
    }
  });
}, LOADER_DISMISS);

// body.loaded → alle CSS Entrance Animations triggern
setTimeout(() => {
  document.body.classList.add('loaded');
}, LOADED_CLASS);
```

**`body.loaded` Pattern — Entrance Delays (relativ zu Loader-Dismiss):**
```css
/* Eyebrow: 0.05s — erscheint sofort */
/* Hero-Titel Buchstaben: calc(0s + var(--i) * 0.06s) */
/* Hero-Subtext: 0.3s */
/* Hero-CTAs: 0.45s */
/* Scroll-Indikator: 0.7s */
/* Badge-Pill: 0.9s */
```

---

### SYSTEM 2 — Floating Pill Navigation

```html
<nav id="mainNav">
  <div class="nav-inner">
    <a href="#" class="nav-logo">
      <!-- Logo: img / SVG / Text-Logo -->
    </a>
    <ul class="nav-links">
      <li><a href="#about">Story</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
    <a href="#contact" class="nav-cta">Anfrage</a>
    <button class="nav-hamburger" aria-label="Menu" aria-expanded="false">
      <span></span><span></span>
    </button>
  </div>
</nav>
```

```css
#mainNav {
  position: fixed; top: 1.4rem; left: 50%; z-index: 500;
  transform: translateX(-50%);
  width: calc(100% - 3rem); max-width: 1100px;
  opacity: 0; transition: opacity 0.5s ease;
}
body.loaded #mainNav { opacity: 1; }

.nav-inner {
  display: flex; align-items: center;
  background: rgba(8,7,5,0.82);
  border: 1px solid var(--accent-bdr);
  border-radius: 100px;
  backdrop-filter: blur(20px);
  padding: 0.55rem 0.55rem 0.55rem 1.6rem;
  transition: background 0.3s;
}

/* Nav scrolled — stärker verglast */
#mainNav.scrolled .nav-inner {
  background: rgba(8,7,5,0.95);
}
```

---

### SYSTEM 3 — Canvas Partikel + Cursor-Glow

```javascript
// Canvas Particle System — 60fps, resize-safe
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    // Koordinaten normalisieren — resize-safe
    particles.forEach(p => {
      p.x = p.nx * W;
      p.y = p.ny * H;
    });
  }

  // Partikel initialisieren
  const COUNT = Math.min(window.innerWidth < 768 ? 0 : 60, 80);
  for (let i = 0; i < COUNT; i++) {
    const nx = Math.random(), ny = Math.random();
    particles.push({
      nx, ny,
      x: nx * window.innerWidth,
      y: ny * window.innerHeight,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.4 + 0.05
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      // Wrap around
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      p.nx = p.x / W; p.ny = p.y / H;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(ACCENT_R, ACCENT_G, ACCENT_B, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  draw();
}

// Cursor Spotlight — Lerp Loop
function initCursorGlow() {
  const glow = document.getElementById('heroCursorGlow');
  if (!glow || window.innerWidth < 768) return;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;
  const LERP = 0.075;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  function loop() {
    cx += (mx - cx) * LERP;
    cy += (my - cy) * LERP;
    glow.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
    requestAnimationFrame(loop);
  }
  loop();
}
```

---

### SYSTEM 4 — Scramble Text Reveal

Text beginnt als Zeichen-Chaos und dekodiert sich zu lesbarem Text beim Scroll-Eintritt.

```javascript
const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&£€§';

function scramble(el, finalText, duration = 1200) {
  let frame = 0;
  const totalFrames = Math.floor(duration / 16);
  const interval = setInterval(() => {
    const progress = frame / totalFrames;
    el.textContent = finalText.split('').map((char, i) => {
      if (char === ' ') return ' ';
      if (i < Math.floor(progress * finalText.length)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
    frame++;
    if (frame >= totalFrames) {
      el.textContent = finalText;
      clearInterval(interval);
    }
  }, 16);
}

// Mit IntersectionObserver triggern
const scrambleObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      scramble(el, el.dataset.text || el.textContent);
      scrambleObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-scramble]').forEach(el => {
  el.dataset.text = el.textContent;
  scrambleObserver.observe(el);
});
```

**Usage in HTML:**
```html
<h2 class="section-title" data-scramble>Engineering the unseen</h2>
```

---

### SYSTEM 5 — Kinetic Marquee Strip

Endloses Text-Band zwischen Sektionen. Pausiert bei Hover.

```html
<div class="marquee-section">
  <div class="marquee-track">
    <!-- Inhalt 2× duplizieren für nahtlose Schleife -->
    <span>CONSULTING</span><span class="dot">·</span>
    <span>DESIGN</span><span class="dot">·</span>
    <span>DEVELOPMENT</span><span class="dot">·</span>
    <span>STRATEGY</span><span class="dot">·</span>
    <!-- Duplikat -->
    <span>CONSULTING</span><span class="dot">·</span>
    <span>DESIGN</span><span class="dot">·</span>
    <span>DEVELOPMENT</span><span class="dot">·</span>
    <span>STRATEGY</span><span class="dot">·</span>
  </div>
</div>
```

```css
.marquee-section {
  overflow: hidden;
  border-top: 1px solid var(--accent-bdr);
  border-bottom: 1px solid var(--accent-bdr);
  padding: 1.4rem 0;
  background: var(--surface);
}
.marquee-track {
  display: inline-flex; gap: 2.5rem;
  animation: marqueeRun 28s linear infinite;
  will-change: transform;
  font-family: var(--font-head);
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}
.marquee-track .dot { color: var(--accent); }
.marquee-section:hover .marquee-track { animation-play-state: paused; }

@keyframes marqueeRun {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

### SYSTEM 6 — Stats Counter

Zahlen zählen hoch wenn sie sichtbar werden.

```html
<div class="stat-item">
  <span class="stat-num" data-target="16" data-suffix="+">0</span>
  <span class="stat-label">Jahre Erfahrung</span>
</div>
```

```javascript
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));
```

---

### SYSTEM 7 — Lenis Smooth Scroll + GSAP ScrollTrigger

```javascript
// Lenis initialisieren
const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// GSAP mit Lenis verbinden
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Progress Bar
lenis.on('scroll', ({ progress }) => {
  document.getElementById('progressBar').style.width = (progress * 100) + '%';
});

// Anker-Clicks mit Lenis
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
  });
});
```

---

## Schritt 5 — Sektionsstruktur

### Hero

```html
<section class="hero" id="home">
  <canvas id="heroCanvas" aria-hidden="true"></canvas>
  <div id="heroCursorGlow" aria-hidden="true"></div>

  <!-- Parallax Background Image -->
  <div class="hero-media">
    <div class="hero-media-inner">
      <img src="[HERO_BILD]" alt="[FIRMENNAME] — [SLOGAN]" />
    </div>
  </div>

  <div class="hero-content">
    <span class="eyebrow">[LEISTUNGEN als kommagetrennte Kette]</span>

    <!-- Buchstaben-Reveal Title -->
    <h1 class="hero-title">
      <!-- Jeden Buchstaben als .hl span mit --i Index -->
      <span class="hero-word">[WORT 1 als Buchstaben-Spans]</span>
      <span class="hero-word"><em>[WORT 2 — letzter Buchstabe in --accent]</em></span>
    </h1>

    <p class="hero-sub">[SLOGAN — 1–2 Sätze]</p>

    <div class="hero-actions">
      <a href="#contact" class="btn-primary">
        [Haupt-CTA]
        <span class="btn-icon">↗</span>
      </a>
      <a href="#services" class="btn-ghost">Mehr erfahren</a>
    </div>
  </div>

  <!-- Badge Pill — optionale Info unten links -->
  <div class="hero-badge-pill">
    <div class="badge-ring"><div class="badge-ring-core"></div></div>
    <span>Seit [GRÜNDUNGSJAHR] · [ORT]</span>
  </div>

  <!-- Scroll Indicator -->
  <div class="hero-scroll">
    <span class="hero-scroll-text">Scroll</span>
    <div class="hero-scroll-line"></div>
  </div>
</section>
```

**CSS Hero-Titel Buchstaben-Reveal:**
```css
.hl {
  display: inline-block;
  opacity: 0;
  transform: translateY(85%) rotateX(-60deg);
  transform-origin: 50% 0%;
  transition: opacity 0.65s var(--ease-out), transform 0.78s var(--ease-out);
  transition-delay: calc(0s + var(--i) * 0.06s);
  will-change: transform, opacity;
}
body.loaded .hl { opacity: 1; transform: translateY(0) rotateX(0); }
.hl-accent { color: var(--accent); }

.hero-title {
  font-family: var(--font-head);
  font-size: clamp(4rem, 8.5vw, 8.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.9;
  perspective: 900px;
  white-space: nowrap;
}
.hero-word { display: inline; }
```

---

### About / Story

```html
<section class="about" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-left">
        <span class="section-eyebrow">Story</span>
        <h2 class="section-title" data-scramble>[FIRMENNAME]<br>seit [GRÜNDUNGSJAHR]</h2>
      </div>
      <div class="about-right">
        <p class="about-body fade-up">[Firmenbeschreibung — 3–4 Sätze, konkreter Ton]</p>
        <!-- Stats wenn vorhanden -->
        <div class="about-stats fade-up">
          [STATS als stat-item Cards]
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Services

```html
<section class="services" id="services">
  <div class="container">
    <span class="section-eyebrow">Leistungen</span>
    <h2 class="section-title" data-scramble>Was wir bauen.</h2>

    <!-- Asymmetrisches Grid — NICHT 3 gleiche Spalten -->
    <div class="services-grid">
      <!-- Für jede Leistung eine Karte -->
      <article class="service-card fade-up">
        <div class="service-card-inner">
          <span class="service-num">01</span>
          <h3>[LEISTUNG]</h3>
          <p>[2–3 Sätze Beschreibung]</p>
          <span class="service-arrow">→</span>
        </div>
      </article>
    </div>
  </div>
</section>
```

```css
/* Asymmetrisches Grid — NIE 3 gleiche Spalten */
.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Default 2-spaltig */
  gap: 1px;  /* Trennlinien statt Cards */
  background: var(--accent-bdr);  /* Grid-Linie als Hintergrund */
}
.service-card {
  background: var(--surface);
  padding: 3rem 2.5rem;
  transition: background 0.3s;
}
.service-card:hover { background: var(--card-hi); }

/* Erste Karte nimmt 2 Spalten ein — bricht Symmetrie */
.service-card:first-child {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .service-card:first-child { grid-column: auto; }
}
```

---

### Stats / Numbers

```html
<section class="stats" id="stats">
  <div class="container">
    <div class="stats-grid">
      <!-- Pro Stat-Eintrag aus STATS-Feld -->
      <div class="stat-item fade-up">
        <span class="stat-num" data-target="[ZAHL]" data-suffix="[SUFFIX]">0</span>
        <span class="stat-label">[LABEL]</span>
      </div>
    </div>
  </div>
</section>
```

```css
.stats { background: var(--card); padding: 6rem 0; }
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 3rem;
  text-align: center;
}
.stat-num {
  display: block;
  font-family: var(--font-head);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.04em;
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 0.5rem;
}
```

---

### Projekte / Cases (wenn PROJEKTE vorhanden)

```html
<section class="work" id="work">
  <div class="container">
    <span class="section-eyebrow">Work</span>
    <h2 class="section-title" data-scramble>Ausgewählte Projekte.</h2>
    <div class="work-list">
      <!-- Pro Projekt -->
      <article class="work-item fade-up">
        <div class="work-item-inner">
          <span class="work-num">[01]</span>
          <div class="work-info">
            <h3>[PROJEKTNAME]</h3>
            <span class="work-cat">[KATEGORIE]</span>
          </div>
          <p>[KURZBESCHREIBUNG]</p>
          <span class="work-arrow">↗</span>
        </div>
        <div class="work-divider"></div>
      </article>
    </div>
  </div>
</section>
```

```css
.work-list { margin-top: 4rem; }
.work-item-inner {
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  cursor: default;
  transition: color 0.2s;
}
.work-item:hover .work-item-inner { color: var(--accent); }
.work-divider {
  height: 1px;
  background: var(--accent-bdr);
  transition: background 0.2s;
}
.work-item:hover .work-divider { background: var(--accent); }

@media (max-width: 768px) {
  .work-item-inner { grid-template-columns: 1fr auto; gap: 1rem; }
  .work-num { display: none; }
}
```

---

### Kunden Logo-Marquee (wenn KUNDEN vorhanden)

```html
<div class="clients-section">
  <div class="clients-label">Vertrauen von</div>
  <div class="marquee-section">
    <div class="marquee-track">
      <!-- Logos als Text-Spans oder SVG, 2× dupliziert -->
      [KUNDEN je als <span class="client-name">KUNDE</span> — 2× dupliziert]
    </div>
  </div>
</div>
```

---

### Gastronomie-Erweiterung: Speisekarte

```html
<section class="menu" id="menu">
  <div class="container">
    <span class="section-eyebrow">Speisekarte</span>
    <h2 class="section-title">Was wir servieren.</h2>

    <!-- Tab Navigation -->
    <div class="menu-tabs" role="tablist">
      [Pro Kategorie ein Tab-Button]
    </div>

    <!-- Menü Cards per Kategorie -->
    <div class="menu-grid" id="menuGrid">
      [Menü-Items als Cards mit Name, Beschreibung, Preis]
    </div>
  </div>
</section>
```

---

### Kontakt

```html
<section class="contact" id="contact">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-left">
        <span class="section-eyebrow">Kontakt</span>
        <h2 class="section-title" data-scramble>Lass uns<br>reden.</h2>
        <div class="contact-info">
          <a href="tel:[TELEFON]" class="contact-link">[TELEFON]</a>
          <a href="mailto:[EMAIL]" class="contact-link">[EMAIL]</a>
          <address>[ADRESSE]</address>
        </div>
      </div>
      <div class="contact-right">
        <form class="contact-form" id="contactForm" novalidate>
          <div class="field-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required autocomplete="name">
          </div>
          <div class="field-group">
            <label for="email">E-Mail</label>
            <input type="email" id="email" name="email" required autocomplete="email">
          </div>
          <div class="field-group">
            <label for="message">Nachricht</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn-primary">
            Absenden <span class="btn-icon">↗</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
```

---

### Impressum (Pflicht — §5 TMG)

Vollständige Impressum-Sektion. Immer einbauen. Alle realen Daten aus Brief einsetzen — niemals Platzhalter.

```html
<section id="impressum" class="impressum">
  <div class="container">
    <h2>Impressum</h2>
    <div class="impressum-grid">
      <div>
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>[FIRMENNAME]<br>[STRASSE]<br>[PLZ] [ORT]</p>
        <h3>Vertreten durch</h3>
        <p>[GESCHÄFTSFÜHRER]</p>
        <h3>Kontakt</h3>
        <p>Telefon: <a href="tel:[TELEFON]">[TELEFON]</a><br>
        E-Mail: <a href="mailto:[EMAIL]">[EMAIL]</a></p>
      </div>
      <div>
        <!-- Nur wenn HRB: -->
        <h3>Registereintrag</h3>
        <p>Registergericht: [aus HRB]<br>Nr.: [HRB]</p>
        <!-- Nur wenn UST_ID: -->
        <h3>Umsatzsteuer-ID</h3>
        <p>[UST_ID] gem. § 27a UStG</p>
        <h3>Haftungsausschluss</h3>
        <p>Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für externe Links.</p>
      </div>
    </div>
  </div>
</section>
```

---

## Schritt 6 — Qualitätsregeln (KRITISCH)

### Verboten — sofortige Disqualifikation

- `Inter` als einzige Schrift
- Generische blaue Buttons `#007bff`
- Leere `<img alt="">` oder `alt="Bild"`
- `// TODO`, `<!-- hier einfügen -->`, `[Platzhalter]` im Output
- 3 gleiche Spalten Feature-Grid
- `height: 100vh` (nutze `min-height: 100dvh`)
- `window.addEventListener('scroll')` ohne `{ passive: true }`
- `top`, `left`, `width`, `height` animieren (nur `transform` + `opacity`)
- `z-index: 9999` oder willkürliche z-index-Werte
- Emojis im Code oder Inhalt

### Pflicht — immer

- `white-space: nowrap` auf Hero-Titel wenn Buchstaben-Reveal
- `body.loaded` Pattern für alle Entrance-Animationen
- Scroll-Listener immer `{ passive: true }`
- `requestAnimationFrame` für alle JS-Animationen
- `@media (prefers-reduced-motion: reduce)` am Ende des CSS
- Schema.org JSON-LD im `<head>`
- Mobile: Canvas + Cursor-Glow ausblenden unter 768px
- Telefonnummern immer als `<a href="tel:...">`
- `max-width: 1200px` Container mit `margin: 0 auto`
- `section-eyebrow` vor jedem H2 (Kontext-Label)

### Typografie-Skala

```css
/* Display: Hero, große Section-Headlines */
font-size: clamp(4rem, 8.5vw, 8.5rem);
letter-spacing: -0.03em; line-height: 0.9;

/* H2: Section-Titel */
font-size: clamp(2.2rem, 4vw, 3.8rem);
letter-spacing: -0.02em; line-height: 1.05;

/* H3: Card-Titel */
font-size: clamp(1.1rem, 2vw, 1.4rem);
letter-spacing: -0.01em;

/* Body */
font-size: 0.95rem; line-height: 1.85; max-width: 65ch;

/* Eyebrow / Label */
font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase;
```

### SEO Basics

```html
<title>[FIRMENNAME] — [BRANCHE] in [ORT]</title>
<meta name="description" content="[160-Zeichen Beschreibung]">
<meta property="og:title" content="[FIRMENNAME]">
<meta property="og:description" content="[SLOGAN]">
```

```json
// Schema.org JSON-LD
{
  "@context": "https://schema.org",
  "@type": "[LocalBusiness|FoodEstablishment|ProfessionalService]",
  "name": "[FIRMENNAME]",
  "address": { "@type": "PostalAddress", "streetAddress": "[STR]",
    "addressLocality": "[ORT]", "postalCode": "[PLZ]", "addressCountry": "DE" },
  "telephone": "[TELEFON]", "email": "[EMAIL]"
}
```

---

## Schritt 7 — Ausgabe

Gib die **vollständige, einzelne HTML-Datei** aus — kein Codeblock abgeschnitten, kein `[... rest ...]`.

Danach Zusammenfassung:

```markdown
## Website fertig: [Firmenname]

**Datei:** [firmenname]-cinematic.html
**Ästhetik:** [ARCHETYPE] · [Motion Language]
**Akzent:** [HEX]
**Fonts:** [Heading] + [Body]
**Systeme:** Loader · Nav · Canvas · Scramble · Marquee · Stats · Smooth Scroll

### Ausstehend:
- [ ] Logo-Datei → `<img src="...">` ersetzen
- [ ] Hero-Bild URL eintragen
- [ ] Kontaktformular Backend (Formspree / n8n Webhook)
- [ ] Datenschutzerklärung (separates Dokument)
```

---

## Schritt 8 — Varianten (optional)

Nach Lieferung anbieten:
1. **Farbvariante** — gleiche Struktur, andere Akzentfarbe
2. **Light Mode Version** — für konservativere Branchen
3. **Sektion ergänzen** — Blog, Team, FAQ, Preise, Galerie
4. **Mehrsprachig** — DE + EN

---

---

## Schritt 9 — 3D Walkthrough Mode (Three.js)

Wenn der Nutzer eine **3D-animierte Website** möchte, bei der die Kamera durch einen echten Raum fliegt (Lokal, Hotel, Showroom, Galerie, Immobilie), aktiviere diesen Modus statt des 2D Scroll-Erlebnisses.

### Wann 3D Walkthrough nutzen

| Branche | Anwendung |
|---------|-----------|
| Gastronomie | Kamera fliegt durch Restaurant, Gerichte erscheinen auf Tischen |
| Hotel / Immobilie | Kamera läuft durch Zimmer, Lobby, Außenbereich |
| Showroom / Auto | Kamera umkreist Produkt, Details zoomen herein |
| Galerie / Museum | Kamera gleitet an Kunstwerken vorbei |
| Event-Location | Kamera zeigt Raum-Atmosphäre und Stimmung |

### Tech-Stack (zusätzlich zu Standard-Stack)

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<!-- GSAP + ScrollTrigger + Lenis wie gehabt -->
```

Wichtig: Three.js als **UMD-Build** (`.min.js`), KEINE ES-Module-Imports.

---

### Architektur

```
700vh Scroll-Wrapper (#cv-wrap)
  └── position: relative, height: 700vh

Fixed Canvas (#cvs)
  └── position: fixed, inset: 0, z-index: 0

HTML Overlays (.ov)
  └── position: fixed, z-index: 10
  └── fade in/out per GSAP basierend auf scroll-Fortschritt

ScrollTrigger scrub
  └── scrollProg: 0 → 1 mapped auf 700vh
  └── CatmullRomCurve3.getPoint(scrollProg) → Kamera-Position
```

---

### Kamera-Pfad konfigurieren

```javascript
/* CAM_PTS — Kamera-Positionen entlang des Wegs [x, y, z]
   y = Augenhöhe über Boden (z.B. 0.40 = ca. 1.6m wenn FY=-1.2)
   z = Tiefenachse (positiv = außen/vorne, negativ = hinten)
   x = Seitenachse (negativ = links, positiv = rechts) */

const CAM_PTS = [
  [0,    0.42, 40],   // Außen — Blick auf Gebäude
  [0,    0.42, 27],   // Eingang
  [0.15, 0.40, 21],   // Drinnen, kurz nach Eingang
  [0.6,  0.40, 17],   // Zu Station 1 (rechts)
  [1.3,  0.40, 14],   // AN Station 1
  [0.4,  0.40,  9],   // Mittelgang
  [-1.3, 0.40,  2],   // AN Station 2 (links)
  [-0.4, 0.40, -4],   // Mittelgang
  [1.3,  0.40,-11],   // AN Station 3 (rechts)
  [0,    0.40,-18],   // Ausgang / Exit
];

/* LOOK_PTS — wohin die Kamera schaut [x, y, z]
   y = -0.46 → schaut auf Tischoberfläche (TY)
   y =  4.5  → schaut nach oben (z.B. auf Schild) */

const LOOK_PTS = [
  [0,    4.5, 28.5], // Schild am Gebäude
  [0,    2.5, 28.5], // Tür / Eingang
  [0,    0.4,  20],  // Interior scannen
  [2.5,  0.0,  14],  // Station 1 anvisieren
  [2.5, -0.46, 14],  // Produkt auf Tisch betrachten
  [-2.5,-0.46,  2],  // Station 2
  [2.5, -0.46,-11],  // Station 3
  [0,    0.5, -26],  // Exit
];
```

**Spline-Erzeugung:**
```javascript
// tension 0.45 = weiche S-Kurven (Wert 0.0 = gerade Linien, 1.0 = sehr kurvig)
camSpline  = new THREE.CatmullRomCurve3(CAM_PTS.map(p  => new THREE.Vector3(...p)), false, 'catmullrom', 0.45);
lookSpline = new THREE.CatmullRomCurve3(LOOK_PTS.map(p => new THREE.Vector3(...p)), false, 'catmullrom', 0.45);
```

---

### Szenen-Elemente

#### Innenraum (buildInterior)

```javascript
const RW   = 9;    // Raumbreite in Metern
const CEIL = 2.7;  // Deckenhöhe
const FY   = -1.2; // Boden-Y (Kamera y=0.40 → Augenhöhe = FY + 1.6m)
const LEN  = 54;   // Raumlänge (z: -LEN/2 bis +LEN/2)
```

**Wichtig: LEN so wählen, dass die Kamera am Startpunkt (z=40) mind. 10m freien Außenblick hat:**
- `LEN = 54` → Wand beginnt bei z=27 → 13m frei vor der Wand ✓
- `LEN = 72` → Wand beginnt bei z=36 → nur 4m frei → Kamera sieht gleich Innenraum ✗

#### Produktstationen (addStation)

Eine Station = ein Tisch mit Produkt-Foto flach darauf:

```javascript
addStation({
  x: 2.5,              // Tisch-X-Position (rechte Seite)
  z: 14,               // Tisch-Z-Position
  ry: 0.5,             // Y-Rotation (Winkel zum Gang hin)
  src: 'produkt.jpg',  // Lokale Bild-Datei (relativ zur HTML)
  fb: 'https://...'    // Fallback-URL wenn lokal nicht ladbar
});
```

**Foto liegt FLACH auf dem Tisch:**
```javascript
// PlaneGeometry horizontal
panel.rotation.x = -Math.PI / 2;
panel.position.set(x, TY + 0.012, z); // TY = -0.46 = Tischoberfläche
```

**Amber-Fallback:** Wenn Bild nicht lädt, bleibt eine bernsteinfarbene Platte auf dem Tisch sichtbar.

**Absoluter Pfad für zuverlässiges Laden:**
```javascript
img.src = window.location.origin
        + window.location.pathname.replace(/[^/]*$/, '')
        + cfg.src;
```

#### Prozeduraler Beton / Wand-Textur

Ohne externe Asset-Abhängigkeit — Canvas generiert Textur direkt in JS:

```javascript
function makeConcreteTexture(baseHex, lineHex, w, h, lineSpacing) {
  const cv = document.createElement('canvas');
  cv.width = w || 512; cv.height = h || 512;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = baseHex; ctx.fillRect(0, 0, cv.width, cv.height);
  // Horizontale Schalungslinien
  ctx.strokeStyle = lineHex; ctx.lineWidth = 1;
  for(let y = 0; y < cv.height; y += (lineSpacing || 22)) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cv.width, y); ctx.stroke();
  }
  // Zufällige Körnung
  for(let i = 0; i < 4000; i++) {
    const v = Math.floor(Math.random()*22+10).toString(16).padStart(2,'0');
    ctx.fillStyle = `#${v}${v}${v}`;
    ctx.fillRect(Math.random()*cv.width, Math.random()*cv.height, 1, 1);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// Verwendung:
const tex = makeConcreteTexture('#1c1a26', '#0e0c18', 512, 512, 20);
tex.repeat.set(4, 2); // Wiederholungen je nach Fläche anpassen
const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.78 });
```

---

### Beleuchtungs-Referenz

```javascript
// Ambient — Grundhelligkeit (zu dunkel wenn < 4.0)
scene.add(new THREE.AmbientLight(0x3A2208, 5.5));

// Hemisphere — Himmel / Boden Licht
scene.add(new THREE.HemisphereLight(0x2A1408, 0x140804, 2.0));

// Renderer Exposure — Gesamthelligkeit (2.5–3.5 für dramatisch aber lesbar)
renderer.toneMappingExposure = 3.2;

// Fog — leicht damit Tiefe sichtbar bleibt aber kein Schwarz-Fresser
scene.fog = new THREE.FogExp2(0x050A18, 0.003);

// Pendant SpotLight über jedem Tisch
const spot = new THREE.SpotLight(0xFFAA30, 28, 7, Math.PI/4.5, 0.45, 1.8);
spot.position.set(x, 1.65, z);
spot.target.position.set(x, FY, z);
spot.castShadow = true;

// Korridor-Fülllichter (alle 5–8m)
[22, 18, 10, 6, -2, -6, -15].forEach(z => {
  const fill = new THREE.PointLight(0xF09A30, 5.5, 12, 1.5);
  fill.position.set(0, 2.4, z);
  scene.add(fill);
});
```

---

### Overlay-System (HTML über 3D)

HTML-Overlays mit `.ov` Klasse: `position: fixed`, `opacity: 0` Standard.
Werden per GSAP ein-/ausgeblendet basierend auf `scrollProg`:

```javascript
const OVS = [
  { id: 'ovHero',    r: [0.00, 0.15] }, // Außen / Gebäude
  { id: 'ovStation1',r: [0.18, 0.42] }, // Station 1
  { id: 'ovStation2',r: [0.46, 0.67] }, // Station 2
  { id: 'ovStation3',r: [0.71, 0.90] }, // Station 3
  { id: 'ovExit',    r: [0.91, 1.00] }, // CTA / Abschluss
];
```

Ranges: Lücken zwischen Stationen (z.B. 0.42–0.46) = Übergangsmoment ohne Text.

---

### Mobile Fallback

3D Walkthrough deaktivieren auf Mobilgeräten — Canvas verstecken, statische Alternative zeigen:

```javascript
const IS_MOB = window.innerWidth < 960 || !window.WebGLRenderingContext;
if (!IS_MOB) { /* Three.js initialisieren */ }
```

```css
@media (max-width: 959px) {
  #cvs { display: none; }
  #cv-wrap { height: auto; min-height: 100vh; }
  #mob-hero { display: flex; } /* statische Fallback-Ansicht */
  .ov { display: none; }
}
```

---

### Branchen-Anpassung

| Branche | CAM_PTS y | Station-Inhalt | Tisch-Material | Atmosphäre |
|---------|-----------|----------------|----------------|------------|
| Restaurant | 0.40 | Speisefoto flach | Holz/Anthrazit | Amber warm |
| Hotel | 0.40 | Bettwäsche, Deko | Weiß/Creme | Kühl-weiß |
| Auto-Showroom | 0.80 | Fahrzeug auf Podest | Beton-grau | Spot-weiß |
| Galerie | 0.40 | Kunstwerk an Wand | --- | Museumsweiß |
| Immobilie | 0.40 | Möbel, Details | Parkett | Warm-neutral |

**Für Hotels / Immobilien:** Wände auf helle Farben (`0xF5F0E8`), Decke weiß, natürliches Tageslicht simulieren:
```javascript
scene.add(new THREE.AmbientLight(0xF0F4FF, 4.0)); // kühles weißes Licht
renderer.toneMappingExposure = 2.2;
```

**Für Showrooms:** Schwarzer Boden, weiße Spots auf Produkte, neutrale Wände:
```javascript
// Stage-Spot auf Produkt
const stageSpot = new THREE.SpotLight(0xFFFFFF, 60, 12, Math.PI/6, 0.2);
```

---

### Output-Checkliste 3D Mode

- [ ] `IS_MOB` Guard — kein Three.js auf Mobile
- [ ] LEN korrekt — mind. 10m Außenblick vor Gebäudefassade
- [ ] Alle Stationen mit Amber-Fallback (sofort sichtbar ohne Netz)
- [ ] Logo-Textur über absoluten Pfad geladen
- [ ] `toneMappingExposure` ≥ 2.5 — keine schwarzen Bereiche
- [ ] Fog-Dichte ≤ 0.004 — Geometrie bleibt lesbar
- [ ] LOOK_PTS y auf Produkthöhe beim "Betrachten" (y = TY für flache Tische)
- [ ] HTML Overlays pro Station mit Produktname + Preis + Beschreibung
- [ ] Mobile Fallback mit Bild / statischer Hero-Ansicht

---

## Related Skills

- `/web-factory` — Standard-Websites ohne Cinematic-Layer
- `/redesign-existing-projects` — bestehendes HTML auf dieses Niveau heben
- `/brand-guidelines` — Markenfarben zuerst definieren
- `/design-taste-frontend` — React/Next.js Umsetzung
- `/high-end-visual-design` — Design-Prinzipien vertiefen

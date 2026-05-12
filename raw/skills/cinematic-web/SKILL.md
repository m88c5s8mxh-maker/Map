---
name: cinematic-web
description: Generates complete, production-ready single-file HTML websites with cinematic, award-tier aesthetics. Dark palette, scroll-driven animations, GSAP + Lenis, scramble text reveals, kinetic marquees, canvas particles. For agencies, premium restaurants, studios, and any brand that needs Awwwards-level presence. Trigger with "/cinematic-web [Branche] [Firmenname]" or any premium website request.
argument-hint: "<Branche> | <Firmenname> | <Akzentfarbe>"
---

# Cinematic Web — Premium Single-File HTML Generator

Erzeugt fertige, deployfähige Single-File HTML-Websites auf Awwwards-Niveau. Kein Build-Schritt, keine Abhängigkeiten außer CDN-Links. Dark-first Ästhetik, cinematic Scroll-Erlebnis, echte Animationen — kein Template-Look.

Inspirationsreferenz: [sidewave.it](https://sidewave.it) — Editorial Dark, All-Caps Headlines, Scramble Reveals, Cinematic Flow.

> **Verknüpfter Skill:** Nach Fertigstellung der Website immer `/kling-prompts` aufrufen.
> Liefert optimierte Kling 3.0 Video-Prompts (V1 Exterior · V2 Interior · V3 Produkt) die als Scroll-Background in die Website eingebettet werden. Der Skill lernt aus jedem Projekt und verbessert Prompt-Qualität kontinuierlich.

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

## Schritt 10 — Konzept-Bibliothek Gastronomie-Websites

Für jedes neue Restaurant-Projekt: Konzept aus dieser Bibliothek wählen, dann KI-Prompt-System aus Schritt 12 anwenden.

### Konzept-Auswahlmatrix

| Konzept | Typ | Aufwand | Passt für |
|---------|-----|---------|-----------|
| **3D Walkthrough** | Three.js | Hoch | Casual Premium, Burger, Bowls |
| **Farm to Table** | Scroll-Video | Mittel | Bio, Regional, Saisonal |
| **Chef's POV** | Scroll-Video | Niedrig | Grill, Ramen, Steakhouse |
| **Tageszeiten** | Dynamisch | Hoch | Bistro, Café, All-Day-Dining |
| **Magazin-Menü** | Editorial | Mittel | Fine Dining, Weinrestaurant |
| **Reservierung als Flow** | Funnel | Niedrig | Exklusiv, Tasting Menu |
| **Neighbourhood** | Map-Zoom | Hoch | Stadtteil-Lokal, Verwurzelung |
| **Single Dish** | Hero-Focus | Niedrig | Monoprodukt: Pizza, Sushi, Burger |

---

### Konzept 1 — 3D Walkthrough *(Triple B Referenz)*

**Kern:** Three.js Kamerafahrt durch das reale oder stilisierte Lokal. Tisch für Tisch, Gericht für Gericht.

**Wann wählen:**
- Restaurant hat mehr als 2 Produktkategorien
- Kunde will "digitales Erlebnis" klar kommunizieren
- Budget für Umsetzungszeit vorhanden
- Desktop-Primärzielgruppe

**Signature Moments:**
1. Gebäude-Annäherung von außen — Schild, warmes Licht aus Fenstern
2. Kamera kreuzt Eingangsbereich — Atmosphärenwechsel draußen/drinnen
3. Close-Up Gerichte auf Tischen — jedes Produkt als 3D-Modell

**Tech:** Three.js 0.160.0 UMD + GSAP ScrollTrigger + Lenis → Schritt 9 anwenden

---

### Konzept 2 — Farm to Table

**Kern:** Die Reise des Gerichts. Scrollen = Zeitlinie vom Rohstoff zum fertigen Teller.

**Story-Struktur:**
```
Sektion 1: Feld / Bauer / Ursprung — erdige Farben, Tageslicht
Sektion 2: Transport / Anlieferung — Bewegung, Dynamik
Sektion 3: Küche / Zubereitung — Wärme, Dampf, Feuer
Sektion 4: Teller / Anrichten — Ruhe, Präzision
Sektion 5: Gast-Moment — emotional, menschlich
```

**Ästhetik:** Warmes Cremeweiß `#FDFAF5`, Erdtöne, Handschrift-Akzente, Körnung.

**KI-Video Struktur (3 Clips):**
- Clip 1: Nahaufnahme frischer Zutaten, natürliches Licht
- Clip 2: Küchen-Sequenz, offenes Feuer, Hände beim Anrichten
- Clip 3: Fertiges Gericht serviert, Gast-Reaktion

---

### Konzept 3 — Chef's POV

**Kern:** First-Person-Perspektive. Der Nutzer *ist* der Koch. Website beginnt mit Küche, endet mit Gast.

**Story-Struktur:**
```
Sektion 1: Messer auf Schneidebrett, Hände hacken
Sektion 2: Pfanne auf Herd, Flamme, Dampf
Sektion 3: Anrichten — Pinsel, Sauce, Perfektion
Sektion 4: Gericht erscheint aus Koch-Perspektive
Sektion 5: Übergang zum Tisch — Gast-Seite
```

**Ästhetik:** Dunkel `#0A0906`, Feuerlicht, Stahl-Grau, harte Kontraste.

**KI-Video Struktur (3 Clips):**
- Clip 1: Close-Up Hände & Messer (First-Person), ca. 8 Sek.
- Clip 2: Herd & Feuer von oben/schräg, ca. 8 Sek.
- Clip 3: Fertig angerichteter Teller auf Pass, ca. 8 Sek.

---

### Konzept 4 — Tageszeiten

**Kern:** Website erkennt echte Uhrzeit und zeigt entsprechende Stimmung. Technisch anspruchsvoll, sehr einprägsam.

**Zeit-Mapping:**
```javascript
const HOUR = new Date().getHours();
if (HOUR >= 6  && HOUR < 11) mode = 'morning';   // Cremeweiß, Kaffee
if (HOUR >= 11 && HOUR < 15) mode = 'lunch';      // Goldgelb, Energie
if (HOUR >= 15 && HOUR < 18) mode = 'afternoon';  // Honig-Amber, ruhig
if (HOUR >= 18 && HOUR < 23) mode = 'evening';    // Tiefes Charcoal, Kerzen
if (HOUR >= 23 || HOUR < 6)  mode = 'night';      // Fast-Monochrom, Bar
```

**CSS-Variablen per Mode wechseln:**
```javascript
document.documentElement.setAttribute('data-time', mode);
```

**Ästhetik pro Tageszeit:**
- morning: `--accent: #E8A050` / bg `#FDFAF5`
- lunch: `--accent: #F5C030` / bg `#1A1408`
- evening: `--accent: #F5A523` / bg `#060404`
- night: `--accent: #8A7060` / bg `#030202`

---

### Konzept 5 — Magazin-Menü

**Kern:** Speisekarte als Editorial-Magazin. Keine Listenansicht — jedes Gericht ist eine halbe Seite.

**Layout-Regeln:**
- Jedes Gericht: Großes Foto links (60%), Text rechts (40%) — alternierend
- Preise: GROSS und selbstbewusst gesetzt, nicht klein versteckt
- Gerichte-Kategorie-Wechsel: Horizontales Scrollen als Intermezzo
- Typografie: Serif-Display für Gerichtnamen, Mono für Preise

**Ästhetik:** Warmweiß `#FDFBF7`, minimalste Farbe, Schwarz/Weiß-Foto-Stil.

---

### Konzept 6 — Reservierung als Erlebnis

**Kern:** Gesamte Website ist ein einziger geführter Buchungs-Flow. Ein Schritt pro Vollbild.

**Flow-Schritte:**
```
Schritt 1: Willkommens-Bild + "Tisch reservieren" CTA
Schritt 2: Datum wählen (großes Calendar UI)
Schritt 3: Uhrzeit wählen (Pills)
Schritt 4: Personenanzahl (Slider)
Schritt 5: Name + Telefon
Schritt 6: Bestätigung + "Wir freuen uns auf Sie"
```

**Pro Schritt:** Vollbild-Hintergrundfoto wechselt, sanfter Blend-Übergang.

**Ästhetik:** Dunkel, luxuriös — ein Foto, ein Feld, nichts mehr.

---

### Konzept 7 — Neighbourhood

**Kern:** Website beginnt mit Stadtansicht (stilisierte Karte), zoomt langsam auf das Lokal herein.

**Animation:**
```
Zoom 1: Stadtpanorama / Satellitenansicht stilisiert
Zoom 2: Straßenzug wird sichtbar
Zoom 3: Gebäudefassade tritt hervor
Zoom 4: Eingang — Übergang zu Lokal-Content
```

**Tech:** CSS Transform Scale + clip-path Reveal ODER Three.js OrthographicCamera über SVG-Karte.

**Ästhetik:** Kartenstil dunkel `#0F1117`, leuchtende Straßenlinien in Akzentfarbe.

---

### Konzept 8 — Single Dish

**Kern:** Keine Ablenkung. Das Hero-Bild ist das Gericht. Der Rest der Seite öffnet sich darunter.

**Hero-Struktur:**
```
Vollbild-Gericht-Foto, centred
Kleiner Text: "TRIPLE B" + "HIRSCHAU"
Scroll-Pfeil
→ Scrollen → Foto zoomt rein → löst sich auf → Content erscheint
```

**Ästhetik:** Schwarzer Hintergrund, Gericht als einziges Licht auf der Seite.

**Wirkung:** Mutig, einprägsam, funktioniert nur wenn das Gericht wirklich fotogen ist.

---

## Schritt 11 — KI-Video Scroll Engine (Alternative zu Three.js)

Wenn ein Client **kein** Three.js-Budget hat oder maximalen Photorealismus will: Video statt 3D-Geometrie.

### Entscheidungsbaum: Three.js vs. KI-Video

```
Hat das Projekt echte Fotos oder 3D-Scans?
  → Ja: Three.js mit echten Texturen (Schritt 9)
  → Nein:
      Budget für KI-Video-Generierung vorhanden?
        → Ja: KI-Video Scroll Engine (Schritt 11)
        → Nein: Schritt 9 mit prozeduralen Texturen
```

### Technische Implementierung

```html
<!-- Video als Scene-Ersatz -->
<video id="sceneVideo" muted playsinline preload="auto"
       style="position:fixed;inset:0;width:100%;height:100%;
              object-fit:cover;z-index:0;">
  <source src="restaurant-scene.mp4" type="video/mp4">
</video>
```

```javascript
const video = document.getElementById('sceneVideo');

// Video vorab laden
video.load();

// ScrollTrigger steuert currentTime
ScrollTrigger.create({
  trigger: '#cv-wrap',
  start: 'top top',
  end: 'bottom bottom',
  scrub: 1.2,
  onUpdate(self) {
    if (video.readyState >= 2) {
      video.currentTime = self.progress * video.duration;
    }
    scrollProg = self.progress;
    updateOverlays(self.progress);
  }
});

// Autoplay-Fix: kurz abspielen dann pausieren
video.play().then(() => video.pause()).catch(() => {});
```

### Performance-Regeln für Scroll-Video

```
Maximale Dateigröße: 15 MB (Web-Delivery)
Codec: H.264 / MP4 (beste Browser-Kompatibilität)
Auflösung: 1920×1080 reicht (kein 4K für Web)
FPS: 30fps optimal für scrub-Feeling
Länge: 24–32 Sekunden (genug Detail, klein genug)
```

**Kompression-Workflow:**
```bash
# FFmpeg — 15MB Zielgröße, H.264, Web-optimiert
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow \
       -vf scale=1920:1080 -movflags +faststart \
       -an output-web.mp4
```

### Mobile Fallback

```javascript
const IS_MOB = window.innerWidth < 768;

if (IS_MOB) {
  // Kein Video-Scrub auf Mobile (Performance)
  document.getElementById('sceneVideo').style.display = 'none';
  document.getElementById('mob-hero').style.display = 'flex';
} else {
  initScrollVideo();
}
```

---

## Schritt 12 — KI-Prompt Generator System

Universelles Template-System für AI-Video-Generierung (Kling 3.0, Sora, Runway Gen-4).

### Pflicht-Briefing vor Prompt-Erstellung

Folgende Felder aus dem Client-Brief extrahieren:

```
[LOKAL_NAME]       → z.B. "Triple B"
[LOKAL_ORT]        → z.B. "Hirschau"
[INTERIOR_STIL]    → z.B. "warme Pendellampen, Holzstühle, Navy-Polster, Charcoal-Tische"
[EXTERIOR_STIL]    → z.B. "dunkle Fassade, große Fenster, warmes Licht sichtbar"
[LICHT_STIMMUNG]   → z.B. "Abend, Bernstein-Amber, tief und warm"
[GERICHT_1]        → Name + ALLE Zutaten aus Speisekarte (1:1)
[GERICHT_2]        → Name + ALLE Zutaten aus Speisekarte (1:1)
[GERICHT_3]        → Name + ALLE Zutaten aus Speisekarte (1:1)
[KAMERA_STIL]      → z.B. "langsamer Dolly, kein Shake, cinematisch"
```

**Kritische Regel: Gerichte IMMER 1:1 aus der echten Speisekarte — nie erfunden.**

---

### Prompt-Template Video 1: Exterior → Entrance

```
Cinematic slow [KAMERA_STIL] camera movement, starting at street level
approximately 15 meters in front of [LOKAL_NAME] restaurant facade
at dusk / golden hour. 

Exterior: [EXTERIOR_STIL]. Restaurant sign reads "[LOKAL_NAME]" clearly.
Warm interior light spills through large windows.

Camera glides continuously forward toward entrance — smooth, no cuts,
no shake. As camera approaches, interior amber light grows through windows.
[Optionale Umgebungsdetails: Bürgersteig, Straße, Nachbarschaft]

Final 2 seconds: camera crosses entrance threshold, interior
begins to reveal — [erste Innenraum-Beschreibung: Beleuchtung, Möbel, Tiefe].

Mood: [LICHT_STIMMUNG], premium casual dining, cinematic depth.
Color grade: deep shadows exterior, warm amber interior, 
slight contrast between outside blue-hour sky and inside warmth.
Aspect ratio: 16:9, photorealistic, no text overlays, no people.
```

**Negative Prompt:**
```
cartoon, animation, fast movement, camera shake, crowds, people walking,
lens flare, CGI obvious, bright daylight, fluorescent overhead lights,
fast cuts, fish-eye distortion
```

---

### Prompt-Template Video 2: Interior Walkthrough

```
Cinematic floating camera movement through the interior of [LOKAL_NAME]
restaurant at night, no people present.

Camera starts at entrance end, glides forward in gentle S-curve
path between dining tables.

Interior details: [INTERIOR_STIL — vollständige Beschreibung:
Tischfarbe, Stuhlmaterial, Polsterfarbe, Bodenbelag, Wandmaterial,
Deckenhöhe, Pendellampen-Position, Lichtfarbe, Schattenmuster].

Camera height: approx. 120cm (eye level seated person). Camera tilts
very slightly downward toward table surfaces while passing each table.

Lighting: exclusively from [Lichtquelle]. Deep shadows between tables,
circular pools of [Lichtfarbe] on each table surface. Restaurant depth
disappears into warm bokeh darkness.

Duration: camera passes [ANZAHL] table positions, approximately 3 seconds
per table before gliding forward. Smooth, continuous, no jerks.

Mood: [LICHT_STIMMUNG], intimate, quiet, the restaurant just before
guests arrive. Film-like grain, warm [Farbgradierung]-grade.
Aspect ratio: 16:9, photorealistic, no people, no text.
```

**Negative Prompt:**
```
people, staff, customers, bright overhead fluorescent, fast movement,
drone footage feeling, wide angle distortion, CGI, fast cuts
```

---

### Prompt-Template Video 3: Food Beauty Shots

```
Cinematic food photography video sequence. Three dishes presented
sequentially on [Tisch-Material] restaurant tabletop.
Lighting: warm [Lichtfarbe] pendant lamp from above as sole light source.

SEGMENT 1 — [GERICHT_1 NAME] — First [X] seconds:
[Kamerabewegung: z.B. "Slow orbital camera movement, camera rotates 
30 degrees around the dish"]. Camera angle: [X] degrees above horizontal,
very shallow depth of field, restaurant interior bokeh background.

Dish on [Teller-Beschreibung]: [ALLE ZUTATEN 1:1 aus Speisekarte, 
visuelle Beschreibung jeder Komponente — Farbe, Textur, Anordnung,
Glanz, Schichtung]. [Charakteristisches Detail: z.B. "melted cheese draping",
"crispy golden crust", "glossy sauce spiral"].

SEGMENT 2 — [GERICHT_2 NAME] — Middle [X] seconds:
[Kamerabewegung]. [ALLE ZUTATEN 2 mit visueller Beschreibung].

SEGMENT 3 — [GERICHT_3 NAME] — Final [X] seconds:
[Kamerabewegung]. [ALLE ZUTATEN 3 mit visueller Beschreibung].

Throughout: top-down ambient [Lichtfarbe] from pendant creating dramatic
highlights on food surfaces and deep side shadows. Tabletop: [Material].
Ultra-warm color grade, glossy highlights on food, cinematic depth.
Professional food stylist quality, no people, no text, no utensils moving.
```

**Negative Prompt:**
```
cartoon, plastic-looking food, cold blue lighting, bright white studio,
people's hands, fast cuts, shaky camera, blurry food
(only background soft), CGI obvious, generic plating
```

---

### Kling 3.0 spezifische Settings

| Parameter | Empfehlung |
|-----------|-----------|
| Stil | Cinematic |
| Dauer | 10 Sekunden (max) |
| Kamera | Video 1: Push In / Video 2: Dolly Forward / Video 3: Orbit |
| Qualität | Professional / High |
| Seed | Notieren — gleicher Seed für Konsistenz zwischen Clips |
| Negative Prompt | Immer ausfüllen (erhöht Qualität stark) |

**Tipp Konsistenz:** Gleichen Stil-Referenz-Screenshot als "Reference Image" in Kling für alle 3 Clips hochladen — sichert einheitliche Lichtstimmung.

---

### Referenz-Umsetzung: Triple B, Hirschau

Vollständig ausgefülltes Beispiel für Agentur-Dokumentation. Alle 3 Kling-Prompts inklusive korrekter Speisekarten-Gerichte.

**Gewählte Repräsentations-Gerichte:**
- Burger → **Triple Stack** (Signature): Drei Rinderpatties, dreifach Cheddar, Triple B Soße, Gurke, Zwiebeln
- Bowl → **Caesar Bowl**: Römersalat, Parmesan, Caesar-Dressing, Croutons, Kirschtomaten
- Basics → **Käsespätzle**: Hausgemachte Spätzle, geschmolzener Emmentaler, Röstzwiebeln, Schnittlauch

**Begründung Auswahl:**
- Triple Stack: Signature-Item, visuell beeindruckendste Komposition (drei Patties, dreifach Käse)
- Caesar Bowl: klare Farben, hohe Lesbarkeit im Video, breite Zielgruppe
- Käsespätzle: reiches Comfort-Food, goldene Farbtöne, Käse-Glanz + Zwiebel-Textur visuell sehr stark

#### Triple B — Video 1 Prompt (Exterior → Entrance)

```
Cinematic slow push-in camera movement, starting at street level
approximately 15 meters in front of Triple B restaurant facade at dusk.

Exterior: dark charcoal-grey painted walls, large dark-framed windows
glowing with warm amber interior light, clean modern sign reading
"Triple B" in bold white letters, minimal industrial styling.

Camera glides forward slowly and continuously toward the entrance door —
smooth, steady, no shake, no cuts. As camera approaches, warm amber
pendant lamp light grows more visible through windows. Street is quiet,
slightly wet pavement reflecting warm glow. Evening blue-hour sky
contrasting with warm interior.

Final 2 seconds: camera crosses entrance threshold, interior reveals —
rows of dark wooden tables, warm amber pendant lights hanging low,
depth of restaurant corridor opening.

Mood: premium casual dining, warm and inviting, cinematic depth,
opening of a high-end restaurant documentary.
Color grade: deep shadows, warm amber highlights, slight blue exterior
sky contrasting with interior warmth.
Aspect ratio: 16:9, photorealistic, no text overlays, no people.
```

**Negative Prompt:**
```
cartoon, animation, bright daylight, fluorescent lighting,
fast movement, camera shake, people walking, crowds, lens flare,
artificial looking, CGI obvious
```

**Kling Settings:** Stil: Cinematic | Kamera: Push In | Dauer: 10 Sek.

---

#### Triple B — Video 2 Prompt (Interior Walkthrough)

```
Cinematic floating camera movement through the interior of Triple B
restaurant at night, no people present. Camera starts at entrance end
and slowly glides forward in gentle S-curve path between dining tables.

Interior: dark charcoal-grey rectangular tabletops approximately
120×70cm, light natural beech wood chairs with deep navy blue cushioned
seats and backrests, warm amber Edison-style pendant lamps hanging at
150cm height casting perfect circular pools of amber light on each table,
dark grey polished concrete or wood floor reflecting pendant light pools,
exposed brick or dark plaster walls with subtle texture.

Camera height stays at approximately 120cm — eye level of seated person.
Tilts very slightly downward toward table surfaces while passing each table.

Lighting: exclusively from warm amber pendant lamps — deep shadows
between tables, golden amber circles of light on each table surface.
Restaurant corridor depth disappears into warm bokeh darkness.

Camera passes three table positions, approximately 3 seconds per table,
then glides forward. Smooth, continuous, no jerks.

Mood: intimate, quiet, the restaurant just before guests arrive,
premium atmosphere. Color grade: ultra-warm amber highlights,
deep charcoal blacks in shadows, slight golden vignette, film grain.
Aspect ratio: 16:9, photorealistic, no text, no people.
```

**Negative Prompt:**
```
people, staff, customers, bright overhead fluorescent, fast movement,
drone footage, fish-eye lens, wide angle distortion, cartoon, CGI,
fast cuts, modern white minimalist interior
```

**Kling Settings:** Stil: Cinematic | Kamera: Dolly Forward + leichter Pan | Dauer: 10 Sek.

---

#### Triple B — Video 3 Prompt (Food Beauty Shots)

```
Cinematic food photography video sequence. Three Triple B dishes
presented sequentially on dark charcoal matte restaurant tabletop.
Lighting: single warm amber pendant lamp from above as sole light source —
dramatic top-down illumination, deep side shadows, glossy highlights.

SEGMENT 1 — Triple Stack (Signature Burger) — First 3-4 seconds:
Slow orbital camera movement, camera rotates 30 degrees around the dish.
Camera angle: 35 degrees above horizontal, very shallow depth of field,
restaurant interior amber bokeh background.

White ceramic plate. Three thin wide smash-pressed beef patties stacked,
each with dark charred crispy outer edges showing Maillard reaction.
Three individual slices of fully melted American cheddar cheese draped
over each patty layer, cheese glossy and pulling. Triple B sauce (creamy
amber) visible at edges of each layer. Thin pickle slices peeking out
between layers. Finely sliced white onions. Toasted golden sesame seed
brioche bun on top — bottom bun visible below, lightly toasted.
The three patty stack is tall and impressive. Cheese reflects amber light.

SEGMENT 2 — Caesar Bowl — Middle 3-4 seconds:
Smooth push-in from 40 degrees above, bowl fills the frame.

Large white ceramic bowl. Fresh dark and light green Roman lettuce leaves
(Römersalat) filling the bowl, slightly glistening. Freshly grated
Parmesan cheese in thick shavings scattered across the top, catching
warm light. Caesar dressing (cream-white, slightly glossy) drizzled
in an arc across the lettuce. Whole and halved bright red cherry
tomatoes (Kirschtomaten) with stems tucked at edges. Golden croutons
(Croutons) visible between lettuce leaves, slightly darker from toasting.
Bowl feels fresh, generous, colorful against dark tabletop.

SEGMENT 3 — Käsespätzle — Final 3-4 seconds:
Very slow pull-back from close-up, revealing full presentation.

White ceramic deep plate. Generous mound of handmade golden-yellow
Swabian Spätzle (Käsespätzle) — small irregular egg noodle shapes,
slightly glistening. Fully melted Emmental cheese (Emmentaler) blanketing
the entire top of the mound in thick glossy golden-yellow drapes,
catching amber pendant light. Dark caramelized crispy fried onions
(Röstzwiebeln) scattered over the melted cheese — deep amber-brown,
visibly crispy rings. Fresh green chives (Schnittlauch) thinly sliced
across the top, bright green contrasting the golden yellow.
The whole dish radiates warmth, richness, alpine comfort. Cheese slightly
pulls as if freshly served. Steam softly rising at edges.

Throughout all segments: warm amber single pendant lamp creating
dramatic top-down lighting. Dark charcoal matte tabletop. Ultra-warm
color grade, glossy food highlights, professional food stylist quality,
cinematic depth, no people, no text, no moving hands.
```

**Negative Prompt:**
```
cartoon, plastic-looking food, cold blue lighting, bright white studio
background, people's hands, utensils moving, fast cuts, shaky camera,
blurry food in foreground, CGI obvious, generic plating, stock photo look
```

**Kling Settings:** Stil: Cinematic | Kamera: Orbit + Push In | Dauer: 10 Sek.

---

## Schritt 13 — Automatische Konzept-Vorschläge nach jeder Lieferung

**Diese Sektion ist PFLICHT — nach jeder Skill-Ausgabe immer ausführen.**

Nach dem Ausgeben der fertigen Website oder Prompts: Automatisch den folgenden Block ausgeben, angepasst auf die Branche des aktuellen Projekts. Ziel: Dem Kunden zeigen, was für andere Unternehmenstypen möglich ist — und neue Aufträge anstoßen.

---

### Ausgabe-Template (immer am Ende jeder Lieferung)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 WAS WÄRE NOCH MÖGLICH?
 Cinematic Web — Konzepte für andere Branchen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Basierend auf dem [AKTUELLES_PROJEKT]-Projekt hier 5 Konzepte
die wir genauso für andere Kunden umsetzen können:

[BRANCHE_TABELLE — aus Bibliothek unten wählen, 5 Einträge, 
 andere Branchen als das aktuelle Projekt priorisieren]

→ Für welche dieser Branchen haben Sie gerade einen Kunden?
  Ich erstelle das Konzept und die KI-Prompts sofort.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Konzept-Bibliothek pro Branche (Auswahlpool für den Block)

#### GASTRONOMIE

| Untertyp | Konzept | Signature Moment | KI-Video / Three.js |
|----------|---------|-----------------|---------------------|
| **Restaurant (Casual)** | 3D Walkthrough | Kamera fliegt Tisch für Tisch, Gerichte erscheinen | Three.js |
| **Restaurant (Fine Dining)** | Reservierung als Erlebnis | Jeder Buchungsschritt = ein Vollbild-Bild | Scroll-Video |
| **Burger / Fast Casual** | Single Dish Hero | Burger zoomt auf, Seite öffnet sich darunter | Scroll-Video |
| **Bio / Regional** | Farm to Table | Zutatenreise vom Feld bis zum Teller | Scroll-Video |
| **Steakhouse / Grill** | Chef's POV | First-Person: Messer, Feuer, fertige Platte | Scroll-Video |

#### BAR & NACHTLEBEN

| Untertyp | Konzept | Signature Moment | KI-Video / Three.js |
|----------|---------|-----------------|---------------------|
| **Cocktailbar** | Cocktail-Handwerk | Makro-Close-ups: Eis, Glas, Farben, Shaker | Scroll-Video |
| **Weinbar** | Weinreise | Kamera fährt durch Weinregion → landet in Bar | Scroll-Video |
| **Bierlokal / Brauerei** | Brauerei-Walkthrough | Kamera durch Kessel, Lager, Ausschank | Three.js |
| **Diskothek / Club** | Energy-Kaskade | Strobo-Effekte, Crowd-Silhouetten, Bass-Vibrationen | Scroll-Video |
| **Rooftop Bar** | Panorama-Reveal | Kamera steigt von unten auf, Stadt-Panorama öffnet sich | Scroll-Video |

#### AGENTUR & DIENSTLEISTUNG

| Untertyp | Konzept | Signature Moment | KI-Video / Three.js |
|----------|---------|-----------------|---------------------|
| **Digitalagentur** | Code wird Bild | Scramble-Text morpht zu fertigem Design | GSAP/CSS |
| **Kreativagentur** | Work-Cinematic | Schwarzweiß-Atelier-Bilder, Akzentfarbe taucht auf | Scroll-Video |
| **Unternehmensberatung** | Numbers-First | Zahlen explodieren, Statistiken erzählen Story | Stats-Counter |
| **PR / Kommunikation** | Editorial Magazine | Artikel-Layouts, Zitate, Pressebilder | Editorial-Scroll |
| **Fotograf / Videograf** | Galerie-Walkthrough | Three.js Galerie-Korridor, Bilder an Wänden | Three.js |

#### HANDEL & PRODUKT

| Untertyp | Konzept | Signature Moment | KI-Video / Three.js |
|----------|---------|-----------------|---------------------|
| **Premium-Shop** | Produkt-Orbit | Three.js Kamera umkreist Produkt auf Podest | Three.js |
| **Mode / Fashion** | Look-Sequenz | Runway-Ästhetik, Kollektion als Editorial | Scroll-Video |
| **Auto-Händler** | Showroom-Drive | Kamera fährt um Fahrzeug herum, Details | Three.js |
| **Schmuck / Luxus** | Makro-Beauty | Extreme Nahaufnahmen: Struktur, Licht, Material | Scroll-Video |
| **Kosmetik** | Ingredient-Story | Farm to Table-Stil für Inhaltsstoffe | Scroll-Video |

#### IMMOBILIEN & LOCATION

| Untertyp | Konzept | Signature Moment | KI-Video / Three.js |
|----------|---------|-----------------|---------------------|
| **Hotel** | Room-Flythrough | Three.js durch Lobby, Suite, Pool, Restaurant | Three.js |
| **Boutique-Hotel** | Tageszeiten-Wechsel | Website ändert sich mit Sonnenstand | Dynamisch |
| **Event-Location** | Vor & Nach | Split-Screen: leerer Raum → volle Feier | Scroll-Video |
| **Immobilienmakler** | Neighbourhood-Zoom | Stadtansicht zoomt auf Objekt | Neighbourhood |
| **Ferienwohnung** | Erlebnisreise | Location-Story: Umgebung → Wohnung → Detail | Scroll-Video |

#### LIFESTYLE & WELLNESS

| Untertyp | Konzept | Signature Moment | KI-Video / Three.js |
|----------|---------|-----------------|---------------------|
| **Fitnessstudio** | Energy-Walkthrough | Kamera durch Geräte, Licht, Bewegung | Three.js |
| **Yoga / Pilates** | Stille-Ästhetik | Extremes Weißraum, Atemrhythmus als Scroll | Minimal-CSS |
| **Spa / Wellness** | Sensorisch | Wasser, Dampf, Texturen — keine Menschen | Scroll-Video |
| **Friseur / Beauty** | Transformation | Vorher/Nachher als dramatisches Reveal | Scroll-Video |
| **Tattoo Studio** | Craft-Korridor | Three.js Walkthrough durch Studio, Artworks an Wänden | Three.js |

---

### Branchenspezifische Anpassung des Ton im Vorschlagsblock

Wenn das aktuelle Projekt ein **Restaurant** war → Vorschläge für Bar, Club, Agentur, Hotel betonen.
Wenn das aktuelle Projekt eine **Agentur** war → Vorschläge für Produkt, Immobilien, Lifestyle.
Wenn das aktuelle Projekt ein **Shop** war → Vorschläge für Gastronomie, Hotel, Agentur.

→ Nie dasselbe Branchen-Segment zweimal im Vorschlagsblock — immer Diversität zeigen.

---

## Schritt 14 — Standort-Anreicherung für KI-Prompts

Wenn der Nutzer den genauen Standort beschreibt (Adresse, Stadt, Viertel, Architektur), **müssen** die KI-Prompts diesen Kontext exakt widerspiegeln. Generic "restaurant facade" reicht nicht — der Prompt soll die echte Umgebung beschreiben.

### Zusatzfelder im Brief

```
[ADRESSE_VOLL]     → Straße + Hausnummer + PLZ + Ort
[STADTTEIL_VIBE]   → z.B. "ruhige Wohnstraße", "Fußgängerzone", "Industriequartier"
[ARCHITEKTUR_STIL] → z.B. "Altbau-Fassade", "Neubau Glas-Stahl", "bayerischer Gasthof-Stil",
                         "Backsteinbau", "verputzte Fassade 1970er", "Fachwerkhaus"
[UMGEBUNG]         → Was steht links/rechts/gegenüber? Bäume? Platz? Parkplatz?
[REGION]           → Bayern / Sachsen / NRW / Österreich / Schweiz / etc.
[BESONDERHEITEN]   → Besondere Merkmale: Markise, Vorgarten, Terrasse, Schaufenster, Brunnen
```

---

### Region → Visuelle Sprache (Übersetzungstabelle)

| Region | Architektur-Typ | Licht-Charakter | Prompt-Sprache |
|--------|----------------|-----------------|----------------|
| **Bayern / Oberpfalz** | Verputzte Fassaden, Holzdetails, flache Dächer | Warm-golden, klares Licht | "rendered facade typical of Bavarian small town, warm southern German evening light, quiet residential street with mature linden trees" |
| **München Innenstadt** | Urban, Gründerzeit-Altbau | Warmes Stadtlicht, Fußgängerstrom | "Gründerzeit building facade, urban Munich setting, cobblestone side street, city ambient glow" |
| **Hamburg / Nordsee** | Backstein, Speichergebäude | Diffuses nordisches Licht, oft bewölkt | "north German red brick building, maritime influence, overcast northern light, cobblestone Hinterhof" |
| **Berlin** | Mix: Plattenbau, Altbau, Neubau | Urbanes Neonlicht, Multikulti | "Berlin-style mixed architecture, urban street art nearby, neon-lit urban night scene" |
| **Wien** | Historistisch, Jugendstil | Weich, warm, imperial | "Viennese Historicism facade, ornate stucco details, warm imperial evening light, quiet Gasse" |
| **Zürich / Schweiz** | Sauber, präzise, Naturstein | Klar, hochwertig | "Swiss precision architecture, natural stone facade, clean mountain-country street, pristine evening light" |
| **Ländlich / Dorf** | Freistehend, Parkplatz, Grün | Natur, Ruhe, Sterne | "freestanding rural building surrounded by trees, village setting, quiet country road, starlit sky visible" |
| **Industriequartier** | Beton, Metall, Lager-Umgebung | Industrielles Gelb, Spot-Licht | "former industrial building converted, raw concrete and steel, industrial district setting, warehouse neighborhood" |

---

### Standort-Anreicherungs-Regel

**Vor jedem Video-1-Prompt (Exterior):**

1. `[ADRESSE_VOLL]` → Ort in Prompt einarbeiten: *"in the small Bavarian town of Hirschau"*
2. `[ARCHITEKTUR_STIL]` → Gebäude beschreiben: *"rendered facade typical of southern German small-town commercial building"*
3. `[UMGEBUNG]` → Straßenkontext: *"quiet residential side street, few parked cars, linden trees visible"*
4. `[BESONDERHEITEN]` → spezifische Details: *"small outdoor terrace with two tables visible to the left of the entrance"*
5. `[REGION]` → Lichtstimmung aus Tabelle oben wählen

**Für Video-2 (Interior):** Standort beeinflusst nur Außengeräusche und Fensterblick — optional einfließen lassen.

**Für Video-3 (Food):** Standort beeinflusst Tellerform, regionale Zutaten-Herkunft — in Mood-Beschreibung erwähnen.

---

### Triple B Standort-Anreicherung (Referenz)

**Brief-Daten:**
```
ADRESSE_VOLL:     [Hauptstraße], 92242 Hirschau
STADTTEIL_VIBE:   ruhige Kleinstadt, Innenstadt-nah
ARCHITEKTUR_STIL: verputzte Fassade, typisch bayerischer Gewerbe-Bau
UMGEBUNG:         Geschäftsstraße, wenig Fußgänger abends, ländliche Ruhe
REGION:           Bayern / Oberpfalz
BESONDERHEITEN:   Schild "Triple B", große Schaufensterscheiben
```

**Angereicherte Exterior-Beschreibung für Video 1:**
```
...in the quiet small Bavarian town of Hirschau, Oberpfalz region.
Exterior: rendered facade typical of southern German small-town
commercial building, large display windows glowing with warm amber
interior light, clean sign reading "Triple B" prominently displayed.
Quiet evening street with few passing cars, the calm of a small
Bavarian Innenstadt at dusk. Warm southern German evening light
quality — golden, clear, low sun angle casting long shadows.
Street is almost still — the calm before the dinner rush...
```

---

### Prompt-Qualitäts-Skala

Nutze diese Skala um zu prüfen, ob ein Prompt gut genug ist:

| Level | Beschreibung | Beispiel |
|-------|-------------|---------|
| ❌ **Generic** | Könnte jedes Restaurant sein | "a restaurant at night" |
| ⚠️ **Basic** | Grundlegende Details | "a burger restaurant with warm lighting" |
| ✅ **Good** | Stil + Licht + Kamera | "dark charcoal facade, amber pendant lights, push-in camera" |
| ⭐ **Premium** | Alles obige + Standort + Zutaten 1:1 + Stimmung | Triple B Prompts oben |
| 🏆 **Agency-Tier** | Premium + Referenzstil + Seed-Konsistenz + Negative Prompt | Vollständige Kling-Outputs mit Settings |

**Ziel:** Immer ⭐ oder 🏆. Nie unter ✅ liefern.

---

## Schritt 11 — JPEG Frame Player Mode (Video-Alternative)

Wenn echte MP4-Videos vorliegen (aus Kling oder anderen Quellen), ersetze Three.js durch einen **JPEG-Frame-Canvas-Player**. Dieser Modus ist stabiler, leichter zu debuggen, und vermeidet WebGL-Probleme.

### Wann JPEG Frame Player statt Three.js

| Situation | Empfehlung |
|-----------|-----------|
| Fertige Videos aus Kling 3.0 vorhanden | **JPEG Frame Player** |
| Kein Video vorhanden, generierter Raum reicht | Three.js Walkthrough |
| Mobile-Performance kritisch | Frame Player (einfacher) |
| Budget für Kling-Videos vorhanden | Frame Player |

### Schritt 0 — Frames extrahieren (Python)

```python
import cv2, os

JOBS = [
    ("V1.mp4", "frames/v1", 1920, 1080),
    ("V2.mp4", "frames/v2", 1920, 1080),
    ("V3.mp4", "frames/v3", 1920, 1080),
]
TARGET_FPS = 30
QUALITY    = 92

for fname, out_rel, tw, th in JOBS:
    cap     = cv2.VideoCapture(fname)
    src_fps = cap.get(cv2.CAP_PROP_FPS)
    total   = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    step    = src_fps / TARGET_FPS
    out_idx = 1; src_idx = 0.0
    os.makedirs(out_rel, exist_ok=True)
    while True:
        cap.set(cv2.CAP_PROP_POS_FRAMES, int(src_idx))
        ret, frame = cap.read()
        if not ret: break
        cv2.imwrite(f"{out_rel}/{out_idx:04d}.jpg",
                    cv2.resize(frame, (tw, th), cv2.INTER_LANCZOS4),
                    [cv2.IMWRITE_JPEG_QUALITY, QUALITY])
        out_idx += 1; src_idx += step
        if src_idx >= total: break
    cap.release()
```

### Canvas-Architektur

```html
<!-- 700vh Scroll-Wrapper — gleich wie Three.js Modus -->
<div id="cv-wrap" style="height:700vh;position:relative">
  <canvas id="cvs" style="position:fixed;inset:0;width:100%;height:100%;z-index:0"></canvas>
  <!-- HTML Overlays identisch zu Three.js Modus -->
</div>
```

### KRITISCH: USE_BMP = false — NIEMALS true setzen

```javascript
/* ⚠️ NIEMALS auf true setzen bei vollständigem Preload:
   906 Frames × 8 MB GPU-Bitmap = 7,5 GB VRAM → Browser-Tab-Crash
   USE_BMP = typeof createImageBitmap !== 'undefined';  // VERBOTEN
*/
const USE_BMP = false;
```

**Erlaubt:** Für lookahead-Frames (nur next frame, nicht alle):
```javascript
// Spekulativ nur das NÄCHSTE Frame dekodieren — nie alle
if (!USE_BMP) {
  frames[si]?.[nfi]?.decode?.()?.catch?.(() => {});
}
```

### Scenes-Konfiguration

```javascript
const SCENES = [
  { dir: 'frames/v1', count: 302 },  // V1 Exterior
  { dir: 'frames/v2', count: 302 },  // V2 Interior
  { dir: 'frames/v3', count: 302 },  // V3 Food / Produkt
];
// SCENE_STARTS[i]: Frames überspringen wenn Video mit leerem Bild beginnt
const SCENE_STARTS = [15, 0, 0]; // V1 überspringt 15 Frames (Schild wird sichtbar)
```

### ScrollTrigger — Progress immer clampen

```javascript
ScrollTrigger.create({
  trigger: '#cv-wrap',
  start: 'top top',
  end: 'bottom bottom',
  onUpdate(self) {
    /* ⚠️ PFLICHT: Lenis kann negative Progress-Werte liefern (Bounce) */
    const p  = Math.max(0, Math.min(1, self.progress));
    const sc = SCENES.length;
    const si = Math.max(0, Math.min(sc - 1, Math.floor(p * sc)));
    const lp = Math.max(0, (p * sc) - si);
    const fi = Math.max(0, Math.floor(lp * SCENES[si].count));
    drawFrame(si, fi);
    updateOverlays(p);
  }
});
```

**Fehler ohne Clamping:** `SCENES[-1].count` → `TypeError: Cannot read properties of undefined` → Tab-Crash beim Zurückscrollen.

### Frame-zu-Scroll-Progress Umrechnung

```javascript
/* Gegeben: sceneIndex (0–2), frameIndex (0–count-1), count=302
   Scroll-Progress für dieses Frame: */
function frameToProgress(sceneIndex, fi, count) {
  return (fi / count + sceneIndex) / SCENES.length;
}

/* Beispiel Triple B V3 (sceneIndex=2, count=302):
   Frame 125 → Bowl erscheint  → p ≈ 0.803
   Frame 130 → Burger          → p ≈ 0.809
   Frame 140 → Käsespätzle     → p ≈ 0.821
*/
```

### Frame-genaues Overlay-System

Wenn ein Element im Video erscheint, soll der Text exakt dann erscheinen:

```javascript
/* Statt OVS-Ranges: per-Element Schwellwerte */
const TRIO_THRESH = [0.803, 0.809, 0.821]; // Bowl, Burger, Käsespätzle
const TRIO_HIDE   = 0.990;
const TRIO_STATE  = [false, false, false];
let   TRIO_FOOD_VISIBLE = false;

function updateFoodTrio(p) {
  const foodEl = document.getElementById('ovFood');
  if (!foodEl) return;
  const anyVis = p >= TRIO_THRESH[0] && p <= TRIO_HIDE;

  if (TRIO_FOOD_VISIBLE !== anyVis) {
    TRIO_FOOD_VISIBLE = anyVis;
    if (anyVis) { gsap.set(foodEl, {opacity:1}); foodEl.classList.add('act'); }
    else {
      gsap.to(foodEl, {opacity:0, duration:0.22, ease:'power1.in',
        onComplete() { foodEl.classList.remove('act'); }});
      TRIO_STATE.fill(false);
    }
  }
  if (!anyVis) return;

  foodEl.querySelectorAll('.ov-trio-col').forEach((col, i) => {
    const shouldShow = p >= TRIO_THRESH[i];
    if (TRIO_STATE[i] === shouldShow) return;
    TRIO_STATE[i] = shouldShow;
    const items = col.querySelectorAll('.ov-trio-dish,.ov-trio-p');
    if (shouldShow) {
      gsap.fromTo(col, {opacity:0}, {opacity:1, duration:0.08});
      gsap.fromTo(items, {opacity:0, y:20}, {opacity:1, y:0, duration:0.6,
        ease:'power3.out', stagger:0.1});
    } else {
      gsap.to(col, {opacity:0, duration:0.15, ease:'power1.in'});
    }
  });
}
```

### V3 Frame-Scan Workflow (vor Implementierung)

Bevor OVS-Ranges gesetzt werden: Frames visuell prüfen um exakte Erschein-Frames zu finden.

```
Frame 1–110:   Leerer Teller — kein Overlay
Frame ~120–125: Bowl erscheint (slide-in von links)
Frame ~128–130: Burger erscheint (slide-in von rechts)
Frame ~138–140: Käsespätzle erscheint (slide-in von rechts)
Frame 150–302: Alle drei sichtbar — Overlays bleiben aktiv
```

**Scanning-Methode:** Frames an 1, 50, 100, 110, 125, 130, 140 lesen um Erschein-Punkte zu finden. Binärsuche bei Unsicherheit.

### Speisekarte als 3D-Flipbuch

Für Gastronomie: Original-Menüfotos als CSS-3D-Buch einbetten (kein Click-to-Open, immer sichtbar):

```css
.bk-wrap { width: min(960px, calc(100% - 120px)); margin: 0 auto; }
.bk      { height: min(740px, 88vh); display: grid;
           grid-template-columns: 1fr 12px 1fr; overflow: hidden;
           box-shadow: 0 50px 100px rgba(0,0,0,.85); }

/* Flip-Animation — nur transform, keine height/top */
.bk-l { transform-origin: right center;
        transition: transform .45s cubic-bezier(0.4,0,0.2,1), opacity .3s; }
.bk-l.fo { transform: perspective(900px) rotateY(-28deg); opacity: .5; }
.bk-r.fo { transform: perspective(900px) rotateY(28deg);  opacity: .5; }

/* Photo-Modus — beide Seiten identisch */
.bk-l.bk-lp, .bk-r.bk-rp { padding: 0; background: #0a0808;
                              overflow-y: auto; }
.bk-l.bk-lp::after { display: none; } /* Gradient-Overlay entfernen */
.bk-l.bk-lp img, .bk-r.bk-rp img { width: 100%; height: auto; display: block; }
```

**BD-Struktur für reine Original-Foto-Seiten:**
```javascript
const BD = [
  { l:{t:'photo', src:'menu-p1.jpg', alt:'...'}, r:{t:'photo', src:'menu-p2.jpg', alt:'...'} },
  { l:{t:'photo', src:'menu-p3.jpg', alt:'...'}, r:{t:'photo', src:'menu-p4.jpg', alt:'...'} },
  // ...
  { l:{t:'cover'}, r:{t:'photo', src:'menu-last.jpg', alt:'...'} }, // Backcover
];
```

### Performance-Checkliste Frame Player

- [ ] `USE_BMP = false` — nie alle 900 Frames als GPU-Bitmap anlegen
- [ ] `self.progress` immer clampen: `Math.max(0, Math.min(1, ...))`
- [ ] `si` immer clampen: `Math.max(0, Math.min(sc-1, ...))`
- [ ] `fi` immer clampen: `Math.max(0, ...)`
- [ ] Mobile: Frame Player komplett deaktivieren (`IS_MOB = window.innerWidth < 960`)
- [ ] `img.decode()` nur für 1–2 Lookahead-Frames, nicht für alle
- [ ] Python-Server für JPEG-Auslieferung (SimpleHTTPRequestHandler) mit Cache-Header

---

## Schritt 12 — Projekt-Lernprotokoll (Triple B, 2026)

### Performance-Lektion: USE_BMP

**Problem:** `createImageBitmap()` für alle 906 Frames beim Preload → 906 × 8 MB GPU-Textur → ~7,5 GB VRAM → Browser-Tab-Crash.  
**Fix:** `USE_BMP = false`. Lookahead: nur nächstes Frame mit `img.decode()`.  
**Regel:** Bei mehr als 100 Frames NIEMALS alle als Bitmap anlegen.

### Crash-Lektion: Lenis Negative Progress

**Problem:** Lenis kann `self.progress < 0` liefern (Bounce-Effekt beim schnellen Zurückscrollen).  
**Fix:** Alle ScrollTrigger-Werte mit `Math.max(0, Math.min(1, ...))` clampen.  
**Regel:** Alle progress-abhängigen Berechnungen immer clampen — auch `si` und `fi`.

### Speisekarte-Lektion: Foto-First

**Problem:** Generierte Menü-Seiten (mit Texten, Preisen, Beschreibungen) wirken schwächer als Original-Menüfotos.  
**Fix:** Beide Seiten des Flipbuches zeigen Original-Fotos. Keine generierten Inhalte.  
**Regel:** Wenn der Kunde echte Menüfotos hat → immer Fotos verwenden, nie generieren.

### About-Sektion Hintergrundbild

Subtiles Hintergrundbild verbessert die Story-Sektion stark:
```css
.about { position: relative; overflow: hidden; }
.about::before { content: ''; position: absolute; inset: 0;
  background: url('interior.jpg') center/cover no-repeat;
  opacity: .13; filter: grayscale(40%); z-index: 0; pointer-events: none; }
.about .ctr { position: relative; z-index: 1; }
```
**Regel:** Hintergrundbilder bei max. 15% Deckkraft + Graustufenfilter einsetzen — subtil, nie ablenkend.

### Kontaktformular-Dringlichkeit

Urgency-Element + IntersectionObserver-Slide-in erhöht Konversionsrate:
```html
<div class="c-urgency"><span class="u-dot"></span>Tische heute noch verfügbar</div>
```
```css
@keyframes urgPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(.6)} }
.u-dot { animation: urgPulse 1.4s ease-in-out infinite; }
```

---

## Related Skills

- `/web-factory` — Standard-Websites ohne Cinematic-Layer
- `/redesign-existing-projects` — bestehendes HTML auf dieses Niveau heben
- `/brand-guidelines` — Markenfarben zuerst definieren
- `/design-taste-frontend` — React/Next.js Umsetzung
- `/high-end-visual-design` — Design-Prinzipien vertiefen

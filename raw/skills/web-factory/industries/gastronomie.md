# Branchenprofil: Gastronomie

Gilt für: Restaurants, Cafés, Bars, Bistros, Imbisse, Catering-Services, Bäckereien, Food Trucks, Weinbars, Brauereien.

---

## Design-DNA

**Kernbotschaft:** Appetit wecken, Atmosphäre transportieren, Reservierung erleichtern. Der Besucher soll die Qualität und das Ambiente schon durch die Website spüren.

**Stil-Parameter:**
- DESIGN_VARIANCE: 6 (charakter-voll, individuell)
- MOTION_INTENSITY: 4 (dezente, appetitliche Animationen)
- VISUAL_DENSITY: 5 (Bilder spielen große Rolle — URL einbetten wenn geliefert)

**Tonalität:** Warm, einladend, leidenschaftlich. Storytelling über Küche/Konzept. Niemals steril oder korporat.

---

## Farb-Defaults

```css
:root {
  /* Klassisches Restaurant: Warm & Elegant */
  --primary: #8b1a1a;        /* Tiefes Wein-Rot */
  --primary-dark: #6b1212;
  --secondary: #c9a84c;      /* Warm Gold */
  --text: #2c1810;           /* Dunkles Braun statt reines Schwarz */
  --text-muted: #7a6055;
  --bg: #fdfaf7;             /* Warmes Off-White — nie reines Weiß */
  --bg-subtle: #f5ede3;      /* Cremige Hintergrundfarbe */
  --bg-dark: #1a0f0a;        /* Fast-Schwarz für dunkle Sektionen */
  --border: #e8d5c4;
  --accent: #e8c547;
}
```

**Sub-Branche Varianten:**
- Café/Bäckerei: `--primary: #6b4226` (Kaffee-Braun) + `--secondary: #f5c842` (Butter-Gelb)
- Bar/Cocktailbar: `--primary: #1a1a2e` (Nacht-Schwarz) + `--secondary: #d4a843` (Gold)
- Sushi/Asiatisch: `--primary: #c0392b` (Rot) + `--bg: #fafafa` (Weiß, minimal)
- Veganes Lokal: `--primary: #2d6a4f` (Waldgrün) + Erdtöne
- Fast-Casual: `--primary: #f97316` (Orange) + `--secondary: #fbbf24` (Gelb)

**Premium Dark Food Brand (TONE: "premium" / "cinematic" / "modern"):**

Für: Smash Burger, Gourmet Fast-Casual, Modern Kitchen, Food-Concept-Stores.  
Erkennungsmerkmal: dunkler Hintergrund, warmer Amber-Akzent, kinematische Optik.

```css
:root {
  --primary: #F5A623;           /* Amber / Warm Gold */
  --primary-dark: #C8851A;
  --primary-light: #FFD280;
  --primary-glow: rgba(245, 166, 35, 0.18);
  --primary-border: rgba(245, 166, 35, 0.28);
  --text: #f0ece6;              /* Crème — nie reines Weiß */
  --text-muted: #8a8480;
  --bg: #111111;
  --bg-subtle: #181818;
  --bg-card: #1e1e1e;
  --bg-dark: #0a0a0a;
  --border: #272727;
}
/* Fonts: kondensierte Bold-Heading + neutraler Body */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
--font-heading: 'Barlow Condensed', sans-serif;
--font-body: 'DM Sans', sans-serif;
```

Design-Prinzipien dieser Variante:
- Hintergrund: tief dunkel (`#111`) — Lebensmittel wirken wärmer und appetitlicher
- Amber-Akzent: erzeugt Wärme und Energie ohne aufdringlich zu wirken
- Glow-Effekte: `box-shadow` mit `rgba(245,166,35,0.20)` auf Cards und Buttons
- Große, kondensierte Headlines in Uppercase — Impact ohne viel Platz
- MOTION_INTENSITY auf 6–7 setzen (Kinetic Type, Marquee, Video Card Float)

---

## Typografie

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Lato:wght@300;400;700&display=swap');

--font-heading: 'Playfair Display', serif;   /* Editorial, hochwertig */
--font-body: 'Lato', sans-serif;             /* Lesbar, leicht */
```

**Alternativen für modernes Konzept:**
```css
/* Modern Bistro: */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@400;500&display=swap');

/* Trendy Café: */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,400;0,9..144,600&family=Epilogue:wght@400;500&display=swap');
```

---

## Sektionsreihenfolge

1. **Navigation** — Logo + Links + "Reservierung" CTA (IMMER primary button)
2. **Hero** — Großes Bild (URL oder CSS-Visual) + Headline + Öffnungszeiten-Quickinfo + Reservierungs-CTA
3. **Über uns / Unser Konzept** — Story hinter dem Lokal, Küchenchef, Philosophie
4. **Speisekarte** — Alle gelieferten Gerichte, nach Kategorie gruppiert
5. **Öffnungszeiten** — Wochentage + Zeiten, aktueller Tag hervorgehoben (JS)
6. **Reservierung** — Formular (Datum, Zeit, Personen, Name, Telefon)
7. **Standort** — Adresse + Google Maps Link + Anfahrt
8. **Impressum** — Vollständig (§5 TMG)
9. **Footer** — Öffnungszeiten-Kurzfassung, Social Media, Impressum-Link

---

## Speisekarte-Rendering

Eingabe-Format aus dem Brief:
```
Kategorie | Name | Beschreibung | Preis
```

Daraus wird HTML generiert mit Kategorien als Überschriften und Gerichten als Cards:

```html
<section id="speisekarte" class="menu-section">
  <div class="container">
    <h2>Unsere Speisekarte</h2>
    <p class="menu-intro">Alle Gerichte werden frisch zubereitet. 
    Bei Allergien sprechen Sie uns bitte an.</p>

    <!-- Pro Kategorie: -->
    <div class="menu-category">
      <h3 class="menu-category-title">[KATEGORIE]</h3>
      <div class="menu-grid">
        <!-- Pro Gericht: -->
        <div class="menu-item">
          <div class="menu-item-header">
            <h4 class="dish-name">[NAME]</h4>
            <span class="dish-price">[PREIS]</span>
          </div>
          <p class="dish-description">[BESCHREIBUNG]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.menu-section {
  background: var(--bg);
  padding: 80px 0;
}
.menu-category {
  margin-bottom: 56px;
}
.menu-category-title {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  color: var(--primary);
  border-bottom: 1px solid var(--border);
  padding-bottom: 16px;
  margin-bottom: 32px;
}
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}
.menu-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}
.menu-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 6px;
}
.dish-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 500;
}
.dish-price {
  font-family: var(--font-body);
  font-weight: 700;
  color: var(--secondary);
  white-space: nowrap;
  font-size: 1.05rem;
}
.dish-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}
```

**Wenn keine Speisekarte geliefert:**
Zeige 3 Beispiel-Highlights als "Unsere Empfehlungen" + Button "Vollständige Karte anfragen".

---

## Hero für Gastronomie

```html
<!-- Hero: großes Bild (min. 70vh), Overlay, CTAs -->
<section id="hero" class="hero">
  <!-- Wenn BILD_HERO geliefert: -->
  <div class="hero-bg" style="background-image: url('[BILD_HERO]')"></div>
  <!-- Sonst: CSS-Gradient-Visual -->
  
  <div class="hero-overlay"></div>
  
  <div class="hero-content">
    <div class="hero-badge">[ÖFFNUNGSZEITEN HEUTE — JS ermittelt]</div>
    <h1>[FIRMENNAME] — [SLOGAN oder generierter Claim]</h1>
    <p>[KONZEPT in 1-2 Sätzen]</p>
    <div class="hero-ctas">
      <a href="#reservierung" class="btn-primary">Jetzt reservieren</a>
      <a href="tel:[TELEFON]" class="btn-secondary">[TELEFON]</a>
    </div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.6) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 1;
  color: white;
}
.hero-badge {
  display: inline-block;
  background: var(--secondary);
  color: var(--bg-dark);
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
}
```

---

## Kinetic Text Reveal (MOTION_INTENSITY 5+)

Jede Headline-Zeile fährt von unten ins Bild — cinematic, kein Opacity-Fade.

```html
<h1>
  <span class="reveal-wrap"><span class="reveal-inner">Burger.</span></span><br>
  <span class="reveal-wrap"><span class="reveal-inner accent">Bowls.</span></span><br>
  <span class="reveal-wrap"><span class="reveal-inner">Basics.</span></span>
</h1>
```
```css
.reveal-wrap {
  display: inline-block; overflow: hidden;
  vertical-align: bottom; line-height: 0.95;
}
.reveal-inner {
  display: inline-block;
  transform: translateY(115%);
  transition: transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-inner.revealed { transform: translateY(0); }
```
```javascript
// Verzögert pro Zeile — Staffeleffekt
document.querySelectorAll('.reveal-inner').forEach((el, i) => {
  setTimeout(() => el.classList.add('revealed'), 200 + i * 180);
});
```

---

## Premium Video Hero (wenn Videomaterial vorhanden, MOTION_INTENSITY ≥ 5)

Statt Vollbild-Video-Background: **animierte Video-Card im Split-Layout** (links Text, rechts schwebende Card). Wirkt hochwertiger, kontrollierbarer und verkauft das Produkt besser.

**HTML-Struktur:**
```html
<section class="hero">
  <div class="hero-split container">

    <!-- Linke Spalte: Kinetic Headline + CTAs -->
    <div class="hero-content">
      <div class="hero-eyebrow">
        <span class="hero-dot"></span> Täglich frisch — seit [Jahr]
      </div>
      <h1>
        <span class="reveal-wrap"><span class="reveal-inner">[Produkt1].</span></span><br>
        <span class="reveal-wrap"><span class="reveal-inner accent">[Produkt2].</span></span><br>
        <span class="reveal-wrap"><span class="reveal-inner">[Produkt3].</span></span>
      </h1>
      <p class="hero-sub">[SLOGAN oder 1-2 Sätze Konzept]</p>
      <div class="hero-ctas">
        <a href="#speisekarte" class="btn-primary">Zur Karte</a>
        <a href="tel:[TELEFON]" class="btn-secondary">[TELEFON]</a>
      </div>
    </div>

    <!-- Rechte Spalte: Floating Video Card -->
    <div class="hero-visual fade-up">
      <div class="video-card-wrap">
        <div class="video-tilt-wrap" id="videoTiltWrap">
          <div class="video-ring" aria-hidden="true"></div>
          <div class="video-card">
            <video autoplay muted loop playsinline preload="auto">
              <source src="../[PFAD]/hero.mp4" type="video/mp4">
            </video>
            <span class="video-card-badge">Täglich frisch zubereitet</span>
          </div>
        </div>
      </div>
      <div class="video-glow" aria-hidden="true"></div>
    </div>

  </div>
</section>
```

**CSS — Split-Layout + Card:**
```css
.hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding: 130px 0 96px;
}
/* Floating Card */
.video-card-wrap {
  position: relative;
  animation: heroFloat 5s ease-in-out infinite;
  will-change: transform;
}
@keyframes heroFloat {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}
.video-card {
  position: relative;
  border-radius: 24px; overflow: hidden;
  aspect-ratio: 4 / 5; width: min(360px, 42vw);
  box-shadow:
    0 0 0 1px rgba(245,166,35,0.35),
    0 0 40px rgba(245,166,35,0.20),
    0 40px 100px rgba(0,0,0,0.75);
}
.video-card video { width: 100%; height: 100%; object-fit: cover; display: block; }
.video-card::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.65) 100%);
  pointer-events: none;
}
.video-card-badge {
  position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
  z-index: 2; background: rgba(10,10,10,0.78);
  border: 1px solid rgba(245,166,35,0.4); color: var(--primary);
  padding: 7px 20px; border-radius: 100px;
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  backdrop-filter: blur(10px); white-space: nowrap;
}
/* Rotierende Dashed-Ring Dekoration */
.video-tilt-wrap { position: relative; will-change: transform; }
.video-ring {
  position: absolute; inset: -6px; border-radius: 28px;
  border: 1px dashed rgba(245,166,35,0.18);
  animation: ringRotate 18s linear infinite;
  pointer-events: none;
}
@keyframes ringRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
/* Ambientes Glow unter der Card */
.video-glow {
  position: absolute; bottom: -30px; left: 50%;
  width: 70%; height: 80px;
  background: radial-gradient(ellipse at center, rgba(245,166,35,0.30) 0%, transparent 75%);
  filter: blur(24px); transform: translateX(-50%);
  animation: heroFloat 5s ease-in-out infinite;
  pointer-events: none;
}
/* Mobile: Stack */
@media (max-width: 860px) {
  .hero-split { grid-template-columns: 1fr; gap: 48px; padding: 110px 0 80px; }
  .hero-visual { order: -1; }
  .video-card { width: min(280px, 72vw); margin: 0 auto; }
}
```

**3D Mouse-Tilt JS (Hover-only, MOTION_INTENSITY 7+):**
```javascript
(function() {
  const visual = document.querySelector('.hero-visual');
  const tiltEl = document.getElementById('videoTiltWrap');
  if (!visual || !tiltEl || !window.matchMedia('(hover: hover)').matches) return;
  let raf = null, tRX = 0, tRY = 0, cRX = 0, cRY = 0, active = false;
  const lerp = (a, b, t) => a + (b - a) * t;
  function tick() {
    cRX = lerp(cRX, tRX, 0.09); cRY = lerp(cRY, tRY, 0.09);
    tiltEl.style.transform = `perspective(900px) rotateX(${cRX.toFixed(2)}deg) rotateY(${cRY.toFixed(2)}deg)`;
    if (!active && Math.abs(cRX) < 0.02 && Math.abs(cRY) < 0.02) { tiltEl.style.transform = ''; raf = null; }
    else raf = requestAnimationFrame(tick);
  }
  visual.addEventListener('mousemove', e => {
    const r = tiltEl.getBoundingClientRect();
    tRX = -((e.clientY - (r.top + r.height/2)) / (r.height/2)) * 11;
    tRY = ((e.clientX - (r.left + r.width/2)) / (r.width/2)) * 11;
    active = true; if (!raf) raf = requestAnimationFrame(tick);
  });
  visual.addEventListener('mouseleave', () => {
    tRX = 0; tRY = 0; active = false;
    if (!raf) raf = requestAnimationFrame(tick);
  });
})();
```

---

## Scroll-Synced Product Visual (MOTION_INTENSITY 7+)

Das Produkt-Video wird zum zentralen Scroll-Erlebnis. Nutzer "dreht" das Video durch Scrollen — Apple-Style.

**Wann einsetzen:** Wenn hochwertiges Videomaterial des Produkts vorhanden ist. Setzt direkt nach dem Marquee-Strip an (nach dem Hero).

**HTML:**
```html
<div class="scrub-outer" id="scrubOuter">
  <div class="scrub-sticky">
    <video id="scrubVideo" preload="auto" muted playsinline>
      <!-- KEIN autoplay — wird manuell durch currentTime gesteuert -->
      <source src="../[PFAD]/product.mp4" type="video/mp4">
    </video>
    <div class="scrub-overlay">
      <div class="scrub-text" id="scrubText">
        <span class="section-label">Das ist [FIRMENNAME]</span>
        <h2>Frisch.<br><span class="accent">Ehrlich.</span><br>Gut.</h2>
      </div>
    </div>
    <div class="scrub-progress"><div class="scrub-fill" id="scrubFill"></div></div>
  </div>
</div>
```

**CSS:**
```css
.scrub-outer { height: 280vh; position: relative; }
.scrub-sticky {
  position: sticky; top: 0; height: 100vh;
  overflow: hidden; background: #000;
  contain: paint layout; /* isoliert Repaints */
}
#scrubVideo {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; display: block;
  will-change: transform; transform-origin: center;
}
.scrub-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: clamp(40px, 7vw, 88px);
}
.scrub-text { opacity: 0; transform: translateY(28px); transition: opacity 0.9s ease, transform 0.9s ease; }
.scrub-text.revealed { opacity: 1; transform: translateY(0); }
.scrub-progress { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: rgba(255,255,255,0.10); }
.scrub-fill { height: 100%; width: 0%; background: linear-gradient(90deg, var(--primary-dark), var(--primary)); }
/* Mobile: Scrub deaktivieren */
@media (max-width: 768px) { .scrub-outer { display: none; } }
```

**JS — robuste Implementierung (Lerp + kein isSeeking):**
```javascript
(function() {
  const outer = document.getElementById('scrubOuter');
  const video = document.getElementById('scrubVideo');
  const fill  = document.getElementById('scrubFill');
  const text  = document.getElementById('scrubText');
  if (!outer || !video) return;

  let progress = 0, currentProg = 0, rafId = null;
  let outerTop = 0, totalH = 0;

  // Geometry einmalig cachen — nie im Scroll-Handler messen
  function measure() {
    outerTop = outer.getBoundingClientRect().top + window.scrollY;
    totalH   = outer.offsetHeight - window.innerHeight;
  }
  measure();
  window.addEventListener('resize', measure, { passive: true });

  // Erstes Frame zeigen
  const showFirst = () => { if (video.duration) video.currentTime = 0; };
  if (video.readyState >= 1) showFirst();
  else video.addEventListener('loadedmetadata', showFirst, { once: true });

  function draw() {
    rafId = null;
    if (!video.duration) return;
    // Lerp: 12% pro Frame → ~200ms smooth lag (butter-smooth feel)
    currentProg += (progress - currentProg) * 0.12;
    if (Math.abs(progress - currentProg) > 0.0005) rafId = requestAnimationFrame(draw);
    // Seek + Parallax Scale
    video.currentTime = currentProg * video.duration;
    const s = 1 + currentProg * 0.07; // 1.0 → 1.07
    video.style.transform = `scale3d(${s.toFixed(4)},${s.toFixed(4)},1)`;
    if (fill) fill.style.width = (currentProg * 100) + '%';
  }

  window.addEventListener('scroll', () => {
    progress = Math.max(0, Math.min(1, (window.scrollY - outerTop) / totalH));
    if (text) text.classList.toggle('revealed', progress > 0.12);
    if (!rafId) rafId = requestAnimationFrame(draw);
  }, { passive: true });
})();
```

**Kritisch — warum kein `isSeeking`-Flag:**
Browser ersetzen in-flight Seeks automatisch beim nächsten `currentTime`-Assignment (letzter Wert gewinnt). Ein `isSeeking`-Flag blockiert neue Seeks und führt zum eingefrorenen Video. Kein Flag nötig — direkte Zuweisung im RAF ist robust.

---

## Marquee Strip (MOTION_INTENSITY 5+)

Qualitätsmerkmale als endlose horizontale Textzeile — zwischen Hero und nächster Sektion.

```html
<div class="marquee-strip" aria-hidden="true">
  <div class="marquee-track">
    <!-- Inhalt 2× duplizieren für seamless loop -->
    <span class="marquee-item">Regionales Rind</span><span class="marquee-sep">·</span>
    <span class="marquee-item">Täglich frisch</span><span class="marquee-sep">·</span>
    <span class="marquee-item">Handgemacht</span><span class="marquee-sep">·</span>
    <span class="marquee-item">Hirschau</span><span class="marquee-sep">·</span>
    <!-- Kopie: -->
    <span class="marquee-item">Regionales Rind</span><span class="marquee-sep">·</span>
    <span class="marquee-item">Täglich frisch</span><span class="marquee-sep">·</span>
    <span class="marquee-item">Handgemacht</span><span class="marquee-sep">·</span>
    <span class="marquee-item">Hirschau</span><span class="marquee-sep">·</span>
  </div>
</div>
```
```css
.marquee-strip { background: var(--primary); overflow: hidden; padding: 14px 0; white-space: nowrap; }
.marquee-track {
  display: inline-flex; align-items: center;
  animation: marqueeRun 22s linear infinite;
  will-change: transform;
}
.marquee-strip:hover .marquee-track { animation-play-state: paused; }
.marquee-item { font-weight: 800; font-size: 0.88rem; letter-spacing: 0.18em; text-transform: uppercase; color: #000; padding: 0 28px; }
.marquee-sep { color: rgba(0,0,0,0.35); font-weight: 900; }
@keyframes marqueeRun { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

---

## Öffnungszeiten-Sektion

```html
<section id="oeffnungszeiten" class="hours-section">
  <div class="container">
    <h2>Öffnungszeiten</h2>
    <div class="hours-grid">
      <!-- Für jeden Wochentag aus ÖFFNUNGSZEITEN-Daten: -->
      <div class="hours-row" data-day="[0-6]">
        <span class="day-name">[Wochentag]</span>
        <span class="hours">[Zeiten oder "Geschlossen"]</span>
      </div>
    </div>
    
    <div class="reservierung-cta">
      <p>Reservierungen: <a href="tel:[TELEFON]">[TELEFON]</a></p>
      <!-- Oder: <a href="[BUCHUNGSLINK]">Online reservieren</a> -->
    </div>
  </div>
</section>
```

```javascript
// Heutigen Tag hervorheben
const today = new Date().getDay(); // 0=So, 1=Mo...
document.querySelectorAll('.hours-row').forEach(row => {
  if (parseInt(row.dataset.day) === today) {
    row.classList.add('today');
  }
});
```

```css
.hours-row.today {
  background: var(--bg-subtle);
  border-radius: var(--radius);
  padding: 8px 16px;
  font-weight: 700;
  color: var(--primary);
}
```

---

## Reservierungsformular

```html
<section id="reservierung" class="reservation-section">
  <div class="container">
    <h2>Tisch reservieren</h2>
    <p>Wir bestätigen Ihre Reservierung per Telefon oder E-Mail.</p>
    
    <form class="reservation-form" action="#" method="post">
      <div class="form-row">
        <div class="form-group">
          <label for="res-date">Datum</label>
          <input type="date" id="res-date" name="datum" required>
        </div>
        <div class="form-group">
          <label for="res-time">Uhrzeit</label>
          <select id="res-time" name="uhrzeit" required>
            <option value="">Bitte wählen</option>
            <option>12:00 Uhr</option>
            <option>12:30 Uhr</option>
            <option>13:00 Uhr</option>
            <option>13:30 Uhr</option>
            <option>18:00 Uhr</option>
            <option>18:30 Uhr</option>
            <option>19:00 Uhr</option>
            <option>19:30 Uhr</option>
            <option>20:00 Uhr</option>
            <option>20:30 Uhr</option>
          </select>
        </div>
        <div class="form-group">
          <label for="res-persons">Personen</label>
          <input type="number" id="res-persons" name="personen" min="1" max="20" value="2" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="res-name">Name</label>
          <input type="text" id="res-name" name="name" required placeholder="Ihr Name">
        </div>
        <div class="form-group">
          <label for="res-phone">Telefon</label>
          <input type="tel" id="res-phone" name="telefon" required placeholder="Ihre Telefonnummer">
        </div>
      </div>
      <div class="form-group">
        <label for="res-wishes">Besondere Wünsche (optional)</label>
        <textarea id="res-wishes" name="wuensche" rows="3" 
          placeholder="Allergien, Geburtstag, Hochstuhl..."></textarea>
      </div>
      <button type="submit" class="btn-primary">Reservierung anfragen</button>
    </form>
  </div>
</section>
```

---

## Performance & Animation System

### Grundregeln (gelten für alle Gastronomie-Websites)

```
transform + opacity → GPU-Compositor → kein Layout-Thrash → IMMER bevorzugen
width / height / top / left / margin → Layout-trigger → NIEMALS animieren
```

**Pflicht-CSS auf animierten Elementen:**
```css
.animated { will-change: transform; } /* eigener Compositor-Layer */
.sticky-container { contain: paint layout; } /* isoliert Repaints */
```

**Scroll-Performance:**
```javascript
// IMMER passive: true
window.addEventListener('scroll', handler, { passive: true });
// Geometry EINMAL cachen, dann window.scrollY benutzen
const top = el.getBoundingClientRect().top + window.scrollY;
// NIEMALS getBoundingClientRect() im Scroll-Handler aufrufen
```

**Mobile Video-Strategie:**
| Video | Desktop | Mobile |
|-------|---------|--------|
| Hero-Loop | `autoplay muted loop` | Behalten (reduziert in CSS) |
| Scroll-Scrub | Aktiviert | `display: none` via Media Query |

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Mobile-First Pflicht

80%+ der Restaurant-Besuche kommen vom Smartphone:
```
- Telefonnummer als <a href="tel:..."> überall
- Reservierungs-Button IMMER im Viewport (sticky auf Mobile wenn nötig)
- Karte: Google Maps Link zum Antippen
- Öffnungszeiten auf Homepage sichtbar ohne Scrollen (Hero-Badge)
```

---

## Vertrauens-Elemente

- Google-Bewertung direkt nennen: `4.8 ★ auf Google (127 Bewertungen)`
- Auszeichnungen: Michelin, Gault-Millau, lokale Presse
- "Seit [Jahr] in [Stadt]" — aus BESONDERHEITEN
- Medien-Erwähnungen wenn vorhanden

---

## Schema.org für Gastronomie

```json
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "[FIRMENNAME]",
  "servesCuisine": "[Küche — abgeleitet aus LEISTUNGEN]",
  "hasMenu": "#speisekarte",
  "acceptsReservations": true,
  "telephone": "[TELEFON]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STRASSE]",
    "addressLocality": "[ORT]",
    "postalCode": "[PLZ]",
    "addressCountry": "DE"
  },
  "openingHours": "[aus ÖFFNUNGSZEITEN generiert, z.B. Mo-Fr 11:00-22:00]"
}
```

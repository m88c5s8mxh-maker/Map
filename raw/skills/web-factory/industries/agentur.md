# Branchenprofil: Agentur / Beratung / Digital

Gilt für: Webagenturen, Marketingagenturen, Designstudios, Unternehmensberatungen, Digitalagenturen, PR-Agenturen, Kreativagenturen, Freelancer-Portfolios.

---

## Design-DNA

**Kernbotschaft:** Das Design IS die Visitenkarte. Eine Agentur die eine schlechte Website hat, hat keine Glaubwürdigkeit. Premium, mutig, eigenständig — mit dem Können als Product.

**Stil-Parameter:**
- DESIGN_VARIANCE: 8 (kreativ, eigenständig, überraschend)
- MOTION_INTENSITY: 6 (Micro-Interactions, Scroll-Effekte — beweist technisches Können)
- VISUAL_DENSITY: 4 (portfolio-fokussiert, Luft zum Atmen)

**Tonalität:** Selbstbewusst, präzise, ohne Buzzwords. Zeig, nicht erkläre. Case Studies statt Versprechen.

---

## Farb-Defaults (VARIABEL — Agentur braucht eigenen Charakter)

```css
/* Option A: Black & White Maximalism (Default) */
:root {
  --primary: #0a0a0a;
  --primary-dark: #000000;
  --secondary: #f0e040;      /* Electric Yellow */
  --text: #0a0a0a;
  --text-muted: #6b6b6b;
  --bg: #fafafa;
  --bg-subtle: #f0f0f0;
  --bg-dark: #0a0a0a;
  --border: #e0e0e0;
}

/* Option B: Sophisticated Dark */
:root {
  --primary: #6366f1;        /* Indigo */
  --secondary: #a78bfa;
  --bg: #09090b;
  --bg-subtle: #18181b;
  --text: #fafafa;
  --text-muted: #a1a1aa;
}

/* Option C: Premium Neutral */
:root {
  --primary: #18181b;
  --secondary: #e11d48;      /* Crimson */
  --bg: #ffffff;
  --bg-subtle: #fafafa;
  --text: #09090b;
}
```

> Bei Agenturen: Immer mit User abstimmen welche Option. Das ist ihre Identität.

---

## Typografie

```css
/* Bold & Modern: */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500&display=swap');
--font-heading: 'Syne', sans-serif;
--font-body: 'Inter', sans-serif;

/* Editorial Creative: */
/* Clash Display + Satoshi — Nur via Fontshare CDN: */
/* @import url('https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500&display=swap'); */

/* Sophisticated Minimal: */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
--font-heading: 'DM Serif Display', serif;
--font-body: 'DM Sans', sans-serif;
```

**Typography-Regel für Agenturen:**
```css
.hero-headline {
  font-size: clamp(3.5rem, 8vw, 8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.95;
}
```

---

## Sektionsreihenfolge

1. **Navigation** — Logo + "Projekte" / "Leistungen" / "Über uns" + "Projekt starten" CTA
2. **Hero** — Große Statement-Headline + 1 Satz Positioning + "Ausgewählte Arbeiten" Scroll-Anchor
3. **Selected Works / Portfolio** — Alle PROJEKTE-Einträge als Case Study Cards
4. **Leistungen** — Outcome-orientiert ("Was wir lösen", nicht Feature-Liste)
5. **Über uns / Studio** — Team, Geschichte aus GRÜNDUNGSJAHR, Werte
6. **Prozess** — 4 Schritte wie ein Projekt abläuft
7. **Zahlen** — Aus Brief: Projekte, Kunden, Jahre, Team-Größe
8. **Testimonials** — Konkrete Zitate
9. **Kontakt / Projektstart** — Formular mit Budget-Feld
10. **Impressum** — Vollständig (§5 TMG)
11. **Footer** — Minimal, Social

---

## Portfolio-Rendering (aus PROJEKTE-Daten)

Eingabe-Format: `Projektname | Kundenname | Kategorie | Jahr | Kurzbeschreibung`

```html
<section id="projekte" class="works-section">
  <div class="container">
    <h2>Ausgewählte Arbeiten</h2>
    
    <div class="portfolio-grid">
      <!-- Erstes Projekt: volle Breite (featured) -->
      <article class="case-study-card case-study-card--featured">
        <div class="card-visual">
          <!-- Wenn Bild-URL in Beschreibung: <img src="[URL]" alt="[Projektname]"> -->
          <!-- Sonst: CSS-generiertes Visual mit Projekt-Farbe -->
          <div class="card-visual-placeholder" style="background: var(--bg-subtle)">
            <span class="project-initial">[Erste 2 Buchstaben Projektname]</span>
          </div>
        </div>
        <div class="card-meta">
          <span class="client">[Kundenname]</span>
          <span class="category">[Kategorie]</span>
          <span class="year">[Jahr]</span>
        </div>
        <h3>[Projektname]</h3>
        <p>[Kurzbeschreibung]</p>
      </article>
      
      <!-- Weitere Projekte: normale Breite -->
      <!-- ... -->
    </div>
  </div>
</section>
```

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.case-study-card--featured {
  grid-column: 1 / -1;
}
.case-study-card {
  background: var(--bg-subtle);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.case-study-card:hover {
  transform: translateY(-4px);
}
.card-visual {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.card-visual-placeholder {
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-initial {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-muted);
  opacity: 0.3;
}
.card-meta {
  display: flex;
  gap: 12px;
  padding: 20px 20px 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}
.case-study-card h3 {
  padding: 0 20px 20px;
  font-size: 1.3rem;
}
@media (max-width: 768px) {
  .portfolio-grid { grid-template-columns: 1fr; }
  .case-study-card--featured { grid-column: 1; }
}
```

---

## Hero für Agenturen

**Nicht:** "Wir sind eine kreative Digitalagentur mit Leidenschaft für..."

**Stattdessen — aus SLOGAN oder LEISTUNGEN ableiten:**
- `Wir bauen Websites die verkaufen.`
- `Von der Strategie bis zum Go-Live.`
- `[ANZAHL_PROJEKTE] Projekte. [TEAM_GRÖSSE]. [GRÜNDUNGSJAHR].`
- Oder komplett überraschend — etwas das die Konkurrenz nicht sagen würde

---

## Leistungs-Darstellung (Outcome-First)

```
NICHT:
"Web Development — Wir entwickeln Websites mit den neuesten Technologien"

STATTDESSEN (aus LEISTUNGEN ableiten):
"Websites die konvertieren — Ihre Besucher werden zu Kunden"
"Sichtbarkeit auf Google — Mehr organischer Traffic in 90 Tagen"
"Markenidentität — Ein visuelles System das bleibt"
```

---

## Prozess-Sektion

Immer 4 Schritte — Inhalt ist für alle Agenturen ähnlich:

```
Schritt 1: Discovery (1-2 Wochen)
Schritt 2: Konzept & Design (2-3 Wochen)
Schritt 3: Entwicklung (3-6 Wochen)
Schritt 4: Launch & Optimierung (1 Woche + ongoing)
```

---

## Kontaktformular mit Budget-Feld

```html
<form class="contact-form">
  <div class="form-row">
    <div class="form-group">
      <label for="c-name">Name</label>
      <input type="text" id="c-name" required placeholder="Ihr Name">
    </div>
    <div class="form-group">
      <label for="c-company">Unternehmen</label>
      <input type="text" id="c-company" placeholder="Firmenname (optional)">
    </div>
  </div>
  <div class="form-group">
    <label for="c-email">E-Mail</label>
    <input type="email" id="c-email" required placeholder="ihre@email.de">
  </div>
  <div class="form-row">
    <div class="form-group">
      <label for="c-type">Projektart</label>
      <select id="c-type">
        <option>Website / Webshop</option>
        <option>Redesign bestehende Website</option>
        <option>SEO / Online Marketing</option>
        <option>Branding / Corporate Design</option>
        <option>Sonstiges</option>
      </select>
    </div>
    <div class="form-group">
      <label for="c-budget">Budget</label>
      <select id="c-budget">
        <option>Unter 2.000 €</option>
        <option>2.000 – 5.000 €</option>
        <option>5.000 – 15.000 €</option>
        <option>Über 15.000 €</option>
        <option>Noch unklar</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="c-message">Ihr Projekt</label>
    <textarea id="c-message" rows="4" placeholder="Beschreiben Sie kurz Ihr Vorhaben..."></textarea>
  </div>
  <button type="submit" class="btn-primary">Projekt anfragen →</button>
</form>
```

---

## Scroll-Animationen

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Zahlen-Sektion (aus Brief-Daten)

```html
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat">
        <span class="stat-number">[ANZAHL_PROJEKTE aus PROJEKTE-Liste oder BESONDERHEITEN]</span>
        <span class="stat-label">Projekte</span>
      </div>
      <div class="stat">
        <span class="stat-number">[TEAM_GRÖSSE]</span>
        <span class="stat-label">Experten</span>
      </div>
      <div class="stat">
        <span class="stat-number">[Jahr - GRÜNDUNGSJAHR]</span>
        <span class="stat-label">Jahre Erfahrung</span>
      </div>
    </div>
  </div>
</section>
```

---

## Vertrauens-Elemente

- Projektanzahl aus PROJEKTE zählen + anzeigen
- Bekannte Kundennamen aus PROJEKTE
- Team-Größe aus TEAM_GRÖSSE
- Gründungsjahr aus GRÜNDUNGSJAHR
- Auszeichnungen aus BESONDERHEITEN

---

## Schema.org für Agentur

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[FIRMENNAME]",
  "description": "[aus LEISTUNGEN generiert]",
  "foundingDate": "[GRÜNDUNGSJAHR]",
  "numberOfEmployees": "[TEAM_GRÖSSE]",
  "telephone": "[TELEFON]",
  "email": "[EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STRASSE]",
    "addressLocality": "[ORT]",
    "postalCode": "[PLZ]",
    "addressCountry": "DE"
  }
}
```

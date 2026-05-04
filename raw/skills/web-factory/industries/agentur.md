# Branchenprofil: Agentur / Beratung / Digital

Gilt für: Webagenturen, Marketingagenturen, Designstudios, Unternehmensberatungen, Digitalagenturen, PR-Agenturen, Kreativagenturen, Freelancer-Portfolios.

---

## Design-DNA

**Kernbotschaft:** Das Design IS die Visitenkarte. Eine Agentur die eine schlechte Website hat, hat keine Glaubwürdigkeit. Premium, mutig, eigenständig — mit dem Können als Product.

**Stil-Parameter:**
- DESIGN_VARIANCE: 8 (kreativ, eigenständig, überraschend)
- MOTION_INTENSITY: 6 (Micro-Interactions, Scroll-Effekte — beweist technisches Können)
- VISUAL_DENSITY: 4 (portfolio-fokussiert, luft zum atmen)

**Tonalität:** Selbstbewusst, präzise, ohne Buzzwords. Zeig, nicht erkläre. Case Studies statt Versprechen.

---

## Farb-Defaults (VARIABEL — Agentur braucht eigenen Charakter)

```css
/* Option A: Black & White Maximalism (Default) */
:root {
  --primary: #0a0a0a;        /* Fast-Schwarz */
  --primary-dark: #000000;
  --secondary: #f0e040;      /* Electric Yellow — Kontrast-Akzent */
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
  --secondary: #a78bfa;      /* Violett-Akzent */
  --bg: #09090b;
  --bg-subtle: #18181b;
  --text: #fafafa;
  --text-muted: #a1a1aa;
}

/* Option C: Premium Neutral */
:root {
  --primary: #18181b;
  --secondary: #e11d48;      /* Crimson-Akzent */
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
@import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Satoshi:wght@400;500&display=swap');

/* Sophisticated Minimal: */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
```

**Typography-Regel für Agenturen:**
```css
/* Headline Größen sind DRAMATISCH */
.hero-headline {
  font-size: clamp(3.5rem, 8vw, 8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.95;
}
```

---

## Sektionsreihenfolge

1. **Navigation** — Logo + Case Studies / Leistungen / Über uns + "Projekt starten" CTA
2. **Hero** — Große Statement-Headline + 1 Satz Positioning + "Ausgewählte Arbeiten" Scroll-Anchor
3. **Selected Works / Portfolio** — 3–5 Case Study Cards (Bild + Client + Kategorie + Jahr)
4. **Leistungen** — Nicht als Feature-Liste, sondern als "Was wir lösen" / Outcome-orientiert
5. **Über uns / Studio** — Team, Gründungsgeschichte, Werte — persönlich und direkt
6. **Prozess** — 4-5 Schritte wie ein Projekt abläuft
7. **Kunden & Logos** — Referenzliste (Logos oder Firmennamen)
8. **Stimmen / Testimonials** — Konkrete Zitate mit Namen und Unternehmen
9. **Case Study Teaser** — Deep Dive in ein Projekt
10. **Kontakt / Projektstart** — Offene, einladende Formulierung + Formular
11. **Footer** — Minimal, links, Social

---

## Portfolio/Case Study Cards

```html
<!-- KRITISCH: Portfolio ist das Herzstück -->
<article class="case-study-card">
  <!-- Großes Bild (16:9 oder 3:2) — Placeholder groß halten -->
  <!-- hover: leichtes Scale/Overlay Effekt -->
  
  <div class="card-meta">
    <span class="client">[Kundenname]</span>
    <span class="category">[Web Design / Branding / SEO]</span>
    <span class="year">2024</span>
  </div>
  
  <h3>[Projektname oder Beschreibung]</h3>
  <!-- Link zu Detail-Seite oder Modal -->
</article>
```

**Grid-Layout:**
```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
/* Erstes Item: volle Breite (featured) */
.portfolio-grid > :first-child {
  grid-column: 1 / -1;
}
```

---

## Hero für Agenturen

**Nicht:** "Wir sind eine kreative Digitalagentur mit Leidenschaft für..."

**Stattdessen — Konkrete Positioning Formeln:**
- `Wir bauen Websites die verkaufen.` (direkt)
- `Digital. Strategisch. Messbar.` (Adjektiv-Stakkato)
- `Von der Strategie bis zum Go-Live.` (End-to-End)
- `[Anzahl] Websites. [Anzahl] Kunden. [Anzahl] Erfolgsgeschichten.` (Zahlen)
- Oder komplett überraschend — etwas das die Konkurrenz nicht sagen würde

**Hero Animation (dezent aber wirkungsvoll):**
```css
/* Buchstabe-für-Buchstabe Fade-In der Headline */
/* Oder: Cursor-Blinking Effekt am Headline-Ende */
/* Oder: Kurzes Scroll-Reveal auf Hero-Elemente */
/* NICHT: Videoloops, Particle-Systeme, 3D-Modelle (zu schwer) */
```

---

## Leistungs-Darstellung (Outcome-First)

```
NICHT:
"Web Development — Wir entwickeln Websites mit den neuesten Technologien"

STATTDESSEN:
"Websites die konvertieren — Ihre Besucher werden zu Kunden"
"Sichtbarkeit auf Google — Mehr organischer Traffic in 90 Tagen"
"Markenidentität — Ein visuelles System das bleibt"
```

---

## Prozess-Sektion (immer einbauen)

```
Schritt 1: Discovery (1-2 Wochen)
Schritt 2: Konzept & Design (2-3 Wochen)  
Schritt 3: Entwicklung (3-6 Wochen)
Schritt 4: Launch & Optimierung (1 Woche + ongoing)
```

Icons: Nummern (1/2/3/4) oder Phosphor-Icons.
Layout: Horizontal auf Desktop, vertikal auf Mobile.

---

## Kontaktsektion für Agenturen

```html
<!-- Einladende Formulierung statt formelles Formular -->
<section class="contact">
  <h2>Bereit für Ihr nächstes Projekt?</h2>
  <p>Erzählen Sie uns von Ihrer Idee. Wir melden uns innerhalb von 24 Stunden.</p>
  
  <!-- Formular: -->
  <!-- Name / Unternehmen -->
  <!-- E-Mail -->
  <!-- Projektart (Select: Website / Redesign / SEO / Branding / Sonstiges) -->
  <!-- Budget-Range (Select: < 2.000€ / 2.000–5.000€ / 5.000–15.000€ / > 15.000€) -->
  <!-- Projektstatus (Select: Idee / Konzept vorhanden / Dringend) -->
  <!-- Nachricht -->
</section>
```

**Budget-Feld ist wichtig** — spart beiden Seiten Zeit.

---

## Animations-Implementierung

```javascript
// Scroll-Reveal (Vanilla JS, kein Framework)
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

## Vertrauens-Elemente für Agenturen

- Anzahl abgeschlossene Projekte
- Bekannte Kundennamen (mit Erlaubnis)
- Auszeichnungen / Awards
- Team-Fotos (Placeholder) — Agentur = Menschen
- Konkrete Ergebnisse: "37% mehr Conversions", "Seite 1 bei Google in 3 Monaten"
- Reaktionszeit: "Antwort innerhalb 24h"

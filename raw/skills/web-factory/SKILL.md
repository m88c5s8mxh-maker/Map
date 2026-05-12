---
name: web-factory
description: Generates complete, production-ready single-file HTML websites for specific industries. Use when building a website for a Mittelständisches Unternehmen, Arztpraxis, Gastronomie, or Agentur. Trigger with "baue website für [Branche]", "erstelle HTML für [Kunde]", "web-factory [Branche]", or any client website request. Outputs a fully styled, mobile-responsive, single HTML file with no build step required.
argument-hint: "<Branche> | <Firmenname> | <Dienstleistungen>"
---

# Web Factory

Generiert vollständige, produktionsreife Single-File HTML-Websites. Kein Platzhaltertext, kein "HIER EINFÜGEN" — alle gelieferten Daten landen direkt im HTML. Kein Build-Schritt, keine Abhängigkeiten außer Google Fonts CDN.

---

## Schritt 1 — Brief aufnehmen

Frage nach folgenden Infos als nummerierte Liste (alle fehlenden Pflichtfelder zusammen):

### Basis-Pflichtfelder
- `BRANCHE` — Mittelstand / Arztpraxis / Gastronomie / Agentur
- `FIRMENNAME` — vollständiger Name inkl. Rechtsform (z.B. "Müller Metallbau GmbH")
- `LEISTUNGEN` — 3–6 Kernleistungen, kommagetrennt
- `ADRESSE` — Straße + Hausnummer, PLZ, Ort
- `TELEFON`
- `EMAIL`

### Impressum-Pflichtfelder (§5 TMG — immer erforderlich)
- `GESCHÄFTSFÜHRER` — Vor- und Nachname der vertretungsberechtigten Person
- `RECHTSFORM` — GmbH / GmbH & Co. KG / GbR / e.K. / Einzelunternehmen / UG
- `HRB` — Handelsregisternummer (z.B. "HRB 12345 AG München") — falls vorhanden
- `UST_ID` — Umsatzsteuer-ID (z.B. "DE123456789") — falls vorhanden

### Optionale Felder (verbessern Qualität erheblich)
- `LOGO` — SVG-Code, Bild-URL, oder "Text" (Firmenname als gestaltetes Text-Logo)
- `SLOGAN` — ein prägnanter Positioning-Satz
- `FARBE` — Primärfarbe als Hex oder Farbname (sonst Branchendefault)
- `BILD_HERO` — URL eines Heldbildes (sonst CSS-generiertes Visual)
- `BESONDERHEITEN` — USPs, Auszeichnungen, Zertifikate, Gründungsjahr
- `TONE` — seriös / modern / warm / kreativ (sonst Branchendefault)

### Branchen-spezifische Pflichtfelder

**Gastronomie:**
- `ÖFFNUNGSZEITEN` — z.B. "Mo geschlossen, Di–Fr 11–14 Uhr & 18–22 Uhr, Sa–So 12–23 Uhr"
- `SPEISEKARTE` — Einträge im Format: `Kategorie | Name | Beschreibung | Preis`
  Beispiel:
  ```
  Vorspeisen | Burrata | Mit Tomaten und Basilikum | 12,50 €
  Hauptgang | Zwiebelrostbraten | Vom Schwarzwälder Rind, Kartoffelrösti | 28,00 €
  Desserts | Crème Brûlée | Vanille, Karamellkruste | 9,00 €
  ```
- `RESERVIERUNG` — Telefon oder Buchungslink (z.B. "via Telefon" / "OpenTable-Link")

**Arztpraxis:**
- `FACHRICHTUNG` — z.B. "Allgemeinmedizin", "Zahnmedizin", "Physiotherapie"
- `SPRECHZEITEN` — pro Wochentag mit Pausen
- `TEAM` — `Dr. Vorname Nachname | Titel | Kurzbio` — eine Zeile pro Person
- `KASSENARTEN` — "GKV & PKV" / "nur PKV" / "Selbstzahler"

**Agentur:**
- `GRÜNDUNGSJAHR`
- `PROJEKTE` — 3–5 Einträge: `Projektname | Kundenname | Kategorie | Jahr | Kurzbeschreibung`
- `TEAM_GRÖSSE` — z.B. "5 Personen", "2 Freelancer", "12 Mitarbeitende"

**Mittelstand:**
- `GRÜNDUNGSJAHR`
- `MITARBEITERZAHL`
- `ZERTIFIKATE` — ISO-Norm, TÜV, Innungsmitglied, etc.
- `REFERENZKUNDEN` — 3–5 Kundennamen oder kurze Projektbeschreibungen

> Wenn Pflichtfelder fehlen, alle auf einmal als nummerierte Liste abfragen. Sobald alle Pflichtfelder da sind, direkt zur Generierung — kein Zurückfragen für optionale Felder.

---

## Schritt 2 — Branchenprofil laden

| BRANCHE | Profil-Datei |
|---------|-------------|
| Mittelstand / KMU / Handwerk / Industrie | `industries/mittelstand.md` |
| Arztpraxis / Zahnarzt / Therapeut / Klinik | `industries/arztpraxis.md` |
| Restaurant / Café / Bar / Catering | `industries/gastronomie.md` |
| Agentur / Beratung / Kreativ / Digital | `industries/agentur.md` |
| Unbekannt | Verwende Mittelstand als Fallback |

Das Profil definiert: Sektionsreihenfolge, Design-DNA, Farbpalette, Typografie, Ton, branchenspezifische Komponenten.

---

## Schritt 3 — Inspirations-Recherche (optional, empfohlen)

Wenn Firecrawl verfügbar:
```
Suche nach: "best [Branche] website design 2024 2025"
Ziel: 3 konkrete Designentscheidungen ableiten die besser als Durchschnitt sind
```

Ohne Firecrawl: direkt zu Schritt 4.

---

## Schritt 4 — HTML generieren

Generiere eine **vollständige, einzelne HTML-Datei** nach diesen Regeln:

### Grundprinzip: Alles direkt eingebaut

**KEINE Platzhalter-Kommentare wie:**
```html
<!-- Hier Telefonnummer einfügen -->
<!-- TODO: Logo -->
<!-- BILD: Ihr echtes Bild hier -->
```

**STATTDESSEN:**
- Echte Daten aus dem Brief direkt einsetzen
- Logo → SVG inline oder `<img src="[URL]">` oder gestaltetes Text-Logo
- Telefon → `<a href="tel:[TELEFON]">[TELEFON]</a>` überall wo Telefon erscheint
- Impressum → vollständige Sektion am Ende der Seite
- Speisekarte → echte Gerichte aus den übergebenen Daten gerendert

Wenn kein Bild-URL geliefert wurde: CSS-generiertes Visual (Gradient, Shapes) — kein leeres `<img>` mit alt="Bild kommt hier hin".

---

### Technische Anforderungen

```html
<!DOCTYPE html>
<html lang="de">
```

- **Fonts:** Google Fonts CDN (kein Download nötig)
- **Icons:** Phosphor Icons CDN (`https://unpkg.com/@phosphor-icons/web`)
- **Styling:** Ausschließlich `<style>` Block im `<head>` — kein Tailwind CDN
- **JS:** Minimal Vanilla JS im `<script>` Tag am Ende — NUR für: Mobile Menu Toggle, Smooth Scroll, Scroll-Animationen, aktiver Wochentag-Highlight
- **Kein Framework, kein Build-Schritt, keine lokalen Abhängigkeiten**

---

### Video-Integration (wenn Videomaterial vorhanden)

**Pfad-Konvention — niemals Base64 für Videos (Dateien zu groß):**
```html
<video autoplay muted loop playsinline preload="auto">
  <source src="../assets/hero.mp4" type="video/mp4">
</video>
```

**Attribut-Regeln:**
| Anwendung | Attribute |
|-----------|-----------|
| Hero-Loop | `autoplay muted loop playsinline preload="auto"` |
| Scroll-Scrub | `preload="auto" muted playsinline` — KEIN `autoplay` |
| Below-Fold | `preload="none" muted playsinline` |

**Performance-Pflichten:**
- Kein `autoplay` bei Scroll-Scrub-Videos — verhindert Konflikt mit manuellem `currentTime`
- `will-change: transform` auf dem Video-Element wenn Parallax/Scale-Animation
- `contain: paint layout` auf dem Sticky-Container
- Mobile: Scrub-Video durch statisches Poster ersetzen (`@media (max-width: 768px) { .scrub-outer { display: none; } }`)

**Komprimierung (Checkliste vor Deployment):**
- Format: H.264 MP4, max. 30 fps
- Hero-Loop: ≤5 MB, 720p
- Scrub-Video: ≤10 MB, 1080p
- Befehl: `ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow output.mp4`

---

### Logo-Handling

```html
<!-- Option A: SVG direkt eingebettet (bevorzugt) -->
<div class="logo">
  <svg>[SVG-CODE aus Brief]</svg>
  <span class="logo-name">[FIRMENNAME]</span>
</div>

<!-- Option B: Bild-URL -->
<div class="logo">
  <img src="[LOGO-URL]" alt="[FIRMENNAME] Logo" width="160" height="48">
</div>

<!-- Option C: Text-Logo (wenn nichts geliefert) -->
<div class="logo logo--text">
  <span class="logo-mark">[Initiale]</span>
  <span class="logo-name">[FIRMENNAME]</span>
</div>
```

```css
/* Text-Logo Styling — nie generisch */
.logo--text .logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  background: var(--primary);
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 8px;
}
.logo-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}
```

---

### CSS Architektur

```css
/* 1. CSS Custom Properties (Design Tokens) */
:root {
  --primary: [aus Branchenprofil oder User-Input];
  --primary-dark: [10% dunkler];
  --secondary: [Akzentfarbe];
  --text: #1a1a1a;
  --text-muted: #6b7280;
  --bg: #ffffff;
  --bg-subtle: #f8f9fa;
  --radius: 8px;
  --shadow: 0 4px 24px rgba(0,0,0,0.08);
  --font-heading: '[Heading Font]', sans-serif;
  --font-body: '[Body Font]', sans-serif;
}

/* 2. Reset */
/* 3. Layout Utilities (container, grid, flex) */
/* 4. Components (nav, hero, cards, buttons, forms, footer) */
/* 5. Sections (industry-spezifische Sektionen) */
/* 6. Responsive (mobile-first, breakpoints: 768px, 1024px) */
/* 7. Animations (subtle, purpose-driven) */
```

---

### Navigation

```html
<nav> mit:
- Logo links (SVG / Bild / Text-Logo — aus Brief)
- Links Mitte/Rechts (Anker zu Sektionen)
- CTA Button rechts (Termin / Anfrage / Reservierung)
- Hamburger Menu für Mobile
- Position: sticky top, backdrop-blur bei Scroll
```

---

### Hero-Sektion

```html
- Headline: groß, prägnant, keyword-reich (H1)
- Subline: 1-2 Sätze USP — aus SLOGAN oder aus LEISTUNGEN abgeleitet
- 2 CTAs: Primary (Kontakt/Termin) + Secondary (Mehr erfahren)
- Visual: BILD_HERO wenn geliefert, sonst CSS-Gradient/Shapes
```

---

### Pflicht-Sektionen (alle Branchen)

1. **Hero** — Headline + Subline + CTAs
2. **Leistungen** — Card-Grid (3-6 Karten, jeweils Icon + Titel + 2 Sätze)
3. **Über uns** — Kurztext + Trust-Signals (Gründungsjahr, Mitarbeiter, etc.)
4. **Social Proof** — Kundenstimmen, Logos, Zahlen
5. **Kontakt** — Formular + echte Adresse + echte Telefon + echte Email + Google Maps Link
6. **Impressum** — vollständige gesetzliche Angaben (§5 TMG)
7. **Footer** — Links, Impressum-Anker, Copyright

> Branchenspezifische Zusatz-Sektionen: siehe Branchenprofil

---

### Impressum-Sektion (IMMER einbauen)

```html
<section id="impressum" class="impressum">
  <div class="container">
    <h2>Impressum</h2>
    
    <div class="impressum-grid">
      <div>
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          [FIRMENNAME]<br>
          [STRASSE HAUSNUMMER]<br>
          [PLZ ORT]
        </p>
        
        <h3>Vertreten durch</h3>
        <p>[GESCHÄFTSFÜHRER]</p>
        
        <h3>Kontakt</h3>
        <p>
          Telefon: <a href="tel:[TELEFON]">[TELEFON]</a><br>
          E-Mail: <a href="mailto:[EMAIL]">[EMAIL]</a>
        </p>
      </div>
      
      <div>
        <!-- Nur wenn HRB vorhanden: -->
        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.<br>
          Registergericht: [GERICHT aus HRB]<br>
          Registernummer: [HRB-NUMMER]
        </p>
        
        <!-- Nur wenn UST_ID vorhanden: -->
        <h3>Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br>
          [UST_ID]
        </p>
        
        <h3>Haftungsausschluss</h3>
        <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. 
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
        können wir jedoch keine Gewähr übernehmen.</p>
      </div>
    </div>
    
    <!-- Für reglementierte Berufe (Arzt, Anwalt, Steuerberater): -->
    <!-- <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3> -->
    <!-- <p>Berufsbezeichnung: [BERUF]<br>Zuständige Kammer: [KAMMER]</p> -->
  </div>
</section>
```

```css
.impressum {
  background: var(--bg-subtle);
  padding: 80px 0;
}
.impressum h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 48px;
}
.impressum h3 {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 24px 0 8px;
}
.impressum-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}
@media (max-width: 768px) {
  .impressum-grid { grid-template-columns: 1fr; gap: 32px; }
}
```

---

### Qualitätsregeln (CRITICAL)

**Typografie:**
- Display: `font-size: clamp(2.5rem, 5vw, 4.5rem)` — nie kleiner als 40px auf Desktop
- H2: `clamp(1.8rem, 3vw, 2.8rem)`
- Negative Letter-Spacing für Headlines: `letter-spacing: -0.02em`
- Line-Height Body: `1.7`
- Max Paragraph-Breite: `65ch`

**Layout:**
- Container: `max-width: 1200px; margin: 0 auto; padding: 0 24px`
- Sektionen: `padding: 80px 0` Desktop, `padding: 48px 0` Mobile
- CSS Grid für Karten, NIE `float`
- `min-height: 100dvh` für Hero (nicht `100vh` — iOS-Bug)

**Anti-Generic Rules:**
- NIE Inter als einzige Schrift
- NIE generische blaue Buttons (`#007bff`)
- NIE Box-Shadow überall
- NIE Emojis im Code
- JA zu: Starkem typografischen Kontrast, eigenem Charakter, klaren Whitespace-Rhythmen

**SEO Basics:**
- `<title>` mit Stadt + Branche + Firmenname
- Meta Description (160 Zeichen)
- H1 nur einmal
- Alt-Texte auf allen Bildern
- Schema.org LocalBusiness JSON-LD im `<head>` — mit echten Daten befüllt:

```json
{
  "@context": "https://schema.org",
  "@type": "[LocalBusiness | MedicalClinic | FoodEstablishment | ProfessionalService]",
  "name": "[FIRMENNAME]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STRASSE]",
    "addressLocality": "[ORT]",
    "postalCode": "[PLZ]",
    "addressCountry": "DE"
  },
  "telephone": "[TELEFON]",
  "email": "[EMAIL]",
  "url": ""
}
```

**Accessibility:**
- `lang="de"` auf `<html>`
- Kontrast WCAG AA (4.5:1 für Text)
- Focus-Styles sichtbar
- Alle Formularfelder mit `<label>`
- Skip-Link für Tastaturnavigation
- Telefonnummer überall als `<a href="tel:...">` — nie als reiner Text

---

### Animation & Motion System

**MOTION_INTENSITY Levels (definiert im Branchenprofil):**

| Level | Branche | Erlaubte Techniken |
|-------|---------|-------------------|
| 1–2 | Arztpraxis | Nur `opacity` transitions (0.3s ease), kein Autoplay |
| 3–4 | Mittelstand, Gastronomie Standard | Fade-up on scroll, Nav backdrop-blur |
| 5–6 | Gastronomie Premium, Agentur | Kinetic Type Reveal, Marquee Strip, Float-Animation |
| 7–8 | Agentur Premium, Premium Food | Scroll Scrub, 3D Mouse-Tilt, Lerp-Loops, Parallax Scale |

**Goldene Regel — IMMER:**
- Nur `transform` und `opacity` animieren — NIEMALS `width`, `height`, `top`, `left`, `margin`
- `will-change: transform` auf animierten Elementen
- Scroll-Listener immer `{ passive: true }`
- RAF (`requestAnimationFrame`) für JS-Animationen — kein `setInterval`
- `@media (prefers-reduced-motion: reduce)` am Ende des CSS-Blocks

**Scroll Reveal Pattern (MOTION_INTENSITY 3+):**
```css
.fade-up {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.fade-up.in { opacity: 1; transform: none; }
```
```javascript
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
```

**CSS Marquee Strip Pattern (MOTION_INTENSITY 5+) — Inhalte 2× duplizieren:**
```css
.marquee-track {
  display: inline-flex;
  animation: marqueeRun 24s linear infinite;
  will-change: transform;
}
@keyframes marqueeRun {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); } /* −50% weil Inhalt 2× dupliziert */
}
```

**Scroll-Scrub Pattern (MOTION_INTENSITY 7+) — kritische Regeln:**
- KEIN `isSeeking`-Flag — Browser ersetzen in-flight Seeks automatisch beim nächsten `currentTime`-Assignment; ein Flag blockiert neue Seeks → Video friert ein
- Geometry einmalig cachen: `outerTop = el.getBoundingClientRect().top + window.scrollY` — nie im Scroll-Handler
- Lerp für butterweichen Übergang: `currentProg += (target - currentProg) * 0.12` im RAF-Loop
- `video.pause()` nicht nach jedem Seek aufrufen — Video war nie am Spielen (kein `autoplay`)

**Reduced Motion Abschluss-Block (IMMER am Ende des `<style>`):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Schritt 5 — Ausgabe

Gib die komplette HTML-Datei aus — **kein Codeblock abgeschnitten, kein `[... rest of code ...]`**.

Danach kurze Zusammenfassung:
```markdown
## Website fertig: [Firmenname]

**Dateiname:** [firmenname-lowercase]-website.html
**Sektionen:** [Liste der enthaltenen Sektionen]
**Farbe:** [Primärfarbe HEX]
**Fonts:** [Heading] + [Body]

### Noch ausstehend (falls nicht geliefert):
- [ ] Logo-Datei hochladen und `<img src="...">` ersetzen
- [ ] Hero-Bild URL eintragen
- [ ] Datenschutzerklärung verlinken (separates Dokument nötig)
- [ ] Google Analytics / Tracking ergänzen (optional)
- [ ] Auf Hosting hochladen
```

> Wenn alle Daten geliefert wurden, ist die "Noch ausstehend"-Liste kurz oder leer.

---

## Schritt 6 — Varianten (optional)

Nach der ersten Version biete an:
1. **Farbvariante** — gleiche Struktur, andere Primärfarbe
2. **Dark Mode Version** — dunkler Hintergrund
3. **Erweiterung** — zusätzliche Sektion (Blog, Team, FAQ, Preise)
4. **Mehrsprachig** — DE + EN Version

---

## Angebotsstufen — Was du in Rechnung stellen kannst

Jede Stufe ist eine eigenständige Dienstleistung mit klarem Mehrwert für den Kunden.

| Tier | Skill | Typischer Kunde | Leistung | Preis-Range |
|------|-------|----------------|---------|-------------|
| **Standard** | `/web-factory` | Handwerker, Arztpraxis, lokale Gastronomie | Single-File HTML, Mobile-Responsive, Impressum, SEO-Basics | 1.000–2.500 € |
| **Premium** | `/web-factory` + MOTION_INTENSITY 7–8 | Premium-Restaurant, Boutique-Agentur, Mittelstand | Wie Standard + Scroll-Scrub Video, GSAP Hero, Magnetic Buttons, Lenis | 2.500–5.000 € |
| **Cinematic** | `/cinematic-web` + `/kling-prompts` | Luxus-Marken, Event-Locations, Kreativ-Studios | Awwwards-Niveau, Dark Cinematic, GSAP Timeline, Scramble Text, Kling 3.0 Video-Backgrounds | 5.000–12.000 € |

**Upgrade-Pfad:** Jeder Standard-Kunde kann später auf Premium oder Cinematic upgraden — die Basis-Struktur bleibt, die Animations-Schicht wird ausgetauscht.

---

## Cinematic Web Design (Premium-Tier)

Der Skill `/cinematic-web` ist die Premium-Variante der Web Factory — für Kunden die eine Awwwards-würdige Präsenz wollen statt einer soliden Unternehmenswebsite.

### Wann Cinematic statt Standard?

| Signal | Empfehlung |
|--------|-----------|
| Kunde sagt "hochwertig", "wie die großen Agenturen", "besonders" | → Cinematic |
| Premium-Restaurant, Winery, Luxury Hotel | → Cinematic (EMBER Archetype) |
| Kreativ-Agentur, Fotostudio, Architekturbüro | → Cinematic (VOID Archetype) |
| Produkt-Launch, Brand-Kampagne | → Cinematic (LUXE Archetype) |
| Lokales KMU mit normalem Budget | → Standard oder Premium |

### Was Cinematic liefert (über Standard hinaus)

- **Loader-Animation** — Firmenname dekodiert sich beim ersten Aufruf
- **Scramble Text Reveal** — Überschriften entstehen aus Zeichen-Chaos
- **Canvas Partikel** — Ambient Background-Partikel im Hero
- **Kinetic Marquee** — Endlos-Laufband mit Kunden/Leistungen
- **Stats Counter** — Zahlen zählen dramatisch hoch wenn sichtbar
- **Parallax Sections** — Tiefenwirkung beim Scrollen
- **Kling 3.0 Video-Backgrounds** — KI-generierte Cinematic Videos eingebettet

### Kling-Prompts Workflow (immer nach Cinematic)

Nach jeder Cinematic-Website → `/kling-prompts` aufrufen:
- **V1 Exterior** — außen, Architektur, Atmosphäre (10 Sek.)
- **V2 Interior** — innen, Produkt, Menschen (10 Sek.)
- **V3 Produkt/Food** — Nahaufnahme, Detail, Emotion (10 Sek.)

Die Videos werden als `<video autoplay muted loop playsinline>` in Scroll-Sektionen eingebettet.

### Branchen × Cinematic Archetype

| Branche | Archetype | Akzent | Display-Font |
|---------|-----------|--------|-------------|
| Premium-Restaurant / Bar | `EMBER` | Amber `#F5A523` | Fraunces (Serif) |
| Kreativ-Agentur / Studio | `VOID` | White/Lime | Clash Display |
| Kanzlei / Beratung / Tech | `FROST` | Ice-Blue | Geist |
| Luxury / Premium Produkt | `LUXE` | Gold `#C9A84C` | Cormorant Garamond |

→ Vollständige Implementierung: `raw/skills/cinematic-web/SKILL.md`

---

## Related Skills

- `/cinematic-web` — Awwwards-Niveau Single-File HTML (Premium-Tier dieser Factory)
- `/kling-prompts` — KI Video-Prompts für Cinematic-Website Backgrounds
- `/redesign-existing-projects` — bestehendes HTML auf Premium-Niveau bringen
- `/design-taste-frontend` — für React/Next.js Implementierung statt reinem HTML
- `/brand-guidelines` — Markenfarben zuerst definieren
- `/ux-copy` — Headlines und CTAs schärfen
- `/seo-audit` — SEO nach Fertigstellung prüfen
- `/pdf` — Angebots-PDF für den Kunden aus dem Brief

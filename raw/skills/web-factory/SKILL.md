---
name: web-factory
description: Generates complete, production-ready single-file HTML websites for specific industries. Use when building a website for a Mittelständisches Unternehmen, Arztpraxis, Gastronomie, or Agentur. Trigger with "baue website für [Branche]", "erstelle HTML für [Kunde]", "web-factory [Branche]", or any client website request. Outputs a fully styled, mobile-responsive, single HTML file with no build step required.
argument-hint: "<Branche> | <Firmenname> | <Dienstleistungen>"
---

# Web Factory

Generiert vollständige, produktionsreife Single-File HTML-Websites für mittelständische Unternehmen. Kein Build-Schritt, keine Abhängigkeiten außer Google Fonts CDN.

## Schritt 1 — Brief aufnehmen

Frage den User nach folgenden Infos (soweit nicht im Argument angegeben):

**Pflichtfelder:**
- `BRANCHE` — Mittelstand / Arztpraxis / Gastronomie / Agentur / Sonstige
- `FIRMENNAME` — z.B. "Müller Metallbau GmbH"
- `LEISTUNGEN` — 3–6 Kernleistungen, kommagetrennt
- `STADT` — für lokales SEO und Footer

**Optional (verbessert die Qualität erheblich):**
- `SLOGAN` — ein prägnanter Satz
- `FARBE` — Primärfarbe als Hex oder Name (sonst: Branchendefault)
- `TELEFON` + `EMAIL`
- `BESONDERHEITEN` — USPs, Zertifikate, Auszeichnungen
- `TONE` — seriös / modern / warm / kreativ (sonst: Branchendefault)

> Wenn Pflichtfelder fehlen, stelle sie als nummerierte Liste. Sonst direkt zur Generierung.

---

## Schritt 2 — Branchenprofil laden

Lade das passende Branchenprofil aus dem `industries/` Verzeichnis:

| BRANCHE | Profil-Datei |
|---------|-------------|
| Mittelstand / KMU / Handwerk / Industrie | `industries/mittelstand.md` |
| Arztpraxis / Zahnarzt / Therapeut / Klinik | `industries/arztpraxis.md` |
| Restaurant / Café / Bar / Catering | `industries/gastronomie.md` |
| Agentur / Beratung / Kreativ / Digital | `industries/agentur.md` |
| Unbekannt | Verwende Mittelstand als Fallback |

Das Profil definiert: Sektionsreihenfolge, Design-DNA, Farbpalette, Typografie, Ton.

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

### Technische Anforderungen

```html
<!DOCTYPE html>
<html lang="de">
```

- **Fonts:** Google Fonts CDN (kein Download nötig)
- **Icons:** Phosphor Icons CDN (`https://unpkg.com/@phosphor-icons/web`)
- **Styling:** Ausschließlich `<style>` Block im `<head>` — kein Tailwind CDN (Performance)
- **JS:** Minimal Vanilla JS im `<script>` Tag am Ende — NUR für: Mobile Menu Toggle, Smooth Scroll, ggf. Scroll-Animationen
- **Kein Framework, kein Build-Schritt, keine lokalen Abhängigkeiten**

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

### Navigation

```html
<nav> mit:
- Logo links (Firmenname + ggf. Icon)
- Links Mitte/Rechts (Anker zu Sektionen)
- CTA Button rechts (Termin / Anfrage / Reservierung)
- Hamburger Menu für Mobile
- Position: sticky top, backdrop-blur bei Scroll
```

### Hero-Sektion

```html
- Headline: groß, prägnant, keyword-reich (H1)
- Subline: 1-2 Sätze USP
- 2 CTAs: Primary (Kontakt/Termin) + Secondary (Mehr erfahren)
- Visuelles Element: CSS-generiert (gradient, shapes) ODER Placeholder-Image mit <img> und descriptivem alt=""
- Kein Stock-Foto-Placeholder-Text — stattdessen semantisches CSS-Visual
```

### Pflicht-Sektionen (alle Branchen)

1. **Hero** — Headline + Subline + CTAs
2. **Leistungen** — Card-Grid (3-6 Karten, jeweils Icon + Titel + 2 Sätze)
3. **Über uns** — Kurztext + ein Trust-Signal (Jahre, Kunden, Zertifikate)
4. **Vertrauen/Social Proof** — Kundenstimmen (3 Beispiel-Quotes), Logos, oder Zahlen
5. **Kontakt** — Formular + Adresse + Telefon + Email + Map-Link
6. **Footer** — Links, Impressum-Verweis, Copyright

> Branchenspezifische Zusatz-Sektionen: siehe Branchenprofil

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

**Anti-Generic Rules (aus taste-skill):**
- NIE Inter als einzige Schrift
- NIE generische blaue Buttons (`#007bff`)
- NIE Box-Shadow überall (`box-shadow: 0 2px 4px rgba(0,0,0,0.1)`)
- NIE Emojis im Code
- JA zu: Starkem typografischen Kontrast, eigenem Charakter, klaren Whitespace-Rhythmen

**SEO Basics:**
- `<title>` mit Stadt + Branche + Firmenname
- Meta Description (160 Zeichen)
- H1 nur einmal
- Alt-Texte auf allen Bildern
- Schema.org LocalBusiness JSON-LD im `<head>`

**Accessibility:**
- `lang="de"` auf `<html>`
- Kontrast WCAG AA (4.5:1 für Text)
- Focus-Styles sichtbar
- Alle Formularfelder mit `<label>`
- Skip-Link für Tastaturnavigation

---

## Schritt 5 — Ausgabe

Gib die komplette HTML-Datei aus — **kein Codeblock abgeschnitten, kein `[... rest of code ...]`**.

Danach:
```markdown
## Website fertig: [Firmenname]

**Dateiname:** [firmenname-lowercase]-website.html
**Sektionen:** [Liste der enthaltenen Sektionen]
**Farbe:** [Primärfarbe HEX]
**Fonts:** [Heading] + [Body]

### Anpassungen:
- [ ] Echte Bilder einfügen (Platzhalter sind markiert mit `<!-- BILD: ... -->`)
- [ ] Telefon/Email bestätigen
- [ ] Impressum + Datenschutz-Seiten verlinken
- [ ] Google Analytics / Tracking ergänzen (optional)
- [ ] Auf Hosting hochladen
```

---

## Schritt 6 — Varianten (optional)

Nach der ersten Version biete an:
1. **Farbvariante** — gleiche Struktur, andere Primärfarbe
2. **Dark Mode Version** — dunkler Hintergrund
3. **Zweite Branchenvariante** — wenn Kunde in mehrere Branchen passt
4. **Erweiterung** — zusätzliche Sektion (Blog, Team, FAQ, Preise)

---

## Related Skills

- `/redesign-existing-projects` — bestehendes HTML auf Premium-Niveau bringen
- `/design-taste-frontend` — für React/Next.js Implementierung statt reinem HTML
- `/brand-guidelines` — Markenfarben zuerst definieren
- `/ux-copy` — Headlines und CTAs schärfen
- `/seo-audit` — SEO nach Fertigstellung prüfen
- `/pdf` — Angebots-PDF für den Kunden aus dem Brief

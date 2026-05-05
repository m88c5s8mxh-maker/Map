# Branchenprofil: Mittelstand / KMU / Handwerk

Gilt für: Metallbau, Maschinenbau, Handwerksbetriebe, Bauunternehmen, Industrieservices, IT-Dienstleister, Steuerberater, Rechtsanwälte, Unternehmensberatung, alle B2B-orientierten KMUs.

---

## Design-DNA

**Kernbotschaft:** Zuverlässigkeit, Kompetenz, Regionalität, Tradition mit Modernität.

**Stil-Parameter:**
- DESIGN_VARIANCE: 4 (strukturiert, nicht chaotisch)
- MOTION_INTENSITY: 3 (dezent, professionell)
- VISUAL_DENSITY: 5 (informationsreich, aber atmend)

**Tonalität:** Direkt, seriös, kompetent. Keine Marketingphrasen. Sprich Entscheider an.

---

## Farb-Defaults

```css
:root {
  --primary: #1e3a5f;        /* Tiefes Navy — Vertrauen, Beständigkeit */
  --primary-dark: #142a47;
  --secondary: #c9a84c;      /* Gold-Akzent — Qualität, Wert */
  --text: #1a1a2e;
  --text-muted: #5a6472;
  --bg: #ffffff;
  --bg-subtle: #f5f7fa;
  --bg-dark: #1e3a5f;
  --border: #e2e8f0;
}
```

**Alternativen nach Sub-Branche:**
- Handwerk/Bau: `--primary: #c0392b` (Kraft-Rot) oder `--primary: #2c3e50` (Anthrazit)
- IT/Tech: `--primary: #2563eb` (Tech-Blau)
- Rechtsanwalt/Steuerberater: `--primary: #1a1a2e` (Dunkelblau-Schwarz) + `--secondary: #8b7355` (Warm Gold)

---

## Typografie

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

--font-heading: 'Outfit', sans-serif;
--font-body: 'Inter', sans-serif;
```

---

## Sektionsreihenfolge

1. **Navigation** — Logo + Links + "Anfrage stellen" CTA Button
2. **Hero** — Starke Headline + Subline + 2 CTAs + Trust-Badge (Seit GRÜNDUNGSJAHR / Zertifikat)
3. **Leistungen** — 3–6 Karten (Icon + Titel + Kurzbeschreibung)
4. **Über uns** — Firmengeschichte aus GRÜNDUNGSJAHR, Werte, Team
5. **Zahlen & Fakten** — Aus Brief: GRÜNDUNGSJAHR → Jahre, MITARBEITERZAHL, Projektanzahl aus REFERENZKUNDEN
6. **Referenzen / Projekte** — Aus REFERENZKUNDEN: 3 Beispiele als Cards
7. **Zertifikate & Partner** — Aus ZERTIFIKATE: als Badge-Liste oder Logo-Leiste
8. **Kontakt** — Formular + echte Adresse + Karte-Link + Ansprechpartner
9. **Impressum** — Vollständig (§5 TMG)
10. **Footer** — Schnelllinks, Rechtliches

---

## Zahlen-Sektion (aus Brief-Daten befüllt)

```html
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat reveal">
        <span class="stat-number">[aktuelles Jahr - GRÜNDUNGSJAHR]</span>
        <span class="stat-label">Jahre Erfahrung</span>
      </div>
      <div class="stat reveal">
        <span class="stat-number">[MITARBEITERZAHL]</span>
        <span class="stat-label">Mitarbeitende</span>
      </div>
      <!-- Weiteres aus BESONDERHEITEN wenn vorhanden -->
    </div>
  </div>
</section>
```

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  text-align: center;
}
.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 8px;
}
.stat-label {
  font-family: var(--font-body);
  color: var(--text-muted);
  font-size: 0.95rem;
}
```

---

## Referenzen-Rendering (aus REFERENZKUNDEN)

Eingabe: Freitext wie "BMW Group München — Präzisionsfertigung für Motorenteile" oder einfach Kundennamen.

```html
<section id="referenzen" class="references-section">
  <div class="container">
    <h2>Unsere Referenzen</h2>
    <div class="references-grid">
      <!-- Pro Referenz-Eintrag: -->
      <div class="reference-card reveal">
        <div class="reference-icon">
          <i class="ph ph-buildings"></i>
        </div>
        <div>
          <h3>[Kundenname]</h3>
          <p>[Projektbeschreibung — 1 Satz]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Zertifikate-Rendering (aus ZERTIFIKATE)

```html
<section class="certifications-section">
  <div class="container">
    <p class="certs-label">Zertifizierungen & Mitgliedschaften</p>
    <div class="certs-list">
      <!-- Pro Zertifikat aus ZERTIFIKATE: -->
      <div class="cert-badge">
        <i class="ph ph-seal-check"></i>
        <span>[Zertifikat — z.B. "ISO 9001:2015"]</span>
      </div>
    </div>
  </div>
</section>
```

```css
.certs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}
.cert-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
}
.cert-badge i {
  color: var(--secondary);
}
```

---

## Hero-Formeln

Gute Headline-Strukturen für Mittelstand:
- `[Leistung] für [Zielgruppe] in [STADT]` — "Präzisionsfertigung für die Automobilindustrie in Bayern"
- `Ihr Partner für [Kernleistung]` — "Ihr Partner für nachhaltigen Metallbau"
- `[Adjektiv] [Leistung] seit [GRÜNDUNGSJAHR]` — "Zuverlässige Gebäudetechnik seit 1992"

Trust-Badge im Hero: `"Seit [GRÜNDUNGSJAHR]"` oder erstes Zertifikat aus ZERTIFIKATE.

Subline: Ein konkreter Nutzen, keine Buzzwords — aus LEISTUNGEN ableiten.

---

## Kontaktformular

```html
<form class="contact-form">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" required>
  </div>
  <div class="form-group">
    <label for="email">E-Mail *</label>
    <input type="email" id="email" required>
  </div>
  <div class="form-group">
    <label for="phone">Telefon</label>
    <input type="tel" id="phone">
  </div>
  <div class="form-group">
    <label for="subject">Betreff</label>
    <select id="subject">
      <option>Anfrage</option>
      <option>Termin</option>
      <option>Sonstiges</option>
    </select>
  </div>
  <div class="form-group">
    <label for="message">Nachricht *</label>
    <textarea id="message" rows="4" required></textarea>
  </div>
  <button type="submit" class="btn-primary">Anfrage senden →</button>
</form>
```

---

## Häufige Fehler vermeiden

- NICHT: "Wir sind Ihr kompetenter Partner für..." (Floskel)
- STATTDESSEN: Spezifische Leistung + messbaren Nutzen aus LEISTUNGEN
- NICHT: Zu viele Farben, zu viel Bewegung
- STATTDESSEN: Ruhig, strukturiert, Qualität durch Reduktion
- NICHT: Gründungsjahr verstecken
- STATTDESSEN: Prominente Trust-Badges — "Seit [GRÜNDUNGSJAHR]" im Hero sichtbar

---

## Schema.org für Mittelstand

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[FIRMENNAME]",
  "description": "[aus LEISTUNGEN generiert]",
  "foundingDate": "[GRÜNDUNGSJAHR]",
  "numberOfEmployees": "[MITARBEITERZAHL]",
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

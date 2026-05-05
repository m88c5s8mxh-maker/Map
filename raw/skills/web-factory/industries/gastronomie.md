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

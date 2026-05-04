# Branchenprofil: Gastronomie

Gilt für: Restaurants, Cafés, Bars, Bistros, Imbisse, Catering-Services, Bäckereien, Food Trucks, Weinbars, Brauereien.

---

## Design-DNA

**Kernbotschaft:** Appetit wecken, Atmosphäre transportieren, Reservierung erleichtern. Der Besucher soll die Qualität und das Ambiente schon durch die Website spüren.

**Stil-Parameter:**
- DESIGN_VARIANCE: 6 (charakter-voll, individuell)
- MOTION_INTENSITY: 4 (dezente, appetitliche Animationen)
- VISUAL_DENSITY: 5 (Bilder spielen große Rolle — Platzhalter groß dimensionieren)

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
  --accent: #e8c547;         /* Gelb-Gold für Highlights */
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

1. **Navigation** — Logo + Links + "Reservierung" CTA (bei Restaurant IMMER primary button)
2. **Hero** — Großes atmosphärisches Bild-Placeholder + Headline + Öffnungszeiten-Quickinfo + Reservierungs-CTA
3. **Über uns / Unser Konzept** — Story hinter dem Lokal, Küchenchef, Philosophie
4. **Speisekarte-Preview** — 3–6 Highlight-Gerichte mit Placeholder-Bild + Preis + Beschreibung
5. **Atmosphäre / Galerie** — Bild-Grid (Placeholder, 6 Felder in Masonry oder Grid)
6. **Öffnungszeiten & Angebote** — Wochentage + Zeiten, ggf. Happy Hour, Brunch, Events
7. **Reservierung** — Formular (Datum, Zeit, Personen, Name, Telefon) ODER Link zu Reservierungssystem
8. **Standort** — Adresse + Google Maps Link + Anfahrtsbeschreibung + Parkplatz-Info
9. **Footer** — Öffnungszeiten, Social Media, Allergen-Hinweis, Impressum

---

## KRITISCHE Elemente

### Hero für Gastronomie

```html
<!-- Hero MUSS sein: -->
<!-- 1. Großes Bild (min. 70vh) — Placeholder sehr groß dimensionieren -->
<!-- 2. Overlay mit Gradient für Textlesbarkeit -->
<!-- 3. Öffnungszeiten TODAY sichtbar (JS: aktuellen Tag hervorheben) -->
<!-- 4. "JETZT RESERVIEREN" — prominentester CTA auf der ganzen Seite -->
```

### Speisekarte-Sektion

```html
<!-- Keine vollständige Karte einbetten — zu viel Pflegeaufwand -->
<!-- Stattdessen: 3-6 Signature Dishes als Showcase -->
<!-- ODER: "Vollständige Karte als PDF" Link -->
<!-- Allergene: Hinweis auf Nachfrage beim Personal -->
```

**Dish Card Struktur:**
```
Bild-Placeholder (16:9 oder quadratisch)
Gerichtsname (Playfair Display, italic)
Kurzbeschreibung (1 Satz, Zutaten nennen)
Preis (rechtsbündig, --secondary)
Optional: Vegetarisch/Vegan/Scharf Icons
```

### Reservierungsformular

```html
<form>
  <input type="date"> <!-- Datum -->
  <select> <!-- Uhrzeit: 12:00, 12:30, 13:00... -->
  <input type="number" min="1" max="20"> <!-- Personenanzahl -->
  <input type="text"> <!-- Name -->
  <input type="tel"> <!-- Telefon -->
  <input type="email"> <!-- E-Mail -->
  <textarea> <!-- Besondere Wünsche -->
  <button>Reservierung anfragen</button>
</form>
<!-- Hinweis: Nur Anfrage, Bestätigung per Telefon/Email -->
```

---

## Atmosphären-Design

Für Gastronomie gilt: Das Layout IST das Branding.

**Dunkle Eleganz (Fine Dining, Bar):**
```css
background: var(--bg-dark);
color: #f5ede3;
/* Goldene Akzente, serifige Headlines, viel Abstand */
```

**Warmes Tageslicht (Café, Bistro):**
```css
background: var(--bg-subtle); /* Creme */
/* Natürliche Texturen via CSS (subtle grain), organische Formen */
```

**Lebhaft & Modern (Fast Casual, Food Truck):**
```css
/* Starke Primärfarbe als Vollbild-Background für Hero */
/* Hoher Kontrast, Bold Typography, verspielt */
```

---

## Vertrauens-Elemente

- Bewertungen: Google Maps Sterne (z.B. "4.8 ★ auf Google")
- Auszeichnungen: Michelin, Gault-Millau, lokale Zeitungen
- Medien-Erwähnungen wenn vorhanden
- "Seit [Jahr] in [Stadt]"
- Social Proof: Instagram-Feed-Vorschau (Placeholder)

---

## Mobile-First Pflicht

80%+ der Restaurant-Besuche kommen vom Smartphone:
```
- Telefonnummer als tap-to-call (überall)
- Reservierungs-Button IMMER im Viewport
- Karte zum Antippen für Navigation-App
- Menü als PDF abrufbar (kein langer Scroll)
- Öffnungszeiten auf Homepage sichtbar ohne Scroll
```

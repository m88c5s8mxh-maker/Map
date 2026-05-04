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
2. **Hero** — Starke Headline + Subline + 2 CTAs + Trust-Badge (z.B. "Seit 1987", "TÜV-zertifiziert")
3. **Leistungen** — 3–6 Karten (Icon + Titel + Kurzbeschreibung)
4. **Über uns / Warum wir** — Firmengeschichte, Werte, Team-Foto Placeholder
5. **Zahlen & Fakten** — 3–4 Kennzahlen (Jahre Erfahrung, Mitarbeiter, Projekte, Kunden)
6. **Referenzen / Projekte** — 3 Beispiel-Projekte oder Kundenstimmen
7. **Zertifikate & Partner** — Logo-Leiste (Platzhalter)
8. **Kontakt** — Formular + Adresse + Karte-Link + Ansprechpartner
9. **Footer** — Schnelllinks, Rechtliches, Social Media

---

## Hero-Formeln

Gute Headline-Strukturen für Mittelstand:
- `[Leistung] für [Zielgruppe] in [Region]` — "Präzisionsfertigung für die Automobilindustrie in Bayern"
- `Ihr Partner für [Kernleistung]` — "Ihr Partner für nachhaltigen Metallbau"
- `[Adjektiv] [Leistung] seit [Jahr]` — "Zuverlässige Gebäudetechnik seit 1992"

Subline (immer): Ein konkreter Nutzen, keine Buzzwords.

---

## Komponenten-Spezifika

**Leistungs-Karten:**
```
Icon (Phosphor, 32px, --primary) 
Titel (H3, Outfit SemiBold)
2 Sätze Beschreibung
Optional: Link "Mehr erfahren →"
```

**Zahlen-Sektion:**
```
Großes Numeral (Outfit 800, clamp(3rem, 6vw, 6rem), --primary)
Beschriftung darunter (Inter, --text-muted)
4er Grid, zentriert
```

**Kundenstimmen:**
```
Zitat-Text (kursiv, --text)
Name + Firma + Titel
Optional: Firmenlogo
```

**Kontakt-Formular Felder:**
- Name (required)
- E-Mail (required)  
- Telefon (optional)
- Betreff (Select: Anfrage / Termin / Sonstiges)
- Nachricht (Textarea, 4 rows)
- Submit: "Anfrage senden →"

---

## Vertrauens-Elemente (immer einbauen)

- Gründungsjahr prominent ("Seit 1987")
- Mitarbeiterzahl oder Projektanzahl
- Regionaler Bezug ("in Bayern ansässig", "bundesweit tätig")
- Zertifikate (ISO, TÜV, Innungsmitglied)
- Konkrete Kundenlogos oder -namen wenn vorhanden

---

## Häufige Fehler vermeiden

- NICHT: "Wir sind Ihr kompetenter Partner für..." (Floskel)
- STATTDESSEN: Spezifische Leistung + messbaren Nutzen nennen
- NICHT: Generische Stock-Foto-Ästhetik
- STATTDESSEN: Industrielle Ästhetik, technische Präzision im Layout
- NICHT: Zu viele Farben, zu viel Bewegung
- STATTDESSEN: Ruhig, strukturiert, Qualität durch Reduktion

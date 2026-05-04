# Branchenprofil: Arztpraxis / Medizin

Gilt für: Arztpraxen (Allgemein, Fachärzte), Zahnarztpraxen, Psychotherapeuten, Physiotherapeuten, Heilpraktiker, MVZ, Kliniken, Gesundheitszentren.

---

## Design-DNA

**Kernbotschaft:** Vertrauen, Kompetenz, Fürsorge, Zugänglichkeit. Der Patient soll sich sicher und gut aufgehoben fühlen.

**Stil-Parameter:**
- DESIGN_VARIANCE: 3 (ruhig, vorhersehbar — Patienten brauchen Orientierung)
- MOTION_INTENSITY: 2 (minimal — keine ablenkenden Animationen)
- VISUAL_DENSITY: 3 (übersichtlich, viel Weißraum)

**Tonalität:** Einfühlsam, klar, vertrauenswürdig. Medizinisch korrekt, aber nicht kalt. Patienten ansprechen, nicht Fachkollegen.

---

## Farb-Defaults

```css
:root {
  --primary: #2e7d9a;        /* Beruhigendes Teal-Blau */
  --primary-dark: #1e5f78;
  --secondary: #52b788;      /* Frisches Grün — Gesundheit, Wachstum */
  --text: #1f2937;
  --text-muted: #6b7280;
  --bg: #ffffff;
  --bg-subtle: #f0f9ff;      /* Sehr helles Blau — sauber, steril */
  --border: #e0f2fe;
  --success: #16a34a;
  --warm: #f8f5f0;           /* Warmes Weiß für persönliche Sektionen */
}
```

**Sub-Branche Varianten:**
- Zahnarzt: `--primary: #0891b2` (helleres Blau) + `--bg-subtle: #f0fdfa`
- Psychotherapeut: `--primary: #7c3aed` (sanftes Violett) + warme Töne
- Physiotherapeut: `--primary: #059669` (Bewegungs-Grün)
- Heilpraktiker: `--primary: #92400e` (Erde) + organische Töne

---

## Typografie

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Lora:wght@400;500&display=swap');

--font-heading: 'Plus Jakarta Sans', sans-serif;
--font-body: 'Plus Jakarta Sans', sans-serif;
/* Lora für Zitate und persönliche Texte: font-family: 'Lora', serif; */
```

---

## Sektionsreihenfolge

1. **Navigation** — Logo + Praxisname + "Termin vereinbaren" CTA (prominent!)
2. **Hero** — Headline (patientenorientiert) + Subline + "Termin buchen" + "Mehr erfahren"
3. **Schnellinfos-Banner** — Sprechzeiten + Telefon + Notfall-Info (KRITISCH: sehr prominent)
4. **Leistungen** — Behandlungsspektrum als Card-Grid (Icon + Titel + 1 Satz)
5. **Team / Über uns** — Arzt-Portraits (Placeholder), Qualifikationen, persönliche Note
6. **Patienteninformationen** — FAQ oder Info-Karten (Erstbesuch, Versicherung, Parkplatz)
7. **Stimmen** — Patientenbewertungen (mit Hinweis: "Bewertet auf Google/Jameda")
8. **Termin & Kontakt** — Online-Terminbuchung-Button + Adresse + Karte + Anfahrt
9. **Footer** — Öffnungszeiten, Notfallkontakt, Rechtliches

---

## KRITISCHE Sektionen (nicht weglassen)

### Schnellinfos-Banner (nach Hero, IMMER)

```html
<section class="quick-info-banner">
  <!-- Sprechzeiten: Mo-Fr 8-18 Uhr, Do bis 20 Uhr -->
  <!-- Telefon: [Nummer] — klickbar auf Mobile! -->
  <!-- Termin online buchen: Button -->
  <!-- Notfall-Info falls relevant -->
</section>
```

**Warum:** Patienten suchen sofort nach Erreichbarkeit. Diese Info muss ohne Scrollen sichtbar sein.

### Termin-CTA (überall wiederholen)

```html
<a href="tel:[nummer]" class="btn-primary">Termin vereinbaren</a>
```

Auf Mobile: `tel:`-Link für direkten Anruf. Auf Desktop: Link zu Formular oder Online-Buchung.

---

## Komponenten-Spezifika

**Team-Karten:**
```
Kreisförmiges Foto-Placeholder (mit initialen oder Icon)
Dr. [Name] (H3)
Fachrichtung / Titel
Kurz-Bio (2 Sätze)
Spezialgebiete als Tags
```

**Leistungs-Karten (Medical):**
```
Medical Icon (Phosphor: Heart, FirstAid, Stethoscope, etc.)
Behandlungsname
1 erklärende Satz (für Patienten, nicht Ärzte)
Optional: "Mehr erfahren" Link
```

**FAQ-Sektion:**
```html
<details> / <summary> Accordion-Stil
Fragen wie: "Was sollte ich zum Erstbesuch mitbringen?"
"Welche Krankenkassen werden akzeptiert?"
"Wie läuft eine Untersuchung ab?"
```

**Sprechzeiten-Tabelle:**
```
Wochentage + Zeiten in klarer Tabelle
Mittagspause wenn vorhanden
"Termine nur nach Vereinbarung" wenn relevant
Farbliche Hervorhebung des aktuellen Tages (JS)
```

---

## Accessibility (bei Arztpraxis besonders wichtig)

- Größere Schrift als normal: Body min. `17px`
- Sehr hoher Kontrast (WCAG AAA anstreben: 7:1)
- Klare Navigation, keine versteckten Menüs
- Telefonnummer überall als `<a href="tel:...">`
- Keine Autoplay-Animationen (Epilepsie)
- Focus-Outline sehr deutlich

---

## Vertrauens-Elemente

- Approbation / Facharzt-Zertifizierung nennen
- Kassenärztliche Zulassung (GKV + PKV)
- Bewertungen (Google, Jameda) einbetten oder verlinken
- Mitgliedschaften (Ärztekammer, Fachgesellschaften)
- Ausbildung + Weiterbildungen

---

## Datenschutz-Hinweise (im Code kommentieren)

```html
<!-- HINWEIS: Online-Kontaktformular benötigt DSGVO-konformes Backend -->
<!-- Keine Patientendaten im Frontend-Code speichern -->
<!-- Cookie-Banner nötig wenn Analytics -->
<!-- Impressum + Datenschutzerklärung PFLICHT -->
```

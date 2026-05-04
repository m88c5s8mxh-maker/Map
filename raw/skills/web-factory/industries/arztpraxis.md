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
/* Lora für Zitate und persönliche Texte */
```

---

## Sektionsreihenfolge

1. **Navigation** — Logo + Praxisname + "Termin vereinbaren" CTA (prominent!)
2. **Hero** — Headline (patientenorientiert) + Subline + "Termin buchen" + "Mehr erfahren"
3. **Schnellinfos-Banner** — Sprechzeiten + Telefon + Notfall-Info (KRITISCH — direkt aus SPRECHZEITEN-Daten)
4. **Leistungen** — Behandlungsspektrum als Card-Grid (Icon + Titel + 1 Satz)
5. **Team** — Arzt-Portraits aus TEAM-Daten, Qualifikationen, persönliche Note
6. **Patienteninformationen** — FAQ (Erstbesuch, Versicherung, Parkplatz)
7. **Stimmen** — Patientenbewertungen
8. **Termin & Kontakt** — Adresse + Karte + Anfahrt + Kontaktformular
9. **Impressum** — Vollständig (§5 TMG + Berufsangaben)
10. **Footer** — Sprechzeiten, Notfallkontakt, Impressum-Link

---

## Schnellinfos-Banner (IMMER direkt nach Hero)

Dieser Banner wird aus SPRECHZEITEN-Daten befüllt — nie leer lassen.

```html
<section class="quick-info-banner">
  <div class="container">
    <div class="quick-info-grid">
      <div class="quick-info-item">
        <i class="ph ph-clock"></i>
        <div>
          <strong>Sprechzeiten heute</strong>
          <span id="today-hours">[JS ermittelt aktuellen Tag]</span>
        </div>
      </div>
      <div class="quick-info-item">
        <i class="ph ph-phone"></i>
        <div>
          <strong>Telefon</strong>
          <a href="tel:[TELEFON]">[TELEFON]</a>
        </div>
      </div>
      <div class="quick-info-item">
        <i class="ph ph-calendar-plus"></i>
        <a href="tel:[TELEFON]" class="btn-primary btn-sm">Termin vereinbaren</a>
      </div>
      <!-- Nur wenn Kassenart relevant: -->
      <div class="quick-info-item">
        <i class="ph ph-identification-card"></i>
        <div>
          <strong>Kasse</strong>
          <span>[KASSENARTEN]</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

```javascript
// Sprechzeiten für heute ermitteln
const sprechzeiten = {
  1: "[Montag-Zeiten aus Brief]",
  2: "[Dienstag-Zeiten aus Brief]",
  3: "[Mittwoch-Zeiten aus Brief]",
  4: "[Donnerstag-Zeiten aus Brief]",
  5: "[Freitag-Zeiten aus Brief]",
  6: "Geschlossen",
  0: "Geschlossen"
};
const today = new Date().getDay();
document.getElementById('today-hours').textContent = sprechzeiten[today] || 'Bitte anrufen';
```

---

## Team-Rendering (aus TEAM-Daten)

Eingabe-Format: `Dr. Vorname Nachname | Titel | Kurzbio`

```html
<section id="team" class="team-section">
  <div class="container">
    <h2>Ihr Team</h2>
    <div class="team-grid">
      <!-- Pro Person aus TEAM-Daten: -->
      <div class="team-card">
        <!-- Kreisförmiger Foto-Placeholder mit Initiale -->
        <div class="team-avatar">
          <div class="avatar-placeholder">[Initialen — z.B. "MK"]</div>
          <!-- Oder wenn Foto-URL geliefert: <img src="[URL]" alt="[Name]"> -->
        </div>
        <div class="team-info">
          <h3>[Dr. Vorname Nachname]</h3>
          <p class="team-title">[Titel / Fachrichtung]</p>
          <p class="team-bio">[Kurzbio]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}
.team-avatar {
  margin-bottom: 20px;
}
.avatar-placeholder {
  width: 96px; height: 96px;
  border-radius: 50%;
  background: var(--bg-subtle);
  border: 3px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}
.team-title {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}
```

---

## Sprechzeiten-Tabelle (vollständig)

```html
<div class="hours-table">
  <!-- Für jeden Tag aus SPRECHZEITEN generiert: -->
  <div class="hours-row" data-day="[0-6]">
    <span class="day">[Wochentag]</span>
    <span class="time">[Zeiten oder "Geschlossen"]</span>
  </div>
</div>
```

---

## Impressum für reglementierte Berufe

Arztpraxis, Zahnarzt, Physiotherapeut brauchen erweiterte Impressum-Angaben:

```html
<!-- Zusatz zu Standard-Impressum: -->
<h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
<p>
  Berufsbezeichnung: [FACHRICHTUNG — z.B. "Fachärztin für Allgemeinmedizin"]<br>
  Zuständige Ärztekammer: [Ärztekammer [Bundesland]]<br>
  Berufsordnung: Berufsordnung für die Ärztinnen und Ärzte in [Bundesland]
</p>

<h3>Kassenärztliche Zulassung</h3>
<p>
  [KASSENARTEN — z.B. "Zugelassen für gesetzlich und privat Versicherte"]<br>
  Zuständige KV: Kassenärztliche Vereinigung [Bundesland]
</p>
```

---

## Accessibility (bei Arztpraxis besonders wichtig)

- Größere Schrift: Body min. `17px`
- WCAG AAA anstreben (7:1 Kontrast)
- Klare Navigation, keine versteckten Menüs
- Telefonnummer überall als `<a href="tel:...">`
- Keine Autoplay-Animationen (Epilepsie)
- Focus-Outline sehr deutlich

---

## Datenschutz-Kommentare im Code

```html
<!-- HINWEIS: Online-Kontaktformular benötigt DSGVO-konformes Backend -->
<!-- Keine Patientendaten im Frontend-Code speichern -->
<!-- Cookie-Banner nötig wenn Analytics -->
<!-- Impressum + Datenschutzerklärung PFLICHT -->
<!-- Für Terminbuchung: separates DSGVO-konformes System empfohlen (Doctolib, etc.) -->
```

---

## Vertrauens-Elemente

- Approbation / Facharzt-Zertifizierung nennen (aus BESONDERHEITEN)
- GKV + PKV Zulassung (aus KASSENARTEN)
- Bewertungen (Google, Jameda) — Sternanzahl direkt nennen
- Mitgliedschaften (Ärztekammer, Fachgesellschaften)
- Weiterbildungen aus TEAM-Daten

---

## Schema.org für Arztpraxis

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "[FIRMENNAME]",
  "medicalSpecialty": "[FACHRICHTUNG]",
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

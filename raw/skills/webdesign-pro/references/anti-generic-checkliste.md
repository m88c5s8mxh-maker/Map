# Anti-Generic-Checkliste ("0815"-Muster vermeiden)

Diese Liste beschreibt die Standardlösungen, zu denen Sprachmodelle beim Websitebau ohne
Gegensteuerung fast immer greifen — und was stattdessen zu tun ist. Vor dem Bauen (Schritt 2)
und beim visuellen Review der Screenshots (Schritt 5) gegenprüfen.

## Typografie

- **Vermeiden**: Nur Inter/Poppins/Roboto ohne jede Differenzierung; eine einzige
  Schriftgröße für alle Fließtexte; Überschriften nur durch "fett + etwas größer" markiert.
- **Stattdessen**: Ein bewusstes Font-Pairing (z.B. eine markante Headline-Schrift + eine
  neutrale Text-Schrift), klare Skalenstufen (z.B. 1.25–1.5er Ratio), großzügige
  Zeilenhöhen im Fließtext (1.5–1.7).

## Farbe & Hintergrund

- **Vermeiden**: Lila-zu-Blau- oder Pink-zu-Orange-Gradient-Hero als Standard-Hintergrund;
  überall derselbe helle Grauton (#f9fafb-Ästhetik) ohne Kontraststufen; reines
  Schwarz/Weiß ohne Zwischentöne.
- **Stattdessen**: Eine begrenzte, bewusst gewählte Palette (siehe Branding-/
  Farbanalyse-Skill, falls installiert) mit klar erkennbarer Akzentfarbe; Sektionen durch
  echte Farbwechsel oder Textur statt nur durch Weißraum trennen.

## Layout

- **Vermeiden**: Alles zentriert und symmetrisch; dieselbe 3-Spalten-Icon-Grid-Struktur für
  praktisch jede Sektion (Features, Team, Testimonials, FAQ); Hero immer
  Headline-Sub-Headline-zwei-Buttons-Bild in exakt dieser Reihenfolge.
- **Stattdessen**: Asymmetrische/editoriale Layouts, unterschiedliche Rastergrößen pro
  Sektion, bewusste Ausreißer (ein Element, das aus dem Raster bricht), variierende
  Spaltenzahlen je nach Inhalt statt immer 3 gleich große Boxen.

## Komponenten

- **Vermeiden**: Jede Card mit identischem `box-shadow` und identischem `border-radius`;
  generische Checkmark-Icons aus einer Standard-Icon-Bibliothek ohne Bezug zur Marke;
  Testimonial-Karussell mit Stock-Avataren.
- **Stattdessen**: Schatten/Radius bewusst variieren oder gezielt sparsam einsetzen;
  Icons/Illustrationen an Stil und Branche anpassen; Social Proof so konkret wie möglich
  gestalten (echte Zitate/Kennzahlen statt Platzhalter-Text).

## Bewegung & Interaktion

- **Vermeiden**: Keinerlei Hover-/Fokus-States; wenn Animation, dann nur ein generisches
  Fade-In beim Scrollen auf jedem Element gleichermaßen.
- **Stattdessen**: Gezielte Mikrointeraktionen an Stellen, die wirklich Feedback brauchen
  (Buttons, Karten, Navigation); Bewegung sparsam und mit Bezug zum Seiteninhalt einsetzen
  statt als Dekoration auf jedem Absatz.

## Copy

- **Vermeiden**: Austauschbare Phrasen wie "Wir bieten innovative Lösungen für Ihr
  Unternehmen"; Feature-Listen ohne konkreten Nutzen; CTA-Buttons, die nur "Mehr erfahren"
  oder "Jetzt starten" sagen.
- **Stattdessen**: Konkrete, branchenspezifische Aussagen mit Zahlen/Beispielen wo möglich;
  CTAs, die die tatsächliche nächste Handlung benennen.

## Technische Qualitätssignale (im Playwright-Check zu prüfen)

- Fehlender `<meta name="viewport">` → Seite ist nicht für Mobile gedacht.
- Bilder ohne `alt`-Text.
- Nur eine einzige Hintergrundfarbe über die komplette Seite hinweg (Indiz für fehlende
  visuelle Sektionierung).
- Konsolen-Fehler beim Laden (kaputte Skripte/fehlende Assets).
- Sehr geringer Kontrast zwischen Text- und Hintergrundfarbe (Lesbarkeits- und
  Accessibility-Risiko).

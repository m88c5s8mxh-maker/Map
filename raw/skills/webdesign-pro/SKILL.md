---
name: webdesign-pro
description: Orchestriert den kompletten Bau einer hochwertigen, individuellen Website oder Landingpage - von der Figma-Abfrage über die Auswahl passender Design-Skills bis zum automatisierten visuellen QA-Loop mit Playwright, damit keine generische "0815"-KI-Website entsteht. IMMER als ersten Schritt nutzen, wenn der Nutzer eine Website, Landingpage, einen Webauftritt oder ein Redesign bauen/erstellen/entwerfen möchte - auch wenn er nur "baue mir eine Seite für..." oder eine konkrete Branche sagt, ohne "Website" explizit zu erwähnen. Dieser Skill geht dem direkten Losschreiben von HTML vor und ruft dabei selbst andere installierte Design-Skills (z.B. web-factory, cinematic-web, high-end-visual-design, minimalist-ui, brand-design-analyzer) sowie den Figma-Connector als Werkzeuge auf.
---

# Webdesign Pro — Orchestrator für hochwertige Websites

Dieser Skill baut keine Website direkt "aus dem Bauch heraus". Er ist eine Vorschaltung: er
fragt zuerst nach der richtigen Design-Quelle (Figma oder nicht), lässt sich dann von den
im Account vorhandenen Design-Skills die harten Geschmacksregeln geben (exakte Abstände,
Font-Pairings, verbotene Muster), baut erst danach die Seite, und prüft das Ergebnis
automatisiert per Screenshot, bevor es ausgeliefert wird. Der Grund: Sprachmodelle greifen
ohne diese Zwischenschritte fast immer zu denselben Standardlösungen (lila-blauer
Gradient-Hero, Inter-Font, dreispaltiges Icon-Grid, generische Testimonial-Slider) — das ist
genau das "0815"-Ergebnis, das vermieden werden soll.

Nie direkt mit dem HTML-Schreiben beginnen, ohne vorher Schritt 0-2 durchlaufen zu haben.

## Schritt 0 — Figma zuerst abfragen (nie überspringen)

Sobald dieser Skill für einen Website-Auftrag greift, als allererstes mit AskUserQuestion
fragen, ob eine Figma-Datei/ein Figma-Link als Design-Quelle verwendet werden soll. Das gilt
für jeden neuen Website-Auftrag, unabhängig davon, ob vorher schon einmal ohne Figma
gearbeitet wurde.

- Antwort "Ja": nach dem Figma-Link (Datei- oder Frame-/Node-Link) fragen, falls noch nicht
  mitgeliefert.
- Antwort "Nein": normal mit einem Text-Briefing weiterarbeiten (siehe Schritt 1).

Kann in derselben AskUserQuestion-Runde mit den Briefing-Fragen aus Schritt 1 kombiniert
werden, wenn das natürlicher wirkt — die Figma-Frage darf dabei aber nicht fehlen.

## Schritt 1 — Kurzbriefing einholen

Nur erfragen, was nicht schon aus dem Gespräch hervorgeht: Branche, Firmenname, Zielgruppe,
gewünschter Stil/Ton (z.B. edel & minimal, verspielt, brutalistisch, corporate-seriös,
cinematisch), Pflicht-Sektionen, sowie vorhandene Markenelemente (Farben, Logo, Fonts), falls
kein Figma verwendet wird.

## Schritt 2 — Passende Design-Skills konsultieren (Pflicht)

Im `<available_skills>`-Kontext nach Skills suchen, die zur Branche/zum Stil aus Schritt 1
passen, zum Beispiel (Namen können je nach Installation variieren — nach Beschreibung, nicht
stur nach Name suchen):

- Branchen-spezifische Website-Baukästen (z.B. für Mittelstand, Arztpraxis, Gastronomie,
  Agentur, Portfolio, SaaS)
- Cinematische/Awwwards-Stil-Skills für Premium-Kundenwebsites
- Reine Ästhetik-/Anti-Generic-Skills (High-End Visual Design, Minimalist UI, Industrial/
  Brutalist UI, Design-Taste-Frontend, Stitch Design Taste)
- Branding-/Farbanalyse-Skills, die Branchen-Farbpaletten und Font-Pairings mit Hex-Codes
  liefern
- Skills für Redesigns bestehender Seiten, falls es sich um ein Redesign statt Neubau handelt

Von den 2-4 relevantesten Treffern das SKILL.md per Read lesen, bevor eine Zeile Code
geschrieben wird. Diese Skills enthalten konkrete, harte Regeln (exakte Spacing-Werte,
verbotene Gradients, Font-Kombinationen, Schatten-Systeme) — das ist der Unterschied
zwischen einer generischen und einer hochwertigen Seite. Wenn kein passender Skill
existiert, trotzdem `references/anti-generic-checkliste.md` aus diesem Skill lesen und
danach bauen.

Wenn mehrere gefundene Skills sich stilistisch widersprechen (z.B. Brutalist vs. Minimalist),
anhand des Stils aus Schritt 1 entscheiden und dem Nutzer kurz sagen, welcher Ansatz gewählt
wurde und warum.

## Schritt 3 — Figma-Kontext ziehen (nur falls Schritt 0 = Ja)

Mit den `mcp__Figma__*`-Tools (ToolSearch bei Bedarf laden) den Design-Kontext holen:

1. `get_metadata` — Struktur/Node-IDs des Frames
2. `get_design_context` — Layout- und Komponentendetails
3. `get_variable_defs` — Design-Tokens (Farben, Spacing, Typografie) als Variablen
4. `get_screenshot` — visuelle Referenz zum Abgleich nach dem Bauen

Tokens direkt als CSS-Variablen übernehmen statt sie freihändig nachzubauen. Wenn die
Figma-Tools nicht autorisiert/verbunden sind, das dem Nutzer kurz mitteilen und mit dem
Text-Briefing aus Schritt 1 weiterarbeiten statt den Auftrag zu blockieren.

## Schritt 4 — Website bauen

Einzeldatei-HTML (oder das exakte Template-Muster des in Schritt 2 gewählten
Branchen-Skills) bauen, unter Anwendung von: den Regeln aus den konsultierten Design-Skills,
der `references/anti-generic-checkliste.md`, und — falls vorhanden — den Figma-Tokens/
-Screenshots aus Schritt 3. Zwischenstand im Scratch-Ordner speichern (noch nicht final in
outputs kopieren, das passiert erst nach dem QA-Loop in Schritt 6).

## Schritt 5 — Automatisierter visueller QA-Loop (Playwright, mit Chrome-Fallback)

Ziel: die Seite tatsächlich sehen (nicht nur den Code lesen) und automatisiert auf generische
Muster, Kontrast- und Layoutfehler prüfen, bevor sie ausgeliefert wird.

**Wichtig aus der Praxis:** In der Cowork-Sandbox läuft der Shell-Nutzer ohne root/sudo, dem
Chromium-Binary von Playwright fehlen dort oft System-Bibliotheken (z.B. `libxdamage1`) und
`npx playwright install --with-deps` schlägt mangels sudo fehl. Deshalb: **einmal kurz
versuchen, sofort auf den Chrome-Fallback wechseln, wenn es an fehlenden OS-Abhängigkeiten
scheitert** — nicht mehrfach mit denselben Installationsbefehlen gegen dieselbe Wand laufen.

1. Playwright einmalig pro Session versuchen zu installieren und zu starten:
   ```bash
   mkdir -p /tmp/pw && cd /tmp/pw && npm init -y >/dev/null 2>&1 && npm install playwright >/dev/null 2>&1 && npx playwright install chromium >/dev/null 2>&1
   node /pfad/zu/webdesign-pro/scripts/screenshot_audit.mjs <html-datei> <output-ordner>
   ```
   Wenn das Skript sauber durchläuft: weiter mit Punkt 2. Wenn der Fehler eine Meldung wie
   "Host system is missing dependencies to run browsers" enthält: sofort zu Punkt 3
   (Chrome-Fallback) wechseln, ohne weitere Installationsversuche.

2. **Playwright-Pfad**: Das Skript rendert die Seite bei Desktop- (1440×900) und
   Mobile-Breite (390×844), speichert Full-Page-Screenshots und liefert automatisierte
   Checks (fehlender Viewport-Meta-Tag, Bilder ohne Alt-Text, Anzahl verschiedener
   Schriftarten/Hintergrundfarben, grober Kontrast-Sample) als `results.json`. Screenshots
   per Read öffnen und weiter mit Punkt 4.

3. **Chrome-Fallback** (Standardfall in Cowork, wenn Playwright wie oben beschrieben an
   fehlenden Systembibliotheken scheitert): die `mcp__claude-in-chrome__*`-Tools per
   ToolSearch laden (`navigate`, `computer`, `javascript_tool`, `read_console_messages`).
   Damit die HTML-Datei öffnen, das Browserfenster auf Desktop- und dann auf Mobile-Breite
   setzen, jeweils einen Screenshot machen, und per `javascript_tool` dieselben Checks wie
   im Playwright-Skript ausführen (Viewport-Meta-Tag, Alt-Texte, Anzahl Schriftarten/
   Hintergrundfarben, Kontrast-Stichprobe — Logik aus `scripts/screenshot_audit.mjs`
   sinngemäß als Inline-JS übernehmen). Konsolenfehler mit `read_console_messages` prüfen.
   Dem Nutzer im Abschlussbericht kurz nennen, dass Chrome statt Playwright genutzt wurde.

4. Screenshots visuell gegen die `anti-generic-checkliste.md` und die in Schritt 2
   gewählten Design-Skills prüfen: generische Hero-Muster, immer gleiche Card-Schatten,
   fehlende Mikrointeraktionen/Hover-States, zu zentrierte/symmetrische Layouts, generische
   Stock-Icons/-Copy.
5. Gefundene Probleme direkt im HTML beheben und den QA-Schritt wiederholen — maximal
   3 Runden. Wenn nach 3 Runden noch Probleme bestehen, nicht endlos weiterloopen, sondern
   die verbleibenden Punkte transparent im Abschlussbericht an den Nutzer nennen.

## Schritt 6 — Abliefern

Finales HTML (und optional die Screenshots) in den outputs-Ordner kopieren und mit
`mcp__cowork__present_files` teilen. Kurz zusammenfassen: welche Design-Skills genutzt
wurden, ob Figma als Quelle diente, und wie viele QA-Runden nötig waren. Am Ende knapp
anbieten, zusätzlich einen Accessibility-Audit (falls ein entsprechender Design-Skill
installiert ist) laufen zu lassen — nicht von sich aus schon durchführen.

## Referenzen

- `references/anti-generic-checkliste.md` — konkrete Liste generischer KI-Website-Muster
  und was stattdessen zu tun ist. Immer in Schritt 2 und 5 heranziehen.
- `scripts/screenshot_audit.mjs` — Playwright-Skript für den QA-Loop in Schritt 5.

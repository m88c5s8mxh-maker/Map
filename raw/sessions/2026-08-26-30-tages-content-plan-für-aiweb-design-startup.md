---
session_id: cab6a8a8-8c50-461e-bf7c-278581a90aa8
title: "30-Tages Content-Plan für AI/Web-Design Startup"
date: 2026-08-26
cwd: /Users/tyrone
duration_min: 1468
score: 136
tier: 2
tools: [Skillx1, Writex3, Artifactx13, Editx12, Bashx25, ToolSearchx1, WebSearchx5, WebFetchx3]
tags: [session, claude-code]
---

# 30-Tages Content-Plan für AI/Web-Design Startup

> Session vom 2026-08-26 · 1468 Min · Arbeitsverzeichnis `/Users/tyrone`

**Berührte Dateien:** `/private/tmp/claude-501/-Users-tyrone/cab6a8a8-8c50-461e-bf7c-278581a90aa8/scratchpad/contentplan-30-tage.html`, `/private/tmp/claude-501/-Users-tyrone/cab6a8a8-8c50-461e-bf7c-278581a90aa8/scratchpad/drehbuch-skripte.html`, `/Users/tyrone/.claude/projects/-Users-tyrone/memory/artefakt-immer-republishen.md`

## Verlauf

### 👤 User

erstell mir einen 30 Tages contentplan für ein unternehmen in der AI/AppEntwicklungs/Webdesign branche für ein startup um reichweite zu generieren und kunden aquise 20% direkt auf den kunden 30% auf konkretes Branchen thema und 50% für aße alles auf unser Unternehmen bezogen

### 🤖 Claude

Ich baue Ihnen den Plan. Kurz zu meinen Annahmen, damit er sofort nutzbar ist: **B2B-Fokus, Hauptkanal LinkedIn + Instagram (Reels/Carousel), Sprache Deutsch, 1 Post/Tag.** Falls Sie einen anderen Kanal-Mix fahren, sage ich Ihnen am Ende, wie Sie umbauen.

Verteilung auf 30 Tage: **6 Posts Kunde direkt (20 %) · 9 Posts Branchenthema (30 %) · 15 Posts Unternehmen (50 %)**.

> 🔧 Skill

### 👤 User

Approach this as the design lead at a small studio known for their versatility, giving every client a visual identity pitched at the treatment the task actually calls for. Make deliberate choices about palette, typography, and layout that are specific to this subject, and avoid templated designs.

## Read the request first

Calibrate treatment, not whether to design. A doc deserves the same craft as a landing page — what changes is the treatment that craft is delivered in.

Many requests call for a more utilitarian treatment: a plan, a memo, a demo. Make it polished: include real typographic hierarchy, considered spacing, and a proper palette, but avoid over-designing. Most pages do not need a flashy, gigantic hero. Keep flourishes tasteful and limited.

Some requests call for an editorial treatment: a landing page, a game, an app or tool they'll keep or share.

When unsure: a well-composed page is never the wrong answer; an over-designed visual identity sometimes is.

Fundamentals below apply to everything. The editorial process after that runs only when the read above says so.

## Fundamentals for every artifact

**Honor what's already there** Look for an existing design system first — CLAUDE.md, a tokens or theme file, existing component styles. When one exists, apply it; everything below fills gaps and never overrides. Precedence is always: the user's own words, then the project's existing system, then your choices.

**Ground it in the subject.** If the subject isn't already clear, pin it: one concrete subject, its audience, and the page's single job. The subject's own world — its materials, instruments, vernacular — is where distinctive choices come from. Build with real content throughout, never lorem.

**Pair typefaces** Typography carries the page even when the page isn't about typography. The Artifact CSP blocks font CDNs, so don't link a webfont URL and risk a silent fallback. Instead inline the face as a @font-face data URI. Keep running text near 65 characters wide; set a type scale and stay on it; give headings `text-wrap: balance`, body text room to breathe, and uppercase labels a touch of letter-spacing.

**Choose neutrals, don't default to them.** A pure mid-grey reads as unconsidered; a grey with a slight hue bias toward the page's accent reads as chosen. Pure white and near-black are fine grounds when they suit the subject — the point is that the neutral was picked, not inherited.

**Design both themes.** The page renders in the viewer's theme, and the viewer has three states, not two: an explicit choice stamps `data-theme="dark"` / `data-theme="light"` on the root element, and the default "system" setting stamps *nothing* — most viewers see the un-stamped document, where only `prefers-color-scheme` separates light from dark. Structure the CSS token-level for all three: the bare `:root` block defines the complete light palette (for a deliberately dark-first design, swap light and dark consistently through this whole pattern); `@

*[gekürzt]*

> 🔧 Write, Artifact

### 🤖 Claude

**Der Plan ist fertig:** https://claude.ai/code/artifact/3ce4f6bc-daa2-476e-8af0-b713ca7fa91f

Die Seite ist privat — teilbar über das Share-Menü, falls Sie ihn im Team abstimmen wollen.

## Was drin ist

**Die Quote, exakt eingehalten:** 6 Posts Kunde direkt · 9 Posts Branchenthema · 15 Posts Unternehmen.

**Aufbau in fünf Phasen** — die Reihenfolge ist bewusst, nicht kosmetisch:

| Phase | Tage | Warum hier |
|---|---|---|
| Fundament | 1–7 | Positionierung zuerst, erster harter CTA an Tag 5 |
| Beweis | 8–14 | Case Study zweigeteilt, danach das erste echte Angebot |
| Autorität | 15–21 | Preise, Meinung, Fehler — hier entsteht Reichweite; Lead-Magnet an Tag 20 |
| Konversion | 22–28 | 3 der 6 Akquise-Posts, weil das Publikum jetzt warm ist |
| Bilanz | 29–30 | Übergang in Monat 2 ohne Reichweitenabbruch |

Jeder der 30 Tage hat **Hook (der erste Satz, ausformuliert), Kern, konkrete Handlung, Format, Kanal** und wo nötig einen Vorbereitungshinweis (z. B. das PDF für Tag 20 muss an Tag 18 stehen).

Dazu: Hook-Bibliothek mit 10 Mustern, Repurposing-System (1 Post → 4 Assets), KPI-Tabelle mit Zielwerten *und* der jeweiligen Nachsteuerung, plus Umbauanleitungen für andere Kanal-Mixe.

## Zwei Dinge, die Sie noch entscheiden müssen

1. **Tag 8/10 (Case Study) und Tag 21 (Testimonial)** brauchen einen echten Kunden mit Freigabe. Falls Sie noch keinen referenzierbaren Fall haben: ersetzen Sie beides durch ein Eigenprojekt („wir haben unser eigenes Angebotssystem gebaut — hier sind die Zahlen"). Wirkt fast genauso gut und kostet keine Abstimmung.

2. **Tag 5, 12, 20, 23, 28 versprechen Leistungen** (5 Gratis-Audits, Break-even-Rechnungen, 2 Projektslots). Die müssen Sie halten können — sonst verbrennt Tag 28 das Vertrauen der 27 Tage davor. Prüfen Sie die Kapazität vorher, nicht wenn die DMs reinkommen.

Sagen Sie mir Ihre Branche-Spezifika (Zielbranche, Preisniveau, konkrete Referenzen), dann schreibe ich einzelne Posts vollständig aus statt nur als Hook + Kern.

### 👤 User

1. ich habe testemonials und was meinst du mit punkt 2. zielbranche sind alle branchen Preis bei webdesign liegt bei 1.500€ die preise der anderen produkte werden je nach aufwand und größe berechnet, ich habe bereits 3 referenzen 2 websites und 1 crm programm

### 🤖 Claude

Punkt 2 meinte: fünf Posts im Plan **versprechen konkret eine Leistung** — Tag 5 („5 Gratis-Audits"), Tag 12 (Potenzialanalyse), Tag 20 (PDF per DM), Tag 23 („ich rechne dir den Break-even"), Tag 28 („2 Slots"). Wenn Tag 5 gut läuft und 40 Leute `AUDIT` kommentieren, schulden Sie 40 Audits. Entweder liefern Sie — oder Sie stehen öffentlich als jemand da, der nicht liefert, und zwar genau in dem Moment, in dem Tag 28 verkaufen soll. Deshalb: Obergrenze vorher festlegen, im Post nennen, einhalten. Das ist alles.

Ich baue Ihre echten Daten jetzt ein.

> 🔧 Edit×12, Bash, Artifact

### 🤖 Claude

Aktualisiert, gleicher Link: https://claude.ai/code/artifact/3ce4f6bc-daa2-476e-8af0-b713ca7fa91f

## Was sich geändert hat

**Ihre 3 Referenzen arbeiten jetzt mehrfach im Plan:**
- **CRM-Projekt** trägt Woche 2 komplett — Tag 8 (Ausgangslage: Excel mit 40 Spalten) und Tag 10 (Lösung + gesparte Stunden), plus Beispielmaterial für Tag 18 und 25
- **Beide Websites** liefern Vorher-Nachher für Tag 5, Beispiele für Tag 22, echte Ladezeit-Werte für Tag 6
- **Tag 21** ist jetzt „Drei Kunden, drei Sätze" — alle drei Testimonials in einem Carousel, das dritte mit einer kritischen Anmerkung, weil das die anderen zwei glaubwürdig macht

**Die 1.500 € sind zum stärksten Hook des Monats geworden.** Tag 15 hieß vorher generisch „Was eine App wirklich kostet" — jetzt: *„Unsere Website kostet 1.500 €. Fix. Hier steht, was drin ist — und was nicht."* Kaum jemand in Ihrer Branche nennt Preise, deshalb ist der fixe Preis kein Nachteil, sondern der Reichweitentreiber. Er zieht sich jetzt durch Tag 15, 24, 26 und 28. Tag 26 ist der direkte Vergleich: *„Dieselbe Website: bei der Agentur 8.000 €, bei uns 1.500 €."*

**Neue Sektion „Verbindlichkeiten"** — genau Punkt 2 von vorher, jetzt als Tabelle im Dokument: welcher Tag was verspricht, mit Obergrenze und Aufwand. Zusammen rund 6 Stunden über den Monat. Damit läuft es nicht aus dem Ruder, wenn Tag 5 unerwartet gut geht.

**KPI-Ziele nachgeschärft** auf Ihr Preisniveau: bei 1.500 € ist der Zyklus kurz, also mehr Gespräche — 10–20 Erstgespräche, 6–10 Angebote, 2–4 Abschlüsse. Das sind 3.000–6.000 € aus 30 Tagen Content.

## Zwei Punkte, die noch bei Ihnen liegen

**Software braucht einen „ab"-Preis.** „Nach Aufwand" funktioniert im Angebot, aber nicht im Post — der Leser muss nachfragen und tut es meistens nicht. Legen Sie vor Tag 15 einen Startpreis fest, unter dem Sie kein CRM anfangen. Er darf hoch sein, er muss nur existieren. Sonst zieht Tag 15 nur Website-Anfragen und Ihr lukrativeres Produkt bleibt unsichtbar.

**„Alle Branchen" ist als Geschäftsmodell fein, im Content aber schwierig** — ein Post ohne konkretes Gegenüber trifft niemanden. Ich habe die Lösung als Karte eingebaut: In jedem Beispiel eine echte Branche nennen (Handwerksbetrieb, Steuerberatung, Physiopraxis) und über den Monat durchrotieren. Sie bleiben offen, klingen aber jedes Mal spezifisch.

Wenn Sie mir die Branche des CRM-Kunden und einen der Testimonial-Sätze geben, schreibe ich Tag 8, 10 und 21 komplett aus — fertig zum Posten.

### 👤 User

schau dir für den preis für crm systeme andere anbieter an wo hier der durchschnittspreis liegt und sag mir diesen dann. Branche des CRMs war hier ein Merchendiser namens Kiendl GMBH und testemonials habe ich noch keine worte hätte aber eine referenz von einer bar

### 🤖 Claude

Zwei Sachen: Ich recherchiere die CRM-Preise, und ich muss Tag 21 korrigieren — ohne echte Zitate funktioniert der Post nicht wie geplant.

> 🔧 ToolSearch, WebSearch×3, WebFetch×3

### 🤖 Claude

Recherche fertig. Hier die Marktpreise — und eine Korrektur an meinem eigenen Vorschlag von vorhin.

## CRM: Was der Markt in Deutschland nimmt

**Individuell entwickeltes CRM (einmalig):**

| Umfang | Preis |
|---|---|
| Markteinstieg Custom CRM | ab **15.000 €** |
| Startup / 10–20 Mitarbeiter | **25.000 – 40.000 €** |
| Mittelstand / 30–80 Mitarbeiter | **60.000 – 100.000 €** |
| Codapp (Agentur, Referenzangebot) | **55.000 – 95.000 €** einmalig |

**Nach Modulen aufgeschlüsselt** — das ist für Sie der brauchbarste Anker: Kontaktverwaltung **5.000–8.000 €**, Lead-Management **8.000–15.000 €**, Sales-Pipeline **6.000–12.000 €**, E-Mail-Integration **3.000–7.000 €**. Ein schlankes CRM wie das für Kiendl entspricht damit marktüblich **11.000–20.000 €**.

**Stundensätze:** Entwickler in Deutschland 80–120 €/h, Agenturen 80–150 €/h, Tagessätze 1.200–1.800 €. **Laufend:** Wartung 10–20 % der Entwicklungskosten pro Jahr, Hosting 2.000–8.000 €/Jahr.

**Der Vergleichswert, gegen den Sie verkaufen** — SaaS-Abos: Pipedrive 14–99 €/User/Monat, HubSpot ab 15–20 €, Salesforce ab 25 USD bis 150 €+/User/Monat. Realistisch für ein KMU: **40–60 € pro Nutzer und Monat, dauerhaft**.

### Mein konkreter Vorschlag: **ab 9.000 €**

Begründung: Markteinstieg liegt bei 15.000 €, die Modulrechnung für ein schlankes CRM bei 11.000–20.000 €. Mit 9.000 € liegen Sie rund 40 % unter dem Einstieg — genug, um Angebote zu gewinnen, und genug, um 15–20 Arbeitstage plus Wartung zu finanzieren. Darunter wird es unwirtschaftlich: bei 6.000 € arbeiten Sie unter dem deutschen Stundensatz-Mindestniveau und können den Betrieb nicht mehr abdecken. Dazu **150–250 €/Monat für Hosting und Wartung**, das ist Marktstandard und kein Verhandlungsposten.

### Eine Korrektur an meinem letzten Vorschlag

Ich hatte Tag 26 auf *„Agentur 8.000 €, bei uns 1.500 €"* gesetzt. Das hält der Recherche nicht stand: eine Visitenkarten-Website kostet in Deutschland **1.000–3.500 €**, erst eine echte Unternehmenswebsite liegt bei 5.000–20.000 €. Mit 1.500 € sind Sie also am **unteren Ende des normalen Marktbands** — nicht 80 % unter Agenturpreis. Ich baue den Post auf die echten Zahlen um; sonst zerlegt Ihnen der erste kundige Kommentator den Post, und zwar unter Ihrem stärksten Reichweitenbeitrag.

Jetzt die Änderungen im Plan.

> 🔧 Bash×2, Artifact

### 🤖 Claude

Aktualisiert, gleicher Link: https://claude.ai/code/artifact/3ce4f6bc-daa2-476e-8af0-b713ca7fa91f

## Was neu im Plan ist

**Neue Sektion „Marktpreise, die du zitieren kannst"** — alle recherchierten Zahlen als Tabelle, mit Ihrer Position daneben. Das ist die Absicherung für Tag 15, 23, 26 und 28: Sie posten keine Behauptung, sondern belegbare Marktbänder.

**Neue Sektion „Woche 0"** — fünf Vorbereitungen vor Tag 1, inklusive einer fertigen **Nachrichtenvorlage zum Zitat-Einholen**. Drei Fragen, damit der Kunde nichts formulieren muss. Die dritte Frage ist die entscheidende: *„Was hat dich überrascht, positiv oder negativ?"* — dort entsteht der Satz, den niemand erfinden würde.

**Tag 21 umgebaut.** Sie hatten „Testimonials" bestätigt, haben aber keine Worte — der Post als Zitatgrafik hätte also nicht funktioniert. Jetzt ist es ein **Referenz-Schaufenster**: ein Slide pro Projekt (Kiendl CRM, Bar-Website, zweite Website), je Problem → Entscheidung → Ergebnis. Kommt das Bar-Zitat bis dahin, wandert es auf Slide 1. Der Post funktioniert aber auch ohne — das war der Punkt.

**Kiendl GmbH ist jetzt namentlich der Träger von Woche 2.** Merchandising ist dafür ideal: viele Artikel, viele Kunden, viel Datenpflege — ein Prozess, den jeder Leser sofort versteht, auch branchenfremd.

**Die Bar ist Ihr Bildmaterial.** Gastronomie sieht gut aus, deshalb trägt sie Tag 5, 22 und 27 visuell — und ist der eine Kunde, der laut Ihrer Aussage etwas sagen würde. Dort zuerst fragen.

## Ein Hinweis zur Preiserzählung

Verkaufen Sie die 1.500 € als **schlanke Struktur**, nie als „günstig". Der Unterschied ist nicht Kosmetik: „günstig" zieht Kunden an, die auch bei 9.000 € verhandeln wollen — und dann verlieren Sie beim CRM-Geschäft die Marge, die den Betrieb finanziert. „Zwei Leute, kein Büro, keine Projektleitungsebene" erklärt denselben Preis, ohne das zu triggern.

Sagen Sie mir, wenn ich Tag 8, 10 und 15 komplett ausschreiben soll — für Tag 8/10 bräuchte ich von Kiendl noch: wie viele Stunden pro Woche vorher in die Excel-Pflege gingen und was heute anders ist. Für Tag 15 kann ich sofort loslegen.

### 👤 User

Schreib mir zum plan dann auch gleich ein skript für die jeweiligen tage themenbezogen wir sind 3 personen Tyrone Kev und Hazar es müssen aber nicht immer alle in jedem video sein. schreib die tage die du genannt hast voll aus und schreib auch in den plan rein wann wir produzieren sollen die videos das es passt vom zeitmanagement

### 🤖 Claude

Zwei Dokumente: der Produktionsplan kommt in den Contentplan, die Skripte bekommen ein eigenes Dokument — das eine liest man am Schreibtisch, das andere beim Drehen.

Zuerst der Produktionsplan im Plan selbst.

> 🔧 Bash

### 🤖 Claude

Jetzt das Drehbuch.

> 🔧 Write

### 🤖 Claude

You've hit your session limit · resets 12:50am (Europe/Berlin)

### 👤 User

mach weiter

### 🤖 Claude

**Zu LinkedIn — kurze, klare Antwort: nein, nicht für Sie. Jedenfalls nicht als Hauptkanal.**

Ich hatte LinkedIn gesetzt, weil B2B-Akquise dort normalerweise am dichtesten läuft. Aber: Sie haben YouTube, TikTok und Instagram schon — und Ihr Hauptprodukt ist eine Website für **1.500 €**. Das ist ein Angebot für kleine lokale Unternehmen: Gastro, Handwerk, Studios, Praxen. Genau die sind auf TikTok und Instagram, nicht auf LinkedIn. Ihre Bar-Referenz ist der Beweis.

Meine Aufteilung:

| Kanal | Aufgabe | Aufwand |
|---|---|---|
| **TikTok + Instagram** | Reichweite und Website-Kunden (1.500 €) | Hauptlast, ein Video für beide |
| **YouTube** | Langfrist-Suchkanal — „Was kostet eine Website" wird jeden Monat gesucht und Ihr Video rankt Jahre | 4 Langvideos, aus vorhandenem Material |
| **LinkedIn** | Nur fürs Software-Geschäft (9.000 €). Profil anlegen, die 8 textfähigen Posts querstellen, fertig | ~0 Zusatzaufwand |

LinkedIn von null aufzubauen kostet Sie einen Monat Aufmerksamkeit, die auf TikTok mehr bringt. Also: mitnehmen, nicht bespielen.

**Das hat zwei Konsequenzen, die ich jetzt einbaue:** Textposts gibt es auf TikTok/Insta nicht — aus 12 Textposts werden Talking-Head-Reels. Und die Zielgruppe wechselt vom Mittelstand zum lokalen Kleinunternehmen, also müssen vier Branchenthemen raus (EU AI Act, KI-Piloten im Mittelstand) und durch passende ersetzt werden.

> 🔧 Bash

### 🤖 Claude

Jetzt der Umbau des Plans auf TikTok/Instagram/YouTube.

> 🔧 Bash×2, Artifact×2

### 🤖 Claude

Beide Dokumente stehen:

**Contentplan** → https://claude.ai/code/artifact/3ce4f6bc-daa2-476e-8af0-b713ca7fa91f
**Drehbuch & Skripte** → https://claude.ai/code/artifact/8ae11fcf-1b8b-4e41-b992-1c456483ccd2

## Im Drehbuch

**Sechs sekundengenaue Videoskripte** — Tag 3 (Stack), 11 (KI-Agent), 14 (Team), 19 (Live-Build in drei Teilen), 27 (Studiotag), 30 (Bilanz). Jedes mit Zeitleiste, Bild-Spalte und wörtlichem Text. Besetzung nach Inhalt verteilt: Tyrone spricht alles, wo Haltung und Zahlen verantwortet werden, Kev alles am Rechner (oft nur Hände und Bildschirm — senkt die Hemmschwelle enorm), Hazar Design und Kamera. Die Rollen sind Vorschläge, tauschbar.

**Eine wiederverwendbare Audit-Vorlage** für Tag 5. Ohne Struktur dauert jedes Audit-Video 40 Minuten, mit dieser 20 — und Sie machen fünf davon.

**Drei Posts komplett ausgeschrieben:** Tag 8 und 10 (Kiendl, slide-für-slide plus Begleittext) und Tag 15 (das Preis-Carousel mit allen recherchierten Marktzahlen). Alles rot markierte sind Ihre echten Zahlen, die noch fehlen — pro Post unten aufgelistet.

## Im Plan, wegen des Kanalwechsels

**Aus 12 Textposts wurden Talking-Head-Reels.** Auf TikTok und Instagram gibt es keine Textposts — die Formate sind jetzt durchgehend video-first, mit 9 Carousels für die Lehr- und Preisinhalte.

**Vier Branchenthemen ausgetauscht**, weil sich mit dem Kanal die Zielgruppe ändert. Raus: EU AI Act, KI-Piloten im Mittelstand, No-Code vs. Custom Code, Chatbot vs. Agent. Rein: *„Neun von zehn Websites kleiner Unternehmen bringen keine Anfrage"*, *„Baukasten oder bauen lassen"*, *„Drei Dinge auf deiner Website, für die du haftest"*, und — der stärkste — *„Ein KI-Assistent, der ans Telefon geht, während du auf der Leiter stehst"*. Für Handwerk und Gastro ist das der greifbarste KI-Fall überhaupt.

**Sechs Drehtage statt einundzwanzig.** Drehtag A bündelt sechs Talking-Head-Videos in 3,5 Stunden (gleicher Hintergrund, nur Hemd wechseln). Tag 19 ist der beste Tag des Monats: ein Drehtag, fünf Inhalte.

## Eine Zahl, die Sie sehen müssen

Der video-first-Plan kostet **rund 56 Stunden im Monat** — Dreh, Schnitt, Carousels, täglich 30 Minuten Kommentare. Auf drei Personen sind das 4,5 Stunden pro Person und Woche, neben Kundenprojekten. Das ist etwa doppelt so viel wie die LinkedIn-Variante, weil Video teurer ist als Text.

Wenn das zu viel ist: Im Abschnitt „Anpassung" steht die halbierte Variante — 15 Inhalte, rund 30 Stunden, alle sechs Akquise-Posts weiterhin drin und die Quote 20/30/50 bleibt fast exakt erhalten. Lieber 15 gute als 30 halbe.

Und falls nur ein Kanal machbar ist: **TikTok.** Nicht Instagram. Es ist der einzige Kanal, auf dem ein Account ohne Reichweite in vier Wochen Kunden bringen kann.

### 👤 User

ich werde den Contentplan auch noch erweitern lassen von dir, aber ich bräuchte ihn jetzt erst mal für die ersten 30 Tage einfach so qualitativ hochwertig wie möglich. Wir können immer auf V produzieren, das ist gar kein Problem. Ich schaue jetzt einfach mal, wie das funktioniert, die ersten paar Tage, und dann sage ich dir, ob wir den nochmal ein bisschen kürzen oder nicht. Wir werden versuchen, langfristig Reichweite aufzubauen auf Instagram, TikTok, Youtube, auf allen Plattformen, eben.

### 🤖 Claude

Verstanden — Vorrat produzieren ist die richtige Entscheidung, dann maximiere ich die Qualität statt zu kürzen. Der größte Mangel ist offensichtlich: **von 21 Videos haben nur 8 ein Skript.** Ohne die anderen könnt ihr nicht drehen. Dazu fehlen 8 Carousel-Texte und die komplette YouTube-Ebene — Titel und Beschreibungen sind auf YouTube das, was über Reichweite entscheidet, und die brauchen Sie für den Langfristplan.

Das schreibe ich jetzt alles aus.

> 🔧 Bash×2

### 🤖 Claude

Kurze Antwort auf die Sprachfrage, dann mache ich fertig: **Deutsch. Ohne Zögern.** Begründung unten — und es bedeutet null Rework, alles Geschriebene bleibt.

> 🔧 Bash, Artifact

### 🤖 Claude

# Deutsch. Und zwar deutlich.

Ihr Hauptprodukt ist eine Website für **1.500 €** an Gastro, Handwerk und Praxen. Diese Kunden findet englischer Content nicht — eine Bar in Deutschland sucht nicht auf Englisch, unterschreibt keinen englischen Vertrag und will keine englische Website. Englischer Content würde Reichweite bei Leuten erzeugen, **die Ihr aktuelles Produkt nicht kaufen können.** Das ist die schlechteste Kombination: Aufwand ohne Umsatz.

Drei Punkte, die die Entscheidung eindeutig machen:

**Der Wettbewerb ist nicht vergleichbar.** „Web design agency" auf englischem TikTok ist eine der gesättigsten Nischen überhaupt — Sie konkurrieren mit tausenden indischen, pakistanischen und US-Agenturen, die dasselbe für 200 $ anbieten. Auf deutschem TikTok haben Sie vielleicht 5 % dieser Konkurrenz. Dieselben 56 Stunden Arbeit bringen auf Deutsch ein Vielfaches an Reichweite.

**Die Marktgröße ist kein Problem.** Deutschsprachiger Raum: rund 100 Millionen Menschen, Millionen Kleinbetriebe. Sie brauchen 2 bis 4 Kunden im Monat, nicht 200. Der deutsche Markt limitiert Sie erst bei einer Größe, die Jahre entfernt ist.

**Ihre Referenzen sind deutsch.** Kiendl GmbH, eine Bar, eine weitere Website — auf einem englischen Account sind das drei Namen, die niemandem etwas sagen und niemand nachprüfen kann. Lokale Referenzen sind auf einem lokalen Account ein Vorteil und auf einem internationalen ein Nachteil.

## Der Punkt, an dem Englisch richtig wird

Nicht wenn Sie international *wollen*, sondern wenn das Angebot **nicht mehr ortsgebunden** ist — ein Produkt, ein Template, eine SaaS, ein Remote-Festpreis-Build. Solange Sie Dienstleistung an lokale Betriebe verkaufen, ist Englisch strategisch falsch, egal wie groß die Ambition ist.

Und wenn der Zeitpunkt kommt: **eigene englische Accounts, nicht umschalten.** Ein deutscher Account, der auf Englisch wechselt, verliert seine algorithmische Zuordnung und die Bestandsfollower konvertieren nicht. Was Sie mitnehmen, ist das ganze System — Hooks, Skripte, Struktur, Formate. Das ist übersetzbar. Das Publikum nicht.

## Was ich als Absicherung eingebaut habe

Eine Sache lohnt sich schon jetzt: **YouTube mehrsprachig.** YouTube erlaubt pro Video einen zweiten Titel und Untertitel in einer anderen Sprache. Ich habe für alle vier Langvideos die englischen Titel mitgeschrieben — das kostet zehn Minuten pro Video, macht Sie international auffindbar und verwässert den deutschen Kanal nicht. Genau der Kanal, der Jahre nachwirkt, wird damit zweisprachig, ohne dass Sie doppelt produzieren.

---

# Das Produktionsdokument ist jetzt vollständig

https://claude.ai/code/artifact/8ae11fcf-1b8b-4e41-b992-1c456483ccd2

Statt zu kürzen, habe ich die Lücken geschlossen. Vorher hatten 8 von 21 Videos ein Skript — jetzt alle.

**Alle 21 Videoskripte**, gruppiert nach Drehtag, weil Sie so drehen. Drehtag A sind sechs Talking-Head-Videos in 3,5 Stunden, mit Reihenfolge-Empfehlung: Tag 2 zuerst (leichtester Text), Tag 1 und 17 zuletzt 

*[gekürzt]*

### 👤 User

Kannst du mir sagen, ob du jetzt in den ganzen Tagen bei den Skripten im Endeffekt auch die Hooks mit eingebaut hast, sodass wir im Endeffekt den Zuschauer auch einfach am Video behalten?

### 🤖 Claude

You've hit your session limit · resets 7pm (Europe/Berlin)

### 👤 User

mach weiter

### 🤖 Claude

Gute Frage — lass mich das nachzählen statt behaupten.

> 🔧 Bash

### 🤖 Claude

**Ja — verifiziert, nicht behauptet:** 21 von 22 Zeitleisten-Skripten haben eine explizite Hook-Zeile für Sekunde 0. Die eine Ausnahme ist die Audit-Vorlage, und das ist Absicht: die geht per DM an eine Person, die schon zugesagt hat — da braucht es keinen Scroll-Stopper.

Aber die ehrliche Antwort auf Ihre eigentliche Frage ist **nein, das reicht nicht.** Ein Hook stoppt den Daumen in Sekunde 0. Der größte Abbruch passiert aber bei **Sekunde 3 bis 8** — genau dann, wenn der Hook eingelöst ist und der Zuschauer entscheidet, ob es weitergeht. Und was in meinem Dokument komplett fehlte: der **Bildtext**. Auf TikTok liest man, bevor man hört — der erste Ton kommt oft gar nicht an. Das war eine echte Lücke.

Die schließe ich jetzt.

> 🔧 Bash, Artifact

### 🤖 Claude

Neue Sektion **„Retention"** ist drin: https://claude.ai/code/artifact/8ae11fcf-1b8b-4e41-b992-1c456483ccd2

## Was jetzt zusätzlich pro Video festgelegt ist

**Der Bildtext für Sekunde 0** — für alle 21 Videos, maximal sechs Wörter, ins obere Drittel (nicht dorthin, wo TikTok die Beschreibung überlagert). Beispiele: Tag 6 wird *„Wer lädt schneller?"*, Tag 19 wird *„4 Stunden. Uhr läuft."*, Tag 27 wird nur *„23:10 Uhr"*. Das ist der Teil, den die Hälfte Ihrer Zuschauer als Einziges wahrnimmt.

**Der Haltemoment bei Sekunde 3 bis 8** — für jedes Video benannt und typisiert. Hier bricht die Mehrheit ab, nicht am Anfang. Die stärksten in Ihrem Plan:

- **Tag 6** ist der beste im ganzen Monat: zwei Websites laden gleichzeitig, der Zuschauer merkt an der eigenen Ungeduld, was Ladezeit kostet. Niemand wischt weg, während er wartet.
- **Tag 19** hat den Timer, der durchs ganze Video läuft. Ein sichtbarer Countdown verspricht ein Ende — deshalb bleibt man.
- **Tag 1, 16 und 17** arbeiten mit Widerspruch: *„Bezahlt hat sie trotzdem jemand"*, *„auch wenn der Kalender leer ist"*, *„der Fehler war mein Angebot, nicht der Code"*. Unlogische Sätze halten, weil man die Auflösung will.

## Der Punkt, der Ihre Frage eigentlich beantwortet

Es gibt drei Abbruchstellen, nicht eine. Sekunde 0–1 entscheidet der Bildtext. Sekunde 3–8 entscheidet der Haltemoment. Und bei etwa 60 Prozent kommt die Ungeduldsschwelle — dort verlieren Sie Leute, wenn nichts Neues mehr kommt. Deshalb steht in mehreren Skripten das Beste bewusst **hinter** der Mitte: Tag 24 dreht erst bei Sekunde 26 auf das positive Gegenteil, Tag 30 bringt den schwächsten Post erst spät, Tag 19.3 nennt das Fehlende nach dem Funktionierenden.

Und ein Detail, das mehr bringt als es kostet: **kein „danke fürs Zuschauen".** Das ist das Signal zum Wischen. Alle Skripte enden mit einer Frage oder einem Satz, der zum Anfang zurückführt — Tag 27 ist deshalb als Rückblende gebaut. Wenn das Video ein zweites Mal anläuft, geht die Durchschauquote über 100 Prozent, und das ist der Wert, der die Ausspielung steuert.

## Was Sie nach den ersten Videos ablesen sollten

Alle drei Plattformen zeigen die Verweildauerkurve. Lesen Sie nur eine Sache ab: **wo fällt sie steil ab?**

Bricht sie in der ersten Sekunde, war der Bildtext falsch — dann drehen Sie **nur die erste Sekunde neu** und laden das Video erneut hoch, der Rest bleibt. Bricht sie zwischen drei und acht Sekunden, fehlte der Haltemoment. Fällt sie gleichmäßig ab, ist alles in Ordnung, das ist normal.

Das steht auch im Dokument, damit Sie es beim Auswerten nicht suchen müssen.

### 👤 User

tausche bei drehbuch tyrone und kev bei vorschlag und update dann immer das artefakt

> 🔧 Bash×2, Artifact×2, Write

### 🤖 Claude

Getauscht und beide Artefakte sind aktualisiert:

**Drehbuch** → https://claude.ai/code/artifact/8ae11fcf-1b8b-4e41-b992-1c456483ccd2
**Contentplan** → https://claude.ai/code/artifact/3ce4f6bc-daa2-476e-8af0-b713ca7fa91f

Ich habe den Tausch **nicht nur in den Vorschlagskarten** gemacht, sondern durchgehend in beiden Dokumenten — 66 Stellen im Drehbuch, 8 im Contentplan. Nur die Karten zu tauschen hätte das Dokument in sich widersprüchlich gemacht: die 21 Skripte hätten weiter Tyrone die Preisvideos sprechen lassen, während die Besetzungskarte Kev dafür vorsieht.

Jetzt gilt überall:

- **Kev** ist die Stimme nach außen — Manifest, Preise, Positionierung, Zahlen, Verkauf. Spricht Drehtag A komplett (6 Talking-Head-Videos) und Drehtag C, plus das YouTube-Preisvideo und die Bilanz.
- **Tyrone** ist die technische Glaubwürdigkeit — Stack, KI-Agent, Live-Build. Meist nur Hände und Bildschirm, ohne Gesicht.
- **Hazar** unverändert: Design, Kamera, Nutzersicht.

Betroffen waren auch die Sprecherzeilen in den Zeitleisten (Tag 14 Team-Video, Tag 19 Live-Build) und der Produktionsplan im Contentplan — die Drehtage sind entsprechend neu zugeordnet.

Falls Sie doch nur die Karten tauschen wollten und die Skripte so bleiben sollten: sagen Sie kurz Bescheid, das ist in einem Schritt zurückgedreht.

Und ich habe mir notiert, Artefakte nach jeder Änderung sofort neu zu publishen — ohne dass Sie danach fragen müssen.

### 👤 User

das passt hast du die skripte jetzt so angepasst das sie mehr auf polarisierung abzielen und trotzdem aquise beinhalten zumindest wenn benötigt bzw nach dem 20,30,50% prinzip

### 🤖 Claude

Ehrliche Antwort: **nein, nicht systematisch.** Polarisierung war keine geplante Ebene — sie ist bei fünf Posts zufällig entstanden, weil das Thema es hergab (Tag 16, 24, 26, 2, 15). Die anderen 25 sind sachlich-transparent. Und Akquise sitzt komplett in den sechs Kunde-Posts, die übrigen 24 enden mit Fragen.

Dazu ein Punkt, der wichtiger ist als die Zählung: **die 20/30/50-Quote regelt das Thema, nicht das Verkaufen.** Sie sagt, worüber ein Post *handelt* — nicht, ob er eine Kontaktmöglichkeit anbieten darf. Jeder Post kann eine Brücke haben; nur sechs drehen sich primär ums Angebot. Das habe ich vorher nicht ausgenutzt.

Ich baue jetzt beides ein.

> 🔧 Bash×4, Artifact×2

### 🤖 Claude

Beide Artefakte aktualisiert. Neue Sektion **„Polarisierung & Akquise"** im Drehbuch.

## Reibung: von 5 auf 16 von 30 Posts

Und zwar **ohne neue Streitthemen** — nur durch geschärfte Hooks bei sechs bestehenden Posts. Die Inhalte sind identisch, sie sind nur nicht mehr höflich verpackt:

| Tag | Vorher | Jetzt |
|---|---|---|
| 4 | „Von der Idee zum Prototyp in 10 Tagen" | „Zehn Tage bis zum Prototyp. Wer dir dafür drei Monate anbietet, verkauft dir Wartezeit." |
| 9 | „Baukasten oder bauen lassen? Hängt an einer Frage" | „Ein Baukasten für 20 € im Monat ist oft teurer als eine gebaute Website. Diese Rechnung zeigt dir niemand." |
| 13 | „Drei Dinge, für die du haftest" | „Drei Dinge sind ein Haftungsrisiko. Eingebaut hat sie meistens der, der die Seite gebaut hat." |
| 18 | „Ein KI-Assistent, der ans Telefon geht" | „Jeder verpasste Anruf ist ein Auftrag für deinen Konkurrenten. Und du erfährst es nie." |
| 22 | „Fünf Trends: drei verkaufen, zwei kosten" | „Zwei Trends, die jede Agentur liebt — und die dich Kunden kosten." |
| 25 | „Fünf Prozesse, die du automatisieren kannst" | „Fünf Abläufe, für die du zahlst, ohne dass sie einen Euro einbringen." |

## Die entscheidende Kalibrierung

Es gibt drei Richtungen, in die Sie polarisieren können, und eine, die Ihr Geschäft kaputt macht:

**Funktioniert:** gegen Branchenpraktiken (der Zuschauer steht mit Ihnen gegen jemand Dritten), gegen Sie selbst (Selbstkritik, Abgrenzung), gegen Nichtstun (Druck auf die Situation).

**Nie:** gegen die eigene Zielgruppe. Ein Post wie „Handwerker verstehen kein Marketing" bringt kurzfristig Reichweite und kostet Sie dauerhaft den Markt — Ihre Kunden lesen auf TikTok mit und reden untereinander. Bei einem lokalen B2B-Geschäft ist das ein Post, der teurer ist als drei Monate Content. Das steht als Warnkarte im Dokument.

## Akquise: von 6 auf 27 Kontaktpunkte

Hier war der eigentliche Fehler in meinem ersten Entwurf. **Die 20/30/50-Quote regelt das Thema, nicht das Verkaufen.** Sechs Posts drehen sich primär ums Angebot — das bleibt. Aber alle übrigen dürfen mit einer **Akquise-Brücke** enden: ein Satz, der einen Weg öffnet ohne zu pitchen. Die Quote bleibt exakt erhalten, die Kontaktpunkte vervierfachen sich.

Alle 30 Brücken sind ausgeschrieben. Beispiele: Tag 13 endet mit *„Bei uns sind alle drei Punkte von Anfang an drin, ohne Aufpreis."* Tag 22 mit *„Wir bauen ohne die zwei. 1.500 € fix."* Tag 6 mit *„Liegt dein Wert über drei Sekunden? Schreib ihn rein."*

**Drei Posts bekommen bewusst keine Brücke:** Tag 7 (Wochenzahlen), 21 (Referenzen), 27 (Studiotag). Das sind reine Vertrauensposten — ein Verkaufssatz am Ende macht sie billig. Das ist Absicht, kein Versehen.

## Was auf Sie zukommt

Bei Tag 9, 13, 22 und 26 werden Kollegen widersprechen. Bei Tag 15 wird jemand schreiben, dass 1.500 € Dumping sind. Das ist der Preis und gleichzeitig der Zweck.

Antworten Sie sachlich mit einer Zahl und ohne Verteidigungshaltung — **genau diese Antworten liest der potenziel

*[gekürzt]*

### 👤 User

Binde auch youtube ein Tyrone ist A Kevin B und Hazar C.  Schau auch das der kontent und die scripts modern sind und auch eine zielgruppe 18-60 anspricht also breit gefächert mit junger ausdrucksweise und themen die interresieren und nicht zb wie wir eine rechnung schreiben oder ordner auspacken als negativbeispiel

### 🤖 Claude

Drei Dinge auf einmal — Rollen nach Drehtagen, YouTube als echter Kanal, und der Content-Ton. Der letzte Punkt ist berechtigt: **Tag 25 war genau das, was Sie meinen** („Angebote tippen, Zahlen zusammensuchen") — Bürokram als Thema. Das fliegt raus.

Zuerst die Rollen.

> 🔧 Bash

### 🤖 Claude

Der Personal-Branding-Punkt ändert die Ausrichtung der 50 % Unternehmens-Posts grundlegend — und löst gleichzeitig das Bürokram-Problem, weil Content über drei Leute automatisch interessanter ist als Content über Abläufe. Ich baue beides zusammen um.

> 🔧 Bash×4

### 🤖 Claude

Zwei Dinge dazu, eines davon offen gesagt: **Instagram scrapen kann ich hier nicht** — die Inhalte liegen hinter Login, Engagement-Daten fremder Accounts gibt die API nicht her, und automatisiertes Auslesen verstößt gegen die Nutzungsbedingungen. Was ich stattdessen mache: dokumentierte Format- und Retention-Benchmarks recherchieren und die auf die Skripte anwenden. Das sind belegbare Zahlen statt erfundener.

> 🔧 WebSearch×2

### 🤖 Claude

Recherche liefert vier Sachen, die meine Skripte betreffen — davon zwei echte Lücken. Ich baue alles ein.

> 🔧 Bash×2, Artifact×2

### 🤖 Claude

Beide Artefakte aktualisiert.
**Contentplan** → https://claude.ai/code/artifact/3ce4f6bc-daa2-476e-8af0-b713ca7fa91f
**Drehbuch** → https://claude.ai/code/artifact/8ae11fcf-1b8b-4e41-b992-1c456483ccd2

## Rollen nach Drehtagen

**Tyrone = A** (7 Auftritte): Manifest, Meinung, Fehler, Abgrenzung, Prognose, Bilanz, Moderation Live-Build. Der mit den Zahlen.
**Kevin = B** (5): Stack, KI-Tests, Live-Build. Meist nur Hände und Bildschirm. Der, der es baut.
**Hazar = C** (8): Roast, Ladezeit, Baukasten-Rechnung, Angebote, Audits. Der, der es aus Kundensicht zerreißt.

## Bürokram raus — 5 Posts ersetzt

Sie hatten recht, Tag 25 war exakt das Problem („Angebote tippen, Zahlen zusammensuchen"). Neu:

| Tag | Vorher | Jetzt |
|---|---|---|
| 4 | Prozess-Carousel, 8 Slides | **„Rate, was diese Website gekostet hat"** — Auflösung erst abends in der Story |
| 5 | Audit-Versprechen | **Website-Roast** — „Schick mir deine Website, ich sag dir in 30 Sek, was kaputt ist" |
| 7 | Wochenstatistik | **„Woche 1: 0 € Umsatz"** — offenes Geld-Update |
| 11 | KI schreibt Angebote | **„Was die KI verkackt hat"** — Fehler statt Erfolge |
| 25 | 5 Büro-Abläufe | **„KI baut Website in 60 Sek — wir bewerten ehrlich"** |

## Personal Branding: drei Charaktere statt „das Studio"

Wiedererkennung entsteht durch Wiederholung, nicht Abwechslung. Jeder bleibt bei seinem Thema, damit ein Zuschauer nach zehn Videos weiß, wer für was steht. Dazu vier wiederkehrende Reihen (Geld-Update, Roast, KI im Test, Live gebaut) und die Regel: **Streit ist Content** — wenn Tyrone einen Preis nennt und Kevin sagt, dafür geht das nicht, wird gefilmt. Das kann keine Agentur kopieren.

## Mindset als Säule — 6 Posts, keiner mehr

Die Regel, die es vor dem Peinlichen bewahrt: **eine Entscheidung, ein Preis.** „Wir haben ein Projekt abgelehnt und deshalb einen Monat nichts verdient" ist Mindset. „Konsequenz ist alles" ist Deko. Steht kein Preis im Post, fällt er raus.

Und die deutliche Warnung im Dokument: Sie verkaufen an Handwerker und Gastronomen, die seit zwanzig Jahren um sechs aufstehen. Von drei Zwanzigjährigen brauchen die keine Belehrung über harte Arbeit. Ein „5-Uhr-Club"-Post kostet mehr Vertrauen als zehn gute aufbauen.

## Instagram: was ich statt Scraping gemacht habe

Auslesen fremder Accounts geht nicht — Login-Wall, keine Interaktionsdaten über die API, und automatisiert verstößt es gegen die Nutzungsbedingungen. Stattdessen dokumentierte Benchmarks. **Vier Befunde ändern konkret etwas, zwei davon waren echte Lücken:**

**Lücke 1 — Trending-Audio.** Stand nirgends in meinem Dokument: Reels mit angesagtem Ton ab Sekunde 0 halten rund **41 % besser**. Jetzt Pflichtregel, leise unter der Stimme.

**Lücke 2 — Stitch und Duett.** Höchster Interaktionswert aller Formate (**5,1 %**), war im Plan überhaupt nicht vorgesehen. Passt perfekt zur Roast-Rolle: schlechten Website-Ratschlag richtigstellen, KI-Demos einordnen, Preisaussagen kontern. **Ein Stitch pro Woche freitags** — vier zusätzlic

*[gekürzt]*

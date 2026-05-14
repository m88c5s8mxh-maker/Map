---
name: marketing-mastery
description: Vollständige Marketing-KI-Skill-Library (40 Skills) von Corey Haines / Conversion Factory. Abdeckung: Copywriting, CRO, Emails, Content-Strategie, Ads, Cold Email, Launch, Pricing, Referrals, AI-SEO, Marketing-Psychologie, Competitor-Analyse und mehr. Trigger: /marketing-mastery oder jede Anfrage zu Conversion, Copy, Ads, Launch, Pricing, Churn, Onboarding, Social, Lead-Magneten, Referral-Programmen. Liest zuerst immer das Product-Marketing-Context-Dokument.
argument-hint: "<Sub-Skill> | <Aufgabe>"
source: https://github.com/coreyhaines31/marketingskills
---

# Marketing Mastery — 40-Skill Library

> Basiert auf der Open-Source Marketing Skills Library von [Corey Haines](https://corey.co) / [Conversion Factory](https://conversionfactory.co). Vollständige Library: [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

---

## Schritt 0 — Product Marketing Context (immer zuerst)

**VOR jeder Marketing-Aufgabe:** Prüfe ob `.agents/product-marketing.md` existiert (alternativ: `product-marketing-context.md`). Falls ja: lesen und verwenden. Falls nein: zuerst erstellen (Schritt 0a).

### Schritt 0a — Product Marketing Context erstellen

Speichert Produkt, Zielgruppe und Positioning als gemeinsame Basis für alle anderen Skills.

**Entweder Auto-Draft** (empfohlen): Codebase / Website scannen → V1 des Dokuments erstellen → User korrigiert.
**Oder manuell** durch diese Sektionen:

```
1. PRODUKT-ÜBERBLICK
   - Ein-Satz-Beschreibung
   - Was es tut (2-3 Sätze)
   - Kategorie (wo suchen Kunden danach?)
   - Business Model / Preismodell

2. ZIELGRUPPE
   - Unternehmenstyp (Branche, Größe, Phase)
   - Entscheider (Rolle, Abteilung)
   - Primärer Use Case / Jobs to be done

3. PROBLEME & SCHMERZPUNKTE
   - Hauptproblem vor deiner Lösung
   - Warum aktuelle Lösungen nicht reichen
   - Kosten des Problems (Zeit, Geld, Emotion)

4. WETTBEWERB
   - Direkte Konkurrenten (gleiches Problem, gleiche Lösung)
   - Indirekte Konkurrenten (gleiches Problem, andere Lösung)
   - Wie jeder davon zurückbleibt

5. DIFFERENZIERUNG
   - Deine Kerndifferenzierung (was Alternativen nicht haben)
   - Warum das besser ist

6. EINWÄNDE & ANTI-PERSONAS
   - Top 3 Einwände im Vertrieb
   - Wer ist definitiv kein guter Fit

7. BESTEHENDE KUNDEN
   - Sprache (exakte Phrasen aus Reviews, Interviews)
   - Top-Erfolgsgeschichten / Kennzahlen
```

Datei speichern als: `.agents/product-marketing.md`

---

## Sub-Skill Routing

Erkenne die Aufgabe und aktiviere den passenden Sub-Skill:

| User sagt... | Aktiviere |
|---|---|
| "schreib Copy", "Headline", "Landing Page Text", "Value Prop" | → [COPYWRITING](#copywriting) |
| "CRO", "mehr Conversions", "Landing Page review", "warum konvertiert das nicht" | → [CRO](#cro) |
| "Email-Sequenz", "Drip Campaign", "Lifecycle Email", "Nurture" | → [EMAILS](#emails) |
| "Content-Strategie", "welche Themen", "Content-Kalender", "Blog-Strategie" | → [CONTENT-STRATEGY](#content-strategy) |
| "Google Ads", "Meta Ads", "LinkedIn Ads", "Paid Campaign" | → [ADS](#ads) |
| "Cold Email", "B2B Outreach", "Kaltakquise", "Outreach-Sequenz" | → [COLD-EMAIL](#cold-email) |
| "Launch", "Product Hunt", "Go-to-Market", "Feature Announcement" | → [LAUNCH](#launch) |
| "Pricing", "Preisgestaltung", "Pakete", "Monetarisierung" | → [PRICING](#pricing) |
| "Referral-Programm", "Affiliate", "Word-of-Mouth" | → [REFERRALS](#referrals) |
| "AI Search", "LLM Citations", "ChatGPT ranking", "Perplexity" | → [AI-SEO](#ai-seo) |
| "Psychologie", "Cognitive Bias", "Nudge", "warum kaufen Menschen" | → [MARKETING-PSYCHOLOGY](#marketing-psychology) |
| "Konkurrenten analysieren", "Competitor Profile", "Wettbewerb" | → [COMPETITOR-PROFILING](#competitor-profiling) |
| "Lead-Magnet", "Freebie", "Email-Liste aufbauen" | → [LEAD-MAGNETS](#lead-magnets) |
| "Churn reduzieren", "Cancellation Flow", "Abwanderung" | → [CHURN-PREVENTION](#churn-prevention) |
| "Social Media Content", "LinkedIn Post", "Instagram Caption" | → [SOCIAL](#social) |
| "A/B Test", "Experiment", "Split Test" | → [AB-TESTING](#ab-testing) |
| "Onboarding", "Activation", "User einführen", "Time-to-Value" | → [ONBOARDING](#onboarding) |
| "Marketing-Ideen", "Strategien", "was könnte ich testen" | → [MARKETING-IDEAS](#marketing-ideas) |

---

## COPYWRITING

Du bist ein Conversion-Copywriter. Ziel: Klarer, überzeugender Text der Handlungen auslöst.

### Prinzipien

| Falsch | Richtig |
|---|---|
| Clever > Klar | **Klar > Clever** |
| Feature-fokussiert | **Benefit-fokussiert** |
| Vage ("Zeit sparen") | **Konkret** ("Reporting von 4h auf 15 Min.") |
| Unternehmens-Sprache | **Kunden-Sprache** (Phrasen aus echten Reviews) |

**Writing-Regeln:**
1. Einfach > Komplex — "nutzen" nicht "optimieren"
2. Spezifisch > Vage — keine Buzzwords ohne Substanz
3. Aktiv > Passiv — "Wir erstellen Reports" nicht "Reports werden erstellt"
4. Selbstbewusst > Absichernd — "fast", "sehr", "wirklich" raus
5. Zeigen > Erzählen — Ergebnis beschreiben statt Adverben

### Seiten-Struktur

**Above the Fold:**
- **Headline** — Single Most Important Message. Formeln:
  - "{Ergebnis erreichen} ohne {Schmerzpunkt}"
  - "Das {Kategorie} für {Zielgruppe}"
  - "Nie wieder {unangenehmes Ereignis}"
  - "{Frage die Hauptproblem anspricht}"
- **Subheadline** — Spezifizierung der Headline, max. 2 Sätze
- **Primärer CTA** — Was sie bekommen, nicht was sie tun

**Kern-Sektionen:**
| Sektion | Zweck |
|---|---|
| Social Proof | Glaubwürdigkeit (Logos, Zahlen, Testimonials) |
| Problem/Pain | Verständnis zeigen |
| Solution/Benefits | 3-5 Kernvorteile → Ergebnisse |
| How It Works | Komplexität reduzieren (3-4 Schritte) |
| Objection Handling | FAQ, Vergleiche, Garantien |
| Final CTA | Value zusammenfassen, Risiko umkehren |

**CTA-Formeln:**
- Schwach: Submit, Sign Up, Learn More, Loslegen
- **Stark:** "Kostenlos testen starten", "Mein Report holen", "Preise für mein Team sehen"
- **Formel:** [Aktionsverb] + [Was sie bekommen] + [Qualifier wenn nötig]

---

## CRO

Du bist ein Conversion-Rate-Optimierungs-Experte.

### CRO-Analyse-Framework (nach Impact-Reihenfolge)

**1. Value Proposition Clarity (höchster Impact)**
- Versteht ein Besucher in 5 Sekunden was es ist und warum er es will?
- Kernvorteil klar, spezifisch und differenziert?
- In Kunden-Sprache (nicht Unternehmens-Jargon)?

**2. Headline-Effektivität**
- Kommuniziert sie die Core Value Prop?
- Spezifisch genug um meaningful zu sein?
- Passt sie zur Traffic-Quelle (Message Match)?

**3. CTA Placement & Hierarchie**
- Ein klarer primärer CTA?
- Sichtbar ohne Scrollen?
- Button-Text: Wert kommunizieren, nicht nur Aktion
- An Key-Decision-Points wiederholt?

**4. Visual Hierarchy & Scannability**
- Hauptbotschaft beim Überfliegen erkennbar?
- Wichtigste Elemente visuell prominent?
- Genug Whitespace? Bilder unterstützend oder ablenkend?

**5. Trust Signals & Social Proof**
- Kunden-Logos (bekannte bevorzugt)
- Testimonials (spezifisch, attribuiert, mit Foto)
- Case Studies mit echten Zahlen
- Platzierung: Nahe CTAs und nach Benefit-Claims

**6. Objection Handling**
- Preis/Wert-Bedenken adressiert?
- "Funktioniert das für meine Situation?"
- Implementierungs-Komplexität?
- FAQ, Garantien, Vergleichscontent, Prozess-Transparenz

**7. Friction Points**
- Zu viele Formularfelder?
- Unklare nächste Schritte?
- Mobile UX? Ladezeit?

### Output-Format

```
## Quick Wins (sofort umsetzen)
## High-Impact Changes (priorisieren)
## Test-Ideen (A/B testen statt annehmen)
## Alternative Copy-Vorschläge
```

---

## EMAILS

### Email-Sequenz-Typen

| Typ | Trigger | Ziel |
|---|---|---|
| Welcome | Signup | Erwartungen setzen, ersten Wert liefern |
| Onboarding | Signup | User zur ersten Kernaktion führen |
| Nurture | Lead Magnet | Vertrauen aufbauen, Kauf vorbereiten |
| Abandoned Cart | Cart abandon | Kauf abschließen |
| Win-Back | Inaktiv X Tage | Re-Engagement |
| Post-Purchase | Kauf | Adoption, Upsell vorbereiten |
| Churn Prevention | Cancellation intent | Save |

### Email-Struktur-Prinzipien

**Subject Lines:**
- Curiosity Gap: "Warum [X] nicht funktioniert..."
- Direkter Nutzen: "3 Wege um [Ergebnis] zu erreichen"
- Personalisierung: "[Name], dein [Ding] wartet"
- Dringlichkeit: "Läuft heute ab"
- Max. 50 Zeichen für Mobile

**Email-Aufbau:**
1. Hook (erste Zeile = Preview Text = macht Öffnen wert)
2. Context (warum diese Email jetzt)
3. Hauptinhalt (eine Idee pro Email)
4. CTA (ein klarer nächster Schritt)
5. PS (oft meistgelesener Teil)

**Sequenz-Cadence:**
- Welcome: Tag 0 (sofort)
- Onboarding: Tag 1, 3, 7, 14
- Nurture: 1-2x/Woche, 4-8 Emails
- Abstand zwischen Emails bei kalten Kontakten: min. 2-3 Tage

---

## CONTENT-STRATEGY

### Strategische Entscheidungsmatrix

Beantworte zuerst diese Fragen:
1. **Wachstumsphase?** (Pre-PMF / Post-PMF / Scale)
2. **Primäres Ziel?** (Brand Awareness / Lead Gen / SEO / Retention)
3. **Verfügbare Ressourcen?** (Solo / kleines Team / Agentur)
4. **Audience-Plattform?** (wo sind die Kunden aktiv?)

### Content-Typen nach Funnel-Stage

| TOFU (Awareness) | MOFU (Consideration) | BOFU (Decision) |
|---|---|---|
| Blog, Videos, Podcasts | Vergleiche, Case Studies | Demos, Free Trials |
| How-to Guides | Webinare, Email-Sequenzen | ROI-Kalkulatoren |
| Social Content | Templates, Checklisten | Testimonials, Referenzen |

### Topic-Cluster-Strategie
- 1 Pillar Page (breites Thema, 2000+ Wörter)
- 5-10 Cluster Pages (spezifische Subtopics, verlinken zur Pillar)
- Interne Links stärken topical authority

### Content-Kalender-Framework
- **Thema der Woche** aus Kunden-Fragen / Support-Tickets ableiten
- **Format-Mix:** 70% Educational, 20% Entertaining, 10% Promotional
- **Evergreen > Trends:** Inhalte die in 2 Jahren noch relevant sind

---

## ADS

### Kampagnen-Setup-Framework

**Vor dem Start:**
1. Pixel/Tracking installiert und verifiziert?
2. Conversion Events definiert?
3. Budget festgelegt (mind. 30x CPC für Tests)?
4. Landing Page optimiert (CRO zuerst)?

### Platform-Auswahl

| Platform | Best für | Minimum Budget |
|---|---|---|
| Google Search | High-Intent, aktive Suche | €500/Monat |
| Google Display | Retargeting, Brand Awareness | €300/Monat |
| Meta (FB/IG) | B2C, Visual Products, Retargeting | €500/Monat |
| LinkedIn | B2B, Enterprise, Senior Roles | €1.500/Monat |
| TikTok | U35, Viral-Potential, Niedrigpreisprodukte | €500/Monat |

### Ad-Struktur

**Google Search:**
- 3-5 Anzeigengruppen pro Kampagne (nach Intent clustern)
- 3 Responsive Search Ads pro Anzeigengruppe
- Match Types: Exact + Phrase für Tests, Broad mit Smart Bidding für Scale
- Negative Keywords von Anfang an pflegen

**Meta:**
- Kampagne → Audience-Test (broad vs. interest vs. lookalike)
- Ad Set → 1 Audience
- Ads → 3-5 Creatives pro Ad Set (Video bevorzugt)
- Creative-Rotation: Wöchentlich schlechte pausieren, neue testen

### Ad Creative Formeln
- **Hook:** Problem ansprechen oder Pattern Interrupt
- **Problem/Agitate:** Schmerz verstärken
- **Solution:** Produkt als Lösung
- **Social Proof:** Schnelle Glaubwürdigkeit
- **CTA:** Eine klare Handlung

---

## COLD-EMAIL

### Grundregeln

1. **Personalisierung** — Zeige dass du ihre Situation kennst (1-2 spezifische Sätze)
2. **Relevanz** — Warum diese Person, warum jetzt?
3. **Wert zuerst** — Nicht um einen Gefallen bitten, sondern einen geben
4. **Kurz** — Max. 100 Wörter im ersten Email
5. **Ein CTA** — Maximal eine Frage oder eine Aktion

### Email-Struktur

```
Zeile 1: Personalisierter Hook (spezifisch zu ihrer Situation)
Zeile 2-3: Relevanz herstellen (warum ich, warum du, warum jetzt)
Zeile 4-5: Wert-Aussage (was du löst / beweist)
Zeile 6: Einziger CTA (Frage oder soft ask)
```

### Follow-Up-Sequenz (5 Emails)
- **Email 1:** Initialer Kontakt
- **Email 2** (Tag 3): Anderen Angle / andere Perspektive
- **Email 3** (Tag 7): Social Proof / Case Study
- **Email 4** (Tag 14): Direkter Wert (Resource / Insight)
- **Email 5** (Tag 21): Break-up Email ("Falls ich Sie zur falschen Zeit kontaktiere...")

### Was Cold Email killt
- Zu lang (>100 Wörter Email 1)
- Mehrere CTAs
- Über Dich reden statt über sie
- Kein spezifischer Grund für Kontakt
- Spam-Trigger-Wörter

---

## LAUNCH

### ORB-Framework (Owned → Rented → Borrowed)

**Owned Channels** (Priorität #1):
- Email-Liste, Blog, Podcast, Community
- Direkte Beziehung, kein Algorithmus
- Starten mit: Was fehlt in der Branche? → Blog / Email

**Rented Channels** (Verstärkung):
- Social Media: Twitter/X, LinkedIn, Instagram
- Nutze für Traffic → konvertiere in Owned Channels
- Max. 2 Plattformen, wo Audience aktiv ist

**Borrowed Channels** (Schnellstart):
- Guest Posts, Podcast-Auftritte, Co-Marketing
- Influencer (gratis Produkt ≠ bezahlte Kooperation)
- Borrowed attention → immer in Owned Channels konvertieren

### 5-Phasen Launch

**Phase 1: Intern** — Team + enge Bekannte testen, kritische Bugs fixen
**Phase 2: Alpha** — Handverlesene externe Early Adopters (1-on-1 Onboarding)
**Phase 3: Beta** — Breitere Gruppe, Community Building, Social Proof sammeln
**Phase 4: Public Launch** — Product Hunt, PR, alle Channels, Email Blast
**Phase 5: Wachstum** — Iterieren auf Basis echter Daten, Momentum halten

### Launch-Kanäle (Quick-Reference)

| Kanal | Timing | Aufwand |
|---|---|---|
| Email-Liste (eigene) | Tag 1 | Niedrig |
| Product Hunt | Tag 1 | Mittel |
| Twitter/X Thread | Tag 1 | Niedrig |
| LinkedIn Post | Tag 1 | Niedrig |
| Reddit (relevante Subreddits) | Tag 1-3 | Mittel |
| Hacker News (Show HN) | Tag 1 | Niedrig |
| Pressemitteilung | Woche 1 | Hoch |
| Podcast-Interviews | Wochen 2-4 | Hoch |

---

## PRICING

### Pricing-Modelle

| Modell | Wann nutzen | Beispiele |
|---|---|---|
| Flat Rate | Einfaches Produkt, 1 Segment | Newsletter, Tool |
| Per User | Collaboration, Teams wachsen | Slack, Notion |
| Usage-Based | Wert korreliert mit Nutzung | Twilio, AWS |
| Tiered | Mehrere Segmente, Feature-Differenzierung | HubSpot, Zapier |
| Freemium | Viraler Wachstumsmotor, große PLG | Spotify, Dropbox |

### Pricing-Psychologie

**Anchoring:** Teuerste Option zuerst zeigen → mittlere Option wirkt günstiger
**Charm Pricing:** €97 statt €100 (psychologische Schwelle)
**Decoy Effect:** 3 Optionen mit einem "schlechten" Decoy → macht mittlere attraktiver
**Loss Framing:** "Verliere €X pro Monat ohne uns" > "Spare €X"
**Annual vs. Monthly:** "2 Monate gratis" besser als "17% Rabatt" (konkret > abstrakt)

### Pricing-Page Best Practices
- Empfohlenen Plan visuell hervorheben ("Most Popular")
- Jährlich als Default anzeigen (mit monatlicher Option)
- Feature-Tabelle: Was jeder Plan NICHT hat (Limitation clarity)
- Social Proof nahe Pricing-Tabelle
- FAQ: "Welcher Plan passt zu mir?" adressieren

---

## REFERRALS

### Referral-Programm-Bedingungen (wann es funktioniert)
- Produkt hat organische Weiterempfehlungs-Rate (NPS >50 ideal)
- Customer Lifetime Value rechtfertigt Akquisitionskosten
- Klarer "Share Moment" im Produkt (wann teilen User natürlich?)

### Referral-Incentive-Typen

| Incentive | Best für | Beispiel |
|---|---|---|
| Beiderseitig Cash | High-LTV B2C | Uber: €5 für beide |
| Credits | SaaS, Subscription | Dropbox: 500MB für beide |
| Discount | E-Commerce | 20% für Referrer, 10% für Neukunde |
| Cash für Referrer only | B2B | Affiliate €100 |
| Feature Access | PLG-Produkte | Beta-Feature für Einladungen |

### Programm-Setup-Checklist
- [ ] Share Moment im Produkt identifiziert (nach Aktivierung / Erfolg)
- [ ] Incentive-Typ gewählt (beiderseitig vs. einseitig)
- [ ] Eindeutige Referral-Links pro User
- [ ] Email-Kommunikation: Einladungs-Template + Willkommens-Email
- [ ] Tracking: Wer hat wen eingeladen, Conversion-Rate, ROI
- [ ] Fraud Prevention: IP-Limits, Email-Domain-Rules

---

## AI-SEO

AI-SEO = Optimierung für ChatGPT, Claude, Perplexity, Google AI Overviews.

### Warum AI-SEO sich von klassischem SEO unterscheidet

| Klassisches SEO | AI-SEO |
|---|---|
| Keywords + Backlinks | Autorität + Direktheit |
| Position #1 in SERPs | Zitiert werden in AI-Antworten |
| Crawlability | LLM-Verständlichkeit |

### Content-Muster die AI bevorzugt zitiert

**1. Direkte Antworten** — Frage in H2, direkte Antwort in den ersten 2 Sätzen
**2. Listen & Tabellen** — Strukturiert > Fließtext
**3. Definitionen** — "X ist..." — klare, zitierbare Aussagen
**4. Statistiken mit Quelle** — LLMs zitieren konkrete Zahlen mit Attribution
**5. Schritt-für-Schritt** — Nummerierte Anleitungen werden oft vollständig übernommen

### Technische AI-SEO Checkliste
- `llms.txt` im Root der Website (wie robots.txt, erklärt LLMs die wichtigsten Seiten)
- robots.txt: GPTBot, ClaudeBot, GoogleOther **nicht blockieren**
- Schema.org: FAQPage, HowTo, Article, Organization vollständig
- Seiten-Titles als direkte Fragen: "Wie funktioniert X?" statt "X — Übersicht"

### Brand-Mentions in AI aufbauen

| Tier | Was es bedeutet | Wie erreichen |
|---|---|---|
| Tier 1 (Direkt) | Marke direkt in AI-Antworten genannt | Wikipedia-Eintrag, Branchenblogs, PR |
| Tier 2 (Attributiert) | Marke als Quelle verlinkt | Hochwertige zitierbare Inhalte erstellen |
| Tier 3 (Thematisch) | AI antwortet im Themenbereich ohne Nennung | Thematische Autorität aufbauen |

---

## MARKETING-PSYCHOLOGY

### Strategie-Denkmodelle

| Modell | Marketing-Anwendung |
|---|---|
| **First Principles** | Nicht kopieren was Konkurrenten tun — fragen warum sie es tun |
| **Jobs to be Done** | Produkt = Mittel zum Zweck. Frame um den Job, nicht Features |
| **Inversion** | "Was würde unsere Kampagne definitiv zum Scheitern bringen?" → verhindern |
| **80/20 Pareto** | 20% der Kanäle / Kunden bringen 80% der Ergebnisse — finden und fokussieren |
| **Theory of Constraints** | Ein Bottleneck limitiert das ganze System — finden und zuerst lösen |
| **Second-Order Thinking** | Flash Sale = Sofort-Revenue (1st) + Kunden warten auf Rabatte (2nd) |

### Buyer Psychology (wie Menschen entscheiden)

| Prinzip | Was es ist | Marketing-Anwendung |
|---|---|---|
| **Anchoring** | Erste Zahl setzt Referenzpunkt | Teuerste Option zuerst zeigen |
| **Social Proof** | Menschen folgen anderen | Kunden-Logos, Testimonials, Nutzerzahlen |
| **Scarcity** | Knappes wird wertvoller bewertet | "Nur 3 Plätze verfügbar" (wenn wahr) |
| **Loss Aversion** | Verlust wiegt 2x schwerer als Gewinn | "Verliere täglich €X ohne..." |
| **Reciprocity** | Wer etwas gibt, bekommt zurück | Wertvoller Gratis-Content → Vertrauen → Kauf |
| **Authority** | Experten-Status erhöht Überzeugungskraft | Auszeichnungen, Medien-Erwähnungen, Zertifikate |
| **Endowment Effect** | Besitz erhöht Wertschätzung | Free Trial: Kunden "besitzen" Produkt → ungern aufgeben |
| **IKEA Effect** | Eigene Arbeit steigert wahrgenommenen Wert | Konfiguratoren, Customization, Onboarding-Setup |
| **Mere Exposure** | Vertrautheit = Vorliebe | Konsistente Markenpräsenz über Zeit |
| **Commitment & Consistency** | Menschen bleiben bei einmal getroffenen Entscheidungen | Micro-Commitments im Funnel (erst klein bitten) |
| **Mimetic Desire** | Wir wollen was andere wollen | Waitlists, Exclusivity, "X Leute schauen gerade" |

### Ethischer Einsatz
Psychologische Prinzipien = Werkzeuge. Verwende sie um echten Wert klarer zu kommunizieren — nicht um Manipulation oder falsche Dringlichkeit zu erzeugen. Fabricated scarcity und fake social proof schaden langfristig.

---

## COMPETITOR-PROFILING

### Analyse-Framework (von URL)

**Was sammeln:**
1. **Positioning** — Hauptbotschaft, Zielgruppe laut Website
2. **Pricing** — Modell, Tiers, Preispunkte, Free-Plan?
3. **Top-Seiten** (via Ahrefs/Semrush) — welche Keywords ranken?
4. **Ad-Creative** (via Meta Ads Library, Google Ads Transparency) — was bewerben sie?
5. **Kundenmeinungen** — G2, Capterra, Trustpilot: was loben/kritisieren Kunden?
6. **Wachstums-Signale** — LinkedIn-Mitarbeiteranzahl, neue Job-Posts, Funding

### Competitor-Comparison-Pages (für SEO + Sales)

**Struktur einer "X vs. Y" Seite:**
1. Fair Vergleich (Stärken beide Seiten anerkennen)
2. Klarheit wer für wen besser ist (Use Cases)
3. Feature-Tabelle
4. Testimonials von gewechselten Kunden
5. CTA: "Teste [dein Produkt] kostenlos"

**"Alternativen zu X" Seite:**
- "Beste Alternativen zu [Konkurrent]" — fängt unzufriedene Kunden ab
- Format: Liste mit kurzem Pro/Con jeder Alternative
- Dein Produkt zuletzt (wirkt nicht wie Eigenwerbung) oder klar als "unsere Empfehlung" markiert

---

## LEAD-MAGNETS

### Lead-Magnet-Typen nach Conversion-Power

| Typ | Conversion-Rate | Aufwand | Best für |
|---|---|---|---|
| **Spezifisches Tool/Rechner** | Sehr Hoch | Hoch | SaaS, Finance, Marketing |
| **Checkliste** | Hoch | Niedrig | B2B, Prozesse |
| **Template** | Hoch | Mittel | Content, HR, Sales |
| **Mini-Kurs (5-7 Emails)** | Mittel-Hoch | Hoch | Education, Coaching |
| **Report/Studie** | Mittel | Sehr Hoch | B2B Enterprise |
| **Webinar** | Mittel | Mittel | Komplexe Produkte |
| **eBook/Guide** | Niedrig-Mittel | Hoch | Awareness |

### Was einen guten Lead-Magnet ausmacht
- **Spezifisches Ergebnis** — nicht "Marketing-Guide" sondern "30-Min-Audit für deine Homepage"
- **Sofort verwendbar** — Kein Studium nötig, direkt einsetzbar
- **Zeigt Kompetenz** — User versteht nach Konsum warum du Experte bist
- **Relevant für Hauptprodukt** — Natürlicher nächster Schritt ist dein Produkt

---

## CHURN-PREVENTION

### Churn-Signale erkennen (früh)

| Signal | Zeitfenster | Aktion |
|---|---|---|
| Login-Frequenz sinkt 50% | Woche 1-2 | Check-in Email |
| Kern-Feature nicht genutzt | Tag 7-14 | Activation-Kampagne |
| Support-Tickets häufen sich | Jederzeit | Proaktiver Outreach |
| Kreditkarte läuft ab | 30 Tage vorher | Dunning-Sequenz |
| NPS-Score 0-6 | Nach Survey | Persönlicher Anruf |

### Cancellation-Flow-Optimierung
1. **Exit-Survey** — Echten Grund erfassen (Pflicht, max. 5 Optionen)
2. **Angebot basierend auf Grund** — "Zu teuer" → Pause oder Downgrade anbieten
3. **Letzte Chance** — Konkretes Save-Angebot (Discount, Extended Trial)
4. **Graceful Exit** — Wenn User geht: Daten-Export, Rückkehr leicht machen

---

## SOCIAL

### Plattform-Strategie (2026)

**Instagram:**
- Shares > Saves > Likes > Comments (Algorithmus-Gewichtung)
- Reels 4-5x/Woche, max. 90 Sek. für beste Completion Rate
- Trial Reels für neue Formate testen
- Hook in ersten 3 Sekunden, Loop-Ende für Rewatches

**LinkedIn:**
- Text-Posts performen oft besser als Link-Posts
- Personal > Company (eigenes Profil nutzen)
- Langer Kommentar auf viralen Posts = Sichtbarkeit

**Twitter/X:**
- Threads > Einzel-Tweets für Reichweite
- Fragen provozieren Engagement
- Reply zu großen Accounts = Sichtbarkeit

### Content-Formate nach Plattform

| Format | Instagram | LinkedIn | Twitter/X |
|---|---|---|---|
| Erfahrungsberichte | Reel | Langer Post | Thread |
| Tipps/Lists | Carousel | Post | Thread |
| Behind-Scenes | Story/Reel | Post + Foto | Tweet |
| Ankündigungen | Post + Story | Post | Tweet |

---

## AB-TESTING

### Test-Priorisierung (ICE-Framework)

Bewerte jeden Test-Kandidaten:
- **Impact** (1-10): Wie groß ist der potenzielle Gewinn?
- **Confidence** (1-10): Wie sicher bist du, dass es funktioniert?
- **Ease** (1-10): Wie einfach zu implementieren?

ICE-Score = (Impact × Confidence × Ease) / 3 → höchste zuerst testen

### Statistische Validität
- **Min. Stichprobengröße:** 1.000 Conversions pro Variante (bei niedrigen Raten)
- **Test-Dauer:** Min. 2 Wochen (schließt Wochentags-Schwankungen aus)
- **Konfidenz-Level:** 95% vor Entscheidung
- **Eine Variable pro Test** — nie Headline UND Design gleichzeitig ändern

### Was testen (nach Impact-Reihenfolge)
1. Headline
2. CTA-Text und Placement
3. Social Proof (Typ, Position)
4. Hero-Bild/Video
5. Pricing-Page-Layout
6. Onboarding-Flow
7. Email-Subject-Lines

---

## ONBOARDING

### Activation-Framework

**Definiere zuerst:**
- Was ist der "Aha-Moment"? (Wann versteht der User den echten Wert?)
- Was ist die Kernaktion die zur Retention führt?
- Wie lange dauert aktuell: Signup → erste Kernaktion?

### Onboarding-Email-Sequenz (7 Tage)

| Tag | Email | Ziel |
|---|---|---|
| 0 | Willkommen + erster Schritt | Setup starten |
| 1 | Tip #1 (einfachster Wert) | Erste Erfolgs-Experience |
| 3 | "Hast du X schon probiert?" | Kernaktion pushen |
| 5 | Case Study / Erfolgsgeschichte | Motivation, Vertrauen |
| 7 | Check-in (was hindert dich?) | Objections abfangen |

### In-App-Onboarding-Muster
- **Progress Bar** — zeigt Fortschritt, motiviert Fertigstellung
- **Checklist** — konkrete nächste Schritte sichtbar
- **Tooltips** — kontextuelle Hilfe wo gebraucht
- **Empty State** — erster Inhalt/Beispiel schon vorhanden statt leer
- **Celebrate Wins** — konfetti/animation nach erstem Erfolg

---

## MARKETING-IDEAS

### Ideen-Kategorien für SaaS/Dienstleistungen

**Content Marketing:**
- Weekly Newsletter mit Brancheninsights (Swipe Files)
- Vergleiche: "Tool X vs. Tool Y" Seiten
- "State of [Branche]" Jahresbericht (Data + Survey)
- Tutorial-Videos für Kunden-Probleme

**Growth Engineering:**
- Kostenloses Tool das dein Hauptprodukt ergänzt (Lead-Magnet mit SEO-Wert)
- Öffentliche Roadmap / Feature-Voting
- Programmatic SEO: Template-Seiten für Keywords at Scale
- Partner-Integrations als co-Marketing

**Community:**
- Slack/Discord Community für Zielgruppe (nicht nur Kunden)
- Wöchentliche Live Q&A
- Showcase: Beste Kunden-Erfolge öffentlich teilen

**Partnerships:**
- Komplementäre Tools → gegenseitige Newsletter-Erwähnung
- Podcast-Gastauftritte
- Co-Webinare

---

## Verwandte Skills im Map-Repo

- `/seo-audit` — Technisches SEO-Audit inkl. AEO
- `/campaign-plan` — Vollständige Kampagnen-Planung
- `/email-sequence` — Email-Sequenzen für Vertrieb
- `/content-creation` — Content erstellen nach Brief
- `/draft-content` — Inhalte ausformulieren
- `/competitive-intelligence` — Wettbewerbs-Analyse
- `/compose-outreach` — Outreach-Texte schreiben

---

## Vollständige Library

Alle 40 Skills mit evals und Reference-Files:
[github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

```bash
# Alle Skills als Claude-Plugin installieren
/plugin marketplace add coreyhaines31/marketingskills

# Oder per CLI
npx skills add coreyhaines31/marketingskills
```

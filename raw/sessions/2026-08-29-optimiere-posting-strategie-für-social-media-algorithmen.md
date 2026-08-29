---
session_id: b339eb1b-2eed-4f6b-b7bd-cc478734b31d
title: "Optimiere Posting-Strategie für Social-Media-Algorithmen"
date: 2026-08-29
cwd: /Users/tyrone
duration_min: 12
score: 49
tier: 2
tools: [Bashx15, ToolSearchx1, WebSearchx6, WebFetchx4, Skillx1, Artifactx2]
tags: [session, claude-code]
---

# Optimiere Posting-Strategie für Social-Media-Algorithmen

> Session vom 2026-08-29 · 12 Min · Arbeitsverzeichnis `/Users/tyrone`

**Berührte Dateien:** `/private/tmp/claude-501/-Users-tyrone/b339eb1b-2eed-4f6b-b7bd-cc478734b31d/scratchpad/algo-playbook.html`

## Verlauf

### 👤 User

recherchiere nach Instagram-Algorithmen beziehungsweise Algorithmen allgemein für TikTok, Instagram, Twitter und YouTube. Schaute die Algorithmen davon an, angepasst auf unseren Contentplan, und sag mir dann am besten, was ich da beim Algorithmus einfach zu beachten habe. Vor allem auch, was Uhrzeiten, Tage und so weiter und so fort, wie viele Posts etc. betrifft.

> 🔧 Bash×11, ToolSearch, WebSearch×6, WebFetch×4, Skill

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

### 🤖 Claude

Ich habe die Recherche gemacht. Vorab ein Punkt, den ich transparent halte: **einen „Contentplan" konnte ich nirgends auf dem System finden** — weder in `Map/`, `Morio-Solutions/`, `Morio-Vertrieb/` noch sonst wo. Ich habe die Empfehlungen deshalb auf das gebaut, was in deinem Vault dokumentiert ist: Morio Solutions als B2B-Agentur für KI-Automation/Web, deutschsprachige KMU-Zielgruppe, kleines Produktionsteam. Wenn dein Plan anders aussieht, schick ihn mir — dann mappe ich das 1:1.

Lass mich das als Referenz-Seite bauen, die du wöchentlich aufmachen kannst.

> 🔧 Bash, Artifact

### 🤖 Claude

**Playbook:** https://claude.ai/code/artifact/27567951-403a-43b0-b7c1-4f6550f97923

Hier das Wichtigste in Kurzform:

## Die eine Sache, die alle vier Plattformen 2026 verbindet
Likes sind überall zum schwächsten relevanten Signal abgestuft. Was rankt, ist **Verweildauer + Weiterleitung**. Mosseri hat für Instagram bestätigt: ein DM-Send wiegt rund 3–5× so schwer wie ein Like. Auf X schlägt ein Post mit 50 Replies einen mit 500 Likes. Auf TikTok und YouTube entscheidet die Completion Rate.

## Zeiten (lokal, MEZ)

| Plattform | Tage | Primär | Sekundär |
|---|---|---|---|
| Instagram | Di–Do | 12–13 h | 18–20 h |
| Instagram B2B | Di–Do | 7:30–9 h | 12–13 h |
| TikTok | Di–Do | 14–18 h | Sa 11–13 h |
| YT Shorts | Mo/Mi/Fr | 9–11 h | 14–16 h |
| YT Long | Sa/So | 10–12 h | 20–23 h |
| X | Di–Do | 8–9 h | 12–13 h, 17 h |

Gesamt-Peak über alle Plattformen: **Di & Mi, 11–18 h**.

## Frequenz
- **Instagram:** 2–4 Reels + 3–5 Feed-Posts/Woche, Stories täglich (max. 5 am Stück — ab Story 6 bricht das Engagement ein)
- **TikTok:** 3–5/Woche. Mehr ist aktiv schädlich: schwache Signale senken die Verteilungsobergrenze des Accounts
- **YouTube:** Shorts 3–5/Woche, Long-Form 1–4/Monat. **Frequenz ist hier kein Ranking-Faktor** — YouTube bewertet jedes Video einzeln
- **X:** 3–5/Tag, gestreut. Der Creator-Diversity-Cap verteilt bei mehr Posts dieselbe Reichweite auf mehr Beiträge

Business-Accounts mit konstanten 3–5 Posts/Woche kommen laut Sprout Social Index auf ~3,5× mehr Reach als gleich große Accounts mit unregelmäßigen 1–2.

## Drei Dinge, die den größten Unterschied machen
1. **Feste Slots, vier Wochen unverändert.** TikTok verteilt planmäßig postende Accounts messbar besser (~35 %), und du bekommst erst so vergleichbare Daten.
2. **Die erste Stunde nach jedem Post im Kalender blocken.** Bei TikTok ist die erste Stunde mehr wert als die nächsten 23 zusammen; bei X sind es die ersten 30–60 Minuten.
3. **Links auf X nie in den Hauptpost** — bis zu 80 % Drosselung. Immer in den ersten Reply.

Der Wochenplan im Playbook geht von 4 vertikalen Videos/Woche aus, die dreifach ausgespielt werden (Reel → TikTok → Short) = 12 Platzierungen aus 4 Drehs. Das ist die Annahme, die ich am ehesten anpassen würde, sobald ich deinen Contentplan sehe — schick ihn mir, dann baue ich das Raster auf deine tatsächlichen Formate um.

### 👤 User

kannst du die Frequenz und die drei Dinge, die den größten Unterschied machen, auch in die PDF reinnehmen und mir dann die Datei geben, bzw. füge einfach so hinzu im Artifekt und aktualisier das Artifekt einfach nur? Ich brauche keine PDF.

### 🤖 Claude

Beides ist bereits drin — **Abschnitt 05 „Frequenz-Grenzen"** (Tabelle mit Unter-/Obergrenze pro Plattform) und **Abschnitt 08 „Wenn du nur drei Dinge umsetzt"**. Was in der Seite fehlt, sind die konkreten Zahlen, die ich dir im Chat dazu genannt habe. Die ergänze ich.

> 🔧 Bash×3, Artifact

### 🤖 Claude

Aktualisiert, gleiche URL: https://claude.ai/code/artifact/27567951-403a-43b0-b7c1-4f6550f97923

Beide Themen waren schon als eigene Abschnitte drin — ich habe sie um die konkreten Zahlen ergänzt, die vorher nur im Chat standen:

**Abschnitt 05 — Frequenz-Grenzen**
- Neue Kurzfassung als Einzeiler pro Plattform (IG 2–4 Reels + 3–5 Feed / TikTok 3–5 Woche / YT 3–5 Shorts Woche + 1–4 Long Monat / X 3–5 Tag)
- Hervorgehobene Kernzahl: 3,5× mehr Reach bei konstanten 3–5 Posts/Woche gegenüber unregelmäßigen 1–2 (Sprout Social Index 2025, bei gleicher Followerzahl), plus der Hinweis, dass Überdosierung auf TikTok und X aktiv Reichweite kostet
- Die Detailtabelle mit „zu wenig / Sweet Spot / zu viel" steht unverändert darunter

**Abschnitt 08 — Die drei Dinge**
- Feste Slots: jetzt mit den ~35 % besserer Verteilung auf TikTok
- Erste Stunde: mit „mehr wert als die folgenden 23 zusammen" und den 30–60 Minuten auf X
- Dritte Karte umgestellt auf die X-Link-Regel mit den bis zu 80 % Drosselung — die war vorher nur in der Warnbox in Abschnitt 06 versteckt, obwohl sie der billigste Sofort-Hebel überhaupt ist. Der „weiterschickbar"-Gedanke steckt jetzt als Schlusssatz in derselben Karte.

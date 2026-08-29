---
tags: [concept, deployment, architektur, refactoring, hoch]
sources: [raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]
updated: 2026-08-29
---

# Additive Fremdcode-Einbettung

## Definition

Ein eigenständiges Werkzeug in eine **fremde, aktiv weiterentwickelte Codebasis** einsetzen,
unter drei Bedingungen: (1) keine bestehende Zeile wird verändert, (2) der Einsatz ließe sich
in einem Schritt wieder herausnehmen, (3) die Behauptung „sonst nichts berührt" ist
**gemessen**, nicht behauptet.

Konkret durchgespielt beim Einsetzen von [[morio-studio]] ins [[morio-crm]] — ein
schwarz-lila Vollbild-Werkzeug in ein CRM, an dem gleichzeitig jemand anders arbeitete.

> [Quelle: raw/sessions/2026-08-25-video-editor-mit-3d-rekonstruktion-und-ki-integration.md]

## Die sechs Techniken

| Technik | Warum |
|---|---|
**Eigene, fest verdrahtete Design-Tokens** (`studio-*`), additiv an `globals.css` angehängt | Das Wirtssystem bekam zwischenzeitlich einen Hell/Dunkel-Umschalter. Wer die Tokens des Wirts benutzt, wird mitgeschaltet — hier sollte das Werkzeug **immer** dunkel bleiben. |
**Eigene Keyframe- und Klassennamen** für Animationen, Scrollbar, Slider | Namenskollision in einer geteilten CSS-Datei ist unsichtbar, bis sie es nicht mehr ist |
**Sonderheader pro Route scopen**, nie global | COOP/COEP fürs Browser-Rendering nur auf `/studio`; global gesetzt hätten sie jede andere Seite des CRM beeinflusst |
**`h-screen` → `h-full`** beim Wechsel von eigenständig zu eingebettet | Eine App, die ihr eigenes Fenster besaß, muss im Wirtslayout auf dessen Container hören |
**Nur die eigenen Dateien committen** | Im Arbeitsbaum lagen unfertige Änderungen einer parallelen Sitzung. Ein `git add -A` hätte fremde, halbfertige Arbeit mit deployt |
**Abnahmekriterium „0 neue Typfehler"** statt „Type-Check grün" | Das Repo hatte 18 vorbestehende Fehler. Ein absolutes Kriterium wäre unerfüllbar gewesen und hätte zum Anfassen fremden Codes gezwungen |

Beim automatisierten Umschreiben der Tailwind-Farbklassen auf die eigenen Tokens ist die
Kontrolle wert, dass **Opazitäts-Modifier** (`/40`, `/15`) erhalten bleiben — eine naive
Ersetzung frisst sie.

## Die Messung, ohne die es nur eine Behauptung ist

- **`curl` gegen Nachbarrouten**, nicht nur gegen die eigene: `/studio` trägt die neuen
  Header, `/` und `/websites` **nicht**. Das ist der Beweis für „sauber isoliert".
- **Type-Check vor und nach** dem Eingriff, mit derselben Messung. Differenz zählt, nicht der
  Absolutwert.
- **`git diff` auf Dateiebene** vor dem Commit — welche Dateien tatsächlich in den Commit
  gehen, nicht welche man zu ändern glaubte.

## Vorbestehende Fehler: nicht anfassen — bis sie blockieren

Die Grundhaltung war richtig: die 18 fremden Typfehler (durchgehend derselbe Icon-Prop-Bug)
blieben unangetastet, damit der eigene Beitrag prüfbar bleibt. Sie kamen aber zurück, als
`next build` daran abbrach und der Deploy ohne Fix unmöglich war.

**Der Ausweg ist nicht, die Regel zu brechen, sondern sie zu trennen:** der Fix ging in einen
**eigenen, isolierten Commit**, getrennt vom Feature. Details zur Ursache
(`React.ElementType` → `LucideIcon`) stehen in [[morio-crm]].

## Beim Push in ein fremdbewirtschaftetes Repo

Zwischen Commit und Push standen plötzlich zwei fremde Commits auf `origin`.

- **Rebase statt Überschreiben**, immer.
- `package-lock.json` **nicht von Hand mergen** — durch `npm install` neu erzeugen. Ein
  Lockfile-Merge von Hand ist ein Ratespiel.
- Additiv geschriebenes CSS merged git korrekt von beiden Seiten — das ist der zweite Nutzen
  der Additivität, neben der Rücknehmbarkeit.
- **Nach dem Rebase erneut prüfen** (Type-Check, Routing, Header). Der geprüfte Stand vor dem
  Rebase ist nicht der Stand, der gepusht wird.

## Übertragbare Regel

**Additiv heißt nachweisbar additiv.** Jede der drei Bedingungen oben braucht eine Messung
gegen etwas, das man *nicht* geändert hat — sonst ist „ich habe nichts anderes angefasst"
eine Erinnerung, keine Aussage. Und wer in einem Repo arbeitet, an dem parallel jemand anders
arbeitet, prüft den Remote-Stand **vor jedem Build und vor jedem Push**, nicht nur einmal am
Anfang.

## Verbindungen
- [[morio-studio]] — der eingesetzte Fremdkörper
- [[morio-crm]] — das Wirtssystem, inkl. Parallelarbeit am selben Repo
- [[server-quellcode-drift]] — was passiert, wenn die Referenz für „was läuft" falsch gewählt wird
- [[vorschau-webseiten]] — ein früheres Feature, nativ statt eingebettet gebaut
- [[Deploy Checklist]] · [[Rollback Plan]] · [[tech-debt]]

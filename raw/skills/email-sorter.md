---
name: email-sorter
description: |
  Sortiert E-Mails automatisch in Gmail-Labels/Ordner ein. Nutze diesen Skill immer wenn der
  User sagt "sortiere meine Emails", "raeum mein Postfach auf", "weise Emails den richtigen
  Ordnern zu", "emails einordnen", "postfach organisieren". Auch triggern bei Aussagen wie
  "emails von Instagram oder Finanzamt ins richtige Label", "Label erstellen und Emails
  zuweisen", oder wenn der User fragt ob seine Emails geordnet sind. Immer nutzen wenn Gmail
  zusammen mit Sortierung, Ordner oder Labels erwaehnt werden.
---

# Email Sorter — Automatische Gmail-Sortierung

## SCHRITT 0 — Verfügbaren Zugang ermitteln (IMMER ZUERST)

Bevor irgendetwas anderes passiert, prüfe welcher Zugang verfügbar ist:

### Option A — Gmail MCP verfügbar
Rufe `tool_search("gmail list messages")` auf. Wenn Gmail-Tools gefunden werden (z.B. `gmail_list_messages`, `gmail_modify_message`, `gmail_create_label`) → **weiter mit Methode A** unten.

### Option B — Claude in Chrome verfügbar, Gmail MCP fehlt
Wenn tool_search kein Gmail findet, aber `Claude in Chrome:computer` verfügbar ist → **weiter mit Methode B** unten.

### Option C — Nichts verfügbar
Dem User klar erklären was fehlt und wie er es aktiviert:
> "Gmail ist nicht verbunden. Bitte aktiviere Gmail unter Claude.ai → Einstellungen → Integrationen, dann starte einen neuen Chat."

---

## METHODE A — Gmail MCP (bevorzugt)

### 1. Emails laden
```
gmail_list_messages(labelIds=["INBOX"], maxResults=50)
Felder pro Email: id, from, subject, snippet, labelIds
```

### 2. Analysieren & Labels zuweisen
Für jede Email Absender-Domain + Betreff gegen Sortierregeln prüfen (siehe unten).
Dann: `gmail_modify_message(id, addLabelIds=[label_id])`

### 3. Fehlende Labels erstellen
```
gmail_create_label(name, backgroundColor)
```

### 4. Zusammenfassung ausgeben (siehe Format unten)

---

## METHODE B — Gmail im Browser (Fallback wenn MCP fehlt)

Wenn Gmail MCP nicht verfügbar ist, Gmail über den Browser bedienen:

### 1. Tab-Kontext prüfen
```
tabs_context_mcp() → tabId ermitteln
```

### 2. Gmail öffnen falls nötig
Prüfe ob Gmail bereits im Browser offen ist. Falls nicht:
```
navigate(url="https://mail.google.com", tabId=tabId)
```

### 3. Emails per Browser-Suche sortieren
Gmail hat eingebaute Suchfilter. Für jede Kategorie:

```
# Beispiel Social Media
navigate(url="https://mail.google.com/mail/u/0/#search/from%3A(instagram+OR+facebook+OR+linkedin)", tabId=tabId)
# Alle auswählen → Label zuweisen über Gmail UI
```

**Konkrete Browser-Schritte per Kategorie:**
1. Gmail-Suche aufrufen (Suchfeld oben)
2. Suchbegriff eingeben (z.B. `from:instagram OR from:facebook`)
3. Screenshot machen um Ergebnisse zu sehen
4. "Alle auswählen" klicken
5. Labels-Button klicken → Label auswählen oder erstellen
6. Bestätigen

### 4. Reihenfolge der Kategorien im Browser
Social Media → Finanzen → Behörden → Rechnungen → Shopping → Reisen → Newsletter

### 5. Nach jeder Kategorie kurz Screenshot für Kontrolle

---

## Sortierregeln

| Label | Absender / Stichwörter im Betreff |
|---|---|
| 📱 **Social Media** | instagram, facebook, twitter, x.com, linkedin, tiktok, youtube, pinterest, snapchat, reddit, threads |
| 💰 **Finanzen** | finanzamt, steuer, elster, bank, sparkasse, volksbank, ing, dkb, paypal, klarna, n26, commerzbank, postbank, comdirect |
| 🏛️ **Behörden** | finanzamt, amt, behörde, bundesagentur, krankenkasse, aok, tkk, barmer, rentenversicherung, stadt, gemeinde, landkreis |
| 📄 **Rechnungen** | rechnung, invoice, quittung, beleg, zahlung fällig, mahnung, lastschrift |
| 🛒 **Shopping** | amazon, ebay, zalando, otto, saturn, mediamarkt, aboutyou, h&m, zara, lieferando, hellofresh |
| ✈️ **Reisen** | booking.com, airbnb, lufthansa, ryanair, easyjet, db bahn, flixbus, check24, tripadvisor |
| 📧 **Newsletter** | newsletter, unsubscribe, abmelden, noreply, no-reply, marketing, angebot, deal, rabatt |

**Priorität bei Überschneidungen:**
Behörden > Finanzen > Rechnungen > Shopping > Reisen > Social Media > Newsletter

---

## Vor dem Sortieren immer fragen

> "Soll ich die sortierten Emails auch aus dem Posteingang entfernen (nur Labels), oder im Posteingang lassen?"

Bei mehr als 100 Emails: Bestätigung einholen bevor gestartet wird.

---

## Zusammenfassung-Format (nach dem Sortieren)

```
✅ XX Emails sortiert

📱 Social Media        X  (Instagram X, LinkedIn X)
💰 Finanzen            X  (Finanzamt X, DKB X)
🏛️ Behörden            X
📄 Rechnungen          X
🛒 Shopping            X  (Amazon X, Zalando X)
✈️ Reisen              X
📧 Newsletter          X
⬜ Nicht zugeordnet    X
```

---

## Benutzer-eigene Regeln

Wenn der User eigene Regeln nennt, diese sofort anwenden:
- "Emails von max@firma.de → Arbeit"
- "Betreff mit 'Kita' → Familie"
- "Amazon-Rechnungen → Rechnungen statt Shopping"

---

## Wichtige Sicherheitsregeln

- **Niemals Emails löschen** — nur labeln
- Spam-Ordner komplett ignorieren
- Bei unklarer Kategorie → unverändert lassen, in Zusammenfassung als "Nicht zugeordnet" aufführen
- Keine Emails öffnen die verdächtig wirken

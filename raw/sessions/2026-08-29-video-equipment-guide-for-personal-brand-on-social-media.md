---
session_id: efc8249c-f32a-410b-9332-3e4e982aabf8
title: "Video equipment guide for personal brand on social media"
date: 2026-08-29
cwd: /Users/tyrone
duration_min: 6
score: 43
tier: 1
tools: [Skillx1, Bashx11]
tags: [session, claude-code]
---

# Video equipment guide for personal brand on social media

> Session vom 2026-08-29 · 6 Min · Arbeitsverzeichnis `/Users/tyrone`

## Verlauf

### 👤 User

um erfolgreich eine Personal Brand und ein Unternehmen über Social Media zu repräsentieren, was benötigt man denn am besten für Video Equipment, sprich von Kamera bis Tools?

### 🤖 Claude

Kurz vorweg die wichtigste Regel: **Ton > Licht > Kamera.** Schlechtes Bild verzeiht der Zuschauer, schlechten Ton nicht. Die meisten geben das Budget genau falsch herum aus.

## Die drei Stufen

### 1. Starter — ca. 500–900 €
Reicht für 90 % aller Reels/Shorts/LinkedIn-Videos. Ernsthaft.

| Kategorie | Empfehlung | ca. Preis |
|---|---|---|
| Kamera | Dein iPhone/Pixel (4K 60, ProRes/LOG bei neueren iPhones) | – |
| Mikro | DJI Mic 3 oder Rode Wireless GO III (2 Sender = Interviews möglich) | 250–330 € |
| Licht | Amaran 60x oder Godox SL60 + Softbox 90 cm | 180–300 € |
| Stativ | Manfrotto Befree + Smartphone-Klemme | 120 € |
| Schnitt | CapCut / DaVinci Resolve (kostenlos) | 0 € |

**Geheimtipp:** DJI Osmo Pocket 3 (~520 €). Gimbal, 1"-Sensor, Rotate-Display für Hoch- und Querformat, koppelt direkt mit DJI Mic. Für Solo-Creator das beste Preis-Leistungs-Gerät am Markt — man dreht damit tatsächlich, statt die große Kamera im Schrank zu lassen.

### 2. Solide / semi-professionell — ca. 2.500–3.500 €
Das ist der Punkt, an dem es sichtbar nach „Unternehmen" aussieht.

| Kategorie | Empfehlung | ca. Preis |
|---|---|---|
| Kamera | Sony ZV-E10 II, Sony a6700 oder Fujifilm X-S20 | 900–1.500 € |
| Objektiv | Sigma 18–50 mm f/2.8 (Allrounder) + Sigma 16 mm f/1.4 (Talking Head) | 550 + 400 € |
| Mikro | DJI Mic 3 / Rode Wireless Pro (32-bit Float = kein Übersteuern) | 330–450 € |
| Licht | Amaran 100x als Key + kleines Fill/Hairlight + Softbox | 500–700 € |
| Stativ | SmallRig/Manfrotto Video-Stativ mit Fluid-Neiger | 200 € |
| Teleprompter | Elgato Prompter (eigenes Display, kein Handy-Gefrickel) | 280 € |
| Karten/Akkus | SanDisk V30 128 GB ×2, 3 Ersatzakkus, Dummy-Akku fürs Studio | 200 € |

**Warum Sony/Fuji hier:** verlässlicher Autofokus fürs Gesicht. Wenn du alleine drehst und niemand nachschärft, ist AF das entscheidende Feature — nicht die Auflösung.

### 3. Pro / Team-Setup — 6.000 €+
Nur sinnvoll, wenn regelmäßig jemand anderes filmt oder ihr Kunden-Content produziert.

- **Kamera:** Sony FX30 (APS-C) oder FX3 / Lumix S5 II X — echte Cine-Kameras mit XLR-Griff, internem ND-Denken, besserer Hitzeableitung bei langen Takes
- **Zweitkamera** identischer Marke für Interview-Schnittbilder (Farbabgleich!)
- **Audio:** Sennheiser MKE 600 oder Rode NTG5 Shotgun am Galgen + Wireless als Backup
- **Podcast/Voice-over:** Shure MV7+ (USB+XLR) oder SM7B + Cloudlifter
- **Licht:** Aputure 300x + Light Dome II, dazu Nanlite PavoTubes für Farbakzente im Hintergrund
- **Bewegung:** DJI RS 4 Mini Gimbal
- **Monitoring:** kleiner Field-Monitor + Kopfhörer (Ton *immer* mithören)

## Tools & Software — oft wichtiger als die Kamera

**Schnitt:** DaVinci Resolve (kostenlos, professionell) oder Premiere Pro. CapCut für schnelle Shorts, aber Vorsicht mit den Nutzungsbedingungen bei kommerziellem Content.

**Effizienz-Stack für Social:**
- **Descript** — Video schneiden durch Textbearbeitung, Filler-Words automatisch raus. Spart bei Talking-Heads massiv Zeit
- **Opus

*[gekürzt]*

### 👤 User

hier kannst du mir einfach mal die Stufen und die Tools im Endeffekt in eine PDF packen und mir da einfach eine Auflistung schreiben. Und die Stufen erklären natürlich auch noch

### 🤖 Claude

Ich packe das in ein sauberes PDF.

> 🔧 Skill

### 👤 User

Base directory for this skill: /Users/tyrone/.claude/skills/pdf

# PDF Processing Guide

## Overview

This guide covers essential PDF processing operations using Python libraries and command-line tools. For advanced features, JavaScript libraries, and detailed examples, see REFERENCE.md. If you need to fill out a PDF form, read FORMS.md and follow its instructions.

## Quick Start

```python
from pypdf import PdfReader, PdfWriter

# Read a PDF
reader = PdfReader("document.pdf")
print(f"Pages: {len(reader.pages)}")

# Extract text
text = ""
for page in reader.pages:
    text += page.extract_text()
```

## Python Libraries

### pypdf - Basic Operations

#### Merge PDFs
```python
from pypdf import PdfWriter, PdfReader

writer = PdfWriter()
for pdf_file in ["doc1.pdf", "doc2.pdf", "doc3.pdf"]:
    reader = PdfReader(pdf_file)
    for page in reader.pages:
        writer.add_page(page)

with open("merged.pdf", "wb") as output:
    writer.write(output)
```

#### Split PDF
```python
reader = PdfReader("input.pdf")
for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)
    with open(f"page_{i+1}.pdf", "wb") as output:
        writer.write(output)
```

#### Extract Metadata
```python
reader = PdfReader("document.pdf")
meta = reader.metadata
print(f"Title: {meta.title}")
print(f"Author: {meta.author}")
print(f"Subject: {meta.subject}")
print(f"Creator: {meta.creator}")
```

#### Rotate Pages
```python
reader = PdfReader("input.pdf")
writer = PdfWriter()

page = reader.pages[0]
page.rotate(90)  # Rotate 90 degrees clockwise
writer.add_page(page)

with open("rotated.pdf", "wb") as output:
    writer.write(output)
```

### pdfplumber - Text and Table Extraction

#### Extract Text with Layout
```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        print(text)
```

#### Extract Tables
```python
with pdfplumber.open("document.pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for j, table in enumerate(tables):
            print(f"Table {j+1} on page {i+1}:")
            for row in table:
                print(row)
```

#### Advanced Table Extraction
```python
import pandas as pd

with pdfplumber.open("document.pdf") as pdf:
    all_tables = []
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            if table:  # Check if table is not empty
                df = pd.DataFrame(table[1:], columns=table[0])
                all_tables.append(df)

# Combine all tables
if all_tables:
    combined_df = pd.concat(all_tables, ignore_index=True)
    combined_df.to_excel("extracted_tables.xlsx", index=False)
```

### reportlab - Create PDFs

#### Basic PDF Creation
```python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

c = canvas.Canvas("hello.pdf", pagesize=letter)
width, height = letter

# Add text
c.drawString(100, he

*[gekürzt]*

> 🔧 Bash×11

### 🤖 Claude

Fertig — das PDF liegt auf deinem Desktop:

**[Video-Equipment-Guide.pdf](Desktop/Video-Equipment-Guide.pdf)** · 6 Seiten, A4

**Aufbau:**

| Seite | Inhalt |
|---|---|
| 1 | Grundregel (Ton > Licht > Kamera) + Erklärung, wofür die Stufen stehen |
| 2 | **Stufe 1 – Starter**, ca. 500–900 € |
| 3 | **Stufe 2 – Solide**, ca. 2.500–3.500 € |
| 4 | **Stufe 3 – Professionell**, ab ca. 6.000 € |
| 5 | Tools & Software (Schnitt, Effizienz-Stack, Planung) |
| 6 | Was die meisten unterschätzen + Empfehlung & Budgetformel |

Jede Stufe hat eine kurze Einordnung („für wen, was du damit erreichst") und darunter die Equipment-Tabelle mit Kategorie, konkreter Empfehlung und Richtpreis. Die Stufen sind bewusst nach **Produktionsrealität** sortiert statt nach Preis: Stufe 1 = Beweglichkeit, Stufe 2 = Wiedererkennbarkeit, Stufe 3 = Arbeitsteilung. Mikro und Licht aus Stufe 1 bleiben in Stufe 2 im Einsatz — du wirfst nichts weg.

Falls du eine Variante brauchst, die auf dein konkretes Hauptformat zugeschnitten ist (Talking Head, unterwegs, Interviews oder Produktaufnahmen), oder das Ganze mit deinem Branding statt der neutralen Optik — sag Bescheid, dann baue ich das um.

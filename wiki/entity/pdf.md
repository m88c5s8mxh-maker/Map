---
tags: [entity, skill, dokumente]
sources: [raw/skills/pdf.md]
trigger: /pdf
updated: 2026-04-17
---

# pdf

**Trigger:** `/pdf`  
**Argument:** `PDF-Dateipfad`  
**Kategorie:** [[document-comms-skills]]

## Zweck
PDF-Dateien lesen, extrahieren, zusammenführen, aufteilen, erstellen oder ausfüllen.

## Wann nutzen
Text/Tabellen extrahieren, PDFs mergen/splitten, Formulare ausfüllen, OCR

## Quellen
> [Source: raw/skills/pdf.md]

## Verbindungen (Graph-Extraktion)
- [[pdfplumber]] - `uses` [EXTRACTED]
- [[pypdf]] - `uses` [EXTRACTED]
- [[pytesseract (OCR)]] - `uses_for_ocr` [EXTRACTED]
- [[reportlab]] - `uses` [EXTRACTED]

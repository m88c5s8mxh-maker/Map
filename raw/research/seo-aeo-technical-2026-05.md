# SEO/AEO Technisch — llms.txt, GPTBot, YouTube SEO für AI

**Quelle:** ahrefs.com/blog (AEO Course Modul 3)
**Gescrapt:** 2026-05-14
**Kategorie:** marketing

## AEO Kurs Modul 3 — Technisches SEO für AI (neu, Mai 2026)

### 3.4 Technical SEO for AI: robots.txt, GPTBot & llms.txt

**robots.txt für AI-Crawler:**
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: GoogleOther-Image
Allow: /
```
Wichtig: AI-Crawler standardmäßig NICHT blockieren wenn man AI-Sichtbarkeit will.

**llms.txt — Das neue robots.txt für LLMs:**
- Neue Standard-Datei: `/llms.txt` im Root
- Erklärt LLMs: Was ist diese Site, welche Seiten sind relevant
- Format: Markdown mit strukturierten Links
- Noch kein offizieller Standard, aber Anthropic/Perplexity erkennen es bereits

```markdown
# Firmenname
> Kurze Beschreibung was die Firma macht

## Services
- [Service 1](https://example.com/service1): Kurzbeschreibung
- [Service 2](https://example.com/service2): Kurzbeschreibung

## About
- [Über uns](https://example.com/about)
- [Kontakt](https://example.com/kontakt)
```

### 3.3 YouTube SEO for AI Search

Neue Erkenntnis: YouTube-Videos erscheinen in AI Overviews und Perplexity-Antworten.

**Optimierung für AI-Zitation:**
- Video-Beschreibung: erste 250 Zeichen = direkt zitierbare Zusammenfassung
- Chapters/Timestamps = AI versteht Video-Struktur
- Transkript aktivieren → AI kann Content lesen
- Titel als direkte Frage: "Wie macht man X?" statt "X Tutorial"

### 3.2 Brand Mentions: 3 Tiers für AI-Zitation

**Tier 1 — Direkte Mentions:** Marke wird direkt genannt in AI-Antworten
**Tier 2 — Attributierte Mentions:** Marke wird in Quellenlinks gezeigt
**Tier 3 — Thematische Autorität:** AI-Antworten im Themenbereich ohne direkte Nennung

**Wie Tier 1 erreichen:**
1. Auf bekannten zitierten Sites linken lassen (Wikipedia, Branchenblogs)
2. Primäre Fragen des Themas mit vollständigen Antworten beantworten
3. Structured Data + FAQ Schema auf allen relevanten Seiten

## Verbundene Skills

| Skill | Update |
|-------|--------|
| `raw/skills/seo-audit.md` | llms.txt als neuer AEO-Check; GPTBot robots.txt; YouTube SEO for AI; 3-Tier Brand Mentions |

## Tags
`#seo` `#aeo` `#llmstxt` `#gptbot` `#ai-search` `#youtube-seo` `#ahrefs` `#2026`

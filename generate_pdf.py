from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
from reportlab.lib.enums import TA_CENTER, TA_LEFT

out_path = 'C:/Users/kbeck/OneDrive/Dokumente/Agency/Map/SKILLS_OVERVIEW.pdf'

# ── Deutsche Skill-Beschreibungen ───────────────────────────────────────────
SKILLS = {
    'Sales & CRM': [
        ('/account-research',       'Account-Recherche',            'Sammelt Firmendaten, Entscheidungsträger und News für eine gezielte Kontaktaufnahme.'),
        ('/call-prep',              'Gesprächsvorbereitung',        'Bereitet Verkaufsgespräche vor: Agenda, Gesprächseinstiege und Einwandbehandlung.'),
        ('/call-summary',           'Gesprächsprotokoll',           'Erstellt strukturierte Zusammenfassungen nach Kundengesprächen mit nächsten Schritten.'),
        ('/close-management',       'Abschluss-Management',         'Analysiert den Deal-Status und erstellt einen konkreten Aktionsplan zum Abschluss.'),
        ('/compose-outreach',       'Outreach verfassen',           'Schreibt personalisierte Erst-E-Mails auf Basis von Recherche-Daten.'),
        ('/contact-research',       'Kontakt-Recherche',            'Recherchiert Hintergrundinformationen zu einzelnen Ansprechpartnern.'),
        ('/draft-outreach',         'Outreach-Entwurf',             'Erstellt Sequenzen für E-Mail-Kampagnen mit individuellen Anpassungen.'),
        ('/email-sequence',         'E-Mail-Sequenz',               'Plant und schreibt mehrstufige Verkaufs-E-Mail-Sequenzen.'),
        ('/enrich-lead',            'Lead anreichern',              'Ergänzt CRM-Einträge mit fehlenden Kontakt- und Firmendaten.'),
        ('/pipeline-review',        'Pipeline-Review',              'Analysiert die Vertriebspipeline und gibt Empfehlungen zu Prioritäten.'),
        ('/prospect',               'Prospecting',                  'Sucht und qualifiziert neue potenzielle Kunden nach definierten Kriterien.'),
        ('/sequence-load',          'Sequenz laden',                'Lädt und aktiviert E-Mail-Sequenzen direkt im CRM-System.'),
        ('/draft-offer',            'Angebot erstellen',            'Erstellt professionelle Angebote und Preisvorschläge für Kunden.'),
    ],
    'Marketing & Content': [
        ('/brand-guidelines',       'Markenrichtlinien',            'Dokumentiert und pflegt Corporate Design, Tonalität und Markenstandards.'),
        ('/brand-review',           'Marken-Review',                'Prüft Inhalte und Designs auf Konformität mit den Markenrichtlinien.'),
        ('/campaign-plan',          'Kampagnenplanung',             'Plant vollständige Marketing-Kampagnen mit Zielen, Kanälen und Zeitplan.'),
        ('/competitive-brief',      'Wettbewerbs-Brief',            'Erstellt kompakte Zusammenfassungen zu Mitbewerbern für Pitch-Situationen.'),
        ('/competitive-intelligence','Wettbewerbsanalyse',          'Recherchiert und analysiert Marktbegleiter systematisch und strukturiert.'),
        ('/content-creation',       'Content erstellen',            'Erstellt Blogartikel, Social-Media-Posts und andere Marketing-Inhalte.'),
        ('/draft-content',          'Content-Entwurf',              'Schneller Entwurf von Marketingtexten nach Briefing.'),
        ('/email-sorter',           'E-Mails sortieren',            'Kategorisiert eingehende E-Mails und schlägt Antworten vor.'),
        ('/instagram-digital-products', 'Instagram-Produkte',       'Erstellt digitale Produkte und Content speziell für Instagram.'),
        ('/seo-audit',              'SEO-Audit',                    'Analysiert Webseiten auf SEO-Schwachstellen und gibt Optimierungsempfehlungen.'),
        ('/comp-analysis',          'Vergleichsanalyse',            'Erstellt strukturierte Vergleiche zwischen Produkten, Firmen oder Optionen.'),
    ],
    'Design & UI': [
        ('/algorithmic-art',        'Algorithmische Kunst',         'Erstellt generative Kunstwerke und Visualisierungen mit p5.js oder Canvas.'),
        ('/canvas-design',          'Canvas-Design',                'Gestaltet visuelle Elemente direkt im Browser mit HTML Canvas.'),
        ('/create-an-asset',        'Asset erstellen',              'Produziert digitale Assets wie Icons, Illustrationen und UI-Elemente.'),
        ('/design-critique',        'Design-Kritik',                'Analysiert bestehende Designs und gibt konkretes, konstruktives Feedback.'),
        ('/design-handoff',         'Design-Übergabe',              'Bereitet Design-Specs für Entwickler vor mit Maßen, Farben und Tokens.'),
        ('/design-system',          'Design-System',                'Baut und pflegt konsistente Komponentenbibliotheken und Design-Tokens.'),
        ('/ux-copy',                'UX-Texte',                     'Schreibt Microcopy, Button-Labels und Interface-Texte nach UX-Prinzipien.'),
        ('/ux-design',              'UX-Design',                    'Gestaltet Nutzerflüsse, Wireframes und interaktive Prototypen.'),
        ('/web-artifacts-builder',  'Web-Artefakte',                'Erstellt fertige HTML/CSS/JS-Komponenten direkt im Browser.'),
        ('/emil-design-eng',        'Design Engineering',           'Premium UI-Implementierung im Stil von Emil Kowalski — Framer Motion, Spring Physics.'),
        ('/ui-ux-pro-max',          'UI/UX Pro Max',                'Höchste Stufe der UI-Entwicklung mit allen Premium-Patterns und Animationen.'),
        ('/theme-factory',          'Theme-Factory',                'Erstellt konsistente Farbpaletten und Typografie-Systeme für Projekte.'),
        ('/slack-gif-creator',      'Slack-GIF erstellen',          'Erstellt animierte GIFs für Slack-Reaktionen und Team-Kommunikation.'),
        ('/manus-vacu-landing',     'Landing Page',                 'Baut hochkonvertierende Landing Pages nach bewährten Strukturen.'),
    ],
    'Data & Analytics': [
        ('/analyze',                'Daten analysieren',            'Beantwortet Datenfragen — von schnellen Lookups bis zu tiefen Analysen.'),
        ('/create-viz',             'Visualisierung erstellen',     'Erstellt Diagramme und Grafiken aus Rohdaten mit Chart.js oder matplotlib.'),
        ('/data-context-extractor', 'Daten-Kontext',                'Extrahiert relevanten Kontext und Muster aus großen Datensätzen.'),
        ('/data-visualization',     'Datenvisualisierung',          'Referenz-Bibliothek für Visualisierungstypen und Best Practices.'),
        ('/explore-data',           'Daten erkunden',               'Erstellt exploratorische Analysen und findet Muster in unbekannten Datensätzen.'),
        ('/forecast',               'Prognose',                     'Erstellt Umsatz- und Wachstumsprognosen auf Basis historischer Daten.'),
        ('/metrics-review',         'Metriken-Review',              'Analysiert KPIs und Performance-Metriken mit klarer Interpretation.'),
        ('/sql-queries',            'SQL-Abfragen',                 'Schreibt und optimiert SQL-Abfragen für Datenbanken und Data Warehouses.'),
        ('/statistical-analysis',   'Statistik-Analyse',            'Führt statistische Tests durch und interpretiert Ergebnisse verständlich.'),
        ('/validate-data',          'Daten validieren',             'Prüft Datenqualität, findet Inkonsistenzen und dokumentiert Befunde.'),
        ('/variance-analysis',      'Abweichungsanalyse',           'Analysiert Abweichungen zwischen Plan und Ist mit Ursachenforschung.'),
        ('/write-query',            'Abfrage schreiben',            'Erstellt komplexe Datenbankabfragen nach natürlichsprachlicher Beschreibung.'),
    ],
    'Finance & Compliance': [
        ('/audit-support',          'Audit-Unterstützung',          'Bereitet Unterlagen und Dokumentation für interne und externe Audits vor.'),
        ('/compliance-tracking',    'Compliance-Tracking',          'Überwacht Compliance-Anforderungen und dokumentiert den Status.'),
        ('/financial-statements',   'Finanzberichte',               'Erstellt und analysiert Gewinn-und-Verlust-Rechnung, Bilanz und Cashflow.'),
        ('/journal-entry',          'Buchungssatz',                 'Erstellt korrekte Buchungssätze nach Geschäftsvorfällen.'),
        ('/journal-entry-prep',     'Buchungsvorbereitung',         'Bereitet Monatsabschluss-Buchungen strukturiert vor.'),
        ('/reconciliation',         'Kontenabstimmung',             'Gleicht Konten ab und findet Differenzen zwischen Buchungssystemen.'),
        ('/sox-testing',            'SOX-Testing',                  'Führt SOX-Kontrolltests durch und dokumentiert Ergebnisse revisionssicher.'),
    ],
    'Engineering & Product': [
        ('/accessibility-review',   'Barrierefreiheit prüfen',      'Prüft Webseiten auf WCAG 2.1 AA Konformität und gibt konkrete Fixes.'),
        ('/architecture',           'Architektur',                  'Erstellt und bewertet Architektur-Entscheidungen (ADR) für technische Systeme.'),
        ('/build-dashboard',        'Dashboard bauen',              'Entwickelt interaktive Dashboards mit Echtzeitdaten und Visualisierungen.'),
        ('/build-with-claude-code', 'Mit Claude Code bauen',        'Optimiert den Entwicklungs-Workflow mit Claude Code als KI-Entwickler.'),
        ('/change-request',         'Change Request',               'Dokumentiert und verwaltet technische Änderungsanfragen strukturiert.'),
        ('/code-review',            'Code-Review',                  'Prüft Code auf Qualität, Sicherheit und Best Practices mit konkretem Feedback.'),
        ('/debug',                  'Debuggen',                     'Analysiert Fehler systematisch und schlägt konkrete Lösungsansätze vor.'),
        ('/deploy-checklist',       'Deploy-Checkliste',            'Erstellt und prüft Deployment-Checklisten für sichere Releases.'),
        ('/incident-response',      'Incident-Response',            'Koordiniert die Reaktion auf technische Vorfälle und erstellt Postmortems.'),
        ('/mcp-builder',            'MCP-Builder',                  'Baut Model Context Protocol Server für Claude-Integrationen.'),
        ('/product-brainstorming',  'Produkt-Brainstorming',        'Generiert und bewertet Produktideen strukturiert nach Nutzen und Machbarkeit.'),
        ('/roadmap-update',         'Roadmap aktualisieren',        'Pflegt und kommuniziert Produkt-Roadmaps mit Prioritäten und Meilensteinen.'),
        ('/runbook',                'Runbook',                      'Erstellt Betriebshandbücher für wiederkehrende technische Abläufe.'),
        ('/system-design',          'System-Design',                'Entwirft skalierbare Systemarchitekturen mit klaren Komponenten und Schnittstellen.'),
        ('/tech-debt',              'Tech-Debt',                    'Identifiziert und priorisiert technische Schulden mit Aufwandsschätzung.'),
        ('/testing-strategy',       'Test-Strategie',               'Entwickelt umfassende Teststrategien für Software-Projekte.'),
        ('/write-spec',             'Spec schreiben',               'Erstellt technische Spezifikationen und Produktanforderungen (PRD).'),
        ('/browser-use',            'Browser-Automatisierung',      'Steuert Browser automatisch für Web-Scraping und UI-Tests.'),
    ],
    'HR & People': [
        ('/capacity-plan',          'Kapazitätsplanung',            'Plant Team-Kapazitäten und zeigt Auslastung und Engpässe auf.'),
        ('/interview-prep',         'Interview-Vorbereitung',       'Bereitet strukturierte Interviewfragen und Bewertungsbögen vor.'),
        ('/onboarding',             'Onboarding',                   'Erstellt 30-60-90-Tage-Onboarding-Pläne für neue Mitarbeiter.'),
        ('/org-planning',           'Org-Planung',                  'Unterstützt bei der Planung von Organisationsstrukturen und Teams.'),
        ('/people-report',          'People-Report',                'Erstellt Berichte zu Team-Performance, Engagement und Fluktuation.'),
        ('/performance-report',     'Performance-Bericht',          'Analysiert und dokumentiert die Leistung von Teams und Einzelpersonen.'),
        ('/performance-review',     'Performance-Review',           'Strukturiert Leistungsbeurteilungen mit konkretem und fairem Feedback.'),
        ('/recruiting-pipeline',    'Recruiting-Pipeline',          'Verwaltet und analysiert die Kandidatenpipeline im Recruiting-Prozess.'),
    ],
    'Wissen & Produktivität': [
        ('/daily-briefing',         'Tages-Briefing',               'Erstellt eine kompakte Übersicht der wichtigsten Themen für den Tag.'),
        ('/digest',                 'Digest',                       'Fasst viele Informationen zu einem lesbaren Überblick zusammen.'),
        ('/doc-coauthoring',        'Gemeinsam schreiben',          'Unterstützt beim kollaborativen Verfassen von Dokumenten und Berichten.'),
        ('/documentation',          'Dokumentation',                'Erstellt technische und prozessuale Dokumentation nach Standards.'),
        ('/knowledge-synthesis',    'Wissen synthetisieren',        'Verbindet Informationen aus verschiedenen Quellen zu klaren Erkenntnissen.'),
        ('/memory-management',      'Memory-Management',            'Verwaltet Claude-Erinnerungen und hält Kontext über Gespräche hinweg.'),
        ('/obsidian-wiki',          'Obsidian-Wiki',                'Pflegt und erweitert das gemeinsame Obsidian-Wiki im Map-Repo.'),
        ('/research-synthesis',     'Recherche-Synthese',           'Wertet Recherche-Ergebnisse aus und destilliert die wichtigsten Punkte.'),
        ('/search',                 'Suchen',                       'Durchsucht Wissensquellen gezielt nach relevanten Informationen.'),
        ('/search-strategy',        'Suchstrategie',                'Entwickelt eine strukturierte Strategie für komplexe Recherche-Aufgaben.'),
        ('/source-management',      'Quellen-Management',           'Verwaltet und bewertet Wissensquellen nach Qualität und Relevanz.'),
        ('/synthesize-research',    'Forschung zusammenfassen',     'Fasst wissenschaftliche und strategische Recherchen verständlich zusammen.'),
        ('/task-management',        'Aufgaben-Management',          'Plant und priorisiert Aufgaben für effizientes Arbeiten.'),
        ('/update',                 'Update',                       'Erstellt strukturierte Status-Updates für Teams und Stakeholder.'),
        ('/weekly-prep-brief',      'Wochen-Vorbereitung',          'Bereitet die Woche vor mit Prioritäten, Terminen und offenen Punkten.'),
        ('/risk-assessment',        'Risikobewertung',              'Identifiziert und bewertet Risiken mit Eintrittswahrscheinlichkeit und Auswirkung.'),
        ('/process-doc',            'Prozess-Dokumentation',        'Dokumentiert Geschäftsprozesse klar und nachvollziehbar.'),
        ('/process-optimization',   'Prozess-Optimierung',          'Analysiert Abläufe und schlägt Verbesserungen für mehr Effizienz vor.'),
        ('/schedule',               'Zeitplanung',                  'Erstellt und optimiert Zeitpläne für Projekte und Teams.'),
        ('/standup',                'Standup',                      'Strukturiert tägliche Standup-Meetings mit klaren Updates und Blockern.'),
        ('/start',                  'Projekt starten',              'Initialisiert neue Projekte mit Struktur, Zielen und ersten Schritten.'),
        ('/status-report',          'Status-Bericht',               'Erstellt kompakte Status-Berichte für Projekte und Initiativen.'),
        ('/stakeholder-update',     'Stakeholder-Update',           'Kommuniziert Projektstatus und Entscheidungen an relevante Stakeholder.'),
        ('/sprint-planning',        'Sprint-Planung',               'Plant agile Sprints mit Story-Points, Zielen und Kapazitäten.'),
        ('/internal-comms',         'Interne Kommunikation',        'Erstellt klare interne Mitteilungen, Ankündigungen und Team-Updates.'),
    ],
    'Dokumente & Output': [
        ('/docx',   'Word-Dokument',  'Erstellt und bearbeitet professionelle Word-Dokumente mit Formatierungen.'),
        ('/pdf',    'PDF erstellen',  'Generiert PDFs aus Inhalten mit anpassbarem Layout und Design.'),
        ('/pptx',   'Präsentation',   'Baut PowerPoint-Präsentationen mit Struktur, Inhalt und Design.'),
        ('/xlsx',   'Excel-Datei',    'Erstellt Excel-Tabellen mit Formeln, Formatierungen und Pivot-Tabellen.'),
    ],
    'Claude & KI': [
        ('/claude-efficiency',      'Claude-Effizienz',         'Optimiert Claude-Anfragen für maximale Qualität bei minimalem Token-Verbrauch.'),
        ('/claude-max-effort',      'Claude Max Effort',        'Aktiviert den hoechsten Einsatz-Modus fuer komplexe, kritische Aufgaben.'),
        ('/consolidate-memory',     'Memory konsolidieren',     'Fasst Claude-Erinnerungen zusammen und bereinigt veraltete Eintraege.'),
        ('/conversation-context',   'Gespraechs-Kontext',       'Traegt wichtigen Kontext nach fuer lange oder fortgesetzte Gespraeche.'),
        ('/skill-creator',          'Skill erstellen',          'Erstellt neue Claude-Skills nach dem SKILL.md-Format fuer das Map-Repo.'),
        ('/template-saver',         'Template speichern',       'Speichert haeufig genutzte Prompts und Strukturen als wiederverwendbare Templates.'),
        ('/claude-mem',             'Claude Memory',            'Verwaltet das langfristige Gedaechtnis von Claude ueber Sitzungen hinweg.'),
        ('/everything-claude-code', 'Claude Code Mastery',      'Vollstaendiger Leitfaden fuer alle Claude Code Features und Best Practices.'),
        ('/superpowers',            'Superpowers',              'Schaltet erweiterte Claude-Faehigkeiten frei fuer anspruchsvolle Aufgaben.'),
        ('/graphify',               'Graphify',                 'Verwandelt Dateien und Wissen in einen navigierbaren Wissens-Graphen.'),
    ],
}

CAT_COLORS = {
    'Sales & CRM':              '#1B4F72',
    'Marketing & Content':      '#6C3483',
    'Design & UI':              '#1A5276',
    'Data & Analytics':         '#0E6655',
    'Finance & Compliance':     '#784212',
    'Engineering & Product':    '#1B2631',
    'HR & People':              '#7D6608',
    'Wissen & Produktivitaet':  '#154360',
    'Dokumente & Output':       '#4A235A',
    'Claude & KI':              '#0B3D0B',
}

def cat_color(cat):
    # normalize for lookup
    key = cat.replace('ä','ae').replace('ö','oe').replace('ü','ue')
    return HexColor(CAT_COLORS.get(key, CAT_COLORS.get(cat, '#1B2631')))

# ── PDF Setup ────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(out_path, pagesize=A4,
    leftMargin=1.8*cm, rightMargin=1.8*cm,
    topMargin=2*cm, bottomMargin=2*cm)

W = doc.width
DARK   = HexColor('#0D1117')
GRAY   = HexColor('#6B7280')
LGRAY  = HexColor('#9CA3AF')
LIGHT  = HexColor('#F8FAFC')
LINE   = HexColor('#E5E7EB')
ACCENT = HexColor('#2563EB')
WHITE  = white

def sty(name, **kw):
    return ParagraphStyle(name, **kw)

s_title   = sty('title',  fontSize=30, textColor=DARK,  fontName='Helvetica-Bold', alignment=TA_CENTER, spaceAfter=6)
s_sub     = sty('sub',    fontSize=11, textColor=GRAY,  fontName='Helvetica',      alignment=TA_CENTER, spaceAfter=4)
s_toc_h   = sty('toc_h', fontSize=13, textColor=DARK,  fontName='Helvetica-Bold', spaceAfter=10)
s_toc     = sty('toc',   fontSize=10, textColor=DARK,  fontName='Helvetica',      spaceAfter=5, leading=14)
s_cat     = sty('cat',   fontSize=12, textColor=WHITE, fontName='Helvetica-Bold')
s_cmd     = sty('cmd',   fontSize=9,  textColor=ACCENT,fontName='Helvetica-Bold', spaceAfter=2)
s_name    = sty('name',  fontSize=9,  textColor=DARK,  fontName='Helvetica-Bold', spaceAfter=1)
s_desc    = sty('desc',  fontSize=8,  textColor=HexColor('#4B5563'), fontName='Helvetica', leading=11)
s_usage_h = sty('ush',   fontSize=11, textColor=DARK,  fontName='Helvetica-Bold', spaceAfter=3)
s_usage_d = sty('usd',   fontSize=9,  textColor=GRAY,  fontName='Helvetica',      leading=13, spaceAfter=10)
s_foot    = sty('foot',  fontSize=8,  textColor=LGRAY, fontName='Helvetica',      alignment=TA_CENTER)
s_how_h   = sty('howh',  fontSize=20, textColor=DARK,  fontName='Helvetica-Bold', alignment=TA_CENTER, spaceAfter=20)

story = []

# ── Deckblatt ────────────────────────────────────────────────────────────────
story.append(Spacer(1, 3.5*cm))
story.append(Paragraph('Skill Library', s_title))
story.append(Spacer(1, 0.4*cm))
story.append(HRFlowable(width='60%', thickness=2, color=ACCENT, hAlign='CENTER'))
story.append(Spacer(1, 0.4*cm))
story.append(Paragraph('Alle verfuegbaren Claude-Skills auf einen Blick', s_sub))
story.append(Spacer(1, 0.2*cm))

total = sum(len(v) for v in SKILLS.values())
story.append(Paragraph(f'{total} Skills &nbsp;&nbsp;|&nbsp;&nbsp; {len(SKILLS)} Kategorien &nbsp;&nbsp;|&nbsp;&nbsp; Claude Code', s_sub))
story.append(Spacer(1, 3*cm))

# TOC
story.append(Paragraph('Kategorien', s_toc_h))
for cat, skills in SKILLS.items():
    color = cat_color(cat)
    dot = f'<font color="#{color.hexval()[2:]}">&#9632;</font>'
    story.append(Paragraph(f'{dot} &nbsp; {cat} <font color="#9CA3AF">— {len(skills)} Skills</font>', s_toc))

story.append(Spacer(1, 1*cm))
story.append(HRFlowable(width='100%', thickness=0.5, color=LINE))
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph('github.com/m88c5s8mxh-maker/Map', s_foot))

story.append(PageBreak())

# ── Skills nach Kategorie ────────────────────────────────────────────────────
for cat, skills in SKILLS.items():
    color = cat_color(cat)

    # Kategorie-Header
    hdr = Table([[Paragraph(f'  {cat}', s_cat)]], colWidths=[W])
    hdr.setStyle(TableStyle([
        ('BACKGROUND',    (0,0), (-1,-1), color),
        ('TOPPADDING',    (0,0), (-1,-1), 9),
        ('BOTTOMPADDING', (0,0), (-1,-1), 9),
        ('LEFTPADDING',   (0,0), (-1,-1), 12),
        ('RIGHTPADDING',  (0,0), (-1,-1), 12),
    ]))
    story.append(hdr)
    story.append(Spacer(1, 0.25*cm))

    # 2-spaltige Tabelle
    col_w = (W - 0.3*cm) / 2
    pairs = [skills[i:i+2] for i in range(0, len(skills), 2)]
    rows = []
    for pair in pairs:
        row = []
        for cmd, name, desc in pair:
            cell = [
                Paragraph(cmd, s_cmd),
                Paragraph(name, s_name),
                Paragraph(desc, s_desc),
                Spacer(1, 3),
            ]
            row.append(cell)
        if len(pair) == 1:
            row.append(Spacer(1, 1))
        rows.append(row)

    t = Table(rows, colWidths=[col_w, col_w], hAlign='LEFT')
    t.setStyle(TableStyle([
        ('VALIGN',         (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING',    (0,0), (-1,-1), 10),
        ('RIGHTPADDING',   (0,0), (-1,-1), 10),
        ('TOPPADDING',     (0,0), (-1,-1), 7),
        ('BOTTOMPADDING',  (0,0), (-1,-1), 7),
        ('ROWBACKGROUNDS', (0,0), (-1,-1), [LIGHT, WHITE]),
        ('LINEBELOW',      (0,0), (-1,-1), 0.4, LINE),
        ('LINEBEFORE',     (1,0), (1,-1),  0.4, LINE),
    ]))
    story.append(t)
    story.append(Spacer(1, 0.7*cm))

# ── Verwendungs-Seite ─────────────────────────────────────────────────────────
story.append(PageBreak())
story.append(Spacer(1, 2.5*cm))
story.append(Paragraph('So verwendest du die Skills', s_how_h))
story.append(HRFlowable(width='40%', thickness=2, color=ACCENT, hAlign='CENTER'))
story.append(Spacer(1, 1*cm))

steps = [
    ('Schritt 1 — Skill aufrufen',
     'Tippe den Befehl direkt in Claude Code ein. Beispiel: /call-prep oder /analyze. '
     'Claude erkennt den Skill automatisch und startet die Ausfuehrung.'),
    ('Schritt 2 — Kontext geben',
     'Claude fragt nach den noetigen Informationen. Je mehr Kontext du gibst, desto praeziser das Ergebnis. '
     'Du kannst auch einfach loslegen — Claude fragt nach was fehlt.'),
    ('Schritt 3 — Ergebnis erhalten',
     'Der Skill liefert strukturierten, direkt verwendbaren Output: Texte, Tabellen, Analysen oder Code — '
     'je nach Skill in dem Format, das am nuetzlichsten ist.'),
    ('Schritt 4 — Wissen waechst',
     'Alles was ihr gemeinsam erarbeitet, kann in das Map-Repo fliessen. '
     'Nach einem git push lernt der gemeinsame Wissens-Graph dazu.'),
]

for title, desc in steps:
    story.append(Paragraph(f'<b>{title}</b>', s_usage_h))
    story.append(Paragraph(desc, s_usage_d))

story.append(Spacer(1, 1.5*cm))

# Tipp-Box
tip_content = [[Paragraph(
    '<b>Tipp:</b> Du kannst mehrere Skills kombinieren. Beispiel: /competitive-intelligence '
    'recherchiert einen Mitbewerber, /competitive-brief erstellt daraus einen kompakten Report, '
    'und /pptx verwandelt ihn in eine Praesentation.',
    sty('tip', fontSize=9, textColor=HexColor('#1E3A5F'), fontName='Helvetica', leading=13)
)]]
tip_table = Table(tip_content, colWidths=[W])
tip_table.setStyle(TableStyle([
    ('BACKGROUND',    (0,0), (-1,-1), HexColor('#EFF6FF')),
    ('TOPPADDING',    (0,0), (-1,-1), 12),
    ('BOTTOMPADDING', (0,0), (-1,-1), 12),
    ('LEFTPADDING',   (0,0), (-1,-1), 14),
    ('RIGHTPADDING',  (0,0), (-1,-1), 14),
    ('LINEABOVE',     (0,0), (-1,0),  2, ACCENT),
]))
story.append(tip_table)

story.append(Spacer(1, 1.5*cm))
story.append(HRFlowable(width='100%', thickness=0.5, color=LINE))
story.append(Spacer(1, 0.4*cm))
story.append(Paragraph('Skill Library | github.com/m88c5s8mxh-maker/Map | Claude Code', s_foot))

# ── Bauen ─────────────────────────────────────────────────────────────────────
doc.build(story)
print(f'PDF erstellt: {out_path}')
print(f'{total} Skills in {len(SKILLS)} Kategorien')

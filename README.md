# Map — Shared Knowledge Base

Gemeinsames Wissenssystem mit zwei Kernwerkzeugen:

| Tool | Zweck | Einstieg |
|------|-------|---------|
| **Graphify Map** | Wissens-Graph aller Dateien im Repo | `open graphify-out/graph.html` |
| **Obsidian Wiki** | LLM-gepflegtes Wiki für Quellen & Notizen | Obsidian → Vault öffnen → `wiki/` wählen |

Der Graph **aktualisiert sich automatisch** bei jedem `git push` (GitHub Action) und nach jedem lokalen `git commit` (Git-Hook, nach `setup.sh`).

---

## Setup (einmalig, jede Person)

```bash
git clone https://github.com/m88c5s8mxh-maker/Map.git
cd Map
./setup.sh
```

`setup.sh` installiert graphify und registriert den Post-Commit-Hook. Das war's.

---

## Täglicher Workflow

### Wissen hinzufügen
```bash
# Datei in raw/ ablegen (Artikel, PDF, Notiz, Code-Snippet)
cp mein-artikel.md raw/

# Im Claude Code Terminal:
/obsidian-wiki ingest raw/mein-artikel.md

# Committen → Graph baut sich lokal & remote neu
git add .
git commit -m "Add: mein-artikel"
git push
```

### Graph erkunden
```bash
# Lokal im Browser
open graphify-out/graph.html

# Mit Claude Code fragen stellen
/graphify query "Was wissen wir über X?"
/graphify path "Thema A" "Thema B"
```

### Wiki abfragen
```bash
/obsidian-wiki query "Erkläre mir das Konzept Y"
/obsidian-wiki lint          # Lücken & Widersprüche finden
/obsidian-wiki status        # Übersicht
```

### Mit Freund synchronisieren
```bash
# Neuesten Stand holen (inkl. automatisch aktualisiertem Graph)
git pull
```

---

## Struktur

```
Map/
├── raw/                  ← Quelldateien ablegen (unveränderlich)
│   └── .gitkeep
├── wiki/                 ← LLM-gepflegtes Wiki (Obsidian Vault)
│   ├── index.md          ← Inhaltsverzeichnis aller Seiten
│   ├── log.md            ← Protokoll aller Operationen
│   ├── concept/          ← Konzept-Seiten
│   ├── entity/           ← Personen/Projekte/Firmen-Seiten
│   └── synthesis/        ← Verbindungen & Analysen
├── graphify-out/         ← Auto-generierter Wissens-Graph
│   ├── index.md          ← Einstiegspunkt für Claude Code
│   ├── graph.html        ← Interaktive Visualisierung
│   └── Community_*.md    ← Themen-Cluster
├── WIKI.md               ← Wiki-Schema & Konventionen
├── CLAUDE.md             ← Claude Code Konfiguration
├── setup.sh              ← Einmal-Setup
└── .github/
    └── workflows/
        └── graphify.yml  ← Auto-Rebuild bei Push
```

---

## GitHub Actions Secret (einmalig im Repo einstellen)

Für vollständige Neu-Builds (inkl. Markdown/Docs):

1. GitHub → Repo → Settings → Secrets → Actions
2. `ANTHROPIC_API_KEY` → deinen Key eintragen

Ohne Key: Graphify baut trotzdem (nur Struktur-Analyse ohne LLM-Anreicherung).

---

## Obsidian Einrichten

1. [Obsidian](https://obsidian.md) installieren
2. "Vault öffnen" → `Map/wiki/` wählen
3. Empfohlene Plugins: **Dataview**, **Graph Analysis**, **Obsidian Git**

Mit **Obsidian Git** Plugin synchronisiert Obsidian automatisch per `git pull/push`.

---

## Zusammenarbeit

- Alle klonen das Repo und führen `./setup.sh` aus
- Änderungen committen & pushen → GitHub Action baut Map neu
- `git pull` → neueste Map + Wiki erhalten
- Bei Konflikten in `wiki/`: Markdown-Merge wie normaler Code

### Aktive Kollaboratoren

| Name | GitHub |
|------|--------|
| Tyrone | [@m88c5s8mxh-maker](https://github.com/m88c5s8mxh-maker) |
| Mc | [@MCMORIO](https://github.com/MCMORIO) |

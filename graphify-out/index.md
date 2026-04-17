# Knowledge Graph Index

> Dieser Graph wird automatisch aktualisiert — nach jedem `git push` (GitHub Action) und nach jedem `git commit` (lokaler Hook).

**Status:** Initialisiert — noch keine Inhalte gemappt.

---

## Wie der Graph wächst

1. Dateien in `raw/` ablegen (Artikel, Notizen, PDFs)
2. `/obsidian-wiki ingest raw/<datei>` ausführen → Wiki-Seiten entstehen
3. `git commit` → Graph baut sich lokal neu
4. `git push` → GitHub Action baut Graph neu und committet zurück

---

## Struktur

| Bereich | Inhalt | Pfad |
|---------|--------|------|
| Quellen | Rohmaterial (unveränderlich) | `raw/` |
| Wiki | LLM-gepflegte Seiten | `wiki/` |
| Graph | Auto-generierte Visualisierung | `graphify-out/graph.html` |
| Schema | Konventionen & Seitentypen | `WIKI.md` |

---

*Generiert von [graphify](https://pypi.org/project/graphifyy/)*

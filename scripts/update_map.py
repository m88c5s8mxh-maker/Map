"""
update_map.py — Wird von der GitHub Action aufgerufen.
Generiert graphify-out/index.md und (falls möglich) graph.html.
Keine externen Abhängigkeiten außer graphifyy.
"""
from __future__ import annotations
from collections import defaultdict
from datetime import date
from pathlib import Path
import json
import sys


OUT = Path("graphify-out")
OUT.mkdir(exist_ok=True)


# ── 1. Code-Graph rebuild (kein API-Key nötig) ────────────────────────────
def rebuild_code() -> None:
    try:
        from graphify.watch import _rebuild_code
        result = _rebuild_code(Path("."))
        print(f"[map] Code-Rebuild: {'ok' if result else 'keine Code-Dateien gefunden'}")
    except Exception as e:
        print(f"[map] Code-Rebuild übersprungen: {e}")


# ── 2. index.md aus Wiki-Seiten generieren ────────────────────────────────
def update_index() -> None:
    wiki_pages = sorted(
        p for p in Path("wiki").rglob("*.md")
        if p.name not in ("index.md", "log.md")
        and ".obsidian" not in p.parts
        and ".gitkeep" not in p.name
    )
    raw_files = [
        f for f in Path("raw").rglob("*")
        if f.is_file() and f.name != ".gitkeep"
    ]

    by_dir: dict[str, list[Path]] = defaultdict(list)
    for p in wiki_pages:
        by_dir[p.parent.name].append(p)

    lines = [
        "# Knowledge Graph Index",
        "",
        f"> Zuletzt aktualisiert: {date.today()}"
        f" · {len(wiki_pages)} Wiki-Seiten"
        f" · {len(raw_files)} Quelldateien",
        "",
        "---",
        "",
    ]

    if wiki_pages:
        lines.append("## Wiki-Seiten")
        lines.append("")
        for folder, pages in sorted(by_dir.items()):
            lines.append(f"### {folder}/")
            for p in sorted(pages):
                lines.append(f"- [[{p.stem}]]")
            lines.append("")
    else:
        lines += [
            "## Noch keine Inhalte",
            "",
            "1. Dateien in `raw/` ablegen",
            "2. `/obsidian-wiki ingest raw/<datei>` ausfuhren",
            "3. `git add . && git commit && git push`",
            "   → dieser Graph aktualisiert sich automatisch",
            "",
        ]

    if raw_files:
        lines += ["## Quelldateien (raw/)", ""]
        for f in sorted(raw_files):
            lines.append(f"- {f.name}")
        lines.append("")

    lines += [
        "---",
        "",
        "*Generiert von [graphify](https://pypi.org/project/graphifyy/)*",
    ]

    (OUT / "index.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"[map] index.md: {len(wiki_pages)} Seiten, {len(raw_files)} Quellen")


# ── 3. HTML-Visualisierung (nur wenn graph.json vorhanden) ────────────────
def update_html() -> None:
    gj = OUT / "graph.json"
    if not gj.exists():
        print("[map] graph.html: kein graph.json — übersprungen")
        return
    try:
        from graphify.export import to_html
        from graphify.cluster import cluster
        from networkx.readwrite import json_graph

        data = json.loads(gj.read_text(encoding="utf-8"))
        G = json_graph.node_link_graph(data, edges="links")
        if G.number_of_nodes() == 0:
            print("[map] graph.html: leerer Graph — übersprungen")
            return
        communities = cluster(G)
        to_html(G, communities, str(OUT / "graph.html"))
        print(f"[map] graph.html: {G.number_of_nodes()} Knoten")
    except Exception as e:
        print(f"[map] graph.html übersprungen: {e}")


if __name__ == "__main__":
    rebuild_code()
    update_index()
    update_html()
    print("[map] Fertig.")

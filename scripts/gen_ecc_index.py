# -*- coding: utf-8 -*-
"""
Baut raw/skills/ecc/INDEX.md aus dem Frontmatter aller ECC-Skills und -Agents.

Aufruf vom Repo-Wurzelverzeichnis aus:
    python scripts/gen_ecc_index.py

Nach jedem Spiegeln einer neuen ECC-Version erneut ausfuehren.
"""
from __future__ import annotations
from pathlib import Path
import re

BASE = Path(__file__).resolve().parent.parent / "raw" / "skills" / "ecc"


def frontmatter(p: Path) -> dict:
    """YAML-Frontmatter flach einlesen - kein PyYAML noetig."""
    try:
        txt = p.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return {}
    if not txt.startswith("---"):
        return {}
    end = txt.find("\n---", 3)
    if end == -1:
        return {}
    out: dict[str, str] = {}
    key = None
    for line in txt[3:end].splitlines():
        m = re.match(r"^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$", line)
        if m:
            key = m.group(1).strip()
            out[key] = m.group(2).strip().strip('"').strip("'")
        elif key and line.startswith((" ", "\t")) and out.get(key) == "":
            out[key] = line.strip().strip('"').strip("'")
    return out


def short(s: str, n: int = 190) -> str:
    s = " ".join((s or "").split()).replace("|", r"\|")
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


def main() -> None:
    skills = []
    for d in sorted((BASE / "skills").iterdir()):
        md = d / "SKILL.md"
        if not md.exists():
            continue
        fm = frontmatter(md)
        extra = [f for f in d.rglob("*") if f.is_file() and f.name != "SKILL.md"]
        skills.append((fm.get("name") or d.name, d.name, short(fm.get("description", "")), len(extra)))

    agents = []
    for f in sorted((BASE / "agents").glob("*.md")):
        fm = frontmatter(f)
        agents.append((fm.get("name") or f.stem, f.name, short(fm.get("description", "")),
                       fm.get("model", ""), short(fm.get("tools", ""), 60)))

    lines = [
        "# ECC — Vollständiger Index",
        "",
        "> Auto-generiert aus dem Frontmatter. Quelle: [affaan-m/ECC](https://github.com/affaan-m/ECC) "
        "v2.2.1, Commit `e04ea0b`, Stand 03.09.2026.",
        f"> {len(skills)} Skills · {len(agents)} Agents",
        "",
        "Einstieg und Nutzungsregeln: [SKILL.md](SKILL.md)",
        "",
        "---",
        "",
        f"## Skills ({len(skills)})",
        "",
        "| Skill | Beschreibung | Extra-Dateien |",
        "|---|---|---|",
    ]
    for name, folder, desc, extra in skills:
        lines.append(f"| [{name}](skills/{folder}/SKILL.md) | {desc} | {extra or ''} |")
    lines += ["", "---", "", f"## Agents ({len(agents)})", "",
              "| Agent | Modell | Werkzeuge | Beschreibung |", "|---|---|---|---|"]
    for name, fn, desc, model, tools in agents:
        lines.append(f"| [{name}](agents/{fn}) | {model} | {tools} | {desc} |")
    lines.append("")

    (BASE / "INDEX.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"[ecc] INDEX.md: {len(skills)} Skills, {len(agents)} Agents")


if __name__ == "__main__":
    main()

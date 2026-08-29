---
tags: [entity, projekt, knowledge-management, claude-code, hoch]
sources: [raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]
updated: 2026-08-29
---

# Session-Erfassung (Map)

Die Pipeline, die beendete Claude-Code-Sessions bewertet und bei ausreichendem Wissenswert
selbst ins Wiki schreibt. Sie schließt die letzte Lücke im Kreislauf **Quelle rein → Wiki wächst
→ Graph wächst → GitHub** aus dem [[llm-wiki-pattern]].

## Warum es sie gibt

Vor dem Bau existierte alles außer der Quelle selbst: Vault, ~739 Wiki-Seiten,
[[graphify]]-Graph, Git-Hooks für Pull und Push, [[obsidian-wiki-skill]] als Ingest-Route.
**Nichts schrieb jedoch die Claude-Chats in den Vault.** 46 Transkripte lagen ungenutzt als
JSONL in `~/.claude/projects/`, der letzte Wiki-Commit war vom 16.08. Der Vault wuchs nur,
wenn der Nutzer selbst `/obsidian-wiki ingest` aufrief.

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

## Architektur

```
SessionEnd-Hook
  └→ scripts/session-capture.sh      Dedupe über raw/sessions/.captured, Tier-Weiche
       └→ scripts/session_extract.py Transkript-JSONL → Markdown + Score
       └→ scripts/session-integrate.sh  (nur Tier 2) Kondensation ins Wiki via `claude -p`
            └→ scripts/map-git-sync.sh   Commit + Push (siehe [[stiller-sync-ausfall]])
                 └→ post-commit-Hook     graphify baut den Graph neu
```

Protokoll aller Läufe: `scripts/.session-capture.log` (`T0` verworfen · `T1` nur Rohmitschnitt ·
`T2` Wiki-Integration läuft im Hintergrund, Ergebnis 1–5 Minuten später in `wiki/log.md`).

## Die zwei Tore

| Tor | Wer entscheidet | Kosten | Wirkung |
|---|---|---|---|
| Heuristik | `scripts/session_extract.py` | 0 | Tier 0 verwerfen · Tier 1 nur `raw/sessions/` · Tier 2 weiter |
| LLM-Veto | `scripts/session-integrate.sh` | 1× `claude -p` | darf trotz Tier 2 „SKIP" sagen → nur eine Log-Zeile |

Das Prinzip dahinter — Rohmitschnitt automatisch, Wiki-Integration nur über einer
Relevanzschwelle — ist als übertragbares Muster in [[llm-wiki-pattern]] festgehalten.

## Die Kalibrierung, die den Score gerettet hat

Der erste Score belohnte Datei-Änderungen. Kalibriert an den 46 echten Transkripten landeten
damit **27 von 46 Sessions auf Tier 2** — darunter 12× „Öffne die Datei …", also rein
mechanische Einzelaufträge ohne jedes Wissen.

Die Korrektur: **Wissen entsteht im Dialog, nicht im Schreibvolumen.** Der Score wird jetzt von
den User-Turns dominiert (× 7); Einzelaufträge ohne Rückfragen sind hart auf Tier 1 gedeckelt,
egal wie viele Dateien sie schreiben. Schwellen: Tier 1 ab 15, Tier 2 ab 45.

Ergebnis über dieselben Transkripte: **12 verworfen · 20 nur Rohmitschnitt · 16 Wiki-Kandidaten**
— die 9 fast identischen Landingpage-Batches fielen auf Tier 0.

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]
> ⚠️ #prüfen — die genannte Aufteilung summiert sich auf 48, nicht auf die genannten 46 Transkripte.

## Live-Test

Die stärkste Session („Preview-Reiter in CRM Intranet", 45 Turns) lief echt durch. Entstanden
sind drei Seiten, darunter [[server-quellcode-drift]] mit übertragbarem Kern, Schadensfall,
Wiki-Links und Quellenangaben; sie korrigiert nebenbei eine alte Fehlannahme im Wiki. Der Graph
wuchs von **599 auf 633 Nodes**.

Damit ist belegt, dass eine automatisch erzeugte Seite die Qualitätsschwelle des Wikis halten
kann — die Duplikat-Vermeidung ist bei 739 bestehenden Seiten der wichtigste Teil des
Integrations-Prompts.

## Stand & offene Schritte

| Punkt | Stand |
|---|---|
| Pipeline gebaut, kalibriert, live getestet | ✅ |
| Git-Sync repariert, beide Richtungen verifiziert | ✅ (siehe [[stiller-sync-ausfall]]) |
| `SessionEnd`-Hook in `~/.claude/settings.json` | ⏳ nur der Nutzer selbst |
| `Stop`-Hook auf `map-git-sync.sh` umstellen | ⏳ empfohlen, siehe [[map-sync]] |

`/session-save` funktioniert auch ohne registrierten Hook. Snippets und Anleitung liegen in
`scripts/HOOK_EINRICHTEN.md`, eine fertige Datei zum Kopieren in `scripts/settings.json.vorschlag`.

## Grenze: settings.json ist für Claude gesperrt

Schreibzugriffe auf `~/.claude/settings.json` werden vom Berechtigungssystem blockiert — auch
über den `update-config`-Skill, auch auf ausdrückliche Bitte des Nutzers. Ebenso blockiert war
`git push`. Beides muss der Nutzer **im Mac-Terminal** ausführen, nicht im Claude-Chatfenster;
dort gilt die Beschränkung nicht.

Absicherung nach jeder Handänderung an der Datei — das fehlende Komma ist der einzige realistisch
auftretende Fehler:

```bash
python3 -m json.tool ~/.claude/settings.json > /dev/null && echo "valide"
```

Hooks werden nur beim Sessionstart gelesen: erst neue Claude-Session, erst bei Wirkungslosigkeit
VS Code komplett neu starten.

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

## Beziehungen
- [[llm-wiki-pattern]] — das Muster, dessen fehlendes Glied diese Pipeline ist
- [[obsidian-wiki-skill]] — die Ingest-Route, die hier automatisiert wird
- [[graphify]] — nimmt die erzeugten Seiten per `post-commit`-Hook in den Graph auf
- [[map-sync]] — die Git-Strecke am Ende der Pipeline
- [[stiller-sync-ausfall]] — der Nebenfund, der beim Testen zutage trat
- [[server-quellcode-drift]] — erste vollautomatisch erzeugte Wiki-Seite
- [[memory-management]] · [[claude-skills-system]]

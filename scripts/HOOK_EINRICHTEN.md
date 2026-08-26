# Hooks einrichten

Zwei Änderungen an `~/.claude/settings.json`. Claude darf diese Datei nicht
schreiben, deshalb musst du sie selbst einfügen.

---

## 1. SessionEnd-Hook aktivieren (die Session-Erfassung scharf schalten)

Innerhalb des `"hooks"`-Objekts, direkt nach dem `"Stop"`-Block. Aus:

```json
    "Stop": [
      { ... }
    ]
  },
```

wird (Komma nach dem `]` beachten):

```json
    "Stop": [
      { ... }
    ],
    "SessionEnd": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "/Users/tyrone/Map/scripts/session-capture.sh",
            "timeout": 30,
            "statusMessage": "Session wird für die Map ausgewertet..."
          }
        ]
      }
    ]
  },
```

---

## 2. Stop-Hooks absichern (empfohlen)

Die bestehenden `Stop`-Hooks committen mit `git add -A` ohne jede Prüfung.
Genau das hat zwischen 18.06. und 26.08.2026 rund zwei Monate an Auto-Commits
auf einen detached HEAD geschrieben, von wo sie nie gepusht werden konnten —
ohne dass es aufgefallen ist.

`map-git-sync.sh` macht dasselbe, bricht aber ab, wenn der Repo-Zustand nicht
eindeutig ist (detached HEAD, hängender Rebase, laufender Merge) und schreibt
den Grund in `scripts/.session-capture.log`.

Ersetze im `"Stop"`-Block den Map-Eintrag:

```json
          {
            "type": "command",
            "command": "cd /Users/tyrone/Map && git add -A && git diff --cached --quiet || git commit -m \"Auto: wiki sync $(date '+%Y-%m-%d %H:%M')\" && git push 2>/dev/null || true",
            "statusMessage": "Map wird gespeichert (git push)..."
          },
```

durch:

```json
          {
            "type": "command",
            "command": "/Users/tyrone/Map/scripts/map-git-sync.sh \"Auto: wiki sync $(date '+%Y-%m-%d %H:%M')\"",
            "statusMessage": "Map wird gespeichert (git push)..."
          },
```

Der `Morio-Solutions`-Eintrag kann bleiben — dieses Repo ist sauber.

---

## Prüfen

```bash
python3 -m json.tool ~/.claude/settings.json > /dev/null && echo "settings.json valide"
```

Danach eine Session beenden und kontrollieren:

```bash
tail -5 ~/Map/scripts/.session-capture.log
```

---

## Ohne Hook

Auch ohne Eintrag läuft alles manuell über `/session-save`
(siehe `~/.claude/skills/session-save/SKILL.md`).

## Wieder abschalten

`"SessionEnd"`-Block aus `settings.json` entfernen. Die Skripte bleiben liegen
und tun nichts mehr von selbst.

---

## 3. Push nachholen (der Sync ist zusammengeführt, aber noch nicht draußen)

Die Divergenz ist aufgelöst. `main` steht auf dem zusammengeführten Stand,
**23 Commits vor `origin/main` und 0 dahinter** — der Push ist ein reiner
Fast-Forward, kein `force`, keine History-Umschreibung:

```bash
cd ~/Map && git push origin main
```

Danach prüfen:

```bash
git status -sb        # erwartet: ## main...origin/main (ohne ahead/behind)
```

### Was in dem Merge steckt

Übernommen vom Kollegen:
- Skill-Duplikat-Konsolidierung (109× `wiki/X.md` → `wiki/entity/X.md`) — intakt
- `trading/` (18 Dateien GOLD ROB), `raw/skills/webdesign-pro/`, Mojibake-Fixes

Nachgeholt: vier `main`-Commits vom 19.05. und 10.06., die der hängende Rebase
vom 18.06. nie angewendet hatte.

### Eine Entscheidung, die du prüfen solltest

Commit `c7ecaa2` „Mc: wiki sync 2026-08-21 22:21" hat per `git add -A`
`CLAUDE.md`, `README.md`, `SETUP_KOLLEGE.md`, `SETUP_MC.md` und
`Trading FRVP Graph.md` gelöscht — generische Auto-Sync-Nachricht, kein Ersatz,
nie zurückgeholt. Ich habe die fünf wiederhergestellt (Commit
„Vier Root-Dokumente wiederhergestellt"), weil das Muster nach versehentlichem
Mitreißen aussieht, nicht nach Aufräumen.

War die Löschung doch gewollt, mach sie rückgängig:

```bash
git revert <sha des Wiederherstellungs-Commits>
```

### Sicherheitsnetz

Der Branch `rescue/vault-2026-08-26` zeigt weiter auf denselben Stand. Wenn nach
dem Push alles passt, kann er weg:

```bash
git branch -d rescue/vault-2026-08-26
```

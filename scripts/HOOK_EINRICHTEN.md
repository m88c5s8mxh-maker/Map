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

## Offener Punkt: Branch-Divergenz

Dieser Vault liegt aktuell auf `rescue/vault-2026-08-26`, nicht auf `main`.

| Branch | Stand |
|--------|-------|
| `rescue/vault-2026-08-26` | alle lokalen Commits inkl. 18.06.–26.08. und der Session-Erfassung |
| `main` | eingefroren seit 10.06.2026 |
| `origin/main` | 10+ Commits des Kollegen, u.a. Skill-Duplikat-Konsolidierung |

Das Zusammenführen ist eine inhaltliche Entscheidung über hunderte Wiki-Seiten
und gehört nicht in ein automatisches Skript. Vorschlag für den nächsten
Schritt, wenn du es angehen willst:

```bash
cd ~/Map
git checkout rescue/vault-2026-08-26
git pull --no-rebase origin main    # Merge, kein Rebase - schreibt keine History um
# Konflikte auflösen, dann:
git checkout main && git merge rescue/vault-2026-08-26 && git push
```

Solange die Divergenz besteht, protokolliert `map-git-sync.sh` bei jedem
Versuch „PUSH FEHLGESCHLAGEN" statt still zu scheitern.

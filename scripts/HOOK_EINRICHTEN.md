# SessionEnd-Hook aktivieren

Die Session-Erfassung ist gebaut und getestet, aber noch **nicht scharf**.
Dazu muss ein Hook in `~/.claude/settings.json` eingetragen werden.

## Snippet

In `~/.claude/settings.json` innerhalb des `"hooks"`-Objekts einfügen —
direkt nach dem `"Stop"`-Block, also dort wo aktuell steht:

```json
    "Stop": [
      { ... }
    ]
  },
```

Daraus wird (Komma nach dem `]` beachten):

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

## Prüfen

```bash
python3 -c "import json;print('JSON ok')" < /dev/null && \
  python3 -m json.tool ~/.claude/settings.json > /dev/null && echo "settings.json valide"
```

Danach eine Session beenden und kontrollieren:

```bash
tail -5 ~/Map/scripts/.session-capture.log
```

## Ohne Hook

Auch ohne Eintrag funktioniert alles manuell über `/session-save`
(siehe `~/.claude/skills/session-save/SKILL.md`).

## Wieder abschalten

Den `"SessionEnd"`-Block aus `settings.json` entfernen. Die Skripte bleiben
liegen und tun nichts mehr von selbst.

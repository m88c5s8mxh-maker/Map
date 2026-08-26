#!/bin/bash
# Hintergrund-Job: Rohmitschnitt einer Session -> Wiki-Seiten -> Graph -> GitHub.
# Wird von session-capture.sh nur fuer Tier-2-Sessions gestartet.
# Aufruf: session-integrate.sh <raw-datei.md> <session-id>

set -uo pipefail

RAW="${1:-}"
SID="${2:-unbekannt}"
MAP="$HOME/Map"
LOG="$MAP/scripts/.session-capture.log"
TIMEOUT_SEC=600

log() { echo "$(date '+%F %T') [integrate] $*" >> "$LOG"; }

[ -f "$RAW" ] || { log "FEHLER Rohdatei fehlt: $RAW"; exit 1; }

CLAUDE=$(ls -d "$HOME"/.vscode/extensions/anthropic.claude-code-*/resources/native-binary/claude 2>/dev/null \
         | sort -V | tail -1)
[ -x "$CLAUDE" ] || CLAUDE=$(command -v claude)
[ -x "$CLAUDE" ] || { log "FEHLER claude-Binary nicht gefunden"; exit 1; }

REL="raw/sessions/$(basename "$RAW")"
log "start $SID -> $REL"

read -r -d '' PROMPT <<PROMPTEOF
Du pflegst das Wissens-Wiki in diesem Repo. Integriere EINE Session-Mitschrift.

Quelle: $REL

## Ablauf

1. Lies WIKI.md (Schema und Konventionen) und wiki/index.md.
2. Lies $REL vollstaendig.

3. ENTSCHEIDE ZUERST - und sei streng:
   Enthaelt diese Session dauerhaftes, wiederverwendbares Wissen?

   JA, wenn es gibt: eine Entscheidung mit Begruendung, eine Problemursache
   und ihre Loesung, ein neues Konzept oder Muster, eine Architektur, eine
   Konfiguration die man wieder braucht, einen Projekt-Zwischenstand, oder eine
   Idee die weiterverfolgt werden soll.

   NEIN, wenn es war: mechanische Ausfuehrung, reines Ausprobieren, Debugging
   ohne Erkenntnis, kosmetische Anpassungen, wiederholte Routine, oder etwas
   das im Wiki schon exakt so steht.

   Bei NEIN: schreibe NICHTS in wiki/. Haenge nur eine Zeile an wiki/log.md an:
   "## [JJJJ-MM-TT] session-skip | <Titel> - kein dauerhaftes Wissen"
   Antworte dann exakt: SKIP: <ein Satz Begruendung>. Und hoere auf.

4. Bei JA - Duplikate sind das groesste Risiko, wiki/ hat schon 739 Seiten:
   - Suche in wiki/index.md UND per Glob in wiki/ nach existierenden Seiten
     zum Thema, bevor du etwas Neues anlegst.
   - Gibt es eine Seite zum Thema: ERGAENZE sie. Lege keine Variante mit
     aehnlichem Namen an.
   - Nur wirklich neue Themen bekommen eine neue Seite.
   - Loesche niemals bestehenden Inhalt, nur anfuegen oder annotieren.
   - Maximal 3 neue Seiten pro Session. Lieber wenige dichte Seiten als
     viele duenne.

5. Seitentyp nach Schema in WIKI.md waehlen:
   - laufendes Vorhaben mit Stand und naechsten Schritten -> Projektseite
   - noch nicht umgesetzter Vorschlag -> Ideenseite, Tag #idee
   - uebertragbares Muster oder Begriff -> Konzeptseite
   - konkretes Werkzeug, Repo, Person, Firma -> Entity-Seite

6. Jede beruehrte Seite braucht:
   - YAML-Frontmatter mit tags, sources (inkl. $REL), updated
   - mindestens zwei [[Wiki-Links]] auf verwandte bestehende Seiten
   - Quellenangabe "> [Quelle: $REL]" an den uebernommenen Aussagen
   - Widerspruch zu einer bestehenden Seite markieren als
     "> WIDERSPRUCH mit [[seite]]: ..."

7. wiki/index.md: Zeile fuer jede beruehrte Seite ergaenzen oder aktualisieren.

8. wiki/log.md: Eintrag anhaengen im Format
   "## [JJJJ-MM-TT] session | <Titel>" mit Unterpunkten: neue Seiten,
   aktualisierte Seiten, Schluessel-Erkenntnis.

Antworte am Ende mit einer Zeile: OK: <Seiten die du angelegt/aktualisiert hast>
PROMPTEOF

cd "$MAP" || exit 1

# Watchdog: Job nach TIMEOUT_SEC abbrechen, damit nie etwas haengen bleibt
MAP_SESSION_CAPTURE=1 "$CLAUDE" -p "$PROMPT" \
  --permission-mode acceptEdits \
  --allowedTools "Read" "Write" "Edit" "Glob" "Grep" \
  >> "$LOG" 2>&1 &
CPID=$!
( sleep "$TIMEOUT_SEC"
  if kill -0 "$CPID" 2>/dev/null; then
    kill -9 "$CPID" 2>/dev/null
    log "ABBRUCH Timeout ${TIMEOUT_SEC}s"
  fi ) &
WPID=$!
wait "$CPID"; RC=$?
kill "$WPID" 2>/dev/null

log "claude beendet rc=$RC"

# --- Graph nachziehen (kein LLM, rein lokal) ---
if command -v graphify >/dev/null 2>&1; then
  if graphify . --update --no-viz >> "$LOG" 2>&1; then
    log "graph aktualisiert"
  else
    log "graph-update fehlgeschlagen"
  fi
fi

# --- In GitHub sichern ---
git add -A >> "$LOG" 2>&1
if git diff --cached --quiet; then
  log "keine Aenderungen zu committen"
else
  git commit -m "Session: $(basename "$RAW" .md)" >> "$LOG" 2>&1
  git pull --rebase --autostash >> "$LOG" 2>&1 || log "pull --rebase fehlgeschlagen"
  if git push >> "$LOG" 2>&1; then log "gepusht"; else log "push fehlgeschlagen"; fi
fi

log "fertig $SID"

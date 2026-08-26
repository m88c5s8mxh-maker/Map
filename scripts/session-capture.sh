#!/bin/bash
# SessionEnd-Hook: Claude-Session -> Map-Vault.
# Laeuft schnell und blockiert nie. Tier-2-Sessions werden im Hintergrund
# per "claude -p" ins Wiki kondensiert.
#
# stdin: JSON mit session_id, transcript_path, cwd, reason

MAP="$HOME/Map"
LOG="$MAP/scripts/.session-capture.log"
LEDGER="$MAP/raw/sessions/.captured"

# --- Rekursionsschutz: die Hintergrund-Instanz darf nicht sich selbst ernten ---
if [ -n "$MAP_SESSION_CAPTURE" ]; then
  exit 0
fi

mkdir -p "$MAP/raw/sessions"
touch "$LEDGER"

payload=$(cat)
transcript=$(printf '%s' "$payload" | jq -r '.transcript_path // empty' 2>/dev/null)
sid=$(printf '%s' "$payload" | jq -r '.session_id // empty' 2>/dev/null)

# Fallback: neuestes Transkript, falls der Hook nichts liefert
if [ -z "$transcript" ] || [ ! -f "$transcript" ]; then
  transcript=$(find "$HOME/.claude/projects" -name "*.jsonl" -type f -print0 2>/dev/null \
    | xargs -0 ls -t 2>/dev/null | head -1)
fi
[ -f "$transcript" ] || { echo "$(date '+%F %T') SKIP kein Transkript" >> "$LOG"; exit 0; }

[ -n "$sid" ] || sid=$(basename "$transcript" .jsonl)

# --- Dedupe: schon verarbeitet? ---
if grep -qxF "$sid" "$LEDGER" 2>/dev/null; then
  echo "$(date '+%F %T') SKIP $sid bereits erfasst" >> "$LOG"
  exit 0
fi

# --- Transkript auswerten; Rohmitschnitt entsteht nur ab Tier 1 ---
meta=$(python3 "$MAP/scripts/session_extract.py" "$transcript" \
        --out "$MAP/raw/sessions/{date}-{slug}.md" 2>>"$LOG")
[ -n "$meta" ] || { echo "$(date '+%F %T') FEHLER Extraktion $sid" >> "$LOG"; exit 0; }

tier=$(printf '%s' "$meta"  | jq -r '.tier // 0')
score=$(printf '%s' "$meta" | jq -r '.score // 0')
title=$(printf '%s' "$meta" | jq -r '.title // "?"')
raw=$(printf '%s' "$meta"   | jq -r '.raw_file // empty')
cap=$(printf '%s' "$meta"   | jq -r '.cap_reason // empty')

echo "$sid" >> "$LEDGER"
echo "$(date '+%F %T') T$tier score=$score ${cap:+[$cap] }$title" >> "$LOG"

# Tier 0 -> verworfen, es wurde nichts geschrieben.
# Tier 1 -> nur Rohmitschnitt. Der Stop-Hook hat schon gepusht, also selbst sichern.
if [ "$tier" = "1" ]; then
  nohup env MAP_SESSION_CAPTURE=1 "$MAP/scripts/map-git-sync.sh" \
    "Session-Mitschnitt: $title" >>"$LOG" 2>&1 &
  disown 2>/dev/null
  exit 0
fi
[ "$tier" = "2" ] || exit 0

# --- Tier 2: Wiki-Kondensation abgekoppelt im Hintergrund ---
nohup env MAP_SESSION_CAPTURE=1 \
  "$MAP/scripts/session-integrate.sh" "$raw" "$sid" \
  >>"$LOG" 2>&1 &
disown 2>/dev/null

exit 0

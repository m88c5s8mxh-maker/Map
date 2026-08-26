#!/bin/bash
# Sichert den Map-Vault nach GitHub. Wird von session-capture.sh im Hintergrund
# aufgerufen, wenn ein Rohmitschnitt geschrieben wurde, nachdem der Stop-Hook
# schon gepusht hatte.
# Aufruf: map-git-sync.sh "<commit-nachricht>"

MAP="$HOME/Map"
LOG="$MAP/scripts/.session-capture.log"
MSG="${1:-Map sync}"

cd "$MAP" || exit 0

git add -A >> "$LOG" 2>&1
if git diff --cached --quiet; then
  exit 0
fi

git commit -m "$MSG" >> "$LOG" 2>&1
git pull --rebase --autostash >> "$LOG" 2>&1
if git push >> "$LOG" 2>&1; then
  echo "$(date '+%F %T') [sync] gepusht: $MSG" >> "$LOG"
else
  echo "$(date '+%F %T') [sync] push fehlgeschlagen: $MSG" >> "$LOG"
fi

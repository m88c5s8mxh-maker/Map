#!/bin/bash
# Sichert den Map-Vault nach GitHub.
#
# Grundsatz: dieses Skript laeuft unbeaufsichtigt im Hintergrund. Es darf den
# Repo-Zustand daher NIE selbst reparieren wollen. Kein "pull --rebase", kein
# "merge", kein "force". Ist der Zustand nicht eindeutig, bricht es ab und
# schreibt eine Zeile ins Log — die Aufloesung macht ein Mensch.
#
# Hintergrund: genau ein unbeaufsichtigtes "pull --rebase" hat diesen Vault am
# 18.06.2026 in einen haengenden Rebase geschickt. Zwei Monate lang landeten
# danach alle Auto-Commits auf einem detached HEAD und konnten nie gepusht
# werden, ohne dass es auffiel.
#
# Aufruf: map-git-sync.sh "<commit-nachricht>"

MAP="$HOME/Map"
LOG="$MAP/scripts/.session-capture.log"
MSG="${1:-Map sync}"

log() { echo "$(date '+%F %T') [sync] $*" >> "$LOG"; }

cd "$MAP" || exit 0

# --- 1. Mitten in Rebase/Merge/Cherry-Pick? Finger weg. ---
if [ -d .git/rebase-merge ] || [ -d .git/rebase-apply ] \
   || [ -f .git/MERGE_HEAD ] || [ -f .git/CHERRY_PICK_HEAD ]; then
  log "ABBRUCH: Repo steht mitten in Rebase/Merge. Bitte manuell aufloesen."
  exit 0
fi

# --- 2. Detached HEAD? Nicht committen. ---
# Ein Commit auf detached HEAD gehoert zu keinem Branch, ist nicht pushbar und
# fiele beim naechsten checkout aus der History.
branch=$(git symbolic-ref --short -q HEAD)
if [ -z "$branch" ]; then
  log "ABBRUCH: detached HEAD. Bitte 'git checkout <branch>' und dann erneut."
  exit 0
fi

# --- 3. Committen ---
git add -A >> "$LOG" 2>&1
if git diff --cached --quiet; then
  exit 0
fi
git commit -m "$MSG" >> "$LOG" 2>&1 || { log "commit fehlgeschlagen"; exit 0; }

# --- 4. Push. Scheitert er, bleibt es beim lokalen Commit. ---
if git push >> "$LOG" 2>&1; then
  log "gepusht ($branch): $MSG"
else
  log "PUSH FEHLGESCHLAGEN ($branch): lokal committed, aber divergiert von origin/$branch."
  log "  -> manuell zusammenfuehren, z.B. 'git pull --no-rebase' und Konflikte loesen."
fi

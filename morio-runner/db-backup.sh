#!/bin/sh
# DB-Backup — läuft als Cron auf dem Hetzner-Server (täglich).
# pg_dump von morio_ai, gzip, GFS-Retention, optional Off-Site-Kopie.
#
# Off-Site (empfohlen): in /opt/morio-solutions-ai/bridge/.env setzen:
#   BACKUP_REMOTE="u123456@u123456.your-storagebox.de:/home/backups/morio"
#   BACKUP_SSH_KEY="/root/.ssh/storagebox"   # optional
set -e
SCRIPT_DIR="$(dirname "$0")"
[ -f "$SCRIPT_DIR/.env" ] && . "$SCRIPT_DIR/.env"

DIR=/opt/morio-solutions-ai/backups
DAILY="$DIR/daily"; WEEKLY="$DIR/weekly"; MONTHLY="$DIR/monthly"
mkdir -p "$DAILY" "$WEEKLY" "$MONTHLY"
TS=$(date +%Y%m%d-%H%M)
FILE="$DAILY/morio_ai-$TS.sql.gz"

# 1) Dump
docker exec morio-db pg_dump -U morio morio_ai 2>/dev/null | gzip > "$FILE"
SIZE=$(du -h "$FILE" 2>/dev/null | cut -f1)

# 2) GFS-Kopien: sonntags Wochen-, am Monatsersten Monats-Kopie
[ "$(date +%u)" = "7" ] && cp "$FILE" "$WEEKLY/"
[ "$(date +%d)" = "01" ] && cp "$FILE" "$MONTHLY/"

# 3) Retention: 7 täglich, 5 wöchentlich, 12 monatlich
ls -1t "$DAILY"/morio_ai-*.sql.gz   2>/dev/null | tail -n +8  | xargs -r rm -f
ls -1t "$WEEKLY"/morio_ai-*.sql.gz  2>/dev/null | tail -n +6  | xargs -r rm -f
ls -1t "$MONTHLY"/morio_ai-*.sql.gz 2>/dev/null | tail -n +13 | xargs -r rm -f

# 4) Off-Site-Kopie (falls konfiguriert)
OFFSITE="fehlt (nur lokal!)"
if [ -n "$BACKUP_REMOTE" ]; then
  SSH_OPT=""
  [ -n "$BACKUP_SSH_KEY" ] && SSH_OPT="-i $BACKUP_SSH_KEY"
  if scp $SSH_OPT -o StrictHostKeyChecking=accept-new "$FILE" "$BACKUP_REMOTE/" 2>/dev/null; then
    OFFSITE="OK → $BACKUP_REMOTE"
  else
    OFFSITE="FEHLGESCHLAGEN → $BACKUP_REMOTE"
  fi
fi

echo "$(date) — Backup: $FILE ($SIZE) · Off-Site: $OFFSITE" >> "$DIR/backup.log"

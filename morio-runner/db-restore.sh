#!/bin/sh
# DB-Restore — stellt ein gzip-Dump wieder her.
# NUTZUNG:  sh db-restore.sh /opt/morio-solutions-ai/backups/daily/morio_ai-YYYYMMDD-HHMM.sql.gz
#
# ACHTUNG: überschreibt die aktuelle Datenbank morio_ai vollständig.
# Für Quartals-Restore-Tests idealerweise gegen eine Wegwerf-DB/-Instanz laufen lassen.
set -e
FILE="$1"
if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  echo "Usage: sh db-restore.sh <pfad/zum/dump.sql.gz>"
  echo "Verfügbare Backups:"
  ls -1t /opt/morio-solutions-ai/backups/*/morio_ai-*.sql.gz 2>/dev/null | head -20
  exit 1
fi

echo "⚠️  Stelle '$FILE' in Datenbank morio_ai wieder her."
echo "    Die aktuelle Datenbank wird dabei ÜBERSCHRIEBEN. Weiter in 5s (Ctrl+C zum Abbruch)…"
sleep 5

# Terminate offene Verbindungen, DB neu anlegen, Dump einspielen
docker exec -i morio-db psql -U morio -d postgres -c \
  "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname='morio_ai' AND pid<>pg_backend_pid();" >/dev/null 2>&1 || true
docker exec -i morio-db psql -U morio -d postgres -c "DROP DATABASE IF EXISTS morio_ai;"
docker exec -i morio-db psql -U morio -d postgres -c "CREATE DATABASE morio_ai OWNER morio;"
gunzip -c "$FILE" | docker exec -i morio-db psql -U morio -d morio_ai >/dev/null

echo "✅ Restore abgeschlossen aus $FILE"
echo "   App ggf. neu starten:  docker compose restart app"

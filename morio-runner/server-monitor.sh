#!/bin/sh
# Server-Collector — läuft als Cron auf dem Hetzner-Server (alle 5 Min).
# Sammelt Disk/RAM/Load/Docker und meldet sie ans CRM (/api/server/report).
CRM_URL="https://intra.moriosolutions.de"
SCRIPT_DIR="$(dirname "$0")"
[ -f "$SCRIPT_DIR/.env" ] && . "$SCRIPT_DIR/.env"
SECRET="$WEBHOOK_SECRET"

DISK=$(df / | awk 'NR==2{gsub("%","",$5); print $5}')
RAM=$(free | awk '/Mem:/{printf "%d", ($3/$2)*100}')
LOAD=$(awk '{print $1}' /proc/loadavg)
UP=$(awk '{print int($1)}' /proc/uptime)
if docker ps --filter "name=morio-app" --filter "status=running" -q | grep -q .; then DOCKER_OK=true; else DOCKER_OK=false; fi

curl -s -X POST "$CRM_URL/api/server/report" \
  -H "Authorization: Bearer $SECRET" -H "Content-Type: application/json" \
  -d "{\"disk_used_pct\":${DISK:-0},\"ram_used_pct\":${RAM:-0},\"load_avg\":\"${LOAD}\",\"uptime_s\":${UP:-0},\"docker_ok\":${DOCKER_OK},\"source\":\"server-cron\"}" \
  > /dev/null 2>&1

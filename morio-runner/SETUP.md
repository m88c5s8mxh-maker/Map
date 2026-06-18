# Morio Bridge Runner — Setup (für beide)

Der Runner pollt das CRM, führt Agent-Tasks aus (inkl. Website-Generator) und überwacht den Server.
Mehrere Runner können parallel laufen — jeder Task wird atomar von genau einem beansprucht.

## Einrichten
1. Node installiert? (`node -v`)
2. In `morio-runner/` eine Datei **`.env`** anlegen (wird NICHT gepusht):
   ```
   ANTHROPIC_API_KEY=sk-ant-...        # gemeinsamer Key
   WEBHOOK_SECRET=c8a193196cd733b0101769ce
   CRM_URL=https://intra.moriosolutions.de
   MAP_PATH=C:/DEIN/PFAD/Map/raw/skills   # dein lokaler Map-Skills-Pfad
   HETZNER_API_TOKEN=...               # optional, für Auto-Healing
   HETZNER_SERVER_ID=129127144
   ```
3. Starten: `node runner.js`

## Website-Generator
Agent-Task mit dem Wort "Website" + Firma + Branche → erzeugt fertige index.html (Opus 4.8, cinematic-web Skill).

#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Map — Einmal-Setup (jeder Nutzer führt dies einmalig nach git clone aus)
# ─────────────────────────────────────────────────────────────────────────────
set -e

CYAN='\033[0;36m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'

echo -e "${CYAN}Map Setup${NC}"
echo "────────────────────────────────"

# 1. Python prüfen
if ! command -v python3 &>/dev/null; then
  echo "❌  Python 3 nicht gefunden → https://python.org"
  exit 1
fi
echo -e "✓  Python: $(python3 --version)"

# 2. graphify installieren
echo -e "\n${CYAN}Installiere graphify…${NC}"
python3 -m pip install graphifyy -q 2>/dev/null || python3 -m pip install graphifyy --user -q
echo -e "✓  graphify installiert"

# 3. Git-Hook via graphify installieren (post-commit + post-checkout)
echo -e "\n${CYAN}Installiere Git-Hooks…${NC}"
graphify hook install
echo -e "✓  Git-Hooks registriert (auto-rebuild nach jedem commit)"

# 4. Verzeichnisse sicherstellen
mkdir -p raw wiki/concept wiki/entity wiki/synthesis graphify-out

# 5. Obsidian App-Config schreiben (falls noch nicht vorhanden)
if [ ! -f wiki/.obsidian/app.json ]; then
  mkdir -p wiki/.obsidian
  cat > wiki/.obsidian/app.json << 'JSON'
{
  "legacyEditor": false,
  "livePreview": true,
  "defaultViewMode": "source",
  "showLineNumber": true
}
JSON
  echo -e "✓  Obsidian Vault: wiki/"
fi

# 6. Fertig
echo ""
echo -e "${GREEN}────────────────────────────────${NC}"
echo -e "${GREEN}✓  Setup abgeschlossen!${NC}"
echo ""
echo "  Nächste Schritte:"
echo "  1. Obsidian → 'Vault öffnen' → diesen Ordner/wiki/ wählen"
echo "  2. Datei ablegen:  cp meine-notiz.md raw/"
echo "  3. Wiki befüllen:  /obsidian-wiki ingest raw/meine-notiz.md"
echo "  4. Committen:      git add . && git commit -m 'Add: notiz'"
echo "     → Graph baut sich automatisch neu"
echo ""

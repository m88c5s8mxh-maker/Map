#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Map — Einmal-Setup (jede Person führt dies einmalig aus)
# Installiert graphify und registriert den Post-Commit-Hook
# ─────────────────────────────────────────────────────────────────────────────
set -e

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${CYAN}Map Setup${NC}"
echo "────────────────────────────────"

# 1. Python prüfen
if ! command -v python3 &>/dev/null; then
  echo "❌  Python 3 nicht gefunden. Bitte zuerst installieren: https://python.org"
  exit 1
fi
echo -e "✓  Python: $(python3 --version)"

# 2. graphify installieren
echo -e "\n${CYAN}Installiere graphify…${NC}"
if python3 -m pip install graphifyy -q 2>/dev/null; then
  echo -e "✓  graphify installiert: $(graphify --version 2>/dev/null || echo 'ok')"
else
  echo -e "${YELLOW}⚠️  pip install fehlgeschlagen — versuche --user${NC}"
  python3 -m pip install graphifyy --user -q
fi

# 3. Post-Commit-Hook installieren
echo -e "\n${CYAN}Installiere Git Post-Commit-Hook…${NC}"

HOOK_DIR="$(git rev-parse --git-dir)/hooks"
HOOK_FILE="$HOOK_DIR/post-commit"

cat > "$HOOK_FILE" << 'HOOK'
#!/usr/bin/env bash
# Graphify post-commit hook — baut Map nach jedem Commit neu
# Läuft im Hintergrund um Commit nicht zu blockieren
(
  cd "$(git rev-parse --show-toplevel)"
  if command -v graphify &>/dev/null; then
    echo "📊 Aktualisiere Knowledge Map…"
    graphify . --update --no-viz --quiet 2>/dev/null && \
    echo "✓  Knowledge Map aktualisiert (graphify-out/)" || \
    echo "⚠️  Map-Update fehlgeschlagen (ignoriert)"
  fi
) &
HOOK

chmod +x "$HOOK_FILE"
echo -e "✓  Hook registriert: $HOOK_FILE"

# 4. Obsidian .obsidian Konfiguration anlegen
echo -e "\n${CYAN}Obsidian Vault vorbereiten…${NC}"
mkdir -p wiki/.obsidian
cat > wiki/.obsidian/app.json << 'OBSIDIAN'
{
  "legacyEditor": false,
  "livePreview": true,
  "defaultViewMode": "source",
  "strictLineBreaks": false,
  "showLineNumber": true
}
OBSIDIAN
echo -e "✓  Obsidian Vault: wiki/ (in Obsidian als Vault öffnen)"

# 5. Verzeichnisse anlegen falls nicht vorhanden
mkdir -p raw wiki/concept wiki/entity wiki/synthesis graphify-out

# 6. Ergebnis
echo ""
echo -e "${GREEN}────────────────────────────────${NC}"
echo -e "${GREEN}✓  Setup abgeschlossen!${NC}"
echo ""
echo "  Nächste Schritte:"
echo "  1. Obsidian öffnen → 'Vault öffnen' → Map/wiki/ wählen"
echo "  2. Datei in raw/ ablegen: cp meine-notiz.md raw/"
echo "  3. Im Claude Code: /obsidian-wiki ingest raw/meine-notiz.md"
echo "  4. Graph ansehen: open graphify-out/graph.html"
echo ""
echo "  Bei Fragen: README.md lesen"

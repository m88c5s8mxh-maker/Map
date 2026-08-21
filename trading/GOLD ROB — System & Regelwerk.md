---
type: "trading-spec"
system: "VOLLAUTOMATIK GOLD ROB"
source: "Twelve Data"
tags:
  - graphify/trading
  - trading/gold-rob
  - community/Trading
updated: "2026-08-21"
---
# GOLD ROB — System & Regelwerk

- **Instrument:** XAU/USD (Gold), Timeframe M1
- **Setup:** Sweep eines ungesweepten Pivots → iFVG-Break = Entry
- **Sessions (Berlin):** PRE 13:00–14:30 · NY 15:30–17:00
- **Trades/Fenster:** max 2 — der 2. nur nach Verlust (**Re-Entry** = der eigentliche Edge)
- **Stop-Loss:** hinter dem Sweep-Extrem
- **Teilverkauf:** ⅓ am Gegenpivot (T1), Rest = Runner mit Struktur-Trailing + BE nach Teilgewinn
- **Risk/Trade:** 0.75 % vom Kapital (flach, kein Kelly)
- **Ausführung:** MT5 EA (GoldSweepIFVG) · Live-Signal-Bot (`gold_live_signal.py`), parity-getestet (Live == Backtest)

## Connections
- [[VOLLAUTOMATIK GOLD ROB]] — gehört zu
- [[GOLD ROB — Backtest-Ergebnis]] — validiert durch

---
*[Terminal öffnen](file:///C:/Users/Marc/Documents/TERMINAL93/TERMINAL93_GOLD.html) · auto-generiert von export_obsidian.py am 2026-08-21*

#graphify/trading #trading/gold-rob #community/Trading

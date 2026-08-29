---
tags: [concept, git, automation, postmortem, hoch]
sources: [raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]
updated: 2026-08-29
---

# Stiller Sync-Ausfall

## Definition

Wenn ein Automatisierungs-Hook einen Fehler **schluckt** statt ihn zu melden, verwandelt er einen
einmaligen Zwischenfall in einen dauerhaften, unsichtbaren Datenstillstand. Die Automatik läuft
sichtbar weiter und meldet Erfolg — nur ihr Ergebnis kommt nirgends mehr an.

## Der Schadensfall: zwei Monate ohne Vault-Sync

Der Map-Vault synchronisierte von Juni bis Ende August 2026 nicht mehr, ohne dass es jemand
bemerkte. Rekonstruktion aus dem Reflog:

| Datum | Ereignis |
|---|---|
| 18.06. | ein manuelles `git pull --rebase` blieb mitten im Rebase stehen → HEAD detached |
| 12.07. | dasselbe noch einmal |
| seitdem | **alle** „Auto: wiki sync"-Commits landeten auf einem detached HEAD — nicht pushbar |
| Stand 26.08. | `main` seit **10.06.** eingefroren, `origin/main` 10+ Commits voraus |

Der eigentliche Verschleierer war der `SessionStart`-Hook: `git pull --ff-only … || true`. Bei
Divergenz scheitert `--ff-only` — und `|| true` macht daraus einen Erfolg. Zwei Monate lang
schrieb der `Stop`-Hook brav Commits, die nirgendwohin führten.

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

Bemerkenswert an der Ursachensuche: der Fehler wurde zunächst dem eigenen, gerade erst
geschriebenen Skript zugeschrieben — das Reflog widerlegte das. **Der zeitlich nächste Verdächtige
ist nicht der Verursacher; das Reflog ist die Instanz, die es entscheidet.**

## Warum es niemand merkte

Ein Sync-Ausfall hat kein Symptom. Lokal ist alles da, Commits entstehen, der Editor arbeitet
normal. Sichtbar wird er erst, wenn jemand die andere Seite anschaut oder ein Gerät wechselt.
Bei einem Zwei-Personen-Vault heißt das: beide arbeiten monatelang an auseinanderlaufenden
Kopien, ohne Anlass zum Nachsehen.

## Gegenmittel: laut abbrechen statt blind committen

Der ersetzte Hook committete mit `git add -A` ohne jede Prüfung. `scripts/map-git-sync.sh`
erfüllt dieselbe Funktion, **bricht aber ab und schreibt den Grund ins Log**, wenn der Zustand
nicht eindeutig ist:

- detached HEAD
- hängender Rebase
- kein unbeaufsichtigtes `pull --rebase` mehr

Das Argument aus dem Verlauf: der alte Hook hat korrekt gepusht, **weil** der Zustand sauber
war — bei kaputtem Zustand committet er trotzdem weiter. `map-git-sync.sh` hätte in der ersten
Nacht „ABBRUCH: detached HEAD" ins Log geschrieben, statt es 60 Tage zu verschleiern.

**Übertragbare Regel:** `|| true` an einem Sync-Kommando ist kein Fehlerschutz, sondern eine
Fehlerlöschung. Eine Automatik darf einen unklaren Zustand nie überschreiben — sie muss ihn
melden und die Hände weglassen.

## Die Wiederherstellung — Reihenfolge zählt

1. **Physisch sichern, bevor Git angefasst wird** — Rettungsbranch (`rescue/vault-2026-08-26`)
   *und* ein Tarball außerhalb des Repos.
2. **Merge statt Rebase.** Ein Rebase schreibt um; genau daran ist es zweimal gescheitert.
3. **Alte Branch-Spitzen prüfen, bevor der Branch verschoben wird.** Vier `main`-Commits vom
   19.05. und 10.06. waren noch *nicht* enthalten — ein Verschieben von `main` hätte sie
   vernichtet. Also wurde auch `main` eingemerged.
4. **Löschungen einzeln prüfen, nicht pauschal übernehmen.** Von 113 gelöschten Dateien waren
   109 die legitime Konsolidierung `wiki/X.md` → `wiki/entity/X.md` — gegengeprüft, indem zu
   jeder gelöschten Datei die neue Position nachgewiesen wurde.
5. **Git-Hooks stören den Merge.** `post-commit` und `post-checkout` bauten den Graph-Report bei
   jedem Schritt neu, machten den Baum dirty und blockierten den Merge. Vorübergehend beiseite
   legen — und danach zuverlässig zurückstellen.

## `git add -A` in Auto-Commits ist ein Löschvektor

Im selben Zug traten zwei Auto-Commits des Kollegen zutage, beide nur „Mc: wiki sync 2026-08-21":

| Commit | Zeit | Gelöscht |
|---|---|---|
| `920176a` | 20:09 | `Trading FRVP Graph.md` |
| `c7ecaa2` | 22:21 | `CLAUDE.md`, `README.md`, `SETUP_KOLLEGE.md`, `SETUP_MC.md` + 15 `trading/`-Strategiedateien |

Der verräterische Fingerabdruck: `c7ecaa2` **fügte** zugleich `Unbenannt.md` mit einer Zeile
hinzu — Obsidians „Untitled"-Notiz. Also jemand, der in der UI herumklickt, während ein
`git add -A`-Hook den ganzen Arbeitsbaum mitnimmt. Eine generische Auto-Commit-Nachricht lässt
**keine Absicht erkennen** und macht solche Löschungen nachträglich nicht mehr deutbar.

### Der Entscheidungsgrundsatz

**Wiederherstellen ist umkehrbar, stiller Verlust nicht.** Bei generischen
Auto-Commit-Nachrichten ohne Absichtssignal wird deshalb zugunsten des Behaltens entschieden —
mit ausdrücklicher Ansage, dass es umkehrbar ist.

Die Signalstärke unterscheidet die Fälle:

- **Nicht wiederhergestellt** — die 15 Trading-Dateien: eine systematisch benannte Familie
  (Bollinger / Donchian / EMA / RSI, je H1/M15/M30, plus `Strategie-Labor.md`), die vollständig
  und auf einmal verschwindet. Ein komplett gelöschtes Experiment-Set liest sich als Aufräumen.
- **Wiederhergestellt** — die vier Root-Dokumente: `CLAUDE.md` trägt die
  Context-Navigation-Regeln, ohne die das Map-System nicht greift; die `SETUP_*`-Dateien sind
  die Einrichtungsdoku des Zwei-Personen-Aufbaus. Kein Ersatz angelegt, nie zurückgekehrt.
- **Zweifelsfall, vom Nutzer entschieden** — `Trading FRVP Graph.md` gehörte zum früheren
  Commit desselben Abends und damit vermutlich zur gewollten Trading-Bereinigung; auf Weisung
  wieder gelöscht (`aef8e41`).

> [Quelle: raw/sessions/2026-08-26-obsidian-integration-for-claude-session-archiving.md]

Grenze der Automatik: **das Zusammenführen zweier auseinandergelaufener Vault-Stände ist eine
Nutzerentscheidung**, kein Hintergrundskript-Job — es betrifft hunderte Seiten und fremde Arbeit.

## Ergebnis

Der Sync läuft in beide Richtungen, verifiziert: die 24 lokalen Commits liegen auf `origin/main`
(vom bestehenden `Stop`-Hook gepusht, sobald die Divergenz weg war), und der Push des Kollegen
kam per `git pull --ff-only` sauber herein — genau der Aufruf, der seit Juni stillschweigend
scheiterte.

## Offene Fragen

- Braucht der Vault eine aktive Sync-Kontrolle (z. B. Warnung bei `ahead`/`behind` > n beim
  Sessionstart)? Ein Log, das niemand liest, ist nur ein leiserer stiller Ausfall.
- Der Kollege sollte gefragt werden, ob die vier Root-Dokumente absichtlich weggeworfen wurden —
  falls ja, `git revert 2c274ce`.

## Verbindungen
- [[map-sync]] — die betroffene Sync-Strecke und ihre Absicherung
- [[session-erfassung-map]] — beim Testen dieser Pipeline kam der Ausfall ans Licht
- [[server-quellcode-drift]] — dasselbe Grundmuster: ein Automatismus, dessen Ergebnis niemand gegenprüft
- [[5 Whys Root Cause Analysis]] · [[incident-response]] · [[Rollback Plan]]

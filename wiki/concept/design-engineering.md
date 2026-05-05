---
tags: [concept, design, animation, UI, frontend]
sources: [raw/skills/emil-design-eng.md]
updated: 2026-04-22
---

# Design Engineering

## Definition
Die Disziplin, die Design-Sensibilität mit Engineering-Kompetenz verbindet. Ein Design Engineer baut Interfaces, bei denen jedes Detail — sichtbar oder unsichtbar — zum Gesamterlebnis beiträgt.

## Animations-Entscheidungsrahmen

### Wann animieren?
| Häufigkeit | Entscheidung |
|---|---|
| 100+ mal/Tag (Tastenkürzel, Command Palette) | Keine Animation |
| Dutzende Male/Tag (Hover) | Entfernen oder reduzieren |
| Gelegentlich (Modals, Toasts) | Normale Animation |
| Selten (Onboarding) | Darf Freude machen |

**Niemals Keyboard-Aktionen animieren.**

### Easing
| Situation | Easing |
|---|---|
| Element betritt/verlässt Screen | `ease-out` |
| Bewegung auf Screen | `ease-in-out` |
| Hover / Farbe | `ease` |
| Konstant (Marquee) | `linear` |

```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
```

**Niemals `ease-in`** — startet zu langsam.

### Durations
| Element | Dauer |
|---|---|
| Button Press | 100–160ms |
| Tooltips | 125–200ms |
| Dropdowns | 150–250ms |
| Modals, Drawer | 200–500ms |

**Regel: UI-Animationen unter 300ms.**

## Kern-Prinzipien
- `scale(0.97)` auf `:active` — Buttons müssen auf Druck reagieren
- Niemals von `scale(0)` animieren → `scale(0.95)` + `opacity: 0`
- Popovers sind origin-aware (`transform-origin` auf Trigger) — Modals ausgenommen
- CSS Transitions > Keyframes für dynamische/unterbrechbare UI
- Nur `transform` + `opacity` animieren (GPU-beschleunigt)

## Review-Checkliste
| Problem | Fix |
|---|---|
| `transition: all` | Exakte Properties angeben |
| `scale(0)` Entry | `scale(0.95)` + `opacity: 0` |
| `ease-in` auf UI | `ease-out` oder custom Kurve |
| Duration > 300ms | Auf 150–250ms reduzieren |
| Hover ohne Media Query | `@media (hover: hover) and (pointer: fine)` |
| Animation auf Keyboard-Aktion | Komplett entfernen |
| Framer Motion `x`/`y` Props | `transform: "translateX()"` für Hardware-Acc. |
| Gleiche Enter/Exit-Speed | Exit schneller als Enter |

## Beziehungen
- [[emil-kowalski]] — Hauptvertreter dieser Philosophie
- [[taste-skill]] — verwandter Skill (DESIGN_VARIANCE, MOTION_INTENSITY)
- [[design-ux-skills]] — Übersicht aller Design-Skills

## Offene Fragen
- Wie verhält sich das in React Server Components?
- Wann ist Framer Motion trotz Performance-Overhead sinnvoll?

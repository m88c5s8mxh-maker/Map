# Kling 3.0 / O3 — Technisches Deep Dive Mai 2026

**Quellen:** klingai.com/blog, atlabs.ai/blog, mindstudio.ai
**Gescrapt:** 2026-05-13
**Kategorie:** ai-video

## Zwei Modelle in der 3.0-Serie

| Modell | Fokus | API-Name | Architektur |
|--------|-------|----------|-------------|
| **Kling V3** | Geschwindigkeit, Standard-Produktion | `kling-v3` | Standard Neural |
| **Kling O3** | Qualität, Reasoning, Omni Audio | `kling-v3-omni` | "Omni One" — 3D Spacetime Joint Attention + Chain-of-Thought |

**Kling O3** denkt vor der Generierung: bricht Prompt in Scene-Elemente auf, plant Motion-Pfade, berechnet Licht/Komposition — erst dann renderT es.

## Neue Features gegenüber 2.x

| Feature | Alt (2.x) | Neu (3.0) |
|---------|-----------|-----------|
| Video-Länge | 10 Sek. | **15 Sek.** |
| Shots pro Generation | 1 | **bis zu 6** (Multi-Shot) |
| Audio | Kein nativer Audio | **Omni Audio** — Dialogue, SFX, Musik |
| Charakter-Konsistenz | Basis | **Subject Binding** — bis 4 Reference Images |
| Frame-Kontrolle | Nur First Frame | **First + Last Frame** |
| Resolution | 1080p | **4K nativ** (Pro Tier) |
| Prompting-System | Text | **Omni Reference Tags** |

## Omni Reference Tags (Syntax 2.0)

Neue Tag-Syntax für präzise Asset-Bindung:

| Tag | Asset-Typ | Effekt |
|-----|----------|--------|
| `<<<element_1>>>` | Charakter / Objekt | Bewahrt Identität und Features |
| `<<<image_1>>>` | Referenzbild | Startkompositon oder Stil |
| `<<<video_1>>>` | Referenzvideo | Motion-Pattern übertragen |
| `<<<voice_1>>>` | Voice Profile | Stimme an Charakter binden |

**Beispiel-Syntax:**
```
@Character_A greets @Character_B in the setting defined by <<<image_1>>>.
[Character A: <<<voice_1>>>, warm tone]: "Welcome home."
```

## Multi-Shot / Director Mode

Zwei Modes für Multi-Shot-Generierung:
- **Intelligence Mode** — AI plant selbst Kameraabdeckung aus einem Prompt
- **Customization Mode** — Creator definiert jeden Shot explizit:

```
Shot 1 (0-3 seconds): Wide establishing shot of European villa terrace, golden hour
Shot 2 (3-7 seconds): Close-up on woman's face, she speaks
[Character A: warm voice]: "The trees are turning yellow."
Shot 3 (7-11 seconds): Close-up on man, he whispers a response
Shot 4 (11-15 seconds): Medium two-shot, she smiles
```

## 5-Layer Prompt Formel (Kling 3.0)

```
Scene → Characters → Action → Camera → Audio & Style
```

1. **Scene** — Wo? Wann? Welche Atmosphäre?
2. **Characters** — Konkrete Bezeichnungen, konsistent wiederholen
3. **Action** — Timeline, sequenziell nicht kumulativ
4. **Camera** — Shot-Typ, Bewegung, Übergänge
5. **Audio & Style** — Dialogue, SFX, Ambient, Film-Stil

## Native Audio Syntax

```
[Character A: Lead Detective, controlled serious voice]: "Let's stop pretending."
Immediately, the suspect shifts in chair, tense.
[Character B: Prime Suspect, sharp defensive voice]: "I already told you everything."
The detective slides a folder. Paper scraping sound.
SFX: A massive power-up sound like turbine at max speed
```

**Audio-Prinzipien:**
- Charakter immer mit `[Name, Tone]`-Label
- Transition-Wörter für Timing: "Immediately," "Then," "Suddenly"
- `SFX:` für explizite Sound Effects
- Ambient-Sounds für Atmosphäre

## Die 4 Kling-Regeln (aus Atlabs-Deep-Dive)

1. **Motion Verbs** — Dolly push, whip-pan, shoulder-cam drift, crash zoom — nie generisch "camera moves"
2. **Texture = Credibility** — Grain, Lens Flare, Reflections, Condensation, Sweat, Fabric Sheen
3. **Temporal Flow** — Immer beschreiben: Beginning → Middle → End. Kein eingefrorener Moment.
4. **Real Light Sources** — Nicht "dramatic lighting" — sondern: neon signs, candlelight, golden hour, LED panels

## Film-Stock Referenzen (versteht Kling)

```
"VHS camcorder aesthetic with heavy grain and chromatic aberration"
"Shot on 35mm film with shallow focus and glowing bokeh"
"Super 8 film look with warm vintage tones"
"Digital cinema with anamorphic lens flare"
"Desaturated teal grade, crushed blacks"
```

## Speed Ramp Syntax

```
Speed ramp from 40% to 100% as action intensifies
Shot 1 (0-3 seconds): Ultra slow motion
Shot 2 (3-8 seconds): Shaky handheld quick pans
Shot 3 (8-10 seconds): Snap focus close-up
```

## Erweiterte Negative Prompts

Neuentdeckt (nicht im alten Skill):
```
deformed hands, extra fingers, mutation, warped limbs
morphing textures, morphing clothes
warped text, unreadable typography
blur, flicker, distorted faces, unrealistic proportions
glitch, artifacts, low quality
```

## Physics Simulation (O3)

O3 modelliert: Gravity, Friction, Collision, Fluid Dynamics
- Keywords: "realistic gravity", "smooth motion" triggern Physics-Module
- Fluid Dynamics → Wasser, Farbe, Rauch realistisch
- Objekte clippen nicht mehr durch Oberflächen

## Technische Spezifikationen (O3)

| Parameter | Wert |
|-----------|------|
| Max Länge | 15 Sek. |
| Beste Qualität | 5–10 Sek. |
| Max Resolution | 4K (1080p Standard) |
| Frame Rate | 24–30 fps Standard, bis 60 fps Pro |
| Max Prompt | 2.500 Zeichen — Best Practice unter 500 |
| Reference Images | Bis 4 (vorher dachten wir 3) |
| Verarbeitung | 2–8 min je nach Komplexität |

## Vergleich: Kling O3 vs Konkurrenten (Mai 2026)

| Modell | Stärke | Schwäche vs Kling O3 |
|--------|--------|---------------------|
| OpenAI Sora | Cinematic, contemplative | Schlechtere Charakter-Konsistenz, kein nativer Audio |
| Runway Gen-4 | Video-to-Video, UI-Polish | Kürzere Clips, weniger Multi-Shot |
| Google Veo 3 | Natural Language, erster mit nativer Audio | Schlechtere Physics-Simulation |
| ByteDance Seedance 2.0 | Narrative Kontinuität | Schwächer bei Action/Motion |

## Verbundene Skills

| Skill | Update-Bedarf |
|-------|--------------|
| `raw/skills/kling-prompts/SKILL.md` | Multi-Shot Syntax, Omni Reference Tags, Audio Syntax, 4-Rules, Film-Stock, Physics |

## Tags
`#kling` `#ai-video` `#kling3` `#klingO3` `#multishot` `#omniaudio` `#prompting` `#2026`

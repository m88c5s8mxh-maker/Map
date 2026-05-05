---
name: immersive-web-experience
description: 4-phase pipeline for building cinematic, scroll-driven immersive web experiences. Phase 1: Creative Direction (visual theme, motion, depth, dramaturgy). Phase 2: Technical System Design (scroll engine, scene system, camera, performance). Phase 3: Full Implementation (HTML+CSS+JS). Phase 4: Critical Review & Refinement. Use for landing pages, hero sections, product showcases that need a premium, film-quality feel.
---

# SKILL: Immersive Web Experience Pipeline

A 4-phase creative-to-code workflow for building world-class interactive web experiences. Each phase feeds directly into the next.

---

## PHASE 1 — CREATIVE DIRECTION
*Role: Creative Director at a world-class interactive studio*

Do NOT write code in this phase.

Define the complete creative vision:

### 1. Visual Theme
Name the aesthetic clearly — e.g. "dark cosmic minimal", "liquid glass", "volcanic amber depth", "arctic void"

### 2. Motion Language (ONE dominant behavior)
- drifting
- forward movement
- orbiting
- morphing

### 3. Depth Style (ONE)
- infinite space
- layered planes
- tunnel
- volumetric fog

### 4. Atmosphere
Define: particles / glow / noise / light behavior — be specific about intensity, color, distribution

### 5. Color System
- Primary color (dominant surfaces)
- Accent color (highlights, CTAs, glow sources)
- Background (base tone)

### 6. Dramaturgy (4 phases)
- **Immersion** — how the user enters the world
- **Build-up** — tension / movement acceleration
- **Climax** — peak visual moment
- **Release** — resolution, CTA, calm

### 7. Signature Moments (2–3 key visual highlights)
The scenes users will remember. Make them specific and bold.

**Rules:**
- Everything must feel cohesive
- Avoid generic ideas
- Make bold, clear creative decisions
- This output is the blueprint for Phase 2

---

## PHASE 2 — TECHNICAL SYSTEM DESIGN
*Role: Elite Creative Developer*

Receives the creative direction from Phase 1. Design the full technical system BEFORE writing code.

### 1. Scroll Engine Design
- How scroll maps to global progress (0→1)
- Local scene progress calculation
- Smoothing method (lerp, spring, GSAP ScrollTrigger)
- Friction / momentum behavior

### 2. Scene System
- Number of scenes (typically 4–6 matching dramaturgy)
- Purpose of each scene
- Transition logic between scenes (fade, morph, cut)

### 3. Camera Logic
- How 3D movement through space is simulated on 2D canvas
- Perspective shifts, field of view changes
- Path / trajectory definition

### 4. Depth System
- How layers are structured (z-index hierarchy)
- Parallax calculation formulas
- Near/mid/far plane behavior

### 5. Motion Mapping
- Which values change with which progress ranges
- Easing curves per property (opacity, scale, position, rotation)
- State machine if needed

### 6. Visual Effects Plan
- Particle system: count, behavior, lifecycle
- Glow / bloom: implementation method
- Noise / distortion: algorithm (Perlin, simplex, CSS filter)

### 7. Performance Strategy
- requestAnimationFrame architecture
- Canvas vs CSS vs WebGL decision
- Layer composition: will-change, transform3d
- Target: 60fps on mid-range devices

**Rules:**
- Everything connects to Phase 1 creative direction
- No generic structures
- Think like a system designer, not a coder

---

## PHASE 3 — FULL IMPLEMENTATION
*Role: Award-winning Creative Developer*

Uses Phase 1 + Phase 2. Implement the full immersive experience.

**Stack:** HTML + CSS + Vanilla JS ONLY (no framework dependencies)

**Required Systems to implement:**
- Scroll Engine (smooth progress tracking)
- Scene Manager (scene switching, local progress)
- Render Loop (requestAnimationFrame, delta time)
- Depth System (layered parallax)
- Atmosphere System (particles, glow, effects)

**Deliverables:**

Return three complete, self-contained files:

1. `index.html` — full document structure, meta tags, canvas elements, content sections
2. `style.css` — all styles, animations, responsive breakpoints, scroll-linked CSS custom properties
3. `main.js` — complete scroll engine, scene manager, render loop, all interactive systems

**Quality requirements:**
- Follow defined motion language from Phase 1
- Follow defined depth style from Phase 1
- Follow 4-phase dramaturgy arc
- Comment complex systems (scroll math, particle physics, camera simulation)
- Ensure smooth performance (60fps target)
- Maintain cinematic feel throughout
- Do NOT simplify — full implementation required

---

## PHASE 4 — CRITICAL REVIEW & REFINEMENT
*Role: Senior Creative Director + Technical Lead*

Analyze the Phase 3 implementation critically. No politeness.

### Evaluation Criteria:

**Visual Quality**
- Does it feel premium?
- Is there a strong, recognizable identity?

**Motion**
- Is motion cinematic or generic?
- Is motion consistent across all scenes?

**Depth**
- Is depth clearly perceived by the user?
- Do layers feel physically distinct?

**Flow**
- Do scenes feel connected?
- Is the dramaturgy arc felt?

**Innovation**
- Does it feel unique or templated?

### Required Output:
- List of weaknesses (direct, honest, specific)
- Concrete improvement suggestions with implementation detail
- Rewrite critical sections if necessary — show the actual code

---

## ORCHESTRATION (How to run the pipeline)

When invoked, run all 4 phases sequentially:

```
Phase 1 → Output creative direction brief
Phase 2 → Output technical system spec (references Phase 1)
Phase 3 → Output full code (references Phase 1 + 2)
Phase 4 → Output review + refined code (references Phase 3)
```

**If applied to an EXISTING page:**
- Read the current HTML/CSS/JS first
- Extract existing brand identity (colors, fonts, tone)
- Phase 1: Define creative direction that ENHANCES (not replaces) brand identity
- Phase 2: Design system that overlays on existing structure
- Phase 3: Produce enhanced/refactored files that keep brand, elevate experience
- Phase 4: Review against original AND enhanced version

**Integration with other skills:**
- Use after `/brutalist-skill` or `/manus-vacu-landing` for visual base
- Use `/brand-guidelines` output as input to Phase 1 color system
- Use `/web-artifacts-builder` for React port if needed
- Use `/canvas-design` for static asset generation alongside dynamic experience

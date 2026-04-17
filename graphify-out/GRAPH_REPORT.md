# Graph Report - .  (2026-04-17)

## Corpus Check
- 27 files · ~58,024 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 96 nodes · 121 edges · 16 communities detected
- Extraction: 82% EXTRACTED · 17% INFERRED · 1% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.79)
- Token cost: 22,300 input · 5,600 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Laziness Research Findings|Laziness Research Findings]]
- [[_COMMUNITY_Taste Skill Rules|Taste Skill Rules]]
- [[_COMMUNITY_Animation & Layout System|Animation & Layout System]]
- [[_COMMUNITY_Brutalist & Anti-Generic UI|Brutalist & Anti-Generic UI]]
- [[_COMMUNITY_Output Truncation Problem|Output Truncation Problem]]
- [[_COMMUNITY_Stitch & Anti-Slop Rules|Stitch & Anti-Slop Rules]]
- [[_COMMUNITY_RLHF Root Causes|RLHF Root Causes]]
- [[_COMMUNITY_Prompt Execution Patterns|Prompt Execution Patterns]]
- [[_COMMUNITY_Anti-Truncation Techniques|Anti-Truncation Techniques]]
- [[_COMMUNITY_Middleware Output Limits|Middleware Output Limits]]
- [[_COMMUNITY_Temperature Parameter|Temperature Parameter]]
- [[_COMMUNITY_Nucleus Sampling|Nucleus Sampling]]
- [[_COMMUNITY_XML Prompt Architecture|XML Prompt Architecture]]
- [[_COMMUNITY_Continuation Templates|Continuation Templates]]
- [[_COMMUNITY_Metacognitive Feedback|Metacognitive Feedback]]
- [[_COMMUNITY_Dynamic Throttling|Dynamic Throttling]]

## God Nodes (most connected - your core abstractions)
1. `Taste Skill (design-taste-frontend)` - 14 edges
2. `Taste Skill README â€“ Collection Overview` - 10 edges
3. `design-taste-frontend SKILL (High-Agency Frontend)` - 9 edges
4. `LLM Laziness Research References` - 8 edges
5. `llms.txt Skill Index` - 7 edges
6. `Stitch Design Taste Skill (stitch-skill)` - 7 edges
7. `Premium Utilitarian Minimalism UI (minimalist-skill)` - 6 edges
8. `Full-Output Enforcement (output-skill)` - 6 edges
9. `Redesign Existing Projects (redesign-skill)` - 6 edges
10. `High-End Visual Design / Soft UI (soft-skill)` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Stitch Design System DESIGN.md (Taste Standard)` --semantically_similar_to--> `Warm Monochrome Palette with Muted Pastel Accents`  [INFERRED] [semantically similar]
  skills/stitch-skill/DESIGN.md → skills/minimalist-skill/SKILL.md
- `Warm Monochrome Palette with Muted Pastel Accents` --semantically_similar_to--> `Anti-Slop / Anti-Generic AI Design Rules`  [INFERRED] [semantically similar]
  skills/minimalist-skill/SKILL.md → skills/taste-skill/SKILL.md
- `Double-Bezel (Doppelrand) Nested Container Architecture` --semantically_similar_to--> `Bento Grid / Asymmetric CSS Grid Layout`  [INFERRED] [semantically similar]
  skills/soft-skill/SKILL.md → skills/taste-skill/SKILL.md
- `RLHF Brevity Bias Through Alignment` --semantically_similar_to--> `Placeholder Propagation from Training Data`  [INFERRED] [semantically similar]
  skills/taste-skill/research/laziness/root-causes/rlhf-and-compute.md → skills/taste-skill/research/laziness/root-causes/training-data-bias.md
- `design-taste-frontend SKILL (High-Agency Frontend)` --uses_as_reference_example--> `Floria Website - Full Page Overview`  [INFERRED]
  skills/taste-skill/skills/taste-skill/SKILL.md → skills/taste-skill/examples/floria-full.webp

## Hyperedges (group relationships)
- **Three-Dial Parameterization System (Variance Ã— Motion Ã— Density â†’ UI Output)** — concept_design_variance, concept_motion_intensity, concept_visual_density [EXTRACTED 0.95]
- **Anti-Generic UI Enforcement Pattern (banned fonts + banned layouts + anti-slop content rules)** — concept_banned_fonts, concept_anti_slop, rationale_no_3col_grid [INFERRED 0.88]
- **Output Quality Pipeline (Research â†’ Output Skill â†’ Taste Skill rules)** — laziness_empirical, output_skill, taste_skill [INFERRED 0.82]
- **LLM Laziness Root Cause Cluster: RLHF + Training Data Bias + Cognitive Shortcuts all produce output truncation** — rlhf_brevity_bias, placeholder_propagation, lazybench_cognitive_shortcuts, error_avoidance_truncation, stopping_pressure [INFERRED 0.90]
- **Laziness Remediation Strategy Cluster: Prompt Engineering + Parameter Tuning + Architectural Patterns together counteract truncation** — psychological_pattern_matching, xml_structured_prompts, temperature_parameter, top_p_nucleus_sampling, chunked_task_execution, mcp_architecture [INFERRED 0.88]
- **Floria Design Example as taste-skill Reference Implementation: full page, dark aesthetic, asymmetric layout embody taste-skill design rules** — floria_full_page, floria_dark_aesthetic, floria_asymmetric_layout, taste_skill_frontend, anti_slop_design_rules [INFERRED 0.85]

## Communities

### Community 0 - "Laziness Research Findings"
Cohesion: 0.11
Nodes (18): Compounding Error Avoidance Research, 35% Context Reduction from Lazy-Loading, Developer Platform Full Context Access (API/AI Studio), EmotionPrompt (Microsoft Research), Error Avoidance as Truncation Driver, Gemini thinking_level Parameter, Lazy-Loaded Skills Architectural Pattern, LazyBench Cognitive Shortcutting Discovery (+10 more)

### Community 1 - "Taste Skill Rules"
Cohesion: 0.17
Nodes (16): AI Tells - Forbidden Design Patterns, Anti-Slop Design Engineering Rules (Bias Correction), Motion-Engine Bento Paradigm (Bento 2.0), Creative Arsenal - High-End UI Pattern Library, DESIGN_VARIANCE Dial (1-10 Symmetry to Chaos), Floria Asymmetric Left-Aligned Hero Layout, Floria Archives Bento Grid (2x2 image tiles), Floria Website - Bottom Section (Testimonials, Newsletter, Footer) (+8 more)

### Community 2 - "Animation & Layout System"
Cohesion: 0.24
Nodes (13): Bento Grid / Asymmetric CSS Grid Layout, DESIGN_VARIANCE Dial (1-10 layout variance parameter), Double-Bezel (Doppelrand) Nested Container Architecture, GPU-Safe Animation (transform + opacity only), MOTION_INTENSITY Dial (1-10 animation intensity parameter), Perpetual Micro-Interactions (infinite-loop component states), SKILL.md â€“ Portable AI Instruction File Format, Spring Physics Animation (stiffness:100, damping:20) (+5 more)

### Community 3 - "Brutalist & Anti-Generic UI"
Cohesion: 0.23
Nodes (12): Industrial Brutalism & Tactical Telemetry UI (brutalist-skill), Banned Fonts List (Inter, Roboto, Arial, Open Sans), Tactical Telemetry / CRT Terminal Archetype, Design Audit â€“ Systematic Upgrade Checklist, Premium / Anti-Generic UI Design Principle, Swiss Industrial Typography Archetype, Warm Monochrome Palette with Muted Pastel Accents, Design Advisor (design) (+4 more)

### Community 4 - "Output Truncation Problem"
Cohesion: 0.24
Nodes (11): LLM Output Truncation / Laziness Behavior, Prompt Stimulus Effectiveness (financial framing, stakes language), RLHF-induced Brevity Bias (root cause of truncation), LLM Laziness â€“ Empirical Results (2025 Studies), LLM Output Truncation Research â€“ Overview, Full-Output Enforcement (output-skill), Claude Code (AI coding agent), Cursor (AI coding agent) (+3 more)

### Community 5 - "Stitch & Anti-Slop Rules"
Cohesion: 0.29
Nodes (7): Anti-Slop / Anti-Generic AI Design Rules, Inline Image Typography (photos embedded in headlines), DESIGN.md â€“ Single Source of Truth for Google Stitch, Google Stitch (AI UI generation platform), Rationale: Ban 3-column equal card grids as overused AI pattern, Stitch Design System DESIGN.md (Taste Standard), Stitch Design Taste Skill (stitch-skill)

### Community 6 - "RLHF Root Causes"
Cohesion: 0.29
Nodes (7): 2025 Controlled Laziness Experiments, Placeholder Propagation from Training Data, Rationale: RLHF Brevity Bias is Economic Cost Optimization, RLHF Brevity Bias Through Alignment, Stopping Pressure in Autoregressive Models, GPU Compute Cost Per Token, Tutorial-Style Pattern Reinforcement in Training Data

### Community 7 - "Prompt Execution Patterns"
Cohesion: 1.0
Nodes (2): Chunked Task Execution Pattern, Verification Loops (Chain of Verification, Reverse Prompting, Self-Grading)

### Community 8 - "Anti-Truncation Techniques"
Cohesion: 1.0
Nodes (2): Explicit Syntax Binding (Anti-Truncation), Reference Prompt Templates for Complete Output

### Community 9 - "Middleware Output Limits"
Cohesion: 1.0
Nodes (2): Consumer Middleware Truncation Problem, Context Window Asymmetry (Large Input, Capped Output)

### Community 10 - "Temperature Parameter"
Cohesion: 1.0
Nodes (1): Temperature Parameter for Token Distribution

### Community 11 - "Nucleus Sampling"
Cohesion: 1.0
Nodes (1): Top-p Nucleus Sampling

### Community 12 - "XML Prompt Architecture"
Cohesion: 1.0
Nodes (1): XML-Structured Prompt Architecture

### Community 13 - "Continuation Templates"
Cohesion: 1.0
Nodes (1): Continuation Handling Prompt Template

### Community 14 - "Metacognitive Feedback"
Cohesion: 1.0
Nodes (1): Metacognitive Laziness and Human Feedback Loop

### Community 15 - "Dynamic Throttling"
Cohesion: 1.0
Nodes (1): Dynamic Throttling During Peak Demand

## Ambiguous Edges - Review These
- `Swiss Industrial Typography Archetype` → `Tactical Telemetry / CRT Terminal Archetype`  [AMBIGUOUS]
  skills/brutalist-skill/SKILL.md · relation: semantically_similar_to

## Knowledge Gaps
- **42 isolated node(s):** `Design Advisor (design)`, `Inline Image Typography (photos embedded in headlines)`, `Design Audit â€“ Systematic Upgrade Checklist`, `Rationale: Ban Inter font to avoid generic AI aesthetic`, `Rationale: Spring physics over linear easing for premium feel` (+37 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Prompt Execution Patterns`** (2 nodes): `Chunked Task Execution Pattern`, `Verification Loops (Chain of Verification, Reverse Prompting, Self-Grading)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Anti-Truncation Techniques`** (2 nodes): `Explicit Syntax Binding (Anti-Truncation)`, `Reference Prompt Templates for Complete Output`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Middleware Output Limits`** (2 nodes): `Consumer Middleware Truncation Problem`, `Context Window Asymmetry (Large Input, Capped Output)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Temperature Parameter`** (1 nodes): `Temperature Parameter for Token Distribution`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Nucleus Sampling`** (1 nodes): `Top-p Nucleus Sampling`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `XML Prompt Architecture`** (1 nodes): `XML-Structured Prompt Architecture`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Continuation Templates`** (1 nodes): `Continuation Handling Prompt Template`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Metacognitive Feedback`** (1 nodes): `Metacognitive Laziness and Human Feedback Loop`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Dynamic Throttling`** (1 nodes): `Dynamic Throttling During Peak Demand`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Swiss Industrial Typography Archetype` and `Tactical Telemetry / CRT Terminal Archetype`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `LLM Laziness Research References` connect `Laziness Research Findings` to `RLHF Root Causes`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `design-taste-frontend SKILL (High-Agency Frontend)` connect `Taste Skill Rules` to `Laziness Research Findings`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **What connects `Design Advisor (design)`, `Inline Image Typography (photos embedded in headlines)`, `Design Audit â€“ Systematic Upgrade Checklist` to the rest of the system?**
  _42 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Laziness Research Findings` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
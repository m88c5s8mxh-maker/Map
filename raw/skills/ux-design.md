---
name: ux-design
description: 5 Claude skills for UI/UX designers — UX audits, AI chat UI design, Vercel landing pages, case study writing, and React component conversion — each backed by a specialized GitHub skill. Use this skill when a designer wants to audit an app for UX issues, create a clean AI chat interface, build a landing page, turn a project into a case study, or convert a UI design into React components.
---

# /ux-design

Five specialized Claude skills every UI/UX designer should use. Each one activates a different mode: auditing, designing, writing, or converting — so you stop getting generic design feedback and start getting production-ready output.

## Usage

```
/ux-design                      # Show skill menu and guide user to the right one
/ux-design audit [app/url]      # UI/UX Pro Max: audit an app for UX issues + quick fixes
/ux-design chat-ui [product]    # Anthropic Frontend Design: design a clean AI chat UI
/ux-design landing [product]    # Vercel Web Design Guidelines: build a landing page
/ux-design case-study [project] # Bencium UX Designer: turn work into a case study
/ux-design react [ui]           # Vercel React Best Practices: convert UI to clean React
```

---

## What You Must Do When Invoked

### Default (no argument): Show the skill menu

```
UX DESIGN SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. /ux-design audit      — Audit any app for UX issues + quick fixes
2. /ux-design chat-ui    — Design a minimal AI chat interface
3. /ux-design landing    — Create a Vercel-style landing page
4. /ux-design case-study — Turn a project into a sharp case study
5. /ux-design react      — Convert UI to clean, reusable React components
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Which task are you working on?
```

---

### `audit` — UI/UX Pro Max

**Skill basis:** UI/UX Pro Max (github.com/nextlevelbuilder/ui-ux-pro-max-skill)

**Prompt to execute:**

```
[UI/UX Pro Max]
Audit this app: [link or description]
Give top 5 UX issues + quick fixes
```

**What to analyze and output:**

For each of the 5 UX issues:
```
ISSUE #[N]: [Short title]
Severity: [Critical / Major / Minor]
Problem: [What's wrong and why it harms the user]
Quick Fix: [Concrete, implementable change — 1-3 sentences]
Effort: [< 1 hour / half day / full sprint]
```

Cover these categories (pick the worst 5):
- Navigation clarity and wayfinding
- Information hierarchy and visual weight
- Form usability and error handling
- Mobile responsiveness and touch targets
- Accessibility (contrast, labels, keyboard nav)
- Empty states and loading feedback
- CTA visibility and conversion friction
- Typography legibility and spacing

End with a **Priority Stack Rank** — which fix to do first for maximum impact.

---

### `chat-ui` — Anthropic Frontend Design

**Skill basis:** Anthropic Frontend Design (github.com/anthropics/skills)

**Prompt to execute:**

```
[Anthropic Frontend Design]
Design a clean AI chat UI for [product idea]
Keep it minimal and distraction-free
```

**Design principles to enforce:**

- **Minimal chrome** — interface disappears, conversation is the product
- **Clear input affordance** — user always knows where to type
- **Message hierarchy** — user vs. AI visually distinct without being loud
- **Streaming-ready** — design assumes token-by-token response rendering
- **No decorative elements** — every pixel earns its place

**Deliverables:**
1. Component structure (what components exist and their relationships)
2. Layout specification (spacing, widths, breakpoints)
3. Interaction states (empty, loading, streaming, error, long conversation)
4. Color and typography tokens
5. Copy-paste ready HTML/CSS or React code for the core chat layout

---

### `landing` — Vercel Web Design Guidelines

**Skill basis:** Vercel Web Design Guidelines (github.com/vercel-labs/agent-skills)

**Prompt to execute:**

```
[Vercel Web Design Guidelines]
Create a landing page for [product]
Give sections + headline ideas
```

**Section structure to generate:**

1. **Hero** — Primary value prop, one headline, one sub, one CTA
2. **Social Proof** — Logos or testimonials (3-5 items)
3. **Features** — 3-column grid, icon + title + 1-line description
4. **How It Works** — 3-step numbered flow
5. **Testimonials** — 2-3 quotes with name, role, company
6. **Pricing** (if applicable) — 3-tier comparison table
7. **FAQ** — 5-7 questions, accordion-style
8. **Footer CTA** — One final strong conversion moment

**For each section, provide:**
- Headline copy (3 variants)
- Body copy
- Component markup (HTML or JSX)
- Responsive behavior notes

---

### `case-study` — Bencium UX Designer

**Skill basis:** Bencium UX Designer (github.com/bencium/bencium-marketplace)

**Prompt to execute:**

```
[Bencium UX Designer]
Turn this into a case study: [project]
Keep it sharp and storytelling-driven
```

**Case study structure:**

```
CASE STUDY: [Project Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTEXT
Role: [your role] | Timeline: [duration] | Team: [size]
Tools: [Figma, user research, etc.]

THE PROBLEM
[1-2 sentences: the specific, measurable pain point]

CONSTRAINTS
[What made this hard: time, resources, org politics, tech debt]

PROCESS
1. Discovery — [what you learned and how]
2. Definition — [how you framed the problem]
3. Ideation — [approaches explored and why you chose what you chose]
4. Testing — [what you validated and what you killed]
5. Delivery — [handoff, edge cases, documentation]

KEY DECISION
[One pivotal call you made and the reasoning behind it]

OUTCOME
Before: [measurable baseline]
After: [measurable result]
Quote: "[User or stakeholder quote if available]"

WHAT I'D DO DIFFERENTLY
[One honest reflection — shows maturity, not failure]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Keep the tone: sharp, specific, storytelling-driven. No generic "I used design thinking" language.

---

### `react` — Vercel React Best Practices

**Skill basis:** Vercel React Best Practices (github.com/vercel-labs/agent-skills)

**Prompt to execute:**

```
[Vercel React Best Practices]
Convert this UI into React + Tailwind
Make it clean and reusable
```

**Conversion rules to enforce:**

1. **Component decomposition** — every visual unit is its own component
2. **Props interface** — TypeScript types for all props, no `any`
3. **No inline styles** — Tailwind classes only, extracted to `cn()` for conditional logic
4. **Composition over configuration** — prefer `children` over giant prop lists
5. **Accessibility** — semantic HTML, aria labels, keyboard nav
6. **Server vs. client** — default to RSC, isolate interactivity with `"use client"`
7. **Naming** — PascalCase components, camelCase props, descriptive names

**For each component, output:**
```tsx
// ComponentName.tsx
// Purpose: [one line]
// Usage: <ComponentName prop="value" />

import ...

interface ComponentNameProps {
  // typed props
}

export function ComponentName({ ...props }: ComponentNameProps) {
  return (
    // clean JSX
  )
}
```

---

## Skill Source Links

| Skill | GitHub |
|-------|--------|
| UI/UX Pro Max | github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| Anthropic Frontend Design | github.com/anthropics/skills |
| Vercel Web Design Guidelines | github.com/vercel-labs/agent-skills |
| Bencium UX Designer | github.com/bencium/bencium-marketplace |
| Vercel React Best Practices | github.com/vercel-labs/agent-skills |

---
name: claude-efficiency
description: 8 concrete fixes to stop wasting Claude's context window and usage limits. Covers prompt editing, chat hygiene, batching, Projects, preferences, feature flags, the 5-hour rolling window, and off-peak hours. Use this skill when the user hits Claude's limits, wants to save tokens, complains about Claude cutting off conversations, wants to get more out of their plan, or asks how to use Claude more efficiently.
---

# /claude-efficiency

Stop burning your Claude limit on bad habits. These 8 fixes can stretch a standard plan 2-3x further without upgrading. The limit isn't the problem — how you hit it is.

## Usage

```
/claude-efficiency           # Show all 8 fixes as a quick-reference card
/claude-efficiency audit     # Audit the current conversation for inefficiencies
/claude-efficiency fix [N]   # Explain and apply fix number N in detail
```

## What You Must Do When Invoked

### Default (no argument): Print the Full Fix Card

Output this reference card immediately, no preamble:

---

## The 8 Claude Efficiency Fixes

**Fix #1 — Edit the prompt, don't follow up**
Every "No wait, I meant..." message adds a new layer to the history and burns tokens on both sides.
→ Click **Edit** on the original message. Fix it. Regenerate.
→ The old exchange is replaced, not stacked.

**Fix #2 — Fresh chat every 15–20 messages**
Long chats = bloated context = slower, more expensive responses.
→ Ask Claude to summarize everything → copy it → start a new chat → paste as the first message.
→ You keep the context. You ditch the token bloat.

**Fix #3 — Batch your questions into one message**
Three separate prompts = three full context reloads.
One prompt with three tasks = one context load.
→ Bonus: Claude sees the full picture and answers are usually better.
→ Format: "Do three things: (1) ... (2) ... (3) ..."

**Fix #4 — Use Projects for recurring files**
Uploading the same PDF, brief, or style guide to multiple chats re-tokenizes it every time.
→ Upload once to a **Project**. It gets cached.
→ Ideal for: contracts, brand briefs, style guides, codebases.

**Fix #5 — Save preferences in Settings → Memory**
Starting every chat with "I'm a marketer, I write casually, keep it under 200 words..." burns tokens on repeat.
→ Set it once in **Settings → Memory and User Preferences**.
→ Claude applies it automatically across all chats.

**Fix #6 — Turn off features you're not using**
Web search, connectors, Extended Thinking — all of these add tokens to every response even when you don't need them.
→ If you didn't turn it on intentionally, turn it off.
→ Check: **Settings → Features** before starting a work session.

**Fix #7 — Claude's limit runs on a rolling 5-hour window**
It does NOT reset at midnight.
→ Burning it all in one morning session wastes most of your daily capacity.
→ Spread work across 2–3 sessions instead — morning, afternoon, evening.

**Fix #8 — Work during off-peak hours**
As of March 26, 2026: the same query costs more tokens during peak hours (5–11am Pacific on weekdays).
→ Evening and weekend sessions stretch your plan further with the same limit.
→ Same work. Smarter timing.

---

**The real fix isn't a bigger plan — it's reading 5 minutes of documentation.**

---

### `audit` mode

Review the current conversation and identify which of the 8 inefficiencies are present. Report as a short checklist:

```
EFFICIENCY AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[x] Fix #1 needed — [N] follow-up corrections found, could be edits
[ ] Fix #2 OK — chat is under 15 messages
[x] Fix #3 needed — [N] single-question messages in a row
[ ] Fix #4 N/A — no recurring files detected
[ ] Fix #5 unknown — check your Settings
[ ] Fix #6 unknown — check your active features
[ ] Fix #7 advisory — spread sessions across the day
[ ] Fix #8 advisory — current time: [time], peak hours: 5–11am Pacific weekdays
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Estimated waste: [LOW / MEDIUM / HIGH]
Top priority fix: [Fix #N]
```

### `fix [N]` mode

For the requested fix number, provide:
1. The rule (one sentence)
2. Why it matters (token math or behavioral explanation)
3. Exactly how to apply it right now (step-by-step)
4. A before/after example if applicable

## Context

These fixes were documented by Ross Fledderjohn (@rossfledderjohn) based on tracked real-world usage data. Credit for the rolling-window insight: @0x_kaize on X, who tracked his own usage and ran the math.

The core insight: Claude's pricing and limits are designed around certain usage patterns. Most people hit the wall not because they need more — but because they're working against the system's grain.

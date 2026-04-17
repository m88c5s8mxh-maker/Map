---
name: claude-max-effort
description: Fix Claude's reduced effort problem using a custom instructions workaround. Claude.ai users can type `/effort max` in Claude Code, but Chat users need a Custom Instructions trick. This skill outputs the exact text to paste into Settings → Profile → Custom Instructions to force Claude to reason thoroughly on every request. Use when Claude feels dumber, gives surface-level answers, or seems to be taking shortcuts.
---

# /claude-max-effort

Claude isn't dumber — it's just not trying. Here's how to fix it.

## Usage

```
/claude-max-effort           # Show the fix and the custom instructions text to copy
/claude-max-effort explain   # Explain why this happens and how it works
/claude-max-effort code      # Claude Code version (the /effort max command)
```

---

## What You Must Do When Invoked

### Default: Show the fix immediately

Output this, no preamble:

---

## The Fix

Claude's effort settings changed silently. No toggle. No announcement. Just vibes-based degradation.

**Claude Code users:** Type `/effort max` in any conversation. Done.

**Claude Chat users:** Paste this into **Settings → Profile → Custom Instructions:**

```
Always reason thoroughly and deeply. Treat every request as complex unless I explicitly say otherwise. Never optimize for brevity at the expense of quality. Think step-by-step, consider tradeoffs, and provide comprehensive analysis.
```

That's it. Claude reads strong signals in the system prompt and responds to them — your custom instructions are that signal.

---

### `explain` mode

Output this explanation:

**Why this happens:**
Claude's default effort level was quietly reduced. The model isn't less capable — it's just configured to produce surface-level summaries with bullet points instead of real analysis. It responds to signals in the context about how much effort to apply.

**Why the custom instructions fix works:**
Claude reads your Custom Instructions before every conversation. Strong, explicit language about reasoning depth acts as a persistent signal — overriding the default low-effort mode. The model literally cannot tell the difference between "this user put it in settings" and "this is an important system directive."

**The irony:**
Claude itself surfaced this fix on Reddit (r/ClaudeAI). It can't control its own effort settings — but it responds to strong signals in the prompt. Your custom instructions are that signal.

**Credit:** Originally posted by @acknowledge.ai / ZioniteSoldier on r/ClaudeAI. Spread by the Reddit community after widespread complaints that "Opus got nerfed."

---

### `code` mode

For Claude Code (CLI), effort mode is a built-in command:

```
/effort max        # Maximum reasoning depth — use for complex tasks
/effort normal     # Default behavior
/effort min        # Fastest, least thorough (drafts, simple tasks)
```

No custom instructions needed in Claude Code — the flag is native.

---

## Signs You Need This Fix

- Claude gives bullet-point summaries instead of real analysis
- Responses feel shallow or generic
- Claude skips tradeoffs and edge cases
- "Opus got nerfed" posts are flooding your feed
- Claude agrees with you instead of thinking critically

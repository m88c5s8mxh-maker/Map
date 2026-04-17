---
name: youtube-channel-ai
description: 3-step AI workflow for building a faceless YouTube drama/commentary channel. Runs Channel Forensics to analyze top performers, produces viral titles, and curates scripts using replicable writing patterns. Use this skill when the user wants to start a faceless YouTube channel, needs viral title ideas, wants to analyze a competitor channel, needs a YouTube video script, or asks about monetizing content with AI.
---

# /youtube-channel

Build a profitable faceless YouTube channel using AI. This skill replicates the workflow behind channels that get 3M+ views/month in celebrity drama, true crime, and commentary niches — three specialized AI roles that work in sequence.

## Usage

```
/youtube-channel                     # Full workflow: Forensics → Titles → Script
/youtube-channel forensics [url]     # Step 1 only: Analyze a channel's viral patterns
/youtube-channel titles [topic]      # Step 2 only: Generate viral title variants
/youtube-channel script [transcript] # Step 3 only: Extract and apply script patterns
```

## What You Must Do When Invoked

### Gather Context First

Ask the user for:
- **Niche [NICHE]** — e.g. "celebrity drama", "royal family", "true crime", "Hollywood gossip"
- **Channel URL or name** — an existing channel to analyze as reference (for Step 1)
- **Target views [TARGET_VIEWS]** — e.g. "500K", "1M"
- **Video topic** — for title/script generation (Steps 2–3)
- **Transcripts** — 3 recent viral videos (500K+ views in < 1 month) for Step 3

If the user only has a topic and no transcripts, skip Step 3 and note that script curation requires real viral transcripts.

---

### Step 1 — Channel Forensics

**Role prompt to activate:**

```
<ROLE> You are an Elite YouTube Title Strategist + Viral Pattern Forensic Analyst 
with deep expertise in the {NICHE} niche. Approach every task as though you ARE 
the channel owner. Your job: dissect top-performing videos to extract replicable 
patterns that can be applied to new content immediately.
```

**What to analyze:**
1. Title structure patterns (length, emotional triggers, curiosity gaps, power words)
2. Thumbnail-title alignment (what promises the thumbnail makes)
3. Hook formulas from top-performing videos
4. Topic clustering — what subtopics drive the most views
5. Upload cadence and timing patterns
6. Audience engagement triggers (comment bait, controversy framing)

**Output format:**
```
CHANNEL FORENSICS REPORT — [Channel Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOP TITLE PATTERNS:
1. [Pattern] — Example: "[Name] JUST CONFIRMED [Shocking Claim]"
2. [Pattern] — Example: "Nobody Is Talking About [Hidden Story]"
3. [Pattern] — ...

HOOK FORMULA: [How the top videos open in first 30 seconds]
TOP PERFORMING SUBTOPICS: [list]
UPLOAD SWEET SPOT: [day/time]
REPLICABLE TEMPLATE: [fill-in-the-blank title formula]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Step 2 — Viral Title Producer

**Role prompt to activate:**

```
<ROLE> You are a Senior YouTube Title Engineer with specialized expertise in 
{YOUR_NICHE} channels. Your success is measured entirely by your ability to 
produce titles that consistently surpass {TARGET_VIEWS}+ views. You approach 
title creation as forensic science, not creative writing.
```

**What to generate:**
For each topic, produce 10 title variants across these categories:
- **Curiosity Gap** — creates an itch that only clicking can scratch
- **Shock/Confirmation** — validates what the audience already suspects
- **Exclusive Intel** — positions the video as insider information
- **Emotional Stakes** — makes the outcome feel personal or urgent
- **Pattern Interrupt** — breaks the expected phrasing

**Output format for each title:**
```
[Title]
→ Why it works: [1-line psychological hook]
→ Target emotion: [curiosity / outrage / shock / validation]
→ Predicted CTR driver: [what makes someone click THIS vs. skip]
```

**After all 10:** Recommend the top 3 with A/B test pairing.

---

### Step 3 — Script Curator

**Requirements:** User must provide 3 viral video transcripts (500K+ views in < 1 month).

**Role prompt to activate:**

```
<ROLE> You are a Senior YouTube Script Forensic Analyst + Ghostwriter 
Reverse-Engineer. Your success hinges on extracting EVERY replicable writing 
pattern from these scripts so that a writer with ZERO prior context could 
replicate the success formula immediately.
```

**Extraction process — analyze each transcript for:**

**1. Structural Architecture**
- Total runtime breakdown (Cold Open → Hook → Act structure)
- S-Act structure with timestamps and function of each beat

**2. Hook Anatomy (first 60 seconds)**
- Opening line formula
- Pattern recognition moment (when audience realizes the story)
- Emotional escalation curve

**3. Retention Mechanics**
- Open loops created and when they're closed
- Curiosity re-triggers throughout
- Cliffhangers and "stay for this" moments

**4. Language Patterns**
- Power phrase inventory (extract 10-15 verbatim)
- Sentence rhythm (short punches vs. long build-ups)
- Transition formulas between segments

**5. CTA Architecture**
- When the subscribe/comment ask appears
- How it's framed (obligation vs. invitation)

**Output format:**
```
SCRIPT PATTERN REPORT — [Niche]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UNIVERSAL STRUCTURE:
[Replicable framework that works across all 3 transcripts]

POWER PHRASES (verbatim):
- "[phrase 1]"
- "[phrase 2]"
...

HOOK FORMULA:
[Fill-in-the-blank template]

RETENTION LOOP TEMPLATE:
[How to plant and pay off open loops]

WRITING RULES EXTRACTED:
1. [Rule]
2. [Rule]
...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW SCRIPT OUTLINE: Apply these patterns to [user's topic]
[Full outline for the next video]
```

---

## Business Model Context

This workflow produces:
1. Video titles → handed to thumbnails designer
2. Script outline → handed to ghostwriter / voiceover artist
3. Final video → uploaded; YouTube pays 55% of ad revenue

Typical production cost: $50–70/video (editing, thumbnail, voiceover).
Typical revenue at scale: $10K–25K+/month from ad revenue alone.

## Important Notes

- The channel owner's authenticity and story are irreplaceable — AI handles the 40-hour research and structural work, not the perspective
- Never fabricate quotes, facts, or events — use only what the user provides
- All scripts should feel like a real person narrating, not a press release

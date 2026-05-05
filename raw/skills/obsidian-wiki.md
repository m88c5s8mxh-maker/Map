---
name: obsidian-wiki
description: LLM-maintained personal knowledge wiki — ingest sources, query the accumulated knowledge base, and lint for gaps. Built on Karpathy's LLM Wiki pattern with Obsidian as the IDE.
trigger: /obsidian-wiki
---

# /obsidian-wiki

Maintain a persistent, compounding knowledge wiki where the LLM handles all bookkeeping — cross-references, summaries, contradiction flags, and index updates — while you curate sources and ask questions.

Based on Andrej Karpathy's LLM Wiki pattern: raw sources stay immutable in `raw/`, the LLM owns `wiki/`, and `WIKI.md` (schema + conventions) keeps everything consistent across sessions.

## Usage

```
/obsidian-wiki setup                          # initialize wiki structure in current directory
/obsidian-wiki ingest <file-or-url>           # add one source and update the wiki
/obsidian-wiki ingest --batch                 # ingest all new files in raw/ not yet processed
/obsidian-wiki query "<question>"             # answer from wiki, file valuable answers back
/obsidian-wiki lint                           # health check: orphans, contradictions, gaps
/obsidian-wiki status                         # show wiki stats: pages, sources, last activity
```

---

## What /obsidian-wiki is for

Most people use LLMs with documents via RAG: upload → retrieve chunks → answer. Knowledge is re-derived on every query, nothing compounds.

This skill does the opposite: when you add a source, the LLM reads it, extracts key information, and integrates it into a persistent markdown wiki. Cross-references exist. Contradictions are flagged. Synthesis reflects everything consumed so far. The wiki grows richer with every source and question.

**Architecture:**
- `raw/` — immutable source material (articles, papers, notes, PDFs). LLM reads, never modifies.
- `wiki/` — LLM-generated markdown pages: summaries, entity pages, concept pages, comparisons, synthesis. LLM owns this entirely.
- `wiki/index.md` — content-oriented catalog, updated on every ingest.
- `wiki/log.md` — append-only chronological record of all operations.
- `WIKI.md` — schema document (conventions, page types, workflows). Co-evolve this with the LLM as your domain understanding deepens.

**In practice:** LLM agent on one side, Obsidian on the other. Agent edits wiki pages based on conversation; you browse results in real time, follow links, check the graph view.

---

## What You Must Do When Invoked

Read the subcommand and follow the matching section below. If no subcommand is given, run `status`.

---

### For /obsidian-wiki setup

Initialize the wiki structure in the current directory.

1. Check if structure already exists:
```bash
ls -la raw/ wiki/ WIKI.md 2>/dev/null
```

2. Create missing directories and files:
```bash
mkdir -p raw wiki
```

3. If `wiki/index.md` does not exist, create it:
```
# Wiki Index

| Page | Summary | Sources | Updated |
|------|---------|---------|---------|
```

4. If `wiki/log.md` does not exist, create it:
```
# Wiki Log

<!-- Format: ## [YYYY-MM-DD] operation | title -->
```

5. If `WIKI.md` does not exist, create it with a starter schema. Ask the user: *"What domain is this wiki for? (e.g. machine learning research, a book series, competitive analysis, personal notes)"* Then generate a domain-appropriate `WIKI.md`:

```markdown
# Wiki Schema

## Domain
[user's domain]

## Page Types
- **concept/** — one page per core idea or term. Sections: Definition, Key Properties, Connections, Open Questions.
- **entity/** — one page per named thing (person, paper, project, company). Sections: Overview, Key Claims, Relationships, Sources.
- **synthesis/** — cross-cutting analysis across multiple sources. Sections: Thesis, Evidence, Counterarguments, Confidence.
- **_overview** — community summary pages, auto-generated during ingest.

## Conventions
- Internal links: `[[page-name]]` (Obsidian wiki-link format)
- Source citations: `> [Source: filename, section]`
- Contradiction flags: `> ⚠️ CONTRADICTION with [[other-page]]: ...`
- Confidence tags: `#high-confidence` / `#inferred` / `#needs-verification`
- YAML frontmatter on every page: `tags`, `sources` (list of raw/ filenames), `updated` (date)

## Ingest Workflow
1. Read source fully
2. Identify: new concepts, named entities, claims, contradictions with existing pages
3. Create/update pages — never delete existing content, only append or annotate
4. Update index.md — add/update row for every touched page
5. Append to log.md

## Query Workflow
1. Read index.md to locate relevant pages
2. Read those pages
3. Synthesize answer with citations
4. If answer is non-trivial, save it as a new synthesis/ page and update index

## Lint Checks
- Orphan pages (no inbound `[[links]]`)
- Concepts mentioned in text but lacking a dedicated page
- Stale claims (source newer than page's `updated` date)
- Missing cross-references between obviously related pages
- Contradictions flagged but not resolved
```

6. Tell the user:
```
Wiki initialized.

  raw/         — drop source material here
  wiki/        — LLM-maintained pages (open as Obsidian vault)
  wiki/index.md — page catalog
  wiki/log.md  — operation history
  WIKI.md      — schema and conventions

Next: /obsidian-wiki ingest <file> to add your first source.
Tip: open wiki/ as an Obsidian vault to browse results in real time.
```

---

### For /obsidian-wiki ingest

**Single file:** `/obsidian-wiki ingest <file-or-url>`
**Batch:** `/obsidian-wiki ingest --batch` — process all files in `raw/` not yet logged.

#### Step 1 — Identify what to ingest

For single file: use the path/URL provided.

For `--batch`: read `wiki/log.md`, extract all filenames already ingested (lines matching `## [` with `ingest |`). Then list `raw/` and find files not yet in the log.

```bash
ls raw/
```

If nothing to ingest, tell the user and stop.

#### Step 2 — Read the source

Read the file fully. If it's a URL, use WebFetch to retrieve it. For PDFs, use the Read tool. For images, view them directly.

Before processing, tell the user:
```
Ingesting: <filename>
Reading index to find related pages...
```

#### Step 3 — Read the index

Read `wiki/index.md` in full. Identify which existing pages are relevant to this source.

#### Step 4 — Read relevant existing pages

Read the 3-7 most relevant existing wiki pages (based on the index scan). This is how you find contradictions and cross-references.

#### Step 5 — Extract and integrate

For each significant concept, entity, or claim in the source:

- **Existing page exists:** open it, append new information, add source citation, flag any contradictions, strengthen cross-references.
- **No page exists:** create `wiki/concept/slug.md` or `wiki/entity/slug.md` with appropriate frontmatter and sections per WIKI.md conventions.

A single source will typically touch 5–15 pages. Do all edits.

Minimum pages to create/update per ingest:
1. A summary page for the source itself (e.g. `wiki/entity/source-title.md`)
2. Pages for every major concept introduced
3. Pages for every named entity mentioned significantly
4. Any synthesis pages that now have stronger evidence

#### Step 6 — Update index.md

For every page created or updated, ensure `wiki/index.md` has a current row:
```
| [[page-name]] | one-line summary | source1, source2 | YYYY-MM-DD |
```

Add new rows, update existing ones. Keep table sorted by category then name.

#### Step 7 — Append to log.md

```markdown
## [YYYY-MM-DD] ingest | <source title or filename>

- Pages created: N
- Pages updated: M
- New concepts: concept1, concept2, ...
- Contradictions flagged: (none) or description
- Key takeaway: one sentence
```

#### Step 8 — Report to user

```
Ingested: <source title>

  Pages created:  N
  Pages updated:  M
  New concepts:   concept1, concept2, ...

Contradictions flagged: (none or list)

Wiki now contains X pages across Y sources.
```

Then offer: *"Want me to trace the most interesting new connection this source introduced?"*

---

### For /obsidian-wiki query

Answer a question using the accumulated wiki. File valuable answers back as new pages.

#### Step 1 — Read index.md

Read `wiki/index.md` fully. Identify the 3–7 most relevant pages for the question.

#### Step 2 — Read relevant pages

Read each identified page. Follow `[[wiki-links]]` to one additional level if they seem relevant.

#### Step 3 — Synthesize and answer

Answer using **only** what the wiki contains. Cite sources as `[Source: wiki/page.md]`. If the wiki lacks enough information, say so explicitly — note what sources would fill the gap.

Format:
- Direct answer first (1–3 sentences)
- Supporting evidence with citations
- Confidence: High / Medium / Low, and why
- Related questions the wiki can also answer

#### Step 4 — File the answer back (if non-trivial)

If the answer required synthesizing 3+ pages or revealed a non-obvious connection, save it:

Create `wiki/synthesis/<slug>.md`:
```markdown
---
tags: [synthesis, query-answer]
sources: [page1, page2, page3]
updated: YYYY-MM-DD
---

# <Question as title>

## Answer
<your answer>

## Evidence
- [[page1]]: ...
- [[page2]]: ...

## Confidence
High/Medium/Low — reason

## Open Questions
- ...
```

Update `wiki/index.md` and append to `wiki/log.md`:
```markdown
## [YYYY-MM-DD] query | <question summary>

- Answer confidence: High/Medium/Low
- Pages consulted: N
- New synthesis page: wiki/synthesis/slug.md (or "none")
```

---

### For /obsidian-wiki lint

Perform a health check on the wiki. Find what's broken, stale, or missing.

#### Step 1 — Read the full index
```bash
cat wiki/index.md
```

#### Step 2 — Scan for issues

Run these checks:

**Orphan pages** — pages in `wiki/` that have no `[[inbound links]]` from other pages:
```bash
# List all wiki pages
find wiki/ -name "*.md" ! -name "index.md" ! -name "log.md"
```
For each page, search for `[[page-name]]` references in other pages using Grep.

**Missing concept pages** — scan the 5 most recent/active pages for `[[links]]` that point to non-existent files.

**Stale claims** — check `wiki/log.md` for sources ingested after the `updated` date on pages that cite them.

**Contradiction backlog** — Grep for `⚠️ CONTRADICTION` across all pages. List unresolved ones.

**Gap suggestions** — based on concepts mentioned frequently in source summaries but lacking dedicated pages.

#### Step 3 — Report

```
Wiki Health Report — YYYY-MM-DD

ISSUES FOUND:
  Orphan pages (N):
    - wiki/concept/foo.md — no inbound links
    ...

  Broken links (N):
    - [[missing-page]] referenced in wiki/entity/bar.md
    ...

  Unresolved contradictions (N):
    - wiki/concept/baz.md ⚠️ flagged vs [[other-page]]
    ...

  Stale pages (N):
    - wiki/entity/qux.md — updated 2025-01 but source ingested 2025-03
    ...

SUGGESTED NEW PAGES (N):
  - "attention mechanism" — mentioned 7× across 4 sources, no dedicated page
  ...

SUGGESTED SOURCES TO ADD:
  - (based on gaps in current wiki)
```

Offer to fix the top 3 issues immediately.

---

### For /obsidian-wiki status

Quick stats. No heavy reads.

```bash
find wiki/ -name "*.md" ! -name "index.md" ! -name "log.md" | wc -l
find raw/ -type f | wc -l
tail -5 wiki/log.md
```

Report:
```
Wiki Status

  Pages:    N
  Sources:  M (in raw/)
  
Recent activity:
  [last 3 log entries]

Next suggested action: (ingest / lint / query based on last activity)
```

---

## Tips for Maximum Value

- **Obsidian Web Clipper** converts web articles to markdown — quick way to add to `raw/`
- **Graph view** in Obsidian shows wiki shape: hub pages, orphans, community clusters
- **Dataview plugin**: if pages have YAML frontmatter with `tags` and `sources`, Dataview generates dynamic tables
- **Git the wiki**: `git init wiki/` gives you version history, branching, and collaboration for free
- **Marp**: generate slide decks from synthesis pages with `/pptx` or Marp Obsidian plugin
- **Batch ingest with light supervision**: drop 10 articles into `raw/`, run `/obsidian-wiki ingest --batch` — review results in Obsidian graph view afterward

## Why This Works

Humans abandon wikis because maintenance burden grows faster than value. LLMs don't get bored, don't forget to update cross-references, and can touch 15 files simultaneously. The wiki stays maintained because maintenance cost approaches zero. You curate sources and ask quality questions. The LLM handles everything else.

---
name: template-saver
description: >
  Automatically saves every file Claude creates (Word docs, Excel sheets, PowerPoint presentations,
  PDFs, HTML files, scripts, etc.) as a reusable template into ~/Documents/blueprints/,
  organised by file type. Use this skill ALWAYS when Claude finishes creating any kind of file
  or document — whether the user asked for "a template", "a document", "a report", "a spreadsheet",
  a presentation, or any other output file. Also triggers when the user says things like
  "save this as a template", "keep this for later", "put this in my blueprints folder",
  "store this somewhere I can reuse it", or "add this to my blueprints". The skill runs
  silently alongside the main file-creation task — it does not replace it.
---

# Template Saver

Every time Claude finishes creating a file, this skill saves a copy of that file into the
user's **~/Documents/blueprints/** folder, organised by file type. This means the user
always has a personal library of ready-to-reuse documents — no hunting through chat history
to find something Claude made weeks ago.

---

## When this skill is active

This skill runs **on top of** the normal file-creation workflow. Claude still creates the
file in the outputs folder as usual and gives the user a download link. Template Saver
adds one extra step: copy the finished file into the template library.

---

## Step-by-step instructions

### 1. Finish the main task first
Complete the file-creation task normally (docx, xlsx, pptx, pdf, html, py, etc.).
Save the finished file to `/sessions/focused-stoic-wright/mnt/outputs/` as usual and
provide the user with a `computer://` download link.

### 2. Determine the template subfolder

Map the file extension to a subfolder name:

| Extension(s)            | Subfolder          |
|-------------------------|--------------------|
| .docx, .doc             | Word               |
| .xlsx, .xls, .csv       | Excel              |
| .pptx, .ppt             | PowerPoint         |
| .pdf                    | PDF                |
| .html, .htm             | HTML               |
| .md, .txt               | Text               |
| .py                     | Python             |
| .js, .ts                | JavaScript         |
| anything else           | Other              |

### 3. Build the destination path

```
~/Documents/blueprints/<Subfolder>/<filename>
```

Example: a file called `budget_2026.xlsx` goes to
`~/Documents/blueprints/Excel/budget_2026.xlsx`.

If a file with that exact name already exists in the subfolder, append the current date
in the format `_YYYY-MM-DD` before the extension to avoid overwriting:
`budget_2026_2026-04-07.xlsx`.

### 4. Copy the file using Bash

```bash
# Create the subfolder if it doesn't exist yet
mkdir -p ~/Documents/blueprints/<Subfolder>

# Copy the file
cp "/sessions/focused-stoic-wright/mnt/outputs/<filename>" \
   ~/Documents/blueprints/<Subfolder>/<filename>
```

If the copy succeeds, add a short confirmation line at the end of your response:

> 📁 **Vorlage gespeichert** → `~/Documents/blueprints/<Subfolder>/<filename>`

If the copy fails (e.g. the path does not exist on the user's machine), skip the
confirmation line silently — the user still has the file via the normal download link.

### 5. Keep a log (optional but helpful)

After saving, append one line to `~/Documents/blueprints/templates_log.csv`:

```
2026-04-07,budget_2026.xlsx,Excel,"Quarterly budget template with formulas"
```

Columns: `date, filename, subfolder, short_description`.
Create the CSV with a header row on first use:
```
date,filename,subfolder,description
```

---

## What NOT to do

- Do not ask the user "should I save this as a template?" — just do it automatically.
- Do not save temporary scratch files (e.g. intermediate scripts used during generation).
  Only save the final deliverable the user cares about.
- Do not interrupt the main workflow — template saving is a background step that happens
  after the user has already received their file.

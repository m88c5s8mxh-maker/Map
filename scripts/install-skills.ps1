# ---------------------------------------------------------------------------
# Map -> Claude Code: Skills installieren
#
# Kopiert raw/skills/ nach ~/.claude/skills/ in der Struktur, die Claude Code
# erwartet: ein Ordner pro Skill mit SKILL.md darin.
#
# Idempotent - nach jedem "git pull" erneut ausfuehren:
#   powershell -ExecutionPolicy Bypass -File scripts\install-skills.ps1
# ---------------------------------------------------------------------------
param([switch]$WhatIf)

$ErrorActionPreference = 'Stop'
$src = Join-Path (Split-Path $PSScriptRoot -Parent) 'raw\skills'
$dst = Join-Path $env:USERPROFILE '.claude\skills'
$marker = '.map-managed'

# Duplikate der eingebauten Claude-Code-Skills - die gepflegten Originale
# sollen nicht verdraengt werden.
$skip = @('code-review', 'schedule')

if (-not (Test-Path $src)) { throw "Quelle fehlt: $src" }
if (-not (Test-Path $dst)) { New-Item -ItemType Directory -Path $dst -Force | Out-Null }

function Get-SkillName([string]$file) {
    $lines = Get-Content -LiteralPath $file -TotalCount 20
    if ($lines.Count -lt 1 -or $lines[0].Trim() -ne '---') { return $null }
    foreach ($l in $lines[1..($lines.Count - 1)]) {
        if ($l.Trim() -eq '---') { break }
        if ($l -match '^name:\s*(.+?)\s*$') { return $Matches[1].Trim('"', "'") }
    }
    return $null
}

$installed = @(); $skipped = @(); $problems = @()

# 1. Ordner-Skills (bringen eigene Dateien mit: data/, references/, ...)
foreach ($dir in Get-ChildItem $src -Directory) {
    $skillMd = Join-Path $dir.FullName 'SKILL.md'
    if (-not (Test-Path $skillMd)) {
        if (@(Get-ChildItem $dir.FullName -Force).Count -eq 0) { continue }  # leerer Ordner
        $problems += "$($dir.Name)/ : keine SKILL.md"
        continue
    }
    $name = Get-SkillName $skillMd
    if (-not $name) { $problems += "$($dir.Name)/SKILL.md : kein name im Frontmatter"; continue }
    if ($skip -contains $name) { $skipped += $name; continue }

    $target = Join-Path $dst $name
    if (-not $WhatIf) {
        if (Test-Path $target) { Remove-Item $target -Recurse -Force }
        Copy-Item $dir.FullName $target -Recurse -Force
        Set-Content -LiteralPath (Join-Path $target $marker) -Value $dir.Name -Encoding utf8
    }
    $installed += $name
}

# 2. Lose .md-Dateien -> je ein Ordner mit SKILL.md
foreach ($file in Get-ChildItem $src -Filter *.md -File) {
    if ($file.Name -like '_*') { continue }   # _SKILL_MAP.md ist Navigation, kein Skill
    $name = Get-SkillName $file.FullName
    if (-not $name) { $problems += "$($file.Name) : kein name im Frontmatter"; continue }
    if ($skip -contains $name) { $skipped += $name; continue }
    if ($installed -contains $name) { $problems += "$($file.Name) : Name '$name' doppelt"; continue }

    $target = Join-Path $dst $name
    if (-not $WhatIf) {
        if (Test-Path $target) { Remove-Item $target -Recurse -Force }
        New-Item -ItemType Directory -Path $target -Force | Out-Null
        Copy-Item $file.FullName (Join-Path $target 'SKILL.md') -Force
        Set-Content -LiteralPath (Join-Path $target $marker) -Value $file.Name -Encoding utf8
    }
    $installed += $name
}

# 3. Verwaiste aufraeumen - nur was dieses Skript selbst angelegt hat
$removed = @()
foreach ($dir in Get-ChildItem $dst -Directory) {
    if (-not (Test-Path (Join-Path $dir.FullName $marker))) { continue }  # fremder Skill: anfassen verboten
    if ($installed -notcontains $dir.Name) {
        if (-not $WhatIf) { Remove-Item $dir.FullName -Recurse -Force }
        $removed += $dir.Name
    }
}

Write-Host ""
Write-Host "  installiert : $($installed.Count) Skills -> $dst"
if ($skipped.Count)  { Write-Host "  uebersprungen: $($skipped -join ', ')  (Duplikat des eingebauten Skills)" }
if ($removed.Count)  { Write-Host "  entfernt    : $($removed -join ', ')" }
if ($problems.Count) {
    Write-Host ""
    Write-Host "  PROBLEME:"
    $problems | ForEach-Object { Write-Host "    - $_" }
}
Write-Host ""

---
type: community
cohesion: 0.40
members: 5
---

# Graph Auto-Update Script

**Cohesion:** 0.40 - moderately connected
**Members:** 5 nodes

## Members
- [[Bank Reconciliation]] - concept - raw/skills/reconciliation.md
- [[Finance  Accounting Operations Domain]] - concept - raw/skills/reconciliation.md
- [[GL-to-Subledger Reconciliation]] - concept - raw/skills/reconciliation.md
- [[Intercompany Reconciliation]] - concept - raw/skills/reconciliation.md
- [[reconciliation]] - document - raw/skills/reconciliation.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Community_27
SORT file.name ASC
```


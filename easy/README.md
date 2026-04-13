# Easy Workflow

This folder contains batched LeetCode easy solutions and a generator that
exports them into per-problem files for Python, C++, and TypeScript.

## Generate files

```bash
python3 easy/export_easy_solutions.py
```

## Output

- `easy/problems/<id>-<slug>/solution.py`
- `easy/problems/<id>-<slug>/solution.cpp`
- `easy/problems/<id>-<slug>/solution.ts`
- `easy/manifest.json`
- `easy/STATUS.md`

Use the manifest for machine-readable coverage and `easy/STATUS.md` for a
human-readable status snapshot.

#!/usr/bin/env python3
"""Export bundled easy-problem solutions into per-problem folders."""

from __future__ import annotations

import importlib.util
import json
import re
import shutil
from pathlib import Path
from typing import Dict, Any


ROOT = Path(__file__).resolve().parent
OUTPUT_DIR = ROOT / "problems"
SUMMARY_PATH = ROOT / "STATUS.md"
BATCH_FILES = sorted(ROOT.glob("solutions_batch*.py"))
LANGUAGE_FILES = {
    "python": "solution.py",
    "cpp": "solution.cpp",
    "typescript": "solution.ts",
}


def slugify(value: str) -> str:
    text = value.strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def load_batch(batch_file: Path) -> Dict[int, Dict[str, Any]]:
    module_name = f"easy_{batch_file.stem}"
    spec = importlib.util.spec_from_file_location(module_name, batch_file)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Unable to load batch file: {batch_file}")

    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)

    solutions = getattr(module, "SOLUTIONS", None)
    if not isinstance(solutions, dict):
        raise ValueError(f"{batch_file.name} does not define a valid SOLUTIONS dict")

    return solutions


def normalize_solution(problem_id: int, raw: Dict[str, Any]) -> Dict[str, Any]:
    title = raw["title"].strip()
    slug = raw.get("slug") or slugify(title)
    url = raw.get("url") or f"https://leetcode.com/problems/{slug}/"

    languages: Dict[str, str] = {}
    missing_languages = []
    for language in LANGUAGE_FILES:
        code = raw.get(language, "")
        code = code.strip("\n")
        if code:
            languages[language] = f"{code}\n"
        else:
            missing_languages.append(language)

    return {
        "id": problem_id,
        "title": title,
        "slug": slug,
        "url": url,
        "languages": languages,
        "missing_languages": missing_languages,
    }


def collect_solutions() -> Dict[int, Dict[str, Any]]:
    combined: Dict[int, Dict[str, Any]] = {}
    for batch_file in BATCH_FILES:
        solutions = load_batch(batch_file)
        for problem_id, raw in solutions.items():
            if problem_id in combined:
                raise ValueError(f"Duplicate problem id {problem_id} found in {batch_file.name}")
            combined[problem_id] = normalize_solution(problem_id, raw)
    return dict(sorted(combined.items()))


def write_problem_files(problem: Dict[str, Any]) -> Dict[str, str]:
    problem_dir = OUTPUT_DIR / f"{problem['id']:04d}-{problem['slug']}"
    problem_dir.mkdir(parents=True, exist_ok=True)

    written_files: Dict[str, str] = {}
    for language, filename in LANGUAGE_FILES.items():
        code = problem["languages"].get(language)
        if not code:
            continue
        file_path = problem_dir / filename
        file_path.write_text(code, encoding="utf-8")
        written_files[language] = str(file_path.relative_to(ROOT))

    readme = problem_dir / "README.md"
    readme.write_text(
        "\n".join(
            [
                f"# {problem['id']}. {problem['title']}",
                "",
                f"- LeetCode: {problem['url']}",
                f"- Languages: {', '.join(sorted(written_files)) or 'none'}",
                "",
            ]
        ),
        encoding="utf-8",
    )

    return written_files


def write_outputs(solutions: Dict[int, Dict[str, Any]]) -> None:
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    manifest = []
    for problem in solutions.values():
        files = write_problem_files(problem)
        manifest.append(
            {
                "id": problem["id"],
                "title": problem["title"],
                "slug": problem["slug"],
                "url": problem["url"],
                "languages": sorted(files),
                "files": files,
                "missing_languages": problem["missing_languages"],
            }
        )

    manifest_path = ROOT / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")


def write_summary(solutions: Dict[int, Dict[str, Any]]) -> None:
    total = len(solutions)
    complete = sum(1 for problem in solutions.values() if not problem["missing_languages"])
    incomplete = total - complete
    language_counts = {
        language: sum(1 for problem in solutions.values() if language in problem["languages"])
        for language in LANGUAGE_FILES
    }

    lines = [
        "# Easy Solutions Export",
        "",
        f"- Total problems exported: {total}",
        f"- Complete across Python, C++, TypeScript: {complete}",
        f"- Missing at least one language: {incomplete}",
        "",
        "## Coverage",
        "",
    ]

    for language, count in language_counts.items():
        lines.append(f"- {language}: {count}")

    lines.extend(
        [
            "",
            "## Output",
            "",
            "- Per-problem files live under `easy/problems/`.",
            "- Machine-readable coverage lives in `easy/manifest.json`.",
            "",
            "## Missing Languages",
            "",
        ]
    )

    missing = [problem for problem in solutions.values() if problem["missing_languages"]]
    if not missing:
        lines.append("- None")
    else:
        for problem in missing:
            lines.append(
                f"- {problem['id']}. {problem['title']}: {', '.join(problem['missing_languages'])}"
            )

    SUMMARY_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    if not BATCH_FILES:
        raise SystemExit("No solutions_batch*.py files found in easy/")

    solutions = collect_solutions()
    write_outputs(solutions)
    write_summary(solutions)
    print(f"Exported {len(solutions)} easy problems to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Build a status report for LeetCode easy problems supported in target languages."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent
MANIFEST_PATH = ROOT / "manifest.json"
REPORT_PATH = ROOT / "backlog_report.json"
SUPPORTED_LANGS = {"cpp", "typescript"}
PYTHON_LANGS = {"python3", "python"}


def fetch_all_problems() -> dict:
    output = subprocess.check_output(
        ["curl", "-s", "https://leetcode.com/api/problems/all/"],
        text=True,
    )
    return json.loads(output)


def graphql_questions(slugs: list[str]) -> dict[str, dict]:
    if not slugs:
        return {}

    query_parts = []
    for index, slug in enumerate(slugs):
        alias = f"q{index}"
        query_parts.append(
            f'{alias}: question(titleSlug: "{slug}") {{ title titleSlug codeSnippets {{ langSlug }} }}'
        )

    payload = {"query": "query { " + " ".join(query_parts) + " }"}
    output = subprocess.check_output(
        [
            "curl",
            "-s",
            "https://leetcode.com/graphql",
            "-H",
            "Content-Type: application/json",
            "--data-raw",
            json.dumps(payload),
        ],
        text=True,
    )
    data = json.loads(output)["data"]

    results: dict[str, dict] = {}
    for index, slug in enumerate(slugs):
        results[slug] = data[f"q{index}"]
    return results


def supports_target_languages(code_snippets: list[dict]) -> bool:
    langs = {snippet["langSlug"] for snippet in code_snippets}
    return SUPPORTED_LANGS.issubset(langs) and bool(PYTHON_LANGS & langs)


def main() -> None:
    if not MANIFEST_PATH.exists():
        raise SystemExit("Run easy/export_easy_solutions.py before backlog_status.py")

    manifest = json.loads(MANIFEST_PATH.read_text())
    solved_ids = {item["id"] for item in manifest}

    all_data = fetch_all_problems()
    easy_public = []
    for item in all_data["stat_status_pairs"]:
        stat = item["stat"]
        frontend_id = stat.get("frontend_question_id")
        if item["difficulty"]["level"] != 1 or item.get("paid_only") or not isinstance(frontend_id, int):
            continue
        easy_public.append(
            {
                "id": frontend_id,
                "title": stat["question__title"],
                "slug": stat["question__title_slug"],
            }
        )
    easy_public.sort(key=lambda item: item["id"])

    missing = [item for item in easy_public if item["id"] not in solved_ids]

    batch_size = 50
    supported = []
    unsupported = []

    for start in range(0, len(missing), batch_size):
        chunk = missing[start:start + batch_size]
        metadata = graphql_questions([item["slug"] for item in chunk])
        for item in chunk:
            question = metadata[item["slug"]]
            entry = {
                "id": item["id"],
                "title": item["title"],
                "slug": item["slug"],
                "url": f"https://leetcode.com/problems/{item['slug']}/",
            }
            if supports_target_languages(question["codeSnippets"]):
                supported.append(entry)
            else:
                unsupported.append(entry)

        print(
            f"Processed {min(start + batch_size, len(missing))}/{len(missing)} missing easy problems...",
            file=sys.stderr,
        )

    report = {
        "generated_on": "2026-04-13",
        "solved_in_repo": len(solved_ids),
        "public_easy_total": len(easy_public),
        "remaining_supported_total": len(supported),
        "remaining_unsupported_total": len(unsupported),
        "next_supported": supported[:50],
        "unsupported_examples": unsupported[:50],
    }
    REPORT_PATH.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()

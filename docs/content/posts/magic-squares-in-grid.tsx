import { LeetCodePost } from "./types";

export const magicSquaresInGrid: LeetCodePost = {
  slug: "magic-squares-in-grid",
  title: "Magic Squares in Grid",
  summary:
    "Check every 3×3 window for the 1..9 magic square pattern using center and parity pruning.",
  publishedAt: "2024-04-08",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["grid", "brute-force", "hashing"],
  leetCodeLink: "https://leetcode.com/problems/magic-squares-in-grid/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../magic-squares-in-grid/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          Magic squares of size 3 have a strict structure: the center must be 5,
          each row, column, and diagonal sums to 15, and the digits 1 through 9
          appear exactly once. I iterate each 3×3 sub-grid and apply those
          checks in order of cheapest to most expensive.
        </p>
        <p>
          The early rejection on the center cell eliminates about 80% of windows
          up front. A simple frequency map handles the uniqueness constraint
          before I bother computing row or column sums.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Checklist</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Center cell is 5.</li>
          <li>All values are between 1 and 9 inclusive.</li>
          <li>Each value appears exactly once.</li>
          <li>
            Every row, column, and diagonal totals 15 (precomputed row sums make
            this quick).
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Complexity</h2>
        <p>
          For an m×n grid there are (m - 2)(n - 2) windows. Each validation is
          constant work on nine cells, so the whole algorithm is O(mn) time and
          O(1) additional space.
        </p>
      </section>
    </article>
  ),
};



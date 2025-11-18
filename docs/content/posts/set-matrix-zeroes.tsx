import { LeetCodePost } from "./types";

export const setMatrixZeroes: LeetCodePost = {
  slug: "set-matrix-zeroes",
  title: "Set Matrix Zeroes",
  summary:
    "set entire row and column to zero when element is zero, using first row and column as markers for O(1) space.",
  publishedAt: "2024-09-20",
  difficulty: "Medium",
  languages: ["C"],
  tags: ["matrix", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/set-matrix-zeroes/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "C solution",
      language: "C",
      path: "../set-matrix-zeroes/solution.c",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use first row and first column as markers to track which rows/columns
          need to be zeroed. first check if first row and column themselves
          need clearing, then use them to mark other cells.
        </p>
        <p>
          for cells [1..m-1][1..n-1], if cell is zero, mark matrix[r][0] = 0 and
          matrix[0][c] = 0. then in second pass, clear rows/columns based on
          these markers. finally clear first row/column if needed.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>check if first row/column need clearing (store flags)</li>
          <li>use first row/column as markers for rest of matrix</li>
          <li>clear rows/columns based on markers</li>
          <li>clear first row/column if flags set</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time for three passes. O(1) space using matrix itself for
          markers.
        </p>
      </section>
    </article>
  ),
};


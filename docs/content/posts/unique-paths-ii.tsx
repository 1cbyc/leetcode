import { LeetCodePost } from "./types";

export const uniquePathsIi: LeetCodePost = {
  slug: "unique-paths-ii",
  title: "Unique Paths II",
  summary:
    "count paths from top-left to bottom-right with obstacles using dp with space optimization to O(n).",
  publishedAt: "2025-10-23",
  difficulty: "Medium",
  languages: ["Python"],
  tags: ["dynamic-programming", "matrix"],
  leetCodeLink: "https://leetcode.com/problems/unique-paths-ii/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../unique-paths-ii/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use 1d dp array to track paths for current row. initialize dp[0] = 1
          if start is not obstacle, else 0. for each row, if cell is obstacle,
          set dp[c] = 0. otherwise, dp[c] += dp[c-1] (paths from left).
        </p>
        <p>
          for first column (c=0), only update from top (previous dp[0]). for
          other columns, add paths from left. space optimized from O(mn) to
          O(n) by processing row by row.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">optimization</h2>
        <p>
          since we only need previous row values, use single array and update
          in-place. obstacle cells reset path count to 0.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time, O(n) space where m and n are grid dimensions. efficient
          space-optimized dp.
        </p>
      </section>
    </article>
  ),
};


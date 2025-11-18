import { LeetCodePost } from "./types";

export const minimumPathSum: LeetCodePost = {
  slug: "minimum-path-sum",
  title: "Minimum Path Sum",
  summary:
    "find minimum sum path from top-left to bottom-right using dynamic programming with space optimization.",
  publishedAt: "2023-08-04",
  difficulty: "Medium",
  languages: ["Python"],
  tags: ["dynamic-programming", "matrix"],
  leetCodeLink: "https://leetcode.com/problems/minimum-path-sum/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../minimum-path-sum/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          dp[i][j] = minimum sum to reach (i,j). can only move right or down.
          dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).
        </p>
        <p>
          optimize space to O(n) by using only one row. update row from left to
          right, carrying previous row values.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">optimization</h2>
        <p>
          since we only need previous row and current position, we can use single
          array and update in-place. reduces space from O(mn) to O(n).
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time, O(n) space where m and n are grid dimensions. efficient
          dp solution.
        </p>
      </section>
    </article>
  ),
};


import { LeetCodePost } from "./types";

export const maximalSquare: LeetCodePost = {
  slug: "maximal-square",
  title: "Maximal Square",
  summary:
    "find the largest square of 1s in a binary matrix using dynamic programming.",
  publishedAt: "2025-06-13",
  difficulty: "Medium",
  languages: ["PHP"],
  tags: ["dynamic-programming", "matrix"],
  leetCodeLink: "https://leetcode.com/problems/maximal-square/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../maximal-square/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          dp[i][j] represents the side length of the largest square ending at
          (i,j). if matrix[i][j] is 1, dp[i][j] = min(dp[i-1][j], dp[i][j-1],
          dp[i-1][j-1]) + 1.
        </p>
        <p>
          the min ensures we only extend squares that can form a valid larger
          square. track the maximum side length seen during the dp process.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">dp state</h2>
        <p>
          dp[i][j] = largest square side ending at (i,j). depends on top, left,
          and top-left neighbors. only extend if all three allow it.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time and space where m and n are matrix dimensions. can be
          optimized to O(n) space by using only previous row.
        </p>
      </section>
    </article>
  ),
};


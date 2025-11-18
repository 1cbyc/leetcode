import { LeetCodePost } from "./types";

export const regularExpressionMatching: LeetCodePost = {
  slug: "regular-expression-matching",
  title: "Regular Expression Matching",
  summary:
    "match string against pattern with . and * using dynamic programming with memoization.",
  publishedAt: "2024-02-27",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["dynamic-programming", "string"],
  leetCodeLink: "https://leetcode.com/problems/regular-expression-matching/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../regular-expression-matching/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          dp[i][j] = true if s[0..i] matches p[0..j]. handle three cases: exact
          match, . matches any, * matches zero or more of preceding character.
        </p>
        <p>
          for *, try both zero matches (skip pattern) and one or more matches
          (consume string if character matches). use memoization to avoid
          recomputation.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">cases</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>exact match: s[i] == p[j]</li>
          <li>dot: p[j] == '.' matches any character</li>
          <li>star: p[j] == '*' matches zero or more of p[j-1]</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time where m and n are string and pattern lengths. O(mn) space
          for dp table.
        </p>
      </section>
    </article>
  ),
};


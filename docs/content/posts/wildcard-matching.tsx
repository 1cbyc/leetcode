import { LeetCodePost } from "./types";

export const wildcardMatching: LeetCodePost = {
  slug: "wildcard-matching",
  title: "Wildcard Matching",
  summary:
    "match string against pattern with ? and * using dynamic programming.",
  publishedAt: "2023-08-04",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["dynamic-programming", "string", "greedy"],
  leetCodeLink: "https://leetcode.com/problems/wildcard-matching/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../wildcard-matching/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          dp[i][j] = true if s[0..i] matches p[0..j]. ? matches any single
          character. * matches any sequence including empty.
        </p>
        <p>
          for *, try matching zero characters (skip *) or one or more
          characters (consume string). can optimize space to O(n) by using only
          previous row.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">cases</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>exact match: s[i] == p[j]</li>
          <li>?: p[j] == '?' matches any character</li>
          <li>*: matches zero or more characters</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time where m and n are string and pattern lengths. O(mn) space,
          can be optimized to O(n).
        </p>
      </section>
    </article>
  ),
};


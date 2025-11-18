import { LeetCodePost } from "./types";

export const zumaGame: LeetCodePost = {
  slug: "zuma-game",
  title: "Zuma Game",
  summary:
    "find minimum balls needed to clear board using dfs with memoization, trying to form groups of 3+.",
  publishedAt: "2025-09-03",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["dfs", "backtracking", "memoization"],
  leetCodeLink: "https://leetcode.com/problems/zuma-game/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../zuma-game/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use dfs to try all possibilities. for each consecutive group in board,
          calculate how many balls needed to make group of 3+. if we have enough
          in hand, use them, remove group, shrink board (remove new groups of
          3+), and recurse.
        </p>
        <p>
          shrink function recursively removes groups of 3+ consecutive same
          characters. base cases: empty board returns 0, empty hand returns
          infinity. try all groups, take minimum.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">algorithm</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>find consecutive groups in board</li>
          <li>for each group, calculate need = 3 - group_length</li>
          <li>if hand has enough, use them and recurse</li>
          <li>shrink board after removing group</li>
          <li>return minimum balls needed</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          exponential time in worst case, but pruning helps. O(n) space for
          recursion stack where n is board length.
        </p>
      </section>
    </article>
  ),
};


import { LeetCodePost } from "./types";

export const frogJump: LeetCodePost = {
  slug: "frog-jump",
  title: "Frog Jump",
  summary:
    "determine if a frog can cross a river using dfs with memoization, tracking position and last jump distance.",
  publishedAt: "2024-02-27",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["dynamic-programming", "dfs", "memoization"],
  leetCodeLink: "https://leetcode.com/problems/frog-jump/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../Typescript/frog-jump/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use dfs with memoization. state is (position, lastJump). from each
          stone, try jumps of lastJump-1, lastJump, lastJump+1. if we reach the
          last stone, return true.
        </p>
        <p>
          memoization prevents revisiting the same (position, jump) states. use
          a set to track visited states and a set of valid stone positions for
          O(1) lookup.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key points</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>first jump must be 1 (from position 0 to 1)</li>
          <li>subsequent jumps can vary by ±1 from previous jump</li>
          <li>memoize (position, lastJump) pairs to avoid redundant work</li>
          <li>early return when reaching the last stone</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n²) worst case time with memoization, O(n²) space for visited set.
          each stone can be reached with different jump distances.
        </p>
      </section>
    </article>
  ),
};


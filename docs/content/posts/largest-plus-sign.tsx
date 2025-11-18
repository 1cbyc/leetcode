import { LeetCodePost } from "./types";

export const largestPlusSign: LeetCodePost = {
  slug: "largest-plus-sign",
  title: "Largest Plus Sign",
  summary:
    "find the largest plus sign order by computing longest consecutive 1s in four directions using dp.",
  publishedAt: "2025-10-14",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["dynamic-programming", "matrix"],
  leetCodeLink: "https://leetcode.com/problems/largest-plus-sign/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../largest-plus-sign/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          for each cell, compute the longest streak of 1s in four directions:
          left, right, up, down. use separate passes for each direction to
          build these counts efficiently.
        </p>
        <p>
          the order of a plus sign centered at a cell is the minimum of all four
          directional streaks. find the maximum order across all cells.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>build four 2d arrays for left, right, up, down streaks</li>
          <li>for each direction, do a single pass to compute streaks</li>
          <li>for each cell, take min of four directions as plus order</li>
          <li>track the maximum order found</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n²) time for four passes over the grid, O(n²) space for the four
          direction arrays. efficient dp solution.
        </p>
      </section>
    </article>
  ),
};


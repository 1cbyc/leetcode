import { LeetCodePost } from "./types";

export const stampingTheGrid: LeetCodePost = {
  slug: "stamping-the-grid",
  title: "Stamping the Grid",
  summary:
    "check if a grid can be fully covered by stamps using prefix sums and 2d difference array.",
  publishedAt: "2024-07-16",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["prefix-sum", "matrix", "greedy"],
  leetCodeLink: "https://leetcode.com/problems/stamping-the-grid/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../stamping-the-grid/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          first, build a prefix sum to quickly check if a stamp can be placed
          (area sum must be 0, meaning no obstacles). then use a 2d difference
          array to track which cells are covered by stamps.
        </p>
        <p>
          after marking all possible stamp placements, accumulate the difference
          array to get actual coverage. every empty cell must be covered by at
          least one stamp.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">steps</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>build prefix sum for O(1) area queries</li>
          <li>mark all valid stamp positions in difference array</li>
          <li>accumulate difference array to get coverage</li>
          <li>verify all empty cells are covered</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time for building prefix, checking stamps, and verifying coverage.
          O(mn) space for the arrays. efficient grid processing.
        </p>
      </section>
    </article>
  ),
};


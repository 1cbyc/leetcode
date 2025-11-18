import { LeetCodePost } from "./types";

export const designNeighborSumService: LeetCodePost = {
  slug: "design-neighbor-sum-service",
  title: "Design Neighbor Sum Service",
  summary:
    "design a service to compute sums of adjacent and diagonal neighbors using prefix sums and linear search.",
  publishedAt: "2023-09-22",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["design", "matrix", "prefix-sum"],
  leetCodeLink:
    "https://leetcode.com/problems/design-neighbor-sum-service/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../design-neighbor-sum-service/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          build a prefix sum during construction for efficient range queries
          (though not strictly needed here). for neighbor sums, find the target
          value's position, then sum its four adjacent or four diagonal neighbors
          with bounds checking.
        </p>
        <p>
          the key is safe access: check bounds before accessing grid cells to
          handle edge cases where neighbors might be out of bounds.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">methods</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>adjacentSum: sum of up, down, left, right neighbors</li>
          <li>diagonalSum: sum of four diagonal neighbors</li>
          <li>both use safeGet to handle out-of-bounds gracefully</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn) time to find target value, O(1) for neighbor sums. O(mn) space
          for grid and prefix arrays.
        </p>
      </section>
    </article>
  ),
};


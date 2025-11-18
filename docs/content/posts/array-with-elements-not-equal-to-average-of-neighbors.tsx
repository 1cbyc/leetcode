import { LeetCodePost } from "./types";

export const arrayWithElementsNotEqualToAverageOfNeighbors: LeetCodePost = {
  slug: "array-with-elements-not-equal-to-average-of-neighbors",
  title: "Array With Elements Not Equal to Average of Neighbors",
  summary:
    "rearrange array so no element equals the average of its neighbors using sorted interleaving pattern.",
  publishedAt: "2025-02-09",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["arrays", "sorting", "greedy"],
  leetCodeLink:
    "https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../array-with-elements-not-equal-to-average-of-neighbors/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          the key insight is that we need to separate larger and smaller values
          so no element sits between its neighbors. i sort the array, split it
          at the midpoint, then interleave from both halves—larger values from
          the left half, smaller from the right.
        </p>
        <p>
          by placing elements in this alternating pattern, we ensure that each
          element is either larger or smaller than both neighbors, never equal to
          their average.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>sort the input array</li>
          <li>split at midpoint (mid = floor((n + 1) / 2))</li>
          <li>interleave: even indices get from left half, odd from right</li>
          <li>this guarantees no element equals neighbor average</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log n) time for sorting, O(n) space for the result array. the
          interleaving step is linear.
        </p>
      </section>
    </article>
  ),
};


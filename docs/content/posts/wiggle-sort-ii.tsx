import { LeetCodePost } from "./types";

export const wiggleSortIi: LeetCodePost = {
  slug: "wiggle-sort-ii",
  title: "Wiggle Sort II",
  summary:
    "rearrange array in wiggle pattern (nums[0] < nums[1] > nums[2] < ...) using sorted interleaving.",
  publishedAt: "2025-10-23",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["arrays", "sorting", "greedy"],
  leetCodeLink: "https://leetcode.com/problems/wiggle-sort-ii/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../wiggle-sort-ii/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          sort the array and split at the midpoint. interleave from both halves,
          taking from the left half for even indices and right half for odd
          indices. this ensures the wiggle property: smaller values alternate with
          larger ones.
        </p>
        <p>
          by using the larger values from the right half and smaller from the
          left, we guarantee that each element is properly positioned relative
          to its neighbors.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">pattern</h2>
        <p>
          the interleaving pattern ensures nums[i] < nums[i+1] > nums[i+2] for
          all valid indices. we traverse from the middle of each half outward to
          maintain this relationship.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log n) time for sorting, O(n) space for the sorted copy and
          result. the interleaving is linear.
        </p>
      </section>
    </article>
  ),
};


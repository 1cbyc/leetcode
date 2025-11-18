import { LeetCodePost } from "./types";

export const medianOfTwoSortedArrays: LeetCodePost = {
  slug: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  summary:
    "find median of two sorted arrays using binary search on partition positions.",
  publishedAt: "2025-08-01",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["binary-search", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../median-of-two-sorted-arrays/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          binary search on partition position in the smaller array. partition
          both arrays such that left side has (m+n+1)/2 elements. check if
          partition is valid (left max ≤ right min).
        </p>
        <p>
          if valid, median is max of left sides (odd total) or average of max
          left and min right (even total). adjust partition based on comparison.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key insight</h2>
        <p>
          we want to partition both arrays such that all elements on the left are
          ≤ all elements on the right. binary search finds this partition
          efficiently.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(log(min(m, n))) time by searching on smaller array. O(1) space.
          optimal solution.
        </p>
      </section>
    </article>
  ),
};


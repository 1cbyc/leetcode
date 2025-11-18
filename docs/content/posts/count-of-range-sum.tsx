import { LeetCodePost } from "./types";

export const countOfRangeSum: LeetCodePost = {
  slug: "count-of-range-sum",
  title: "Count of Range Sum",
  summary:
    "count subarrays with sum in range [lower, upper] using prefix sums and merge sort counting.",
  publishedAt: "2023-08-12",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["divide-and-conquer", "prefix-sum", "merge-sort"],
  leetCodeLink: "https://leetcode.com/problems/count-of-range-sum/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../count-of-range-sum/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          convert to prefix sum problem: count pairs (i, j) where prefix[j] -
          prefix[i] is in [lower, upper]. use merge sort to count valid pairs
          during merging.
        </p>
        <p>
          during merge, for each left element, find range of right elements
          where difference is in [lower, upper]. the sorted nature of merge sort
          makes this efficient with two pointers.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>build prefix sum array</li>
          <li>use merge sort to count valid pairs</li>
          <li>during merge, count pairs with sum in range</li>
          <li>combine counts from left, right, and cross pairs</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log n) time from merge sort. O(n) space for prefix sums and
          temporary arrays.
        </p>
      </section>
    </article>
  ),
};


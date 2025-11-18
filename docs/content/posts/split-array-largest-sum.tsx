import { LeetCodePost } from "./types";

export const splitArrayLargestSum: LeetCodePost = {
  slug: "split-array-largest-sum",
  title: "Split Array Largest Sum",
  summary:
    "find minimum largest sum when splitting array into k subarrays using binary search on answer.",
  publishedAt: "2025-05-10",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["binary-search", "greedy", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/split-array-largest-sum/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../Typescript/split-array-largest-sum/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          binary search on the answer. for a candidate maxSum, check if we can
          split the array into k subarrays where each sum ≤ maxSum. if yes, try
          smaller; if no, try larger.
        </p>
        <p>
          the search range is [max(nums), sum(nums)]. the greedy check function
          tries to fit as many elements as possible into each subarray without
          exceeding maxSum.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">binary search pattern</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>left bound: max element (can't be smaller)</li>
          <li>right bound: total sum (worst case: one subarray)</li>
          <li>canSplit checks if k subarrays are possible</li>
          <li>find minimum valid maxSum</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log(sum)) time: binary search is O(log(sum)), each check is O(n).
          O(1) space. efficient search on answer approach.
        </p>
      </section>
    </article>
  ),
};


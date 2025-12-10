import { LeetCodePost } from "./types";

export const reversePairs: LeetCodePost = {
  slug: "reverse-pairs",
  title: "Reverse Pairs",
  summary:
    "count pairs where nums[i] > 2 * nums[j] and i < j using merge sort with counting during merge phase.",
  publishedAt: "2023-11-03",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["divide-and-conquer", "merge-sort"],
  leetCodeLink: "https://leetcode.com/problems/reverse-pairs/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../reverse-pairs/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use merge sort but count reverse pairs during merge. for each element
          in left half, count how many elements in right half satisfy{" "}
          <code>nums[i] &gt; 2 * nums[j]</code>. use two-pointer technique: as
          left element increases,
          right pointer can only move forward.
        </p>
        <p>
          during merge phase, before merging, count pairs: for each left[i],
          find how many right[j] satisfy <code>left[i] &gt; 2 * right[j]</code>.
          then merge
          normally. recursive calls handle subarrays.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">counting logic</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            for each left[i], find j where <code>left[i] &gt; 2 * right[j]</code>
          </li>
          <li>count = j - (mid + 1) gives number of valid pairs</li>
          <li>j pointer only moves forward (monotonic)</li>
          <li>then merge arrays normally</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log n) time from merge sort, counting adds O(n) per level. O(n)
          space for temporary arrays.
        </p>
      </section>
    </article>
  ),
};


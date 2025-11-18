import { LeetCodePost } from "./types";

export const slidingWindowMedian: LeetCodePost = {
  slug: "sliding-window-median",
  title: "Sliding Window Median",
  summary:
    "find median for each sliding window using sorted list to maintain window in sorted order.",
  publishedAt: "2025-02-17",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["sliding-window", "heap", "sorted-list"],
  leetCodeLink: "https://leetcode.com/problems/sliding-window-median/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../sliding-window-median/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use SortedList to maintain window in sorted order. initialize with
          first k elements. for each new element, remove leftmost (nums[i-k]) and
          add new element (nums[i]). calculate median from sorted list.
        </p>
        <p>
          median calculation: if k is odd, return middle element. if k is even,
          return average of two middle elements. SortedList provides O(log k)
          insert/remove operations.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>initialize SortedList with first k elements</li>
          <li>calculate median for initial window</li>
          <li>for each new element: remove old, add new, recalculate median</li>
          <li>SortedList maintains order automatically</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log k) time where n is array length and k is window size. O(k)
          space for sorted list.
        </p>
      </section>
    </article>
  ),
};


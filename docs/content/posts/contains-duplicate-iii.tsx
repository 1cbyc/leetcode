import { LeetCodePost } from "./types";

export const containsDuplicateIii: LeetCodePost = {
  slug: "contains-duplicate-3",
  title: "Contains Duplicate III",
  summary:
    "check if there exist two indices with value difference ≤ valueDiff and index difference ≤ indexDiff using sliding window with sorted array.",
  publishedAt: "2024-01-17",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["sliding-window", "binary-search", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/contains-duplicate-iii/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../contains-duplicate-3/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          maintain a sliding window of size indexDiff using a sorted array. for
          each new element, binary search to find insertion position, then check
          adjacent elements for value difference ≤ valueDiff.
        </p>
        <p>
          when window exceeds indexDiff, remove the oldest element using binary
          search. the sorted window allows efficient range queries.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key insight</h2>
        <p>
          by keeping the window sorted, we can quickly check if any element
          within valueDiff exists. binary search gives O(log k) insertion and
          removal where k is window size.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log k) time where n is array length and k is indexDiff. O(k) space
          for the sorted window.
        </p>
      </section>
    </article>
  ),
};


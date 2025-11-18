import { LeetCodePost } from "./types";

export const russianDollEnvelopes: LeetCodePost = {
  slug: "russian-doll-envelopes",
  title: "Russian Doll Envelopes",
  summary:
    "find maximum number of envelopes that can be nested using longest increasing subsequence on sorted envelopes.",
  publishedAt: "2023-02-28",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["dynamic-programming", "binary-search", "sorting"],
  leetCodeLink: "https://leetcode.com/problems/russian-doll-envelopes/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../russian-doll-envelopes/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          sort envelopes by width ascending, then by height descending (to
          avoid same-width nesting). then find longest increasing subsequence
          (LIS) on heights.
        </p>
        <p>
          use binary search LIS: maintain array of smallest tail values for
          each length. for each envelope, find position to extend or start new
          sequence.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key insight</h2>
        <p>
          sorting by width then height (descending) converts 2d problem to 1d
          LIS problem. binary search LIS gives O(n log n) solution.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n log n) time for sorting and LIS. O(n) space for LIS array.
          efficient solution.
        </p>
      </section>
    </article>
  ),
};


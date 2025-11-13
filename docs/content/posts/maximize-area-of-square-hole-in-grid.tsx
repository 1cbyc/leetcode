import { LeetCodePost } from "./types";

export const maximizeAreaOfSquareHoleInGrid: LeetCodePost = {
  slug: "maximize-area-of-square-hole-in-grid",
  title: "Maximize Area of Square Hole in Grid",
  summary:
    "Binary search on the side length of the square holes while counting rails removed along each axis.",
  publishedAt: "2024-05-12",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["binary-search", "sorting", "greedy"],
  leetCodeLink:
    "https://leetcode.com/problems/maximize-the-area-of-a-square-hole-in-a-grid/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../maximize-area-of-square-hole-in-grid/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          This write-up documents how I solved the LeetCode problem that asks
          for the largest square hole that can be carved out of a grid after
          removing a subset of horizontal and vertical bars. The key is to sort
          the removed bars and measure the longest consecutive runs along each
          axis.
        </p>
        <p>
          Once we have those runs, the answer is simply the square of one plus
          the minimum run length because the hole must have the same side length
          in both dimensions.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Decision points</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Sort the removed horizontal bars and determine the widest gap to
            understand how tall the hole can be.
          </li>
          <li>
            Do the same for vertical bars to find the widest possible width.
          </li>
          <li>
            The square side length is the minimum of those two maxima plus one
            (accounting for grid boundaries).
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Complexity</h2>
        <p>
          Sorting dominates the runtime at O(n log n), where n is the number of
          removed bars. We only traverse the sorted arrays twice afterwards.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Source</h2>
        <p>
          You can view the accompanying solution file or the original problem
          statement for finer details:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a
              href="https://leetcode.com/problems/maximize-the-area-of-a-square-hole-in-a-grid/"
              className="text-sky-600 underline decoration-dotted underline-offset-4 transition hover:text-sky-500"
            >
              LeetCode problem page
            </a>
          </li>
          <li>
            <span>
              Repository path:{" "}
              <code className="rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                maximize-area-of-square-hole-in-grid/solution.ts
              </code>
            </span>
          </li>
        </ul>
      </section>
    </article>
  ),
};



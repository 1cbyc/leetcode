import { LeetCodePost } from "./types";

export const maximumSumOfAnHourglass: LeetCodePost = {
  slug: "maximum-sum-of-an-hourglass",
  title: "Maximum Sum of an Hourglass",
  summary:
    "Sliding a fixed hourglass mask through the grid and tracking the best sum with constant-time updates.",
  publishedAt: "2024-06-02",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["arrays", "prefix-sum", "grid"],
  leetCodeLink:
    "https://leetcode.com/problems/maximum-sum-of-an-hourglass/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../maximum-sum-of-an-hourglass/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          Hourglasses fit inside the grid only when every interior cell touches
          the mask. That means we just iterate all top-left anchors except the
          last two rows and columns and evaluate the sum of the fixed seven
          cells that make the hourglass.
        </p>
        <p>
          The trick is to keep a running sum for each candidate instead of
          recomputing from scratch. I subtract the leftmost column of the
          previous hourglass, add the rightmost column, and adjust the lone
          middle cell per step.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Complexity</h2>
        <p>
          There are (m - 2) × (n - 2) possible hourglass anchors. Each update is
          O(1), so the whole sweep stays O(mn) time and O(1) space.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pitfalls</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Watch the boundary indices carefully—hourglasses fail when the grid
            is smaller than 3×3.
          </li>
          <li>
            Reset the rolling sum only when shifting to a new row; horizontal
            moves can reuse most of the work.
          </li>
        </ul>
      </section>
    </article>
  ),
};



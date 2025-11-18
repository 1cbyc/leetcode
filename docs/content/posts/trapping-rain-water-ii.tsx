import { LeetCodePost } from "./types";

export const trappingRainWaterIi: LeetCodePost = {
  slug: "trapping-rain-water-ii",
  title: "Trapping Rain Water II",
  summary:
    "calculate trapped rainwater in 2d elevation map using min heap starting from boundary cells.",
  publishedAt: "2023-06-16",
  difficulty: "Hard",
  languages: ["C"],
  tags: ["heap", "bfs", "matrix"],
  leetCodeLink: "https://leetcode.com/problems/trapping-rain-water-ii/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "C solution",
      language: "C",
      path: "../C/trapping-rain-water-ii/solution.c",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use min heap (priority queue) to process cells in order of height.
          start by adding all boundary cells to the heap. for each cell popped,
          check its neighbors: if neighbor is lower, it can trap water up to the
          current cell's height.
        </p>
        <p>
          when processing a neighbor lower than current cell, add trapped water
          (current height - neighbor height) and push neighbor with current
          height (water level). if neighbor is higher, push it with its own
          height.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">implementation details</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>custom priority queue with min heap for cells</li>
          <li>start from all boundary cells (outer edges)</li>
          <li>process cells in height order (lowest first)</li>
          <li>track visited cells to avoid reprocessing</li>
          <li>water trapped = max(0, boundary_height - cell_height)</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(mn log(mn)) time for heap operations on all cells. O(mn) space for
          heap and visited array.
        </p>
      </section>
    </article>
  ),
};


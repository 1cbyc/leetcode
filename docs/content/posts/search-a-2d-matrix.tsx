import { LeetCodePost } from "./types";

export const searchA2dMatrix: LeetCodePost = {
  slug: "search-a-2d-matrix",
  title: "Search a 2D Matrix",
  summary:
    "binary search on a sorted 2d matrix by treating it as a flattened sorted array.",
  publishedAt: "2025-03-22",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["binary-search", "matrix", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/search-a-2d-matrix/",
  estimatedReadingMinutes: 2,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../search-a-2d-matrix/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          since the matrix is sorted row-wise and each row starts after the
          previous ends, we can treat it as a single sorted array. i use binary
          search with index conversion: mid index maps to row = floor(mid / cols)
          and col = mid % cols.
        </p>
        <p>
          this gives us O(log(mn)) time complexity, same as binary search on a
          flat array, but we work directly with the 2d structure.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key insight</h2>
        <p>
          the matrix is essentially a sorted array stored in row-major order. by
          converting linear indices to 2d coordinates, we can apply standard
          binary search.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(log(mn)) time where m and n are dimensions, O(1) space. standard
          binary search efficiency.
        </p>
      </section>
    </article>
  ),
};


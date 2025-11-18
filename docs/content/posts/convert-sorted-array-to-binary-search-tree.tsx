import { LeetCodePost } from "./types";

export const convertSortedArrayToBinarySearchTree: LeetCodePost = {
  slug: "convert-sorted-array-to-binary-search-tree",
  title: "Convert Sorted Array to Binary Search Tree",
  summary:
    "build balanced bst from sorted array by recursively using middle element as root.",
  publishedAt: "2025-05-10",
  difficulty: "Easy",
  languages: ["Python"],
  tags: ["tree", "divide-and-conquer"],
  leetCodeLink:
    "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
  estimatedReadingMinutes: 2,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../convert-sorted-array-to-binary-search-tree/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          recursively: pick middle element as root, left half becomes left
          subtree, right half becomes right subtree. this ensures balanced tree.
        </p>
        <p>
          base case: empty array returns null. the middle element naturally
          creates a balanced structure since we split evenly.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time to visit each element once, O(log n) space for recursion
          stack. balanced tree height is log n.
        </p>
      </section>
    </article>
  ),
};


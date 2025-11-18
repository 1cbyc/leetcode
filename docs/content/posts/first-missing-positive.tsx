import { LeetCodePost } from "./types";

export const firstMissingPositive: LeetCodePost = {
  slug: "first-missing-positive",
  title: "First Missing Positive",
  summary:
    "find the smallest missing positive integer using array as hash table by placing each number at its correct index.",
  publishedAt: "2023-06-16",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["arrays", "hashing"],
  leetCodeLink: "https://leetcode.com/problems/first-missing-positive/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../first-missing-positive/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use the array itself as a hash table. for each number, place it at
          index (number - 1) if it's in valid range [1, n]. then scan to find
          first index where nums[i] != i + 1.
        </p>
        <p>
          the key insight is that for an array of length n, the answer must be
          in [1, n+1]. by placing numbers at their correct positions, we can
          identify the missing one in a second pass.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">algorithm</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>place each number at index (num - 1) if 1 ≤ num ≤ n</li>
          <li>swap to place numbers correctly, handle duplicates</li>
          <li>scan array to find first missing positive</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time: each element visited at most twice. O(1) space excluding
          input array.
        </p>
      </section>
    </article>
  ),
};


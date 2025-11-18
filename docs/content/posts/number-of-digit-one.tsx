import { LeetCodePost } from "./types";

export const numberOfDigitOne: LeetCodePost = {
  slug: "number-of-digit-one",
  title: "Number of Digit One",
  summary:
    "count total number of digit 1 appearing in all numbers from 1 to n using digit dp or mathematical analysis.",
  publishedAt: "2024-06-30",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["math", "dynamic-programming"],
  leetCodeLink: "https://leetcode.com/problems/number-of-digit-one/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../number-of-digit-one/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          analyze each digit position separately. for position i (from right),
          count how many times 1 appears at that position. depends on the digit
          at position i and digits to its left and right.
        </p>
        <p>
          formula: for digit d at position i, count depends on higher digits
          (determines cycles), current digit (determines partial cycle), and
          lower digits (determines position in cycle).
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>process each digit position from right to left</li>
          <li>calculate contributions from higher, current, and lower digits</li>
          <li>sum contributions from all positions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(log n) time to process each digit position. O(1) space. efficient
          mathematical solution.
        </p>
      </section>
    </article>
  ),
};


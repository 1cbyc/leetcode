import { LeetCodePost } from "./types";

export const largestPalindromeProduct: LeetCodePost = {
  slug: "largest-palindrome-product",
  title: "Largest Palindrome Product",
  summary:
    "find the largest palindrome made from the product of two n-digit numbers using brute force with optimizations.",
  publishedAt: "2025-08-01",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["math", "brute-force"],
  leetCodeLink: "https://leetcode.com/problems/largest-palindrome-product/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../largest-palindrome-product/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          generate palindromes in descending order, then check if they can be
          factored into two n-digit numbers. start from the largest possible
          palindrome and work downwards.
        </p>
        <p>
          for each palindrome, try to find factors by checking divisors from
          the largest n-digit number down. early termination when factors become
          too small.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">optimization</h2>
        <p>
          generate palindromes efficiently by mirroring the first half. check
          divisibility starting from largest possible factor to minimize
          iterations.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(10^(2n)) worst case, but optimizations make it much faster in
          practice. O(1) space.
        </p>
      </section>
    </article>
  ),
};


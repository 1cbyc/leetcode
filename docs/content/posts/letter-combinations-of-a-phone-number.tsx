import { LeetCodePost } from "./types";

export const letterCombinationsOfAPhoneNumber: LeetCodePost = {
  slug: "letter-cobinations-of-a-phone-number",
  title: "Letter Combinations of a Phone Number",
  summary:
    "generate all letter combinations from phone number digits using backtracking or iterative approach.",
  publishedAt: "2023-01-01",
  difficulty: "Medium",
  languages: ["PHP"],
  tags: ["backtracking", "string"],
  leetCodeLink:
    "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../letter-cobinations-of-a-phone-number/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          map each digit to its corresponding letters. use backtracking to build
          combinations: for each digit, try all possible letters, recurse, then
          backtrack.
        </p>
        <p>
          can also be done iteratively: start with empty string, for each digit,
          expand all current combinations with each letter for that digit.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>map digits 2-9 to letters</li>
          <li>backtrack: choose letter, recurse, unchoose</li>
          <li>base case: processed all digits, add to result</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(4^n) time where n is digits length (each digit has up to 4 letters).
          O(4^n) space for result combinations.
        </p>
      </section>
    </article>
  ),
};


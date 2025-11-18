import { LeetCodePost } from "./types";

export const validNumber: LeetCodePost = {
  slug: "valid-number",
  title: "Valid Number",
  summary:
    "validate if string represents a valid number using state machine or regex.",
  publishedAt: "2025-02-01",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["string", "state-machine"],
  leetCodeLink: "https://leetcode.com/problems/valid-number/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../valid-number/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use finite state machine to track parsing state. valid number can have
          optional sign, digits, optional decimal point, optional exponent with
          sign and digits.
        </p>
        <p>
          states track: seen sign, seen digits, seen decimal, seen exponent,
          etc. transition between states based on current character. final state
          must be valid number state.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">valid formats</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>integers: "123", "+123", "-123"</li>
          <li>decimals: "123.45", ".45", "123."</li>
          <li>scientific: "123e10", "123e-10", "123.45e10"</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time to process string once. O(1) space for state tracking.
          efficient state machine approach.
        </p>
      </section>
    </article>
  ),
};


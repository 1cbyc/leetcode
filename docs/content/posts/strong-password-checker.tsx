import { LeetCodePost } from "./types";

export const strongPasswordChecker: LeetCodePost = {
  slug: "strong-password-checker",
  title: "Strong Password Checker",
  summary:
    "find minimum steps to make password strong by handling length, character types, and repeating sequences.",
  publishedAt: "2024-06-22",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["greedy", "string"],
  leetCodeLink: "https://leetcode.com/problems/strong-password-checker/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../strong-password-checker/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          handle three cases: too short, too long, just right. for each, count
          missing character types and repeating sequences. prioritize fixes
          that solve multiple issues.
        </p>
        <p>
          for long passwords, use deletions to break repeating sequences
          efficiently. for short passwords, use insertions. for correct length,
          use replacements.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">requirements</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>length 6-20</li>
          <li>contains lowercase, uppercase, digit</li>
          <li>no three consecutive same characters</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time to scan password and count issues. O(1) space. greedy
          approach handles all cases.
        </p>
      </section>
    </article>
  ),
};


import { LeetCodePost } from "./types";

export const candy: LeetCodePost = {
  slug: "candy",
  title: "Candy",
  summary:
    "distribute candy to children based on ratings using two-pass greedy approach.",
  publishedAt: "2025-08-26",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["greedy", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/candy/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../candy/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          first pass left to right: if rating[i] > rating[i-1], give one more
          candy than previous. second pass right to left: if rating[i] >
          rating[i+1], ensure we have more than next.
        </p>
        <p>
          take maximum of both passes to satisfy both left and right constraints.
          start with 1 candy for each child.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>initialize all with 1 candy</li>
          <li>left pass: handle increasing sequences</li>
          <li>right pass: handle decreasing sequences</li>
          <li>take max to satisfy both directions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time for two passes, O(n) space for candy array. optimal greedy
          solution.
        </p>
      </section>
    </article>
  ),
};


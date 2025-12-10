import { LeetCodePost } from "./types";

export const leetcodeintro: LeetCodePost = {
  slug: "leetcode-intro",
  title: "leetcode intro",
  summary: "overview of my leetcode writeups and plan",
  publishedAt: "2024-01-01",
  difficulty: "Unknown",
  languages: ["Python"],
  tags: ["math"],
  leetCodeLink: "https://leetcode.com/problems/leetcode-intro/",
  estimatedReadingMinutes: 3,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>this is a hub for my leetcode writeups.</p>
        <p>i keep adding posts as i solve more problems—stay tuned.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">current plan</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>solve at least two hard problems per day.</li>
          <li>write concise notes for each solution.</li>
          <li>keep the site updated as i go.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">links</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**[My LeetCode Solutions](https://leetcode.com/1cbyc/solutions/)**</li>
        </ul>
      </section>
    </article>
  ),
};


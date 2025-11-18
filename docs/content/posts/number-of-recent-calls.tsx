import { LeetCodePost } from "./types";

export const numberOfRecentCalls: LeetCodePost = {
  slug: "number-of-recent-calls",
  title: "Number of Recent Calls",
  summary:
    "implement RecentCounter using circular queue to count requests within last 3000ms.",
  publishedAt: "2025-08-17",
  difficulty: "Easy",
  languages: ["C"],
  tags: ["queue", "design"],
  leetCodeLink: "https://leetcode.com/problems/number-of-recent-calls/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "C solution",
      language: "C",
      path: "../C/number-of-recent-calls/solution.c",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use circular queue to maintain sliding window of last 3000ms. on each
          ping, add timestamp and remove timestamps older than 3000ms. return
          queue size.
        </p>
        <p>
          circular queue allows efficient enqueue and dequeue operations. maintain
          front and rear pointers, handle wraparound for circular behavior.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">implementation</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>circular queue with fixed capacity</li>
          <li>enqueue new timestamps</li>
          <li>dequeue timestamps outside 3000ms window</li>
          <li>return current queue size</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(1) amortized time per ping. O(1) space for queue (bounded by
          3000ms window).
        </p>
      </section>
    </article>
  ),
};


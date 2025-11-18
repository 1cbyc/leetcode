import { LeetCodePost } from "./types";

export const maxPointsOnLine: LeetCodePost = {
  slug: "max-points-on-line",
  title: "Max Points on a Line",
  summary:
    "find maximum number of points that lie on the same line using slope calculation and hash map.",
  publishedAt: "2025-08-26",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["hash-table", "math", "geometry"],
  leetCodeLink: "https://leetcode.com/problems/max-points-on-a-line/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../max-points-on-line/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          for each point, calculate slopes to all other points. use a hash map
          to count points with the same slope. handle vertical lines and
          duplicates separately.
        </p>
        <p>
          use gcd to normalize slopes to avoid floating point precision issues.
          the maximum count for any point gives the answer.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key points</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>normalize slopes using gcd to avoid precision issues</li>
          <li>handle vertical lines (infinite slope) separately</li>
          <li>count duplicate points separately</li>
          <li>for each point, find max collinear points</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n²) time where n is number of points. O(n) space for the slope map.
        </p>
      </section>
    </article>
  ),
};


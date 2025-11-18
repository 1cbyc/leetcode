import { LeetCodePost } from "./types";

export const perfectRectangle: LeetCodePost = {
  slug: "perfect-rectangle",
  title: "Perfect Rectangle",
  summary:
    "check if rectangles form exact rectangle without gaps or overlaps using corner counting and area validation.",
  publishedAt: "2024-04-17",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["geometry", "hashing"],
  leetCodeLink: "https://leetcode.com/problems/perfect-rectangle/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../Python/perfect-rectangle/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          check two conditions: total area equals expected area, and corner
          counts are valid. expected rectangle has 4 corners appearing once,
          all other corners appear even times.
        </p>
        <p>
          count occurrences of each corner point. if rectangles form perfect
          rectangle, interior corners cancel out (appear twice), only boundary
          corners remain.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">validation</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>total area must equal (max_x - min_x) * (max_y - min_y)</li>
          <li>four corner points must appear exactly once</li>
          <li>all other points must appear even number of times</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time where n is number of rectangles. O(n) space for corner
          counts.
        </p>
      </section>
    </article>
  ),
};


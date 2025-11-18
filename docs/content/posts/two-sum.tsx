import { LeetCodePost } from "./types";

export const twoSum: LeetCodePost = {
  slug: "two-sum",
  title: "Two Sum",
  summary:
    "find two indices whose values sum to target using hash map for O(n) lookup.",
  publishedAt: "2023-06-24",
  difficulty: "Easy",
  languages: ["Python"],
  tags: ["hash-table", "arrays"],
  leetCodeLink: "https://leetcode.com/problems/two-sum/",
  estimatedReadingMinutes: 2,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../two sum/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use hash map to store number → index mapping. for each number, check if
          complement (target - num) exists in map. if found, return both indices.
        </p>
        <p>
          single pass through array: check complement before adding current number
          to map. this handles cases where same number appears twice.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time for single pass, O(n) space for hash map. classic hash map
          problem.
        </p>
      </section>
    </article>
  ),
};


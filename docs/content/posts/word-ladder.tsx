import { LeetCodePost } from "./types";

export const wordLadder: LeetCodePost = {
  slug: "word-ladder",
  title: "Word Ladder",
  summary:
    "find shortest transformation sequence from beginWord to endWord using bfs.",
  publishedAt: "2025-04-24",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["bfs", "graph", "string"],
  leetCodeLink: "https://leetcode.com/problems/word-ladder/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../word-ladder/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use bfs to find shortest path. start from beginWord, try changing each
          character to all possible letters, check if result is in word list and
          not visited.
        </p>
        <p>
          use queue for level-order traversal. track level to count
          transformations. early return when endWord is found.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">optimization</h2>
        <p>
          convert word list to set for O(1) lookup. try all 26 letters for each
          position. use visited set to avoid cycles.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(m * n * 26) time where m is word length and n is word list size.
          O(n) space for queue and visited set.
        </p>
      </section>
    </article>
  ),
};


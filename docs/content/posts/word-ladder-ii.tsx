import { LeetCodePost } from "./types";

export const wordLadderIi: LeetCodePost = {
  slug: "word-ladder-2",
  title: "Word Ladder II",
  summary:
    "find all shortest transformation sequences from beginWord to endWord using bfs with path tracking.",
  publishedAt: "2024-06-06",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["bfs", "backtracking", "graph"],
  leetCodeLink: "https://leetcode.com/problems/word-ladder-ii/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../word-ladder-2/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          first bfs to find shortest distance to endWord. then dfs backwards
          from endWord, only following edges that lead to words at distance d-1,
          building all paths.
        </p>
        <p>
          build graph during first bfs: map each word to its neighbors. use
          distance map to track shortest distance to each word. second pass
          collects all valid paths.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">two-phase approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>phase 1: bfs to find shortest distance</li>
          <li>phase 2: dfs to collect all shortest paths</li>
          <li>only traverse edges that maintain distance constraint</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(m * n * 26) for bfs, O(2^d) worst case for dfs where d is depth.
          space O(n) for graph and paths.
        </p>
      </section>
    </article>
  ),
};


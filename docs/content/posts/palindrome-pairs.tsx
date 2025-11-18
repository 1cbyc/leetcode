import { LeetCodePost } from "./types";

export const palindromePairs: LeetCodePost = {
  slug: "palindrome-pairs",
  title: "Palindrome Pairs",
  summary:
    "find all pairs of words that form palindrome when concatenated by checking all prefix/suffix splits.",
  publishedAt: "2025-03-21",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["hash-table", "string", "trie"],
  leetCodeLink: "https://leetcode.com/problems/palindrome-pairs/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../palindrome-pairs/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          for each word, try all possible splits (prefix + suffix). if prefix is
          palindrome, check if reverse of suffix exists in word map. if suffix is
          palindrome, check if reverse of prefix exists.
        </p>
        <p>
          use hash map for O(1) word lookup. for word at index i, try splits at
          positions 0 to len(word). check both cases: prefix palindrome (suffix
          reverse in map) and suffix palindrome (prefix reverse in map).
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">key insight</h2>
        <p>
          if word1 + word2 is palindrome, either word1's prefix is palindrome
          (word2 reverses word1's suffix) or word1's suffix is palindrome (word2
          reverses word1's prefix).
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n * k²) time where n is words count and k is average word length.
          O(n) space for hash map.
        </p>
      </section>
    </article>
  ),
};


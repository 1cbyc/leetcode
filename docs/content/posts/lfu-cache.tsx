import { LeetCodePost } from "./types";

export const lfuCache: LeetCodePost = {
  slug: "lfu-cache",
  title: "LFU Cache",
  summary:
    "implement least frequently used cache with O(1) operations using hash maps and doubly linked lists.",
  publishedAt: "2025-04-24",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["design", "hash-table", "linked-list"],
  leetCodeLink: "https://leetcode.com/problems/lfu-cache/",
  estimatedReadingMinutes: 5,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../Typescript/lfu-cache/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          maintain a map of frequency → doubly linked list. each node tracks its
          frequency count. on get/put, move the node to the next frequency list.
          when evicting, remove from the lowest frequency list's tail.
        </p>
        <p>
          the doubly linked list gives O(1) insertion and removal. hash maps
          provide O(1) access to nodes and frequency lists. this combines the
          benefits of both data structures.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">data structures</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>mapOfNodes: key → node for O(1) access</li>
          <li>mapOfLists: frequency → doubly linked list</li>
          <li>each list maintains LRU order within same frequency</li>
          <li>evict from lowest frequency, least recently used</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(1) for both get and put operations. space is O(capacity) for nodes and
          frequency lists. efficient cache implementation.
        </p>
      </section>
    </article>
  ),
};


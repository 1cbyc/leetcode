import { LeetCodePost } from "./types";

export const stringCompression: LeetCodePost = {
  slug: "string-compression",
  title: "String Compression",
  summary:
    "compress string in-place by replacing consecutive characters with character and count using two pointers.",
  publishedAt: "2024-05-03",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["two-pointers", "string"],
  leetCodeLink: "https://leetcode.com/problems/string-compression/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../Typescript/string-compression/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use two pointers: read pointer scans ahead to count consecutive
          characters, write pointer writes compressed result. for each group,
          write the character, then the count if it's greater than 1.
        </p>
        <p>
          the key is in-place modification: we overwrite the array as we go,
          tracking where to write next. truncate the array to the write position
          at the end.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">algorithm</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>read pointer: finds end of current character group</li>
          <li>write pointer: writes compressed representation</li>
          <li>only write count if count &gt; 1</li>
          <li>truncate array to final write position</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time: single pass through the array. O(1) space excluding input
          array. efficient in-place compression.
        </p>
      </section>
    </article>
  ),
};


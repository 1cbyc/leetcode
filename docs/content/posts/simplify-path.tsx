import { LeetCodePost } from "./types";

export const simplifyPath: LeetCodePost = {
  slug: "simplify-path",
  title: "Simplify Path",
  summary:
    "normalize unix-style file paths by handling . and .. components using a stack.",
  publishedAt: "2023-01-17",
  difficulty: "Medium",
  languages: ["TypeScript"],
  tags: ["stack", "string"],
  leetCodeLink: "https://leetcode.com/problems/simplify-path/",
  estimatedReadingMinutes: 2,
  solutionPaths: [
    {
      label: "TypeScript solution",
      language: "TypeScript",
      path: "../simplify-path/solution.ts",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          split the path by "/" and process each component. empty strings and "."
          are ignored. ".." pops from the stack (goes up one directory). everything
          else gets pushed onto the stack.
        </p>
        <p>
          at the end, join the stack with "/" and prepend "/" for the root. the
          stack naturally handles nested directory navigation.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">edge cases</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>multiple slashes: split handles them as empty strings</li>
          <li>".." at root: stack.pop() on empty stack is safe (no-op)</li>
          <li>trailing slash: gets split as empty string, ignored</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(n) time to split and process, O(n) space for the stack. straightforward
          linear solution.
        </p>
      </section>
    </article>
  ),
};


import { LeetCodePost } from "./types";

export const addTwoNumbers: LeetCodePost = {
  slug: "addtwonumbers",
  title: "Add Two Numbers",
  summary:
    "add two numbers represented as linked lists, handling carry and different lengths.",
  publishedAt: "2025-02-08",
  difficulty: "Medium",
  languages: ["PHP"],
  tags: ["linked-list", "math"],
  leetCodeLink: "https://leetcode.com/problems/add-two-numbers/",
  estimatedReadingMinutes: 3,
  solutionPaths: [
    {
      label: "PHP solution",
      language: "PHP",
      path: "../addtwonumbers/solution.php",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          traverse both linked lists simultaneously, adding corresponding digits
          along with any carry from the previous addition. create a new node for
          each digit of the result.
        </p>
        <p>
          use a dummy head to simplify edge cases. handle cases where lists have
          different lengths by treating missing nodes as 0. if there's a final
          carry, add one more node.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">approach</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>use dummy head node for cleaner code</li>
          <li>add digits and carry, compute new carry</li>
          <li>create new node with sum % 10</li>
          <li>handle final carry if present</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(max(m, n)) time where m and n are list lengths. O(max(m, n)) space
          for the result list.
        </p>
      </section>
    </article>
  ),
};


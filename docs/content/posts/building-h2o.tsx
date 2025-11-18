import { LeetCodePost } from "./types";

export const buildingH2o: LeetCodePost = {
  slug: "building-h2o",
  title: "Building H2O",
  summary:
    "coordinate hydrogen and oxygen threads to form water molecules using semaphores and barrier synchronization.",
  publishedAt: "2023-07-27",
  difficulty: "Medium",
  languages: ["Python"],
  tags: ["concurrency", "threading"],
  leetCodeLink: "https://leetcode.com/problems/building-h2o/",
  estimatedReadingMinutes: 4,
  solutionPaths: [
    {
      label: "Python solution",
      language: "Python",
      path: "../Python/building-h2o/solution.py",
    },
  ],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>
          use semaphores to limit access: hydrogen_semaphore allows 2 threads,
          oxygen_semaphore allows 1 thread. use barrier(3) to synchronize so
          all three threads (2H + 1O) wait together before releasing.
        </p>
        <p>
          each hydrogen thread acquires hydrogen semaphore, waits at barrier,
          releases hydrogen, then releases semaphore. oxygen thread does same
          with oxygen semaphore. barrier ensures all three are ready before any
          proceed.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">synchronization</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>hydrogen_semaphore(2): allows max 2 hydrogen threads</li>
          <li>oxygen_semaphore(1): allows max 1 oxygen thread</li>
          <li>barrier(3): waits for all 3 threads before proceeding</li>
          <li>ensures correct H2O molecule formation</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">complexity</h2>
        <p>
          O(1) time per molecule formation. synchronization overhead depends on
          thread scheduling.
        </p>
      </section>
    </article>
  ),
};


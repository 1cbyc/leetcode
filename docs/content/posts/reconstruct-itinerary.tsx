import { LeetCodePost } from "./types";

export const reconstructitinerary: LeetCodePost = {
  slug: "reconstruct-itinerary",
  title: "reconstruct itinerary",
  summary: "reconstruct itinerary",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["array","string","backtracking","graph","sorting"],
  leetCodeLink: "https://leetcode.com/problems/reconstruct-itinerary/",
  estimatedReadingMinutes: 6,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 332: Reconstruct Itinerary - PHP Hierarchical DFS Solution" description: "Solving the Reconstruct Itinerary problem using PHP with hierarchical DFS and backtracking" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 332: Reconstruct Itinerary</h3>
        <p>i recently solved the reconstruct itinerary problem on leetcode, and it's a great example of graph traversal and eulerian paths. this hard problem tests your understanding of hierarchical dfs, backtracking, and efficient graph algorithms.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>you are given a list of airline tickets represented as pairs of [from, to] airports. reconstruct the itinerary in order and return it.</p>
        <p>all of the tickets belong to a man who departs from "jfk", thus the itinerary must begin with "jfk". if there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: tickets = [["jfk","sfo"],["jfk","atl"],["sfo","atl"],["atl","jfk"],["atl","sfo"]]\noutput: ["jfk","atl","jfk","sfo","atl","sfo"]\n\nexplanation: another possible reconstruction is ["jfk","sfo","atl","jfk","atl","sfo"] but it is larger in lexical order.`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: tickets = [["muc","lhr"],["jfk","muc"],["sfo","sfo"],["lhr","sfo"]]\noutput: ["jfk","muc","lhr","sfo","sfo"]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a hierarchical dfs approach. the key insight is that this is essentially finding an eulerian path in a directed graph, and we need to ensure we get the lexicographically smallest solution.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**hierarchical dfs** - use backtracking with sorted destinations</li>
          <li>**eulerian path** - treat as graph traversal problem</li>
          <li>**backtracking** - try all possible paths</li>
          <li>**topological sort** - sort airports by dependencies</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>hierarchical dfs with backtracking approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**graph construction** - build adjacency list from tickets</li>
          <li>**sorting** - sort destinations for lexicographical order</li>
          <li>**dfs traversal** - use hierarchical dfs with backtracking</li>
          <li>**path building** - build itinerary in reverse order</li>
          <li>**validation** - ensure all tickets are used</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`class solution {\nprivate $graph = [];\nprivate $result = [];\n\nfunction finditinerary($tickets) {\n// build adjacency list\nforeach ($tickets as $ticket) {\n$from = $ticket[0];\n$to = $ticket[1];\nif (!isset($this->graph[$from])) {\n$this->graph[$from] = [];\n}\n$this->graph[$from][] = $to;\n}\n\n// sort destinations for lexicographical order\nforeach ($this->graph as $from =&gt; &$destinations) {\nsort($destinations);\n}\n\n$this->dfs('jfk');\nreturn array_reverse($this->result);\n}\n\nprivate function dfs($airport) {\nwhile (isset($this->graph[$airport]) && !empty($this->graph[$airport])) {\n$next = array_shift($this->graph[$airport]);\n$this->dfs($next);\n}\n$this->result[] = $airport;\n}\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Graph Construction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`foreach ($tickets as $ticket) {\n$from = $ticket[0];\n$to = $ticket[1];\nif (!isset($this->graph[$from])) {\n$this->graph[$from] = [];\n}\n$this->graph[$from][] = $to;\n}`}</code></pre>
        <p>we build the adjacency list:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**ticket processing**: iterate through each ticket</li>
          <li>**array initialization**: create empty array for new airports</li>
          <li>**edge addition**: add destination to source's list</li>
          <li>**structure**: $graph[from] = [to1, to2, ...]</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Sorting for Lexicographical Order</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`foreach ($this->graph as $from =&gt; &$destinations) {\nsort($destinations);\n}`}</code></pre>
        <p>we sort destinations for each airport:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**reference operator**: &$destinations for direct modification</li>
          <li>**sorting**: ensures lexicographically smallest path</li>
          <li>**efficiency**: sort once, use multiple times</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. DFS Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`private function dfs($airport) {\nwhile (isset($this->graph[$airport]) && !empty($this->graph[$airport])) {\n$next = array_shift($this->graph[$airport]);\n$this->dfs($next);\n}\n$this->result[] = $airport;\n}`}</code></pre>
        <p>the hierarchical dfs function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>existence check</strong>:{" "}
            <code>isset($this-&gt;graph[$airport])</code>
          </li>
          <li>
            <strong>non-empty check</strong>:{" "}
            <code>!empty($this-&gt;graph[$airport])</code>
          </li>
          <li>**ticket removal**: array_shift() removes and returns first element</li>
          <li>**recursive call**: dfs($next) for next airport</li>
          <li>**result building**: add airport to result array</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Main Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function finditinerary($tickets) {\n// build graph and sort\n// ... graph construction and sorting ...\n\n$this->dfs('jfk');\nreturn array_reverse($this->result);\n}`}</code></pre>
        <p>the main function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**graph setup**: build and sort adjacency list</li>
          <li>**dfs call**: start from 'jfk'</li>
          <li>**result reversal**: reverse array for correct order</li>
          <li>**return**: final itinerary</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Hierarchical DFS Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`while (isset($this->graph[$airport]) && !empty($this->graph[$airport])) {\n$next = array_shift($this->graph[$airport]);\n$this->dfs($next);\n}`}</code></pre>
        <p>the key hierarchical logic:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**while loop**: continue while tickets exist</li>
          <li>**array_shift**: remove and use first ticket</li>
          <li>**recursive dfs**: explore next airport</li>
          <li>**automatic backtracking**: when no more tickets</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: [["jfk","sfo"],["jfk","atl"],["sfo","atl"],["atl","jfk"],["atl","sfo"]]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: build graph\njfk -&gt; [atl, sfo]  (sorted)\nsfo -&gt; [atl]\natl -&gt; [jfk, sfo]  (sorted)\n\nstep 2: dfs from jfk\n- choose atl (lexicographically smaller)\n- dfs from atl: choose jfk\n- dfs from jfk: choose sfo\n- dfs from sfo: choose atl\n- dfs from atl: no more destinations\n\nstep 3: build result (reverse order)\nresult = [sfo, atl, sfo, jfk, atl, jfk]\nreversed = [jfk, atl, jfk, sfo, atl, sfo]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(e log e) where e is number of tickets</li>
          <li>**space complexity:** O(e) for graph storage</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>sorting takes O(e log e) time</li>
          <li>dfs visits each ticket once</li>
          <li>graph storage is linear in number of tickets</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**hierarchical dfs** - use backtracking for eulerian path</li>
          <li>**lexicographical sorting** - ensure smallest solution</li>
          <li>**ticket removal** - prevent reuse of tickets</li>
          <li>**reverse building** - build path in reverse order</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**eulerian path algorithm** - fleury's algorithm</li>
          <li>more complex implementation</li>
          <li>same time complexity</li>
          <li>harder to understand</li>
          <li>**backtracking** - try all possible paths</li>
          <li>exponential time complexity</li>
          <li>too slow for large inputs</li>
          <li>doesn't guarantee optimal solution</li>
          <li>**topological sort** - sort airports by dependencies</li>
          <li>doesn't work for cyclic graphs</li>
          <li>not suitable for this problem</li>
          <li>incorrect approach</li>
          <li>**bfs approach** - level by level</li>
          <li>doesn't guarantee eulerian path</li>
          <li>more complex than dfs</li>
          <li>not suitable for this problem</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**single ticket** - handle minimal input</li>
          <li>**circular path** - handle cycles in graph</li>
          <li>**disconnected graph** - ensure connectivity</li>
          <li>**duplicate tickets** - handle multiple same tickets</li>
          <li>**large input** - ensure efficient performance</li>
          <li>**lexicographical ties** - handle equal destinations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">PHP-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**associative arrays** - efficient key-value storage</li>
          <li>**reference operator** - &$destinations for direct modification</li>
          <li>**array functions** - array_shift(), array_reverse()</li>
          <li>**class properties** - private $graph, $result</li>
          <li>**foreach loops** - efficient array iteration</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**eulerian paths** - finding paths using all edges</li>
          <li>**hierarchical dfs** - backtracking with sorting</li>
          <li>**graph algorithms** - efficient traversal techniques</li>
          <li>**lexicographical ordering** - ensuring optimal solutions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**travel planning** - optimal route finding</li>
          <li>**network routing** - packet routing algorithms</li>
          <li>**logistics** - delivery route optimization</li>
          <li>**game theory** - path finding in games</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the reconstruct itinerary problem is an excellent exercise in graph traversal and eulerian paths. the key insight is using hierarchical dfs with backtracking to find the lexicographically smallest eulerian path.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/reconstruct-itinerary/solutions/1234569/reconstruct-itinerary-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

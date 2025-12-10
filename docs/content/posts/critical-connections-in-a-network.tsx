import { LeetCodePost } from "./types";

export const criticalconnectionsinanetwork: LeetCodePost = {
  slug: "critical-connections-in-a-network",
  title: "critical connections in a network",
  summary: "critical connections in a network",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["array","tree","graph","stack","math"],
  leetCodeLink: "https://leetcode.com/problems/critical-connections-in-a-network/",
  estimatedReadingMinutes: 6,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 1192: Critical Connections in a Network - Tarjan's Algorithm" description: "Solving the Critical Connections in a Network problem using Tarjan's algorithm to find bridges in a graph" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 1192: Critical Connections in a Network</h3>
        <p>i recently solved the critical connections in a network problem on leetcode, and it's a great example of graph algorithms and tarjan's algorithm. this hard problem tests your understanding of graph theory, depth-first search, and bridge detection.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>there are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. any server can reach other servers directly or indirectly through the network.</p>
        <p>a critical connection is a connection that, if removed, will make some servers unable to reach some other server.</p>
        <p>return all critical connections in the network in any order.</p>
        <p><strong>example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]\noutput: [[1,3]]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using tarjan's algorithm. the key insight is that critical connections are essentially bridges in the graph - edges whose removal increases the number of connected components.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**brute force** - remove each edge and check connectivity (O(E * (V+E)))</li>
          <li>**tarjan's algorithm** - find all bridges in the graph (O(V+E))</li>
          <li>**alternative approach** - using articulation points concept</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use <strong>tarjan's algorithm</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**build adjacency list** - create graph representation</li>
          <li>**dfs traversal** - perform depth-first search with discovery times</li>
          <li>**track lowest reachable** - maintain lowest discovery time reachable from each node</li>
          <li>**detect bridges** - identify edges where low[v] > disc[u]</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function criticalConnections(n: number, connections: number[][]): number[][] {\n// build adjacency list\nconst graph: number[][] = Array.from({ length: n }, () => []);\nfor (const [u, v] of connections) {\ngraph[u].push(v);\ngraph[v].push(u);\n}\n\nconst result: number[][] = [];\nconst disc: number[] = new Array(n).fill(-1);  // discovery times\nconst low: number[] = new Array(n).fill(-1);   // lowest reachable times\nlet time = 0;\n\nfunction dfs(u: number, parent: number): void {\ndisc[u] = low[u] = time++;\n\nfor (const v of graph[u]) {\nif (v === parent) continue; // skip parent to avoid back edge\n\nif (disc[v] === -1) {\n// v is not visited, recur for it\ndfs(v, u);\n\n// check if the subtree rooted with v has a connection\n// to one of the ancestors of u\nlow[u] = Math.min(low[u], low[v]);\n\n// if the lowest vertex reachable from subtree under v\n// is below u in dfs tree, then u-v is a bridge\nif (low[v] > disc[u]) {\nresult.push([u, v]);\n}\n} else {\n// update low value of u for parent function calls\nlow[u] = Math.min(low[u], disc[v]);\n}\n}\n}\n\n// find all bridges using dfs\nfor (let i = 0; i < n; i++) {\nif (disc[i] === -1) {\ndfs(i, -1);\n}\n}\n\nreturn result;\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Graph Construction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const graph: number[][] = Array.from({ length: n }, () => []);\nfor (const [u, v] of connections) {\ngraph[u].push(v);\ngraph[v].push(u);\n}`}</code></pre>
        <p>we build an adjacency list representation of the undirected graph. each node maintains a list of its neighbors.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. DFS with Discovery Times</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const disc: number[] = new Array(n).fill(-1);  // discovery times\nconst low: number[] = new Array(n).fill(-1);   // lowest reachable times\nlet time = 0;`}</code></pre>
        <p>we track two important values for each node:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>`disc[u]`: when node u was first discovered in dfs</li>
          <li>`low[u]`: lowest discovery time reachable from u through back edges</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Bridge Detection Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if (low[v] > disc[u]) {\nresult.push([u, v]);\n}`}</code></pre>
        <p>this is the key insight: an edge (u,v) is a bridge if the subtree rooted at v cannot reach any ancestor of u. this means removing the edge would disconnect the graph.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: start dfs from node 0\n- disc[0] = low[0] = 0\n\nstep 2: visit node 1 (neighbor of 0)\n- disc[1] = low[1] = 1\n\nstep 3: visit node 2 (neighbor of 1)\n- disc[2] = low[2] = 2\n\nstep 4: node 2 connects back to 0 (back edge)\n- low[2] = min(low[2], disc[0]) = min(2, 0) = 0\n\nstep 5: backtrack to node 1\n- low[1] = min(low[1], low[2]) = min(1, 0) = 0\n\nstep 6: visit node 3 (neighbor of 1)\n- disc[3] = low[3] = 3\n\nstep 7: check edge (1,3)\n- low[3] = 3 > disc[1] = 1, so (1,3) is a bridge\n\nresult: [[1,3]]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(V + E) where V is number of vertices and E is number of edges</li>
          <li>**space complexity:** O(V + E) for the adjacency list and recursion stack</li>
        </ul>
        <p>the algorithm performs a single dfs traversal, visiting each node and edge exactly once.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**bridge detection** - critical connections are bridges in graph theory</li>
          <li>**tarjan's algorithm** - efficient way to find all bridges in a single dfs pass</li>
          <li>**discovery vs lowest reachable** - the relationship between these values determines bridges</li>
          <li>**back edge handling** - crucial to skip parent edges to avoid incorrect back edge detection</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**brute force removal** - remove each edge and check connectivity using dfs/bfs</li>
          <li>time complexity: O(E * (V+E))</li>
          <li>space complexity: O(V+E)</li>
          <li>much less efficient for large graphs</li>
          <li>**articulation points** - find articulation points and their associated bridges</li>
          <li>similar to tarjan's algorithm</li>
          <li>focuses on nodes rather than edges</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**single edge** - if there's only one edge, it's always critical</li>
          <li>**disconnected graph** - handle multiple connected components</li>
          <li>**self-loops** - though not present in this problem, they would need special handling</li>
          <li>**empty graph** - return empty array</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**graph theory fundamentals** - understanding bridges and connectivity</li>
          <li>**tarjan's algorithm** - powerful technique for graph analysis</li>
          <li>**dfs with state tracking** - maintaining discovery and lowest reachable times</li>
          <li>**algorithm optimization** - choosing the right approach for efficiency</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the critical connections problem is an excellent exercise in graph algorithms and tarjan's algorithm. the key insight is recognizing that critical connections are bridges, and tarjan's algorithm provides the most efficient solution.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/critical-connections-in-a-network/solutions/1234569/critical-connections-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

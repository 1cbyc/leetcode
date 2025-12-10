import { LeetCodePost } from "./types";

export const longestincreasingpathinamatrix: LeetCodePost = {
  slug: "longest-increasing-path-in-a-matrix",
  title: "longest increasing path in a matrix",
  summary: "longest increasing path in a matrix",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["C"],
  tags: ["array","dynamic-programming","graph","dfs","bfs"],
  leetCodeLink: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
  estimatedReadingMinutes: 8,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 329: Longest Increasing Path in a Matrix - C DFS Solution" description: "Solving the Longest Increasing Path in a Matrix problem using C with DFS and memoization" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 329: Longest Increasing Path in a Matrix</h3>
        <p>i recently solved the longest increasing path in a matrix problem on leetcode, and it's a great example of dynamic programming and graph traversal. this hard problem tests your understanding of dfs, memoization, and efficient matrix traversal techniques.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>given an m x n integers matrix, return the length of the longest strictly increasing path in matrix.</p>
        <p>from each cell, you can either move in four directions: left, right, up, or down. you may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: matrix = [[9,9,4],[6,6,8],[2,1,1]]\noutput: 4\n\nexplanation: the longest increasing path is [1, 2, 6, 9].`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: matrix = [[3,4,5],[3,2,6],[2,2,1]]\noutput: 4\n\nexplanation: the longest increasing path is [3, 4, 5, 6]. moving diagonally is not allowed.`}</code></pre>
        <p><strong>example 3:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: matrix = [[1]]\noutput: 1`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using depth-first search (dfs) with memoization. the key insight is that we can cache the results of each cell to avoid redundant calculations and achieve efficient time complexity.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**naive dfs** - try all possible paths, too slow</li>
          <li>**dfs with memoization** - cache results for efficiency</li>
          <li>**dynamic programming** - bottom-up approach</li>
          <li>**topological sort** - treat as directed acyclic graph</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>dfs with memoization approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**dfs traversal** - explore all possible paths from each cell</li>
          <li>**memoization** - cache results to avoid redundant calculations</li>
          <li>**direction array** - use 4-directional movement</li>
          <li>**boundary check** - ensure we stay within matrix bounds</li>
          <li>**increasing check** - only move to cells with larger values</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};\n\nint dfs(int** matrix, int matrixsize, int* matrixcolsize, int row, int col, int** memo) {\nif (memo[row][col] != 0) {\nreturn memo[row][col];\n}\n\nint maxlength = 1;\n\nfor (int i = 0; i < 4; i++) {\nint newrow = row + directions[i][0];\nint newcol = col + directions[i][1];\n\nif (newrow >= 0 && newrow < matrixsize &&\nnewcol >= 0 && newcol < matrixcolsize[0] &&\nmatrix[newrow][newcol] > matrix[row][col]) {\n\nmaxlength = fmax(maxlength, 1 + dfs(matrix, matrixsize, matrixcolsize, newrow, newcol, memo));\n}\n}\n\nmemo[row][col] = maxlength;\nreturn maxlength;\n}\n\nint longestincreasingpath(int** matrix, int matrixsize, int* matrixcolsize) {\nif (matrixsize == 0 || matrixcolsize[0] == 0) {\nreturn 0;\n}\n\nint rows = matrixsize;\nint cols = matrixcolsize[0];\n\n// initialize memoization array\nint** memo = (int**)malloc(rows * sizeof(int*));\nfor (int i = 0; i < rows; i++) {\nmemo[i] = (int*)calloc(cols, sizeof(int));\n}\n\nint maxlength = 0;\n\n// try starting from each cell\nfor (int i = 0; i < rows; i++) {\nfor (int j = 0; j < cols; j++) {\nmaxlength = fmax(maxlength, dfs(matrix, matrixsize, matrixcolsize, i, j, memo));\n}\n}\n\n// free allocated memory\nfor (int i = 0; i < rows; i++) {\nfree(memo[i]);\n}\nfree(memo);\n\nreturn maxlength;\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Direction Array Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};`}</code></pre>
        <p>we define the four possible directions:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**(-1, 0)**: move up</li>
          <li>**(1, 0)**: move down</li>
          <li>**(0, -1)**: move left</li>
          <li>**(0, 1)**: move right</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. DFS Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`int dfs(int** matrix, int matrixsize, int* matrixcolsize, int row, int col, int** memo) {\nif (memo[row][col] != 0) {\nreturn memo[row][col];\n}\n\nint maxlength = 1;\n\n// explore all directions\nfor (int i = 0; i < 4; i++) {\nint newrow = row + directions[i][0];\nint newcol = col + directions[i][1];\n\nif (newrow >= 0 && newrow < matrixsize &&\nnewcol >= 0 && newcol < matrixcolsize[0] &&\nmatrix[newrow][newcol] > matrix[row][col]) {\n\nmaxlength = fmax(maxlength, 1 + dfs(matrix, matrixsize, matrixcolsize, newrow, newcol, memo));\n}\n}\n\nmemo[row][col] = maxlength;\nreturn maxlength;\n}`}</code></pre>
        <p>the dfs function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**memoization check**: return cached result if available</li>
          <li>**base case**: start with length 1</li>
          <li>**direction exploration**: try all four directions</li>
          <li>**boundary check**: ensure valid position</li>
          <li>**increasing check**: only move to larger values</li>
          <li>**result caching**: store computed result</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Main Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`int longestincreasingpath(int** matrix, int matrixsize, int* matrixcolsize) {\nif (matrixsize == 0 || matrixcolsize[0] == 0) {\nreturn 0;\n}\n\nint rows = matrixsize;\nint cols = matrixcolsize[0];\n\n// initialize memoization array\nint** memo = (int**)malloc(rows * sizeof(int*));\nfor (int i = 0; i < rows; i++) {\nmemo[i] = (int*)calloc(cols, sizeof(int));\n}\n\nint maxlength = 0;\n\n// try starting from each cell\nfor (int i = 0; i < rows; i++) {\nfor (int j = 0; j < cols; j++) {\nmaxlength = fmax(maxlength, dfs(matrix, matrixsize, matrixcolsize, i, j, memo));\n}\n}\n\n// free allocated memory\nfor (int i = 0; i < rows; i++) {\nfree(memo[i]);\n}\nfree(memo);\n\nreturn maxlength;\n}`}</code></pre>
        <p>the main function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**edge case handling**: check for empty matrix</li>
          <li>**memory allocation**: create memoization array</li>
          <li>**cell iteration**: try starting from each cell</li>
          <li>**memory cleanup**: free allocated memory</li>
          <li>**result return**: return maximum path length</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Boundary and Value Checks</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if (newrow >= 0 && newrow < matrixsize &&\nnewcol >= 0 && newcol < matrixcolsize[0] &&\nmatrix[newrow][newcol] > matrix[row][col]) {\n// valid move\n}`}</code></pre>
        <p>we check three conditions:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**row bounds**: newrow >= 0 && newrow < matrixsize</li>
          <li>**column bounds**: newcol >= 0 && newcol < matrixcolsize[0]</li>
          <li>**increasing value**: matrix[newrow][newcol] > matrix[row][col]</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Memory Management</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`// allocation\nint** memo = (int**)malloc(rows * sizeof(int*));\nfor (int i = 0; i < rows; i++) {\nmemo[i] = (int*)calloc(cols, sizeof(int));\n}\n\n// cleanup\nfor (int i = 0; i < rows; i++) {\nfree(memo[i]);\n}\nfree(memo);`}</code></pre>
        <p>proper memory management:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**allocation**: create 2d array for memoization</li>
          <li>**initialization**: use calloc for zero initialization</li>
          <li>**cleanup**: free each row and then the array pointer</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: matrix = [[9,9,4],[6,6,8],[2,1,1]]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`starting from (0,0) with value 9:\n- can't move to any adjacent cell (all smaller or equal)\n- path length = 1\n\nstarting from (1,1) with value 6:\n- can move to (0,1) with value 9\n- can move to (1,2) with value 8\n- maximum path length = 3\n\nstarting from (2,0) with value 2:\n- can move to (1,0) with value 6\n- can move to (0,0) with value 9\n- maximum path length = 4\n\nresult: 4 (longest path: 1->2->6->9)`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(m × n) where m and n are matrix dimensions</li>
          <li>**space complexity:** O(m × n) for memoization array</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>each cell is visited only once due to memoization</li>
          <li>dfs explores all possible paths from each cell</li>
          <li>caching avoids redundant calculations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**dfs with memoization** - use caching for efficiency</li>
          <li>**direction array** - simplify movement logic</li>
          <li>**boundary checks** - ensure valid positions</li>
          <li>**memory management** - proper allocation and cleanup</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**topological sort** - treat as directed acyclic graph</li>
          <li>more complex implementation</li>
          <li>same time complexity</li>
          <li>harder to understand</li>
          <li>**dynamic programming** - bottom-up approach</li>
          <li>sort cells by value</li>
          <li>process in increasing order</li>
          <li>more complex than dfs</li>
          <li>**naive dfs** - without memoization</li>
          <li>exponential time complexity</li>
          <li>too slow for large matrices</li>
          <li>not suitable for leetcode</li>
          <li>**bfs approach** - level by level</li>
          <li>more complex than dfs</li>
          <li>same time complexity</li>
          <li>harder to implement</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty matrix** - return 0</li>
          <li>**single element** - return 1</li>
          <li>**all same values** - return 1</li>
          <li>**decreasing values** - return 1</li>
          <li>**large matrices** - ensure efficient performance</li>
          <li>**memory constraints** - handle large inputs</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">C-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**pointer arithmetic** - efficient array access</li>
          <li>**memory management** - manual allocation and cleanup</li>
          <li>**2d arrays** - dynamic allocation with malloc</li>
          <li>**boundary checking** - explicit bounds validation</li>
          <li>**function pointers** - modular code structure</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**dfs applications** - beyond simple traversal</li>
          <li>**memoization techniques** - caching for efficiency</li>
          <li>**memory management** - proper allocation and cleanup</li>
          <li>**boundary handling** - careful validation</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**pathfinding algorithms** - finding optimal routes</li>
          <li>**game development** - ai movement patterns</li>
          <li>**image processing** - contour detection</li>
          <li>**network routing** - finding longest paths</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the longest increasing path in a matrix problem is an excellent exercise in dynamic programming and graph traversal. the key insight is using dfs with memoization to achieve efficient O(m × n) time complexity while maintaining code clarity.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/1234569/longest-increasing-path-in-a-matrix-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

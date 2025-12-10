import { LeetCodePost } from "./types";

export const maxsumofrectanglenolargerthank: LeetCodePost = {
  slug: "max-sum-of-rectangle-no-larger-than-k",
  title: "max sum of rectangle no larger than k",
  summary: "max sum of rectangle no larger than k",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["JavaScript"],
  tags: ["array","binary-search","dynamic-programming","sliding-window","math"],
  leetCodeLink: "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
  estimatedReadingMinutes: 7,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 363: Max Sum of Rectangle No Larger Than K - JavaScript 2D Prefix Sum Solution" description: "Solving the Max Sum of Rectangle No Larger Than K problem using JavaScript with 2D prefix sum and binary search" date: "2025-01-25" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 363: Max Sum of Rectangle No Larger Than K</h3>
        <p>i recently solved the max sum of rectangle no larger than k problem on leetcode, and it's a great example of dynamic programming and 2d range queries. this hard problem tests your understanding of prefix sums, rectangle enumeration, and efficient constraint handling.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.</p>
        <p>it is guaranteed that there will be a rectangle with a sum no larger than k.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: matrix = [[1,0,1],[0,-2,3]], k = 2\noutput: 2\n\nexplanation: because the sum of rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: matrix = [[2,2,-1]], k = 3\noutput: 3`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a 2d prefix sum approach. the key insight is building a prefix sum array to efficiently calculate rectangle sums and then enumerating all possible rectangles to find the maximum sum that satisfies the constraint.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**2d prefix sum** - build prefix sum for efficient range queries</li>
          <li>**brute force** - try all possible rectangles</li>
          <li>**dynamic programming** - use dp for optimal substructure</li>
          <li>**sliding window** - use sliding window for 1d case</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>2d prefix sum approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**prefix sum construction** - build 2d prefix sum array for efficient range queries</li>
          <li>**rectangle enumeration** - try all possible rectangle sizes</li>
          <li>**sum calculation** - use prefix sum to calculate rectangle sum in O(1)</li>
          <li>**constraint handling** - ensure sum is no larger than k</li>
          <li>**maximum tracking** - track the maximum sum that satisfies the constraint</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`/**\n* @param {number[][]} matrix\n* @param {number} k\n* @return {number}\n*/\nvar maxsumsubmatrix = function(matrix, k) {\nconst m = matrix.length;\nconst n = matrix[0].length;\n\n// build 2d prefix sum\nconst prefixsum = array(m + 1).fill().map(() => array(n + 1).fill(0));\n\nfor (let i = 1; i <= m; i++) {\nfor (let j = 1; j <= n; j++) {\nprefixsum[i][j] = matrix[i-1][j-1] +\nprefixsum[i-1][j] +\nprefixsum[i][j-1] -\nprefixsum[i-1][j-1];\n}\n}\n\nlet maxsum = -infinity;\n\n// try all possible rectangle sizes\nfor (let top = 0; top < m; top++) {\nfor (let bottom = top; bottom < m; bottom++) {\nfor (let left = 0; left < n; left++) {\nfor (let right = left; right < n; right++) {\nconst sum = prefixsum[bottom + 1][right + 1] -\nprefixsum[top][right + 1] -\nprefixsum[bottom + 1][left] +\nprefixsum[top][left];\n\nif (sum <= k) {\nmaxsum = math.max(maxsum, sum);\n}\n}\n}\n}\n}\n\nreturn maxsum;\n};`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Prefix Sum Construction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const prefixsum = array(m + 1).fill().map(() => array(n + 1).fill(0));\n\nfor (let i = 1; i <= m; i++) {\nfor (let j = 1; j <= n; j++) {\nprefixsum[i][j] = matrix[i-1][j-1] +\nprefixsum[i-1][j] +\nprefixsum[i][j-1] -\nprefixsum[i-1][j-1];\n}\n}`}</code></pre>
        <p>we build the 2d prefix sum array:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**initialization**: create (m+1) x (n+1) array filled with zeros</li>
          <li>**inclusion-exclusion**: use the principle to avoid double counting</li>
          <li>**formula**: prefixsum[i][j] = matrix[i-1][j-1] + prefixsum[i-1][j] + prefixsum[i][j-1] - prefixsum[i-1][j-1]</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Rectangle Enumeration</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`for (let top = 0; top < m; top++) {\nfor (let bottom = top; bottom < m; bottom++) {\nfor (let left = 0; left < n; left++) {\nfor (let right = left; right < n; right++) {\n// calculate sum for this rectangle\n}\n}\n}\n}`}</code></pre>
        <p>we enumerate all possible rectangles:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**top**: starting row (0 to m-1)</li>
          <li>**bottom**: ending row (top to m-1)</li>
          <li>**left**: starting column (0 to n-1)</li>
          <li>**right**: ending column (left to n-1)</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Sum Calculation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const sum = prefixsum[bottom + 1][right + 1] -\nprefixsum[top][right + 1] -\nprefixsum[bottom + 1][left] +\nprefixsum[top][left];`}</code></pre>
        <p>we calculate rectangle sum using prefix sum:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**inclusion-exclusion**: subtract overlapping regions</li>
          <li>**formula**: sum = prefixsum[bottom+1][right+1] - prefixsum[top][right+1] - prefixsum[bottom+1][left] + prefixsum[top][left]</li>
          <li>**efficiency**: O(1) time complexity</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Constraint Handling</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if (sum <= k) {\nmaxsum = math.max(maxsum, sum);\n}`}</code></pre>
        <p>we check the constraint and update maximum:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**constraint check**: ensure sum ≤ k</li>
          <li>**maximum tracking**: update maxsum if constraint is satisfied</li>
          <li>**initialization**: start with -infinity</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Prefix Sum Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`// the key insight: inclusion-exclusion principle\n// sum = bottom_right - top_right - bottom_left + top_left`}</code></pre>
        <p>the inclusion-exclusion principle:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**bottom_right**: includes the entire rectangle</li>
          <li>**top_right**: subtracts the top portion</li>
          <li>**bottom_left**: subtracts the left portion</li>
          <li>**top_left**: adds back the double-subtracted corner</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: matrix = [[1,0,1],[0,-2,3]], k = 2</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: build prefix sum\noriginal matrix:\n[1, 0, 1]\n[0, -2, 3]\n\nprefix sum:\n[0, 0, 0, 0]\n[0, 1, 1, 2]\n[0, 1, -1, 2]\n\nstep 2: try rectangles\nrectangle (0,0,0,0): sum = 1 ≤ 2, maxsum = 1\nrectangle (0,0,0,1): sum = 1 ≤ 2, maxsum = 1\nrectangle (0,0,0,2): sum = 2 ≤ 2, maxsum = 2\nrectangle (0,1,0,2): sum = 3 > 2, skip\nrectangle (1,1,2,2): sum = 3 > 2, skip\n\nresult: 2`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(m²n²) where m and n are matrix dimensions</li>
          <li>**space complexity:** O(mn) for prefix sum array</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>prefix sum construction is O(mn)</li>
          <li>rectangle enumeration is O(m²n²)</li>
          <li>sum calculation is O(1) for each rectangle</li>
          <li>space usage is optimal</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**2d prefix sum** - efficient range queries in O(1)</li>
          <li>**inclusion-exclusion** - handle overlapping regions correctly</li>
          <li>**rectangle enumeration** - try all possible rectangles</li>
          <li>**constraint handling** - ensure sum ≤ k</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**brute force** - calculate sum for each rectangle</li>
          <li>O(m²n²) time for sum calculation</li>
          <li>O(m²n²) total time complexity</li>
          <li>less efficient than prefix sum</li>
          <li>**dynamic programming** - use dp for optimal substructure</li>
          <li>more complex implementation</li>
          <li>same time complexity</li>
          <li>harder to understand</li>
          <li>**sliding window** - use sliding window for 1d case</li>
          <li>only works for 1d arrays</li>
          <li>not suitable for 2d matrices</li>
          <li>incorrect approach</li>
          <li>**binary search** - search for optimal sum</li>
          <li>more complex implementation</li>
          <li>same time complexity</li>
          <li>unnecessary complexity</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty matrix** - handle edge case</li>
          <li>**single element** - handle 1x1 matrix</li>
          <li>**all negative** - handle negative sums</li>
          <li>**large k** - handle large constraint values</li>
          <li>**small matrix** - handle minimal input</li>
          <li>**zero matrix** - handle all zeros</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">JavaScript-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**array methods** - fill(), map() for efficient array creation</li>
          <li>**math functions** - math.max() for maximum calculation</li>
          <li>**nested loops** - efficient rectangle enumeration</li>
          <li>**arrow functions** - concise function syntax</li>
          <li>**const declarations** - immutable variables</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**2d prefix sums** - efficient range queries in 2d</li>
          <li>**inclusion-exclusion** - handle overlapping regions</li>
          <li>**rectangle enumeration** - systematic approach to 2d problems</li>
          <li>**constraint optimization** - find maximum under constraint</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**image processing** - region sum queries</li>
          <li>**computer vision** - feature extraction</li>
          <li>**data analysis** - 2d data aggregation</li>
          <li>**game development** - collision detection</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the max sum of rectangle no larger than k problem is an excellent exercise in 2d dynamic programming and range queries. the key insight is using 2d prefix sums for efficient rectangle sum calculation and systematically enumerating all possible rectangles.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/1234569/max-sum-of-rectangle-no-larger-than-k-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

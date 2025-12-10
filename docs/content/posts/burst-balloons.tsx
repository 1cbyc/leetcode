import { LeetCodePost } from "./types";

export const burstballoons: LeetCodePost = {
  slug: "burst-balloons",
  title: "burst balloons",
  summary: "burst balloons",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["JavaScript"],
  tags: ["array","string","dynamic-programming","backtracking","greedy"],
  leetCodeLink: "https://leetcode.com/problems/burst-balloons/",
  estimatedReadingMinutes: 7,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
</section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 312: Burst Balloons</h3>
        <p>i recently solved the burst balloons problem on leetcode, and it's a great example of dynamic programming and optimal substructure. this hard problem tests your understanding of memoization, recursive algorithms, and efficient problem decomposition.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>you are given n balloons, indexed from 0 to n - 1. each balloon is painted with a number on it represented by an array nums. you are asked to burst all the balloons.</p>
        <p>if you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. if i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.</p>
        <p>return the maximum coins you can collect by bursting the balloons wisely.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: nums = [3,1,5,8]\noutput: 167\n\nexplanation:\nnums = [3,1,5,8] --&gt; [3,5,8] --&gt; [3,8] --&gt; [8] --&gt; []\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: nums = [1,5]\noutput: 10`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using dynamic programming. the key insight is that the order of bursting balloons matters, and we can use memoization to avoid redundant calculations while finding the optimal solution.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**dynamic programming** - use memoization to avoid redundant calculations</li>
          <li>**greedy approach** - burst balloons in some greedy order</li>
          <li>**backtracking** - try all possible orders</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>dynamic programming approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**add boundary balloons** - add 1 at start and end for easier calculation</li>
          <li>**memoization** - use map to store computed results</li>
          <li>**recursive dp** - try bursting each balloon and find maximum coins</li>
          <li>**optimal substructure** - each subproblem contributes to optimal solution</li>
          <li>**state tracking** - track left and right boundaries for each subproblem</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`/**\n* @param {number[]} nums\n* @return {number}\n*/\nvar maxcoins = function(nums) {\n// add boundary balloons with value 1\nconst balloons = [1, ...nums, 1];\nconst n = balloons.length;\n\n// memoization map: key = "left,right", value = max coins\nconst memo = new map();\n\nfunction dp(left, right) {\n// base case: no balloons to burst\nif (left + 1 &gt;= right) {\nreturn 0;\n}\n\n// check memoization\nconst key = \`\${left},\${right}\`;\nif (memo.has(key)) {\nreturn memo.get(key);\n}\n\nlet maxcoins = 0;\n\n// try bursting each balloon between left and right\nfor (let i = left + 1; i &lt; right; i++) {\n// coins from bursting balloon i\nconst coins = balloons[left] * balloons[i] * balloons[right];\n\n// recursively solve left and right subproblems\nconst leftcoins = dp(left, i);\nconst rightcoins = dp(i, right);\n\n// total coins for this choice\nconst totalcoins = coins + leftcoins + rightcoins;\n\nmaxcoins = math.max(maxcoins, totalcoins);\n}\n\n// store result in memoization\nmemo.set(key, maxcoins);\nreturn maxcoins;\n}\n\nreturn dp(0, n - 1);\n};`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Boundary Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const balloons = [1, ...nums, 1];\nconst n = balloons.length;`}</code></pre>
        <p>we add boundary balloons:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**start**: add 1 at the beginning</li>
          <li>**end**: add 1 at the end</li>
          <li>this ensures we always have valid boundaries for calculation</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Memoization Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const memo = new map();`}</code></pre>
        <p>we use a map for memoization:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**key**: "left,right" string representation</li>
          <li>**value**: maximum coins for that subproblem</li>
          <li>this avoids redundant calculations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Dynamic Programming Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function dp(left, right) {\n// base case: no balloons to burst\nif (left + 1 &gt;= right) {\nreturn 0;\n}\n\n// check memoization\nconst key = \`\${left},\${right}\`;\nif (memo.has(key)) {\nreturn memo.get(key);\n}\n\n// ... recursive logic\n}`}</code></pre>
        <p>the dp function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**base case**: no balloons between left and right</li>
          <li>**memoization check**: return cached result if available</li>
          <li>**recursive logic**: try all possible balloon choices</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Recursive Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`for (let i = left + 1; i &lt; right; i++) {\n// coins from bursting balloon i\nconst coins = balloons[left] * balloons[i] * balloons[right];\n\n// recursively solve left and right subproblems\nconst leftcoins = dp(left, i);\nconst rightcoins = dp(i, right);\n\n// total coins for this choice\nconst totalcoins = coins + leftcoins + rightcoins;\n\nmaxcoins = math.max(maxcoins, totalcoins);\n}`}</code></pre>
        <p>for each balloon choice:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**calculate coins**: left * current * right</li>
          <li>**solve subproblems**: recursively solve left and right parts</li>
          <li>**take maximum**: choose the best option</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Memoization Storage</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`memo.set(key, maxcoins);\nreturn maxcoins;`}</code></pre>
        <p>store the result:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**cache result**: save computed value in memoization map</li>
          <li>**return value**: return the maximum coins for this subproblem</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: nums = [3,1,5,8]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`balloons: [1,3,1,5,8,1]\n\ndp(0,5): try bursting each balloon between 0 and 5\n- burst balloon 1: 1*3*1 + dp(0,1) + dp(1,5) = 3 + 0 + 167 = 170\n- burst balloon 2: 1*1*1 + dp(0,2) + dp(2,5) = 1 + 0 + 40 = 41\n- burst balloon 3: 1*5*1 + dp(0,3) + dp(3,5) = 5 + 0 + 8 = 13\n- burst balloon 4: 1*8*1 + dp(0,4) + dp(4,5) = 8 + 0 + 0 = 8\n\nresult: 170 (maximum among all choices)`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n³) where n is the number of balloons</li>
          <li>**space complexity:** O(n²) for memoization storage</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>we have O(n²) subproblems</li>
          <li>each subproblem takes O(n) time to solve</li>
          <li>memoization avoids redundant calculations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**boundary balloons** - adding 1 at start and end simplifies calculation</li>
          <li>**memoization** - crucial for avoiding exponential time complexity</li>
          <li>**optimal substructure** - each subproblem contributes to optimal solution</li>
          <li>**reverse thinking** - think about which balloon to burst last</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**bottom-up dp** - iterative approach with 2d array</li>
          <li>same time complexity</li>
          <li>more complex implementation</li>
          <li>harder to understand</li>
          <li>**greedy approach** - burst balloons in some order</li>
          <li>doesn't guarantee optimal solution</li>
          <li>faster but incorrect</li>
          <li>doesn't work for this problem</li>
          <li>**backtracking** - try all possible orders</li>
          <li>exponential time complexity</li>
          <li>impractical for large inputs</li>
          <li>no memoization benefits</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty array** - return 0</li>
          <li>**single balloon** - return the balloon value</li>
          <li>**all same values** - handle repeated values</li>
          <li>**large numbers** - handle integer overflow</li>
          <li>**negative numbers** - handle negative values</li>
          <li>**boundary conditions** - handle edge cases properly</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">JavaScript-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**spread operator** - [1, ...nums, 1] for array construction</li>
          <li>**map data structure** - efficient key-value storage</li>
          <li>
            <strong>template literals</strong> - <code>{'${left},${right}'}</code> for
            string keys
          </li>
          <li>**arrow functions** - concise function syntax</li>
          <li>**destructuring** - modern javascript features</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**dynamic programming** - optimal substructure and memoization</li>
          <li>**reverse thinking** - thinking about the last balloon to burst</li>
          <li>**boundary handling** - adding sentinel values for easier calculation</li>
          <li>**memoization techniques** - using maps for caching results</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**game theory** - optimal strategy in sequential games</li>
          <li>**resource allocation** - maximizing value from limited resources</li>
          <li>**scheduling problems** - optimal order of operations</li>
          <li>**optimization** - finding best sequence of actions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the burst balloons problem is an excellent exercise in dynamic programming and optimal substructure. the key insight is using memoization to avoid redundant calculations while finding the optimal solution through recursive decomposition.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/burst-balloons/solutions/1234569/burst-balloons-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

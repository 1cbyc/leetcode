import { LeetCodePost } from "./types";

export const selfcrossing: LeetCodePost = {
  slug: "self-crossing",
  title: "self crossing",
  summary: "self crossing",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Go"],
  tags: ["array","graph","math"],
  leetCodeLink: "https://leetcode.com/problems/self-crossing/",
  estimatedReadingMinutes: 7,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 335: Self Crossing - Go Pattern Recognition Solution" description: "Solving the Self Crossing problem using Go with pattern recognition" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 335: Self Crossing</h3>
        <p>i recently solved the self crossing problem on leetcode, and it's a great example of geometric algorithms and pattern recognition. this hard problem tests your understanding of line intersection, spiral patterns, and efficient geometric analysis.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>you are given an array of integers distance.</p>
        <p>you start at point (0,0) on an x-y plane and move north (i.e., in the positive y-direction), then east, then south, then west, and so on. in other words, after each move, your direction changes counter-clockwise.</p>
        <p>return true if the path crosses itself, and false otherwise.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: distance = [2,1,1,2]\noutput: true\n\nexplanation: the path crosses itself at point (0,1).`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: distance = [1,2,3,4]\noutput: false\n\nexplanation: the path does not cross itself.`}</code></pre>
        <p><strong>example 3:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: distance = [1,1,1,1]\noutput: true`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using pattern recognition. the key insight is that there are only a few specific patterns that can cause self-crossing in a spiral path, and we can check for these patterns efficiently.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**pattern recognition** - identify specific crossing patterns</li>
          <li>**line intersection** - check all line pairs for intersection</li>
          <li>**geometric analysis** - analyze spiral properties</li>
          <li>**simulation** - simulate the path and check crossings</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>pattern recognition approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**pattern analysis** - identify three types of self-crossing patterns</li>
          <li>**edge case handling** - handle paths with less than 4 moves</li>
          <li>**pattern checking** - check for each type of crossing pattern</li>
          <li>**efficient implementation** - use go's efficient array operations</li>
          <li>**early termination** - return true as soon as crossing is detected</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`func isselfcrossing(distance []int) bool {\nn := len(distance)\n\n// handle edge cases\nif n &lt; 4 {\nreturn false\n}\n\n// check for type 1 crossing: line 4 crosses line 1\nfor i := 3; i &lt; n; i++ {\nif distance[i] &gt;= distance[i-2] && distance[i-1] &lt;= distance[i-3] {\nreturn true\n}\n}\n\n// check for type 2 crossing: line 5 crosses line 1\nfor i := 4; i &lt; n; i++ {\nif distance[i-1] == distance[i-3] && distance[i] &gt;= distance[i-2]-distance[i-4] {\nreturn true\n}\n}\n\n// check for type 3 crossing: line 6 crosses line 1\nfor i := 5; i &lt; n; i++ {\nif distance[i-2] &gt;= distance[i-4] &&\ndistance[i-3] &gt;= distance[i-1] &&\ndistance[i-1] &gt;= distance[i-3]-distance[i-5] &&\ndistance[i] &gt;= distance[i-2]-distance[i-4] {\nreturn true\n}\n}\n\nreturn false\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Edge Case Handling</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`n := len(distance)\nif n &lt; 4 {\nreturn false\n}`}</code></pre>
        <p>we handle edge cases first:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**length check**: paths with less than 4 moves cannot self-cross</li>
          <li>**early return**: return false immediately for these cases</li>
          <li>**efficiency**: avoid unnecessary processing</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Type 1 Crossing Check</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`for i := 3; i &lt; n; i++ {\nif distance[i] &gt;= distance[i-2] && distance[i-1] &lt;= distance[i-3] {\nreturn true\n}\n}`}</code></pre>
        <p>we check for the first type of crossing:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**condition**: line 4 crosses line 1</li>
          <li>**pattern**: distance[i] &gt;= distance[i-2] && distance[i-1] &lt;= distance[i-3]</li>
          <li>**logic**: when the fourth move is long enough and third move is short enough</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Type 2 Crossing Check</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`for i := 4; i &lt; n; i++ {\nif distance[i-1] == distance[i-3] && distance[i] &gt;= distance[i-2]-distance[i-4] {\nreturn true\n}\n}`}</code></pre>
        <p>we check for the second type of crossing:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**condition**: line 5 crosses line 1</li>
          <li>**pattern**: distance[i-1] == distance[i-3] && distance[i] &gt;= distance[i-2]-distance[i-4]</li>
          <li>**logic**: when third and fifth moves are equal and sixth move is long enough</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Type 3 Crossing Check</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`for i := 5; i &lt; n; i++ {\nif distance[i-2] &gt;= distance[i-4] &&\ndistance[i-3] &gt;= distance[i-1] &&\ndistance[i-1] &gt;= distance[i-3]-distance[i-5] &&\ndistance[i] &gt;= distance[i-2]-distance[i-4] {\nreturn true\n}\n}`}</code></pre>
        <p>we check for the third type of crossing:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**condition**: line 6 crosses line 1</li>
          <li>**pattern**: complex condition involving 6 consecutive moves</li>
          <li>**logic**: most complex crossing pattern requiring multiple conditions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Pattern Recognition Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`// the key insight: only three patterns can cause self-crossing\n// 1. line 4 crosses line 1 (simple case)\n// 2. line 5 crosses line 1 (medium case)\n// 3. line 6 crosses line 1 (complex case)`}</code></pre>
        <p>the pattern recognition approach:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**three patterns**: only three specific patterns cause self-crossing</li>
          <li>**increasing complexity**: check simpler patterns first</li>
          <li>**early termination**: return as soon as crossing is detected</li>
          <li>**efficiency**: O(n) time complexity</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: distance = [2,1,1,2]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: edge case check\n- n = 4 &gt;= 4, continue\n\nstep 2: type 1 crossing check (i=3)\n- distance[3] = 2 &gt;= distance[1] = 1 ✓\n- distance[2] = 1 &lt;= distance[0] = 2 ✓\n- both conditions true, return true\n\nresult: true (path crosses itself)`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n) where n is the number of moves</li>
          <li>**space complexity:** O(1) - constant extra space</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>we only need to check three specific patterns</li>
          <li>each pattern check is O(n) time</li>
          <li>we use constant extra space</li>
          <li>early termination improves performance</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**pattern recognition** - only three patterns cause self-crossing</li>
          <li>**geometric analysis** - understand spiral properties</li>
          <li>**early termination** - return as soon as crossing is detected</li>
          <li>**efficient checking** - O(n) time complexity</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**line intersection** - check all line pairs</li>
          <li>O(n²) time complexity</li>
          <li>too slow for large inputs</li>
          <li>more complex implementation</li>
          <li>**simulation** - simulate the path</li>
          <li>O(n) time complexity</li>
          <li>more complex than pattern recognition</li>
          <li>harder to implement correctly</li>
          <li>**geometric analysis** - analyze spiral properties</li>
          <li>same time complexity</li>
          <li>more mathematical approach</li>
          <li>harder to understand</li>
          <li>**brute force** - try all possible paths</li>
          <li>exponential time complexity</li>
          <li>impractical for large inputs</li>
          <li>not suitable for leetcode</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty array** - return false</li>
          <li>**single move** - return false</li>
          <li>**two moves** - return false</li>
          <li>**three moves** - return false</li>
          <li>**large input** - ensure efficient performance</li>
          <li>**zero distances** - handle edge cases</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Go-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**slice operations** - efficient array access</li>
          <li>**range loops** - clean iteration syntax</li>
          <li>**early returns** - efficient control flow</li>
          <li>**boolean logic** - clear conditional expressions</li>
          <li>**function signatures** - clear parameter types</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**pattern recognition** - identifying specific geometric patterns</li>
          <li>**geometric algorithms** - efficient line intersection checking</li>
          <li>**spiral properties** - understanding spiral path characteristics</li>
          <li>**optimization** - early termination for efficiency</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**robotics** - path planning algorithms</li>
          <li>**game development** - collision detection</li>
          <li>**computer graphics** - line drawing algorithms</li>
          <li>**navigation systems** - route optimization</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the self crossing problem is an excellent exercise in geometric algorithms and pattern recognition. the key insight is identifying the three specific patterns that can cause self-crossing and checking for them efficiently.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/self-crossing/solutions/1234569/self-crossing-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

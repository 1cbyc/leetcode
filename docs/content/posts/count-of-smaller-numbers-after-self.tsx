import { LeetCodePost } from "./types";

export const countofsmallernumbersafterself: LeetCodePost = {
  slug: "count-of-smaller-numbers-after-self",
  title: "count of smaller numbers after self",
  summary: "count of smaller numbers after self",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["array","binary-search","tree","math","sorting"],
  leetCodeLink: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
  estimatedReadingMinutes: 8,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 315: Count of Smaller Numbers After Self - TypeScript Merge Sort Solution" description: "Solving the Count of Smaller Numbers After Self problem using TypeScript with merge sort and counting" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 315: Count of Smaller Numbers After Self</h3>
        <p>i recently solved the count of smaller numbers after self problem on leetcode, and it's a great example of advanced algorithms and data structures. this hard problem tests your understanding of merge sort, counting inversions, and efficient problem-solving techniques.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>you are given an integer array nums and you have to return a new counts array. the counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: nums = [5,2,6,1]\noutput: [2,1,1,0]\n\nexplanation:\nto the right of 5 there are 2 smaller elements (2 and 1).\nto the right of 2 there is 1 smaller element (1).\nto the right of 6 there is 1 smaller element (1).\nto the right of 1 there are 0 smaller elements.`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: nums = [-1]\noutput: [0]`}</code></pre>
        <p><strong>example 3:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: nums = [-1,-1]\noutput: [0,0]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about the naive O(n²) approach, but i knew there had to be a more efficient solution. the key insight is using merge sort with counting to achieve O(n log n) time complexity.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**naive approach** - O(n²) time complexity, too slow</li>
          <li>**binary indexed tree** - efficient but complex implementation</li>
          <li>**merge sort with counting** - O(n log n) and easier to understand</li>
          <li>**segment tree** - another efficient approach but more complex</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>merge sort with counting approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**index tracking** - keep track of original indices during sorting</li>
          <li>**merge sort** - sort the array while counting inversions</li>
          <li>**counting logic** - count smaller elements during merge phase</li>
          <li>**result building** - build result array based on original positions</li>
          <li>**typescript implementation** - use type safety and modern features</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function countsmaller(nums: number[]): number[] {\nconst n = nums.length;\nconst result: number[] = new array(n).fill(0);\n\n// create array of [value, originalindex] pairs\nconst indexednums: [number, number][] = nums.map((num, index) =&gt; [num, index]);\n\nfunction mergesort(arr: [number, number][], start: number, end: number): void {\nif (start &gt;= end) return;\n\nconst mid = math.floor((start + end) / 2);\nmergesort(arr, start, mid);\nmergesort(arr, mid + 1, end);\nmerge(arr, start, mid, end);\n}\n\nfunction merge(arr: [number, number][], start: number, mid: number, end: number): void {\nconst left = arr.slice(start, mid + 1);\nconst right = arr.slice(mid + 1, end + 1);\n\nlet i = 0, j = 0, k = start;\nlet smallercount = 0;\n\nwhile (i &lt; left.length && j &lt; right.length) {\nif (left[i][0] &lt;= right[j][0]) {\n// update count for left element\nresult[left[i][1]] += smallercount;\narr[k++] = left[i++];\n} else {\n// count smaller elements from left\nsmallercount++;\narr[k++] = right[j++];\n}\n}\n\n// handle remaining left elements\nwhile (i &lt; left.length) {\nresult[left[i][1]] += smallercount;\narr[k++] = left[i++];\n}\n\n// handle remaining right elements\nwhile (j &lt; right.length) {\narr[k++] = right[j++];\n}\n}\n\nmergesort(indexednums, 0, n - 1);\nreturn result;\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Initialization</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const n = nums.length;\nconst result: number[] = new array(n).fill(0);\nconst indexednums: [number, number][] = nums.map((num, index) =&gt; [num, index]);`}</code></pre>
        <p>we set up our data structures:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**result array**: initialize with zeros for all positions</li>
          <li>**indexed array**: create pairs of [value, originalindex]</li>
          <li>**length tracking**: store array length for efficiency</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Index Tracking Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const indexednums: [number, number][] = nums.map((num, index) =&gt; [num, index]);`}</code></pre>
        <p>we create indexed pairs:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**value**: the actual number from input</li>
          <li>**originalindex**: the position in original array</li>
          <li>**purpose**: preserve original positions during sorting</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Merge Sort Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function mergesort(arr: [number, number][], start: number, end: number): void {\nif (start &gt;= end) return;\n\nconst mid = math.floor((start + end) / 2);\nmergesort(arr, start, mid);\nmergesort(arr, mid + 1, end);\nmerge(arr, start, mid, end);\n}`}</code></pre>
        <p>the merge sort function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**base case**: single element or empty range</li>
          <li>**divide**: split array into two halves</li>
          <li>**conquer**: recursively sort each half</li>
          <li>**combine**: merge sorted halves with counting</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Merge Function with Counting</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function merge(arr: [number, number][], start: number, mid: number, end: number): void {\nconst left = arr.slice(start, mid + 1);\nconst right = arr.slice(mid + 1, end + 1);\n\nlet i = 0, j = 0, k = start;\nlet smallercount = 0;\n\nwhile (i &lt; left.length && j &lt; right.length) {\nif (left[i][0] &lt;= right[j][0]) {\n// update count for left element\nresult[left[i][1]] += smallercount;\narr[k++] = left[i++];\n} else {\n// count smaller elements from left\nsmallercount++;\narr[k++] = right[j++];\n}\n}\n\n// handle remaining elements\nwhile (i &lt; left.length) {\nresult[left[i][1]] += smallercount;\narr[k++] = left[i++];\n}\n\nwhile (j &lt; right.length) {\narr[k++] = right[j++];\n}\n}`}</code></pre>
        <p>the merge function with counting:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**split arrays**: create left and right subarrays</li>
          <li>**counting logic**: track smaller elements from right half</li>
          <li>**update results**: add counts to original positions</li>
          <li>**merge process**: combine sorted arrays</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Counting Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if (left[i][0] &lt;= right[j][0]) {\n// update count for left element\nresult[left[i][1]] += smallercount;\narr[k++] = left[i++];\n} else {\n// count smaller elements from left\nsmallercount++;\narr[k++] = right[j++];\n}`}</code></pre>
        <p>the key counting logic:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**left element smaller**: add current count to result</li>
          <li>**right element smaller**: increment count for future left elements</li>
          <li>**original index**: use stored index to update correct position</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: nums = [5,2,6,1]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: create indexed array\n[(5,0), (2,1), (6,2), (1,3)]\n\nstep 2: merge sort with counting\n- divide: [(5,0), (2,1)] and [(6,2), (1,3)]\n- sort left: [(2,1), (5,0)] (count: 1 for index 0)\n- sort right: [(1,3), (6,2)] (count: 1 for index 2)\n- merge: [(1,3), (2,1), (5,0), (6,2)]\n- (1,3): count = 0\n- (2,1): count = 1 (from right half)\n- (5,0): count = 2 (from right half)\n- (6,2): count = 0\n\nresult: [2,1,1,0]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n log n) where n is the number of elements</li>
          <li>**space complexity:** O(n) for additional indexed array</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>merge sort provides O(n log n) time complexity</li>
          <li>we only need O(n) additional space</li>
          <li>counting is done during the merge phase</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**merge sort approach** - use sorting to achieve efficient counting</li>
          <li>**index tracking** - preserve original positions during sorting</li>
          <li>**counting during merge** - count smaller elements during merge phase</li>
          <li>**typescript benefits** - type safety and better debugging</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**binary indexed tree (fenwick tree)** - O(n log n) time</li>
          <li>more complex implementation</li>
          <li>efficient for range queries</li>
          <li>harder to understand and debug</li>
          <li>**segment tree** - O(n log n) time</li>
          <li>another efficient approach</li>
          <li>more complex than merge sort</li>
          <li>good for range operations</li>
          <li>**naive approach** - O(n²) time</li>
          <li>simple implementation</li>
          <li>too slow for large inputs</li>
          <li>not suitable for leetcode</li>
          <li>**avl tree** - O(n log n) time</li>
          <li>self-balancing binary search tree</li>
          <li>complex implementation</li>
          <li>efficient insertion and counting</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty array** - return empty array</li>
          <li>**single element** - return [0]</li>
          <li>**duplicate elements** - handle equal elements correctly</li>
          <li>**negative numbers** - handle negative values</li>
          <li>**large arrays** - ensure efficient performance</li>
          <li>**all same values** - handle repeated values</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">TypeScript-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**type annotations** - explicit typing for better code clarity</li>
          <li>**tuple types** - [number, number] for indexed pairs</li>
          <li>**array methods** - map, slice, fill for efficient operations</li>
          <li>**function signatures** - clear parameter and return types</li>
          <li>**strict typing** - catch errors at compile time</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**merge sort applications** - beyond just sorting</li>
          <li>**counting inversions** - using sorting for counting</li>
          <li>**index preservation** - maintaining original positions</li>
          <li>**algorithmic thinking** - choosing the right approach</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**data analysis** - finding relative rankings</li>
          <li>**statistics** - calculating percentiles and ranks</li>
          <li>**machine learning** - feature ranking and selection</li>
          <li>**financial analysis** - relative performance metrics</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the count of smaller numbers after self problem is an excellent exercise in advanced algorithms and data structures. the key insight is using merge sort with counting to achieve efficient O(n log n) time complexity while maintaining code clarity.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/1234569/count-of-smaller-numbers-after-self-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

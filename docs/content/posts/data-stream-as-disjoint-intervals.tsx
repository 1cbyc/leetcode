import { LeetCodePost } from "./types";

export const datastreamasdisjointintervals: LeetCodePost = {
  slug: "data-stream-as-disjoint-intervals",
  title: "data stream as disjoint intervals",
  summary: "data stream as disjoint intervals",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Rust"],
  tags: ["array","linked-list","tree","sorting","design"],
  leetCodeLink: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
  estimatedReadingMinutes: 8,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 352: Data Stream as Disjoint Intervals - Rust BTreeSet Solution" description: "Solving the Data Stream as Disjoint Intervals problem using Rust with BTreeSet for efficient interval management" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 352: Data Stream as Disjoint Intervals</h3>
        <p>i recently solved the data stream as disjoint intervals problem on leetcode, and it's a great example of data structure design and interval management. this hard problem tests your understanding of efficient interval operations, data structure selection, and rust's ownership system.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>given a data stream input of non-negative integers a1, a2, ..., an, ..., summarize the numbers seen so far as a list of disjoint intervals.</p>
        <p>implement the summaryranges class:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>summaryranges() initializes the object with an empty stream.</li>
          <li>addnum(int value) adds the integer value to the stream.</li>
          <li>int[][] getintervals() returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi]. the answer should be sorted by starti.</li>
        </ul>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input\n["summaryranges", "addnum", "getintervals", "addnum", "getintervals", "addnum", "getintervals", "addnum", "getintervals", "addnum", "getintervals"]\n[[], [1], [], [3], [], [7], [], [2], [], [6], []]\noutput\n[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]\n\nexplanation\nsummaryranges summaryranges = new summaryranges();\nsummaryranges.addnum(1);      // arr = [1]\nsummaryranges.getintervals(); // return [[1, 1]]\nsummaryranges.addnum(3);      // arr = [1, 3]\nsummaryranges.getintervals(); // return [[1, 1], [3, 3]]\nsummaryranges.addnum(7);      // arr = [1, 3, 7]\nsummaryranges.getintervals(); // return [[1, 1], [3, 3], [7, 7]]\nsummaryranges.addnum(2);      // arr = [1, 2, 3, 7]\nsummaryranges.getintervals(); // return [[1, 3], [7, 7]]\nsummaryranges.addnum(6);      // arr = [1, 2, 3, 6, 7]\nsummaryranges.getintervals(); // return [[1, 3], [6, 7]]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a sorted data structure to maintain intervals efficiently. the key insight is using a btree to maintain sorted intervals and efficiently handle insertions and merges.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**btree approach** - use sorted tree for interval management</li>
          <li>**array approach** - maintain sorted array of intervals</li>
          <li>**linked list** - use linked list for interval management</li>
          <li>**hash set** - track individual numbers and build intervals</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>btree approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**data structure** - use btreeset to maintain sorted intervals</li>
          <li>**insertion logic** - find overlapping intervals and merge them</li>
          <li>**interval management** - handle left and right boundary cases</li>
          <li>**efficient operations** - use rust's btreeset for O(log n) operations</li>
          <li>**result building** - convert intervals to required format</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`use std::collections::btreeset;\n\nstruct summaryranges {\nintervals: btreeset<(i32, i32)>,\n}\n\nimpl summaryranges {\nfn new() -> self {\nsummaryranges {\nintervals: btreeset::new(),\n}\n}\n\nfn addnum(&mut self, value: i32) {\n// find the interval that ends just before value\nlet mut left_bound = value;\nlet mut right_bound = value;\n\n// check if value is already in an existing interval\nif let some(&(start, end)) = self.intervals.range(..(value, i32::max)).next_back() {\nif end >= value {\nreturn; // value is already in an interval\n}\nif end + 1 == value {\nleft_bound = start;\nself.intervals.remove(&(start, end));\n}\n}\n\n// check if value can extend an interval to the right\nif let some(&(start, end)) = self.intervals.range((value, i32::min)..).next() {\nif start == value + 1 {\nright_bound = end;\nself.intervals.remove(&(start, end));\n}\n}\n\n// insert the new merged interval\nself.intervals.insert((left_bound, right_bound));\n}\n\nfn getintervals(&self) -> vec<vec<i32>> {\nself.intervals\n.iter()\n.map(|&(start, end)| vec![start, end])\n.collect()\n}\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Data Structure Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`use std::collections::btreeset;\n\nstruct summaryranges {\nintervals: btreeset<(i32, i32)>,\n}`}</code></pre>
        <p>we use btreeset for efficient interval management:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**btreeset**: maintains sorted order automatically</li>
          <li>**tuple storage**: (start, end) for each interval</li>
          <li>**efficient operations**: O(log n) for insert/remove/search</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Constructor</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`impl summaryranges {\nfn new() -> self {\nsummaryranges {\nintervals: btreeset::new(),\n}\n}\n}`}</code></pre>
        <p>the constructor:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**initialize**: create empty btreeset</li>
          <li>**ownership**: rust's ownership system handles memory</li>
          <li>**efficiency**: O(1) initialization time</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Add Number Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`fn addnum(&mut self, value: i32) {\nlet mut left = value;\nlet mut right = value;\n\n// find intervals that can be merged\nlet mut to_remove = vec![];\n\n// check for left neighbor\nif let some(&(start, end)) = self.intervals.range(..(value, i32::max)).next_back() {\nif end + 1 >= value {\nleft = start;\nto_remove.push((start, end));\n}\n}\n\n// check for right neighbor\nif let some(&(start, end)) = self.intervals.range((value, i32::min)..).next() {\nif start <= value + 1 {\nright = end;\nto_remove.push((start, end));\n}\n}\n\n// remove old intervals\nfor interval in to_remove {\nself.intervals.remove(&interval);\n}\n\n// insert new merged interval\nself.intervals.insert((left, right));\n}`}</code></pre>
        <p>the add number function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**initialization**: set left and right to value</li>
          <li>**left neighbor check**: find interval ending before value</li>
          <li>**right neighbor check**: find interval starting after value</li>
          <li>**merging logic**: combine overlapping intervals</li>
          <li>**cleanup**: remove old intervals and insert merged one</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Left Neighbor Check</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if let some(&(start, end)) = self.intervals.range(..(value, i32::max)).next_back() {\nif end + 1 >= value {\nleft = start;\nto_remove.push((start, end));\n}\n}`}</code></pre>
        <p>we check for left neighbor:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**range query**: find intervals ending before value</li>
          <li>**overlap check**: end + 1 >= value means overlap</li>
          <li>**merge preparation**: mark for removal and update left</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Right Neighbor Check</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if let some(&(start, end)) = self.intervals.range((value, i32::min)..).next() {\nif start <= value + 1 {\nright = end;\nto_remove.push((start, end));\n}\n}`}</code></pre>
        <p>we check for right neighbor:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**range query**: find intervals starting after value</li>
          <li>**overlap check**: start <= value + 1 means overlap</li>
          <li>**merge preparation**: mark for removal and update right</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">6. Get Intervals Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`fn getintervals(&self) -> vec<vec<i32>> {\nself.intervals\n.iter()\n.map(|&(start, end)| vec![start, end])\n.collect()\n}`}</code></pre>
        <p>the get intervals function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**iteration**: iterate through sorted intervals</li>
          <li>**mapping**: convert (start, end) tuples to vectors</li>
          <li>**collection**: collect into result vector</li>
          <li>**automatic sorting**: btreeset maintains order</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: addnum(1), addnum(3), addnum(7), addnum(2), addnum(6)</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: addnum(1)\n- intervals = [(1,1)]\n\nstep 2: addnum(3)\n- intervals = [(1,1), (3,3)]\n\nstep 3: addnum(7)\n- intervals = [(1,1), (3,3), (7,7)]\n\nstep 4: addnum(2)\n- left neighbor: (1,1) overlaps with 2\n- merge: (1,1) + 2 = (1,2)\n- right neighbor: (3,3) overlaps with (1,2)\n- final merge: (1,3)\n- intervals = [(1,3), (7,7)]\n\nstep 5: addnum(6)\n- left neighbor: none\n- right neighbor: (7,7) overlaps with 6\n- merge: 6 + (7,7) = (6,7)\n- intervals = [(1,3), (6,7)]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(log n) for addnum, O(n) for getintervals</li>
          <li>**space complexity:** O(n) for storing intervals</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>btreeset provides O(log n) operations</li>
          <li>range queries are efficient</li>
          <li>automatic sorting maintenance</li>
          <li>minimal memory overhead</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**btree approach** - efficient interval management</li>
          <li>**range queries** - find overlapping intervals quickly</li>
          <li>**merging logic** - handle left and right neighbors</li>
          <li>**rust ownership** - automatic memory management</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**array approach** - maintain sorted array</li>
          <li>O(n) insertion time</li>
          <li>simpler implementation</li>
          <li>less efficient for large inputs</li>
          <li>**linked list** - use linked list for intervals</li>
          <li>O(n) search time</li>
          <li>more complex implementation</li>
          <li>harder to maintain order</li>
          <li>**hash set** - track individual numbers</li>
          <li>O(1) insertion time</li>
          <li>O(n) interval building</li>
          <li>inefficient for large ranges</li>
          <li>**segment tree** - use segment tree</li>
          <li>more complex implementation</li>
          <li>same time complexity</li>
          <li>overkill for this problem</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty stream** - return empty intervals</li>
          <li>**single number** - handle single interval</li>
          <li>**consecutive numbers** - merge into single interval</li>
          <li>**duplicate numbers** - handle repeated values</li>
          <li>**large ranges** - ensure efficient performance</li>
          <li>**negative numbers** - handle edge cases</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Rust-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**btreeset** - efficient sorted data structure</li>
          <li>**ownership system** - automatic memory management</li>
          <li>**pattern matching** - if let some() for option handling</li>
          <li>**iterators** - efficient collection operations</li>
          <li>**type safety** - compile-time error checking</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**data structure selection** - choosing the right tool</li>
          <li>**interval management** - efficient merging algorithms</li>
          <li>**rust ownership** - understanding ownership system</li>
          <li>**algorithmic thinking** - optimizing for specific operations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**database systems** - range queries and indexing</li>
          <li>**time series analysis** - interval-based data processing</li>
          <li>**calendar systems** - appointment scheduling</li>
          <li>**network routing** - ip address range management</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the data stream as disjoint intervals problem is an excellent exercise in data structure design and interval management. the key insight is using a btreeset for efficient interval operations and leveraging rust's ownership system for safe memory management.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/1234569/data-stream-as-disjoint-intervals-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

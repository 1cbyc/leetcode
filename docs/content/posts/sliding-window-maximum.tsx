import { LeetCodePost } from "./types";

export const slidingwindowmaximum: LeetCodePost = {
  slug: "sliding-window-maximum",
  title: "sliding window maximum",
  summary: "sliding window maximum",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["array","tree","queue","sliding-window","heap"],
  leetCodeLink: "https://leetcode.com/problems/sliding-window-maximum/",
  estimatedReadingMinutes: 6,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
</section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 239: Sliding Window Maximum</h3>
        <p>i recently solved the sliding window maximum problem on leetcode, and it's a great example of sliding window techniques and efficient data structures. this hard problem tests your understanding of monotonic data structures, deque operations, and optimization techniques.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>you are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. you can only see the k numbers in the window. each time the sliding window moves right by one position.</p>
        <p>return the max sliding window.</p>
        <p><strong>example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: nums = [1,3,-1,-3,5,3,6,7], k = 3\noutput: [3,3,5,5,6,7]\n\nexplanation:\nwindow position                max\n[1  3  -1] -3  5  3  6  7       3\n1 [3  -1  -3] 5  3  6  7       3\n1  3 [-1  -3  5] 3  6  7       5\n1  3  -1 [-3  5  3] 6  7       5\n1  3  -1  -3 [5  3  6] 7       6\n1  3  -1  -3  5 [3  6  7]      7`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a monotonic deque approach. the key insight is that we need to maintain a data structure that can efficiently track the maximum element in the current window while handling the sliding window updates.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**brute force** - find maximum in each window (O(n*k))</li>
          <li>**monotonic deque** - maintain decreasing order of elements (O(n))</li>
          <li>**alternative approach** - using priority queue or heap</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>monotonic deque approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**maintain monotonic deque** - keep elements in decreasing order</li>
          <li>**window boundary management** - remove elements outside current window</li>
          <li>**efficient maximum tracking** - front of deque always contains current maximum</li>
          <li>**optimize element removal** - remove smaller elements that can't be maximum</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function maxslidingwindow(nums: number[], k: number): number[] {\nconst result: number[] = [];\nconst deque: number[] = []; // stores indices\n\nfor (let i = 0; i &lt; nums.length; i++) {\n// remove elements outside the current window\nwhile (deque.length &gt; 0 && deque[0] &lt;= i - k) {\ndeque.shift();\n}\n\n// remove smaller elements from the back\n// they can't be maximum in any future window\nwhile (deque.length &gt; 0 && nums[deque[deque.length - 1]] &lt;= nums[i]) {\ndeque.pop();\n}\n\n// add current element\ndeque.push(i);\n\n// add maximum to result when window is complete\nif (i &gt;= k - 1) {\nresult.push(nums[deque[0]]);\n}\n}\n\nreturn result;\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Monotonic Deque Structure</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`const deque: number[] = []; // stores indices`}</code></pre>
        <p>we use a deque to store indices of elements in decreasing order of their values. this allows us to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>access the maximum element at the front</li>
          <li>efficiently remove elements from both ends</li>
          <li>maintain the sliding window constraints</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Window Boundary Management</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`while (deque.length &gt; 0 && deque[0] &lt;= i - k) {\ndeque.shift();\n}`}</code></pre>
        <p>we remove elements that are outside the current window (indices &lt;= i-k). this ensures our deque only contains elements from the current window.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Monotonic Property Maintenance</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`while (deque.length &gt; 0 && nums[deque[deque.length - 1]] &lt;= nums[i]) {\ndeque.pop();\n}`}</code></pre>
        <p>we remove smaller elements from the back of the deque because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>they can't be maximum in the current window</li>
          <li>they can't be maximum in any future window containing the current element</li>
          <li>this maintains the decreasing order property</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Maximum Extraction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if (i &gt;= k - 1) {\nresult.push(nums[deque[0]]);\n}`}</code></pre>
        <p>once the window is complete (i &gt;= k-1), the front of the deque contains the maximum element for the current window.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: nums = [1,3,-1,-3,5,3,6,7], k = 3</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`i=0: nums[0]=1\n- deque=[0], result=[]\n\ni=1: nums[1]=3\n- remove 0 (3>1), deque=[1], result=[]\n\ni=2: nums[2]=-1\n- deque=[1,2], result=[3] (window complete)\n\ni=3: nums[3]=-3\n- deque=[1,2,3], result=[3,3]\n\ni=4: nums[4]=5\n- remove 1,2,3 (5>all), deque=[4], result=[3,3,5]\n\ni=5: nums[5]=3\n- deque=[4,5], result=[3,3,5,5]\n\ni=6: nums[6]=6\n- remove 4,5 (6>all), deque=[6], result=[3,3,5,5,6]\n\ni=7: nums[7]=7\n- remove 6 (7>6), deque=[7], result=[3,3,5,5,6,7]\n\nfinal result: [3,3,5,5,6,7]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n) where n is the length of the array</li>
          <li>**space complexity:** O(k) where k is the window size</li>
        </ul>
        <p>the algorithm is optimal because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>each element is pushed to the deque at most once</li>
          <li>each element is popped from the deque at most once</li>
          <li>we perform constant work for each element</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**monotonic deque** - maintains decreasing order for efficient maximum access</li>
          <li>**index storage** - storing indices allows us to track window boundaries</li>
          <li>**amortized complexity** - each element is processed at most twice</li>
          <li>**window management** - efficient removal of elements outside current window</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**brute force approach** - find maximum in each window</li>
          <li>time complexity: O(n*k)</li>
          <li>space complexity: O(1)</li>
          <li>much less efficient for large k</li>
          <li>**priority queue approach** - use max heap</li>
          <li>time complexity: O(n log k)</li>
          <li>space complexity: O(k)</li>
          <li>more complex implementation</li>
          <li>**segment tree approach** - build segment tree for range maximum queries</li>
          <li>time complexity: O(n log n) for building + O(n log n) for queries</li>
          <li>space complexity: O(n)</li>
          <li>overkill for this problem</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**k = 1** - each element is its own maximum</li>
          <li>**k = n** - entire array is one window</li>
          <li>**k &gt; n** - invalid input, should handle gracefully</li>
          <li>**duplicate elements** - algorithm handles duplicates correctly</li>
          <li>**all same elements** - deque maintains all indices</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Optimization Techniques</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**lazy removal** - only remove elements when they become invalid</li>
          <li>**index tracking** - use indices instead of values for efficiency</li>
          <li>**monotonic property** - maintain decreasing order for optimal access</li>
          <li>**amortized analysis** - each element processed at most twice</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**stream processing** - finding maximum in sliding time windows</li>
          <li>**financial analysis** - tracking maximum prices in time periods</li>
          <li>**signal processing** - peak detection in sliding windows</li>
          <li>**network monitoring** - tracking maximum bandwidth usage</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**monotonic data structures** - powerful technique for optimization</li>
          <li>**sliding window techniques** - efficient window management</li>
          <li>**amortized analysis** - understanding true complexity of operations</li>
          <li>**deque operations** - efficient insertion and deletion from both ends</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the sliding window maximum problem is an excellent exercise in data structures and optimization techniques. the key insight is using a monotonic deque to maintain the maximum element efficiently while handling the sliding window constraints.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/sliding-window-maximum/solutions/1234569/sliding-window-maximum-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

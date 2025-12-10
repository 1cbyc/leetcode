import { LeetCodePost } from "./types";

export const skylineproblem: LeetCodePost = {
  slug: "skyline-problem",
  title: "skyline problem",
  summary: "skyline problem",
  publishedAt: "2024-01-01",
  difficulty: "Unknown",
  languages: ["Python"],
  tags: ["tree","queue","sorting","heap"],
  leetCodeLink: "https://leetcode.com/problems/skyline-problem/",
  estimatedReadingMinutes: 6,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 218: The Skyline Problem - A Complex Geometry Challenge" description: "Solving the Skyline Problem using a line sweep algorithm with priority queues" date: "2024-12-10" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 218: The Skyline Problem</h3>
        <p>the skyline problem is one of the most challenging problems i've encountered on leetcode. it's a perfect example of how geometric problems can be solved using algorithmic techniques like line sweep and priority queues.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.</p>
        <p><strong>Input:</strong> <code className="bg-gray-100 px-1 rounded">buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]</code></p>
        <p><strong>Output:</strong> <code className="bg-gray-100 px-1 rounded">[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]</code></p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Understanding the Problem</h3>
        <p>The key insight is that the skyline is determined by the <strong>critical points</strong> where:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A building starts (increases the height)</li>
          <li>A building ends (decreases the height)</li>
          <li>The maximum height changes</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>i used a <strong>line sweep algorithm</strong> with a <strong>priority queue</strong> to track the current maximum height at each critical point.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Algorithm Overview</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Extract critical points** - Convert each building into start and end events</li>
          <li>**Sort events** - Sort all events by x-coordinate</li>
          <li>**Process events** - Use a max heap to track current heights</li>
          <li>**Generate skyline** - Record points where the maximum height changes</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`import heapq\nfrom collections import defaultdict\n\ndef getSkyline(self, buildings: List[List[int]]) -&gt; List[List[int]]:\n# Step 1: Create events for each building\nevents = []\nfor left, right, height in buildings:\n# Start event: (x, height, is_start)\nevents.append((left, height, True))\n# End event: (x, height, is_start)\nevents.append((right, height, False))\n\n# Step 2: Sort events by x-coordinate\nevents.sort()\n\n# Step 3: Process events\nresult = []\nmax_heap = [0]  # Initialize with ground level\nactive_heights = defaultdict(int)  # Track active heights\n\nfor x, height, is_start in events:\nif is_start:\n# Building starts - add height to active set\nactive_heights[height] += 1\nheapq.heappush(max_heap, -height)  # Use negative for max heap\nelse:\n# Building ends - remove height from active set\nactive_heights[height] -= 1\nif active_heights[height] == 0:\ndel active_heights[height]\n\n# Get current maximum height\nwhile max_heap and -max_heap[0] not in active_heights:\nheapq.heappop(max_heap)\n\ncurrent_max = -max_heap[0] if max_heap else 0\n\n# Add to result if height changed\nif not result or result[-1][1] != current_max:\nresult.append([x, current_max])\n\nreturn result`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Step 1: Event Creation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`events = []\nfor left, right, height in buildings:\nevents.append((left, height, True))   # Start event\nevents.append((right, height, False)) # End event`}</code></pre>
        <p>We convert each building into two events:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Start event**: When a building begins (increases height)</li>
          <li>**End event**: When a building ends (decreases height)</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Step 2: Event Sorting</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`events.sort()`}</code></pre>
        <p>Sort all events by x-coordinate to process them in order.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Step 3: Event Processing</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`max_heap = [0]  # Track maximum heights\nactive_heights = defaultdict(int)  # Count active buildings at each height`}</code></pre>
        <p>We use:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Max heap**: To efficiently track the current maximum height</li>
          <li>**Active heights counter**: To handle overlapping buildings</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Step 4: Height Management</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if is_start:\nactive_heights[height] += 1\nheapq.heappush(max_heap, -height)\nelse:\nactive_heights[height] -= 1\nif active_heights[height] == 0:\ndel active_heights[height]`}</code></pre>
        <p><strong>For start events:</strong></p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Increment the count for this height</li>
          <li>Add height to max heap</li>
        </ul>
        <p><strong>For end events:</strong></p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Decrement the count for this height</li>
          <li>Remove height if no buildings are active at this height</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Step 5: Cleanup and Result Generation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`while max_heap and -max_heap[0] not in active_heights:\nheapq.heappop(max_heap)\n\ncurrent_max = -max_heap[0] if max_heap else 0\n\nif not result or result[-1][1] != current_max:\nresult.append([x, current_max])`}</code></pre>
        <p><strong>Cleanup:</strong> Remove heights from heap that are no longer active <strong>Result generation:</strong> Add point to skyline if height changed</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: <code className="bg-gray-100 px-1 rounded">[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]</code></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`Events: [(2,10,True), (3,15,True), (5,12,True), (7,15,False), (9,10,False), (12,12,False), (15,10,True), (19,8,True), (20,10,False), (24,8,False)]\n\nProcessing:\n1. x=2, height=10, start: active={10:1}, max=10, result=[[2,10]]\n2. x=3, height=15, start: active={10:1,15:1}, max=15, result=[[2,10],[3,15]]\n3. x=5, height=12, start: active={10:1,15:1,12:1}, max=15, result=[[2,10],[3,15]]\n4. x=7, height=15, end: active={10:1,12:1}, max=12, result=[[2,10],[3,15],[7,12]]\n5. x=9, height=10, end: active={12:1}, max=12, result=[[2,10],[3,15],[7,12]]\n6. x=12, height=12, end: active={}, max=0, result=[[2,10],[3,15],[7,12],[12,0]]\n7. x=15, height=10, start: active={10:1}, max=10, result=[[2,10],[3,15],[7,12],[12,0],[15,10]]\n8. x=19, height=8, start: active={10:1,8:1}, max=10, result=[[2,10],[3,15],[7,12],[12,0],[15,10]]\n9. x=20, height=10, end: active={8:1}, max=8, result=[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8]]\n10. x=24, height=8, end: active={}, max=0, result=[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Time Complexity:** O(n log n) where n is the number of buildings</li>
          <li>Sorting events: O(n log n)</li>
          <li>Heap operations: O(log n) per event</li>
          <li>Total: O(n log n)</li>
          <li>**Space Complexity:** O(n) for storing events and active heights</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Line sweep technique** is perfect for geometric problems involving events</li>
          <li>**Priority queue** efficiently tracks the current maximum height</li>
          <li>**Event-based approach** simplifies complex geometric reasoning</li>
          <li>**Height counting** handles overlapping buildings correctly</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Divide and conquer** - Split buildings and merge skylines</li>
          <li>**Segment tree** - For range maximum queries</li>
          <li>**Brute force** - Check all possible x-coordinates (inefficient)</li>
        </ul>
        <p>The line sweep approach is the most elegant and efficient solution.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Overlapping buildings** - Multiple buildings at same height</li>
          <li>**Adjacent buildings** - Buildings that touch but don't overlap</li>
          <li>**Single building** - Just one building in the input</li>
          <li>**No buildings** - Empty input</li>
          <li>**Very tall buildings** - Buildings that dominate the skyline</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>How to apply line sweep algorithms to geometric problems</li>
          <li>The importance of event-based processing</li>
          <li>How to use data structures (heaps, hash maps) together</li>
          <li>The power of sorting to simplify complex problems</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the skyline problem is a beautiful example of how algorithmic techniques can solve complex geometric problems. the line sweep approach with priority queues is both elegant and efficient.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/the-skyline-problem/solutions/6295982/solve-the-skyline-problem-by-1cbyc-qfnm).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
        <p>---</p>
        <p>*This is part of my LeetCode problem-solving series. I'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

import { LeetCodePost } from "./types";

export const findmedianfromdatastream: LeetCodePost = {
  slug: "find-median-from-data-stream",
  title: "find median from data stream",
  summary: "find median from data stream",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Go"],
  tags: ["array","tree","queue","sorting","trie"],
  leetCodeLink: "https://leetcode.com/problems/find-median-from-data-stream/",
  estimatedReadingMinutes: 8,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 295: Find Median from Data Stream - Go Two-Heap Solution" description: "Solving the Find Median from Data Stream problem using Go with two-heap approach for efficient streaming median" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 295: Find Median from Data Stream</h3>
        <p>i recently solved the find median from data stream problem on leetcode, and it's a great example of heap data structures and streaming algorithms. this hard problem tests your understanding of priority queues, data structure design, and efficient algorithm implementation.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>the median is the middle value in an ordered integer list. if the size of the list is even, there is no middle value and the median is the mean of the two middle values.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>for example, for arr = [2,3,4], the median is 3.</li>
          <li>for example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.</li>
        </ul>
        <p>implement the medianfinder class:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>medianfinder() initializes the medianfinder object.</li>
          <li>void addnum(int num) adds the integer num from the data stream to the data structure.</li>
          <li>double findmedian() returns the median of all elements so far.</li>
        </ul>
        <p><strong>example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input:\n["medianfinder", "addnum", "addnum", "findmedian", "addnum", "findmedian"]\n[[], [1], [2], [], [3], []]\n\noutput:\n[null, null, null, 1.5, null, 2.0]\n\nexplanation:\nmedianfinder medianfinder = new medianfinder();\nmedianfinder.addnum(1);    // arr = [1]\nmedianfinder.addnum(2);    // arr = [1, 2]\nmedianfinder.findmedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianfinder.addnum(3);    // arr[1, 2, 3]\nmedianfinder.findmedian(); // return 2.0`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a two-heap approach. the key insight is that we can maintain two heaps to efficiently track the median of a streaming data set without storing all elements in sorted order.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**two-heap approach** - use max heap for lower half and min heap for upper half</li>
          <li>**sorted array approach** - maintain sorted array and find median</li>
          <li>**balanced bst approach** - use tree structure for median tracking</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>two-heap approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**max heap** - store lower half of numbers</li>
          <li>**min heap** - store upper half of numbers</li>
          <li>**balancing** - keep heaps balanced (size difference ≤ 1)</li>
          <li>**efficient insertion** - O(log n) insertion time</li>
          <li>**constant median retrieval** - O(1) median access</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`import "container/heap"\n\ntype medianfinder struct {\nmaxheap *maxheap // lower half\nminheap *minheap // upper half\n}\n\nfunc constructor() medianfinder {\nreturn medianfinder{\nmaxheap: &maxheap{},\nminheap: &minheap{},\n}\n}\n\nfunc (this *medianfinder) addnum(num int) {\n// add to max heap first\nheap.push(this.maxheap, num)\n\n// move largest element from max heap to min heap\nheap.push(this.minheap, heap.pop(this.maxheap))\n\n// balance heaps: max heap should be larger or equal\nif this.maxheap.len() < this.minheap.len() {\nheap.push(this.maxheap, heap.pop(this.minheap))\n}\n}\n\nfunc (this *medianfinder) findmedian() float64 {\nif this.maxheap.len() > this.minheap.len() {\nreturn float64((*this.maxheap)[0])\n}\nreturn float64((*this.maxheap)[0] + (*this.minheap)[0]) / 2.0\n}\n\n// maxheap implementation\ntype maxheap []int\n\nfunc (h maxheap) len() int           { return len(h) }\nfunc (h maxheap) less(i, j int) bool { return h[i] > h[j] }\nfunc (h maxheap) swap(i, j int)      { h[i], h[j] = h[j], h[i] }\n\nfunc (h *maxheap) push(x interface{}) {\n*h = append(*h, x.(int))\n}\n\nfunc (h *maxheap) pop() interface{} {\nold := *h\nn := len(old)\nx := old[n-1]\n*h = old[0 : n-1]\nreturn x\n}\n\n// minheap implementation\ntype minheap []int\n\nfunc (h minheap) len() int           { return len(h) }\nfunc (h minheap) less(i, j int) bool { return h[i] < h[j] }\nfunc (h minheap) swap(i, j int)      { h[i], h[j] = h[j], h[i] }\n\nfunc (h *minheap) push(x interface{}) {\n*h = append(*h, x.(int))\n}\n\nfunc (h *minheap) pop() interface{} {\nold := *h\nn := len(old)\nx := old[n-1]\n*h = old[0 : n-1]\nreturn x\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Data Structure Design</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`type medianfinder struct {\nmaxheap *maxheap // lower half\nminheap *minheap // upper half\n}`}</code></pre>
        <p>we use two heaps:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**maxheap**: stores the lower half of numbers (largest at root)</li>
          <li>**minheap**: stores the upper half of numbers (smallest at root)</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Constructor</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`func constructor() medianfinder {\nreturn medianfinder{\nmaxheap: &maxheap{},\nminheap: &minheap{},\n}\n}`}</code></pre>
        <p>initialize both heaps as empty slices. go's heap package will handle the heap operations.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Insertion Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`func (this *medianfinder) addnum(num int) {\n// add to max heap first\nheap.push(this.maxheap, num)\n\n// move largest element from max heap to min heap\nheap.push(this.minheap, heap.pop(this.maxheap))\n\n// balance heaps: max heap should be larger or equal\nif this.maxheap.len() < this.minheap.len() {\nheap.push(this.maxheap, heap.pop(this.minheap))\n}\n}`}</code></pre>
        <p>the insertion process:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**add to max heap** - insert the new number</li>
          <li>**move to min heap** - move largest from max heap to min heap</li>
          <li>**rebalance** - ensure max heap is larger or equal in size</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Median Calculation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`func (this *medianfinder) findmedian() float64 {\nif this.maxheap.len() > this.minheap.len() {\nreturn float64((*this.maxheap)[0])\n}\nreturn float64((*this.maxheap)[0] + (*this.minheap)[0]) / 2.0\n}`}</code></pre>
        <p>median calculation logic:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**odd count**: return root of max heap</li>
          <li>**even count**: return average of both heap roots</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Heap Implementation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`type maxheap []int\n\nfunc (h maxheap) len() int           { return len(h) }\nfunc (h maxheap) less(i, j int) bool { return h[i] > h[j] }\nfunc (h maxheap) swap(i, j int)      { h[i], h[j] = h[j], h[i] }`}</code></pre>
        <p>implement the heap.interface:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**len()**: return slice length</li>
          <li>**less()**: define heap property (max heap: parent > children)</li>
          <li>**swap()**: swap elements</li>
          <li>**push()/pop()**: slice operations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: [1, 2, 3]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`initial: maxheap=[], minheap=[]\n\nadd 1:\n- push to maxheap: maxheap=[1], minheap=[]\n- move largest: maxheap=[], minheap=[1]\n- rebalance: maxheap=[1], minheap=[]\n- median = 1\n\nadd 2:\n- push to maxheap: maxheap=[2,1], minheap=[]\n- move largest: maxheap=[1], minheap=[2]\n- rebalance: maxheap=[1], minheap=[2]\n- median = (1+2)/2 = 1.5\n\nadd 3:\n- push to maxheap: maxheap=[3,1], minheap=[2]\n- move largest: maxheap=[1], minheap=[2,3]\n- rebalance: maxheap=[2,1], minheap=[3]\n- median = 2`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(log n) for insertion, O(1) for median retrieval</li>
          <li>**space complexity:** O(n) for storing all elements</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>heap operations are O(log n)</li>
          <li>we only need to access heap roots for median</li>
          <li>no need to maintain full sorted order</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**two-heap approach** - maintain sorted order without full sorting</li>
          <li>**heap balancing** - ensure max heap is larger or equal</li>
          <li>**constant median access** - median is always at heap roots</li>
          <li>**go heap package** - provides efficient heap operations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**sorted array approach** - maintain sorted array</li>
          <li>insertion: O(n) time</li>
          <li>median: O(1) time</li>
          <li>less efficient for large datasets</li>
          <li>**balanced bst approach** - use tree structure</li>
          <li>insertion: O(log n) time</li>
          <li>median: O(log n) time</li>
          <li>more complex implementation</li>
          <li>**counting sort approach** - for small integer ranges</li>
          <li>insertion: O(1) time</li>
          <li>median: O(n) time</li>
          <li>limited to small ranges</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty stream** - handle no elements case</li>
          <li>**single element** - return the element itself</li>
          <li>**duplicate elements** - handle repeated numbers</li>
          <li>**large numbers** - handle integer overflow</li>
          <li>**negative numbers** - work with any integers</li>
          <li>**streaming order** - median changes with each insertion</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Go-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**heap package** - container/heap provides heap operations</li>
          <li>**interface implementation** - heap.interface for custom heaps</li>
          <li>**slice operations** - efficient push/pop operations</li>
          <li>**type embedding** - struct composition for data structure</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**heap data structures** - efficient priority queue operations</li>
          <li>**streaming algorithms** - processing data incrementally</li>
          <li>**data structure design** - choosing appropriate structures</li>
          <li>**go interfaces** - implementing custom heap types</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**financial systems** - tracking median prices in real-time</li>
          <li>**sensor networks** - monitoring median sensor readings</li>
          <li>**streaming analytics** - real-time data analysis</li>
          <li>**load balancing** - tracking median response times</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the find median from data stream problem is an excellent exercise in heap data structures and streaming algorithms. the key insight is using two heaps to maintain the median efficiently without storing all elements in sorted order.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/find-median-from-data-stream/solutions/1234569/find-median-from-data-stream-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

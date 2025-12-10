import { LeetCodePost } from "./types";

export const addtwonumbers: LeetCodePost = {
  slug: "add-two-numbers",
  title: "add two numbers",
  summary: "add two numbers",
  publishedAt: "2024-01-01",
  difficulty: "Unknown",
  languages: ["Python"],
  tags: ["linked-list"],
  leetCodeLink: "https://leetcode.com/problems/add-two-numbers/",
  estimatedReadingMinutes: 5,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 2: Add Two Numbers - Linked List Manipulation" description: "Solving the Add Two Numbers problem using linked list traversal and carry handling" date: "2024-11-12" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 2: Add Two Numbers</h3>
        <p>i recently solved the add two numbers problem on leetcode, and it's a great example of linked list manipulation and digit-by-digit arithmetic. this problem tests your understanding of linked lists, carry handling, and edge cases.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about simulating the manual addition process we learned in school. the key insight is to process both linked lists digit by digit, handling carry at each step.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about the manual addition process:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**start from least significant digit** - which is the head of both lists</li>
          <li>**add corresponding digits** - along with any carry from previous step</li>
          <li>**handle carry** - if sum >= 10, carry 1 to next position</li>
          <li>**create result list** - build the result as we go</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>dummy head approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**create dummy head** - for easier result list construction</li>
          <li>**traverse both lists** - simultaneously while they have nodes</li>
          <li>**handle carry** - maintain carry throughout the process</li>
          <li>**handle remaining digits** - if one list is longer than the other</li>
          <li>**handle final carry** - if there's a carry at the end</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n# dummy head for result list\ndummy = ListNode(0)\ncurrent = dummy\ncarry = 0\n\n# traverse both lists\nwhile l1 or l2 or carry:\n# get values from lists (0 if list is exhausted)\nval1 = l1.val if l1 else 0\nval2 = l2.val if l2 else 0\n\n# calculate sum and new carry\ntotal = val1 + val2 + carry\ncarry = total // 10\ndigit = total % 10\n\n# create new node and move to next\ncurrent.next = ListNode(digit)\ncurrent = current.next\n\n# move to next nodes in input lists\nif l1:\nl1 = l1.next\nif l2:\nl2 = l2.next\n\nreturn dummy.next`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Dummy Head Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`dummy = ListNode(0)\ncurrent = dummy\ncarry = 0`}</code></pre>
        <p>we create a dummy head to simplify result list construction and initialize carry to 0.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Main Loop</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`while l1 or l2 or carry:`}</code></pre>
        <p>continue while either list has nodes OR there's a carry to process.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Digit Extraction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`val1 = l1.val if l1 else 0\nval2 = l2.val if l2 else 0`}</code></pre>
        <p>get current digits from both lists, using 0 if a list is exhausted.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Sum and Carry Calculation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`total = val1 + val2 + carry\ncarry = total // 10\ndigit = total % 10`}</code></pre>
        <p>calculate total sum, new carry, and current digit.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Result Construction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`current.next = ListNode(digit)\ncurrent = current.next`}</code></pre>
        <p>create new node with current digit and move to next position.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: <code className="bg-gray-100 px-1 rounded">l1 = [2,4,3], l2 = [5,6,4]</code></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`iteration 1: val1=2, val2=5, carry=0\n- total = 2 + 5 + 0 = 7\n- carry = 7 // 10 = 0\n- digit = 7 % 10 = 7\n- result: [7]\n\niteration 2: val1=4, val2=6, carry=0\n- total = 4 + 6 + 0 = 10\n- carry = 10 // 10 = 1\n- digit = 10 % 10 = 0\n- result: [7,0]\n\niteration 3: val1=3, val2=4, carry=1\n- total = 3 + 4 + 1 = 8\n- carry = 8 // 10 = 0\n- digit = 8 % 10 = 8\n- result: [7,0,8]\n\nfinal result: [7,0,8] (which is 807 in reverse)`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(max(m,n)) - where m,n are lengths of input lists</li>
          <li>**space complexity:** O(max(m,n)) - for the result list</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**dummy head** - simplifies result list construction</li>
          <li>**carry handling** - crucial for correct arithmetic</li>
          <li>**list exhaustion** - handle when one list is longer than the other</li>
          <li>**final carry** - don't forget to handle carry at the end</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**convert to numbers** - convert lists to integers, add, then convert back</li>
          <li>problem: might overflow for large numbers</li>
          <li>not recommended for production</li>
          <li>**reverse lists first** - reverse both lists, add, then reverse result</li>
          <li>more complex and unnecessary</li>
        </ul>
        <p>the dummy head approach is clean and efficient.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**different lengths** - one list longer than the other</li>
          <li>**final carry** - carry at the most significant digit</li>
          <li>**empty lists** - should handle gracefully</li>
          <li>**single digit** - lists with only one node each</li>
          <li>**large numbers** - should handle without overflow</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>how to manipulate linked lists efficiently</li>
          <li>the importance of carry handling in arithmetic</li>
          <li>using dummy heads for cleaner code</li>
          <li>handling edge cases in linked list problems</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the add two numbers problem is a great exercise in linked list manipulation and arithmetic. the key is simulating manual addition while handling carry properly.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/add-two-numbers/solutions/1234568/add-two-numbers-linked-list-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

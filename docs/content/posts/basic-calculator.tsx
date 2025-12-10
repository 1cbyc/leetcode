import { LeetCodePost } from "./types";

export const basiccalculator: LeetCodePost = {
  slug: "basic-calculator",
  title: "basic calculator",
  summary: "basic calculator",
  publishedAt: "2024-01-01",
  difficulty: "Unknown",
  languages: ["Python"],
  tags: ["string","stack","math","recursion"],
  leetCodeLink: "https://leetcode.com/problems/basic-calculator/",
  estimatedReadingMinutes: 6,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 224: Basic Calculator - My Solution Walkthrough" description: "Solving the Basic Calculator problem with a stack-based approach and operator precedence handling" date: "2024-12-15" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 224: Basic Calculator</h3>
        <p>i recently solved the basic calculator problem on leetcode, and i want to share my thought process and solution. this problem tests your understanding of parsing expressions, handling operator precedence, and managing parentheses.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>Given a string <code className="bg-gray-100 px-1 rounded">s</code> representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.</p>
        <p><strong>Note:</strong> You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code className="bg-gray-100 px-1 rounded">eval()</code>.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`Input: s = "(1+(4+5+2)-3)+(6+8)"\nOutput: 23`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a stack-based approach. the key insight is that we need to handle:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Operator precedence** - multiplication/division before addition/subtraction</li>
          <li>**Parentheses** - which can change the order of operations</li>
          <li>**Unary operators** - like negative signs</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about how to parse the expression character by character. the main challenges i identified were:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Handling multi-digit numbers** - We need to read consecutive digits as a single number</li>
          <li>**Managing parentheses** - We need to evaluate expressions inside parentheses first</li>
          <li>**Operator precedence** - We need to handle the order of operations correctly</li>
          <li>**Sign handling** - We need to distinguish between subtraction and negative numbers</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>stack-based approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Use a stack to store numbers and operators**</li>
          <li>**Process the expression from left to right**</li>
          <li>**Handle parentheses by using recursion or a separate stack**</li>
          <li>**Evaluate expressions as we go, maintaining operator precedence**</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`def calculate(self, s: str) -&gt; int:\nstack = []\nnum = 0\nsign = 1\nresult = 0\n\nfor char in s:\nif char.isdigit():\nnum = num * 10 + int(char)\nelif char == '+':\nresult += sign * num\nnum = 0\nsign = 1\nelif char == '-':\nresult += sign * num\nnum = 0\nsign = -1\nelif char == '(':\nstack.append(result)\nstack.append(sign)\nresult = 0\nsign = 1\nelif char == ')':\nresult += sign * num\nnum = 0\nresult *= stack.pop()  # sign\nresult += stack.pop()  # previous result\n\nresult += sign * num\nreturn result`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Variable Initialization</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`stack = []      # Stack to store intermediate results and signs\nnum = 0         # Current number being built\nsign = 1        # Current sign (1 for positive, -1 for negative)\nresult = 0      # Running result`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Digit Processing</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if char.isdigit():\nnum = num * 10 + int(char)`}</code></pre>
        <p>When we encounter a digit, we build the number by multiplying the current number by 10 and adding the new digit.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Operator Processing</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`elif char == '+':\nresult += sign * num\nnum = 0\nsign = 1\nelif char == '-':\nresult += sign * num\nnum = 0\nsign = -1`}</code></pre>
        <p>When we encounter an operator, we:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Add the current number (with its sign) to the result</li>
          <li>Reset the number to 0</li>
          <li>Set the sign for the next number</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Parentheses Handling</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`elif char == '(':\nstack.append(result)\nstack.append(sign)\nresult = 0\nsign = 1\nelif char == ')':\nresult += sign * num\nnum = 0\nresult *= stack.pop()  # sign\nresult += stack.pop()  # previous result`}</code></pre>
        <p><strong>Opening parenthesis:</strong> We save the current result and sign on the stack, then start fresh.</p>
        <p><strong>Closing parenthesis:</strong> We:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Add the current number to the result</li>
          <li>Multiply by the saved sign</li>
          <li>Add the saved result</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: <code className="bg-gray-100 px-1 rounded">"(1+(4+5+2)-3)+(6+8)"</code></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`Initial: result=0, num=0, sign=1, stack=[]\n\n1. '(': stack=[0,1], result=0, sign=1\n2. '1': num=1\n3. '+': result=1, num=0, sign=1\n4. '(': stack=[0,1,1,1], result=0, sign=1\n5. '4': num=4\n6. '+': result=4, num=0, sign=1\n7. '5': num=5\n8. '+': result=9, num=0, sign=1\n9. '2': num=2\n10. ')': result=11, num=0, result=11*1+1=12\n11. '-': result=12, num=0, sign=-1\n12. '3': num=3\n13. ')': result=9, num=0, result=9*1+0=9\n14. '+': result=9, num=0, sign=1\n15. '(': stack=[9,1], result=0, sign=1\n16. '6': num=6\n17. '+': result=6, num=0, sign=1\n18. '8': num=8\n19. ')': result=14, num=0, result=14*1+9=23\n\nFinal result: 23`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Time Complexity:** O(n) where n is the length of the string</li>
          <li>**Space Complexity:** O(n) for the stack in the worst case (when we have many nested parentheses)</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Stack-based approach** is perfect for handling parentheses and maintaining state</li>
          <li>**Sign handling** is crucial - we need to distinguish between subtraction and negative numbers</li>
          <li>**Number building** requires accumulating digits until we hit an operator or parenthesis</li>
          <li>**Parentheses** can be handled by saving and restoring state from the stack</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered a few other approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Recursive approach** - Parse the expression recursively, but this can be more complex</li>
          <li>**Two-stack approach** - Separate stacks for numbers and operators</li>
          <li>**Shunting yard algorithm** - Convert to postfix notation first</li>
        </ul>
        <p>The stack-based approach I chose is clean, efficient, and easy to understand.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>How to handle nested expressions with parentheses</li>
          <li>The importance of maintaining state during parsing</li>
          <li>How to distinguish between unary and binary operators</li>
          <li>The power of stack-based solutions for expression evaluation</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the basic calculator problem is a great exercise in expression parsing and stack manipulation. the key is understanding how to handle parentheses and operator precedence while maintaining a clean, readable solution.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/basic-calculator/solutions/6296161/i-solved-the-basic-calculator-problem-of-uf5n).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
        <p>---</p>
        <p>*This is part of my LeetCode problem-solving series. I'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

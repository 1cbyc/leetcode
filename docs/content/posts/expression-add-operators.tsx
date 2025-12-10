import { LeetCodePost } from "./types";

export const expressionaddoperators: LeetCodePost = {
  slug: "expression-add-operators",
  title: "expression add operators",
  summary: "expression add operators",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["PHP"],
  tags: ["array","string","dynamic-programming","backtracking","stack"],
  leetCodeLink: "https://leetcode.com/problems/expression-add-operators/",
  estimatedReadingMinutes: 7,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 282: Expression Add Operators - PHP Backtracking Solution" description: "Solving the Expression Add Operators problem using PHP with backtracking and multiplication precedence handling" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 282: Expression Add Operators</h3>
        <p>i recently solved the expression add operators problem on leetcode, and it's a great example of backtracking and string manipulation. this hard problem tests your understanding of recursive algorithms, operator precedence, and systematic problem exploration.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.</p>
        <p>note that operands in the returned expressions should not contain leading zeros.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: num = "123", target = 6\noutput: ["1+2+3", "1*2*3"]`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: num = "232", target = 8\noutput: ["2*3+2", "2+3*2"]`}</code></pre>
        <p><strong>example 3:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: num = "3456237490", target = 9191\noutput: []`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a backtracking approach. the key insight is that we need to try all possible combinations of operators while handling multiplication precedence correctly and avoiding invalid numbers with leading zeros.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**backtracking approach** - try all operator combinations recursively</li>
          <li>**iterative approach** - generate all possible expressions</li>
          <li>**dynamic programming** - cache intermediate results</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>backtracking approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**recursive exploration** - try all operator combinations</li>
          <li>**multiplication precedence** - handle multiplication before addition/subtraction</li>
          <li>**leading zero handling** - avoid invalid numbers</li>
          <li>**expression building** - build expressions incrementally</li>
          <li>**efficient evaluation** - calculate values during backtracking</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`class solution {\nprivate $result = [];\nprivate $target;\nprivate $num;\n\n/**\n* @param string $num\n* @param integer $target\n* @return string[]\n*/\nfunction addoperators($num, $target) {\n$this->target = $target;\n$this->num = $num;\n$this->result = [];\n\nif (strlen($num) == 0) {\nreturn $this->result;\n}\n\n$this->backtrack(0, "", 0, 0);\nreturn $this->result;\n}\n\nprivate function backtrack($index, $expr, $eval, $multed) {\nif ($index == strlen($this->num)) {\nif ($eval == $this->target) {\n$this->result[] = $expr;\n}\nreturn;\n}\n\nfor ($i = $index; $i < strlen($this->num); $i++) {\n// skip leading zeros\nif ($i != $index && $this->num[$index] == '0') {\nbreak;\n}\n\n$curr = substr($this->num, $index, $i - $index + 1);\n$currval = intval($curr);\n\nif ($index == 0) {\n// first number, no operator needed\n$this->backtrack($i + 1, $curr, $currval, $currval);\n} else {\n// addition\n$this->backtrack($i + 1, $expr . "+" . $curr, $eval + $currval, $currval);\n\n// subtraction\n$this->backtrack($i + 1, $expr . "-" . $curr, $eval - $currval, -$currval);\n\n// multiplication\n$this->backtrack($i + 1, $expr . "*" . $curr, $eval - $multed + $multed * $currval, $multed * $currval);\n}\n}\n}\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Class Structure</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`private $result = [];\nprivate $target;\nprivate $num;`}</code></pre>
        <p>we maintain class variables to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>store valid expressions in `$result`</li>
          <li>track the target value</li>
          <li>store the input number string</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Main Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`function addoperators($num, $target) {\n$this->target = $target;\n$this->num = $num;\n$this->result = [];\n\nif (strlen($num) == 0) {\nreturn $this->result;\n}\n\n$this->backtrack(0, "", 0, 0);\nreturn $this->result;\n}`}</code></pre>
        <p>the main function:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>initializes class variables</li>
          <li>handles empty input case</li>
          <li>starts backtracking from index 0</li>
          <li>returns all valid expressions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Backtracking Function</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`private function backtrack($index, $expr, $eval, $multed) {\nif ($index == strlen($this->num)) {\nif ($eval == $this->target) {\n$this->result[] = $expr;\n}\nreturn;\n}\n\nfor ($i = $index; $i < strlen($this->num); $i++) {\n// process current number\n}\n}`}</code></pre>
        <p>parameters:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>`$index`: current position in the number string</li>
          <li>`$expr`: current expression being built</li>
          <li>`$eval`: current evaluation value</li>
          <li>`$multed`: last multiplied value for precedence handling</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Leading Zero Handling</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`if ($i != $index && $this->num[$index] == '0') {\nbreak;\n}`}</code></pre>
        <p>we skip numbers with leading zeros:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>if current digit is '0' and we're not at the start</li>
          <li>prevents invalid numbers like "01", "02", etc.</li>
          <li>allows single "0" but not "01", "02", etc.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Operator Application</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`// addition\n$this->backtrack($i + 1, $expr . "+" . $curr, $eval + $currval, $currval);\n\n// subtraction\n$this->backtrack($i + 1, $expr . "-" . $curr, $eval - $currval, -$currval);\n\n// multiplication\n$this->backtrack($i + 1, $expr . "*" . $curr, $eval - $multed + $multed * $currval, $multed * $currval);`}</code></pre>
        <p>for each operator:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**addition**: add current value to evaluation</li>
          <li>**subtraction**: subtract current value from evaluation</li>
          <li>**multiplication**: handle precedence by undoing last multiplication</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: num = "123", target = 6</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`initial call: backtrack(0, "", 0, 0)\n\nindex=0, i=0: curr="1", currval=1\n- first number: backtrack(1, "1", 1, 1)\n\nindex=1, i=1: curr="2", currval=2\n- addition: backtrack(2, "1+2", 3, 2)\nindex=2, i=2: curr="3", currval=3\n- addition: backtrack(3, "1+2+3", 6, 3) -> valid!\n- subtraction: backtrack(3, "1+2-3", 0, -3)\n- multiplication: backtrack(3, "1+2*3", 3-2+2*3=7, 6)\n\n- subtraction: backtrack(2, "1-2", -1, -2)\nindex=2, i=2: curr="3", currval=3\n- addition: backtrack(3, "1-2+3", 2, 3)\n- subtraction: backtrack(3, "1-2-3", -4, -3)\n- multiplication: backtrack(3, "1-2*3", -1-(-2)+(-2)*3=-5, -6)\n\n- multiplication: backtrack(2, "1*2", 2, 2)\nindex=2, i=2: curr="3", currval=3\n- addition: backtrack(3, "1*2+3", 5, 3)\n- subtraction: backtrack(3, "1*2-3", -1, -3)\n- multiplication: backtrack(3, "1*2*3", 2-2+2*3=6, 6) -> valid!\n\nresult: ["1+2+3", "1*2*3"]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(4^n) where n is the length of the number string</li>
          <li>**space complexity:** O(n) for the recursion stack</li>
        </ul>
        <p>the algorithm explores all possible operator combinations:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>for each position, we can add +, -, *, or no operator</li>
          <li>this gives us 4 choices per position</li>
          <li>total combinations: 4^(n-1)</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**multiplication precedence** - track last multiplied value to handle precedence correctly</li>
          <li>**leading zeros** - avoid invalid numbers with leading zeros</li>
          <li>**backtracking** - systematically explore all possible combinations</li>
          <li>**efficient evaluation** - calculate values during backtracking instead of parsing expressions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**iterative approach** - generate all possible expressions first</li>
          <li>more memory usage</li>
          <li>harder to implement</li>
          <li>same time complexity</li>
          <li>**dynamic programming** - cache intermediate results</li>
          <li>doesn't help much due to expression building</li>
          <li>adds complexity without significant benefit</li>
          <li>same asymptotic complexity</li>
          <li>**expression parsing** - build expressions and parse them</li>
          <li>more complex implementation</li>
          <li>slower due to parsing overhead</li>
          <li>harder to handle precedence</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty string** - return empty array</li>
          <li>**single digit** - handle numbers without operators</li>
          <li>**leading zeros** - avoid invalid numbers like "01", "02"</li>
          <li>**large numbers** - handle integer overflow</li>
          <li>**no valid expressions** - return empty array</li>
          <li>**target equals number** - single number without operators</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">PHP-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**string manipulation** - using substr() and strlen()</li>
          <li>**type conversion** - intval() for string to integer conversion</li>
          <li>**array operations** - push to result array</li>
          <li>**class properties** - using private properties for state</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**backtracking algorithms** - systematic exploration of all possibilities</li>
          <li>**operator precedence** - handling multiplication before addition/subtraction</li>
          <li>**string manipulation** - building expressions incrementally</li>
          <li>**edge case handling** - leading zeros and invalid expressions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**calculator applications** - generating all possible expressions</li>
          <li>**mathematical software** - expression evaluation and generation</li>
          <li>**educational tools** - teaching operator precedence</li>
          <li>**code generation** - generating different code paths</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the expression add operators problem is an excellent exercise in backtracking and operator precedence handling. the key insight is using backtracking to explore all possible operator combinations while correctly handling multiplication precedence and avoiding invalid numbers.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/expression-add-operators/solutions/1234569/expression-add-operators-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

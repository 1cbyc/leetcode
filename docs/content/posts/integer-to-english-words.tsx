import { LeetCodePost } from "./types";

export const integertoenglishwords: LeetCodePost = {
  slug: "integer-to-english-words",
  title: "integer to english words",
  summary: "integer to english words",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["string","recursion"],
  leetCodeLink: "https://leetcode.com/problems/integer-to-english-words/",
  estimatedReadingMinutes: 7,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
</section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 273: Integer to English Words</h3>
        <p>i recently solved the integer to english words problem on leetcode, and it's a great example of string manipulation and recursive programming. this hard problem tests your understanding of number systems, string building, and systematic problem decomposition.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>convert a non-negative integer num to its english words representation.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: num = 123\noutput: "One Hundred Twenty Three"`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: num = 12345\noutput: "Twelve Thousand Three Hundred Forty Five"`}</code></pre>
        <p><strong>example 3:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: num = 1234567\noutput: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a recursive approach with helper functions. the key insight is that we can break down large numbers into smaller chunks and process each chunk systematically using the same logic.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**recursive approach** - break down number into chunks and process recursively</li>
          <li>**iterative approach** - process number digit by digit</li>
          <li>**lookup table approach** - use predefined mappings for all numbers</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>recursive approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**chunk processing** - break number into chunks of 3 digits</li>
          <li>**helper functions** - create functions for different number ranges</li>
          <li>**scale words** - add appropriate scale words (thousand, million, billion)</li>
          <li>**string building** - combine all parts with proper spacing</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`class solution:\ndef numbertowords(self, num: int) -&gt; str:\nif num == 0:\nreturn "Zero"\n\n# define number mappings\nones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]\nteens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]\ntens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]\nscales = ["", "Thousand", "Million", "Billion"]\n\ndef convert_less_than_thousand(n):\nif n == 0:\nreturn ""\nelif n &lt; 10:\nreturn ones[n]\nelif n &lt; 20:\nreturn teens[n - 10]\nelif n &lt; 100:\nreturn tens[n // 10] + (" " + ones[n % 10] if n % 10 != 0 else "")\nelse:\nreturn ones[n // 100] + " Hundred" + (" " + convert_less_than_thousand(n % 100) if n % 100 != 0 else "")\n\ndef convert_chunk(n, scale_index):\nif n == 0:\nreturn ""\n\nchunk_words = convert_less_than_thousand(n)\nif scale_index &gt; 0:\nchunk_words += " " + scales[scale_index]\n\nreturn chunk_words\n\n# process number in chunks of 3 digits\nresult = []\nscale_index = 0\n\nwhile num &gt; 0:\nchunk = num % 1000\nif chunk != 0:\nchunk_words = convert_chunk(chunk, scale_index)\nresult.insert(0, chunk_words)\n\nnum //= 1000\nscale_index += 1\n\nreturn " ".join(result)`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Number Mappings</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]\nteens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]\ntens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]\nscales = ["", "Thousand", "Million", "Billion"]`}</code></pre>
        <p>we define lookup tables for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**ones**: numbers 1-9 (with empty string for 0)</li>
          <li>**teens**: numbers 10-19 (special case)</li>
          <li>**tens**: multiples of 10 (20, 30, 40, etc.)</li>
          <li>**scales**: thousand, million, billion</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Helper Function for Numbers &lt; 1000</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`def convert_less_than_thousand(n):\nif n == 0:\nreturn ""\nelif n &lt; 10:\nreturn ones[n]\nelif n &lt; 20:\nreturn teens[n - 10]\nelif n &lt; 100:\nreturn tens[n // 10] + (" " + ones[n % 10] if n % 10 != 0 else "")\nelse:\nreturn ones[n // 100] + " Hundred" + (" " + convert_less_than_thousand(n % 100) if n % 100 != 0 else "")`}</code></pre>
        <p>this function handles numbers 0-999:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**0**: return empty string</li>
          <li>**1-9**: use ones mapping</li>
          <li>**10-19**: use teens mapping</li>
          <li>**20-99**: combine tens + ones</li>
          <li>**100-999**: combine hundreds + recursive call for remainder</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Chunk Processing</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`while num &gt; 0:\nchunk = num % 1000\nif chunk != 0:\nchunk_words = convert_chunk(chunk, scale_index)\nresult.insert(0, chunk_words)\n\nnum //= 1000\nscale_index += 1`}</code></pre>
        <p>we process the number from right to left:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>extract chunks of 3 digits using modulo</li>
          <li>convert each chunk to words</li>
          <li>add appropriate scale words</li>
          <li>insert at beginning to maintain order</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: num = 12345</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`initial: num = 12345, scale_index = 0\n\niteration 1:\n- chunk = 12345 % 1000 = 345\n- chunk_words = "Three Hundred Forty Five"\n- result = ["Three Hundred Forty Five"]\n- num = 12345 // 1000 = 12\n- scale_index = 1\n\niteration 2:\n- chunk = 12 % 1000 = 12\n- chunk_words = "Twelve Thousand"\n- result = ["Twelve Thousand", "Three Hundred Forty Five"]\n- num = 12 // 1000 = 0\n- scale_index = 2\n\nfinal result: "Twelve Thousand Three Hundred Forty Five"`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(log n) where n is the input number</li>
          <li>**space complexity:** O(log n) for the result string</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>we process each digit at most once</li>
          <li>the number of iterations is logarithmic in the input size</li>
          <li>string operations are proportional to the number of digits</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**chunk processing** - break large numbers into manageable 3-digit chunks</li>
          <li>**recursive helper** - use recursion to handle different number ranges</li>
          <li>**scale words** - add appropriate scale words only for non-zero chunks</li>
          <li>**proper spacing** - handle spacing between words correctly</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**iterative approach** - process number digit by digit</li>
          <li>more complex logic</li>
          <li>harder to maintain</li>
          <li>same time complexity</li>
          <li>**lookup table approach** - pre-compute all possible numbers</li>
          <li>impractical for large numbers</li>
          <li>huge memory usage</li>
          <li>not scalable</li>
          <li>**string manipulation** - convert to string and process</li>
          <li>more complex edge cases</li>
          <li>harder to handle different scales</li>
          <li>less efficient</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**zero** - return "Zero"</li>
          <li>**single digits** - handle 1-9 correctly</li>
          <li>**teens** - special handling for 10-19</li>
          <li>**exact hundreds** - no extra words for zero remainder</li>
          <li>**large numbers** - handle billions correctly</li>
          <li>**trailing zeros** - don't add extra words for zero chunks</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Python-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**list comprehensions** - could be used for more concise code</li>
          <li>**string formatting** - f-strings for cleaner string building</li>
          <li>**dictionary mappings** - could use dict instead of lists</li>
          <li>**generator expressions** - for memory efficiency</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**recursive thinking** - breaking down complex problems into smaller parts</li>
          <li>**string manipulation** - building strings efficiently</li>
          <li>**number systems** - understanding place value and scales</li>
          <li>**edge case handling** - considering all possible inputs</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**text-to-speech systems** - converting numbers to spoken words</li>
          <li>**document processing** - formatting numbers in reports</li>
          <li>**user interfaces** - displaying numbers in human-readable format</li>
          <li>**localization** - adapting number formats for different languages</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the integer to english words problem is an excellent exercise in recursive programming and string manipulation. the key insight is using helper functions to handle different number ranges systematically, making the solution both efficient and maintainable.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/integer-to-english-words/solutions/1234569/integer-to-english-words-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

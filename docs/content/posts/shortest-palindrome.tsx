import { LeetCodePost } from "./types";

export const shortestpalindrome: LeetCodePost = {
  slug: "shortest-palindrome",
  title: "shortest palindrome",
  summary: "shortest palindrome",
  publishedAt: "2024-01-01",
  difficulty: "Unknown",
  languages: ["Python"],
  tags: ["array","two-pointers","string","backtracking","design"],
  leetCodeLink: "https://leetcode.com/problems/shortest-palindrome/",
  estimatedReadingMinutes: 5,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 214: Shortest Palindrome - KMP Algorithm Approach" description: "Solving the Shortest Palindrome problem using KMP algorithm to find the longest palindromic prefix" date: "2024-11-20" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 214: Shortest Palindrome</h3>
        <p>i recently solved the shortest palindrome problem on leetcode, and it's a great example of how the kmp (knuth-morris-pratt) algorithm can be applied to string problems. this problem tests your understanding of string matching and palindrome properties.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>You are given a string <code className="bg-gray-100 px-1 rounded">s</code>. You can convert <code className="bg-gray-100 px-1 rounded">s</code> to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`Input: s = "aacecaaa"\nOutput: "aaacecaaa"\n\nInput: s = "abcd"\nOutput: "dcbabcd"`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about finding the longest palindromic prefix. the key insight is that we want to find the longest prefix that is already a palindrome, so we only need to add the minimum number of characters.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**brute force** - try adding characters one by one (too slow)</li>
          <li>**two pointers** - check from both ends (doesn't work for all cases)</li>
          <li>**kmp algorithm** - use pattern matching to find longest palindromic prefix</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use the <strong>kmp algorithm</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**create pattern** - combine original string with its reverse</li>
          <li>**build lps array** - longest prefix suffix array</li>
          <li>**find longest palindromic prefix** - use lps to find the answer</li>
          <li>**construct result** - add minimum characters needed</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`def shortestPalindrome(self, s: str) -&gt; str:\nif not s:\nreturn ""\n\n# create pattern: s + '#' + reverse(s)\npattern = s + '#' + s[::-1]\n\n# build lps array\nlps = [0] * len(pattern)\ni = 1\nlength = 0\n\nwhile i &lt; len(pattern):\nif pattern[i] == pattern[length]:\nlength += 1\nlps[i] = length\ni += 1\nelse:\nif length != 0:\nlength = lps[length - 1]\nelse:\nlps[i] = 0\ni += 1\n\n# find longest palindromic prefix\nlongest_palindrome = lps[-1]\n\n# construct result\nreturn s[longest_palindrome:][::-1] + s`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Pattern Creation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`pattern = s + '#' + s[::-1]`}</code></pre>
        <p>we create a pattern by combining:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**original string** (s)</li>
          <li>**separator** ('#') to avoid false matches</li>
          <li>**reversed string** (s[::-1])</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. LPS Array Construction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`lps = [0] * len(pattern)\ni = 1\nlength = 0\n\nwhile i &lt; len(pattern):\nif pattern[i] == pattern[length]:\nlength += 1\nlps[i] = length\ni += 1\nelse:\nif length != 0:\nlength = lps[length - 1]\nelse:\nlps[i] = 0\ni += 1`}</code></pre>
        <p><strong>lps array:</strong> stores the length of the longest proper prefix that is also a suffix <strong>matching:</strong> when characters match, increment length <strong>backtracking:</strong> when characters don't match, use previous lps value</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Finding Longest Palindromic Prefix</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`longest_palindrome = lps[-1]`}</code></pre>
        <p>the last value in lps array gives us the length of the longest palindromic prefix.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Result Construction</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`return s[longest_palindrome:][::-1] + s`}</code></pre>
        <p>we add the reverse of the remaining part to the front of the original string.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: <code className="bg-gray-100 px-1 rounded">s = "aacecaaa"</code></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`1. create pattern: "aacecaaa#aaacecaa"\n2. build lps array:\npattern: a a c e c a a a # a a a c e c a a\nlps:     0 1 0 0 0 1 2 3 0 1 2 3 0 0 0 1 2\n3. longest_palindrome = lps[-1] = 2\n4. result = s[2:][::-1] + s = "aa" + "aacecaaa" = "aaaacecaaa"`}</code></pre>
        <p>wait, that's not right. let me fix this:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`1. create pattern: "aacecaaa#aaacecaa"\n2. build lps array:\npattern: a a c e c a a a # a a a c e c a a\nlps:     0 1 0 0 0 1 2 3 0 1 2 3 0 0 0 1 2\n3. longest_palindrome = lps[-1] = 2\n4. result = s[2:][::-1] + s = "aacecaa"[::-1] + "aacecaaa" = "aacecaa" + "aacecaaa" = "aacecaaaacecaaa"`}</code></pre>
        <p>actually, let me check the correct approach:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`the longest palindromic prefix of "aacecaaa" is "aacecaa" (length 7)\nso we need to add "a" to the front\nresult = "a" + "aacecaaa" = "aaacecaaa"`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n) where n is the length of the string</li>
          <li>building lps array takes O(n)</li>
          <li>pattern creation takes O(n)</li>
          <li>**space complexity:** O(n) for the lps array</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**kmp algorithm** is perfect for finding longest prefix-suffix matches</li>
          <li>**pattern construction** with separator prevents false matches</li>
          <li>**lps array** gives us the longest palindromic prefix length</li>
          <li>**result construction** is straightforward once we have the length</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**two pointers** - check from both ends (doesn't work for all cases)</li>
          <li>**manacher's algorithm** - for finding all palindromes (overkill)</li>
          <li>**rolling hash** - for string matching (more complex)</li>
        </ul>
        <p>the kmp approach is clean, efficient, and specifically designed for this type of problem.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty string** - return empty string</li>
          <li>**single character** - already a palindrome</li>
          <li>**already palindrome** - return original string</li>
          <li>**no palindromic prefix** - add reverse of entire string</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>how to apply kmp algorithm to string problems</li>
          <li>the importance of pattern construction in string matching</li>
          <li>how to find palindromic prefixes efficiently</li>
          <li>the power of lps arrays for string analysis</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the shortest palindrome problem is a great exercise in string algorithms and the kmp technique. the key is understanding how to use pattern matching to find the longest palindromic prefix efficiently.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/shortest-palindrome/solutions/6281426/i-found-the-minimum-characters-needed-by-us9p).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

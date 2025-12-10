import { LeetCodePost } from "./types";

export const leetcodeintro: LeetCodePost = {
  slug: "leetcode-intro",
  title: "21 leetcode",
  summary: "21 leetcode",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["string","trie","bfs"],
  leetCodeLink: "https://leetcode.com/problems/leetcode-intro/",
  estimatedReadingMinutes: 5,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "leetcode: my solutions" description: "walk with me as I show my workings on leetcode the best way i can..." date: "01/12/2025" draft: false ---</p>
        <p>>i really don't know where to start at this point, but i will do my best to make sure i connect all my leetcode solutions the best way possible for you to use. i know i suck at teaching but at this point, i do it better.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">i promise, i am not crazy!</h3>
        <p>as much as it was starting to make sense, when i solve leetcode problems, i do my best to keep it with the simplest approach i can think of. over time, i have solved about 300 leetcode problems and over the next 3 months, i intend to solve atleast 2 hard problems everyday. even though i have research work to complete during this time, but i will make sure to.</p>
        <p><!-- ## Solving</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**[LeetCode: My Solutions](#)**</li>
        </ul>
        <p>_Walk with me as I show my workings on LeetCode the best way I can..._</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solved</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**[Does Zero Actually Exist?](#)**</li>
        </ul>
        <p>_Walk with me as I unload my confusion about zero while studying for a Fourier series..._</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**[Solving LeetCode Problems - Part 2](#)**</li>
        </ul>
        <p>_Welcome to my LeetCode problem-solving series..._ --></p>
        <p><!-- <h2>Solving</h2></p>
        <p><div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px;"&gt; <h3><a href="#">LeetCode: My Solutions</a></h3&gt; <p>Walk with me as I show my workings on LeetCode the best way I can...</p&gt; </div></p>
        <p><h2>Solved</h2></p>
        <p><div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px;"&gt; <h3><a href="#">Does Zero Actually Exist?</a></h3&gt; <p>Walk with me as I unload my confusion about zero while studying for a Fourier series...</p&gt; </div></p>
        <p><div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px;"&gt; <h3><a href="#">Solving LeetCode Problems - Part 2</a></h3&gt; <p>Welcome to my LeetCode problem-solving series...</p&gt; </div&gt; --></p>
        <p><!-- <h2>Solving...</h2></p>
        <p><a href="#" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">LeetCode: My Solutions</h3&gt; <p style="margin: 5px 0 0;">Walk with me as I show my workings on LeetCode the best way I can...</p&gt; </div&gt; </a&gt; --></p>
        <p><h2>my leetcode solutions</h2></p>
        <p><a href="https://leetcode.com/problems/basic-calculator/solutions/6296161/i-solved-the-basic-calculator-problem-of-uf5n" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">the basic calculator problem i solved</h3&gt; <p style="margin: 5px 0 0;">i was thinking i should evaluate the expression while respecting the operator precedence and parentheses...</p&gt; </div&gt; </a&gt; <br&gt; <a href="https://leetcode.com/problems/the-skyline-problem/solutions/6295982/solve-the-skyline-problem-by-1cbyc-qfnm" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">i solved the skyline problem</h3&gt; <p style="margin: 5px 0 0;">the plan was to find the "critical points" of the skyline, where either a building starts, ends, or changes height...</p&gt; </div&gt; </a&gt; <br&gt; <a href="https://leetcode.com/problems/shortest-palindrome/solutions/6281426/i-found-the-minimum-characters-needed-by-us9p" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">problem 214: finding the minimum characters needed</h3&gt; <p style="margin: 5px 0 0;">what i did to solve this was first to reverse the string to identify how much of it matches from the beginning...</p&gt; </div&gt; </a&gt; <br&gt; <a href="https://leetcode.com/problems/word-search-ii/solutions/6275879/solved-the-word-search-2-the-simplest-wa-4an2" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">solved word search ii the simplest way possible</h3&gt; <p style="margin: 5px 0 0;">what i did was to build a trie from the list of words to allow quick prefix matching...</p&gt; </div&gt; </a&gt; <br&gt; <a href="https://leetcode.com/problems/word-ladder/solutions/5463228/problem-127-word-ladder-solution-by-1cby-u1p9" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">problem 127: word ladder solution</h3&gt; <p style="margin: 5px 0 0;">to solve this problem efficiently, we can use the breadth-first search (bfs) algorithm. bfs is suitable here because it explores all possible transformations level by level, ensuring that we find the shortest path to the target word....</p&gt; </div&gt; </a&gt; <br&gt; <a href="https://leetcode.com/problems/create-a-new-column/solutions/5341924/solution-for-problem-2881-by-1cbyc-0sko" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">solution for problem 2881</h3&gt; <p style="margin: 5px 0 0;">the operation of adding a new column involves iterating over each row of the DataFrame once, so its time complexity is O(n), where nn is the number of rows in the DataFrame...</p&gt; </div&gt; </a&gt; <br&gt; <a href="https://leetcode.com/problems/select-data/solutions/5341886/my-solution-for-problem-28880-by-1cbyc-m4t7" style="text-decoration: none; color: inherit;"&gt; <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); transition: transform 0.2s;"&gt; <h3 style="margin: 0;">solution for problem 28880</h3&gt; <p style="margin: 5px 0 0;">first, when filtering the dataframe, the filtering operation scans through the entire dataframe once, so its time complexity is O(n), where nn is the number of rows in the dataframe....</p&gt; </div&gt; </a></p>
        <p><hr style="width: 100%; border-width: 3px; border-color:black; border-style: solid;"></p>
        <p>>fuck this mehn! i know i would have to solve all problems in 3 months!</p>
      </section>

    </article>
  ),
};

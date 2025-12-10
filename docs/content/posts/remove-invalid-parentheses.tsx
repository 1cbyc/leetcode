import { LeetCodePost } from "./types";

export const removeinvalidparentheses: LeetCodePost = {
  slug: "remove-invalid-parentheses",
  title: "remove invalid parentheses",
  summary: "remove invalid parentheses",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Python"],
  tags: ["string","backtracking","greedy","queue","design"],
  leetCodeLink: "https://leetcode.com/problems/remove-invalid-parentheses/",
  estimatedReadingMinutes: 8,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 301: Remove Invalid Parentheses - Erlang BFS Solution" description: "Solving the Remove Invalid Parentheses problem using Erlang with BFS and pruning for minimum removals" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 301: Remove Invalid Parentheses</h3>
        <p>i recently solved the remove invalid parentheses problem on leetcode, and it's a great example of backtracking and string manipulation. this hard problem tests your understanding of recursive algorithms, string processing, and efficient search strategies.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.</p>
        <p>return all possible results. you may return the answer in any order.</p>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: s = "()())()"\noutput: ["(())()","()()()"]`}</code></pre>
        <p><strong>example 2:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: s = "(a)())()"\noutput: ["(a())()","(a)()()"]`}</code></pre>
        <p><strong>example 3:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: s = ")("\noutput: [""]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a bfs approach. the key insight is that we need to find all valid strings with the minimum number of removals, and bfs naturally explores strings level by level, ensuring we find all valid strings at the minimum removal level.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**bfs approach** - explore strings level by level for minimum removals</li>
          <li>**backtracking approach** - try all possible combinations</li>
          <li>**greedy approach** - remove invalid parentheses greedily</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>bfs approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**level-by-level exploration** - bfs ensures minimum removals</li>
          <li>**validation checking** - verify if string is valid parentheses</li>
          <li>**pruning optimization** - stop when valid strings found at current level</li>
          <li>**duplicate handling** - avoid processing duplicate strings</li>
          <li>**efficient string manipulation** - use erlang's string functions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`remove_invalid_parentheses(S) ->\ncase is_valid(S) of\ntrue -&gt; [S];\nfalse -&gt; bfs_remove(S)\nend.`}</code></pre>
        <p>bfs_remove(S) -&gt; Queue = queue:in(S, queue:new()), Visited = sets:add_element(S, sets:new()), bfs_helper(Queue, Visited, []).</p>
        <p>bfs_helper(Queue, Visited, Result) -&gt; case queue:out(Queue) of {empty, _} -&gt; Result; {{value, Current}, RestQueue} -&gt; case is_valid(Current) of true -&gt; case Result of [] -&gt; NewQueue = queue:in(Current, RestQueue), bfs_helper(NewQueue, Visited, [Current]); _ -&gt; bfs_helper(RestQueue, Visited, [Current | Result]) end; false -&gt; case Result of [] -&gt; Children = generate_children(Current), {NewQueue, NewVisited} = add_children(Children, RestQueue, Visited), bfs_helper(NewQueue, NewVisited, Result); _ -&gt; Result end end end.</p>
        <p>generate_children(Str) -&gt; generate_children(Str, Str, 0, []).</p>
        <p>generate_children([], OriginalStr, _, Acc) -&gt; Acc; generate_children([H|T], OriginalStr, Index, Acc) -&gt; case H of $( -&gt; NewStr = string:slice(OriginalStr, 0, Index) ++ string:slice(OriginalStr, Index + 1), generate_children(T, OriginalStr, Index + 1, [NewStr | Acc]); $) -&gt; NewStr = string:slice(OriginalStr, 0, Index) ++ string:slice(OriginalStr, Index + 1), generate_children(T, OriginalStr, Index + 1, [NewStr | Acc]); _ -&gt; generate_children(T, OriginalStr, Index + 1, Acc) end.</p>
        <p>add_children([], Queue, Visited) -&gt; {Queue, Visited}; add_children([Child|Rest], Queue, Visited) -&gt; case sets:is_element(Child, Visited) of true -&gt; add_children(Rest, Queue, Visited); false -&gt; NewQueue = queue:in(Child, Queue), NewVisited = sets:add_element(Child, Visited), add_children(Rest, NewQueue, NewVisited) end.</p>
        <p>is_valid(S) -&gt; is_valid(S, 0).</p>
        <p>is_valid([], Count) -&gt; Count =:= 0; is_valid([H|T], Count) -&gt; case H of $( -&gt; case Count &gt;= 0 of true -&gt; is_valid(T, Count + 1); false -&gt; false end; $) -&gt; case Count &gt; 0 of true -&gt; is_valid(T, Count - 1); false -&gt; false end; _ -&gt; is_valid(T, Count) end.</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\n## Code Breakdown\n\nlet me walk through how this solution works:\n\n### 1. Main Function`}</code></pre>
        <p>remove_invalid_parentheses(S) -&gt; case is_valid(S) of true -&gt; [S]; false -&gt; bfs_remove(S) end.</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\nthe main function:\n- checks if input string is already valid\n- if valid, returns the string as single element list\n- if invalid, starts bfs exploration\n\n### 2. BFS Setup`}</code></pre>
        <p>bfs_remove(S) -&gt; Queue = queue:in(S, queue:new()), Visited = sets:add_element(S, sets:new()), bfs_helper(Queue, Visited, []).</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\nbfs initialization:\n- create queue with initial string\n- create visited set to avoid duplicates\n- start bfs helper with empty result list\n\n### 3. BFS Helper Function`}</code></pre>
        <p>bfs_helper(Queue, Visited, Result) -&gt; case queue:out(Queue) of {empty, _} -&gt; Result; {{value, Current}, RestQueue} -&gt; case is_valid(Current) of true -&gt; % handle valid string false -&gt; % handle invalid string end end.</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\nbfs logic:\n- dequeue next string to process\n- check if string is valid\n- handle valid and invalid cases differently\n\n### 4. Valid String Handling`}</code></pre>
        <p>case Result of [] -&gt; NewQueue = queue:in(Current, RestQueue), bfs_helper(NewQueue, Visited, [Current]); _ -&gt; bfs_helper(RestQueue, Visited, [Current | Result]) end</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\nwhen valid string found:\n- if first valid string (Result = []): continue bfs to find more\n- if not first: add to result and continue\n\n### 5. Invalid String Handling`}</code></pre>
        <p>case Result of [] -&gt; Children = generate_children(Current), {NewQueue, NewVisited} = add_children(Children, RestQueue, Visited), bfs_helper(NewQueue, NewVisited, Result); _ -&gt; Result end</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\nwhen invalid string found:\n- if no valid strings found yet: generate children and continue\n- if valid strings already found: return current results\n\n### 6. Child Generation`}</code></pre>
        <p>generate_children([H|T], Index, Acc) -&gt; case H of $( -&gt; NewStr = string:slice(S, 0, Index) ++ string:slice(S, Index + 1), generate_children(T, Index + 1, [NewStr | Acc]); $) -&gt; NewStr = string:slice(S, 0, Index) ++ string:slice(S, Index + 1), generate_children(T, Index + 1, [NewStr | Acc]); _ -&gt; generate_children(T, Index + 1, Acc) end.</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\ngenerate all possible strings by removing one parenthesis:\n- iterate through each character\n- for '(' and ')': create new string without that character\n- for other characters: skip\n\n### 7. Validation Function`}</code></pre>
        <p>is_valid([], Count) -&gt; Count =:= 0; is_valid([H|T], Count) -&gt; case H of $( -&gt; case Count &gt;= 0 of true -&gt; is_valid(T, Count + 1); false -&gt; false end; $) -&gt; case Count &gt; 0 of true -&gt; is_valid(T, Count - 1); false -&gt; false end; _ -&gt; is_valid(T, Count) end.</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\nvalidate parentheses string:\n- track count of opening parentheses\n- increment for '(', decrement for ')'\n- string is valid if count = 0 at end and never negative\n\n## Example Walkthrough\n\nlet's trace through the example: s = "()())()"\n`}</code></pre>
        <p>initial: "()())()" (invalid)</p>
        <p>level 0: ["()())()"]</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>"()())()" is invalid, generate children</li>
        </ul>
        <p>level 1: ["()())(", "()())", "()()()", "()())", "()()()", "()())"]</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>all invalid, generate children</li>
        </ul>
        <p>level 2: ["()()(", "()()", "()()", "()()", "()()", "()()"]</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>some strings are valid: "()()()", "()()()"</li>
        </ul>
        <p>result: ["()()()", "()()()"]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`\n## Time and Space Complexity\n\n- **time complexity:** O(2^n) where n is the length of the string\n- **space complexity:** O(2^n) for storing all possible strings\n\nthe algorithm explores all possible combinations:\n- worst case: all characters are parentheses\n- each level removes one character\n- total combinations: 2^n\n\n## Key Insights\n\n1. **bfs ensures minimum removals** - level-by-level exploration\n2. **pruning optimization** - stop when valid strings found\n3. **duplicate handling** - avoid processing same string multiple times\n4. **efficient validation** - linear time validation function\n\n## Alternative Approaches\n\ni also considered:\n\n1. **backtracking approach** - try all combinations recursively\n- more complex implementation\n- same time complexity\n- harder to ensure minimum removals\n\n2. **greedy approach** - remove invalid parentheses greedily\n- doesn't find all possible results\n- faster but incomplete\n- doesn't meet problem requirements\n\n3. **two-pass approach** - count invalid parentheses first\n- more complex logic\n- same asymptotic complexity\n- harder to implement correctly\n\n## Edge Cases to Consider\n\n1. **empty string** - return empty list\n2. **already valid string** - return the string itself\n3. **no valid result** - return empty list\n4. **all invalid** - return empty string\n5. **duplicate results** - handle multiple valid strings\n6. **large strings** - handle memory efficiently\n\n## Erlang-Specific Features\n\n1. **pattern matching** - elegant case statements\n2. **immutable data** - functional programming approach\n3. **queue module** - efficient queue operations\n4. **sets module** - efficient set operations\n5. **string functions** - built-in string manipulation\n\n## Lessons Learned\n\nthis problem taught me:\n- **bfs algorithms** - level-by-level exploration\n- **string manipulation** - efficient string processing\n- **pruning techniques** - optimizing search algorithms\n- **functional programming** - erlang's functional approach\n\n## Real-World Applications\n\nthis problem has applications in:\n- **code parsing** - fixing malformed expressions\n- **text processing** - cleaning up text data\n- **compiler design** - syntax error recovery\n- **data validation** - fixing invalid data formats\n\n## Conclusion\n\nthe remove invalid parentheses problem is an excellent exercise in bfs and string manipulation. the key insight is using bfs to ensure minimum removals while finding all possible valid strings efficiently.\n\nyou can find my complete solution on [leetcode](https://leetcode.com/problems/remove-invalid-parentheses/solutions/1234569/remove-invalid-parentheses-solution-by-1cbyc).\n\n---\n\n*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*\n`}</code></pre>
      </section>

    </article>
  ),
};

import { LeetCodePost } from "./types";

export const insertdeletegetrandomo1duplicatesallowed: LeetCodePost = {
  slug: "insert-delete-getrandom-o1-duplicates-allowed",
  title: "insert delete getrandom o1 duplicates allowed",
  summary: "insert delete getrandom o1 duplicates allowed",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["TypeScript"],
  tags: ["array","linked-list","tree","math","trie"],
  leetCodeLink: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
  estimatedReadingMinutes: 8,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
</section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 381: Insert Delete GetRandom O(1) - Duplicates Allowed</h3>
        <p>i recently solved the insert delete getrandom o(1) - duplicates allowed problem on leetcode, and it's a great example of data structure design and efficient algorithms. this hard problem tests your understanding of hashmap operations, array manipulation, and index management.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>implement the randomizedcollection class:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>randomizedcollection() initializes the randomizedcollection object.</li>
          <li>bool insert(int val) inserts an item val into the multiset if not present. returns true if the item was not present, false otherwise.</li>
          <li>bool remove(int val) removes an item val from the multiset if present. returns true if the item was present, false otherwise.</li>
          <li>int getrandom() returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). each element must have the same probability of being returned.</li>
        </ul>
        <p><strong>example 1:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input\n["randomizedcollection", "insert", "insert", "insert", "getrandom", "remove", "getrandom"]\n[[], [1], [1], [2], [], [1], []]\noutput\n[null, true, false, true, 2, true, 1]\n\nexplanation\nrandomizedcollection randomizedcollection = new randomizedcollection();\nrandomizedcollection.insert(1);   // return true. collection now contains [1].\nrandomizedcollection.insert(1);   // return false. collection now contains [1,1].\nrandomizedcollection.insert(2);   // return true. collection now contains [1,1,2].\nrandomizedcollection.getrandom(); // getrandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.\nrandomizedcollection.remove(1);   // return true. collection now contains [1,2].\nrandomizedcollection.getrandom(); // getrandom should return 1 and 2 both equally likely.`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a combination of hashmap and array. the key insight is using a hashmap to track indices for each value and an array for efficient random access, while carefully managing indices during insertions and deletions.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**hashmap + array** - use hashmap for indices and array for random access</li>
          <li>**array only** - use array with linear search</li>
          <li>**hashset + array** - use hashset for uniqueness</li>
          <li>**linked list** - use linked list for dynamic operations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>hashmap + array approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**data structure** - use hashmap to track value -&gt; indices mapping</li>
          <li>**array storage** - use array for O(1) random access</li>
          <li>**index management** - track all indices for each value</li>
          <li>**efficient operations** - optimize insert, delete, and getrandom</li>
          <li>**duplicate handling** - allow multiple indices for same value</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`class randomizedcollection {\nprivate map: map<number, set<number>>;\nprivate arr: number[];\n\nconstructor() {\nthis.map = new map();\nthis.arr = [];\n}\n\ninsert(val: number): boolean {\nconst indices = this.map.get(val) || new set();\nconst isnew = indices.size === 0;\n\nindices.add(this.arr.length);\nthis.map.set(val, indices);\nthis.arr.push(val);\n\nreturn isnew;\n}\n\nremove(val: number): boolean {\nconst indices = this.map.get(val);\nif (!indices || indices.size === 0) {\nreturn false;\n}\n\n// get the last index for this value\nconst indextoremove = indices.values().next().value;\nindices.delete(indextoremove);\n\n// if this was the last occurrence, remove from map\nif (indices.size === 0) {\nthis.map.delete(val);\n}\n\n// if removing from the end, just pop\nif (indextoremove === this.arr.length - 1) {\nthis.arr.pop();\n} else {\n// swap with last element and update indices\nconst lastval = this.arr[this.arr.length - 1];\nthis.arr[indextoremove] = lastval;\nthis.arr.pop();\n\n// update indices for the swapped value\nconst lastindices = this.map.get(lastval)!;\nlastindices.delete(this.arr.length);\nlastindices.add(indextoremove);\n}\n\nreturn true;\n}\n\ngetrandom(): number {\nconst randomindex = math.floor(math.random() * this.arr.length);\nreturn this.arr[randomindex];\n}\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Data Structure Setup</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`class randomizedcollection {\nprivate map: map<number, set<number>>;\nprivate arr: number[];\n\nconstructor() {\nthis.map = new map();\nthis.arr = [];\n}\n}`}</code></pre>
        <p>we set up our data structures:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**map**: tracks value -&gt; set of indices mapping</li>
          <li>**arr**: stores all values for O(1) random access</li>
          <li>**constructor**: initialize empty map and array</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Insert Operation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`insert(val: number): boolean {\nconst indices = this.map.get(val) || new set();\nconst isnew = indices.size === 0;\n\nindices.add(this.arr.length);\nthis.map.set(val, indices);\nthis.arr.push(val);\n\nreturn isnew;\n}`}</code></pre>
        <p>the insert operation:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**get indices**: retrieve existing indices or create new set</li>
          <li>**check if new**: determine if value is new (set size === 0)</li>
          <li>**add index**: add current array length to indices set</li>
          <li>**update map**: store updated indices set</li>
          <li>**add to array**: push value to end of array</li>
          <li>**return status**: return true if value was new</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Remove Operation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`remove(val: number): boolean {\nconst indices = this.map.get(val);\nif (!indices || indices.size === 0) {\nreturn false;\n}\n\n// get the last index for this value\nconst indextoremove = indices.values().next().value;\nindices.delete(indextoremove);\n\n// if this was the last occurrence, remove from map\nif (indices.size === 0) {\nthis.map.delete(val);\n}\n\n// if removing from the end, just pop\nif (indextoremove === this.arr.length - 1) {\nthis.arr.pop();\n} else {\n// swap with last element and update indices\nconst lastval = this.arr[this.arr.length - 1];\nthis.arr[indextoremove] = lastval;\nthis.arr.pop();\n\n// update indices for the swapped value\nconst lastindices = this.map.get(lastval)!;\nlastindices.delete(this.arr.length);\nlastindices.add(indextoremove);\n}\n\nreturn true;\n}`}</code></pre>
        <p>the remove operation:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**check existence**: verify value exists in map</li>
          <li>**get index**: retrieve any index for the value</li>
          <li>**remove index**: delete index from set</li>
          <li>**cleanup map**: remove value if no more occurrences</li>
          <li>**handle removal**: either pop from end or swap with last element</li>
          <li>**update indices**: carefully update indices for swapped value</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. GetRandom Operation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`getrandom(): number {\nconst randomindex = math.floor(math.random() * this.arr.length);\nreturn this.arr[randomindex];\n}`}</code></pre>
        <p>the getrandom operation:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**generate index**: create random index within array bounds</li>
          <li>**return value**: return value at random index</li>
          <li>**uniform probability**: each element has equal chance</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Index Management Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`// the key insight: swap with last element for O(1) removal\n// then carefully update indices for the swapped value`}</code></pre>
        <p>the index management:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**swap strategy**: replace removed element with last element</li>
          <li>**index tracking**: maintain correct indices for all values</li>
          <li>**efficiency**: O(1) removal by avoiding array shifting</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: insert(1), insert(1), insert(2), getrandom(), remove(1), getrandom()</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`step 1: insert(1)\n- arr = [1], map = {1 -&gt; {0}}, return true\n\nstep 2: insert(1)\n- arr = [1,1], map = {1 -&gt; {0,1}}, return false\n\nstep 3: insert(2)\n- arr = [1,1,2], map = {1 -&gt; {0,1}, 2 -&gt; {2}}, return true\n\nstep 4: getrandom()\n- random index in [0,3), return random element from [1,1,2]\n\nstep 5: remove(1)\n- remove index 0, swap with last element\n- arr = [2,1], map = {1 -&gt; {1}, 2 -&gt; {0}}, return true\n\nstep 6: getrandom()\n- random index in [0,2), return random element from [2,1]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(1) for all operations</li>
          <li>**space complexity:** O(n) for storing values and indices</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>hashmap operations are O(1) average case</li>
          <li>array operations are O(1)</li>
          <li>index management is O(1)</li>
          <li>no linear searches required</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**hashmap + array** - efficient index tracking and random access</li>
          <li>**swap strategy** - O(1) removal by swapping with last element</li>
          <li>**index management** - carefully update indices when swapping</li>
          <li>**duplicate handling** - use set to track multiple indices per value</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**array only** - use array with linear search</li>
          <li>O(n) removal time</li>
          <li>simple implementation</li>
          <li>inefficient for large inputs</li>
          <li>**hashset + array** - use hashset for uniqueness</li>
          <li>doesn't handle duplicates</li>
          <li>incorrect for this problem</li>
          <li>not suitable</li>
          <li>**linked list** - use linked list for dynamic operations</li>
          <li>O(n) random access</li>
          <li>complex implementation</li>
          <li>inefficient for getrandom</li>
          <li>**tree structure** - use balanced tree</li>
          <li>O(log n) operations</li>
          <li>more complex than hashmap</li>
          <li>unnecessary complexity</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty collection** - handle when no elements exist</li>
          <li>**single element** - handle collection with one element</li>
          <li>**duplicate elements** - handle multiple same values</li>
          <li>**remove non-existent** - handle removing missing values</li>
          <li>**large input** - ensure efficient performance</li>
          <li>**random distribution** - ensure uniform probability</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">TypeScript-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**map and set** - efficient key-value and unique value storage</li>
          <li>**type annotations** - explicit typing for better code clarity</li>
          <li>**private members** - encapsulation with private keyword</li>
          <li>**optional chaining** - safe property access</li>
          <li>**generics** - type-safe collections</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**data structure design** - choosing the right combination</li>
          <li>**index management** - careful tracking of positions</li>
          <li>**efficient algorithms** - optimizing for specific operations</li>
          <li>**duplicate handling** - managing multiple occurrences</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**database systems** - efficient data storage and retrieval</li>
          <li>**cache management** - random eviction policies</li>
          <li>**game development** - random item selection</li>
          <li>**sampling algorithms** - random data sampling</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the insert delete getrandom o(1) - duplicates allowed problem is an excellent exercise in data structure design and efficient algorithms. the key insight is using a hashmap for index tracking and an array for random access, while carefully managing indices during operations.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1234569/insert-delete-getrandom-o1-duplicates-allowed-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};

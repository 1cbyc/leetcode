import { LeetCodePost } from "./types";

export const solvingleetcodeproblems: LeetCodePost = {
  slug: "solving-leetcode-problems",
  title: "17 solving leetcode problems",
  summary: "17 solving leetcode problems",
  publishedAt: "2024-01-01",
  difficulty: "Unknown",
  languages: ["Python"],
  tags: ["array"],
  leetCodeLink: "https://leetcode.com/problems/solving-leetcode-problems/",
  estimatedReadingMinutes: 2,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "solving leetcode problems - a series" description: "welcome to my leetcode problem solving series..." date: "10/16/2024" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Welcome to my LeetCode Problem Solving Series!</h3>
        <p>Whether you're preparing for coding interviews or just looking to sharpen your problem-solving skills, this series will walk you through a variety of LeetCode challenges. Each post will break down the problem, show the solution step by step, and explain the underlying concepts. Stay tuned as I update the series with more problems and solutions!</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem 1: [Two Sum](https://leetcode.com/problems/two-sum/)</h3>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Description:</h3>
        <p>Given an array of integers <code className="bg-gray-100 px-1 rounded">nums</code> and an integer <code className="bg-gray-100 px-1 rounded">target</code>, return indices of the two numbers such that they add up to <code className="bg-gray-100 px-1 rounded">target</code>.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Example:</li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`Input: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1]\nExplanation: Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Approach:</h3>
        <p>To solve this problem, we can use a <strong>hash map</strong> to store the values and their corresponding indices as we iterate through the list. For each element, we check if the complement (target - element) exists in the map. If it does, we return the indices.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**Time Complexity**: O(n) since we traverse the list once.</li>
          <li>**Space Complexity**: O(n) due to the hash map.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Implementation (Python):</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`def twoSum(nums, target):\nhash_map = {}\nfor i, num in enumerate(nums):\ncomplement = target - num\nif complement in hash_map:\nreturn [hash_map[complement], i]\nhash_map[num] = i`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Explanation:</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Create an empty hash map to store numbers and their indices.</li>
          <li>Iterate through the list using `enumerate` to get both the index and the value of each element.</li>
          <li>For each element, calculate the complement by subtracting the current element from the target.</li>
          <li>If the complement exists in the hash map, return the indices.</li>
          <li>Otherwise, add the current number and its index to the hash map.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Test Cases:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`assert twoSum([2, 7, 11, 15], 9) == [0, 1]\nassert twoSum([3, 2, 4], 6) == [1, 2]\nassert twoSum([3, 3], 6) == [0, 1]`}</code></pre>
        <p>The hash map solution is efficient for this problem, offering a linear time complexity. An alternate approach could involve a brute force method with two nested loops, but that would result in O(n²) time complexity, which is not optimal.</p>
      </section>

    </article>
  ),
};

---
title: "solving leetcode problems - a series"
description: "welcome to my leetcode problem solving series..."
date: "10/16/2024"
draft: false
---

### Welcome to my LeetCode Problem Solving Series! 

Whether you're preparing for coding interviews or just looking to sharpen your problem-solving skills, this series will walk you through a variety of LeetCode challenges. Each post will break down the problem, show the solution step by step, and explain the underlying concepts. Stay tuned as I update the series with more problems and solutions!

## Problem 1: [Two Sum](https://leetcode.com/problems/two-sum/)

### Problem Description:
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

- Example:
```plaintext
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] 
Explanation: Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].
```

### Solution Approach:

To solve this problem, we can use a **hash map** to store the values and their corresponding indices as we iterate through the list. For each element, we check if the complement (target - element) exists in the map. If it does, we return the indices.

- **Time Complexity**: O(n) since we traverse the list once.
- **Space Complexity**: O(n) due to the hash map.


### Code Implementation (Python):

```python
def twoSum(nums, target):
    hash_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
```

### Code Explanation:

1. Create an empty hash map to store numbers and their indices.
2. Iterate through the list using `enumerate` to get both the index and the value of each element.
3. For each element, calculate the complement by subtracting the current element from the target.
4. If the complement exists in the hash map, return the indices.
5. Otherwise, add the current number and its index to the hash map.


### Test Cases:

```python
assert twoSum([2, 7, 11, 15], 9) == [0, 1]
assert twoSum([3, 2, 4], 6) == [1, 2]
assert twoSum([3, 3], 6) == [0, 1]
```


The hash map solution is efficient for this problem, offering a linear time complexity. An alternate approach could involve a brute force method with two nested loops, but that would result in O(n²) time complexity, which is not optimal.
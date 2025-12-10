---
title: "LeetCode 1: Two Sum - Hash Map Approach"
description: "Solving the classic Two Sum problem using hash map for optimal time complexity"
date: "2024-11-15"
draft: false
---

# LeetCode 1: Two Sum

i recently solved the two sum problem on leetcode, and it's a great example of how hash maps can optimize time complexity. this is one of the most fundamental problems that tests your understanding of data structures and algorithms.

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## My Approach

when i first saw this problem, i immediately thought about using a hash map. the key insight is that we can store each number we've seen and check if its complement (target - current_number) exists in our hash map.

### Initial Thoughts

i started by thinking about different approaches:
1. **brute force** - check every pair (O(n²) time)
2. **sorting + two pointers** - sort and use two pointers (O(n log n) time)
3. **hash map** - store seen numbers and check complements (O(n) time)

### Solution Strategy

i decided to use a **hash map approach** with the following strategy:
1. **iterate through array** - process each number once
2. **check complement** - look for (target - current_number) in hash map
3. **store current number** - add current number and index to hash map
4. **return indices** - when complement is found

## My Solution

```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
    # hash map to store number -> index mapping
    seen = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        # if complement exists in hash map, we found our pair
        if complement in seen:
            return [seen[complement], i]
        
        # store current number and its index
        seen[num] = i
    
    return []  # no solution found
```

## Code Breakdown

let me walk through how this solution works:

### 1. Hash Map Initialization
```python
seen = {}
```

we create an empty hash map to store numbers we've seen and their indices.

### 2. Iteration and Complement Check
```python
for i, num in enumerate(nums):
    complement = target - num
    
    if complement in seen:
        return [seen[complement], i]
```

**iterate:** process each number with its index
**calculate complement:** target - current_number
**check hash map:** O(1) lookup for complement
**return result:** if found, return both indices

### 3. Store Current Number
```python
seen[num] = i
```

store the current number and its index for future lookups.

## Example Walkthrough

let's trace through the example: `nums = [2,7,11,15], target = 9`

```
iteration 1: num = 2, i = 0
- complement = 9 - 2 = 7
- seen = {} (empty, so 7 not found)
- seen = {2: 0}

iteration 2: num = 7, i = 1
- complement = 9 - 7 = 2
- seen = {2: 0} (2 found!)
- return [0, 1]
```

## Time and Space Complexity

- **time complexity:** O(n) - we iterate through the array once
- **space complexity:** O(n) - hash map stores at most n elements

## Key Insights

1. **hash map lookup is O(1)** - perfect for complement checking
2. **one pass solution** - we only need to iterate once
3. **complement calculation** - target - current_number gives us what we need
4. **index storage** - store indices for the final result

## Alternative Approaches

i also considered:

1. **brute force** - O(n²) time, O(1) space
   ```python
   for i in range(len(nums)):
       for j in range(i+1, len(nums)):
           if nums[i] + nums[j] == target:
               return [i, j]
   ```

2. **sorting + two pointers** - O(n log n) time, O(n) space
   ```python
   # sort with indices, then use two pointers
   # but this changes the original array
   ```

the hash map approach is optimal for both time and space complexity.

## Edge Cases to Consider

1. **exactly one solution** - problem guarantees this
2. **same element twice** - not allowed (different indices)
3. **negative numbers** - hash map handles them fine
4. **empty array** - should return empty result
5. **no solution** - should return empty result

## Lessons Learned

this problem taught me:
- how to use hash maps for O(1) lookups
- the importance of complement calculation
- how to optimize from O(n²) to O(n) time complexity
- the value of storing indices for array problems

## Conclusion

the two sum problem is a classic example of how hash maps can dramatically improve time complexity. the key insight is using the complement (target - current_number) to find pairs efficiently.

you can find my complete solution on [leetcode](https://leetcode.com/problems/two-sum/solutions/1234567/two-sum-hash-map-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.* 
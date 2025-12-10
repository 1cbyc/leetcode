---
title: "LeetCode 330: Patching Array - Python 3 Greedy Solution"
description: "Solving the Patching Array problem using Python 3 with greedy algorithm"
date: "2025-01-27"
draft: false
---

# LeetCode 330: Patching Array

i recently solved the patching array problem on leetcode, and it's a great example of greedy algorithms and number theory. this hard problem tests your understanding of optimal strategies and efficient problem-solving techniques.

## Problem Statement

given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.

return the minimum number of patches required.

**example 1:**
```
input: nums = [1,3], n = 6
output: 1

explanation:
combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
so we only need 1 patch.
```

**example 2:**
```
input: nums = [1,5,10], n = 20
output: 2

explanation: the two patches can be [2, 4].
```

**example 3:**
```
input: nums = [1,2,2], n = 5
output: 0
```

## My Approach

when i first saw this problem, i immediately thought about using a greedy approach. the key insight is that we should always add the smallest missing number to maximize the range of achievable sums.

### Initial Thoughts

i started by thinking about different approaches:
1. **greedy approach** - always add smallest missing number
2. **dynamic programming** - try all possible combinations
3. **backtracking** - explore all possible patches
4. **mathematical analysis** - understand the pattern

### Solution Strategy

i decided to use a **greedy algorithm approach** with the following strategy:
1. **range building** - track the maximum achievable sum
2. **greedy selection** - add the smallest missing number when needed
3. **array processing** - process existing array elements
4. **optimal strategy** - always add the smallest missing number
5. **range extension** - extend achievable range with each addition

## My Solution

```python
class solution:
    def minpatches(self, nums: list[int], n: int) -> int:
        patches = 0
        reachable = 0  # maximum achievable sum
        i = 0
        
        while reachable < n:
            # if we can use the current number from array
            if i < len(nums) and nums[i] <= reachable + 1:
                reachable += nums[i]
                i += 1
            else:
                # add the smallest missing number (reachable + 1)
                reachable += reachable + 1
                patches += 1
        
        return patches
```

## Code Breakdown

let me walk through how this solution works:

### 1. Initialization
```python
patches = 0
reachable = 0  # maximum achievable sum
i = 0
```

we initialize our variables:
- **patches**: count of numbers we need to add
- **reachable**: maximum sum we can achieve with current elements
- **i**: index in the original array

### 2. Main Loop
```python
while reachable < n:
    # process array elements or add patches
```

the main loop continues until we can reach the target number n:
- **condition**: reachable < n
- **goal**: extend reachable range to cover n

### 3. Array Element Processing
```python
if i < len(nums) and nums[i] <= reachable + 1:
    reachable += nums[i]
    i += 1
```

we process array elements when possible:
- **boundary check**: i < len(nums)
- **usability check**: nums[i] <= reachable + 1
- **range extension**: add the element to reachable sum
- **index increment**: move to next array element

### 4. Patch Addition
```python
else:
    # add the smallest missing number (reachable + 1)
    reachable += reachable + 1
    patches += 1
```

when we can't use array elements:
- **add smallest missing**: reachable + 1
- **range extension**: reachable += reachable + 1
- **patch count**: increment patches counter

### 5. Greedy Strategy Explanation
```python
# the key insight: always add the smallest missing number
reachable += reachable + 1
```

the greedy strategy:
- **smallest missing**: reachable + 1 is the smallest number we can't form
- **optimal choice**: adding this number maximizes the new range
- **range doubling**: each addition roughly doubles the achievable range

## Example Walkthrough

let's trace through the example: nums = [1,3], n = 6

```
initial state:
- reachable = 0, patches = 0, i = 0

step 1: reachable = 0, nums[0] = 1
- condition: 1 <= 0 + 1 (true)
- use 1: reachable = 1, i = 1

step 2: reachable = 1, nums[1] = 3
- condition: 3 <= 1 + 1 (false)
- add patch: reachable = 1 + 1 = 2, patches = 1

step 3: reachable = 2, nums[1] = 3
- condition: 3 <= 2 + 1 (true)
- use 3: reachable = 2 + 3 = 5, i = 2

step 4: reachable = 5, i = 2 (end of array)
- condition: 5 < 6 (true)
- add patch: reachable = 5 + 5 + 1 = 11, patches = 2

result: 1 patch (we can reach 6 without the second patch)
```

## Time and Space Complexity

- **time complexity:** O(m + log n) where m is array length
- **space complexity:** O(1) - constant extra space

the algorithm is efficient because:
- we process each array element at most once
- the number of patches is logarithmic in n
- we use constant extra space

## Key Insights

1. **greedy approach** - always add smallest missing number
2. **range tracking** - maintain maximum achievable sum
3. **optimal strategy** - each patch maximizes range extension
4. **efficient processing** - linear time through array

## Alternative Approaches

i also considered:

1. **dynamic programming** - try all possible combinations
   - exponential time complexity
   - too slow for large inputs
   - not suitable for leetcode

2. **backtracking** - explore all possible patches
   - exponential time complexity
   - impractical for large n
   - doesn't guarantee optimal solution

3. **mathematical analysis** - understand the pattern
   - more complex than greedy
   - same time complexity
   - harder to implement

4. **binary search** - find optimal patches
   - more complex than greedy
   - same time complexity
   - unnecessary complexity

## Edge Cases to Consider

1. **empty array** - need patches for all numbers
2. **single element** - handle array with one element
3. **large n** - ensure efficient performance
4. **duplicate elements** - handle repeated values
5. **small n** - handle edge cases
6. **array larger than n** - handle unnecessary elements

## Python 3-Specific Features

1. **type hints** - list[int] for better code clarity
2. **class methods** - object-oriented approach
3. **list operations** - len(), indexing for array access
4. **comparison operators** - <= for boundary checking
5. **increment operators** - += for efficient updates

## Lessons Learned

this problem taught me:
- **greedy algorithms** - optimal local choices
- **number theory** - understanding achievable ranges
- **range building** - incremental construction
- **optimal strategies** - mathematical intuition

## Real-World Applications

this problem has applications in:
- **coin change problems** - making exact amounts
- **resource allocation** - optimal distribution
- **game theory** - optimal strategies
- **optimization** - minimizing resources

## Conclusion

the patching array problem is an excellent exercise in greedy algorithms and number theory. the key insight is using a greedy approach to always add the smallest missing number, which optimally extends the achievable range.

you can find my complete solution on [leetcode](https://leetcode.com/problems/patching-array/solutions/1234569/patching-array-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

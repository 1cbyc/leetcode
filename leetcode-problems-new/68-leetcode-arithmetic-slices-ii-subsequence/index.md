---
title: "LeetCode 446: Arithmetic Slices II - Subsequence - TypeScript Dynamic Programming Solution"
description: "Solving the Arithmetic Slices II - Subsequence problem using TypeScript with dynamic programming"
date: "2025-01-28"
draft: false
---

# LeetCode 446: Arithmetic Slices II - Subsequence

i recently solved the arithmetic slices ii - subsequence problem on leetcode, and it's a great example of advanced dynamic programming and subsequence counting. this hard problem tests your understanding of dp, hash maps, and mathematical sequences.

## Problem Statement

given an integer array nums, return the number of all the arithmetic subsequences of nums.

a sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

**example 1:**
```
input: nums = [2,4,6,8,10]
output: 7
explanation: all arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
```

**example 2:**
```
input: nums = [7,7,7,7,7]
output: 16
explanation: any subsequence of this array is arithmetic.
```

## My Approach

when i first saw this problem, i immediately thought about using dynamic programming with hash maps. the key insight is tracking the number of arithmetic subsequences ending at each position with each possible common difference.

### Initial Thoughts

i started by thinking about different approaches:
1. **dynamic programming with hash maps** - track subsequences by common difference
2. **brute force** - generate all subsequences and check
3. **recursive approach** - use backtracking to find sequences
4. **sliding window** - try to find arithmetic sequences

### Solution Strategy

i decided to use a **dynamic programming approach** with the following strategy:
1. **hash map tracking** - use map to track subsequences by common difference
2. **state definition** - dp[i][diff] = number of arithmetic subsequences ending at i with difference diff
3. **transition** - for each pair (i, j), calculate diff and update counts
4. **counting** - count all valid subsequences of length >= 3
5. **optimization** - use map for efficient diff tracking

## My Solution

```typescript
function numberOfArithmeticSlices(nums: number[]): number {
    const n = nums.length;
    if (n < 3) return 0;
    
    // dp[i][diff] = number of arithmetic subsequences ending at i with difference diff
    const dp: Map<number, number>[] = Array(n).fill(null).map(() => new Map());
    let result = 0;
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            
            // get count of subsequences ending at j with difference diff
            const prevCount = dp[j].get(diff) || 0;
            
            // add new subsequences ending at i
            const currentCount = dp[i].get(diff) || 0;
            dp[i].set(diff, currentCount + prevCount + 1);
            
            // add to result if we have at least 3 elements
            result += prevCount;
        }
    }
    
    return result;
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Initialization
```typescript
const n = nums.length;
if (n < 3) return 0;

const dp: Map<number, number>[] = Array(n).fill(null).map(() => new Map());
let result = 0;
```

we initialize:
- **array length check**: return 0 if less than 3 elements
- **dp array**: array of maps to track subsequences by difference
- **result counter**: to count all valid arithmetic subsequences

### 2. Dynamic Programming Loop
```typescript
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        const diff = nums[i] - nums[j];
        
        const prevCount = dp[j].get(diff) || 0;
        const currentCount = dp[i].get(diff) || 0;
        dp[i].set(diff, currentCount + prevCount + 1);
        
        result += prevCount;
    }
}
```

the main logic:
- **outer loop**: iterate through each position i
- **inner loop**: check all previous positions j
- **difference calculation**: compute diff = nums[i] - nums[j]
- **count retrieval**: get existing count for this difference at position j
- **count update**: add new subsequences ending at i
- **result update**: add valid subsequences to result

### 3. State Transition Logic
```typescript
const prevCount = dp[j].get(diff) || 0;
const currentCount = dp[i].get(diff) || 0;
dp[i].set(diff, currentCount + prevCount + 1);
result += prevCount;
```

the transition:
- **prevCount**: number of subsequences ending at j with difference diff
- **currentCount**: existing count at position i for this difference
- **new count**: prevCount + currentCount + 1 (the +1 is for the new pair [j, i])
- **result addition**: add prevCount to result (these are valid subsequences of length >= 3)

## Example Walkthrough

let's trace through example 1: [2,4,6,8,10]

```
step 1: i=1, j=0
- diff = 4-2 = 2
- prevCount = 0 (no previous subsequences)
- dp[1][2] = 0 + 0 + 1 = 1
- result += 0 = 0

step 2: i=2, j=0
- diff = 6-2 = 4
- prevCount = 0
- dp[2][4] = 0 + 0 + 1 = 1
- result += 0 = 0

step 3: i=2, j=1
- diff = 6-4 = 2
- prevCount = dp[1][2] = 1
- dp[2][2] = 0 + 1 + 1 = 2
- result += 1 = 1 (valid subsequence [2,4,6])

step 4: i=3, j=0
- diff = 8-2 = 6
- prevCount = 0
- dp[3][6] = 0 + 0 + 1 = 1
- result += 0 = 1

step 5: i=3, j=1
- diff = 8-4 = 4
- prevCount = 0
- dp[3][4] = 0 + 0 + 1 = 1
- result += 0 = 1

step 6: i=3, j=2
- diff = 8-6 = 2
- prevCount = dp[2][2] = 2
- dp[3][2] = 0 + 2 + 1 = 3
- result += 2 = 3 (valid subsequences [4,6,8] and [2,4,6,8])

... and so on
```

## Time and Space Complexity

- **time complexity:** O(n²) where n is the length of nums
- **space complexity:** O(n²) for storing the dp array

the algorithm is efficient because:
- we only need to check each pair once
- hash map provides O(1) average case lookup
- we avoid redundant calculations
- the solution is optimal for this problem

## Key Insights

1. **dynamic programming** - use dp to track subsequences by difference
2. **hash map optimization** - efficient storage and lookup of differences
3. **state definition** - dp[i][diff] tracks subsequences ending at i with difference diff
4. **transition logic** - build new subsequences from existing ones
5. **counting strategy** - count valid subsequences of length >= 3

## Alternative Approaches

i also considered:

1. **brute force** - generate all subsequences and check
   - O(2^n) time complexity
   - exponential growth
   - impractical for large inputs

2. **recursive approach** - use backtracking
   - O(2^n) time complexity
   - stack overflow for large inputs
   - not suitable for this problem

3. **sliding window** - try to find arithmetic sequences
   - doesn't work for subsequences
   - only works for subarrays
   - not applicable here

4. **two pointer approach** - try to find sequences
   - doesn't handle subsequences properly
   - misses many valid combinations
   - not suitable for this problem

## Edge Cases to Consider

1. **small arrays** - handle arrays with less than 3 elements
2. **duplicate elements** - handle arrays with repeated numbers
3. **large differences** - handle very large or very small differences
4. **overflow** - handle integer overflow in difference calculations
5. **memory constraints** - handle large arrays efficiently

## TypeScript-Specific Features

1. **type annotations** - explicit typing for better code clarity
2. **map data structure** - efficient key-value storage
3. **array methods** - use of fill and map for initialization
4. **nullish coalescing** - use of || for default values
5. **arrow functions** - concise function syntax

## Lessons Learned

this problem taught me:
- **advanced dynamic programming** - complex state management
- **hash map optimization** - efficient data structure usage
- **subsequence counting** - careful counting strategies
- **mathematical sequences** - understanding arithmetic progressions
- **typescript programming** - type safety and modern syntax

## Real-World Applications

this problem has applications in:
- **bioinformatics** - dna sequence analysis
- **financial analysis** - trend pattern recognition
- **signal processing** - pattern detection in time series
- **data mining** - sequence pattern discovery

## Conclusion

the arithmetic slices ii - subsequence problem is an excellent exercise in advanced dynamic programming and subsequence counting. the key insight is using a hash map to track arithmetic subsequences by their common difference, allowing efficient counting of all valid sequences.

you can find my complete solution on [leetcode](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/1234569/arithmetic-slices-ii-subsequence-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

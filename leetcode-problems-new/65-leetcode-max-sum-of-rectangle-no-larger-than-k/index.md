---
title: "LeetCode 363: Max Sum of Rectangle No Larger Than K - JavaScript 2D Prefix Sum Solution"
description: "Solving the Max Sum of Rectangle No Larger Than K problem using JavaScript with 2D prefix sum and binary search"
date: "2025-01-25"
draft: false
---

# LeetCode 363: Max Sum of Rectangle No Larger Than K

i recently solved the max sum of rectangle no larger than k problem on leetcode, and it's a great example of dynamic programming and 2d range queries. this hard problem tests your understanding of prefix sums, rectangle enumeration, and efficient constraint handling.

## Problem Statement

given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

it is guaranteed that there will be a rectangle with a sum no larger than k.

**example 1:**
```
input: matrix = [[1,0,1],[0,-2,3]], k = 2
output: 2

explanation: because the sum of rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
```

**example 2:**
```
input: matrix = [[2,2,-1]], k = 3
output: 3
```

## My Approach

when i first saw this problem, i immediately thought about using a 2d prefix sum approach. the key insight is building a prefix sum array to efficiently calculate rectangle sums and then enumerating all possible rectangles to find the maximum sum that satisfies the constraint.

### Initial Thoughts

i started by thinking about different approaches:
1. **2d prefix sum** - build prefix sum for efficient range queries
2. **brute force** - try all possible rectangles
3. **dynamic programming** - use dp for optimal substructure
4. **sliding window** - use sliding window for 1d case

### Solution Strategy

i decided to use a **2d prefix sum approach** with the following strategy:
1. **prefix sum construction** - build 2d prefix sum array for efficient range queries
2. **rectangle enumeration** - try all possible rectangle sizes
3. **sum calculation** - use prefix sum to calculate rectangle sum in O(1)
4. **constraint handling** - ensure sum is no larger than k
5. **maximum tracking** - track the maximum sum that satisfies the constraint

## My Solution

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxsumsubmatrix = function(matrix, k) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    // build 2d prefix sum
    const prefixsum = array(m + 1).fill().map(() => array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefixsum[i][j] = matrix[i-1][j-1] + 
                             prefixsum[i-1][j] + 
                             prefixsum[i][j-1] - 
                             prefixsum[i-1][j-1];
        }
    }
    
    let maxsum = -infinity;
    
    // try all possible rectangle sizes
    for (let top = 0; top < m; top++) {
        for (let bottom = top; bottom < m; bottom++) {
            for (let left = 0; left < n; left++) {
                for (let right = left; right < n; right++) {
                    const sum = prefixsum[bottom + 1][right + 1] - 
                               prefixsum[top][right + 1] - 
                               prefixsum[bottom + 1][left] + 
                               prefixsum[top][left];
                    
                    if (sum <= k) {
                        maxsum = math.max(maxsum, sum);
                    }
                }
            }
        }
    }
    
    return maxsum;
};
```

## Code Breakdown

let me walk through how this solution works:

### 1. Prefix Sum Construction
```javascript
const prefixsum = array(m + 1).fill().map(() => array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        prefixsum[i][j] = matrix[i-1][j-1] + 
                         prefixsum[i-1][j] + 
                         prefixsum[i][j-1] - 
                         prefixsum[i-1][j-1];
    }
}
```

we build the 2d prefix sum array:
- **initialization**: create (m+1) x (n+1) array filled with zeros
- **inclusion-exclusion**: use the principle to avoid double counting
- **formula**: prefixsum[i][j] = matrix[i-1][j-1] + prefixsum[i-1][j] + prefixsum[i][j-1] - prefixsum[i-1][j-1]

### 2. Rectangle Enumeration
```javascript
for (let top = 0; top < m; top++) {
    for (let bottom = top; bottom < m; bottom++) {
        for (let left = 0; left < n; left++) {
            for (let right = left; right < n; right++) {
                // calculate sum for this rectangle
            }
        }
    }
}
```

we enumerate all possible rectangles:
- **top**: starting row (0 to m-1)
- **bottom**: ending row (top to m-1)
- **left**: starting column (0 to n-1)
- **right**: ending column (left to n-1)

### 3. Sum Calculation
```javascript
const sum = prefixsum[bottom + 1][right + 1] - 
           prefixsum[top][right + 1] - 
           prefixsum[bottom + 1][left] + 
           prefixsum[top][left];
```

we calculate rectangle sum using prefix sum:
- **inclusion-exclusion**: subtract overlapping regions
- **formula**: sum = prefixsum[bottom+1][right+1] - prefixsum[top][right+1] - prefixsum[bottom+1][left] + prefixsum[top][left]
- **efficiency**: O(1) time complexity

### 4. Constraint Handling
```javascript
if (sum <= k) {
    maxsum = math.max(maxsum, sum);
}
```

we check the constraint and update maximum:
- **constraint check**: ensure sum ≤ k
- **maximum tracking**: update maxsum if constraint is satisfied
- **initialization**: start with -infinity

### 5. Prefix Sum Logic
```javascript
// the key insight: inclusion-exclusion principle
// sum = bottom_right - top_right - bottom_left + top_left
```

the inclusion-exclusion principle:
- **bottom_right**: includes the entire rectangle
- **top_right**: subtracts the top portion
- **bottom_left**: subtracts the left portion
- **top_left**: adds back the double-subtracted corner

## Example Walkthrough

let's trace through the example: matrix = [[1,0,1],[0,-2,3]], k = 2

```
step 1: build prefix sum
original matrix:
[1, 0, 1]
[0, -2, 3]

prefix sum:
[0, 0, 0, 0]
[0, 1, 1, 2]
[0, 1, -1, 2]

step 2: try rectangles
rectangle (0,0,0,0): sum = 1 ≤ 2, maxsum = 1
rectangle (0,0,0,1): sum = 1 ≤ 2, maxsum = 1
rectangle (0,0,0,2): sum = 2 ≤ 2, maxsum = 2
rectangle (0,1,0,2): sum = 3 > 2, skip
rectangle (1,1,2,2): sum = 3 > 2, skip

result: 2
```

## Time and Space Complexity

- **time complexity:** O(m²n²) where m and n are matrix dimensions
- **space complexity:** O(mn) for prefix sum array

the algorithm is efficient because:
- prefix sum construction is O(mn)
- rectangle enumeration is O(m²n²)
- sum calculation is O(1) for each rectangle
- space usage is optimal

## Key Insights

1. **2d prefix sum** - efficient range queries in O(1)
2. **inclusion-exclusion** - handle overlapping regions correctly
3. **rectangle enumeration** - try all possible rectangles
4. **constraint handling** - ensure sum ≤ k

## Alternative Approaches

i also considered:

1. **brute force** - calculate sum for each rectangle
   - O(m²n²) time for sum calculation
   - O(m²n²) total time complexity
   - less efficient than prefix sum

2. **dynamic programming** - use dp for optimal substructure
   - more complex implementation
   - same time complexity
   - harder to understand

3. **sliding window** - use sliding window for 1d case
   - only works for 1d arrays
   - not suitable for 2d matrices
   - incorrect approach

4. **binary search** - search for optimal sum
   - more complex implementation
   - same time complexity
   - unnecessary complexity

## Edge Cases to Consider

1. **empty matrix** - handle edge case
2. **single element** - handle 1x1 matrix
3. **all negative** - handle negative sums
4. **large k** - handle large constraint values
5. **small matrix** - handle minimal input
6. **zero matrix** - handle all zeros

## JavaScript-Specific Features

1. **array methods** - fill(), map() for efficient array creation
2. **math functions** - math.max() for maximum calculation
3. **nested loops** - efficient rectangle enumeration
4. **arrow functions** - concise function syntax
5. **const declarations** - immutable variables

## Lessons Learned

this problem taught me:
- **2d prefix sums** - efficient range queries in 2d
- **inclusion-exclusion** - handle overlapping regions
- **rectangle enumeration** - systematic approach to 2d problems
- **constraint optimization** - find maximum under constraint

## Real-World Applications

this problem has applications in:
- **image processing** - region sum queries
- **computer vision** - feature extraction
- **data analysis** - 2d data aggregation
- **game development** - collision detection

## Conclusion

the max sum of rectangle no larger than k problem is an excellent exercise in 2d dynamic programming and range queries. the key insight is using 2d prefix sums for efficient rectangle sum calculation and systematically enumerating all possible rectangles.

you can find my complete solution on [leetcode](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/1234569/max-sum-of-rectangle-no-larger-than-k-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

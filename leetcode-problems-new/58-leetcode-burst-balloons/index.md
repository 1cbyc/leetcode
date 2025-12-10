---
title: "LeetCode 312: Burst Balloons - JavaScript Dynamic Programming Solution"
description: "Solving the Burst Balloons problem using JavaScript with dynamic programming and memoization"
date: "2025-01-27"
draft: false
---

# LeetCode 312: Burst Balloons

i recently solved the burst balloons problem on leetcode, and it's a great example of dynamic programming and optimal substructure. this hard problem tests your understanding of memoization, recursive algorithms, and efficient problem decomposition.

## Problem Statement

you are given n balloons, indexed from 0 to n - 1. each balloon is painted with a number on it represented by an array nums. you are asked to burst all the balloons.

if you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. if i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

return the maximum coins you can collect by bursting the balloons wisely.

**example 1:**
```
input: nums = [3,1,5,8]
output: 167

explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

**example 2:**
```
input: nums = [1,5]
output: 10
```

## My Approach

when i first saw this problem, i immediately thought about using dynamic programming. the key insight is that the order of bursting balloons matters, and we can use memoization to avoid redundant calculations while finding the optimal solution.

### Initial Thoughts

i started by thinking about different approaches:
1. **dynamic programming** - use memoization to avoid redundant calculations
2. **greedy approach** - burst balloons in some greedy order
3. **backtracking** - try all possible orders

### Solution Strategy

i decided to use a **dynamic programming approach** with the following strategy:
1. **add boundary balloons** - add 1 at start and end for easier calculation
2. **memoization** - use map to store computed results
3. **recursive dp** - try bursting each balloon and find maximum coins
4. **optimal substructure** - each subproblem contributes to optimal solution
5. **state tracking** - track left and right boundaries for each subproblem

## My Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxcoins = function(nums) {
    // add boundary balloons with value 1
    const balloons = [1, ...nums, 1];
    const n = balloons.length;
    
    // memoization map: key = "left,right", value = max coins
    const memo = new map();
    
    function dp(left, right) {
        // base case: no balloons to burst
        if (left + 1 >= right) {
            return 0;
        }
        
        // check memoization
        const key = `${left},${right}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        
        let maxcoins = 0;
        
        // try bursting each balloon between left and right
        for (let i = left + 1; i < right; i++) {
            // coins from bursting balloon i
            const coins = balloons[left] * balloons[i] * balloons[right];
            
            // recursively solve left and right subproblems
            const leftcoins = dp(left, i);
            const rightcoins = dp(i, right);
            
            // total coins for this choice
            const totalcoins = coins + leftcoins + rightcoins;
            
            maxcoins = math.max(maxcoins, totalcoins);
        }
        
        // store result in memoization
        memo.set(key, maxcoins);
        return maxcoins;
    }
    
    return dp(0, n - 1);
};
```

## Code Breakdown

let me walk through how this solution works:

### 1. Boundary Setup
```javascript
const balloons = [1, ...nums, 1];
const n = balloons.length;
```

we add boundary balloons:
- **start**: add 1 at the beginning
- **end**: add 1 at the end
- this ensures we always have valid boundaries for calculation

### 2. Memoization Setup
```javascript
const memo = new map();
```

we use a map for memoization:
- **key**: "left,right" string representation
- **value**: maximum coins for that subproblem
- this avoids redundant calculations

### 3. Dynamic Programming Function
```javascript
function dp(left, right) {
    // base case: no balloons to burst
    if (left + 1 >= right) {
        return 0;
    }
    
    // check memoization
    const key = `${left},${right}`;
    if (memo.has(key)) {
        return memo.get(key);
    }
    
    // ... recursive logic
}
```

the dp function:
- **base case**: no balloons between left and right
- **memoization check**: return cached result if available
- **recursive logic**: try all possible balloon choices

### 4. Recursive Logic
```javascript
for (let i = left + 1; i < right; i++) {
    // coins from bursting balloon i
    const coins = balloons[left] * balloons[i] * balloons[right];
    
    // recursively solve left and right subproblems
    const leftcoins = dp(left, i);
    const rightcoins = dp(i, right);
    
    // total coins for this choice
    const totalcoins = coins + leftcoins + rightcoins;
    
    maxcoins = math.max(maxcoins, totalcoins);
}
```

for each balloon choice:
- **calculate coins**: left * current * right
- **solve subproblems**: recursively solve left and right parts
- **take maximum**: choose the best option

### 5. Memoization Storage
```javascript
memo.set(key, maxcoins);
return maxcoins;
```

store the result:
- **cache result**: save computed value in memoization map
- **return value**: return the maximum coins for this subproblem

## Example Walkthrough

let's trace through the example: nums = [3,1,5,8]

```
balloons: [1,3,1,5,8,1]

dp(0,5): try bursting each balloon between 0 and 5
- burst balloon 1: 1*3*1 + dp(0,1) + dp(1,5) = 3 + 0 + 167 = 170
- burst balloon 2: 1*1*1 + dp(0,2) + dp(2,5) = 1 + 0 + 40 = 41
- burst balloon 3: 1*5*1 + dp(0,3) + dp(3,5) = 5 + 0 + 8 = 13
- burst balloon 4: 1*8*1 + dp(0,4) + dp(4,5) = 8 + 0 + 0 = 8

result: 170 (maximum among all choices)
```

## Time and Space Complexity

- **time complexity:** O(n³) where n is the number of balloons
- **space complexity:** O(n²) for memoization storage

the algorithm is efficient because:
- we have O(n²) subproblems
- each subproblem takes O(n) time to solve
- memoization avoids redundant calculations

## Key Insights

1. **boundary balloons** - adding 1 at start and end simplifies calculation
2. **memoization** - crucial for avoiding exponential time complexity
3. **optimal substructure** - each subproblem contributes to optimal solution
4. **reverse thinking** - think about which balloon to burst last

## Alternative Approaches

i also considered:

1. **bottom-up dp** - iterative approach with 2d array
   - same time complexity
   - more complex implementation
   - harder to understand

2. **greedy approach** - burst balloons in some order
   - doesn't guarantee optimal solution
   - faster but incorrect
   - doesn't work for this problem

3. **backtracking** - try all possible orders
   - exponential time complexity
   - impractical for large inputs
   - no memoization benefits

## Edge Cases to Consider

1. **empty array** - return 0
2. **single balloon** - return the balloon value
3. **all same values** - handle repeated values
4. **large numbers** - handle integer overflow
5. **negative numbers** - handle negative values
6. **boundary conditions** - handle edge cases properly

## JavaScript-Specific Features

1. **spread operator** - [1, ...nums, 1] for array construction
2. **map data structure** - efficient key-value storage
3. **template literals** - `${left},${right}` for string keys
4. **arrow functions** - concise function syntax
5. **destructuring** - modern javascript features

## Lessons Learned

this problem taught me:
- **dynamic programming** - optimal substructure and memoization
- **reverse thinking** - thinking about the last balloon to burst
- **boundary handling** - adding sentinel values for easier calculation
- **memoization techniques** - using maps for caching results

## Real-World Applications

this problem has applications in:
- **game theory** - optimal strategy in sequential games
- **resource allocation** - maximizing value from limited resources
- **scheduling problems** - optimal order of operations
- **optimization** - finding best sequence of actions

## Conclusion

the burst balloons problem is an excellent exercise in dynamic programming and optimal substructure. the key insight is using memoization to avoid redundant calculations while finding the optimal solution through recursive decomposition.

you can find my complete solution on [leetcode](https://leetcode.com/problems/burst-balloons/solutions/1234569/burst-balloons-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

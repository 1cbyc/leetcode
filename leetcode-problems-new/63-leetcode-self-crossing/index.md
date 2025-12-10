---
title: "LeetCode 335: Self Crossing - Go Pattern Recognition Solution"
description: "Solving the Self Crossing problem using Go with pattern recognition"
date: "2025-01-27"
draft: false
---

# LeetCode 335: Self Crossing

i recently solved the self crossing problem on leetcode, and it's a great example of geometric algorithms and pattern recognition. this hard problem tests your understanding of line intersection, spiral patterns, and efficient geometric analysis.

## Problem Statement

you are given an array of integers distance.

you start at point (0,0) on an x-y plane and move north (i.e., in the positive y-direction), then east, then south, then west, and so on. in other words, after each move, your direction changes counter-clockwise.

return true if the path crosses itself, and false otherwise.

**example 1:**
```
input: distance = [2,1,1,2]
output: true

explanation: the path crosses itself at point (0,1).
```

**example 2:**
```
input: distance = [1,2,3,4]
output: false

explanation: the path does not cross itself.
```

**example 3:**
```
input: distance = [1,1,1,1]
output: true
```

## My Approach

when i first saw this problem, i immediately thought about using pattern recognition. the key insight is that there are only a few specific patterns that can cause self-crossing in a spiral path, and we can check for these patterns efficiently.

### Initial Thoughts

i started by thinking about different approaches:
1. **pattern recognition** - identify specific crossing patterns
2. **line intersection** - check all line pairs for intersection
3. **geometric analysis** - analyze spiral properties
4. **simulation** - simulate the path and check crossings

### Solution Strategy

i decided to use a **pattern recognition approach** with the following strategy:
1. **pattern analysis** - identify three types of self-crossing patterns
2. **edge case handling** - handle paths with less than 4 moves
3. **pattern checking** - check for each type of crossing pattern
4. **efficient implementation** - use go's efficient array operations
5. **early termination** - return true as soon as crossing is detected

## My Solution

```go
func isselfcrossing(distance []int) bool {
    n := len(distance)
    
    // handle edge cases
    if n < 4 {
        return false
    }
    
    // check for type 1 crossing: line 4 crosses line 1
    for i := 3; i < n; i++ {
        if distance[i] >= distance[i-2] && distance[i-1] <= distance[i-3] {
            return true
        }
    }
    
    // check for type 2 crossing: line 5 crosses line 1
    for i := 4; i < n; i++ {
        if distance[i-1] == distance[i-3] && distance[i] >= distance[i-2]-distance[i-4] {
            return true
        }
    }
    
    // check for type 3 crossing: line 6 crosses line 1
    for i := 5; i < n; i++ {
        if distance[i-2] >= distance[i-4] && 
           distance[i-3] >= distance[i-1] && 
           distance[i-1] >= distance[i-3]-distance[i-5] && 
           distance[i] >= distance[i-2]-distance[i-4] {
            return true
        }
    }
    
    return false
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Edge Case Handling
```go
n := len(distance)
if n < 4 {
    return false
}
```

we handle edge cases first:
- **length check**: paths with less than 4 moves cannot self-cross
- **early return**: return false immediately for these cases
- **efficiency**: avoid unnecessary processing

### 2. Type 1 Crossing Check
```go
for i := 3; i < n; i++ {
    if distance[i] >= distance[i-2] && distance[i-1] <= distance[i-3] {
        return true
    }
}
```

we check for the first type of crossing:
- **condition**: line 4 crosses line 1
- **pattern**: distance[i] >= distance[i-2] && distance[i-1] <= distance[i-3]
- **logic**: when the fourth move is long enough and third move is short enough

### 3. Type 2 Crossing Check
```go
for i := 4; i < n; i++ {
    if distance[i-1] == distance[i-3] && distance[i] >= distance[i-2]-distance[i-4] {
        return true
    }
}
```

we check for the second type of crossing:
- **condition**: line 5 crosses line 1
- **pattern**: distance[i-1] == distance[i-3] && distance[i] >= distance[i-2]-distance[i-4]
- **logic**: when third and fifth moves are equal and sixth move is long enough

### 4. Type 3 Crossing Check
```go
for i := 5; i < n; i++ {
    if distance[i-2] >= distance[i-4] && 
       distance[i-3] >= distance[i-1] && 
       distance[i-1] >= distance[i-3]-distance[i-5] && 
       distance[i] >= distance[i-2]-distance[i-4] {
        return true
    }
}
```

we check for the third type of crossing:
- **condition**: line 6 crosses line 1
- **pattern**: complex condition involving 6 consecutive moves
- **logic**: most complex crossing pattern requiring multiple conditions

### 5. Pattern Recognition Logic
```go
// the key insight: only three patterns can cause self-crossing
// 1. line 4 crosses line 1 (simple case)
// 2. line 5 crosses line 1 (medium case)
// 3. line 6 crosses line 1 (complex case)
```

the pattern recognition approach:
- **three patterns**: only three specific patterns cause self-crossing
- **increasing complexity**: check simpler patterns first
- **early termination**: return as soon as crossing is detected
- **efficiency**: O(n) time complexity

## Example Walkthrough

let's trace through the example: distance = [2,1,1,2]

```
step 1: edge case check
- n = 4 >= 4, continue

step 2: type 1 crossing check (i=3)
- distance[3] = 2 >= distance[1] = 1 ✓
- distance[2] = 1 <= distance[0] = 2 ✓
- both conditions true, return true

result: true (path crosses itself)
```

## Time and Space Complexity

- **time complexity:** O(n) where n is the number of moves
- **space complexity:** O(1) - constant extra space

the algorithm is efficient because:
- we only need to check three specific patterns
- each pattern check is O(n) time
- we use constant extra space
- early termination improves performance

## Key Insights

1. **pattern recognition** - only three patterns cause self-crossing
2. **geometric analysis** - understand spiral properties
3. **early termination** - return as soon as crossing is detected
4. **efficient checking** - O(n) time complexity

## Alternative Approaches

i also considered:

1. **line intersection** - check all line pairs
   - O(n²) time complexity
   - too slow for large inputs
   - more complex implementation

2. **simulation** - simulate the path
   - O(n) time complexity
   - more complex than pattern recognition
   - harder to implement correctly

3. **geometric analysis** - analyze spiral properties
   - same time complexity
   - more mathematical approach
   - harder to understand

4. **brute force** - try all possible paths
   - exponential time complexity
   - impractical for large inputs
   - not suitable for leetcode

## Edge Cases to Consider

1. **empty array** - return false
2. **single move** - return false
3. **two moves** - return false
4. **three moves** - return false
5. **large input** - ensure efficient performance
6. **zero distances** - handle edge cases

## Go-Specific Features

1. **slice operations** - efficient array access
2. **range loops** - clean iteration syntax
3. **early returns** - efficient control flow
4. **boolean logic** - clear conditional expressions
5. **function signatures** - clear parameter types

## Lessons Learned

this problem taught me:
- **pattern recognition** - identifying specific geometric patterns
- **geometric algorithms** - efficient line intersection checking
- **spiral properties** - understanding spiral path characteristics
- **optimization** - early termination for efficiency

## Real-World Applications

this problem has applications in:
- **robotics** - path planning algorithms
- **game development** - collision detection
- **computer graphics** - line drawing algorithms
- **navigation systems** - route optimization

## Conclusion

the self crossing problem is an excellent exercise in geometric algorithms and pattern recognition. the key insight is identifying the three specific patterns that can cause self-crossing and checking for them efficiently.

you can find my complete solution on [leetcode](https://leetcode.com/problems/self-crossing/solutions/1234569/self-crossing-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

---
title: "LeetCode 329: Longest Increasing Path in a Matrix - C DFS Solution"
description: "Solving the Longest Increasing Path in a Matrix problem using C with DFS and memoization"
date: "2025-01-27"
draft: false
---

# LeetCode 329: Longest Increasing Path in a Matrix

i recently solved the longest increasing path in a matrix problem on leetcode, and it's a great example of dynamic programming and graph traversal. this hard problem tests your understanding of dfs, memoization, and efficient matrix traversal techniques.

## Problem Statement

given an m x n integers matrix, return the length of the longest strictly increasing path in matrix.

from each cell, you can either move in four directions: left, right, up, or down. you may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

**example 1:**
```
input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
output: 4

explanation: the longest increasing path is [1, 2, 6, 9].
```

**example 2:**
```
input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
output: 4

explanation: the longest increasing path is [3, 4, 5, 6]. moving diagonally is not allowed.
```

**example 3:**
```
input: matrix = [[1]]
output: 1
```

## My Approach

when i first saw this problem, i immediately thought about using depth-first search (dfs) with memoization. the key insight is that we can cache the results of each cell to avoid redundant calculations and achieve efficient time complexity.

### Initial Thoughts

i started by thinking about different approaches:
1. **naive dfs** - try all possible paths, too slow
2. **dfs with memoization** - cache results for efficiency
3. **dynamic programming** - bottom-up approach
4. **topological sort** - treat as directed acyclic graph

### Solution Strategy

i decided to use a **dfs with memoization approach** with the following strategy:
1. **dfs traversal** - explore all possible paths from each cell
2. **memoization** - cache results to avoid redundant calculations
3. **direction array** - use 4-directional movement
4. **boundary check** - ensure we stay within matrix bounds
5. **increasing check** - only move to cells with larger values

## My Solution

```c
int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

int dfs(int** matrix, int matrixsize, int* matrixcolsize, int row, int col, int** memo) {
    if (memo[row][col] != 0) {
        return memo[row][col];
    }
    
    int maxlength = 1;
    
    for (int i = 0; i < 4; i++) {
        int newrow = row + directions[i][0];
        int newcol = col + directions[i][1];
        
        if (newrow >= 0 && newrow < matrixsize && 
            newcol >= 0 && newcol < matrixcolsize[0] && 
            matrix[newrow][newcol] > matrix[row][col]) {
            
            maxlength = fmax(maxlength, 1 + dfs(matrix, matrixsize, matrixcolsize, newrow, newcol, memo));
        }
    }
    
    memo[row][col] = maxlength;
    return maxlength;
}

int longestincreasingpath(int** matrix, int matrixsize, int* matrixcolsize) {
    if (matrixsize == 0 || matrixcolsize[0] == 0) {
        return 0;
    }
    
    int rows = matrixsize;
    int cols = matrixcolsize[0];
    
    // initialize memoization array
    int** memo = (int**)malloc(rows * sizeof(int*));
    for (int i = 0; i < rows; i++) {
        memo[i] = (int*)calloc(cols, sizeof(int));
    }
    
    int maxlength = 0;
    
    // try starting from each cell
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            maxlength = fmax(maxlength, dfs(matrix, matrixsize, matrixcolsize, i, j, memo));
        }
    }
    
    // free allocated memory
    for (int i = 0; i < rows; i++) {
        free(memo[i]);
    }
    free(memo);
    
    return maxlength;
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Direction Array Setup
```c
int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
```

we define the four possible directions:
- **(-1, 0)**: move up
- **(1, 0)**: move down
- **(0, -1)**: move left
- **(0, 1)**: move right

### 2. DFS Function
```c
int dfs(int** matrix, int matrixsize, int* matrixcolsize, int row, int col, int** memo) {
    if (memo[row][col] != 0) {
        return memo[row][col];
    }
    
    int maxlength = 1;
    
    // explore all directions
    for (int i = 0; i < 4; i++) {
        int newrow = row + directions[i][0];
        int newcol = col + directions[i][1];
        
        if (newrow >= 0 && newrow < matrixsize && 
            newcol >= 0 && newcol < matrixcolsize[0] && 
            matrix[newrow][newcol] > matrix[row][col]) {
            
            maxlength = fmax(maxlength, 1 + dfs(matrix, matrixsize, matrixcolsize, newrow, newcol, memo));
        }
    }
    
    memo[row][col] = maxlength;
    return maxlength;
}
```

the dfs function:
- **memoization check**: return cached result if available
- **base case**: start with length 1
- **direction exploration**: try all four directions
- **boundary check**: ensure valid position
- **increasing check**: only move to larger values
- **result caching**: store computed result

### 3. Main Function
```c
int longestincreasingpath(int** matrix, int matrixsize, int* matrixcolsize) {
    if (matrixsize == 0 || matrixcolsize[0] == 0) {
        return 0;
    }
    
    int rows = matrixsize;
    int cols = matrixcolsize[0];
    
    // initialize memoization array
    int** memo = (int**)malloc(rows * sizeof(int*));
    for (int i = 0; i < rows; i++) {
        memo[i] = (int*)calloc(cols, sizeof(int));
    }
    
    int maxlength = 0;
    
    // try starting from each cell
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            maxlength = fmax(maxlength, dfs(matrix, matrixsize, matrixcolsize, i, j, memo));
        }
    }
    
    // free allocated memory
    for (int i = 0; i < rows; i++) {
        free(memo[i]);
    }
    free(memo);
    
    return maxlength;
}
```

the main function:
- **edge case handling**: check for empty matrix
- **memory allocation**: create memoization array
- **cell iteration**: try starting from each cell
- **memory cleanup**: free allocated memory
- **result return**: return maximum path length

### 4. Boundary and Value Checks
```c
if (newrow >= 0 && newrow < matrixsize && 
    newcol >= 0 && newcol < matrixcolsize[0] && 
    matrix[newrow][newcol] > matrix[row][col]) {
    // valid move
}
```

we check three conditions:
- **row bounds**: newrow >= 0 && newrow < matrixsize
- **column bounds**: newcol >= 0 && newcol < matrixcolsize[0]
- **increasing value**: matrix[newrow][newcol] > matrix[row][col]

### 5. Memory Management
```c
// allocation
int** memo = (int**)malloc(rows * sizeof(int*));
for (int i = 0; i < rows; i++) {
    memo[i] = (int*)calloc(cols, sizeof(int));
}

// cleanup
for (int i = 0; i < rows; i++) {
    free(memo[i]);
}
free(memo);
```

proper memory management:
- **allocation**: create 2d array for memoization
- **initialization**: use calloc for zero initialization
- **cleanup**: free each row and then the array pointer

## Example Walkthrough

let's trace through the example: matrix = [[9,9,4],[6,6,8],[2,1,1]]

```
starting from (0,0) with value 9:
- can't move to any adjacent cell (all smaller or equal)
- path length = 1

starting from (1,1) with value 6:
- can move to (0,1) with value 9
- can move to (1,2) with value 8
- maximum path length = 3

starting from (2,0) with value 2:
- can move to (1,0) with value 6
- can move to (0,0) with value 9
- maximum path length = 4

result: 4 (longest path: 1->2->6->9)
```

## Time and Space Complexity

- **time complexity:** O(m × n) where m and n are matrix dimensions
- **space complexity:** O(m × n) for memoization array

the algorithm is efficient because:
- each cell is visited only once due to memoization
- dfs explores all possible paths from each cell
- caching avoids redundant calculations

## Key Insights

1. **dfs with memoization** - use caching for efficiency
2. **direction array** - simplify movement logic
3. **boundary checks** - ensure valid positions
4. **memory management** - proper allocation and cleanup

## Alternative Approaches

i also considered:

1. **topological sort** - treat as directed acyclic graph
   - more complex implementation
   - same time complexity
   - harder to understand

2. **dynamic programming** - bottom-up approach
   - sort cells by value
   - process in increasing order
   - more complex than dfs

3. **naive dfs** - without memoization
   - exponential time complexity
   - too slow for large matrices
   - not suitable for leetcode

4. **bfs approach** - level by level
   - more complex than dfs
   - same time complexity
   - harder to implement

## Edge Cases to Consider

1. **empty matrix** - return 0
2. **single element** - return 1
3. **all same values** - return 1
4. **decreasing values** - return 1
5. **large matrices** - ensure efficient performance
6. **memory constraints** - handle large inputs

## C-Specific Features

1. **pointer arithmetic** - efficient array access
2. **memory management** - manual allocation and cleanup
3. **2d arrays** - dynamic allocation with malloc
4. **boundary checking** - explicit bounds validation
5. **function pointers** - modular code structure

## Lessons Learned

this problem taught me:
- **dfs applications** - beyond simple traversal
- **memoization techniques** - caching for efficiency
- **memory management** - proper allocation and cleanup
- **boundary handling** - careful validation

## Real-World Applications

this problem has applications in:
- **pathfinding algorithms** - finding optimal routes
- **game development** - ai movement patterns
- **image processing** - contour detection
- **network routing** - finding longest paths

## Conclusion

the longest increasing path in a matrix problem is an excellent exercise in dynamic programming and graph traversal. the key insight is using dfs with memoization to achieve efficient O(m × n) time complexity while maintaining code clarity.

you can find my complete solution on [leetcode](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/1234569/longest-increasing-path-in-a-matrix-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

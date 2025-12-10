---
title: "LeetCode 315: Count of Smaller Numbers After Self - TypeScript Merge Sort Solution"
description: "Solving the Count of Smaller Numbers After Self problem using TypeScript with merge sort and counting"
date: "2025-01-27"
draft: false
---

# LeetCode 315: Count of Smaller Numbers After Self

i recently solved the count of smaller numbers after self problem on leetcode, and it's a great example of advanced algorithms and data structures. this hard problem tests your understanding of merge sort, counting inversions, and efficient problem-solving techniques.

## Problem Statement

you are given an integer array nums and you have to return a new counts array. the counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

**example 1:**
```
input: nums = [5,2,6,1]
output: [2,1,1,0]

explanation:
to the right of 5 there are 2 smaller elements (2 and 1).
to the right of 2 there is 1 smaller element (1).
to the right of 6 there is 1 smaller element (1).
to the right of 1 there are 0 smaller elements.
```

**example 2:**
```
input: nums = [-1]
output: [0]
```

**example 3:**
```
input: nums = [-1,-1]
output: [0,0]
```

## My Approach

when i first saw this problem, i immediately thought about the naive O(n²) approach, but i knew there had to be a more efficient solution. the key insight is using merge sort with counting to achieve O(n log n) time complexity.

### Initial Thoughts

i started by thinking about different approaches:
1. **naive approach** - O(n²) time complexity, too slow
2. **binary indexed tree** - efficient but complex implementation
3. **merge sort with counting** - O(n log n) and easier to understand
4. **segment tree** - another efficient approach but more complex

### Solution Strategy

i decided to use a **merge sort with counting approach** with the following strategy:
1. **index tracking** - keep track of original indices during sorting
2. **merge sort** - sort the array while counting inversions
3. **counting logic** - count smaller elements during merge phase
4. **result building** - build result array based on original positions
5. **typescript implementation** - use type safety and modern features

## My Solution

```typescript
function countsmaller(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new array(n).fill(0);
    
    // create array of [value, originalindex] pairs
    const indexednums: [number, number][] = nums.map((num, index) => [num, index]);
    
    function mergesort(arr: [number, number][], start: number, end: number): void {
        if (start >= end) return;
        
        const mid = math.floor((start + end) / 2);
        mergesort(arr, start, mid);
        mergesort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
    
    function merge(arr: [number, number][], start: number, mid: number, end: number): void {
        const left = arr.slice(start, mid + 1);
        const right = arr.slice(mid + 1, end + 1);
        
        let i = 0, j = 0, k = start;
        let smallercount = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i][0] <= right[j][0]) {
                // update count for left element
                result[left[i][1]] += smallercount;
                arr[k++] = left[i++];
            } else {
                // count smaller elements from left
                smallercount++;
                arr[k++] = right[j++];
            }
        }
        
        // handle remaining left elements
        while (i < left.length) {
            result[left[i][1]] += smallercount;
            arr[k++] = left[i++];
        }
        
        // handle remaining right elements
        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }
    
    mergesort(indexednums, 0, n - 1);
    return result;
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Initialization
```typescript
const n = nums.length;
const result: number[] = new array(n).fill(0);
const indexednums: [number, number][] = nums.map((num, index) => [num, index]);
```

we set up our data structures:
- **result array**: initialize with zeros for all positions
- **indexed array**: create pairs of [value, originalindex]
- **length tracking**: store array length for efficiency

### 2. Index Tracking Setup
```typescript
const indexednums: [number, number][] = nums.map((num, index) => [num, index]);
```

we create indexed pairs:
- **value**: the actual number from input
- **originalindex**: the position in original array
- **purpose**: preserve original positions during sorting

### 3. Merge Sort Function
```typescript
function mergesort(arr: [number, number][], start: number, end: number): void {
    if (start >= end) return;
    
    const mid = math.floor((start + end) / 2);
    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}
```

the merge sort function:
- **base case**: single element or empty range
- **divide**: split array into two halves
- **conquer**: recursively sort each half
- **combine**: merge sorted halves with counting

### 4. Merge Function with Counting
```typescript
function merge(arr: [number, number][], start: number, mid: number, end: number): void {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);
    
    let i = 0, j = 0, k = start;
    let smallercount = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i][0] <= right[j][0]) {
            // update count for left element
            result[left[i][1]] += smallercount;
            arr[k++] = left[i++];
        } else {
            // count smaller elements from left
            smallercount++;
            arr[k++] = right[j++];
        }
    }
    
    // handle remaining elements
    while (i < left.length) {
        result[left[i][1]] += smallercount;
        arr[k++] = left[i++];
    }
    
    while (j < right.length) {
        arr[k++] = right[j++];
    }
}
```

the merge function with counting:
- **split arrays**: create left and right subarrays
- **counting logic**: track smaller elements from right half
- **update results**: add counts to original positions
- **merge process**: combine sorted arrays

### 5. Counting Logic
```typescript
if (left[i][0] <= right[j][0]) {
    // update count for left element
    result[left[i][1]] += smallercount;
    arr[k++] = left[i++];
} else {
    // count smaller elements from left
    smallercount++;
    arr[k++] = right[j++];
}
```

the key counting logic:
- **left element smaller**: add current count to result
- **right element smaller**: increment count for future left elements
- **original index**: use stored index to update correct position

## Example Walkthrough

let's trace through the example: nums = [5,2,6,1]

```
step 1: create indexed array
[(5,0), (2,1), (6,2), (1,3)]

step 2: merge sort with counting
- divide: [(5,0), (2,1)] and [(6,2), (1,3)]
- sort left: [(2,1), (5,0)] (count: 1 for index 0)
- sort right: [(1,3), (6,2)] (count: 1 for index 2)
- merge: [(1,3), (2,1), (5,0), (6,2)]
  - (1,3): count = 0
  - (2,1): count = 1 (from right half)
  - (5,0): count = 2 (from right half)
  - (6,2): count = 0

result: [2,1,1,0]
```

## Time and Space Complexity

- **time complexity:** O(n log n) where n is the number of elements
- **space complexity:** O(n) for additional indexed array

the algorithm is efficient because:
- merge sort provides O(n log n) time complexity
- we only need O(n) additional space
- counting is done during the merge phase

## Key Insights

1. **merge sort approach** - use sorting to achieve efficient counting
2. **index tracking** - preserve original positions during sorting
3. **counting during merge** - count smaller elements during merge phase
4. **typescript benefits** - type safety and better debugging

## Alternative Approaches

i also considered:

1. **binary indexed tree (fenwick tree)** - O(n log n) time
   - more complex implementation
   - efficient for range queries
   - harder to understand and debug

2. **segment tree** - O(n log n) time
   - another efficient approach
   - more complex than merge sort
   - good for range operations

3. **naive approach** - O(n²) time
   - simple implementation
   - too slow for large inputs
   - not suitable for leetcode

4. **avl tree** - O(n log n) time
   - self-balancing binary search tree
   - complex implementation
   - efficient insertion and counting

## Edge Cases to Consider

1. **empty array** - return empty array
2. **single element** - return [0]
3. **duplicate elements** - handle equal elements correctly
4. **negative numbers** - handle negative values
5. **large arrays** - ensure efficient performance
6. **all same values** - handle repeated values

## TypeScript-Specific Features

1. **type annotations** - explicit typing for better code clarity
2. **tuple types** - [number, number] for indexed pairs
3. **array methods** - map, slice, fill for efficient operations
4. **function signatures** - clear parameter and return types
5. **strict typing** - catch errors at compile time

## Lessons Learned

this problem taught me:
- **merge sort applications** - beyond just sorting
- **counting inversions** - using sorting for counting
- **index preservation** - maintaining original positions
- **algorithmic thinking** - choosing the right approach

## Real-World Applications

this problem has applications in:
- **data analysis** - finding relative rankings
- **statistics** - calculating percentiles and ranks
- **machine learning** - feature ranking and selection
- **financial analysis** - relative performance metrics

## Conclusion

the count of smaller numbers after self problem is an excellent exercise in advanced algorithms and data structures. the key insight is using merge sort with counting to achieve efficient O(n log n) time complexity while maintaining code clarity.

you can find my complete solution on [leetcode](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/1234569/count-of-smaller-numbers-after-self-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

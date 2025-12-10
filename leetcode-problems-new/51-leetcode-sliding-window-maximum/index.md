---
title: "LeetCode 239: Sliding Window Maximum - Monotonic Deque Approach"
description: "Solving the Sliding Window Maximum problem using monotonic deque for efficient O(n) solution"
date: "2025-01-27"
draft: false
---

# LeetCode 239: Sliding Window Maximum

i recently solved the sliding window maximum problem on leetcode, and it's a great example of sliding window techniques and efficient data structures. this hard problem tests your understanding of monotonic data structures, deque operations, and optimization techniques.

## Problem Statement

you are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. you can only see the k numbers in the window. each time the sliding window moves right by one position.

return the max sliding window.

**example:**
```
input: nums = [1,3,-1,-3,5,3,6,7], k = 3
output: [3,3,5,5,6,7]

explanation:
window position                max
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

## My Approach

when i first saw this problem, i immediately thought about using a monotonic deque approach. the key insight is that we need to maintain a data structure that can efficiently track the maximum element in the current window while handling the sliding window updates.

### Initial Thoughts

i started by thinking about different approaches:
1. **brute force** - find maximum in each window (O(n*k))
2. **monotonic deque** - maintain decreasing order of elements (O(n))
3. **alternative approach** - using priority queue or heap

### Solution Strategy

i decided to use a **monotonic deque approach** with the following strategy:
1. **maintain monotonic deque** - keep elements in decreasing order
2. **window boundary management** - remove elements outside current window
3. **efficient maximum tracking** - front of deque always contains current maximum
4. **optimize element removal** - remove smaller elements that can't be maximum

## My Solution

```typescript
function maxslidingwindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = []; // stores indices
    
    for (let i = 0; i < nums.length; i++) {
        // remove elements outside the current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // remove smaller elements from the back
        // they can't be maximum in any future window
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        
        // add current element
        deque.push(i);
        
        // add maximum to result when window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Monotonic Deque Structure
```typescript
const deque: number[] = []; // stores indices
```

we use a deque to store indices of elements in decreasing order of their values. this allows us to:
- access the maximum element at the front
- efficiently remove elements from both ends
- maintain the sliding window constraints

### 2. Window Boundary Management
```typescript
while (deque.length > 0 && deque[0] <= i - k) {
    deque.shift();
}
```

we remove elements that are outside the current window (indices <= i-k). this ensures our deque only contains elements from the current window.

### 3. Monotonic Property Maintenance
```typescript
while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
    deque.pop();
}
```

we remove smaller elements from the back of the deque because:
- they can't be maximum in the current window
- they can't be maximum in any future window containing the current element
- this maintains the decreasing order property

### 4. Maximum Extraction
```typescript
if (i >= k - 1) {
    result.push(nums[deque[0]]);
}
```

once the window is complete (i >= k-1), the front of the deque contains the maximum element for the current window.

## Example Walkthrough

let's trace through the example: nums = [1,3,-1,-3,5,3,6,7], k = 3

```
i=0: nums[0]=1
- deque=[0], result=[]

i=1: nums[1]=3
- remove 0 (3>1), deque=[1], result=[]

i=2: nums[2]=-1
- deque=[1,2], result=[3] (window complete)

i=3: nums[3]=-3
- deque=[1,2,3], result=[3,3]

i=4: nums[4]=5
- remove 1,2,3 (5>all), deque=[4], result=[3,3,5]

i=5: nums[5]=3
- deque=[4,5], result=[3,3,5,5]

i=6: nums[6]=6
- remove 4,5 (6>all), deque=[6], result=[3,3,5,5,6]

i=7: nums[7]=7
- remove 6 (7>6), deque=[7], result=[3,3,5,5,6,7]

final result: [3,3,5,5,6,7]
```

## Time and Space Complexity

- **time complexity:** O(n) where n is the length of the array
- **space complexity:** O(k) where k is the window size

the algorithm is optimal because:
- each element is pushed to the deque at most once
- each element is popped from the deque at most once
- we perform constant work for each element

## Key Insights

1. **monotonic deque** - maintains decreasing order for efficient maximum access
2. **index storage** - storing indices allows us to track window boundaries
3. **amortized complexity** - each element is processed at most twice
4. **window management** - efficient removal of elements outside current window

## Alternative Approaches

i also considered:

1. **brute force approach** - find maximum in each window
   - time complexity: O(n*k)
   - space complexity: O(1)
   - much less efficient for large k

2. **priority queue approach** - use max heap
   - time complexity: O(n log k)
   - space complexity: O(k)
   - more complex implementation

3. **segment tree approach** - build segment tree for range maximum queries
   - time complexity: O(n log n) for building + O(n log n) for queries
   - space complexity: O(n)
   - overkill for this problem

## Edge Cases to Consider

1. **k = 1** - each element is its own maximum
2. **k = n** - entire array is one window
3. **k > n** - invalid input, should handle gracefully
4. **duplicate elements** - algorithm handles duplicates correctly
5. **all same elements** - deque maintains all indices

## Optimization Techniques

1. **lazy removal** - only remove elements when they become invalid
2. **index tracking** - use indices instead of values for efficiency
3. **monotonic property** - maintain decreasing order for optimal access
4. **amortized analysis** - each element processed at most twice

## Real-World Applications

this problem has applications in:
- **stream processing** - finding maximum in sliding time windows
- **financial analysis** - tracking maximum prices in time periods
- **signal processing** - peak detection in sliding windows
- **network monitoring** - tracking maximum bandwidth usage

## Lessons Learned

this problem taught me:
- **monotonic data structures** - powerful technique for optimization
- **sliding window techniques** - efficient window management
- **amortized analysis** - understanding true complexity of operations
- **deque operations** - efficient insertion and deletion from both ends

## Conclusion

the sliding window maximum problem is an excellent exercise in data structures and optimization techniques. the key insight is using a monotonic deque to maintain the maximum element efficiently while handling the sliding window constraints.

you can find my complete solution on [leetcode](https://leetcode.com/problems/sliding-window-maximum/solutions/1234569/sliding-window-maximum-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

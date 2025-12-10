---
title: "LeetCode 295: Find Median from Data Stream - Go Two-Heap Solution"
description: "Solving the Find Median from Data Stream problem using Go with two-heap approach for efficient streaming median"
date: "2025-01-27"
draft: false
---

# LeetCode 295: Find Median from Data Stream

i recently solved the find median from data stream problem on leetcode, and it's a great example of heap data structures and streaming algorithms. this hard problem tests your understanding of priority queues, data structure design, and efficient algorithm implementation.

## Problem Statement

the median is the middle value in an ordered integer list. if the size of the list is even, there is no middle value and the median is the mean of the two middle values.

- for example, for arr = [2,3,4], the median is 3.
- for example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

implement the medianfinder class:
- medianfinder() initializes the medianfinder object.
- void addnum(int num) adds the integer num from the data stream to the data structure.
- double findmedian() returns the median of all elements so far.

**example:**
```
input:
["medianfinder", "addnum", "addnum", "findmedian", "addnum", "findmedian"]
[[], [1], [2], [], [3], []]

output:
[null, null, null, 1.5, null, 2.0]

explanation:
medianfinder medianfinder = new medianfinder();
medianfinder.addnum(1);    // arr = [1]
medianfinder.addnum(2);    // arr = [1, 2]
medianfinder.findmedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianfinder.addnum(3);    // arr[1, 2, 3]
medianfinder.findmedian(); // return 2.0
```

## My Approach

when i first saw this problem, i immediately thought about using a two-heap approach. the key insight is that we can maintain two heaps to efficiently track the median of a streaming data set without storing all elements in sorted order.

### Initial Thoughts

i started by thinking about different approaches:
1. **two-heap approach** - use max heap for lower half and min heap for upper half
2. **sorted array approach** - maintain sorted array and find median
3. **balanced bst approach** - use tree structure for median tracking

### Solution Strategy

i decided to use a **two-heap approach** with the following strategy:
1. **max heap** - store lower half of numbers
2. **min heap** - store upper half of numbers
3. **balancing** - keep heaps balanced (size difference ≤ 1)
4. **efficient insertion** - O(log n) insertion time
5. **constant median retrieval** - O(1) median access

## My Solution

```go
import "container/heap"

type medianfinder struct {
    maxheap *maxheap // lower half
    minheap *minheap // upper half
}

func constructor() medianfinder {
    return medianfinder{
        maxheap: &maxheap{},
        minheap: &minheap{},
    }
}

func (this *medianfinder) addnum(num int) {
    // add to max heap first
    heap.push(this.maxheap, num)
    
    // move largest element from max heap to min heap
    heap.push(this.minheap, heap.pop(this.maxheap))
    
    // balance heaps: max heap should be larger or equal
    if this.maxheap.len() < this.minheap.len() {
        heap.push(this.maxheap, heap.pop(this.minheap))
    }
}

func (this *medianfinder) findmedian() float64 {
    if this.maxheap.len() > this.minheap.len() {
        return float64((*this.maxheap)[0])
    }
    return float64((*this.maxheap)[0] + (*this.minheap)[0]) / 2.0
}

// maxheap implementation
type maxheap []int

func (h maxheap) len() int           { return len(h) }
func (h maxheap) less(i, j int) bool { return h[i] > h[j] }
func (h maxheap) swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *maxheap) push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *maxheap) pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

// minheap implementation
type minheap []int

func (h minheap) len() int           { return len(h) }
func (h minheap) less(i, j int) bool { return h[i] < h[j] }
func (h minheap) swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *minheap) push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *minheap) pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Data Structure Design
```go
type medianfinder struct {
    maxheap *maxheap // lower half
    minheap *minheap // upper half
}
```

we use two heaps:
- **maxheap**: stores the lower half of numbers (largest at root)
- **minheap**: stores the upper half of numbers (smallest at root)

### 2. Constructor
```go
func constructor() medianfinder {
    return medianfinder{
        maxheap: &maxheap{},
        minheap: &minheap{},
    }
}
```

initialize both heaps as empty slices. go's heap package will handle the heap operations.

### 3. Insertion Logic
```go
func (this *medianfinder) addnum(num int) {
    // add to max heap first
    heap.push(this.maxheap, num)
    
    // move largest element from max heap to min heap
    heap.push(this.minheap, heap.pop(this.maxheap))
    
    // balance heaps: max heap should be larger or equal
    if this.maxheap.len() < this.minheap.len() {
        heap.push(this.maxheap, heap.pop(this.minheap))
    }
}
```

the insertion process:
1. **add to max heap** - insert the new number
2. **move to min heap** - move largest from max heap to min heap
3. **rebalance** - ensure max heap is larger or equal in size

### 4. Median Calculation
```go
func (this *medianfinder) findmedian() float64 {
    if this.maxheap.len() > this.minheap.len() {
        return float64((*this.maxheap)[0])
    }
    return float64((*this.maxheap)[0] + (*this.minheap)[0]) / 2.0
}
```

median calculation logic:
- **odd count**: return root of max heap
- **even count**: return average of both heap roots

### 5. Heap Implementation
```go
type maxheap []int

func (h maxheap) len() int           { return len(h) }
func (h maxheap) less(i, j int) bool { return h[i] > h[j] }
func (h maxheap) swap(i, j int)      { h[i], h[j] = h[j], h[i] }
```

implement the heap.interface:
- **len()**: return slice length
- **less()**: define heap property (max heap: parent > children)
- **swap()**: swap elements
- **push()/pop()**: slice operations

## Example Walkthrough

let's trace through the example: [1, 2, 3]

```
initial: maxheap=[], minheap=[]

add 1:
- push to maxheap: maxheap=[1], minheap=[]
- move largest: maxheap=[], minheap=[1]
- rebalance: maxheap=[1], minheap=[]
- median = 1

add 2:
- push to maxheap: maxheap=[2,1], minheap=[]
- move largest: maxheap=[1], minheap=[2]
- rebalance: maxheap=[1], minheap=[2]
- median = (1+2)/2 = 1.5

add 3:
- push to maxheap: maxheap=[3,1], minheap=[2]
- move largest: maxheap=[1], minheap=[2,3]
- rebalance: maxheap=[2,1], minheap=[3]
- median = 2
```

## Time and Space Complexity

- **time complexity:** O(log n) for insertion, O(1) for median retrieval
- **space complexity:** O(n) for storing all elements

the algorithm is efficient because:
- heap operations are O(log n)
- we only need to access heap roots for median
- no need to maintain full sorted order

## Key Insights

1. **two-heap approach** - maintain sorted order without full sorting
2. **heap balancing** - ensure max heap is larger or equal
3. **constant median access** - median is always at heap roots
4. **go heap package** - provides efficient heap operations

## Alternative Approaches

i also considered:

1. **sorted array approach** - maintain sorted array
   - insertion: O(n) time
   - median: O(1) time
   - less efficient for large datasets

2. **balanced bst approach** - use tree structure
   - insertion: O(log n) time
   - median: O(log n) time
   - more complex implementation

3. **counting sort approach** - for small integer ranges
   - insertion: O(1) time
   - median: O(n) time
   - limited to small ranges

## Edge Cases to Consider

1. **empty stream** - handle no elements case
2. **single element** - return the element itself
3. **duplicate elements** - handle repeated numbers
4. **large numbers** - handle integer overflow
5. **negative numbers** - work with any integers
6. **streaming order** - median changes with each insertion

## Go-Specific Features

1. **heap package** - container/heap provides heap operations
2. **interface implementation** - heap.interface for custom heaps
3. **slice operations** - efficient push/pop operations
4. **type embedding** - struct composition for data structure

## Lessons Learned

this problem taught me:
- **heap data structures** - efficient priority queue operations
- **streaming algorithms** - processing data incrementally
- **data structure design** - choosing appropriate structures
- **go interfaces** - implementing custom heap types

## Real-World Applications

this problem has applications in:
- **financial systems** - tracking median prices in real-time
- **sensor networks** - monitoring median sensor readings
- **streaming analytics** - real-time data analysis
- **load balancing** - tracking median response times

## Conclusion

the find median from data stream problem is an excellent exercise in heap data structures and streaming algorithms. the key insight is using two heaps to maintain the median efficiently without storing all elements in sorted order.

you can find my complete solution on [leetcode](https://leetcode.com/problems/find-median-from-data-stream/solutions/1234569/find-median-from-data-stream-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

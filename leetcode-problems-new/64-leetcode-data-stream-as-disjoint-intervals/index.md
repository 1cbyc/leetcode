---
title: "LeetCode 352: Data Stream as Disjoint Intervals - Rust BTreeSet Solution"
description: "Solving the Data Stream as Disjoint Intervals problem using Rust with BTreeSet for efficient interval management"
date: "2025-01-27"
draft: false
---

# LeetCode 352: Data Stream as Disjoint Intervals

i recently solved the data stream as disjoint intervals problem on leetcode, and it's a great example of data structure design and interval management. this hard problem tests your understanding of efficient interval operations, data structure selection, and rust's ownership system.

## Problem Statement

given a data stream input of non-negative integers a1, a2, ..., an, ..., summarize the numbers seen so far as a list of disjoint intervals.

implement the summaryranges class:
- summaryranges() initializes the object with an empty stream.
- addnum(int value) adds the integer value to the stream.
- int[][] getintervals() returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi]. the answer should be sorted by starti.

**example 1:**
```
input
["summaryranges", "addnum", "getintervals", "addnum", "getintervals", "addnum", "getintervals", "addnum", "getintervals", "addnum", "getintervals"]
[[], [1], [], [3], [], [7], [], [2], [], [6], []]
output
[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

explanation
summaryranges summaryranges = new summaryranges();
summaryranges.addnum(1);      // arr = [1]
summaryranges.getintervals(); // return [[1, 1]]
summaryranges.addnum(3);      // arr = [1, 3]
summaryranges.getintervals(); // return [[1, 1], [3, 3]]
summaryranges.addnum(7);      // arr = [1, 3, 7]
summaryranges.getintervals(); // return [[1, 1], [3, 3], [7, 7]]
summaryranges.addnum(2);      // arr = [1, 2, 3, 7]
summaryranges.getintervals(); // return [[1, 3], [7, 7]]
summaryranges.addnum(6);      // arr = [1, 2, 3, 6, 7]
summaryranges.getintervals(); // return [[1, 3], [6, 7]]
```

## My Approach

when i first saw this problem, i immediately thought about using a sorted data structure to maintain intervals efficiently. the key insight is using a btree to maintain sorted intervals and efficiently handle insertions and merges.

### Initial Thoughts

i started by thinking about different approaches:
1. **btree approach** - use sorted tree for interval management
2. **array approach** - maintain sorted array of intervals
3. **linked list** - use linked list for interval management
4. **hash set** - track individual numbers and build intervals

### Solution Strategy

i decided to use a **btree approach** with the following strategy:
1. **data structure** - use btreeset to maintain sorted intervals
2. **insertion logic** - find overlapping intervals and merge them
3. **interval management** - handle left and right boundary cases
4. **efficient operations** - use rust's btreeset for O(log n) operations
5. **result building** - convert intervals to required format

## My Solution

```rust
use std::collections::btreeset;

struct summaryranges {
    intervals: btreeset<(i32, i32)>,
}

impl summaryranges {
    fn new() -> self {
        summaryranges {
            intervals: btreeset::new(),
        }
    }
    
    fn addnum(&mut self, value: i32) {
        // find the interval that ends just before value
        let mut left_bound = value;
        let mut right_bound = value;
        
        // check if value is already in an existing interval
        if let some(&(start, end)) = self.intervals.range(..(value, i32::max)).next_back() {
            if end >= value {
                return; // value is already in an interval
            }
            if end + 1 == value {
                left_bound = start;
                self.intervals.remove(&(start, end));
            }
        }
        
        // check if value can extend an interval to the right
        if let some(&(start, end)) = self.intervals.range((value, i32::min)..).next() {
            if start == value + 1 {
                right_bound = end;
                self.intervals.remove(&(start, end));
            }
        }
        
        // insert the new merged interval
        self.intervals.insert((left_bound, right_bound));
    }
    
    fn getintervals(&self) -> vec<vec<i32>> {
        self.intervals
            .iter()
            .map(|&(start, end)| vec![start, end])
            .collect()
    }
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Data Structure Setup
```rust
use std::collections::btreeset;

struct summaryranges {
    intervals: btreeset<(i32, i32)>,
}
```

we use btreeset for efficient interval management:
- **btreeset**: maintains sorted order automatically
- **tuple storage**: (start, end) for each interval
- **efficient operations**: O(log n) for insert/remove/search

### 2. Constructor
```rust
impl summaryranges {
    fn new() -> self {
        summaryranges {
            intervals: btreeset::new(),
        }
    }
}
```

the constructor:
- **initialize**: create empty btreeset
- **ownership**: rust's ownership system handles memory
- **efficiency**: O(1) initialization time

### 3. Add Number Logic
```rust
fn addnum(&mut self, value: i32) {
    let mut left = value;
    let mut right = value;
    
    // find intervals that can be merged
    let mut to_remove = vec![];
    
    // check for left neighbor
    if let some(&(start, end)) = self.intervals.range(..(value, i32::max)).next_back() {
        if end + 1 >= value {
            left = start;
            to_remove.push((start, end));
        }
    }
    
    // check for right neighbor
    if let some(&(start, end)) = self.intervals.range((value, i32::min)..).next() {
        if start <= value + 1 {
            right = end;
            to_remove.push((start, end));
        }
    }
    
    // remove old intervals
    for interval in to_remove {
        self.intervals.remove(&interval);
    }
    
    // insert new merged interval
    self.intervals.insert((left, right));
}
```

the add number function:
- **initialization**: set left and right to value
- **left neighbor check**: find interval ending before value
- **right neighbor check**: find interval starting after value
- **merging logic**: combine overlapping intervals
- **cleanup**: remove old intervals and insert merged one

### 4. Left Neighbor Check
```rust
if let some(&(start, end)) = self.intervals.range(..(value, i32::max)).next_back() {
    if end + 1 >= value {
        left = start;
        to_remove.push((start, end));
    }
}
```

we check for left neighbor:
- **range query**: find intervals ending before value
- **overlap check**: end + 1 >= value means overlap
- **merge preparation**: mark for removal and update left

### 5. Right Neighbor Check
```rust
if let some(&(start, end)) = self.intervals.range((value, i32::min)..).next() {
    if start <= value + 1 {
        right = end;
        to_remove.push((start, end));
    }
}
```

we check for right neighbor:
- **range query**: find intervals starting after value
- **overlap check**: start <= value + 1 means overlap
- **merge preparation**: mark for removal and update right

### 6. Get Intervals Function
```rust
fn getintervals(&self) -> vec<vec<i32>> {
    self.intervals
        .iter()
        .map(|&(start, end)| vec![start, end])
        .collect()
}
```

the get intervals function:
- **iteration**: iterate through sorted intervals
- **mapping**: convert (start, end) tuples to vectors
- **collection**: collect into result vector
- **automatic sorting**: btreeset maintains order

## Example Walkthrough

let's trace through the example: addnum(1), addnum(3), addnum(7), addnum(2), addnum(6)

```
step 1: addnum(1)
- intervals = [(1,1)]

step 2: addnum(3)
- intervals = [(1,1), (3,3)]

step 3: addnum(7)
- intervals = [(1,1), (3,3), (7,7)]

step 4: addnum(2)
- left neighbor: (1,1) overlaps with 2
- merge: (1,1) + 2 = (1,2)
- right neighbor: (3,3) overlaps with (1,2)
- final merge: (1,3)
- intervals = [(1,3), (7,7)]

step 5: addnum(6)
- left neighbor: none
- right neighbor: (7,7) overlaps with 6
- merge: 6 + (7,7) = (6,7)
- intervals = [(1,3), (6,7)]
```

## Time and Space Complexity

- **time complexity:** O(log n) for addnum, O(n) for getintervals
- **space complexity:** O(n) for storing intervals

the algorithm is efficient because:
- btreeset provides O(log n) operations
- range queries are efficient
- automatic sorting maintenance
- minimal memory overhead

## Key Insights

1. **btree approach** - efficient interval management
2. **range queries** - find overlapping intervals quickly
3. **merging logic** - handle left and right neighbors
4. **rust ownership** - automatic memory management

## Alternative Approaches

i also considered:

1. **array approach** - maintain sorted array
   - O(n) insertion time
   - simpler implementation
   - less efficient for large inputs

2. **linked list** - use linked list for intervals
   - O(n) search time
   - more complex implementation
   - harder to maintain order

3. **hash set** - track individual numbers
   - O(1) insertion time
   - O(n) interval building
   - inefficient for large ranges

4. **segment tree** - use segment tree
   - more complex implementation
   - same time complexity
   - overkill for this problem

## Edge Cases to Consider

1. **empty stream** - return empty intervals
2. **single number** - handle single interval
3. **consecutive numbers** - merge into single interval
4. **duplicate numbers** - handle repeated values
5. **large ranges** - ensure efficient performance
6. **negative numbers** - handle edge cases

## Rust-Specific Features

1. **btreeset** - efficient sorted data structure
2. **ownership system** - automatic memory management
3. **pattern matching** - if let some() for option handling
4. **iterators** - efficient collection operations
5. **type safety** - compile-time error checking

## Lessons Learned

this problem taught me:
- **data structure selection** - choosing the right tool
- **interval management** - efficient merging algorithms
- **rust ownership** - understanding ownership system
- **algorithmic thinking** - optimizing for specific operations

## Real-World Applications

this problem has applications in:
- **database systems** - range queries and indexing
- **time series analysis** - interval-based data processing
- **calendar systems** - appointment scheduling
- **network routing** - ip address range management

## Conclusion

the data stream as disjoint intervals problem is an excellent exercise in data structure design and interval management. the key insight is using a btreeset for efficient interval operations and leveraging rust's ownership system for safe memory management.

you can find my complete solution on [leetcode](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/1234569/data-stream-as-disjoint-intervals-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

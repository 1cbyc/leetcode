---
title: "LeetCode 218: The Skyline Problem - A Complex Geometry Challenge"
description: "Solving the Skyline Problem using a line sweep algorithm with priority queues"
date: "2024-12-10"
draft: false
---

# LeetCode 218: The Skyline Problem

the skyline problem is one of the most challenging problems i've encountered on leetcode. it's a perfect example of how geometric problems can be solved using algorithmic techniques like line sweep and priority queues.

## Problem Statement

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

**Input:** `buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]`

**Output:** `[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]`

## Understanding the Problem

The key insight is that the skyline is determined by the **critical points** where:
1. A building starts (increases the height)
2. A building ends (decreases the height)
3. The maximum height changes

## My Approach

i used a **line sweep algorithm** with a **priority queue** to track the current maximum height at each critical point.

### Algorithm Overview

1. **Extract critical points** - Convert each building into start and end events
2. **Sort events** - Sort all events by x-coordinate
3. **Process events** - Use a max heap to track current heights
4. **Generate skyline** - Record points where the maximum height changes

## My Solution

```python
import heapq
from collections import defaultdict

def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
    # Step 1: Create events for each building
    events = []
    for left, right, height in buildings:
        # Start event: (x, height, is_start)
        events.append((left, height, True))
        # End event: (x, height, is_start)
        events.append((right, height, False))
    
    # Step 2: Sort events by x-coordinate
    events.sort()
    
    # Step 3: Process events
    result = []
    max_heap = [0]  # Initialize with ground level
    active_heights = defaultdict(int)  # Track active heights
    
    for x, height, is_start in events:
        if is_start:
            # Building starts - add height to active set
            active_heights[height] += 1
            heapq.heappush(max_heap, -height)  # Use negative for max heap
        else:
            # Building ends - remove height from active set
            active_heights[height] -= 1
            if active_heights[height] == 0:
                del active_heights[height]
        
        # Get current maximum height
        while max_heap and -max_heap[0] not in active_heights:
            heapq.heappop(max_heap)
        
        current_max = -max_heap[0] if max_heap else 0
        
        # Add to result if height changed
        if not result or result[-1][1] != current_max:
            result.append([x, current_max])
    
    return result
```

## Code Breakdown

### Step 1: Event Creation
```python
events = []
for left, right, height in buildings:
    events.append((left, height, True))   # Start event
    events.append((right, height, False)) # End event
```

We convert each building into two events:
- **Start event**: When a building begins (increases height)
- **End event**: When a building ends (decreases height)

### Step 2: Event Sorting
```python
events.sort()
```

Sort all events by x-coordinate to process them in order.

### Step 3: Event Processing
```python
max_heap = [0]  # Track maximum heights
active_heights = defaultdict(int)  # Count active buildings at each height
```

We use:
- **Max heap**: To efficiently track the current maximum height
- **Active heights counter**: To handle overlapping buildings

### Step 4: Height Management
```python
if is_start:
    active_heights[height] += 1
    heapq.heappush(max_heap, -height)
else:
    active_heights[height] -= 1
    if active_heights[height] == 0:
        del active_heights[height]
```

**For start events:**
- Increment the count for this height
- Add height to max heap

**For end events:**
- Decrement the count for this height
- Remove height if no buildings are active at this height

### Step 5: Cleanup and Result Generation
```python
while max_heap and -max_heap[0] not in active_heights:
    heapq.heappop(max_heap)

current_max = -max_heap[0] if max_heap else 0

if not result or result[-1][1] != current_max:
    result.append([x, current_max])
```

**Cleanup:** Remove heights from heap that are no longer active
**Result generation:** Add point to skyline if height changed

## Example Walkthrough

let's trace through the example: `[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]`

```
Events: [(2,10,True), (3,15,True), (5,12,True), (7,15,False), (9,10,False), (12,12,False), (15,10,True), (19,8,True), (20,10,False), (24,8,False)]

Processing:
1. x=2, height=10, start: active={10:1}, max=10, result=[[2,10]]
2. x=3, height=15, start: active={10:1,15:1}, max=15, result=[[2,10],[3,15]]
3. x=5, height=12, start: active={10:1,15:1,12:1}, max=15, result=[[2,10],[3,15]]
4. x=7, height=15, end: active={10:1,12:1}, max=12, result=[[2,10],[3,15],[7,12]]
5. x=9, height=10, end: active={12:1}, max=12, result=[[2,10],[3,15],[7,12]]
6. x=12, height=12, end: active={}, max=0, result=[[2,10],[3,15],[7,12],[12,0]]
7. x=15, height=10, start: active={10:1}, max=10, result=[[2,10],[3,15],[7,12],[12,0],[15,10]]
8. x=19, height=8, start: active={10:1,8:1}, max=10, result=[[2,10],[3,15],[7,12],[12,0],[15,10]]
9. x=20, height=10, end: active={8:1}, max=8, result=[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8]]
10. x=24, height=8, end: active={}, max=0, result=[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
```

## Time and Space Complexity

- **Time Complexity:** O(n log n) where n is the number of buildings
  - Sorting events: O(n log n)
  - Heap operations: O(log n) per event
  - Total: O(n log n)
- **Space Complexity:** O(n) for storing events and active heights

## Key Insights

1. **Line sweep technique** is perfect for geometric problems involving events
2. **Priority queue** efficiently tracks the current maximum height
3. **Event-based approach** simplifies complex geometric reasoning
4. **Height counting** handles overlapping buildings correctly

## Alternative Approaches

i also considered:

1. **Divide and conquer** - Split buildings and merge skylines
2. **Segment tree** - For range maximum queries
3. **Brute force** - Check all possible x-coordinates (inefficient)

The line sweep approach is the most elegant and efficient solution.

## Edge Cases to Consider

1. **Overlapping buildings** - Multiple buildings at same height
2. **Adjacent buildings** - Buildings that touch but don't overlap
3. **Single building** - Just one building in the input
4. **No buildings** - Empty input
5. **Very tall buildings** - Buildings that dominate the skyline

## Lessons Learned

this problem taught me:
- How to apply line sweep algorithms to geometric problems
- The importance of event-based processing
- How to use data structures (heaps, hash maps) together
- The power of sorting to simplify complex problems

## Conclusion

the skyline problem is a beautiful example of how algorithmic techniques can solve complex geometric problems. the line sweep approach with priority queues is both elegant and efficient.

you can find my complete solution on [leetcode](https://leetcode.com/problems/the-skyline-problem/solutions/6295982/solve-the-skyline-problem-by-1cbyc-qfnm).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

---

*This is part of my LeetCode problem-solving series. I'm documenting my solutions to help others learn and to track my own progress.* 
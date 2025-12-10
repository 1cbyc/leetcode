---
title: "LeetCode 381: Insert Delete GetRandom O(1) - Duplicates Allowed - TypeScript HashMap Solution"
description: "Solving the Insert Delete GetRandom O(1) - Duplicates Allowed problem using TypeScript with HashMap and Array"
date: "2025-01-26"
draft: false
---

# LeetCode 381: Insert Delete GetRandom O(1) - Duplicates Allowed

i recently solved the insert delete getrandom o(1) - duplicates allowed problem on leetcode, and it's a great example of data structure design and efficient algorithms. this hard problem tests your understanding of hashmap operations, array manipulation, and index management.

## Problem Statement

implement the randomizedcollection class:
- randomizedcollection() initializes the randomizedcollection object.
- bool insert(int val) inserts an item val into the multiset if not present. returns true if the item was not present, false otherwise.
- bool remove(int val) removes an item val from the multiset if present. returns true if the item was present, false otherwise.
- int getrandom() returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). each element must have the same probability of being returned.

**example 1:**
```
input
["randomizedcollection", "insert", "insert", "insert", "getrandom", "remove", "getrandom"]
[[], [1], [1], [2], [], [1], []]
output
[null, true, false, true, 2, true, 1]

explanation
randomizedcollection randomizedcollection = new randomizedcollection();
randomizedcollection.insert(1);   // return true. collection now contains [1].
randomizedcollection.insert(1);   // return false. collection now contains [1,1].
randomizedcollection.insert(2);   // return true. collection now contains [1,1,2].
randomizedcollection.getrandom(); // getrandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
randomizedcollection.remove(1);   // return true. collection now contains [1,2].
randomizedcollection.getrandom(); // getrandom should return 1 and 2 both equally likely.
```

## My Approach

when i first saw this problem, i immediately thought about using a combination of hashmap and array. the key insight is using a hashmap to track indices for each value and an array for efficient random access, while carefully managing indices during insertions and deletions.

### Initial Thoughts

i started by thinking about different approaches:
1. **hashmap + array** - use hashmap for indices and array for random access
2. **array only** - use array with linear search
3. **hashset + array** - use hashset for uniqueness
4. **linked list** - use linked list for dynamic operations

### Solution Strategy

i decided to use a **hashmap + array approach** with the following strategy:
1. **data structure** - use hashmap to track value -> indices mapping
2. **array storage** - use array for O(1) random access
3. **index management** - track all indices for each value
4. **efficient operations** - optimize insert, delete, and getrandom
5. **duplicate handling** - allow multiple indices for same value

## My Solution

```typescript
class randomizedcollection {
    private map: map<number, set<number>>;
    private arr: number[];
    
    constructor() {
        this.map = new map();
        this.arr = [];
    }
    
    insert(val: number): boolean {
        const indices = this.map.get(val) || new set();
        const isnew = indices.size === 0;
        
        indices.add(this.arr.length);
        this.map.set(val, indices);
        this.arr.push(val);
        
        return isnew;
    }
    
    remove(val: number): boolean {
        const indices = this.map.get(val);
        if (!indices || indices.size === 0) {
            return false;
        }
        
        // get the last index for this value
        const indextoremove = indices.values().next().value;
        indices.delete(indextoremove);
        
        // if this was the last occurrence, remove from map
        if (indices.size === 0) {
            this.map.delete(val);
        }
        
        // if removing from the end, just pop
        if (indextoremove === this.arr.length - 1) {
            this.arr.pop();
        } else {
            // swap with last element and update indices
            const lastval = this.arr[this.arr.length - 1];
            this.arr[indextoremove] = lastval;
            this.arr.pop();
            
            // update indices for the swapped value
            const lastindices = this.map.get(lastval)!;
            lastindices.delete(this.arr.length);
            lastindices.add(indextoremove);
        }
        
        return true;
    }
    
    getrandom(): number {
        const randomindex = math.floor(math.random() * this.arr.length);
        return this.arr[randomindex];
    }
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Data Structure Setup
```typescript
class randomizedcollection {
    private map: map<number, set<number>>;
    private arr: number[];
    
    constructor() {
        this.map = new map();
        this.arr = [];
    }
}
```

we set up our data structures:
- **map**: tracks value -> set of indices mapping
- **arr**: stores all values for O(1) random access
- **constructor**: initialize empty map and array

### 2. Insert Operation
```typescript
insert(val: number): boolean {
    const indices = this.map.get(val) || new set();
    const isnew = indices.size === 0;
    
    indices.add(this.arr.length);
    this.map.set(val, indices);
    this.arr.push(val);
    
    return isnew;
}
```

the insert operation:
- **get indices**: retrieve existing indices or create new set
- **check if new**: determine if value is new (set size === 0)
- **add index**: add current array length to indices set
- **update map**: store updated indices set
- **add to array**: push value to end of array
- **return status**: return true if value was new

### 3. Remove Operation
```typescript
remove(val: number): boolean {
    const indices = this.map.get(val);
    if (!indices || indices.size === 0) {
        return false;
    }
    
    // get the last index for this value
    const indextoremove = indices.values().next().value;
    indices.delete(indextoremove);
    
    // if this was the last occurrence, remove from map
    if (indices.size === 0) {
        this.map.delete(val);
    }
    
    // if removing from the end, just pop
    if (indextoremove === this.arr.length - 1) {
        this.arr.pop();
    } else {
        // swap with last element and update indices
        const lastval = this.arr[this.arr.length - 1];
        this.arr[indextoremove] = lastval;
        this.arr.pop();
        
        // update indices for the swapped value
        const lastindices = this.map.get(lastval)!;
        lastindices.delete(this.arr.length);
        lastindices.add(indextoremove);
    }
    
    return true;
}
```

the remove operation:
- **check existence**: verify value exists in map
- **get index**: retrieve any index for the value
- **remove index**: delete index from set
- **cleanup map**: remove value if no more occurrences
- **handle removal**: either pop from end or swap with last element
- **update indices**: carefully update indices for swapped value

### 4. GetRandom Operation
```typescript
getrandom(): number {
    const randomindex = math.floor(math.random() * this.arr.length);
    return this.arr[randomindex];
}
```

the getrandom operation:
- **generate index**: create random index within array bounds
- **return value**: return value at random index
- **uniform probability**: each element has equal chance

### 5. Index Management Logic
```typescript
// the key insight: swap with last element for O(1) removal
// then carefully update indices for the swapped value
```

the index management:
- **swap strategy**: replace removed element with last element
- **index tracking**: maintain correct indices for all values
- **efficiency**: O(1) removal by avoiding array shifting

## Example Walkthrough

let's trace through the example: insert(1), insert(1), insert(2), getrandom(), remove(1), getrandom()

```
step 1: insert(1)
- arr = [1], map = {1 -> {0}}, return true

step 2: insert(1)
- arr = [1,1], map = {1 -> {0,1}}, return false

step 3: insert(2)
- arr = [1,1,2], map = {1 -> {0,1}, 2 -> {2}}, return true

step 4: getrandom()
- random index in [0,3), return random element from [1,1,2]

step 5: remove(1)
- remove index 0, swap with last element
- arr = [2,1], map = {1 -> {1}, 2 -> {0}}, return true

step 6: getrandom()
- random index in [0,2), return random element from [2,1]
```

## Time and Space Complexity

- **time complexity:** O(1) for all operations
- **space complexity:** O(n) for storing values and indices

the algorithm is efficient because:
- hashmap operations are O(1) average case
- array operations are O(1)
- index management is O(1)
- no linear searches required

## Key Insights

1. **hashmap + array** - efficient index tracking and random access
2. **swap strategy** - O(1) removal by swapping with last element
3. **index management** - carefully update indices when swapping
4. **duplicate handling** - use set to track multiple indices per value

## Alternative Approaches

i also considered:

1. **array only** - use array with linear search
   - O(n) removal time
   - simple implementation
   - inefficient for large inputs

2. **hashset + array** - use hashset for uniqueness
   - doesn't handle duplicates
   - incorrect for this problem
   - not suitable

3. **linked list** - use linked list for dynamic operations
   - O(n) random access
   - complex implementation
   - inefficient for getrandom

4. **tree structure** - use balanced tree
   - O(log n) operations
   - more complex than hashmap
   - unnecessary complexity

## Edge Cases to Consider

1. **empty collection** - handle when no elements exist
2. **single element** - handle collection with one element
3. **duplicate elements** - handle multiple same values
4. **remove non-existent** - handle removing missing values
5. **large input** - ensure efficient performance
6. **random distribution** - ensure uniform probability

## TypeScript-Specific Features

1. **map and set** - efficient key-value and unique value storage
2. **type annotations** - explicit typing for better code clarity
3. **private members** - encapsulation with private keyword
4. **optional chaining** - safe property access
5. **generics** - type-safe collections

## Lessons Learned

this problem taught me:
- **data structure design** - choosing the right combination
- **index management** - careful tracking of positions
- **efficient algorithms** - optimizing for specific operations
- **duplicate handling** - managing multiple occurrences

## Real-World Applications

this problem has applications in:
- **database systems** - efficient data storage and retrieval
- **cache management** - random eviction policies
- **game development** - random item selection
- **sampling algorithms** - random data sampling

## Conclusion

the insert delete getrandom o(1) - duplicates allowed problem is an excellent exercise in data structure design and efficient algorithms. the key insight is using a hashmap for index tracking and an array for random access, while carefully managing indices during operations.

you can find my complete solution on [leetcode](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1234569/insert-delete-getrandom-o1-duplicates-allowed-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

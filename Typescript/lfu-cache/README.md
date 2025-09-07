# lfu cache

## problem
design and implement a data structure for a least frequently used (lfu) cache.

implement the lfu cache class:
- lfu cache(int capacity) initializes the object with the capacity of the data structure.
- int get(int key) gets the value of the key if the key exists in the cache. otherwise, returns -1.
- void put(int key, int value) updates the value of the key if present, or inserts the key if not already present. when the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. for this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.

to determine the least frequently used key, a use counter is maintained for each key in the cache. the key with the smallest use counter is the least frequently used key.

when a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). the use counter for a key in the cache is incremented either a get or put operation is called on it.

the functions get and put must each run in o(1) average time complexity.

## approach
this is implemented using a combination of hashmaps and doubly linked lists:

### 1. data structures used
- `node` class: represents cache entries with key, value, frequency, and doubly linked list pointers
- `doublylinkedlist` class: maintains order within each frequency level
- `lfucache` class: main cache implementation with frequency-based organization

### 2. frequency-based organization
- each frequency level (1, 2, 3, ...) has its own doubly linked list
- nodes are moved between frequency lists as their access count increases
- maintains minimum frequency tracking for efficient eviction

### 3. hashmap usage
- `keytonode`: maps keys to their corresponding nodes for o(1) access
- `freqtolist`: maps frequencies to their doubly linked lists

### 4. eviction strategy
- when capacity is reached, evicts from the lowest frequency list
- within the same frequency, evicts the least recently used (end of list)

## time complexity
- o(1) for both get and put operations
- all hashmap operations are o(1)
- doubly linked list operations are o(1)

## space complexity
- o(capacity) for storing cache entries
- o(capacity) for hashmap storage
- additional o(f) space for frequency lists where f is number of distinct frequencies

## test cases covered
- basic put and get operations
- frequency-based eviction when capacity is reached
- least recently used eviction for frequency ties
- edge cases with capacity 0

## example
```typescript
const cache = new LFUCache(2);
cache.put(1, 1);    // cache: {1:1}
cache.put(2, 2);    // cache: {1:1, 2:2}
cache.get(1);       // returns 1, cache: {1:1(freq=2), 2:2(freq=1)}
cache.put(3, 3);    // evicts key 2, cache: {1:1, 3:3}
cache.get(2);       // returns -1
cache.get(3);       // returns 3
cache.put(4, 4);    // evicts key 1, cache: {3:3, 4:4}
cache.get(1);       // returns -1
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

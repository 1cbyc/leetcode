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
this is implemented using standard typescript maps and sets within the exact class template provided:

### 1. data structures used
- `cache: Map<number, {value, freq, time}>` - stores key-value pairs with frequency and timestamp
- `freqMap: Map<number, Set<number>>` - maps frequency levels to sets of keys
- `minFreq: number` - tracks the minimum frequency for efficient eviction
- `time: number` - global timestamp for LRU tie-breaking

### 2. frequency-based organization
- each key tracks its access frequency and last access time
- frequency map groups keys by their current frequency level
- automatic frequency updates on every get/put operation

### 3. eviction strategy
- when capacity is reached, finds the minimum frequency group
- within that group, evicts the least recently used key (earliest timestamp)
- maintains O(1) average time complexity for all operations

## time complexity
- o(1) for both get and put operations (amortized)
- map and set operations are o(1) on average
- eviction requires scanning the minimum frequency set (worst case o(capacity))

## space complexity
- o(capacity) for storing cache entries
- o(capacity) for frequency map storage
- total space usage scales with cache capacity

```typescript
class LFUCache {
    constructor(capacity: number) {

    }

    get(key: number): number {

    }

    put(key: number, value: number): void {

    }
}
```

## test cases covered
- basic put and get operations
- frequency-based eviction when capacity is reached
- least recently used eviction for frequency ties
- edge cases with capacity 0

## example
```typescript
const cache = new LFUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.get(2);
cache.get(3);
cache.put(4, 4);
cache.get(1);
cache.get(3);
cache.get(4);
```

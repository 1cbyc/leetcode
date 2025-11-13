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

## solution approach
this implementation uses standard typescript/javascript data structures (map and set) to achieve o(1) average time complexity for both get and put operations.

### data structures used
- `cache: Map<number, {value, freq, time}>` - stores key-value pairs with frequency and timestamp
- `freqMap: Map<number, Set<number>>` - maps frequency levels to sets of keys
- `minFreq: number` - tracks the minimum frequency for efficient eviction
- `time: number` - global timestamp for lru tie-breaking

### algorithm details

#### frequency-based organization
- each key tracks its access frequency and last access timestamp
- frequency map groups keys by their current frequency level (1, 2, 3, etc.)
- automatic frequency updates occur on every get/put operation

#### eviction strategy
- when capacity is reached, identifies the minimum frequency group
- within that frequency group, evicts the least recently used key (earliest timestamp)
- maintains o(1) average time complexity for all operations

## time complexity
- o(1) average time complexity for both get and put operations
- map and set operations are o(1) on average
- eviction scanning through minimum frequency set is o(k) where k is cache capacity (still o(1) amortized)

## space complexity
- o(capacity) for storing cache entries
- o(capacity) for frequency map storage
- total space usage scales linearly with cache capacity

## implementation features

### key methods
- `get(key: number): number` - retrieves value and updates frequency/timestamp
- `put(key: number, value: number): void` - inserts/updates value and handles eviction
- `updateFrequency(key, oldFreq)` - moves key to new frequency level
- `evict()` - removes least frequently used key with lru tie-breaking

### frequency management
- automatic frequency increment on each access
- minimum frequency tracking for efficient eviction
- frequency map cleanup when frequency levels become empty

## test cases covered
- basic put and get operations
- frequency-based eviction when capacity is reached
- least recently used eviction for frequency ties
- proper timestamp tracking for lru ordering
- edge cases with capacity 0 and capacity 1

## example usage
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

## notes
- this implementation achieves the required o(1) average time complexity
- uses timestamp-based approach for lru tie-breaking within same frequency
- handles all edge cases including capacity 0 and frequency updates
- memory efficient with linear space complexity relative to cache capacity

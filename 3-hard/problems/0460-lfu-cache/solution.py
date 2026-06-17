from collections import OrderedDict, defaultdict


class LFUCache:
    def __init__(self, capacity: int) -> None:
        self.capacity = capacity
        self.values: dict[int, int] = {}
        self.counts: dict[int, int] = {}
        self.buckets: dict[int, OrderedDict] = defaultdict(OrderedDict)
        self.min_freq = 0

    def _bump(self, key: int) -> None:
        freq = self.counts[key]
        del self.buckets[freq][key]
        if not self.buckets[freq]:
            del self.buckets[freq]
            if self.min_freq == freq:
                self.min_freq += 1
        self.counts[key] = freq + 1
        self.buckets[freq + 1][key] = None

    def get(self, key: int) -> int:
        if key not in self.values:
            return -1
        self._bump(key)
        return self.values[key]

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return

        if key in self.values:
            self.values[key] = value
            self._bump(key)
            return

        if len(self.values) >= self.capacity:
            evict_key, _ = self.buckets[self.min_freq].popitem(last=False)
            del self.values[evict_key]
            del self.counts[evict_key]

        self.values[key] = value
        self.counts[key] = 1
        self.buckets[1][key] = None
        self.min_freq = 1


if __name__ == "__main__":
    cache = LFUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert cache.get(1) == 1
    cache.put(3, 3)
    assert cache.get(2) == -1
    assert cache.get(3) == 3
    cache.put(4, 4)
    assert cache.get(1) == -1
    assert cache.get(3) == 3
    assert cache.get(4) == 4

    print("All tests passed!")

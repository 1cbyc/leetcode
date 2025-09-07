class LFUCache {
    capacity: number;
    cache: Map<number, {value: number, freq: number, time: number}>;
    freqMap: Map<number, Set<number>>;
    minFreq: number;
    time: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.freqMap = new Map();
        this.minFreq = 0;
        this.time = 0;
    }

    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }

        const item = this.cache.get(key)!;
        this.updateFrequency(key, item.freq);
        item.time = this.time++;

        return item.value;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) return;

        if (this.cache.has(key)) {
            const item = this.cache.get(key)!;
            item.value = value;
            this.updateFrequency(key, item.freq);
            item.time = this.time++;
            return;
        }

        if (this.cache.size === this.capacity) {
            this.evict();
        }

        this.cache.set(key, {value, freq: 1, time: this.time++});
        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new Set());
        }
        this.freqMap.get(1)!.add(key);
        this.minFreq = 1;
    }

    private updateFrequency(key: number, oldFreq: number): void {
        const freqSet = this.freqMap.get(oldFreq);
        if (freqSet) {
            freqSet.delete(key);
            if (freqSet.size === 0) {
                this.freqMap.delete(oldFreq);
                if (oldFreq === this.minFreq) {
                    this.minFreq++;
                }
            }
        }

        const newFreq = oldFreq + 1;
        if (!this.freqMap.has(newFreq)) {
            this.freqMap.set(newFreq, new Set());
        }
        this.freqMap.get(newFreq)!.add(key);
    }

    private evict(): void {
        const freqSet = this.freqMap.get(this.minFreq);
        if (!freqSet || freqSet.size === 0) return;

        // Find the least recently used key in the minimum frequency set
        let lruKey = -1;
        let minTime = Infinity;

        for (const key of freqSet) {
            const item = this.cache.get(key);
            if (item && item.time < minTime) {
                minTime = item.time;
                lruKey = key;
            }
        }

        if (lruKey !== -1) {
            this.cache.delete(lruKey);
            freqSet.delete(lruKey);
            if (freqSet.size === 0) {
                this.freqMap.delete(this.minFreq);
            }
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

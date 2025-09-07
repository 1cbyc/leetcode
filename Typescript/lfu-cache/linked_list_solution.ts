class Node {
    key: number;
    value: number;
    freq: number;
    prev: Node | null;
    next: Node | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: Node;
    tail: Node;
    size: number;

    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    addNode(node: Node): void {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
        this.size++;
    }

    removeNode(node: Node): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        this.size--;
    }

    removeLast(): Node | null {
        if (this.size === 0) return null;
        const lastNode = this.tail.prev!;
        this.removeNode(lastNode);
        return lastNode;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }
}

class LFUCache {
    capacity: number;
    minFreq: number;
    keyToNode: Map<number, Node>;
    freqToList: Map<number, DoublyLinkedList>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.keyToNode = new Map();
        this.freqToList = new Map();
    }

    get(key: number): number {
        if (!this.keyToNode.has(key)) {
            return -1;
        }

        const node = this.keyToNode.get(key)!;
        this.updateFrequency(node);
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) return;

        if (this.keyToNode.has(key)) {
            const node = this.keyToNode.get(key)!;
            node.value = value;
            this.updateFrequency(node);
            return;
        }

        if (this.keyToNode.size === this.capacity) {
            this.evict();
        }

        const newNode = new Node(key, value);
        this.keyToNode.set(key, newNode);
        this.addToFreqList(newNode, 1);
        this.minFreq = 1;
    }

    private updateFrequency(node: Node): void {
        const oldFreq = node.freq;
        this.removeFromFreqList(node, oldFreq);
        node.freq++;

        if (oldFreq === this.minFreq && !this.freqToList.get(oldFreq)?.size) {
            this.minFreq++;
        }

        this.addToFreqList(node, node.freq);
    }

    private addToFreqList(node: Node, freq: number): void {
        if (!this.freqToList.has(freq)) {
            this.freqToList.set(freq, new DoublyLinkedList());
        }
        this.freqToList.get(freq)!.addNode(node);
    }

    private removeFromFreqList(node: Node, freq: number): void {
        const list = this.freqToList.get(freq);
        if (list) {
            list.removeNode(node);
            if (list.isEmpty()) {
                this.freqToList.delete(freq);
            }
        }
    }

    private evict(): void {
        const list = this.freqToList.get(this.minFreq);
        if (list) {
            const nodeToRemove = list.removeLast();
            if (nodeToRemove) {
                this.keyToNode.delete(nodeToRemove.key);
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

// Test cases
const cache = new LFUCache(2);
console.log("Put (1,1):", cache.put(1, 1));
console.log("Put (2,2):", cache.put(2, 2));
console.log("Get (1):", cache.get(1));
console.log("Put (3,3):", cache.put(3, 3));
console.log("Get (2):", cache.get(2));
console.log("Get (3):", cache.get(3));
console.log("Put (4,4):", cache.put(4, 4));
console.log("Get (1):", cache.get(1));
console.log("Get (3):", cache.get(3));
console.log("Get (4):", cache.get(4));

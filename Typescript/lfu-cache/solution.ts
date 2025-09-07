// my node class for the doubly linked list
class Node {
    key: number;
    value: number;
    previous: Node | null;
    next: Node | null;
    count: number;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.previous = null;
        this.next = null;
        this.count = 1; // start with frequency 1
    }
}

// doubly linked list to keep nodes in order within each frequency
class DoubleLinkedList {
    head: Node; // dummy head node
    tail: Node; // dummy tail node
    size: number; // how many nodes we got

    constructor(){
        this.size = 0;
        this.head = new Node(-1,-1);
        this.tail = new Node(-1,-1);
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    // add node to the front (most recently used position)
    addNode(node: Node) {
        if (this.head.next) {
            this.head.next.previous = node;
        }
        node.previous = this.head;
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    // remove a specific node from the list
    removeNode(node: Node) {
        if (node.previous && node.next) {
            node.previous.next = node.next;
            node.next.previous = node.previous;
        }
        node.next = null;
        node.previous = null;
        this.size--;
    }

    // get the least recently used node (from the end)
    popLast(): Node | null {
        if (this.tail.previous === this.head) {
            return null; // empty list
        }

        let last = this.tail.previous;
        if (last) {
            this.removeNode(last);
        }
        return last;
    }
}

// main lfu cache class - this is where the magic happens
class LFUCache {
    capacity: number; // max capacity of cache
    size: number; // current number of items
    mapOfLists: Record<number, DoubleLinkedList>; // frequency -> list of nodes
    mapOfNodes: Record<number, Node>;  // key -> node mapping

    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.mapOfLists = {}; // each frequency has its own list
        this.mapOfNodes = {}; // quick lookup for keys
    }

    // get value for a key and update its frequency
    get(key: number): number {
        let node = this.mapOfNodes[key];

        if (!node) {
            return -1; // key not found
        }

        // remove from current frequency list
        let list = this.mapOfLists[node.count];
        list.removeNode(node);

        // clean up empty list
        if (list.size === 0) {
            delete this.mapOfLists[node.count];
        }

        // increase frequency
        node.count++;

        // create new list for this frequency if needed
        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        // add to new frequency list
         this.mapOfLists[node.count].addNode(node);

        return node.value;
    }

    // put key-value pair, handle eviction if needed
    put(key: number, value: number): void {
        // edge case: no capacity
        if (this.capacity === 0) {
    return;
}

        let node: Node | null = null;
        
        // check if key already exists
        if (this.mapOfNodes[key] === undefined) {
            // new key - might need to evict
            if (this.size >= this.capacity) {
                // find lowest frequency list
                let smallest = -1;
                for (let key of Object.keys(this.mapOfLists)) {
                    const parsedKey = parseInt(key, 10);
                    if (smallest === -1 || smallest > parsedKey) {
                        smallest = parsedKey;
                    }
                }

                let list = this.mapOfLists[smallest];
                let nodeToEvict = list.popLast();

                if (nodeToEvict) {
                    delete this.mapOfNodes[nodeToEvict.key];
                    this.size--;

                    // clean up empty frequency list
                    if (list.size === 0) {
                        delete this.mapOfLists[nodeToEvict.count];
                    }
                }
            }

            // add new node
            this.size++;
            node = new Node(key, value);
            this.mapOfNodes[key] = node;

        } else {
            // existing key - update value and frequency
            node = this.mapOfNodes[key];

            // remove from current frequency list
            let list = this.mapOfLists[node.count];
            list.removeNode(node);

            // clean up if list is empty
            if (list.size === 0) {
                delete this.mapOfLists[node.count];
            }

            // update value and increase frequency
            node.value = value;
            node.count++;
        }

        // ensure frequency list exists
        if (!this.mapOfLists[node.count]) {
           this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        // add node to its frequency list
         this.mapOfLists[node.count].addNode(node);
    }
}

// test the lfu cache
const cache = new LFUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("get(1):", cache.get(1));  // returns 1
cache.put(3, 3);                      // evicts key 2
console.log("get(2):", cache.get(2));  // returns -1 (evicted)
console.log("get(3):", cache.get(3));  // returns 3
cache.put(4, 4);                      // evicts key 1
console.log("get(1):", cache.get(1));  // returns -1 (evicted)
console.log("get(3):", cache.get(3));  // returns 3
console.log("get(4):", cache.get(4));  // returns 4
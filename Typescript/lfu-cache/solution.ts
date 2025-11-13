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
        this.count = 1;
    }
}

class DoubleLinkedList {
    head: Node;
    tail: Node;
    size: number;

    constructor(){
        this.size = 0;
        this.head = new Node(-1,-1);
        this.tail = new Node(-1,-1);
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    addNode(node: Node) {
        if (this.head.next) {
            this.head.next.previous = node;
        }
        node.previous = this.head;
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    removeNode(node: Node) {
        if (node.previous && node.next) {
            node.previous.next = node.next;
            node.next.previous = node.previous;
        }
        node.next = null;
        node.previous = null;
        this.size--;
    }

    popLast(): Node | null {
        if (this.tail.previous === this.head) {
            return null;
        }

        let last = this.tail.previous;
        if (last) {
            this.removeNode(last);
        }
        return last;
    }
}

class LFUCache {
    capacity: number;
    size: number;
    mapOfLists: Record<number, DoubleLinkedList>;
    mapOfNodes: Record<number, Node>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.mapOfLists = {};
        this.mapOfNodes = {};
    }

    get(key: number): number {
        let node = this.mapOfNodes[key];

        if (!node) {
            return -1;
        }

        let list = this.mapOfLists[node.count];
        list.removeNode(node);

        if (list.size === 0) {
            delete this.mapOfLists[node.count];
        }

        node.count++;

        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

         this.mapOfLists[node.count].addNode(node);

        return node.value;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) {
            return;
        }

        let node: Node | null = null;
        
        if (this.mapOfNodes[key] === undefined) {
            if (this.size >= this.capacity) {
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

                    if (list.size === 0) {
                        delete this.mapOfLists[nodeToEvict.count];
                    }
                }
            }

            this.size++;
            node = new Node(key, value);
            this.mapOfNodes[key] = node;

        } else {
            node = this.mapOfNodes[key];

            let list = this.mapOfLists[node.count];
            list.removeNode(node);

            if (list.size === 0) {
                delete this.mapOfLists[node.count];
            }

            node.value = value;
            node.count++;
        }

        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        this.mapOfLists[node.count].addNode(node);
    }
}

const cache = new LFUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("get(1):", cache.get(1));
cache.put(3, 3);
console.log("get(2):", cache.get(2));
console.log("get(3):", cache.get(3));
cache.put(4, 4);
console.log("get(1):", cache.get(1));
console.log("get(3):", cache.get(3));
console.log("get(4):", cache.get(4));
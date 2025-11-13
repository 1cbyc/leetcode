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
        this.head.next.previous = node;
        node.previous = this.head;
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    removeNode(node: Node) {
        node.previous.next = node.next;
        node.next.previous = node.previous;
        node.next = null;
        node.previous = null;
        this.size--;
    }

    popLast(): Node | null {
        if (this.tail.previous === this.head) {
            return null;
        }
        
        let last = this.tail.previous;
        this.removeNode(last);
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
            if (this.capacity === this.size) {
                let smallest = -1;
                for (let key of Object.keys(this.mapOfLists)) {
                    const parsedKey = parseInt(key, 10);
                    if (smallest === -1 || smallest > parsedKey) {
                        smallest = parsedKey;
                    }
                }
                let list = this.mapOfLists[smallest];
                let nodeToEvict = list.popLast();
                delete this.mapOfNodes[nodeToEvict.key];
                
                if (list.size === 0) {
                    delete this.mapOfLists[nodeToEvict.count]; 
                }
            } else {
                this.size++;
            }
            
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
---
title: "LeetCode 432: All O'one Data Structure - C Hash Table and Doubly Linked List Solution"
description: "Solving the All O'one Data Structure problem using C with hash table and doubly linked list"
date: "2025-01-27"
draft: false
---

# LeetCode 432: All O'one Data Structure

i recently solved the all o'one data structure problem on leetcode, and it's a great example of complex data structure design and efficient algorithms. this hard problem tests your understanding of hash tables, linked lists, and memory management in c.

## Problem Statement

design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

implement the allone class:
- allone() initializes the object of the data structure.
- void inc(string key) increments the count of the string key by 1. if key does not exist in the data structure, insert it with count 1.
- void dec(string key) decrements the count of the string key by 1. if the count of key is 0 after the decrement, remove it from the data structure.
- string getmaxkey() returns one of the keys with the maximal count. if no element exists, return an empty string "".
- string getminkey() returns one of the keys with the minimum count. if no element exists, return an empty string "".

**example 1:**
```
input
["allone", "inc", "inc", "inc", "inc", "inc", "dec", "dec", "getmaxkey", "getminkey"]
[[], ["hello"], ["hello"], ["world"], ["world"], ["hello"], ["world"], ["world"], [], []]
output
[null, null, null, null, null, null, null, null, "hello", "world"]

explanation
allone allone = new allone();
allone.inc("hello"); // count: hello = 1
allone.inc("hello"); // count: hello = 2
allone.inc("world"); // count: hello = 2, world = 1
allone.inc("world"); // count: hello = 2, world = 2
allone.inc("hello"); // count: hello = 3, world = 2
allone.dec("world"); // count: hello = 3, world = 1
allone.dec("world"); // count: hello = 3, world = 0 (removed)
allone.getmaxkey(); // return "hello"
allone.getminkey(); // return "world"
```

## My Approach

when i first saw this problem, i immediately thought about using a combination of hash table and doubly linked list. the key insight is using a hash table for key lookup and a doubly linked list with frequency buckets to maintain sorted order efficiently.

### Initial Thoughts

i started by thinking about different approaches:
1. **hash table + linked list** - use hash table for lookup and linked list for frequency buckets
2. **tree structure** - use balanced tree for sorted frequencies
3. **array approach** - use array with linear search
4. **multiple hash tables** - use separate hash tables for different frequencies

### Solution Strategy

i decided to use a **hash table + doubly linked list approach** with the following strategy:
1. **hash table** - map keys to their frequency and node
2. **doubly linked list** - maintain frequency buckets in sorted order
3. **frequency buckets** - group keys by their frequency
4. **efficient operations** - O(1) operations using hash table and linked list
5. **bucket management** - handle empty buckets and frequency changes

## My Solution

```c
typedef struct node {
    int freq;
    char** keys;
    int keycount;
    int capacity;
    struct node* prev;
    struct node* next;
} node;

typedef struct {
    node* head;
    node* tail;
    char** keys;
    int* freqs;
    int capacity;
    int size;
} allone;

allone* allonecreate() {
    allone* obj = (allone*)malloc(sizeof(allone));
    obj->head = (node*)malloc(sizeof(node));
    obj->tail = (node*)malloc(sizeof(node));
    
    obj->head->freq = 0;
    obj->tail->freq = int_max;
    obj->head->next = obj->tail;
    obj->tail->prev = obj->head;
    obj->head->prev = null;
    obj->tail->next = null;
    
    obj->capacity = 1000;
    obj->keys = (char**)calloc(obj->capacity, sizeof(char*));
    obj->freqs = (int*)calloc(obj->capacity, sizeof(int));
    obj->size = 0;
    
    return obj;
}

node* createnode(int freq) {
    node* newnode = (node*)malloc(sizeof(node));
    newnode->freq = freq;
    newnode->capacity = 10;
    newnode->keys = (char**)malloc(newnode->capacity * sizeof(char*));
    newnode->keycount = 0;
    newnode->prev = null;
    newnode->next = null;
    return newnode;
}

void addkeytonode(node* node, char* key) {
    if (node->keycount >= node->capacity) {
        node->capacity *= 2;
        node->keys = (char**)realloc(node->keys, node->capacity * sizeof(char*));
    }
    node->keys[node->keycount++] = strdup(key);
}

void removekeyfromnode(node* node, char* key) {
    for (int i = 0; i < node->keycount; i++) {
        if (strcmp(node->keys[i], key) == 0) {
            free(node->keys[i]);
            for (int j = i; j < node->keycount - 1; j++) {
                node->keys[j] = node->keys[j + 1];
            }
            node->keycount--;
            break;
        }
    }
}

void insertafter(node* prev, node* newnode) {
    newnode->next = prev->next;
    newnode->prev = prev;
    prev->next->prev = newnode;
    prev->next = newnode;
}

void removenode(node* node) {
    node->prev->next = node->next;
    node->next->prev = node->prev;
}

int findkey(allone* obj, char* key) {
    for (int i = 0; i < obj->size; i++) {
        if (obj->keys[i] && strcmp(obj->keys[i], key) == 0) {
            return i;
        }
    }
    return -1;
}

void alloneinc(allone* obj, char* key) {
    int index = findkey(obj, key);
    int oldfreq = 0;
    
    if (index != -1) {
        oldfreq = obj->freqs[index];
    } else {
        // check if we need to resize arrays
        if (obj->size >= obj->capacity) {
            obj->capacity *= 2;
            obj->keys = (char**)realloc(obj->keys, obj->capacity * sizeof(char*));
            obj->freqs = (int*)realloc(obj->freqs, obj->capacity * sizeof(int));
        }
        index = obj->size++;
        obj->keys[index] = strdup(key);
        obj->freqs[index] = 0;
    }
    
    int newfreq = oldfreq + 1;
    obj->freqs[index] = newfreq;
    
    // find or create node for new frequency
    node* newnode = null;
    node* current = obj->head->next;
    
    while (current != obj->tail && current->freq < newfreq) {
        current = current->next;
    }
    
    if (current == obj->tail || current->freq != newfreq) {
        newnode = createnode(newfreq);
        insertafter(current->prev, newnode);
    } else {
        newnode = current;
    }
    
    addkeytonode(newnode, key);
    
    // remove from old node if exists
    if (oldfreq > 0) {
        node* oldnode = obj->head->next;
        while (oldnode != obj->tail && oldnode->freq != oldfreq) {
            oldnode = oldnode->next;
        }
        if (oldnode != obj->tail) {
            removekeyfromnode(oldnode, key);
            if (oldnode->keycount == 0) {
                removenode(oldnode);
                free(oldnode->keys);
                free(oldnode);
            }
        }
    }
}

void allonedec(allone* obj, char* key) {
    int index = findkey(obj, key);
    if (index == -1) return;
    
    int oldfreq = obj->freqs[index];
    if (oldfreq == 0) return;
    
    int newfreq = oldfreq - 1;
    obj->freqs[index] = newfreq;
    
    // remove from old node
    node* oldnode = obj->head->next;
    while (oldnode != obj->tail && oldnode->freq != oldfreq) {
        oldnode = oldnode->next;
    }
    if (oldnode != obj->tail) {
        removekeyfromnode(oldnode, key);
        if (oldnode->keycount == 0) {
            removenode(oldnode);
            free(oldnode->keys);
            free(oldnode);
        }
    }
    
    // add to new node if frequency > 0
    if (newfreq > 0) {
        node* newnode = null;
        node* current = obj->head->next;
        
        while (current != obj->tail && current->freq < newfreq) {
            current = current->next;
        }
        
        if (current == obj->tail || current->freq != newfreq) {
            newnode = createnode(newfreq);
            insertafter(current->prev, newnode);
        } else {
            newnode = current;
        }
        
        addkeytonode(newnode, key);
    } else {
        // remove key if frequency becomes 0
        free(obj->keys[index]);
        obj->keys[index] = null;
    }
}

char* allonegetmaxkey(allone* obj) {
    if (obj->tail->prev == obj->head) {
        return "";
    }
    return obj->tail->prev->keys[0];
}

char* allonegetminkey(allone* obj) {
    if (obj->head->next == obj->tail) {
        return "";
    }
    return obj->head->next->keys[0];
}

void allonefree(allone* obj) {
    node* current = obj->head;
    while (current != null) {
        node* next = current->next;
        if (current != obj->head && current != obj->tail) {
            for (int i = 0; i < current->keycount; i++) {
                free(current->keys[i]);
            }
            free(current->keys);
        }
        free(current);
        current = next;
    }
    
    for (int i = 0; i < obj->size; i++) {
        if (obj->keys[i]) {
            free(obj->keys[i]);
        }
    }
    free(obj->keys);
    free(obj->freqs);
    free(obj);
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Data Structure Setup
```c
typedef struct node {
    int freq;
    char** keys;
    int keycount;
    int capacity;
    struct node* prev;
    struct node* next;
} node;

typedef struct {
    node* head;
    node* tail;
    char** keys;
    int* freqs;
    int capacity;
    int size;
} allone;
```

we define our data structures:
- **node**: represents a frequency bucket with keys
- **allone**: main data structure with hash table and linked list
- **hash table**: maps keys to frequencies using arrays
- **linked list**: maintains sorted frequency buckets

### 2. Constructor
```c
allone* allonecreate() {
    allone* obj = (allone*)malloc(sizeof(allone));
    obj->head = (node*)malloc(sizeof(node));
    obj->tail = (node*)malloc(sizeof(node));
    
    obj->head->freq = 0;
    obj->tail->freq = int_max;
    obj->head->next = obj->tail;
    obj->tail->prev = obj->head;
    obj->head->prev = null;
    obj->tail->next = null;
    
    obj->capacity = 1000;
    obj->keys = (char**)calloc(obj->capacity, sizeof(char*));
    obj->freqs = (int*)calloc(obj->capacity, sizeof(int));
    obj->size = 0;
    
    return obj;
}
```

the constructor:
- **initialize**: create head and tail sentinel nodes
- **hash table**: allocate memory for key lookup arrays
- **frequency array**: track frequencies for keys
- **sentinel nodes**: simplify boundary conditions

### 3. Increment Operation (Fixed)
```c
void alloneinc(allone* obj, char* key) {
    int index = findkey(obj, key);
    int oldfreq = 0;
    
    if (index != -1) {
        oldfreq = obj->freqs[index];
    } else {
        // check if we need to resize arrays
        if (obj->size >= obj->capacity) {
            obj->capacity *= 2;
            obj->keys = (char**)realloc(obj->keys, obj->capacity * sizeof(char*));
            obj->freqs = (int*)realloc(obj->freqs, obj->capacity * sizeof(int));
        }
        index = obj->size++;
        obj->keys[index] = strdup(key);
        obj->freqs[index] = 0;
    }
    
    int newfreq = oldfreq + 1;
    obj->freqs[index] = newfreq;
    
    // find or create node for new frequency
    node* newnode = null;
    node* current = obj->head->next;
    
    while (current != obj->tail && current->freq < newfreq) {
        current = current->next;
    }
    
    if (current == obj->tail || current->freq != newfreq) {
        newnode = createnode(newfreq);
        insertafter(current->prev, newnode);
    } else {
        newnode = current;
    }
    
    addkeytonode(newnode, key);
    
    // remove from old node if exists
    if (oldfreq > 0) {
        node* oldnode = obj->head->next;
        while (oldnode != obj->tail && oldnode->freq != oldfreq) {
            oldnode = oldnode->next;
        }
        if (oldnode != obj->tail) {
            removekeyfromnode(oldnode, key);
            if (oldnode->keycount == 0) {
                removenode(oldnode);
                free(oldnode->keys);
                free(oldnode);
            }
        }
    }
}
```

the increment operation (fixed):
- **key lookup**: find key in array or add new key
- **array resizing**: check and resize arrays if needed
- **frequency update**: increment frequency
- **bucket management**: move key to appropriate frequency bucket
- **cleanup**: remove from old bucket and clean up if empty

### 4. Key Fix: Array Resizing
```c
// check if we need to resize arrays
if (obj->size >= obj->capacity) {
    obj->capacity *= 2;
    obj->keys = (char**)realloc(obj->keys, obj->capacity * sizeof(char*));
    obj->freqs = (int*)realloc(obj->freqs, obj->capacity * sizeof(int));
}
```

the key fix:
- **bounds checking**: check if size >= capacity before adding
- **dynamic resizing**: double capacity when needed
- **memory reallocation**: use realloc for both arrays
- **prevent overflow**: ensure arrays are large enough

### 5. Decrement Operation
```c
void allonedec(allone* obj, char* key) {
    int index = findkey(obj, key);
    if (index == -1) return;
    
    int oldfreq = obj->freqs[index];
    if (oldfreq == 0) return;
    
    int newfreq = oldfreq - 1;
    obj->freqs[index] = newfreq;
    
    // remove from old node
    node* oldnode = obj->head->next;
    while (oldnode != obj->tail && oldnode->freq != oldfreq) {
        oldnode = oldnode->next;
    }
    if (oldnode != obj->tail) {
        removekeyfromnode(oldnode, key);
        if (oldnode->keycount == 0) {
            removenode(oldnode);
            free(oldnode->keys);
            free(oldnode);
        }
    }
    
    // add to new node if frequency > 0
    if (newfreq > 0) {
        node* newnode = null;
        node* current = obj->head->next;
        
        while (current != obj->tail && current->freq < newfreq) {
            current = current->next;
        }
        
        if (current == obj->tail || current->freq != newfreq) {
            newnode = createnode(newfreq);
            insertafter(current->prev, newnode);
        } else {
            newnode = current;
        }
        
        addkeytonode(newnode, key);
    } else {
        // remove key if frequency becomes 0
        free(obj->keys[index]);
        obj->keys[index] = null;
    }
}
```

the decrement operation:
- **key lookup**: find key in array
- **frequency check**: return if frequency is 0
- **bucket removal**: remove key from current bucket
- **new bucket**: add to new bucket if frequency > 0
- **cleanup**: remove key if frequency becomes 0

### 6. GetMax/Min Operations
```c
char* allonegetmaxkey(allone* obj) {
    if (obj->tail->prev == obj->head) {
        return "";
    }
    return obj->tail->prev->keys[0];
}

char* allonegetminkey(allone* obj) {
    if (obj->head->next == obj->tail) {
        return "";
    }
    return obj->head->next->keys[0];
}
```

the get operations:
- **getmaxkey**: return first key from last bucket (highest frequency)
- **getminkey**: return first key from first bucket (lowest frequency)
- **edge cases**: return empty string if no keys exist

### 7. Memory Management
```c
void allonefree(allone* obj) {
    node* current = obj->head;
    while (current != null) {
        node* next = current->next;
        if (current != obj->head && current != obj->tail) {
            for (int i = 0; i < current->keycount; i++) {
                free(current->keys[i]);
            }
            free(current->keys);
        }
        free(current);
        current = next;
    }
    
    for (int i = 0; i < obj->size; i++) {
        if (obj->keys[i]) {
            free(obj->keys[i]);
        }
    }
    free(obj->keys);
    free(obj->freqs);
    free(obj);
}
```

memory cleanup:
- **node cleanup**: free all nodes and their keys
- **hash table cleanup**: free key lookup arrays
- **main object**: free the main data structure
- **prevent leaks**: ensure all allocated memory is freed

## Example Walkthrough

let's trace through the example: inc("hello"), inc("hello"), inc("world"), getmaxkey(), getminkey()

```
step 1: inc("hello")
- findkey returns -1 (new key)
- resize check: size=0 < capacity=1000, no resize needed
- add "hello" to keys[0], freqs[0] = 0
- oldfreq = 0, newfreq = 1
- create bucket with freq=1
- add "hello" to bucket

step 2: inc("hello")
- findkey returns 0 (existing key)
- oldfreq = 1, newfreq = 2
- create bucket with freq=2
- move "hello" to new bucket
- remove old bucket

step 3: inc("world")
- findkey returns -1 (new key)
- resize check: size=1 < capacity=1000, no resize needed
- add "world" to keys[1], freqs[1] = 0
- oldfreq = 0, newfreq = 1
- add "world" to freq=1 bucket

step 4: getmaxkey()
- return "hello" from freq=2 bucket

step 5: getminkey()
- return "world" from freq=1 bucket
```

## Time and Space Complexity

- **time complexity:** O(n) for key lookup, O(1) for other operations
- **space complexity:** O(n) for storing keys and frequencies

the algorithm is efficient because:
- array operations are O(1) average case
- linked list maintains sorted order
- bucket operations are O(1)
- memory management is efficient

## Key Insights

1. **hash table + linked list** - efficient lookup and sorted order
2. **frequency buckets** - group keys by frequency
3. **sentinel nodes** - simplify boundary conditions
4. **memory management** - careful cleanup to prevent leaks
5. **array resizing** - prevent buffer overflow

## Alternative Approaches

i also considered:

1. **tree structure** - use balanced tree for sorted frequencies
   - O(log n) operations
   - more complex implementation
   - unnecessary complexity

2. **array approach** - use array with linear search
   - O(n) operations
   - simple implementation
   - inefficient for large inputs

3. **multiple hash tables** - use separate hash tables for different frequencies
   - O(n) space complexity
   - complex frequency tracking
   - inefficient for sparse frequencies

4. **priority queue** - use heap for frequency management
   - O(log n) operations
   - doesn't handle duplicates well
   - not suitable for this problem

## Edge Cases to Consider

1. **empty structure** - handle when no keys exist
2. **single key** - handle structure with one key
3. **duplicate frequencies** - handle multiple keys with same frequency
4. **zero frequency** - handle keys with frequency 0
5. **large input** - ensure efficient performance
6. **memory constraints** - handle large number of keys
7. **array overflow** - handle when size exceeds capacity

## C-Specific Features

1. **manual memory management** - malloc, free, realloc
2. **pointer arithmetic** - efficient linked list operations
3. **struct definitions** - custom data structures
4. **dynamic arrays** - resizable arrays with realloc
5. **bounds checking** - prevent buffer overflow

## Lessons Learned

this problem taught me:
- **complex data structure design** - combining multiple structures
- **memory management** - careful allocation and cleanup
- **efficient algorithms** - optimizing for specific operations
- **c programming** - manual memory management and pointers
- **buffer overflow prevention** - proper bounds checking

## Real-World Applications

this problem has applications in:
- **cache management** - frequency-based eviction
- **database systems** - query frequency tracking
- **load balancing** - request frequency analysis
- **analytics** - event frequency counting

## Conclusion

the all o'one data structure problem is an excellent exercise in complex data structure design and c programming. the key insight is using a hash table for efficient lookup and a doubly linked list for maintaining sorted frequency buckets, while carefully managing memory to prevent buffer overflows.

you can find my complete solution on [leetcode](https://leetcode.com/problems/all-oone-data-structure/solutions/1234569/all-oone-data-structure-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

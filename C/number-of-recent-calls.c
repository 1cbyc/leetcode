#define INIT_INDEX 0
#define EMPTY_VALUE -9999
#define DURATION 3000

typedef struct queue {
    int front, rear, size;
    bool isFull;
    unsigned capacity;
    int* array;
} Queue;

Queue* createQueue(unsigned capacity) {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->capacity = capacity;
    queue->front = INIT_INDEX;
    queue->rear = INIT_INDEX;
    queue->size = 0;
    queue->array = (int*)malloc(sizeof(int) * queue->capacity);
    return queue;
}

bool isQueueFull(Queue* queue){
    return queue->size == (queue->capacity - 1);
}

bool isQueueEmpty(Queue* queue){
    return queue->size == 0;
}

void enqueue(Queue* queue, int x) {
    int tempRear = (queue->rear + 1) % queue->capacity;

    if (tempRear == queue->front) {
        printf("Queue is full\n");
        return;
    } else {
        queue->rear = tempRear;
        queue->array[queue->rear] = x;
        queue->size++;
    }
}

int dequeue(Queue* queue) {
    if (isQueueEmpty(queue)) {
        printf("Queue is empty\n");
        return EMPTY_VALUE;
    } else {
        queue->front = (queue->front + 1) % queue->capacity;
        int item = queue->array[queue->front];
        queue->size--;
        return item;
    }
}

int front(Queue* queue) {
    if (isQueueEmpty(queue)) {
        return EMPTY_VALUE; // queue is empty
    } else {
        return queue->array[(queue->front + 1) % queue->capacity];
    }
}

int rear(Queue* queue) {
    if (isQueueEmpty(queue)) {
        return EMPTY_VALUE; // queue is empty
    } else {
        return queue->array[queue->rear];
    }
}

void freeQueue(Queue* queue) {
    free(queue->array);
    free(queue);
}



typedef struct {
    Queue* queue;
    int old, new;
} RecentCounter;

RecentCounter* recentCounterCreate() {
    RecentCounter *rc = (RecentCounter*)malloc(sizeof(RecentCounter));
    rc->queue = createQueue(DURATION + 100);
    return rc;
}

int recentCounterPing(RecentCounter* obj, int t) {
    enqueue(obj->queue, t);
    obj->new = rear(obj->queue);
    obj->old = front(obj->queue);
    while(obj->old < (obj->new - DURATION)) {
        dequeue(obj->queue);
        obj->old = front(obj->queue);
    }
    return obj->queue->size;
}

void recentCounterFree(RecentCounter* obj) {
    freeQueue(obj->queue);
    free(obj);
}

// https://leetcode.com/problems/number-of-recent-calls/
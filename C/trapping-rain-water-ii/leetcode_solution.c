#include <stdlib.h>

typedef struct {
    int height;
    int row;
    int col;
} Cell;

typedef struct {
    Cell* data;
    int size;
    int capacity;
} PriorityQueue;

PriorityQueue* createPQ(int capacity) {
    PriorityQueue* pq = (PriorityQueue*)malloc(sizeof(PriorityQueue));
    pq->data = (Cell*)malloc(sizeof(Cell) * capacity);
    pq->size = 0;
    pq->capacity = capacity;
    return pq;
}

void swapCells(Cell* a, Cell* b) {
    Cell temp = *a;
    *a = *b;
    *b = temp;
}

void heapifyUp(PriorityQueue* pq, int index) {
    while (index > 0) {
        int parent = (index - 1) / 2;
        if (pq->data[index].height < pq->data[parent].height) {
            swapCells(&pq->data[index], &pq->data[parent]);
            index = parent;
        } else {
            break;
        }
    }
}

void heapifyDown(PriorityQueue* pq, int index) {
    int size = pq->size;
    while (1) {
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        int smallest = index;

        if (left < size && pq->data[left].height < pq->data[smallest].height) {
            smallest = left;
        }
        if (right < size && pq->data[right].height < pq->data[smallest].height) {
            smallest = right;
        }

        if (smallest != index) {
            swapCells(&pq->data[index], &pq->data[smallest]);
            index = smallest;
        } else {
            break;
        }
    }
}

void pushPQ(PriorityQueue* pq, int height, int row, int col) {
    if (pq->size >= pq->capacity) return;

    pq->data[pq->size] = (Cell){height, row, col};
    heapifyUp(pq, pq->size);
    pq->size++;
}

Cell popPQ(PriorityQueue* pq) {
    if (pq->size == 0) return (Cell){0, -1, -1};

    Cell minCell = pq->data[0];
    pq->size--;
    pq->data[0] = pq->data[pq->size];
    heapifyDown(pq, 0);
    return minCell;
}

int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {
    if (heightMapSize <= 2 || heightMapColSize[0] <= 2) return 0;

    int m = heightMapSize;
    int n = heightMapColSize[0];

    PriorityQueue* pq = createPQ(m * n);
    int** visited = (int**)malloc(sizeof(int*) * m);
    for (int i = 0; i < m; i++) {
        visited[i] = (int*)calloc(n, sizeof(int));
    }

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                pushPQ(pq, heightMap[i][j], i, j);
                visited[i][j] = 1;
            }
        }
    }

    int water = 0;
    int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    while (pq->size > 0) {
        Cell cell = popPQ(pq);
        int h = cell.height;
        int r = cell.row;
        int c = cell.col;

        for (int d = 0; d < 4; d++) {
            int nr = r + dirs[d][0];
            int nc = c + dirs[d][1];

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
                visited[nr][nc] = 1;

                if (heightMap[nr][nc] < h) {
                    water += h - heightMap[nr][nc];
                    pushPQ(pq, h, nr, nc);
                } else {
                    pushPQ(pq, heightMap[nr][nc], nr, nc);
                }
            }
        }
    }

    for (int i = 0; i < m; i++) {
        free(visited[i]);
    }
    free(visited);
    free(pq->data);
    free(pq);

    return water;
}

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

typedef struct {
    int height;
    int row;
    int col;
} Cell;

typedef struct {
    Cell* cells;
    int size;
    int capacity;
} MinHeap;

MinHeap* createHeap(int capacity) {
    MinHeap* heap = (MinHeap*)malloc(sizeof(MinHeap));
    heap->cells = (Cell*)malloc(sizeof(Cell) * capacity);
    heap->size = 0;
    heap->capacity = capacity;
    return heap;
}

void swapCells(Cell* a, Cell* b) {
    Cell temp = *a;
    *a = *b;
    *b = temp;
}

void heapifyUp(MinHeap* heap, int index) {
    while (index > 0) {
        int parent = (index - 1) / 2;
        if (heap->cells[index].height < heap->cells[parent].height) {
            swapCells(&heap->cells[index], &heap->cells[parent]);
            index = parent;
        } else {
            break;
        }
    }
}

void heapifyDown(MinHeap* heap, int index) {
    int size = heap->size;
    while (1) {
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        int smallest = index;

        if (left < size && heap->cells[left].height < heap->cells[smallest].height) {
            smallest = left;
        }
        if (right < size && heap->cells[right].height < heap->cells[smallest].height) {
            smallest = right;
        }

        if (smallest != index) {
            swapCells(&heap->cells[index], &heap->cells[smallest]);
            index = smallest;
        } else {
            break;
        }
    }
}

void push(MinHeap* heap, int height, int row, int col) {
    if (heap->size == heap->capacity) return;

    heap->cells[heap->size].height = height;
    heap->cells[heap->size].row = row;
    heap->cells[heap->size].col = col;
    heapifyUp(heap, heap->size);
    heap->size++;
}

Cell pop(MinHeap* heap) {
    if (heap->size == 0) {
        return (Cell){0, -1, -1};
    }

    Cell minCell = heap->cells[0];
    heap->size--;
    heap->cells[0] = heap->cells[heap->size];
    heapifyDown(heap, 0);
    return minCell;
}

int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {
    if (heightMapSize <= 2 || heightMapColSize[0] <= 2) return 0;

    int rows = heightMapSize;
    int cols = heightMapColSize[0];

    MinHeap* heap = createHeap(rows * cols);
    bool** visited = (bool**)malloc(sizeof(bool*) * rows);
    for (int i = 0; i < rows; i++) {
        visited[i] = (bool*)calloc(cols, sizeof(bool));
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (i == 0 || i == rows - 1 || j == 0 || j == cols - 1) {
                push(heap, heightMap[i][j], i, j);
                visited[i][j] = true;
            }
        }
    }

    int water = 0;
    int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    while (heap->size > 0) {
        Cell curr = pop(heap);
        int currHeight = curr.height;
        int currRow = curr.row;
        int currCol = curr.col;

        for (int d = 0; d < 4; d++) {
            int newRow = currRow + directions[d][0];
            int newCol = currCol + directions[d][1];

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol]) {
                visited[newRow][newCol] = true;

                if (heightMap[newRow][newCol] < currHeight) {
                    water += currHeight - heightMap[newRow][newCol];
                    push(heap, currHeight, newRow, newCol);
                } else {
                    push(heap, heightMap[newRow][newCol], newRow, newCol);
                }
            }
        }
    }

    for (int i = 0; i < rows; i++) {
        free(visited[i]);
    }
    free(visited);
    free(heap->cells);
    free(heap);

    return water;
}

void test_solution() {
    int rows1 = 3;
    int cols1 = 6;
    int** heightMap1 = (int**)malloc(sizeof(int*) * rows1);
    for (int i = 0; i < rows1; i++) {
        heightMap1[i] = (int*)malloc(sizeof(int) * cols1);
    }

    int map1[3][6] = {
        {1, 4, 3, 1, 3, 2},
        {3, 2, 1, 3, 2, 4},
        {2, 3, 3, 2, 3, 1}
    };

    for (int i = 0; i < rows1; i++) {
        for (int j = 0; j < cols1; j++) {
            heightMap1[i][j] = map1[i][j];
        }
    }

    int* colSizes1 = (int*)malloc(sizeof(int) * rows1);
    for (int i = 0; i < rows1; i++) {
        colSizes1[i] = cols1;
    }

    int result1 = trapRainWater(heightMap1, rows1, colSizes1);
    printf("Test 1: %d\n", result1);

    for (int i = 0; i < rows1; i++) {
        free(heightMap1[i]);
    }
    free(heightMap1);
    free(colSizes1);
}

int main(int argc, char *argv[]) {
    test_solution();
    return 0;
}

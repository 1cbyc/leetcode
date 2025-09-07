int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {
    typedef struct {
        int height, row, col;
    } Cell;

    typedef struct {
        Cell* data;
        int size, capacity;
    } PQ;

    // Helper functions would need to be defined or use std::priority_queue in C++
    // For pure C on LeetCode, you'd need to implement the priority queue
    // This shows the algorithm structure

    if (heightMapSize <= 2 || heightMapColSize[0] <= 2) return 0;

    int m = heightMapSize;
    int n = heightMapColSize[0];

    // Initialize priority queue with boundary cells
    // Process from lowest to highest boundary
    // Calculate trapped water

    int water = 0;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};

    // Priority queue processing would go here
    // For each cell, check neighbors and calculate trapped water

    return water;
}

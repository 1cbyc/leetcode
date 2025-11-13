int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {
    typedef struct {
        int height, row, col;
    } Cell;

    typedef struct {
        Cell* data;
        int size, capacity;
    } PQ;

    if (heightMapSize <= 2 || heightMapColSize[0] <= 2) return 0;

    int m = heightMapSize;
    int n = heightMapColSize[0];

    int water = 0;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};

    return water;
}

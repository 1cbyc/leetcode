# trapping rain water ii

## problem
given an m x n integer matrix heightmap representing the height of each unit cell in a 2d elevation map, return the volume of water it can trap after raining.

## approach
this is solved using a priority queue (min-heap) approach that processes cells from the boundary inward:

### 1. boundary initialization
- add all boundary cells to a priority queue with their heights
- mark boundary cells as visited (they cannot trap water)

### 2. priority queue processing
- always process the cell with the smallest height from the boundary
- for each cell, check its four neighboring cells
- if a neighbor is lower than the current boundary height, water can be trapped

### 3. water calculation
- water trapped = current boundary height - neighbor height
- update the effective boundary height for the neighbor cell
- add neighbor to queue for further processing

### 4. data structures
- custom priority queue implementation for cell management
- visited matrix to track processed cells
- cell struct stores height, row, and column information

## time complexity
- o(m*n log(m*n)) due to priority queue operations
- where m and n are the matrix dimensions

## space complexity
- o(m*n) for the priority queue and visited matrix

## test cases covered
- standard 3x6 height map with expected water volume of 4

## leetcode implementation
this is what goes inside the function on leetcode:

```c
int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {
}
```

## example
```c
int heightMap[3][6] = {
    {1, 4, 3, 1, 3, 2},
    {3, 2, 1, 3, 2, 4},
    {2, 3, 3, 2, 3, 1}
};
// returns: 4
// explanation: water can be trapped in various depressions
```

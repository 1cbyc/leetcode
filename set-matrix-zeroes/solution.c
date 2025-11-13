#include <stdio.h>

void setZeroes(int **matrix, int matrixSize, int *matrixColSize) {
    if (matrixSize == 0 || matrixColSize == NULL) {
        return;
    }

    int rows = matrixSize;
    int cols = matrixColSize[0];

    int clear_first_row = 0;
    int clear_first_col = 0;

    for (int c = 0; c < cols; ++c) {
        if (matrix[0][c] == 0) {
            clear_first_row = 1;
            break;
        }
    }

    for (int r = 0; r < rows; ++r) {
        if (matrix[r][0] == 0) {
            clear_first_col = 1;
            break;
        }
    }

    for (int r = 1; r < rows; ++r) {
        for (int c = 1; c < cols; ++c) {
            if (matrix[r][c] == 0) {
                matrix[r][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }

    for (int r = 1; r < rows; ++r) {
        if (matrix[r][0] != 0) {
            continue;
        }
        for (int c = 1; c < cols; ++c) {
            matrix[r][c] = 0;
        }
    }

    for (int c = 1; c < cols; ++c) {
        if (matrix[0][c] != 0) {
            continue;
        }
        for (int r = 1; r < rows; ++r) {
            matrix[r][c] = 0;
        }
    }

    if (clear_first_row) {
        for (int c = 0; c < cols; ++c) {
            matrix[0][c] = 0;
        }
    }

    if (clear_first_col) {
        for (int r = 0; r < rows; ++r) {
            matrix[r][0] = 0;
        }
    }
}


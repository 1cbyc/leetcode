#include <vector>
#include <algorithm>

class Solution {
public:
    int largestMagicSquare(std::vector<std::vector<int>>& grid) {
        int rows = static_cast<int>(grid.size());
        int cols = rows ? static_cast<int>(grid[0].size()) : 0;
        if (rows == 0 || cols == 0) {
            return 0;
        }

        std::vector<std::vector<int>> rowPrefix(rows, std::vector<int>(cols + 1, 0));
        std::vector<std::vector<int>> colPrefix(cols, std::vector<int>(rows + 1, 0));

        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                rowPrefix[r][c + 1] = rowPrefix[r][c] + grid[r][c];
                colPrefix[c][r + 1] = colPrefix[c][r] + grid[r][c];
            }
        }

        int best = 1;

        int maxSide = std::min(rows, cols);
        for (int size = 2; size <= maxSide; ++size) {
            for (int r = 0; r + size <= rows; ++r) {
                for (int c = 0; c + size <= cols; ++c) {
                    if (isMagic(grid, rowPrefix, colPrefix, r, c, size)) {
                        best = size;
                    }
                }
            }
        }

        return best;
    }

private:
    bool isMagic(const std::vector<std::vector<int>>& grid,
                 const std::vector<std::vector<int>>& rowPrefix,
                 const std::vector<std::vector<int>>& colPrefix,
                 int r0,
                 int c0,
                 int size) {
        int target = rowSum(rowPrefix, r0, c0, size);

        for (int r = r0; r < r0 + size; ++r) {
            if (rowSum(rowPrefix, r, c0, size) != target) {
                return false;
            }
        }

        for (int c = c0; c < c0 + size; ++c) {
            if (colSum(colPrefix, c, r0, size) != target) {
                return false;
            }
        }

        int diag1 = 0;
        int diag2 = 0;
        for (int i = 0; i < size; ++i) {
            diag1 += grid[r0 + i][c0 + i];
            diag2 += grid[r0 + i][c0 + size - 1 - i];
        }

        return diag1 == target && diag2 == target;
    }

    int rowSum(const std::vector<std::vector<int>>& prefix, int r, int c0, int size) {
        return prefix[r][c0 + size] - prefix[r][c0];
    }

    int colSum(const std::vector<std::vector<int>>& prefix, int c, int r0, int size) {
        return prefix[c][r0 + size] - prefix[c][r0];
    }
};


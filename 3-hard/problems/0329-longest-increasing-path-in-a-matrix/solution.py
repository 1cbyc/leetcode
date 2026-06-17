from functools import lru_cache
from typing import List


class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0

        rows, cols = len(matrix), len(matrix[0])

        @lru_cache(maxsize=None)
        def dfs(row: int, col: int) -> int:
            best = 1
            for delta_row, delta_col in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                next_row, next_col = row + delta_row, col + delta_col
                if (
                    0 <= next_row < rows
                    and 0 <= next_col < cols
                    and matrix[next_row][next_col] > matrix[row][col]
                ):
                    best = max(best, 1 + dfs(next_row, next_col))
            return best

        return max(dfs(row, col) for row in range(rows) for col in range(cols))


if __name__ == "__main__":
    solution = Solution()

    assert solution.longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]) == 4
    assert solution.longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]]) == 4
    assert solution.longestIncreasingPath([[1]]) == 1

    print("All tests passed!")

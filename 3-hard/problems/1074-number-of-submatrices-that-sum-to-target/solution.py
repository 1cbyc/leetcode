from collections import defaultdict
from typing import List


class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        rows, cols = len(matrix), len(matrix[0])

        for row in matrix:
            for c in range(1, cols):
                row[c] += row[c - 1]

        total = 0
        for c1 in range(cols):
            for c2 in range(c1, cols):
                seen = defaultdict(int)
                seen[0] = 1
                running = 0
                for r in range(rows):
                    strip = matrix[r][c2] - (matrix[r][c1 - 1] if c1 > 0 else 0)
                    running += strip
                    total += seen[running - target]
                    seen[running] += 1

        return total


if __name__ == "__main__":
    solution = Solution()

    assert solution.numSubmatrixSumTarget([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 0) == 4
    assert solution.numSubmatrixSumTarget([[1, -1], [-1, 1]], 0) == 5
    assert solution.numSubmatrixSumTarget([[904]], 0) == 0

    print("All tests passed!")

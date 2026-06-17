import bisect
from typing import List


class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        rows, cols = len(matrix), len(matrix[0])
        best = float("-inf")

        for left in range(cols):
            row_sums = [0] * rows
            for right in range(left, cols):
                for row in range(rows):
                    row_sums[row] += matrix[row][right]

                prefixes = [0]
                running = 0
                for value in row_sums:
                    running += value
                    index = bisect.bisect_left(prefixes, running - k)
                    if index < len(prefixes):
                        best = max(best, running - prefixes[index])
                    bisect.insort(prefixes, running)

        return best


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2) == 2
    assert solution.maxSumSubmatrix([[2, 2, -1]], 3) == 3
    assert solution.maxSumSubmatrix([[2, 2, -1]], 0) == -1

    print("All tests passed!")

import heapq
from typing import List


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        size = len(grid)
        best = [[float("inf")] * size for _ in range(size)]
        best[0][0] = grid[0][0]
        heap: List[tuple[int, int, int]] = [(grid[0][0], 0, 0)]

        while heap:
            time, row, col = heapq.heappop(heap)
            if time != best[row][col]:
                continue
            if row == size - 1 and col == size - 1:
                return time

            for delta_row, delta_col in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                next_row = row + delta_row
                next_col = col + delta_col
                if not (0 <= next_row < size and 0 <= next_col < size):
                    continue

                next_time = max(time, grid[next_row][next_col])
                if next_time < best[next_row][next_col]:
                    best[next_row][next_col] = next_time
                    heapq.heappush(heap, (next_time, next_row, next_col))

        return -1


if __name__ == "__main__":
    solution = Solution()

    assert solution.swimInWater([[0, 2], [1, 3]]) == 3
    assert solution.swimInWater(
        [
            [0, 1, 2, 3, 4],
            [24, 23, 22, 21, 5],
            [12, 13, 14, 15, 16],
            [11, 17, 18, 19, 20],
            [10, 9, 8, 7, 6],
        ]
    ) == 16
    assert solution.swimInWater([[0]]) == 0

    print("All tests passed!")

from typing import List


class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        size = len(grid)
        steps = 2 * size - 1
        dp = [[-1] * size for _ in range(size)]
        dp[0][0] = grid[0][0]

        for step in range(1, steps):
            next_dp = [[-1] * size for _ in range(size)]
            row_start = max(0, step - (size - 1))
            row_end = min(size - 1, step)

            for row1 in range(row_start, row_end + 1):
                col1 = step - row1
                if grid[row1][col1] == -1:
                    continue

                for row2 in range(row_start, row_end + 1):
                    col2 = step - row2
                    if grid[row2][col2] == -1:
                        continue

                    cherries = grid[row1][col1]
                    if row1 != row2:
                        cherries += grid[row2][col2]

                    best = -1
                    for prev_row1 in (row1, row1 - 1):
                        if prev_row1 < 0:
                            continue
                        for prev_row2 in (row2, row2 - 1):
                            if prev_row2 < 0:
                                continue
                            previous = dp[prev_row1][prev_row2]
                            if previous >= 0:
                                best = max(best, previous + cherries)

                    if best >= 0:
                        next_dp[row1][row2] = best

            dp = next_dp

        return max(dp[size - 1][size - 1], 0)


if __name__ == "__main__":
    solution = Solution()

    assert solution.cherryPickup([[0, 1, -1], [1, 0, -1], [1, 1, 1]]) == 5
    assert solution.cherryPickup([[1, 1, -1], [1, -1, 1], [-1, 1, 1]]) == 0
    assert solution.cherryPickup([[1]]) == 1
    assert solution.cherryPickup([[1, 1], [1, 1]]) == 4

    print("All tests passed!")

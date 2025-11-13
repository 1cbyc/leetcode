from typing import List


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        """
        classic grid dp. i take a 1d slice and keep nudging it along the row.
        feels simpler than juggling a full matrix.
        """
        if not grid or not grid[0]:
            return 0

        rows, cols = len(grid), len(grid[0])
        dp = [0] * cols

        # seed the first row in a slightly manual way so it is easier to read
        running = 0
        for c in range(cols):
            running += grid[0][c]
            dp[c] = running

        for r in range(1, rows):
            dp[0] += grid[r][0]
            for c in range(1, cols):
                dp[c] = min(dp[c], dp[c - 1]) + grid[r][c]

        return dp[-1]


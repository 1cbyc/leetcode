from typing import List


class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if not obstacleGrid or not obstacleGrid[0]:
            return 0

        rows, cols = len(obstacleGrid), len(obstacleGrid[0])
        dp = [0] * cols
        dp[0] = 0 if obstacleGrid[0][0] == 1 else 1

        for r in range(rows):
            for c in range(cols):
                if obstacleGrid[r][c] == 1:
                    dp[c] = 0
                    continue

                if c == 0:
                    continue

                dp[c] += dp[c - 1]

        return dp[-1]


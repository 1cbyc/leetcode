class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        m, n = len(dungeon), len(dungeon[0])

        dp = [[float('inf')] * (n + 1) for _ in range(m + 1)]

        dp[m][n - 1] = 1
        dp[m - 1][n] = 1

        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                needed = max(min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j], 1)
                dp[i][j] = needed

        return dp[0][0]

# the question is https://leetcode.com/problems/dungeon-game/
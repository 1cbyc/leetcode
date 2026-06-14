class Solution:
    def numMusicPlaylists(self, n: int, goal: int, k: int) -> int:
        mod = 10**9 + 7
        dp = [[0] * (n + 1) for _ in range(goal + 1)]
        dp[0][0] = 1

        for length in range(1, goal + 1):
            for unique in range(1, n + 1):
                dp[length][unique] = dp[length - 1][unique - 1] * (n - unique + 1)
                if unique > k:
                    dp[length][unique] += dp[length - 1][unique] * (unique - k)
                dp[length][unique] %= mod

        return dp[goal][n]


if __name__ == "__main__":
    solution = Solution()

    assert solution.numMusicPlaylists(3, 3, 1) == 6
    assert solution.numMusicPlaylists(2, 3, 0) == 6
    assert solution.numMusicPlaylists(2, 3, 1) == 2
    assert solution.numMusicPlaylists(1, 1, 0) == 1

    print("All tests passed!")

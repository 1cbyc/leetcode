class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(t)
        dp = [0] * (n + 1)
        dp[0] = 1

        for char in s:
            for j in range(n, 0, -1):
                if char == t[j - 1]:
                    dp[j] += dp[j - 1]

        return dp[n]


if __name__ == "__main__":
    solution = Solution()

    assert solution.numDistinct("rabbbit", "rabbit") == 3
    assert solution.numDistinct("babgbag", "bag") == 5
    assert solution.numDistinct("abc", "") == 1

    print("All tests passed!")

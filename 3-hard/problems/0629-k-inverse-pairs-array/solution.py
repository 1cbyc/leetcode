class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        dp = [0] * (k + 1)
        dp[0] = 1

        for i in range(1, n + 1):
            prefix = [0] * (k + 2)
            for j in range(k + 1):
                prefix[j + 1] = (prefix[j] + dp[j]) % mod

            new_dp = [0] * (k + 1)
            for j in range(k + 1):
                lower = max(0, j - (i - 1))
                new_dp[j] = (prefix[j + 1] - prefix[lower]) % mod
            dp = new_dp

        return dp[k] % mod


if __name__ == "__main__":
    solution = Solution()

    assert solution.kInversePairs(3, 0) == 1
    assert solution.kInversePairs(3, 1) == 2
    assert solution.kInversePairs(1000, 1000) == 663677020

    print("All tests passed!")

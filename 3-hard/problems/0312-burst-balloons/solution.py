from typing import List


class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        balloons = [1] + nums + [1]
        n = len(balloons)
        dp = [[0] * n for _ in range(n)]

        for length in range(2, n):
            for left in range(0, n - length):
                right = left + length
                for last in range(left + 1, right):
                    dp[left][right] = max(
                        dp[left][right],
                        dp[left][last]
                        + balloons[left] * balloons[last] * balloons[right]
                        + dp[last][right],
                    )

        return dp[0][n - 1]


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxCoins([3, 1, 5, 8]) == 167
    assert solution.maxCoins([1, 5]) == 10
    assert solution.maxCoins([7]) == 7

    print("All tests passed!")

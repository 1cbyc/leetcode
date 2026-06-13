from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for value in range(1, amount + 1):
            for coin in coins:
                if coin <= value:
                    dp[value] = min(dp[value], dp[value - coin] + 1)

        return dp[amount] if dp[amount] <= amount else -1


def test_solution():
    solution = Solution()

    cases = [
        ([1, 2, 5], 11, 3),
        ([2], 3, -1),
        ([1], 0, 0),
        ([1, 3, 4], 6, 2),
    ]

    for coins, amount, expected in cases:
        assert solution.coinChange(coins, amount) == expected

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()

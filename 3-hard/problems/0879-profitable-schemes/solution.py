from typing import List


class Solution:
    def profitableSchemes(
        self, n: int, minProfit: int, group: List[int], profit: List[int]
    ) -> int:
        mod = 10**9 + 7
        dp = [[0] * (minProfit + 1) for _ in range(n + 1)]
        for used in range(n + 1):
            dp[used][0] = 1

        for gain, members in zip(profit, group):
            for used in range(n, members - 1, -1):
                for earned in range(minProfit, -1, -1):
                    previous = max(0, earned - gain)
                    dp[used][earned] = (dp[used][earned] + dp[used - members][previous]) % mod

        return dp[n][minProfit] % mod


if __name__ == "__main__":
    solution = Solution()

    assert solution.profitableSchemes(5, 3, [2, 2], [2, 3]) == 2
    assert solution.profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]) == 7
    assert solution.profitableSchemes(1, 1, [1], [1]) == 1

    print("All tests passed!")

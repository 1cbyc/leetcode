from typing import List


class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        if not prices or k == 0:
            return 0

        n = len(prices)
        if k >= n // 2:
            return sum(
                max(prices[i + 1] - prices[i], 0) for i in range(n - 1)
            )

        buy = [float("-inf")] * (k + 1)
        sell = [0] * (k + 1)

        for price in prices:
            for transaction in range(1, k + 1):
                buy[transaction] = max(buy[transaction], sell[transaction - 1] - price)
                sell[transaction] = max(sell[transaction], buy[transaction] + price)

        return sell[k]


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxProfit(2, [2, 4, 1]) == 2
    assert solution.maxProfit(2, [3, 2, 6, 5, 0, 3]) == 7
    assert solution.maxProfit(0, [1, 3]) == 0
    assert solution.maxProfit(2, []) == 0

    print("All tests passed!")

from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        first_buy = float("-inf")
        first_sell = 0
        second_buy = float("-inf")
        second_sell = 0

        for price in prices:
            first_buy = max(first_buy, -price)
            first_sell = max(first_sell, first_buy + price)
            second_buy = max(second_buy, first_sell - price)
            second_sell = max(second_sell, second_buy + price)

        return second_sell


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxProfit([3, 3, 5, 0, 0, 3, 1, 4]) == 6
    assert solution.maxProfit([1, 2, 3, 4, 5]) == 4
    assert solution.maxProfit([7, 6, 4, 3, 1]) == 0

    print("All tests passed!")

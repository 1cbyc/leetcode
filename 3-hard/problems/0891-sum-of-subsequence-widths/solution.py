from typing import List


class Solution:
    def sumSubseqWidths(self, nums: List[int]) -> int:
        mod = 10**9 + 7
        nums.sort()
        n = len(nums)

        powers = [1] * n
        for i in range(1, n):
            powers[i] = powers[i - 1] * 2 % mod

        total = 0
        for i, value in enumerate(nums):
            total = (total + (powers[i] - powers[n - 1 - i]) * value) % mod

        return total % mod


if __name__ == "__main__":
    solution = Solution()

    assert solution.sumSubseqWidths([2, 1, 3]) == 6
    assert solution.sumSubseqWidths([1]) == 0
    assert solution.sumSubseqWidths([5, 69, 89, 92, 31, 16, 25, 45, 63, 40, 16, 56]) == 292003

    print("All tests passed!")

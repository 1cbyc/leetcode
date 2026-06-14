from functools import reduce
from operator import xor
from typing import List


class Solution:
    def xorGame(self, nums: List[int]) -> bool:
        return len(nums) % 2 == 0 or reduce(xor, nums, 0) == 0


if __name__ == "__main__":
    solution = Solution()

    assert solution.xorGame([1, 1, 2]) is False
    assert solution.xorGame([0, 1]) is True
    assert solution.xorGame([1, 2, 3]) is True
    assert solution.xorGame([5]) is False
    assert solution.xorGame([0, 0]) is True

    print("All tests passed!")

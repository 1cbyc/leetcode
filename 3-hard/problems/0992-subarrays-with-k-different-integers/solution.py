from collections import defaultdict
from typing import List


class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        return self._at_most(nums, k) - self._at_most(nums, k - 1)

    def _at_most(self, nums: List[int], k: int) -> int:
        if k < 0:
            return 0
        counts = defaultdict(int)
        left = 0
        distinct = 0
        total = 0

        for right, value in enumerate(nums):
            if counts[value] == 0:
                distinct += 1
            counts[value] += 1

            while distinct > k:
                counts[nums[left]] -= 1
                if counts[nums[left]] == 0:
                    distinct -= 1
                left += 1

            total += right - left + 1

        return total


if __name__ == "__main__":
    solution = Solution()

    assert solution.subarraysWithKDistinct([1, 2, 1, 2, 3], 2) == 7
    assert solution.subarraysWithKDistinct([1, 2, 1, 3, 4], 3) == 3
    assert solution.subarraysWithKDistinct([1, 1, 1, 1], 1) == 10

    print("All tests passed!")

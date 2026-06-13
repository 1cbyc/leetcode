from collections import defaultdict
from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_counts = defaultdict(int)
        prefix_counts[0] = 1

        total = 0
        count = 0

        for num in nums:
            total += num
            count += prefix_counts[total - k]
            prefix_counts[total] += 1

        return count


def test_solution():
    solution = Solution()

    cases = [
        ([1, 1, 1], 2, 2),
        ([1, 2, 3], 3, 2),
        ([1], 1, 1),
        ([1, -1, 0], 0, 3),
        ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4),
    ]

    for nums, k, expected in cases:
        assert solution.subarraySum(nums, k) == expected

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()

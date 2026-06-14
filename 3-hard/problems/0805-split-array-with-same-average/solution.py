from typing import List


class Solution:
    def splitArraySameAverage(self, nums: List[int]) -> bool:
        length = len(nums)
        if length == 1:
            return False

        total = sum(nums)
        for index, value in enumerate(nums):
            nums[index] = value * length - total

        half = length // 2
        left_sums = set()

        for mask in range(1, 1 << half):
            subset_sum = sum(
                nums[index] for index in range(half) if (mask >> index) & 1
            )
            if subset_sum == 0:
                return True
            left_sums.add(subset_sum)

        right_count = length - half
        full_right_mask = (1 << right_count) - 1

        for mask in range(1, 1 << right_count):
            subset_sum = sum(
                nums[half + index]
                for index in range(right_count)
                if (mask >> index) & 1
            )
            if subset_sum == 0:
                return True
            if mask != full_right_mask and -subset_sum in left_sums:
                return True

        return False


if __name__ == "__main__":
    solution = Solution()

    assert solution.splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8]) is True
    assert solution.splitArraySameAverage([3, 1]) is False
    assert solution.splitArraySameAverage([0, 0]) is True
    assert solution.splitArraySameAverage([1, 2, 3]) is True
    assert solution.splitArraySameAverage([4, 4, 4, 5]) is False

    print("All tests passed!")

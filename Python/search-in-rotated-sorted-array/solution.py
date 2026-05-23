from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid

            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1


def test_solution():
    solution = Solution()

    cases = [
        ([4, 5, 6, 7, 0, 1, 2], 0, 4),
        ([4, 5, 6, 7, 0, 1, 2], 3, -1),
        ([1], 0, -1),
        ([1], 1, 0),
        ([3, 1], 1, 1),
        ([5, 1, 3], 5, 0),
        ([6, 7, 1, 2, 3, 4, 5], 4, 5),
        ([1, 2, 3, 4, 5], 4, 3),
    ]

    for nums, target, expected in cases:
        assert solution.search(nums, target) == expected

    for n in range(1, 50):
        sorted_nums = list(range(-20, -20 + n))
        for pivot in range(n):
            nums = sorted_nums[pivot:] + sorted_nums[:pivot]
            for target in range(-22, -20 + n + 2):
                expected = nums.index(target) if target in nums else -1
                assert solution.search(nums, target) == expected

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()

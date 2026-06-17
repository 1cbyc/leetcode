from typing import List


class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        patches = 0
        reachable = 0
        index = 0

        while reachable < n:
            if index < len(nums) and nums[index] <= reachable + 1:
                reachable += nums[index]
                index += 1
            else:
                reachable += reachable + 1
                patches += 1

        return patches


if __name__ == "__main__":
    solution = Solution()

    assert solution.minPatches([1, 3], 6) == 1
    assert solution.minPatches([1, 5, 10], 20) == 2
    assert solution.minPatches([1, 2, 2], 5) == 0
    assert solution.minPatches([], 7) == 3

    print("All tests passed!")

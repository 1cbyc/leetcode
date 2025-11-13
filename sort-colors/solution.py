from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        dutch flag shuffle.
        keeping it in place and bare bones.
        """
        left = 0
        current = 0
        right = len(nums) - 1

        while current <= right:
            color = nums[current]

            if color == 0:
                nums[left], nums[current] = nums[current], nums[left]
                left += 1
                current += 1
                continue

            if color == 2:
                nums[right], nums[current] = nums[current], nums[right]
                right -= 1
                continue

            current += 1


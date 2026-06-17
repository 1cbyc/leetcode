from typing import List


class Solution:
    def minSwap(self, nums1: List[int], nums2: List[int]) -> int:
        keep, swap = 0, 1

        for i in range(1, len(nums1)):
            new_keep = new_swap = len(nums1)

            if nums1[i] > nums1[i - 1] and nums2[i] > nums2[i - 1]:
                new_keep = min(new_keep, keep)
                new_swap = min(new_swap, swap + 1)

            if nums1[i] > nums2[i - 1] and nums2[i] > nums1[i - 1]:
                new_keep = min(new_keep, swap)
                new_swap = min(new_swap, keep + 1)

            keep, swap = new_keep, new_swap

        return min(keep, swap)


if __name__ == "__main__":
    solution = Solution()

    assert solution.minSwap([1, 3, 5, 4], [1, 2, 3, 7]) == 1
    assert solution.minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9]) == 1
    assert solution.minSwap([1, 2], [1, 2]) == 0

    print("All tests passed!")

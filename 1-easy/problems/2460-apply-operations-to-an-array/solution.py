from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def applyOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i], nums[i+1] = 2*nums[i], 0
        i = 0
        for x in nums:
            if not x:
                continue
            nums[i] = x
            i += 1
        for i in range(i, len(nums)):
            nums[i] = 0
        return nums

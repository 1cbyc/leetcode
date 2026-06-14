from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def canBeIncreasing(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        deleted = False
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                continue
            if deleted:
                return False
            deleted = True
            if i >= 2 and nums[i-2] > nums[i]:  # delete nums[i] or nums[i-1]
                nums[i] = nums[i-1]
        return True

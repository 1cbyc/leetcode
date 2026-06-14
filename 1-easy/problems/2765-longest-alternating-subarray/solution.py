from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def alternatingSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = l = -1
        for i in range(len(nums)-1):
            if l != -1 and nums[i-1] == nums[i+1]:
                l += 1
            else:
                l = 2 if nums[i+1]-nums[i] == 1 else -1
            result = max(result, l)
        return result

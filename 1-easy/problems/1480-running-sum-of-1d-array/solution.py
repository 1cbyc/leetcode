from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        for i in range(len(nums)-1):
            nums[i+1] += nums[i]
        return nums

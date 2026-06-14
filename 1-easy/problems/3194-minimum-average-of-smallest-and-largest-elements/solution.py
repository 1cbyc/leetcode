from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumAverage(self, nums):
        """
        :type nums: List[int]
        :rtype: float
        """
        nums.sort()
        return min((nums[i]+nums[~i])/2.0 for i in range(len(nums)//2))

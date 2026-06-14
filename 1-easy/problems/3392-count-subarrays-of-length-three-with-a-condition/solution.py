from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countSubarrays(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum((nums[i-1]+nums[i+1])*2 == nums[i] for i in range(1, len(nums)-1))

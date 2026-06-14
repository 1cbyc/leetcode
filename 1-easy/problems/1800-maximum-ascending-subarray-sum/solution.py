from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxAscendingSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = curr = 0
        for i in range(len(nums)): 
            if not (i and nums[i-1] < nums[i]):
                curr = 0
            curr += nums[i]
            result = max(result, curr)
        return result

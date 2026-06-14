from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxAdjacentDistance(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return max(abs(nums[i]-nums[i-1]) for i in range(len(nums)))

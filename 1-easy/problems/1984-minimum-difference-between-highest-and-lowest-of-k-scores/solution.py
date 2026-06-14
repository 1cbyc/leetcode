from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumDifference(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        nums.sort()
        return min(nums[i]-nums[i-k+1] for i in range(k-1, len(nums)))

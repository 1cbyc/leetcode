from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maximumCount(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return max(bisect.bisect_left(nums, 0)-0, len(nums)-bisect.bisect_left(nums, 1))

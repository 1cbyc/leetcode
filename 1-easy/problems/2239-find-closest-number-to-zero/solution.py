from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findClosestNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return max(nums, key=lambda x:(-abs(x), x))

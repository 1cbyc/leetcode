from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minMoves(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return max(nums)*len(nums)-sum(nums)

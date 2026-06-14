from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def alternatingSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum(nums[i] for i in range(0, len(nums), 2))-sum(nums[i] for i in range(1, len(nums), 2))

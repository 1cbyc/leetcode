from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return 0 if all(x == nums[0] for x in nums) else 1

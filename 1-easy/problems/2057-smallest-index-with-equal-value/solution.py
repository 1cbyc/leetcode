from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def smallestEqual(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return next((i for i, x in enumerate(nums) if i%10 == x), -1)

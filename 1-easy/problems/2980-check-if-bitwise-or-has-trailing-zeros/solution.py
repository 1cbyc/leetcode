from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def hasTrailingZeros(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return sum(x%2 == 0 for x in nums) >= 2

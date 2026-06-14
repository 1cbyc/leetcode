from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findFinalValue(self, nums, original):
        """
        :type nums: List[int]
        :type original: int
        :rtype: int
        """
        lookup = set(nums)
        while original in lookup:
            original *= 2
        return original

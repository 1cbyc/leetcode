from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def targetIndices(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        less = sum(x < target for x in nums)
        return range(less, less+sum(x == target for x in nums))

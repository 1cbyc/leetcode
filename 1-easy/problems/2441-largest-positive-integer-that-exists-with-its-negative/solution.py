from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findMaxK(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        lookup = set(nums)
        return max([x for x in lookup if x > 0 and -x in lookup] or [-1])

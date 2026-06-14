from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def numIdenticalPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum(c*(c-1)//2 for c in collections.Counter(nums).itervalues())

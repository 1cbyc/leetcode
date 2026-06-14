from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def sumOfUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum(x for x, c in collections.Counter(nums).iteritems() if c == 1)

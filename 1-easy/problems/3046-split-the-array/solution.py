from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def isPossibleToSplit(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return all(v <= 2 for v in collections.Counter(nums).itervalues())

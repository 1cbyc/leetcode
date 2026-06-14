from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return len({x for x in nums if x})

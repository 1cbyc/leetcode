from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def evenNumberBitwiseORs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return reduce(lambda total, x: total|(x if x%2 == 0 else 0), nums, 0)

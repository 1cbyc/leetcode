from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minStartValue(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        min_prefix, prefix = 0, 0
        for num in nums:
            prefix += num
            min_prefix = min(min_prefix, prefix)
        return 1-min_prefix

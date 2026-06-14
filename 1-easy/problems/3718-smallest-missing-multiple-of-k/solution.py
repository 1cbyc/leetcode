from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def missingMultiple(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        lookup = set(nums)
        for i in range(1, len(lookup)+1):
            if i*k not in lookup:
                return i*k
        return (len(lookup)+1)*k

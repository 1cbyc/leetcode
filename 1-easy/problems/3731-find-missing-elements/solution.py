from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findMissingElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        lookup = set(nums)
        return [x for x in range(min(nums)+1, max(nums)) if x not in lookup]

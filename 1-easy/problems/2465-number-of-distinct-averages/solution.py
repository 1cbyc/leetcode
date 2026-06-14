from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def distinctAverages(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        lookup = set()
        nums.sort()
        left, right = 0, len(nums)-1
        while left < right:
            lookup.add(nums[left]+nums[right])
            left, right = left+1, right-1
        return len(lookup)

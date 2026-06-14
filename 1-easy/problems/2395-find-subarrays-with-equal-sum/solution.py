from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findSubarrays(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        lookup = set()
        for i in range(len(nums)-1):
            if nums[i]+nums[i+1] in lookup:
                return True
            lookup.add(nums[i]+nums[i+1])
        return False

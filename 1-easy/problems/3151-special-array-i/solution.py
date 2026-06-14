from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def isArraySpecial(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return all(nums[i]&1 != nums[i+1]&1 for i in range(len(nums)-1))

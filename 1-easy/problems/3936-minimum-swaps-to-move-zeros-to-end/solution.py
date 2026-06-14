from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumSwaps(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum(nums[i] != 0 for i in range(len(nums)-nums.count(0), len(nums)))

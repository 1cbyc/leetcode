from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def sumOfGoodNumbers(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        return sum(nums[i] for i in range(len(nums)) if (i-k < 0 or nums[i-k] < nums[i]) and (i+k >= len(nums) or nums[i+k] < nums[i]))

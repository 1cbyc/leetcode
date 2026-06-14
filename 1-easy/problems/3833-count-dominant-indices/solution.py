from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def dominantIndices(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = total = 0
        for i in range(len(nums)):
            if i*nums[~i] > total:
                result += 1
            total += nums[~i]
        return result

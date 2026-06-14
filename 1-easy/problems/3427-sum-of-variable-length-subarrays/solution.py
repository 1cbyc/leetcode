from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def subarraySum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        diff = [0]*(len(nums)+1)
        for i, x in enumerate(nums):
            diff[max(i-x, 0)] += 1
            diff[i+1] -= 1
        for i in range(len(nums)):
            diff[i+1] += diff[i]
        return sum(nums[i]*diff[i] for i in range(len(nums)))

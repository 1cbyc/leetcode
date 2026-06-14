from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countPartitions(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = left = 0
        right = sum(nums)
        for i in range(len(nums)-1):
            left += nums[i]
            right -= nums[i]
            if left%2 == right%2:
                result += 1
        return result

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def numberOfPoints(self, nums):
        """
        :type nums: List[List[int]]
        :rtype: int
        """
        nums.sort()
        result = 0
        curr = nums[0]
        for i in range(1, len(nums)):
            if nums[i][0] <= curr[1]:
                curr[1] = max(curr[1], nums[i][1])
            else:
                result += curr[1]-curr[0]+1
                curr = nums[i]
        result += curr[1]-curr[0]+1
        return result

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maximizeExpressionOfThree(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = max(range(len(nums)), key=lambda x: nums[x])
        nums[i], nums[-1] = nums[-1], nums[i]
        j = max(range(len(nums)-1), key=lambda x: nums[x])
        nums[j], nums[-2] = nums[-2], nums[j]
        k = min(range(len(nums)-2), key=lambda x: nums[x])
        nums[k], nums[0] = nums[0], nums[k]
        return nums[-1]+nums[-2]-nums[0]

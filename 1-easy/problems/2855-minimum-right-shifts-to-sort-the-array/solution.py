from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumRightShifts(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = next((i for i in range(len(nums)) if not nums[i] < nums[(i+1)%len(nums)]), len(nums))
        j = next((j for j in range(i+1, len(nums)) if not nums[j%len(nums)] < nums[(j+1)%len(nums)]), len(nums))
        return len(nums)-(i+1) if j == len(nums) else -1

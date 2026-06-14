from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def resultArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        a, b = [nums[0]], [nums[1]]
        for i in range(2, len(nums)):
            if a[-1] > b[-1]:
                a.append(nums[i])
            else:
                b.append(nums[i])
        return a+b

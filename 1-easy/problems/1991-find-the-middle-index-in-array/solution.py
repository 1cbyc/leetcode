from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findMiddleIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total = sum(nums)
        accu = 0
        for i, x in enumerate(nums):
            if accu*2 == total-x:
                return i
            accu += x
        return -1

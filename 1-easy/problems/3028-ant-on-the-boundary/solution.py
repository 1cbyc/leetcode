from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def returnToBoundaryCount(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = curr = 0
        for x in nums:
            curr += x
            if curr == 0:
                result += 1
        return result

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = prev = 0
        for curr in nums:
            if prev < curr:
                prev = curr
                continue
            prev += 1
            result += prev-curr                
        return result

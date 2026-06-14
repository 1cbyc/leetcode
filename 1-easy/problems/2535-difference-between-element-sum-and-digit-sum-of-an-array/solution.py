from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def differenceOfSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def total(x):
            result = 0
            while x:
                result += x%10
                x //= 10
            return result

        return abs(sum(nums)-sum(total(x) for x in nums))

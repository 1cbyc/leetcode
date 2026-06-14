from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxDivScore(self, nums, divisors):
        """
        :type nums: List[int]
        :type divisors: List[int]
        :rtype: int
        """
        return max(divisors, key=lambda d: (sum(x%d == 0 for x in nums), -d))

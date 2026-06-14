from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findGCD(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return fractions.gcd(min(nums), max(nums))

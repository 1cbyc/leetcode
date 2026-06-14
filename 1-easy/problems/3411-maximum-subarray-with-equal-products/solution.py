from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = 2
        lookup = collections.defaultdict(int)
        left = 0
        for right, x in enumerate(nums):
            for p in PRIME_DIVISORS[x]:
                left = max(left, lookup[p])
                lookup[p] = right+1
            result = max(result, right-left+1)
        return result

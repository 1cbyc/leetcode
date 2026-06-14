from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        return sum(nums)%k

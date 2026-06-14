from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        mn = min(nums)
        return len(set(nums))-int(mn == k) if mn >= k else -1

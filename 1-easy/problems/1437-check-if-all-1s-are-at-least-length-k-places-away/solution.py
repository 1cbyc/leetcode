from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def kLengthApart(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        prev = -k-1
        for i in range(len(nums)):
            if not nums[i]:
                continue
            if i-prev <= k:
                return False
            prev = i
        return True

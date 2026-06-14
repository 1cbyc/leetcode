from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        lookup = [False]*k
        for i in reversed(range(len(nums))):
            if nums[i] > len(lookup) or lookup[nums[i]-1]:
                continue
            lookup[nums[i]-1] = True
            k -= 1
            if not k:
                break
        return len(nums)-i

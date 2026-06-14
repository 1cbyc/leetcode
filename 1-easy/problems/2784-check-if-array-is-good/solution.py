from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def isGood(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        cnt = [0]*len(nums)
        for x in nums:
            if x < len(cnt):
                cnt[x] += 1
            else:
                return False
        return all(cnt[x] == 1 for x in range(1, len(nums)-1))

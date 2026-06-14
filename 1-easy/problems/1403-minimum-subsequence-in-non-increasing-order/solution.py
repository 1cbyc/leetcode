from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minSubsequence(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result, total, curr = [], sum(nums), 0
        nums.sort(reverse=True)
        for i, x in enumerate(nums):
            curr += x
            if curr > total-curr:
                break
        return nums[:i+1]

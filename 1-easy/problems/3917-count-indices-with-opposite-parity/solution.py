from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countOppositeParity(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = [0]*len(nums)
        cnt = [0]*2
        for i in reversed(range(len(nums))):
            result[i] = cnt[1^(nums[i]%2)]
            cnt[nums[i]%2] += 1
        return result

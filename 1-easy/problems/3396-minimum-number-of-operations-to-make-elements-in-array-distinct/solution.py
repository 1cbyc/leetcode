from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def ceil_divide(a, b):
            return (a+b-1)//b

        mx = max(nums)
        cnt = [0]*mx
        for i in reversed(range(len(nums))):
            cnt[nums[i]-1] += 1
            if cnt[nums[i]-1] == 2:
                return ceil_divide(i+1, 3)
        return 0

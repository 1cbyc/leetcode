from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def concatWithReverse(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums.extend(reversed(nums))
        return nums

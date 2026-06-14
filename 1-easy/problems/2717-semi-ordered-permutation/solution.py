from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def semiOrderedPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i, j = nums.index(1), nums.index(len(nums))
        return i+((len(nums)-1)-j)-int(i > j)

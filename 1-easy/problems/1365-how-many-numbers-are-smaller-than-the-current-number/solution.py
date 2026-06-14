from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def smallerNumbersThanCurrent(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        count = collections.Counter(nums)
        for i in range(max(nums)+1):
            count[i] += count[i-1]
        return [count[i-1] for i in nums]


import bisect


class Solution2(object):
    def smallerNumbersThanCurrent(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        sorted_nums = sorted(nums)
        return [bisect.bisect_left(sorted_nums, i) for i in nums]

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        for i in range(len(nums)):
            prev, curr = i, nums[i]
            while curr >= 0 and curr != i:
                nums[prev], nums[curr] = ~nums[curr], ~nums[prev] if prev == i else nums[prev]
                prev, curr = curr, ~nums[prev]
        for i in range(len(nums)):
            if nums[i] < 0:
                nums[i] = ~nums[i]
        return nums


class Solution2(object):
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        return [nums[x] for x in nums]

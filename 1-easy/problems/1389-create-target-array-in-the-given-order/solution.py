from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def createTargetArray(self, nums, index):
        """
        :type nums: List[int]
        :type index: List[int]
        :rtype: List[int]
        """
        for i in range(len(nums)):
            for j in range(i):
                if index[j] >= index[i]:
                    index[j] += 1
        result = [0]*(len(nums))
        for i in range(len(nums)):
            result[index[i]] = nums[i]
        return result


import itertools


class Solution2(object):
    def createTargetArray(self, nums, index):
        """
        :type nums: List[int]
        :type index: List[int]
        :rtype: List[int]
        """
        result = []
        for i, x in itertools.izip(index, nums):
            result.insert(i, x)
        return result

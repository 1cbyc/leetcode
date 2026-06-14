from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findValidElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        right = [True]*len(nums)
        mx = 0
        for i in reversed(range(len(nums))):
            right[i] = mx < nums[i]
            mx = max(mx, nums[i])
        result = []
        mx = 0
        for i in range(len(nums)):
            left = mx < nums[i]
            mx = max(mx, nums[i])
            if left or right[i]:
                result.append(nums[i])
        return result


# prefix sum
class Solution2(object):
    def findValidElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        left = [True]*len(nums)
        mx = 0
        for i in range(len(nums)):
            left[i] = mx < nums[i]
            mx = max(mx, nums[i])
        right = [True]*len(nums)
        mx = 0
        for i in reversed(range(len(nums))):
            right[i] = mx < nums[i]
            mx = max(mx, nums[i])
        return [nums[i] for i in range(len(nums)) if left[i] or right[i]]

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countQuadruplets(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = 0
        lookup = collections.defaultdict(int)
        lookup[nums[-1]] = 1
        for c in reversed(range(2, len(nums)-1)):
            for b in range(1, c):
                for a in range(b):
                    if nums[a]+nums[b]+nums[c] in lookup:
                        result += lookup[nums[a]+nums[b]+nums[c]]
            lookup[nums[c]] += 1
        return result

    
import collections


class Solution2(object):
    def countQuadruplets(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        lookup = collections.defaultdict(list)
        for d in range(3, len(nums)):
            for c in range(2, d):
                lookup[nums[d]-nums[c]].append(c)
        return sum(sum(b < c for c in lookup[nums[a]+nums[b]]) for b in range(1, len(nums)-2) for a in range(b))

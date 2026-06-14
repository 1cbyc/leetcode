from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def numberOfPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        cnt = [0]*(max(nums)+1)
        pair_cnt = 0
        for x in nums:
            cnt[x] ^= 1
            if not cnt[x]:
                pair_cnt += 1
        return [pair_cnt, len(nums)-2*pair_cnt]


import collections


# freq table
class Solution2(object):
    def numberOfPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        cnt = collections.Counter(nums)
        pair_cnt = sum(x//2 for x in cnt.itervalues())
        return [pair_cnt, len(nums)-2*pair_cnt]

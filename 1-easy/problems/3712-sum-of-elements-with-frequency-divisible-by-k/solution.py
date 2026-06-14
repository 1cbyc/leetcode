from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def sumDivisibleByK(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        mx = max(nums)
        cnt = [0]*(mx+1)
        for x in nums:
            cnt[x] += 1
        return sum(x for x in nums if cnt[x]%k == 0)


import collections


# freq table
class Solution2(object):
    def sumDivisibleByK(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        cnt = collections.defaultdict(int)
        for x in nums:
            cnt[x] += 1
        return sum(x for x in nums if cnt[x]%k == 0)

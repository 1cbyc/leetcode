from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def checkPrimeFrequency(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        cnt = collections.defaultdict(int)
        for x in nums:
            cnt[x] += 1
        return any(SPF[v] == v for v in cnt.itervalues())

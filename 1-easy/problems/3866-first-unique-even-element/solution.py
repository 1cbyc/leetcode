from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def firstUniqueEven(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        cnt = collections.defaultdict(int)
        for x in nums:
            cnt[x] += 1
        for x in nums:
            if x%2 == 0 and cnt[x] == 1:
                return x
        return -1

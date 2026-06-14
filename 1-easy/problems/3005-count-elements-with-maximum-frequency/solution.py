from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxFrequencyElements(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        cnt = collections.Counter(nums)
        mx = max(cnt.itervalues())
        return sum(v for v in cnt.itervalues() if v == mx)

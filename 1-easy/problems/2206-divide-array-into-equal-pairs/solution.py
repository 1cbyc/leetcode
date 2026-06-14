from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def divideArray(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return all(cnt%2 == 0 for cnt in collections.Counter(nums).itervalues())

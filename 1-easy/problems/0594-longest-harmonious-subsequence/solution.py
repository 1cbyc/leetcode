from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findLHS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        lookup = collections.defaultdict(int)
        result = 0
        for num in nums:
            lookup[num] += 1
            for diff in [-1, 1]:
                if (num + diff) in lookup:
                    result = max(result, lookup[num] + lookup[num + diff])
        return result

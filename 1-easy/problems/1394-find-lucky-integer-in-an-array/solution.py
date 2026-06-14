from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findLucky(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        count = collections.Counter(arr)
        result = -1
        for k, v in count.iteritems():
            if k == v:
                result = max(result, k)
        return result

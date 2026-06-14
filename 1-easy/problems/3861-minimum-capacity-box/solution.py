from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumIndex(self, capacity, itemSize):
        """
        :type capacity: List[int]
        :type itemSize: int
        :rtype: int
        """
        result = (float("inf"), -1)
        for i, x in enumerate(capacity):
            if x >= itemSize:
                result = min(result, (x, i))
        return result[1]

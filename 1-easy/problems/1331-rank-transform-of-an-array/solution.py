from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def arrayRankTransform(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
        return map({x: i+1 for i, x in enumerate(sorted(set(arr)))}.get, arr)

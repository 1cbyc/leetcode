from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def areaOfMaxDiagonal(self, dimensions):
        """
        :type dimensions: List[List[int]]
        :rtype: int
        """
        return max((l**2+w**2, l*w) for l, w in dimensions)[1]

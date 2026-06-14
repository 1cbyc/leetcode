from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def heightChecker(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        return sum(i != j for i, j in itertools.izip(heights, sorted(heights)))

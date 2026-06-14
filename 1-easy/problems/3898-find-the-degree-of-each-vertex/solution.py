from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findDegrees(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        return [sum(row) for row in matrix]

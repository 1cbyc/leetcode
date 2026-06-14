from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def rowAndMaximumOnes(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: List[int]
        """
        return max(([i, mat[i].count(1)] for i in range(len(mat))), key=lambda x: x[1])

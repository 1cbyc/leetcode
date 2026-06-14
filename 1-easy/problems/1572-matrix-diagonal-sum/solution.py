from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def diagonalSum(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: int
        """
        return sum(mat[i][i]+mat[~i][i] for i in range(len(mat))) - (mat[len(mat)//2][len(mat)//2] if len(mat)%2 == 1 else 0)

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def modifiedMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
        for j in range(len(matrix[0])):
            mx = max(matrix[i][j] for i in range(len(matrix)))
            for i in range(len(matrix)):
                if matrix[i][j] == -1:
                    matrix[i][j] = mx
        return matrix

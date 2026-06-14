from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def zigzagTraversal(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[int]
        """
        result = []
        for i in range(len(grid)):
            if i%2 == 0:
                result.extend(grid[i][j] for j in range(0, len(grid[0]), 2))
            else:
                result.extend(grid[i][j] for j in reversed(range(1, len(grid[0]), 2)))
        return result

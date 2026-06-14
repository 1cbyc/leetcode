from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def deleteGreatestValue(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        for row in grid:
            row.sort()
        return sum(max(grid[i][j] for i in range(len(grid))) for j in range(len(grid[0])))

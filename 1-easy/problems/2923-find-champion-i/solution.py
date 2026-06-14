from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findChampion(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        return next(u for u in range(len(grid)) if sum(grid[u]) == len(grid)-1)

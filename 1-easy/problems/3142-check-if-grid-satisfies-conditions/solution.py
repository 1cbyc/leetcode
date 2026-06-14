from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def satisfiesConditions(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: bool
        """
        return (all(grid[i][j] == grid[i+1][j] for j in range(len(grid[0])) for i in range(len(grid)-1)) and 
                all(grid[0][j] != grid[0][j+1] for j in range(len(grid[0])-1)))

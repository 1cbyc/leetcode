from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def reverseSubmatrix(self, grid, x, y, k):
        """
        :type grid: List[List[int]]
        :type x: int
        :type y: int
        :type k: int
        :rtype: List[List[int]]
        """
        for i in range(k//2):
            for j in range(k):
                grid[x+i][y+j], grid[x+(k-1-i)][y+j] = grid[x+(k-1-i)][y+j], grid[x+i][y+j]
        return grid

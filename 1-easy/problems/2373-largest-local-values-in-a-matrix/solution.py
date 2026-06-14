from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def largestLocal(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[List[int]]
        """
        def find_max(i, j):
            return max(grid[ni][nj] for ni in range(i, i+3) for nj in range(j, j+3))

        return [[find_max(i, j) for j in range(len(grid[0])-2)] for i in range(len(grid)-2)]

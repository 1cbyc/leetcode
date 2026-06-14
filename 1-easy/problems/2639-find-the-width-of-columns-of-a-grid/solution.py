from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findColumnWidth(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[int]
        """
        def length(x):
            l = 1
            if x < 0:
                x = -x
                l += 1
            while x >= 10:
                x //= 10
                l += 1
            return l

        return [max(length(grid[i][j]) for i in range(len(grid))) for j in range(len(grid[0]))]


# array
class Solution2(object):
    def findColumnWidth(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[int]
        """
        return [max(len(str(grid[i][j])) for i in range(len(grid))) for j in range(len(grid[0]))]


import itertools


# array
class Solution3(object):
    def findColumnWidth(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[int]
        """
        return [max(len(str(x)) for x in col) for col in itertools.izip(*grid)]

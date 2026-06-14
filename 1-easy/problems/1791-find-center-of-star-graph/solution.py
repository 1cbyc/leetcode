from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findCenter(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: int
        """
        return edges[0][edges[0][1] in edges[1]]

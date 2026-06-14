from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def areSimilar(self, mat, k):
        """
        :type mat: List[List[int]]
        :type k: int
        :rtype: bool
        """
        return all(row[i] == row[(i+k)%len(row)]for row in mat for i in range(len(row)))

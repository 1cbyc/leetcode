from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def construct2DArray(self, original, m, n):
        """
        :type original: List[int]
        :type m: int
        :type n: int
        :rtype: List[List[int]]
        """
        return [original[i:i+n] for i in range(0, len(original), n)] if len(original) == m*n else []

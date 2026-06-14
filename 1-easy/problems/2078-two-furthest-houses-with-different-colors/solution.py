from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxDistance(self, colors):
        """
        :type colors: List[int]
        :rtype: int
        """
        result = 0
        for i, x in enumerate(colors):
            if x != colors[0]:
                result = max(result, i)
            if x != colors[-1]:
                result = max(result, len(colors)-1-i)
        return result

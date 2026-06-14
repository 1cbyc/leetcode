from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def captureForts(self, forts):
        """
        :type forts: List[int]
        :rtype: int
        """
        result = left = 0
        for right in range(len(forts)):
            if not forts[right]:
                continue
            if forts[right] == -forts[left]:
                result = max(result, right-left-1)
            left = right
        return result

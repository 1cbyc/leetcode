from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def largestAltitude(self, gain):
        """
        :type gain: List[int]
        :rtype: int
        """
        result = curr = 0
        for g in gain:
            curr += g
            result = max(result, curr)
        return result

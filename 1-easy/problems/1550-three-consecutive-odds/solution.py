from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def threeConsecutiveOdds(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        count = 0
        for x in arr:
            count = count+1 if x%2 else 0
            if count == 3:
                return True
        return False

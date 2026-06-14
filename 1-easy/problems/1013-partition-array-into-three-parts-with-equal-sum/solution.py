from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def canThreePartsEqualSum(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        total = sum(A)
        if total % 3 != 0:
            return False
        parts, curr = 0, 0
        for x in A:
            curr += x
            if curr == total//3:
                parts += 1
                curr = 0
        return parts >= 3

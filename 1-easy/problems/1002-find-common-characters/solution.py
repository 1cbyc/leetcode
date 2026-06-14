from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def commonChars(self, A):
        """
        :type A: List[str]
        :rtype: List[str]
        """
        result = collections.Counter(A[0])
        for a in A:
            result &= collections.Counter(a)
        return list(result.elements())

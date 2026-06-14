from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def sortArrayByParity(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        i = 0
        for j in range(len(A)):
            if A[j] % 2 == 0:
                A[i], A[j] = A[j], A[i]
                i += 1
        return A

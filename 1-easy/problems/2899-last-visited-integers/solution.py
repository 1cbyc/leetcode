from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def lastVisitedIntegers(self, words):
        """
        :type words: List[str]
        :rtype: List[int]
        """
        PREV = "prev"
        result, stk = [], []
        i = -1
        for x in words:
            if x == PREV:
                result.append(stk[i] if i >= 0 else -1)
                i -= 1
                continue
            stk.append(int(x))
            i = len(stk)-1
        return result

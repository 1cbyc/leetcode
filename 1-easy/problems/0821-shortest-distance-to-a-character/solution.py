from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def shortestToChar(self, S, C):
        """
        :type S: str
        :type C: str
        :rtype: List[int]
        """
        result = [len(S)] * len(S)
        prev = -len(S)
        for i in itertools.chain(range(len(S)),
                                 reversed(range(len(S)))):
            if S[i] == C:
                prev = i
            result[i] = min(result[i], abs(i-prev))
        return result

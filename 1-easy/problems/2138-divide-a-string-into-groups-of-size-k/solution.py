from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def divideString(self, s, k, fill):
        """
        :type s: str
        :type k: int
        :type fill: str
        :rtype: List[str]
        """
        return [s[i:i+k] + fill*(i+k-len(s)) for i in range(0, len(s), k)]

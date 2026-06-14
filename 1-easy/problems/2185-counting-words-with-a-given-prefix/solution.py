from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def prefixCount(self, words, pref):
        """
        :type words: List[str]
        :type pref: str
        :rtype: int
        """
        return sum(x.startswith(pref) for x in words)

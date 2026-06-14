from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maximumValue(self, strs):
        """
        :type strs: List[str]
        :rtype: int
        """
        return max(int(s) if s.isdigit() else len(s) for s in strs)

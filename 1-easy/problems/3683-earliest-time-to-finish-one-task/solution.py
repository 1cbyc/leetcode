from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def earliestTime(self, tasks):
        """
        :type tasks: List[List[int]]
        :rtype: int
        """
        return min(s+t for s, t in tasks)

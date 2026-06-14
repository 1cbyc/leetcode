from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def mostVisited(self, n, rounds):
        """
        :type n: int
        :type rounds: List[int]
        :rtype: List[int]
        """
        return range(rounds[0], rounds[-1]+1) or \
               range(1, rounds[-1]+1) + range(rounds[0], n+1)

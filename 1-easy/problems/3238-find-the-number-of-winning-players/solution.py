from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def winningPlayerCount(self, n, pick):
        """
        :type n: int
        :type pick: List[List[int]]
        :rtype: int
        """
        cnts = collections.defaultdict(lambda: collections.defaultdict(int))
        for x, y in pick:
            cnts[x][y] += 1
        return sum(i < max(cnt.itervalues()) for i, cnt in cnts.iteritems())

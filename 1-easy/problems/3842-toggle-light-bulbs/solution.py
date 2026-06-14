from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def toggleLightBulbs(self, bulbs):
        """
        :type bulbs: List[int]
        :rtype: List[int]
        """
        mx = max(bulbs)
        cnt = [0]*(mx+1)
        for x in bulbs:
            cnt[x] ^= 1
        return [k for k in range(1, mx+1) if cnt[k]]


import collections


# freq table, sort
class Solution2(object):
    def toggleLightBulbs(self, bulbs):
        """
        :type bulbs: List[int]
        :rtype: List[int]
        """
        cnt = collections.defaultdict(int)
        for x in bulbs:
            cnt[x] ^= 1
        return sorted(k for k, v in cnt.iteritems() if v)

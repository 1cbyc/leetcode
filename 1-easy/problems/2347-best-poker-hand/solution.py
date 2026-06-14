from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def bestHand(self, ranks, suits):
        """
        :type ranks: List[int]
        :type suits: List[str]
        :rtype: str
        """
        LOOKUP = ["", "High Card", "Pair", "Three of a Kind", "Three of a Kind", "Three of a Kind"]
        if all(suits[i] == suits[0] for i in range(1, len(suits))):
            return "Flush"
        cnt = [0]*13
        for x in ranks:
            cnt[x-1] += 1
        return LOOKUP[max(cnt)]

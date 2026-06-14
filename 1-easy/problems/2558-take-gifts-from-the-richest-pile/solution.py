from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def pickGifts(self, gifts, k):
        """
        :type gifts: List[int]
        :type k: int
        :rtype: int
        """
        for i, x in enumerate(gifts):
            gifts[i] = -x
        heapq.heapify(gifts)
        for _ in range(k):
            x = heapq.heappop(gifts)
            heapq.heappush(gifts, -int((-x)**0.5))
        return -sum(gifts)

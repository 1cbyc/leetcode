from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumCost(self, cost):
        """
        :type cost: List[int]
        :rtype: int
        """
        cost.sort(reverse=True)
        return sum(x for i, x in enumerate(cost) if i%3 != 2)

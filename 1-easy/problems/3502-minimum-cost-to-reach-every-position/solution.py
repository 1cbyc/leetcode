from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minCosts(self, cost):
        """
        :type cost: List[int]
        :rtype: List[int]
        """
        for i in range(1, len(cost)):
            cost[i] = min(cost[i], cost[i-1])
        return cost

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def buyChoco(self, prices, money):
        """
        :type prices: List[int]
        :type money: int
        :rtype: int
        """
        i = min(range(len(prices)), key=lambda x: prices[x])
        j = min((j for j in range(len(prices)) if j != i), key=lambda x: prices[x])
        return money-(prices[i]+prices[j]) if prices[i]+prices[j] <= money else money

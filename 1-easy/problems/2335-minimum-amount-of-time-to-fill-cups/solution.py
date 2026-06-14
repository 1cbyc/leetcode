from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def fillCups(self, amount):
        """
        :type amount: List[int]
        :rtype: int
        """
        return max(max(amount), (sum(amount)+1)//2)


# constructive algorithms
class Solution2(object):
    def fillCups(self, amount):
        """
        :type amount: List[int]
        :rtype: int
        """
        mx, total = max(amount), sum(amount)
        return mx if sum(amount)-mx <= mx else (total+1)//2

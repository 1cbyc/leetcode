from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        max_num = max(candies)
        return [x + extraCandies >= max_num for x in candies]

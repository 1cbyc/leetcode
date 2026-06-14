from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minimumBoxes(self, apple, capacity):
        """
        :type apple: List[int]
        :type capacity: List[int]
        :rtype: int
        """
        capacity.sort(reverse=True)
        total = sum(apple)
        for i in range(len(capacity)):
            total -= capacity[i]
            if total <= 0:
                return i+1
        return -1

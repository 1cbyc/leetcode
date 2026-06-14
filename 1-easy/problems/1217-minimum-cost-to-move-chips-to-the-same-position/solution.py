from typing import List


class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        even = sum(1 for pos in position if pos % 2 == 0)
        odd = len(position) - even
        return min(even, odd)

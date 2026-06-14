from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maxKDistinct(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        return heapq.nlargest(k, set(nums))


import heapq


# heap, sort
class Solution2(object):
    def maxKDistinct(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        min_heap = []
        for x in set(nums):
            heapq.heappush(min_heap, x)
            if len(min_heap) == k+1:
                heapq.heappop(min_heap)
        result = []
        while min_heap:
            result.append(heapq.heappop(min_heap))
        result.reverse()
        return result

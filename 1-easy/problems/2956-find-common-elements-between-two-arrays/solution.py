from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findIntersectionValues(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        lookup1, lookup2 = set(nums1), set(nums2)
        return [sum(x in lookup2 for x in nums1), sum(x in lookup1 for x in nums2)]

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findDifference(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[List[int]]
        """
        lookup = [set(nums1), set(nums2)]
        return [list(lookup[0]-lookup[1]), list(lookup[1]-lookup[0])]

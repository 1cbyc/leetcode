from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findPeaks(self, mountain):
        """
        :type mountain: List[int]
        :rtype: List[int]
        """
        return [i for i in range(1, len(mountain)-1) if mountain[i-1] < mountain[i] > mountain[i+1]]

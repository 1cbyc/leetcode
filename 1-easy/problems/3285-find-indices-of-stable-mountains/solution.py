from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def stableMountains(self, height, threshold):
        """
        :type height: List[int]
        :type threshold: int
        :rtype: List[int]
        """
        return [i for i in range(1, len(height)) if height[i-1] > threshold]

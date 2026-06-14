from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def replaceElements(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
        curr_max = -1
        for i in reversed(range(len(arr))):
            arr[i], curr_max = curr_max, max(curr_max, arr[i])
        return arr

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def recoverOrder(self, order, friends):
        """
        :type order: List[int]
        :type friends: List[int]
        :rtype: List[int]
        """
        lookup = set(friends)
        return [x for x in order if x in lookup]

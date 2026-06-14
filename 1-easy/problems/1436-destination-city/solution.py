from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def destCity(self, paths):
        """
        :type paths: List[List[str]]
        :rtype: str
        """
        A, B = map(set, itertools.izip(*paths))
        return (B-A).pop()

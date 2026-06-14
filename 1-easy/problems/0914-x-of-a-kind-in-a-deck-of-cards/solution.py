from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def hasGroupsSizeX(self, deck):
        """
        :type deck: List[int]
        :rtype: bool
        """
        def gcd(a, b):  # Time: O((logn)^2)
            while b:
                a, b = b, a % b
            return a

        vals = collections.Counter(deck).values()
        return reduce(gcd, vals) >= 2

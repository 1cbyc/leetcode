from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countSeniors(self, details):
        """
        :type details: List[str]
        :rtype: int
        """
        return sum(x[-4:-2] > "60" for x in details)

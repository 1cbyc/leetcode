from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        return max(itertools.imap(sum, accounts))

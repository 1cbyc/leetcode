from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countPrefixes(self, words, s):
        """
        :type words: List[str]
        :type s: str
        :rtype: int
        """
        return sum(itertools.imap(s.startswith, words))

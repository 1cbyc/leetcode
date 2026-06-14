from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        return 1+max(s.count(' ') for s in sentences)

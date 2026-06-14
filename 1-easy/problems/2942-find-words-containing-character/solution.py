from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def findWordsContaining(self, words, x):
        """
        :type words: List[str]
        :type x: str
        :rtype: List[int]
        """
        return [i for i, w in enumerate(words) if x in w]

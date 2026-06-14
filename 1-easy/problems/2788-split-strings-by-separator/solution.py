from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def splitWordsBySeparator(self, words, separator):
        """
        :type words: List[str]
        :type separator: str
        :rtype: List[str]
        """
        return [w for word in words for w in word.split(separator) if w]

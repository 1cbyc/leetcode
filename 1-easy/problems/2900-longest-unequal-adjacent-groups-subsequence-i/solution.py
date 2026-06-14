from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def getWordsInLongestSubsequence(self, n, words, groups):
        """
        :type n: int
        :type words: List[str]
        :type groups: List[int]
        :rtype: List[str]
        """
        return [words[i] for i in range(n) if i == 0 or groups[i-1] != groups[i]]

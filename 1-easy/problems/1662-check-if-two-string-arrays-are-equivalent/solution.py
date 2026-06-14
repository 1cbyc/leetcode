from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def arrayStringsAreEqual(self, word1, word2):
        """
        :type word1: List[str]
        :type word2: List[str]
        :rtype: bool
        """
        idx1 = idx2 = arr_idx1 = arr_idx2 = 0
        while arr_idx1 < len(word1) and arr_idx2 < len(word2):
            if word1[arr_idx1][idx1] != word2[arr_idx2][idx2]:
                break
            idx1 += 1
            if idx1 == len(word1[arr_idx1]):
                idx1 = 0
                arr_idx1 += 1
            idx2 += 1
            if idx2 == len(word2[arr_idx2]):
                idx2 = 0
                arr_idx2 += 1
        return arr_idx1 == len(word1) and arr_idx2 == len(word2)

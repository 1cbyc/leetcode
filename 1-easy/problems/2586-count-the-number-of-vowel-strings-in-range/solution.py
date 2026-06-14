from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def vowelStrings(self, words, left, right):
        """
        :type words: List[str]
        :type left: int
        :type right: int
        :rtype: int
        """
        VOWELS = {'a', 'e', 'i', 'o', 'u'}
        return sum(words[i][0] in VOWELS and words[i][-1] in VOWELS for i in range(left, right+1))

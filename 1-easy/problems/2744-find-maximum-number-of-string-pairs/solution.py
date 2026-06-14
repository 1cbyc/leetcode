from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def maximumNumberOfStringPairs(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        result = 0
        cnt = collections.Counter()
        for w in words:
            result += cnt[w[::-1]]
            cnt[w] += 1
        return result

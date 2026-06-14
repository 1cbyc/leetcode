from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def similarPairs(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        cnt = collections.Counter()
        result = 0
        for w in words:
            mask = reduce(lambda total, x: total|x, itertools.imap(lambda c: 1<<(ord(c)-ord('a')), w))
            result += cnt[mask]
            cnt[mask] += 1
        return result

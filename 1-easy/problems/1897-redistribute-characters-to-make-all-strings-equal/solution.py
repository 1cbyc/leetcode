from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def makeEqual(self, words):
        """
        :type words: List[str]
        :rtype: bool
        """
        cnt = collections.defaultdict(int)
        for w in words:
            for c in w:
                cnt[c] += 1
        return all(v%len(words) == 0 for v in cnt.itervalues())

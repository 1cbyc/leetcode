from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def slowestKey(self, releaseTimes, keysPressed):
        """
        :type releaseTimes: List[int]
        :type keysPressed: str
        :rtype: str
        """
        result, lookup = 'a', collections.Counter()
        for i, c in enumerate(keysPressed):
            lookup[c] = max(lookup[c], releaseTimes[i]-(releaseTimes[i-1] if i > 0 else 0))
            if lookup[c] > lookup[result] or lookup[c] == lookup[result] and c > result:
                result = c
        return result

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        count = collections.Counter(arr)
        lookup = set()
        for v in count.itervalues():
            if v in lookup:
                return False
            lookup.add(v)
        return True


class Solution2(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        count = collections.Counter(arr)
        return len(count) == len(set(count.itervalues()))

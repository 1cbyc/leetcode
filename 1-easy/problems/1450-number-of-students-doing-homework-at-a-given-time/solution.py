from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def busyStudent(self, startTime, endTime, queryTime):
        """
        :type startTime: List[int]
        :type endTime: List[int]
        :type queryTime: int
        :rtype: int
        """
        return sum(s <= queryTime <= e for s, e in itertools.izip(startTime, endTime))

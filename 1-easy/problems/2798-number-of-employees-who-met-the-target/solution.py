from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours, target):
        """
        :type hours: List[int]
        :type target: int
        :rtype: int
        """
        return sum(x >= target for x in hours)

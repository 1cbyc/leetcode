from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def hardestWorker(self, n, logs):
        """
        :type n: int
        :type logs: List[List[int]]
        :rtype: int
        """
        return logs[max(range(len(logs)), key=lambda x: (logs[x][1]-(logs[x-1][1] if x-1 >= 0 else 0), -logs[x][0]))][0]

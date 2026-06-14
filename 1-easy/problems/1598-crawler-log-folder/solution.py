from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minOperations(self, logs):
        """
        :type logs: List[str]
        :rtype: int
        """
        result = 0
        for log in logs:
            if log == "../":
                if result > 0:
                    result -= 1
            elif log != "./":
                result += 1
        return result

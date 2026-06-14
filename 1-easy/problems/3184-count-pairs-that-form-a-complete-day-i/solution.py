from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countCompleteDayPairs(self, hours):
        """
        :type hours: List[int]
        :rtype: int
        """
        result = 0
        cnt = [0]*24
        for x in hours:
            result += cnt[-x%24]
            cnt[x%24] += 1
        return result


# brute force
class Solution2(object):
    def countCompleteDayPairs(self, hours):
        """
        :type hours: List[int]
        :rtype: int
        """
        return sum((hours[i]+hours[j])%24 == 0 for i in range(len(hours)-1) for j in range(i+1, len(hours)))

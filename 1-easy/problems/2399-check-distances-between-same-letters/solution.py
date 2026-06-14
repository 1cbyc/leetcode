from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def checkDistances(self, s, distance):
        """
        :type s: str
        :type distance: List[int]
        :rtype: bool
        """
        for i in range(len(s)):
            if i+distance[ord(s[i])-ord('a')]+1 >= len(s) or s[i+distance[ord(s[i])-ord('a')]+1] != s[i]:
                return False
            distance[ord(s[i])-ord('a')] = -1
        return True

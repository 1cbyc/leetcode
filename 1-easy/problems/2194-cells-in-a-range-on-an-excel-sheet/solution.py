from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def cellsInRange(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        return [chr(x)+chr(y) for x in range(ord(s[0]), ord(s[3])+1) for y in range(ord(s[1]), ord(s[4])+1)]

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def nextGreatestLetter(self, letters, target):
        """
        :type letters: List[str]
        :type target: str
        :rtype: str
        """
        i = bisect.bisect_right(letters, target)
        return letters[0] if i == len(letters) else letters[i]

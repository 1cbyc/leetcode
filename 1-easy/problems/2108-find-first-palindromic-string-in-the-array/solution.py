from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def firstPalindrome(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
        def is_palindrome(s):
            i, j = 0, len(s)-1
            while i < j:
                if s[i] != s[j]:
                    return False
                i += 1
                j -= 1
            return True

        for w in words:
            if is_palindrome(w):
                return w
        return ""

 
class Solution2(object):
    def firstPalindrome(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
        return next((x for x in words if x == x[::-1]), "")

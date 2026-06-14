class Solution:
    def firstMatchingIndex(self, s):
        """
        :type s: str
        :rtype: int
        """
        return next((i for i in range(len(s)) if s[i] == s[~i]), -1)

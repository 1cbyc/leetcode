class Solution:
    def makeSmallestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        return "".join(min(s[i], s[~i]) for i in range(len(s)))

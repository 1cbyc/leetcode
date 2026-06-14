class Solution:
    def isAdjacentDiffAtMostTwo(self, s):
        """
        :type s: str
        :rtype: bool
        """
        return all(abs(ord(s[i])-ord(s[i+1])) <= 2 for i in range(len(s)-1))

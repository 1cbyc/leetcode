class Solution:
    def countKeyChanges(self, s):
        """
        :type s: str
        :rtype: int
        """
        return sum(s[i].lower() != s[i+1].lower() for i in range(len(s)-1))

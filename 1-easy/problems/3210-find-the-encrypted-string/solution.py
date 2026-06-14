class Solution:
    def getEncryptedString(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        return "".join(s[(i+k)%len(s)] for i in range(len(s)))

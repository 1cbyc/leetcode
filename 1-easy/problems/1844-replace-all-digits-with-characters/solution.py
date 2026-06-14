class Solution:
    def replaceDigits(self, s):
        """
        :type s: str
        :rtype: str
        """
        return "".join(chr(ord(s[i-1])+int(s[i])) if i%2 else s[i] for i in range(len(s)))

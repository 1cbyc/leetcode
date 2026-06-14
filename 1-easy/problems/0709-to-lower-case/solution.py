class Solution:
    def toLowerCase(self, str):
        """
        :type str: str
        :rtype: str
        """
        return "".join([chr(ord('a')+ord(c)-ord('A')) 
                        if 'A' <= c <= 'Z' else c for c in str])

class Solution:
    def hasSpecialSubstring(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: bool
        """
        l = 0
        for i in range(len(s)):
            l += 1
            if i+1 == len(s) or s[i] != s[i+1]:
                if l == k:
                    return True
                l = 0
        return False

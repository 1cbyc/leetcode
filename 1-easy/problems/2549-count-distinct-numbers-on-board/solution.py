class Solution:
    def distinctIntegers(self, n):
        """
        :type n: int
        :rtype: int
        """
        return n-1 if n >= 2 else 1

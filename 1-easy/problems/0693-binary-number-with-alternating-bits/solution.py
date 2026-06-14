class Solution:
    def hasAlternatingBits(self, n):
        """
        :type n: int
        :rtype: bool
        """
        n, curr = divmod(n, 2)
        while n > 0:
            if curr == n % 2:
                return False
            n, curr = divmod(n, 2)
        return True

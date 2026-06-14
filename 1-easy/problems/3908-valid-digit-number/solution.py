class Solution:
    def validDigit(self, n, x):
        """
        :type n: int
        :type x: int
        :rtype: bool
        """
        result = False
        while n:
            n, r = divmod(n, 10)
            if r != x:
                continue
            if not n:
                return False
            result = True
        return result


# math
class Solution2(object):
    def validDigit(self, n, x):
        """
        :type n: int
        :type x: int
        :rtype: bool
        """
        digits = map(int, str(n))
        return x != digits[0] and x in digits

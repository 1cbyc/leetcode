class Solution:
    def removeZeros(self, n):
        """
        :type n: int
        :rtype: int
        """
        def reverse(n):
            result = 0
            while n:
                n, r = divmod(n, 10)
                result = result*10+r
            return result
    
        result = 0
        while n:
            n, r = divmod(n, 10)
            if r:
                result = result*10+r
        return reverse(result)


# string
class Solution2(object):
    def removeZeros(self, n):
        """
        :type n: int
        :rtype: int
        """
        result = "".join(x for x in str(n) if x != '0')
        return int(result) if result else 0

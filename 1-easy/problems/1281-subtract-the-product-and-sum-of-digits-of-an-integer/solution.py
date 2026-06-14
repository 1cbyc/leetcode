class Solution:
    def subtractProductAndSum(self, n):
        """
        :type n: int
        :rtype: int
        """
        product, total = 1, 0
        while n:
            n, r = divmod(n, 10)
            product *= r
            total += r
        return product-total


import operator


class Solution2(object):
    def subtractProductAndSum(self, n):
        """
        :type n: int
        :rtype: int
        """
        A = map(int, str(n))
        return reduce(operator.mul, A) - sum(A)

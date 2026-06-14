class Solution:
    def smallestEvenMultiple(self, n):
        """
        :type n: int
        :rtype: int
        """
        return n<<(n&1)

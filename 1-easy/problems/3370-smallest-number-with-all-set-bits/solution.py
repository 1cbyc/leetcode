class Solution:
    def smallestNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        return (1<<n.bit_length())-1

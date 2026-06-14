class Solution:
    def minimumFlips(self, n):
        """
        :type n: int
        :rtype: int
        """
        l = n.bit_length()
        return sum(2 for i in range(l//2) if (n>>i)&1 != (n>>((l-1)-i))&1)

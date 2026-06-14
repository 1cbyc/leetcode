class Solution:
    def consecutiveSetBits(self, n):
        """
        :type n: int
        :rtype: bool
        """
        def is_power_of_2(n):
            return n > 0 and n&(n-1) == 0

        return is_power_of_2(n&(n>>1))

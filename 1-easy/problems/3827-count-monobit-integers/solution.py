class Solution:
    def countMonobit(self, n):
        """
        :type n: int
        :rtype: int
        """
        return (n+1).bit_length()

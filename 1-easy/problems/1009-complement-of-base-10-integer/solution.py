class Solution:
    def bitwiseComplement(self, N):
        """
        :type N: int
        :rtype: int
        """
        mask = 1
        while N > mask:
            mask = mask*2+1
        return mask-N

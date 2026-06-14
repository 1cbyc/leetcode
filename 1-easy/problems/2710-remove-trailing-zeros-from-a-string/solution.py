class Solution:
    def removeTrailingZeros(self, num):
        """
        :type num: str
        :rtype: str
        """
        return num[:next(i for i in reversed(range(len(num))) if num[i] != '0')+1]

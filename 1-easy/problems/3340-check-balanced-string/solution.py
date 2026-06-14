class Solution:
    def isBalanced(self, num):
        """
        :type num: str
        :rtype: bool
        """
        return sum(ord(num[i])-ord('0') for i in range(0, len(num), 2)) == sum(ord(num[i])-ord('0') for i in range(1, len(num), 2))

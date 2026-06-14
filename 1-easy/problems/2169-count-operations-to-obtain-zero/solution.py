class Solution:
    def countOperations(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        result = 0
        while num2:
            result += num1//num2
            num1, num2 = num2, num1%num2
        return result

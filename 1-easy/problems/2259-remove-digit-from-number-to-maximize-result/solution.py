class Solution:
    def removeDigit(self, number, digit):
        """
        :type number: str
        :type digit: str
        :rtype: str
        """
        i = next((i for i in range(len(number)-1) if digit == number[i] < number[i+1]), len(number)-1)
        if i+1 == len(number):
            i = next((i for i in reversed(range(len(number))) if digit == number[i]))
        return number[:i]+number[i+1:]

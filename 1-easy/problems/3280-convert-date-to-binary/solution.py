class Solution:
    def convertDateToBinary(self, date):
        """
        :type date: str
        :rtype: str
        """
        return "-".join(map(lambda x: bin(int(x))[2:], date.split('-')))

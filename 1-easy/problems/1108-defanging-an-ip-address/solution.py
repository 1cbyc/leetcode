class Solution:
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        result = []
        for c in address:
            if c == '.':
                result.append("[.]")
            else:
                result.append(c)
        return "".join(result)

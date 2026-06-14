class Solution:
    def largestEven(self, s):
        """
        :type s: str
        :rtype: str
        """
        result = list(s)
        while result and result[-1] == '1':
            result.pop()
        return "".join(result)


# math
class Solution2(object):
    def largestEven(self, s):
        """
        :type s: str
        :rtype: str
        """
        return s.rstrip('1')

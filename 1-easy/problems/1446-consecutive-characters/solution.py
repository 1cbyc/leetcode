class Solution:
    def maxPower(self, s):
        """
        :type s: str
        :rtype: int
        """
        result, count = 1, 1
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                count += 1
            else:
                count = 1
            result = max(result, count)
        return result


import itertools


class Solution2(object):
    def maxPower(self, s):
        return max(len(list(v)) for _, v in itertools.groupby(s))

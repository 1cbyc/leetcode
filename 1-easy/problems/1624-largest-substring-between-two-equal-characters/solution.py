class Solution:
    def maxLengthBetweenEqualCharacters(self, s):
        """
        :type s: str
        :rtype: int
        """
        result, lookup = -1, {}
        for i, c in enumerate(s):
            result = max(result, i-lookup.setdefault(c, i)-1)
        return result

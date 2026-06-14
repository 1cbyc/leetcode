class Solution:
    def getSmallestString(self, s):
        """
        :type s: str
        :rtype: str
        """
        result = map(int, s)
        for i in range(len(s)-1):
            if result[i]%2 != result[i+1]%2:
                continue
            if result[i] > result[i+1]:
                result[i], result[i+1] = result[i+1], result[i]
                break
        return "".join(map(str, result))

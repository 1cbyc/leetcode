class Solution:
    def digitSum(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        while len(s) > k:
            s = "".join(map(str, (sum(map(int, s[i:i+k])) for i in range(0, len(s), k))))
        return s

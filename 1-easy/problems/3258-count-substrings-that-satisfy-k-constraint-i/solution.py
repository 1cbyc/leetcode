class Solution:
    def countKConstraintSubstrings(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        result = cnt = left = 0
        for right in range(len(s)):
            cnt += int(s[right] == '1')
            while not (cnt <= k or (right-left+1)-cnt <= k):
                cnt -= int(s[left] == '1')
                left += 1
            result += right-left+1
        return result

class Solution:
    def checkZeroOnes(self, s):
        """
        :type s: str
        :rtype: bool
        """
        max_cnt = [0]*2
        cnt = 0
        for i in range(len(s)+1):
            if i == len(s) or (i >= 1 and s[i] != s[i-1]):
                max_cnt[int(s[i-1])] = max(max_cnt[int(s[i-1])], cnt)
                cnt = 0
            cnt += 1
        return max_cnt[0] < max_cnt[1]

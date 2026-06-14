class Solution:
    def getLeastFrequentDigit(self, n):
        """
        :type n: int
        :rtype: int
        """
        cnt = [0]*10
        while n:
            n, r = divmod(n, 10)
            cnt[r] += 1
        mn = min(x for x in cnt if x)
        return next(i for i in range(len(cnt)) if cnt[i] == mn)

class Solution:
    def countBalls(self, lowLimit, highLimit):
        """
        :type lowLimit: int
        :type highLimit: int
        :rtype: int
        """
        count = collections.Counter()
        for i in range(lowLimit, highLimit+1):
            count[sum(itertools.imap(int, str(i)))] += 1
        return max(count.itervalues())

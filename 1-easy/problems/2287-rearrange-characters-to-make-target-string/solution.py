class Solution:
    def rearrangeCharacters(self, s, target):
        """
        :type s: str
        :type target: str
        :rtype: int
        """
        cnt1 = collections.Counter(s)
        cnt2 = collections.Counter(target)
        return min(cnt1[k]//v for k, v in cnt2.iteritems())

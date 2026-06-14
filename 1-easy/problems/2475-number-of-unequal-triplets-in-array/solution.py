from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def unequalTriplets(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        K = 3
        cnt = collections.Counter()
        dp = [0]*K  # dp[i]: number of unequal (i+1)-plets
        for x in nums:
            cnt[x] += 1
            other_cnt = 1
            for i in range(K):
                dp[i] += other_cnt
                other_cnt = dp[i]-cnt[x]*other_cnt
        return dp[K-1]

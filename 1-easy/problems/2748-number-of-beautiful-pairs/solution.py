from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def countBeautifulPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def gcd(a, b):
            while b:
                a, b = b, a%b
            return a

        result = 0
        cnt = [0]*10
        for x in nums:
            for i in range(1, 10):
                if gcd(i, x%10) == 1:
                    result += cnt[i]
            while x >= 10:
                x //= 10
            cnt[x] += 1
        return result

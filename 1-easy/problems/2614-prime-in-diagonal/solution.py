from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def diagonalPrime(self, nums):
        """
        :type nums: List[List[int]]
        :rtype: int
        """
        result = 0
        for i in range(len(nums)):
            if nums[i][i] in PRIMES_SET:
                result = max(result, nums[i][i])
            if nums[i][~i] in PRIMES_SET:
                result = max(result, nums[i][~i])
        return result

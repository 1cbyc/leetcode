from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minBitwiseArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        return [x-(((x+1)&~x)>>1) if x&1 else -1 for x in nums]


# brute force
class Solution2(object):
    def minBitwiseArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        return [next((i for i in range(x) if i|(i+1) == x), -1) for x in nums]

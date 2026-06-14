from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def separateDigits(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for x in reversed(nums):
            while x:
                result.append(x%10)
                x //= 10
        result.reverse()
        return result


# array
class Solution2(object):
    def separateDigits(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        return [int(c) for x in nums for c in str(x)]

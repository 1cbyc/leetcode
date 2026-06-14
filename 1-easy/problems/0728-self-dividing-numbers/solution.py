from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        def isDividingNumber(num):
            n = num
            while n > 0:
                n, r = divmod(n, 10)
                if r == 0 or (num%r) != 0:
                    return False
            return True
        
        return [num for num in range(left, right+1) if isDividingNumber(num)]


import itertools


class Solution2(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        return [num for num in range(left, right+1) \
                if not any(itertools.imap(lambda x: int(x) == 0 or num%int(x) != 0, str(num)))]

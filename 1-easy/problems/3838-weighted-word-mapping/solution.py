from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def mapWordWeights(self, words, weights):
        """
        :type words: List[str]
        :type weights: List[int]
        :rtype: str
        """
        result = []
        for w in words:
            i = 0
            for x in w:
                i = (i+weights[ord(x)-ord('a')])%26
            result.append(chr(ord('z')-i))
        return "".join(result)


# string
class Solution2(object):
    def mapWordWeights(self, words, weights):
        """
        :type words: List[str]
        :type weights: List[int]
        :rtype: str
        """
        return "".join(chr(ord('z')-reduce(lambda accu, x: (accu+x)%26, map(lambda x: weights[ord(x)-ord('a')], w), 0)) for w in words)

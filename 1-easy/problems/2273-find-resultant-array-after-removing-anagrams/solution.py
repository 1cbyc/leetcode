from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def removeAnagrams(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        result = []
        prev = None
        for x in words:
            cnt = collections.Counter(x)
            if prev and prev == cnt:
                continue
            prev = cnt
            result.append(x)
        return result


import collections


# sort
class Solution2(object):
    def removeAnagrams(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        result = []
        prev = None
        for x in words:
            s = sorted(x)
            if prev and prev == s:
                continue
            prev = s
            result.append(x)
        return result


import collections


# sort
class Solution3(object):
    def removeAnagrams(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        return [words[i] for i in range(len(words)) if i == 0 or sorted(words[i-1]) != sorted(words[i])]

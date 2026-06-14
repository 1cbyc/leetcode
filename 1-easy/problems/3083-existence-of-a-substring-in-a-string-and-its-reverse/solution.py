class Solution:
    def isSubstringPresent(self, s):
        """
        :type s: str
        :rtype: bool
        """
        lookup = [[False]*26 for _ in range(26)]
        for i in range(len(s)-1):
            lookup[ord(s[i])-ord('a')][ord(s[i+1])-ord('a')] = True
        return any(lookup[ord(s[i+1])-ord('a')][ord(s[i])-ord('a')]  for i in range(len(s)-1))
    

import collections


# hash table
class Solution2(object):
    def isSubstringPresent(self, s):
        """
        :type s: str
        :rtype: bool
        """
        lookup = collections.defaultdict(set)
        for i in range(len(s)-1):
            lookup[s[i]].add(s[i+1])
        return any(s[i] in lookup[s[i+1]] for i in range(len(s)-1))

from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def numOfStrings(self, patterns, word):
        """
        :type patterns: List[str]
        :type word: str
        :rtype: int
        """
        trie = AhoTrie(patterns)
        return sum(len(trie.step(c)) for c in word)


#                      , l is the max length of patterns
#                      , m is the length of word
# kmp solution
class Solution2(object):
    def numOfStrings(self, patterns, word):
        """
        :type patterns: List[str]
        :type word: str
        :rtype: int
        """
        def getPrefix(pattern):
            prefix = [-1]*len(pattern)
            j = -1
            for i in range(1, len(pattern)):
                while j != -1 and pattern[j+1] != pattern[i]:
                    j = prefix[j]
                if pattern[j+1] == pattern[i]:
                    j += 1
                prefix[i] = j
            return prefix
            
        def kmp(text, pattern):
            if not pattern:
                return 0
            prefix = getPrefix(pattern)
            if len(text) < len(pattern):
                return -1
            j = -1
            for i in range(len(text)):
                while j != -1 and pattern[j+1] != text[i]:
                    j = prefix[j]
                if pattern[j+1] == text[i]:
                    j += 1
                if j+1 == len(pattern):
                    return i-j
            return -1
        
        return sum(kmp(word, pattern) != -1 for pattern in patterns)


#                    , l is the max length of patterns
#                    , m is the length of word
# built-in solution
class Solution3(object):
    def numOfStrings(self, patterns, word):
        return sum(pattern in word for pattern in patterns)

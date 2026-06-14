from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def stringMatching(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        trie = AhoTrie(words)
        lookup = set()
        for i in range(len(words)):
            trie.reset()
            for c in words[i]:
                for j in trie.step(c):
                    if j != i:
                        lookup.add(j)
        return [words[i] for i in lookup]


class Solution2(object):
    def stringMatching(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
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
            
        def kmp(text, pattern, prefix):
            if not pattern:
                return 0
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
            
        result = []
        for i, pattern in enumerate(words):
            prefix = getPrefix(pattern)
            for j, text in enumerate(words):
                if i != j and kmp(text, pattern, prefix) != -1:
                    result.append(pattern)
                    break
        return result


class Solution3(object):
    def stringMatching(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        result = []
        for i, pattern in enumerate(words):
            for j, text in enumerate(words):
                if i != j and pattern in text:
                    result.append(pattern)
                    break
        return result

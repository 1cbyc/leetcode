from collections import deque

class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        if endWord not in wordList:
            return 0

        wordSet = set(wordList)
        queue = deque([(beginWord, 1)])

        while queue:
            current_word, steps = queue.popleft()
            if current_word == endWord:
                return steps

            for i in range(len(current_word)):
                for char in 'abcdefghijklmnopqrstuvwxyz':
                    next_word = current_word[:i] + char + current_word[i+1:]
                    if next_word in wordSet:
                        queue.append((next_word, steps + 1))
                        wordSet.remove(next_word)

        return 0

solution = Solution()
beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

print(solution.ladderLength(beginWord, endWord, wordList))
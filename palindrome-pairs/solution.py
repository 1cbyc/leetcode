class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        def is_palindrome(word):
            return word == word[::-1]

        words_map = {word: i for i, word in enumerate(words)}
        result = []

        for i, word in enumerate(words):
            for j in range(len(word) + 1):
                prefix, suffix = word[:j], word[j:]

                if is_palindrome(prefix):
                    reverse_suffix = suffix[::-1]
                    if reverse_suffix != word and reverse_suffix in words_map:
                        result.append([words_map[reverse_suffix], i])

                if j != len(word) and is_palindrome(suffix):
                    reverse_prefix = prefix[::-1]
                    if reverse_prefix != word and reverse_prefix in words_map:
                        result.append([i, words_map[reverse_prefix]])

        return result

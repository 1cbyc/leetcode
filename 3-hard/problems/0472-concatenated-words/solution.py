from typing import List


class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        word_set = set(words)
        result: List[str] = []

        def can_form(word: str) -> bool:
            if not word:
                return False
            n = len(word)
            dp = [False] * (n + 1)
            dp[0] = True
            for end in range(1, n + 1):
                for start in range(end):
                    if start == 0 and end == n:
                        continue
                    if dp[start] and word[start:end] in word_set:
                        dp[end] = True
                        break
            return dp[n]

        for word in words:
            if can_form(word):
                result.append(word)

        return result


if __name__ == "__main__":
    solution = Solution()

    assert sorted(
        solution.findAllConcatenatedWordsInADict(
            ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]
        )
    ) == sorted(["catsdogcats", "dogcatsdog", "ratcatdogcat"])
    assert sorted(
        solution.findAllConcatenatedWordsInADict(["cat", "dog", "catdog"])
    ) == ["catdog"]

    print("All tests passed!")

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        previous = list(range(n + 1))

        for i in range(1, m + 1):
            current = [i] + [0] * n
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    current[j] = previous[j - 1]
                else:
                    current[j] = 1 + min(previous[j], current[j - 1], previous[j - 1])
            previous = current

        return previous[n]


if __name__ == "__main__":
    solution = Solution()

    assert solution.minDistance("horse", "ros") == 3
    assert solution.minDistance("intention", "execution") == 5
    assert solution.minDistance("", "abc") == 3
    assert solution.minDistance("abc", "abc") == 0

    print("All tests passed!")

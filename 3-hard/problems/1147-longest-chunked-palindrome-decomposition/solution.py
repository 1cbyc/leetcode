class Solution:
    def longestDecomposition(self, text: str) -> int:
        n = len(text)
        if n == 0:
            return 0

        for k in range(1, n // 2 + 1):
            if text[:k] == text[-k:]:
                return 2 + self.longestDecomposition(text[k:n - k])

        return 1


if __name__ == "__main__":
    solution = Solution()

    assert solution.longestDecomposition("ghiabcdefhelloadamhelloabcdefghi") == 7
    assert solution.longestDecomposition("merchant") == 1
    assert solution.longestDecomposition("antaprezatepzapreanta") == 11
    assert solution.longestDecomposition("aaa") == 3

    print("All tests passed!")

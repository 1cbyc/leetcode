class Solution:
    def lastSubstring(self, s: str) -> str:
        i, j, k = 0, 1, 0
        n = len(s)

        while j + k < n:
            if s[i + k] == s[j + k]:
                k += 1
            elif s[i + k] < s[j + k]:
                i = max(i + k + 1, j)
                j = i + 1
                k = 0
            else:
                j = j + k + 1
                k = 0

        return s[i:]


if __name__ == "__main__":
    solution = Solution()

    assert solution.lastSubstring("abab") == "bab"
    assert solution.lastSubstring("leetcode") == "tcode"
    assert solution.lastSubstring("zzz") == "zzz"
    assert solution.lastSubstring("cacacb") == "cb"

    print("All tests passed!")

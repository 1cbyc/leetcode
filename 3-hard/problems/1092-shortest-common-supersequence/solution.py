class Solution:
    def shortestCommonSupersequence(self, str1: str, str2: str) -> str:
        m, n = len(str1), len(str2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if str1[i - 1] == str2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

        result = []
        i, j = m, n
        while i > 0 and j > 0:
            if str1[i - 1] == str2[j - 1]:
                result.append(str1[i - 1])
                i -= 1
                j -= 1
            elif dp[i - 1][j] >= dp[i][j - 1]:
                result.append(str1[i - 1])
                i -= 1
            else:
                result.append(str2[j - 1])
                j -= 1

        result.extend(str1[:i][::-1])
        result.extend(str2[:j][::-1])
        return "".join(reversed(result))


if __name__ == "__main__":
    solution = Solution()

    def is_supersequence(s: str, sub: str) -> bool:
        it = iter(s)
        return all(c in it for c in sub)

    result = solution.shortestCommonSupersequence("abac", "cab")
    assert is_supersequence(result, "abac") and is_supersequence(result, "cab")
    assert len(result) == 5

    result2 = solution.shortestCommonSupersequence("aaaaaaaa", "aaaaaaaa")
    assert result2 == "aaaaaaaa"

    print("All tests passed!")

class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)
        is_palindrome = [[False] * n for _ in range(n)]
        dp = [0] * n

        for i in range(n):
            min_cut = i
            for j in range(i + 1):
                if s[i] == s[j] and (i - j <= 2 or is_palindrome[j + 1][i - 1]):
                    is_palindrome[j][i] = True
                    if j == 0:
                        min_cut = 0
                    else:
                        min_cut = min(min_cut, dp[j - 1] + 1)
            dp[i] = min_cut

        return dp[-1]

solution = Solution()
s = "aab"
print("Minimum cuts needed for palindrome partitioning:", solution.minCut(s))
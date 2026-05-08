class Solution:
    def strangePrinter(self, s: str) -> int:
        if not s: return 0
        new_s = [s[0]]
        for i in range(1, len(s)):
            if s[i] != s[i-1]:
                new_s.append(s[i])
        s = "".join(new_s)
        n = len(s)
        
        dp = [[0] * n for _ in range(n)]
        for i in range(n-1, -1, -1):
            dp[i][i] = 1
            for j in range(i+1, n):
                dp[i][j] = 1 + dp[i+1][j]
                for k in range(i+1, j + 1):
                    if s[k] == s[i]:
                        cost = dp[i+1][k-1] if k > i+1 else 0
                        dp[i][j] = min(dp[i][j], cost + dp[k][j])
        return dp[0][n-1]

def test_solution():
    sol = Solution()
    assert sol.strangePrinter("aaabbb") == 2
    assert sol.strangePrinter("aba") == 2
    assert sol.strangePrinter("abcabc") == 5
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

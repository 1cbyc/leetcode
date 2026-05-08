class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        MOD = 10**9 + 7
        if k == 0: return 1
        
        dp = [0] * (k + 1)
        dp[0] = 1
        
        for i in range(2, n + 1):
            new_dp = [0] * (k + 1)
            new_dp[0] = 1
            for j in range(1, k + 1):
                val = (new_dp[j-1] + dp[j]) % MOD
                if j >= i:
                    val = (val - dp[j-i] + MOD) % MOD
                new_dp[j] = val
            dp = new_dp
            
        return dp[k]

def test_solution():
    sol = Solution()
    assert sol.kInversePairs(3, 0) == 1
    assert sol.kInversePairs(3, 1) == 2
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

class Solution:
    def numPermsDISequence(self, s: str) -> int:
        mod = 10**9 + 7
        n = len(s)
        dp = [1] * (n + 1)

        for i in range(1, n + 1):
            new_dp = [0] * (n + 1 - i)
            if s[i - 1] == "D":
                running = 0
                for j in range(len(new_dp) - 1, -1, -1):
                    running = (running + dp[j + 1]) % mod
                    new_dp[j] = running
            else:
                running = 0
                for j in range(len(new_dp)):
                    running = (running + dp[j]) % mod
                    new_dp[j] = running
            dp = new_dp

        return dp[0] % mod


if __name__ == "__main__":
    solution = Solution()

    assert solution.numPermsDISequence("DID") == 5
    assert solution.numPermsDISequence("D") == 1
    assert solution.numPermsDISequence("DDD") == 1
    assert solution.numPermsDISequence("III") == 1

    print("All tests passed!")

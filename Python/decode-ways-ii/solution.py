class Solution:
    def numDecodings(self, s: str) -> int:
        MOD = 10**9 + 7
        n = len(s)
        
        def ways1(c):
            if c == '*': return 9
            if c == '0': return 0
            return 1
        
        def ways2(c1, c2):
            if c1 == '*' and c2 == '*': return 15
            if c1 == '*':
                return 2 if '0' <= c2 <= '6' else 1
            if c1 == '1':
                return 9 if c2 == '*' else 1
            if c1 == '2':
                if c2 == '*': return 6
                return 1 if '0' <= c2 <= '6' else 0
            return 0

        prev2, prev1 = 1, ways1(s[0])
        for i in range(1, n):
            curr = (prev1 * ways1(s[i]) + prev2 * ways2(s[i-1], s[i])) % MOD
            prev2, prev1 = prev1, curr
        return prev1

def test_solution():
    sol = Solution()
    assert sol.numDecodings("*") == 9
    assert sol.numDecodings("1*") == 18
    assert sol.numDecodings("2*") == 15
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

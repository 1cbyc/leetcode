from functools import lru_cache

class Solution:
    def countPalindromicSubsequences(self, s: str) -> int:
        n = len(s)
        mod = 10**9 + 7
        
        next_idx = [[-1] * n for _ in range(4)]
        prev_idx = [[-1] * n for _ in range(4)]
        
        for char_code in range(4):
            char = chr(ord('a') + char_code)
            last = -1
            for i in range(n):
                if s[i] == char:
                    last = i
                prev_idx[char_code][i] = last
            
            first = -1
            for i in range(n - 1, -1, -1):
                if s[i] == char:
                    first = i
                next_idx[char_code][i] = first

        @lru_cache(None)
        def solve(i, j):
            if i > j:
                return 0
            
            res = 0
            for char_code in range(4):
                l = next_idx[char_code][i]
                r = prev_idx[char_code][j]
                
                if l != -1 and l <= j:
                    res += 1
                    if l < r:
                        res += 1 + solve(l + 1, r - 1)
            
            return res % mod

        return solve(0, n - 1)

def test_solution():
    sol = Solution()
    assert sol.countPalindromicSubsequences("bccb") == 6
    assert sol.countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba") == 104860361
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

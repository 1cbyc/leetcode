from collections import defaultdict
from functools import lru_cache

class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        n, m = len(ring), len(key)
        pos = defaultdict(list)
        for i, char in enumerate(ring):
            pos[char].append(i)
            
        @lru_cache(None)
        def solve(k_idx, r_idx):
            if k_idx == m:
                return 0
            
            res = float('inf')
            for next_r_idx in pos[key[k_idx]]:
                dist = abs(r_idx - next_r_idx)
                step = min(dist, n - dist)
                res = min(res, step + 1 + solve(k_idx + 1, next_r_idx))
            return res
            
        return solve(0, 0)

def test_solution():
    sol = Solution()
    assert sol.findRotateSteps("godding", "gd") == 4
    assert sol.findRotateSteps("godding", "godding") == 13
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

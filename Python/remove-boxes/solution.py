import sys
from functools import lru_cache
from typing import List

class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:
        sys.setrecursionlimit(2000)
        
        @lru_cache(None)
        def solve(i, j, k):
            if i > j: return 0
            
            while j > i and boxes[j] == boxes[j-1]:
                j -= 1
                k += 1
            
            res = solve(i, j - 1, 0) + (k + 1) ** 2
            
            for m in range(i, j):
                if boxes[m] == boxes[j]:
                    res = max(res, solve(i, m, k + 1) + solve(m + 1, j - 1, 0))
            return res
            
        return solve(0, len(boxes) - 1, 0)

def test_solution():
    sol = Solution()
    assert sol.removeBoxes([1,3,2,2,2,3,4,3,1]) == 23
    assert sol.removeBoxes([1,1,1]) == 9
    assert sol.removeBoxes([1]) == 1
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

import heapq
from typing import List

class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        projects = sorted(zip(capital, profits))
        
        available_profits = []
        i = 0
        
        for _ in range(k):
            while i < n and projects[i][0] <= w:
                heapq.heappush(available_profits, -projects[i][1])
                i += 1
            
            if not available_profits:
                break
            
            w += -heapq.heappop(available_profits)
            
        return w

def test_solution():
    sol = Solution()
    assert sol.findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]) == 4
    assert sol.findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]) == 6
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

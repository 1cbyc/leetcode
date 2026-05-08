from typing import List

class Solution:
    def findMinMoves(self, machines: List[int]) -> int:
        total = sum(machines)
        n = len(machines)
        if total % n != 0: return -1
        
        target = total // n
        ans = 0
        curr_sum = 0
        for m in machines:
            diff = m - target
            curr_sum += diff
            ans = max(ans, abs(curr_sum), diff)
        return ans

def test_solution():
    sol = Solution()
    assert sol.findMinMoves([1,0,5]) == 3
    assert sol.findMinMoves([0,3,0]) == 2
    assert sol.findMinMoves([0,2,0]) == -1
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

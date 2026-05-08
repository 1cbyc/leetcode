from typing import List

class Solution:
    def judgePoint24(self, cards: List[int]) -> bool:
        def solve(nums):
            if len(nums) == 1:
                return abs(nums[0] - 24) < 1e-6
            
            for i in range(len(nums)):
                for j in range(len(nums)):
                    if i == j: continue
                    
                    a, b = nums[i], nums[j]
                    base = [nums[k] for k in range(len(nums)) if k != i and k != j]
                    
                    ops = [a + b, a - b, a * b]
                    if abs(b) > 1e-9: ops.append(a / b)
                    
                    for res in ops:
                        if solve(base + [res]):
                            return True
            return False

        return solve([float(c) for c in cards])

def test_solution():
    sol = Solution()
    assert sol.judgePoint24([4,1,8,7]) == True
    assert sol.judgePoint24([1,2,1,2]) == False
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

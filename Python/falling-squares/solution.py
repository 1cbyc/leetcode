from typing import List

class Solution:
    def fallingSquares(self, positions: List[List[int]]) -> List[int]:
        n = len(positions)
        heights = [0] * n
        for i in range(n):
            l1, s1 = positions[i]
            r1 = l1 + s1
            h1 = s1
            for j in range(i):
                l2, s2 = positions[j]
                r2 = l2 + s2
                if l1 < r2 and l2 < r1:
                    h1 = max(h1, heights[j] + s1)
            heights[i] = h1
        
        res = []
        cur_max = 0
        for h in heights:
            cur_max = max(cur_max, h)
            res.append(cur_max)
        return res

def test_solution():
    sol = Solution()
    assert sol.fallingSquares([[1, 2], [2, 3], [6, 1]]) == [2, 5, 5]
    assert sol.fallingSquares([[100, 100], [200, 100]]) == [100, 100]
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

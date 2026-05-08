import collections
from typing import List

class Solution:
    def cutOffTree(self, forest: List[List[int]]) -> int:
        rows, cols = len(forest), len(forest[0])
        trees = []
        for r in range(rows):
            for c in range(cols):
                if forest[r][c] > 1:
                    trees.append((forest[r][c], r, c))
        trees.sort()
        
        def bfs(sr, sc, tr, tc):
            q = collections.deque([(sr, sc, 0)])
            visited = {(sr, sc)}
            while q:
                r, c, d = q.popleft()
                if r == tr and c == tc: return d
                for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
                    nr, nc = r+dr, c+dc
                    if 0 <= nr < rows and 0 <= nc < cols and forest[nr][nc] > 0 and (nr, nc) not in visited:
                        visited.add((nr, nc))
                        q.append((nr, nc, d+1))
            return -1

        ans = 0
        cur_r, cur_c = 0, 0
        for h, tr, tc in trees:
            d = bfs(cur_r, cur_c, tr, tc)
            if d == -1: return -1
            ans += d
            cur_r, cur_c = tr, tc
        return ans

def test_solution():
    sol = Solution()
    forest1 = [[1,2,3],[0,0,4],[7,6,5]]
    assert sol.cutOffTree(forest1) == 6
    forest2 = [[1,2,3],[0,0,0],[7,6,5]]
    assert sol.cutOffTree(forest2) == -1
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

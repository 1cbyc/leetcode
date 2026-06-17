from typing import List


class Solution:
    def hitBricks(self, grid: List[List[int]], hits: List[List[int]]) -> List[int]:
        rows, cols = len(grid), len(grid[0])
        parent = list(range(rows * cols + 1))
        size = [1] * (rows * cols + 1)
        top = rows * cols

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(a: int, b: int) -> None:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb
                size[rb] += size[ra]

        working = [row[:] for row in grid]
        for r, c in hits:
            working[r][c] = 0

        def index(r: int, c: int) -> int:
            return r * cols + c

        for r in range(rows):
            for c in range(cols):
                if working[r][c] == 1:
                    if r == 0:
                        union(index(r, c), top)
                    if r > 0 and working[r - 1][c] == 1:
                        union(index(r, c), index(r - 1, c))
                    if c > 0 and working[r][c - 1] == 1:
                        union(index(r, c), index(r, c - 1))

        directions = ((1, 0), (-1, 0), (0, 1), (0, -1))
        result = [0] * len(hits)

        for i in range(len(hits) - 1, -1, -1):
            r, c = hits[i]
            if grid[r][c] == 0:
                continue

            before = size[find(top)]
            working[r][c] = 1
            if r == 0:
                union(index(r, c), top)
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and working[nr][nc] == 1:
                    union(index(r, c), index(nr, nc))

            after = size[find(top)]
            result[i] = max(0, after - before - 1)

        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.hitBricks([[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]]) == [2]
    assert solution.hitBricks([[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]]) == [0, 0]
    assert solution.hitBricks([[1], [1], [1]], [[0, 0]]) == [2]

    print("All tests passed!")

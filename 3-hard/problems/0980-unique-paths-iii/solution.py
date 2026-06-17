from typing import List


class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        empty = 0
        start = (0, 0)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 0:
                    empty += 1
                elif grid[r][c] == 1:
                    start = (r, c)

        self.paths = 0

        def dfs(row: int, col: int, remaining: int) -> None:
            if grid[row][col] == 2:
                if remaining == -1:
                    self.paths += 1
                return

            temp = grid[row][col]
            grid[row][col] = -1

            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = row + dr, col + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != -1:
                    dfs(nr, nc, remaining - 1)

            grid[row][col] = temp

        dfs(start[0], start[1], empty)
        return self.paths


if __name__ == "__main__":
    solution = Solution()

    assert solution.uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]]) == 2
    assert solution.uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]]) == 4
    assert solution.uniquePathsIII([[0, 1], [2, 0]]) == 0

    print("All tests passed!")

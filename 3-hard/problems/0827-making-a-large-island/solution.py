from typing import List


class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        n = len(grid)
        directions = ((1, 0), (-1, 0), (0, 1), (0, -1))
        island_size = {}
        island_id = 2

        def fill(start_row: int, start_col: int, identifier: int) -> int:
            stack = [(start_row, start_col)]
            grid[start_row][start_col] = identifier
            count = 0
            while stack:
                row, col = stack.pop()
                count += 1
                for dr, dc in directions:
                    nr, nc = row + dr, col + dc
                    if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 1:
                        grid[nr][nc] = identifier
                        stack.append((nr, nc))
            return count

        for row in range(n):
            for col in range(n):
                if grid[row][col] == 1:
                    island_size[island_id] = fill(row, col, island_id)
                    island_id += 1

        largest = max(island_size.values(), default=0)

        for row in range(n):
            for col in range(n):
                if grid[row][col] == 0:
                    seen = set()
                    total = 1
                    for dr, dc in directions:
                        nr, nc = row + dr, col + dc
                        if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] > 1:
                            identifier = grid[nr][nc]
                            if identifier not in seen:
                                seen.add(identifier)
                                total += island_size[identifier]
                    largest = max(largest, total)

        return largest


if __name__ == "__main__":
    solution = Solution()

    assert solution.largestIsland([[1, 0], [0, 1]]) == 3
    assert solution.largestIsland([[1, 1], [1, 0]]) == 4
    assert solution.largestIsland([[1, 1], [1, 1]]) == 4

    print("All tests passed!")

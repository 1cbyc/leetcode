from collections import deque
from typing import List


class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        rows, cols = len(grid), len(grid[0])
        all_keys = 0
        start = (0, 0)

        for r in range(rows):
            for c in range(cols):
                cell = grid[r][c]
                if cell == "@":
                    start = (r, c)
                elif cell.islower():
                    all_keys |= 1 << (ord(cell) - ord("a"))

        queue = deque([(start[0], start[1], 0, 0)])
        visited = {(start[0], start[1], 0)}

        while queue:
            r, c, keys, steps = queue.popleft()
            if keys == all_keys:
                return steps

            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if not (0 <= nr < rows and 0 <= nc < cols):
                    continue
                cell = grid[nr][nc]
                if cell == "#":
                    continue
                if cell.isupper() and not (keys & (1 << (ord(cell) - ord("A")))):
                    continue

                new_keys = keys
                if cell.islower():
                    new_keys |= 1 << (ord(cell) - ord("a"))

                if (nr, nc, new_keys) not in visited:
                    visited.add((nr, nc, new_keys))
                    queue.append((nr, nc, new_keys, steps + 1))

        return -1


if __name__ == "__main__":
    solution = Solution()

    assert solution.shortestPathAllKeys(["@.a..", "###.#", "b.A.B"]) == 8
    assert solution.shortestPathAllKeys(["@..aA", "..B#.", "....b"]) == 6
    assert solution.shortestPathAllKeys(["@Aa"]) == -1

    print("All tests passed!")

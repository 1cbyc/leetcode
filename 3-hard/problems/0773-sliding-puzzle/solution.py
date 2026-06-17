from collections import deque
from typing import List


class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        start = "".join(str(value) for row in board for value in row)
        target = "123450"
        neighbors = {
            0: (1, 3),
            1: (0, 2, 4),
            2: (1, 5),
            3: (0, 4),
            4: (1, 3, 5),
            5: (2, 4),
        }

        queue = deque([(start, start.index("0"), 0)])
        visited = {start}

        while queue:
            state, zero, moves = queue.popleft()
            if state == target:
                return moves

            for swap in neighbors[zero]:
                chars = list(state)
                chars[zero], chars[swap] = chars[swap], chars[zero]
                nxt = "".join(chars)
                if nxt not in visited:
                    visited.add(nxt)
                    queue.append((nxt, swap, moves + 1))

        return -1


if __name__ == "__main__":
    solution = Solution()

    assert solution.slidingPuzzle([[1, 2, 3], [4, 0, 5]]) == 1
    assert solution.slidingPuzzle([[1, 2, 3], [5, 4, 0]]) == -1
    assert solution.slidingPuzzle([[4, 1, 2], [5, 0, 3]]) == 5

    print("All tests passed!")

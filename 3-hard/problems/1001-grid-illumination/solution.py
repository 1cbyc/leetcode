from collections import defaultdict
from typing import List


class Solution:
    def gridIllumination(
        self, n: int, lamps: List[List[int]], queries: List[List[int]]
    ) -> List[int]:
        on = set()
        rows = defaultdict(int)
        cols = defaultdict(int)
        diag = defaultdict(int)
        anti = defaultdict(int)

        for r, c in lamps:
            if (r, c) in on:
                continue
            on.add((r, c))
            rows[r] += 1
            cols[c] += 1
            diag[r - c] += 1
            anti[r + c] += 1

        result = []
        for r, c in queries:
            if rows[r] or cols[c] or diag[r - c] or anti[r + c]:
                result.append(1)
            else:
                result.append(0)

            for dr in (-1, 0, 1):
                for dc in (-1, 0, 1):
                    nr, nc = r + dr, c + dc
                    if (nr, nc) in on:
                        on.remove((nr, nc))
                        rows[nr] -= 1
                        cols[nc] -= 1
                        diag[nr - nc] -= 1
                        anti[nr + nc] -= 1

        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.gridIllumination(5, [[0, 0], [4, 4]], [[1, 1], [1, 0]]) == [1, 0]
    assert solution.gridIllumination(5, [[0, 0], [4, 4]], [[1, 1], [1, 1]]) == [1, 1]
    assert solution.gridIllumination(5, [[0, 0], [0, 4]], [[0, 4], [0, 1], [1, 4]]) == [1, 1, 0]

    print("All tests passed!")

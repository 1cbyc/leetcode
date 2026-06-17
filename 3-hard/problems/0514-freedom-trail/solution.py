from collections import defaultdict
from functools import lru_cache
from typing import List


class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        n = len(ring)
        positions: dict[str, List[int]] = defaultdict(list)
        for index, char in enumerate(ring):
            positions[char].append(index)

        @lru_cache(maxsize=None)
        def solve(ring_index: int, key_index: int) -> int:
            if key_index == len(key):
                return 0

            best = float("inf")
            for target in positions[key[key_index]]:
                distance = abs(ring_index - target)
                steps = min(distance, n - distance)
                best = min(best, steps + 1 + solve(target, key_index + 1))
            return best

        return solve(0, 0)


if __name__ == "__main__":
    solution = Solution()

    assert solution.findRotateSteps("godding", "gd") == 4
    assert solution.findRotateSteps("godding", "godding") == 13
    assert solution.findRotateSteps("ab", "b") == 2

    print("All tests passed!")

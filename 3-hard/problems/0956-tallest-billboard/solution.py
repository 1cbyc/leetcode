from functools import lru_cache
from typing import List


class Solution:
    def tallestBillboard(self, rods: List[int]) -> int:
        n = len(rods)
        impossible = -(1 << 30)

        @lru_cache(maxsize=None)
        def dfs(index: int, diff: int) -> int:
            if index >= n:
                return 0 if diff == 0 else impossible

            rod = rods[index]
            skip = dfs(index + 1, diff)
            add_to_taller = dfs(index + 1, diff + rod)
            add_to_shorter = dfs(index + 1, abs(rod - diff)) + min(diff, rod)

            return max(skip, add_to_taller, add_to_shorter)

        return max(0, dfs(0, 0))


if __name__ == "__main__":
    solution = Solution()

    assert solution.tallestBillboard([1, 2, 3, 6]) == 6
    assert solution.tallestBillboard([1, 2, 3, 4, 5, 6]) == 10
    assert solution.tallestBillboard([1, 2]) == 0

    print("All tests passed!")

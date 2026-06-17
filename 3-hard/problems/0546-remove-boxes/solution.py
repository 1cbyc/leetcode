from functools import lru_cache
from typing import List


class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:
        n = len(boxes)

        @lru_cache(maxsize=None)
        def solve(left: int, right: int, same: int) -> int:
            if left > right:
                return 0

            while left < right and boxes[left] == boxes[left + 1]:
                left += 1
                same += 1

            best = (same + 1) * (same + 1) + solve(left + 1, right, 0)

            for middle in range(left + 1, right + 1):
                if boxes[middle] == boxes[left]:
                    best = max(
                        best,
                        solve(left + 1, middle - 1, 0) + solve(middle, right, same + 1),
                    )

            return best

        return solve(0, n - 1, 0)


if __name__ == "__main__":
    solution = Solution()

    assert solution.removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]) == 23
    assert solution.removeBoxes([1, 1, 1]) == 9
    assert solution.removeBoxes([1]) == 1

    print("All tests passed!")

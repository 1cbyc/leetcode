from collections import Counter
from math import isqrt
from typing import List


class Solution:
    def numSquarefulPerms(self, nums: List[int]) -> int:
        def is_square(value: int) -> bool:
            root = isqrt(value)
            return root * root == value

        counts = Counter(nums)
        self.total = 0

        def backtrack(previous: int, remaining: int) -> None:
            if remaining == 0:
                self.total += 1
                return

            for value in list(counts.keys()):
                if counts[value] == 0:
                    continue
                if previous is None or is_square(previous + value):
                    counts[value] -= 1
                    backtrack(value, remaining - 1)
                    counts[value] += 1

        backtrack(None, len(nums))
        return self.total


if __name__ == "__main__":
    solution = Solution()

    assert solution.numSquarefulPerms([1, 17, 8]) == 2
    assert solution.numSquarefulPerms([2, 2, 2]) == 1
    assert solution.numSquarefulPerms([1, 1, 1]) == 0

    print("All tests passed!")

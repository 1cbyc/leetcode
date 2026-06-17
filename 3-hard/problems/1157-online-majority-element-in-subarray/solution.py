import bisect
import random
from collections import defaultdict
from typing import List


class MajorityChecker:
    def __init__(self, arr: List[int]) -> None:
        self.arr = arr
        self.positions = defaultdict(list)
        for index, value in enumerate(arr):
            self.positions[value].append(index)

    def query(self, left: int, right: int, threshold: int) -> int:
        length = right - left + 1
        for _ in range(20):
            candidate = self.arr[random.randint(left, right)]
            spots = self.positions[candidate]
            count = bisect.bisect_right(spots, right) - bisect.bisect_left(spots, left)
            if count >= threshold:
                return candidate
        return -1


if __name__ == "__main__":
    random.seed(0)
    checker = MajorityChecker([1, 1, 2, 2, 1, 1])
    assert checker.query(0, 5, 4) == 1
    assert checker.query(0, 3, 3) == -1
    assert checker.query(2, 3, 2) == 2

    print("All tests passed!")

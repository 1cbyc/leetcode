import math
from typing import List

class Solution:
    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:
        if buckets == 1:
            return 0

        states_per_pig = (minutesToTest // minutesToDie) + 1

        pigs = 0
        while states_per_pig ** pigs < buckets:
            pigs += 1

        return pigs

def test_solution():
    solution = Solution()

    result1 = solution.poorPigs(1000, 15, 60)
    print(f"Test 1: {result1}")

    result2 = solution.poorPigs(4, 15, 15)
    print(f"Test 2: {result2}")

    result3 = solution.poorPigs(4, 15, 30)
    print(f"Test 3: {result3}")

if __name__ == "__main__":
    test_solution()

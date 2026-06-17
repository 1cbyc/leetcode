import bisect
from typing import List


class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
        arr2 = sorted(set(arr2))
        # dp maps achievable "last value" -> minimum operations
        dp = {-1: 0}

        for value in arr1:
            new_dp = {}
            for last, ops in dp.items():
                # Keep current value if strictly greater than last.
                if value > last:
                    if value not in new_dp or new_dp[value] > ops:
                        new_dp[value] = ops
                # Replace with smallest arr2 element greater than last.
                index = bisect.bisect_right(arr2, last)
                if index < len(arr2):
                    replacement = arr2[index]
                    if replacement not in new_dp or new_dp[replacement] > ops + 1:
                        new_dp[replacement] = ops + 1
            if not new_dp:
                return -1
            dp = new_dp

        return min(dp.values())


if __name__ == "__main__":
    solution = Solution()

    assert solution.makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4]) == 1
    assert solution.makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1]) == 2
    assert solution.makeArrayIncreasing([1, 5, 3, 6, 7], [1, 6, 3, 3]) == -1

    print("All tests passed!")

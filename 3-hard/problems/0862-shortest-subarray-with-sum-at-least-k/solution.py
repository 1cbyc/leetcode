from collections import deque
from typing import List


class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]

        best = n + 1
        window: deque[int] = deque()

        for i in range(n + 1):
            while window and prefix[i] - prefix[window[0]] >= k:
                best = min(best, i - window.popleft())
            while window and prefix[window[-1]] >= prefix[i]:
                window.pop()
            window.append(i)

        return best if best <= n else -1


if __name__ == "__main__":
    solution = Solution()

    assert solution.shortestSubarray([1], 1) == 1
    assert solution.shortestSubarray([1, 2], 4) == -1
    assert solution.shortestSubarray([2, -1, 2], 3) == 3
    assert solution.shortestSubarray([84, -37, 32, 40, 95], 167) == 3

    print("All tests passed!")

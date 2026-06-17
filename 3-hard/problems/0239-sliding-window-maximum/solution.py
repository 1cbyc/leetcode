from collections import deque
from typing import List


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result: List[int] = []
        window: deque[int] = deque()

        for index, value in enumerate(nums):
            while window and nums[window[-1]] <= value:
                window.pop()
            window.append(index)

            if window[0] <= index - k:
                window.popleft()

            if index >= k - 1:
                result.append(nums[window[0]])

        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]
    assert solution.maxSlidingWindow([1], 1) == [1]
    assert solution.maxSlidingWindow([9, 8, 7, 6], 2) == [9, 8, 7]

    print("All tests passed!")

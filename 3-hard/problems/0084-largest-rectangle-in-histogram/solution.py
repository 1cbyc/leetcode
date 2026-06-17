from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack: List[int] = []
        largest = 0

        for index, height in enumerate(heights + [0]):
            while stack and heights[stack[-1]] >= height:
                top = stack.pop()
                width = index if not stack else index - stack[-1] - 1
                largest = max(largest, heights[top] * width)
            stack.append(index)

        return largest


if __name__ == "__main__":
    solution = Solution()

    assert solution.largestRectangleArea([2, 1, 5, 6, 2, 3]) == 10
    assert solution.largestRectangleArea([2, 4]) == 4
    assert solution.largestRectangleArea([1]) == 1
    assert solution.largestRectangleArea([5, 5, 5]) == 15

    print("All tests passed!")

from typing import List


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0

        cols = len(matrix[0])
        heights = [0] * cols
        largest = 0

        for row in matrix:
            for index in range(cols):
                heights[index] = heights[index] + 1 if row[index] == "1" else 0
            largest = max(largest, self._largest_in_histogram(heights))

        return largest

    def _largest_in_histogram(self, heights: List[int]) -> int:
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

    assert solution.maximalRectangle(
        [
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"],
        ]
    ) == 6
    assert solution.maximalRectangle([["0"]]) == 0
    assert solution.maximalRectangle([["1"]]) == 1

    print("All tests passed!")

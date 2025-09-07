from typing import List

class Solution:
    def isRectangleCover(self, rectangles: List[List[int]]) -> bool:

        if not rectangles: return False

        min_x = float('inf')
        min_y = float('inf')
        max_x = float('-inf')
        max_y = float('-inf')

        total_area = 0
        corner_count = {}

        for rect in rectangles:
            x1, y1, x2, y2 = rect

            min_x = min(min_x, x1)
            min_y = min(min_y, y1)
            max_x = max(max_x, x2)
            max_y = max(max_y, y2)

            total_area += (x2 - x1) * (y2 - y1)

            corners = [(x1, y1), (x1, y2), (x2, y1), (x2, y2)]
            for corner in corners:
                if corner not in corner_count:
                    corner_count[corner] = 0
                corner_count[corner] += 1

        expected_area = (max_x - min_x) * (max_y - min_y)
        if total_area != expected_area:
            return False

        expected_corners = {(min_x, min_y), (min_x, max_y), (max_x, min_y), (max_x, max_y)}

        for point, count in corner_count.items():
            if point in expected_corners:
                if count != 1:
                    return False
            else:
                if count % 2 != 0:
                    return False

        return True

def test_solution():
    solution = Solution()

    rectangles1 = [
        [1, 1, 2, 2],
        [1, 2, 2, 3],
        [2, 1, 3, 2],
        [2, 2, 3, 3]
    ]
    result1 = solution.isRectangleCover(rectangles1)
    print(f"Test 1 (2x2 perfect rectangle): {result1}")

    rectangles2 = [[0, 0, 1, 1]]
    result2 = solution.isRectangleCover(rectangles2)
    print(f"Test 2 (single rectangle): {result2}")

    rectangles3 = [
        [0, 0, 2, 2],
        [1, 1, 3, 3]
    ]
    result3 = solution.isRectangleCover(rectangles3)
    print(f"Test 3 (overlapping rectangles): {result3}")

    rectangles4 = [
        [0, 0, 1, 1],
        [2, 2, 3, 3]
    ]
    result4 = solution.isRectangleCover(rectangles4)
    print(f"Test 4 (gap in coverage): {result4}")

    rectangles5 = [
        [0, 0, 2, 1],
        [0, 1, 1, 2],
        [1, 1, 2, 2]
    ]
    result5 = solution.isRectangleCover(rectangles5)
    print(f"Test 5 (L-shaped perfect rectangle): {result5}")

    rectangles6 = []
    result6 = solution.isRectangleCover(rectangles6)
    print(f"Test 6 (empty input): {result6}")

if __name__ == "__main__":
    test_solution()
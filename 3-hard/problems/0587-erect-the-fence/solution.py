from typing import List


class Solution:
    def outerTrees(self, trees: List[List[int]]) -> List[List[int]]:
        n = len(trees)
        if n <= 3:
            return trees

        trees.sort(key=lambda p: (p[0], p[1]))

        def cross(a: List[int], b: List[int], c: List[int]) -> int:
            return (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0])

        lower: List[List[int]] = []
        for point in trees:
            while len(lower) >= 2 and cross(lower[-2], lower[-1], point) < 0:
                lower.pop()
            lower.append(point)

        upper: List[List[int]] = []
        for point in reversed(trees):
            while len(upper) >= 2 and cross(upper[-2], upper[-1], point) < 0:
                upper.pop()
            upper.append(point)

        hull = lower[:-1] + upper[:-1]
        seen: set[tuple[int, int]] = set()
        result: List[List[int]] = []
        for point in hull:
            key = (point[0], point[1])
            if key not in seen:
                seen.add(key)
                result.append(point)
        return result


if __name__ == "__main__":
    solution = Solution()

    example1 = [[1, 1], [2, 2], [2, 0], [2, 4], [3, 3], [4, 2]]
    print(solution.outerTrees(example1))

    example2 = [[1, 2], [2, 2], [4, 2]]
    print(solution.outerTrees(example2))

    # all collinear — was duplicating points on merge
    example3 = [[1, 2], [2, 2], [4, 2], [5, 2], [6, 2], [7, 2]]
    print(solution.outerTrees(example3))

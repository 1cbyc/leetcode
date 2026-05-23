from collections import Counter, deque
from typing import List


class UnionFind:
    def __init__(self):
        self.parent = {}
        self.size = {}

    def find(self, node):
        if node not in self.parent:
            self.parent[node] = node
            self.size[node] = 1

        if self.parent[node] != node:
            self.parent[node] = self.find(self.parent[node])

        return self.parent[node]

    def union(self, a, b):
        root_a = self.find(a)
        root_b = self.find(b)

        if root_a == root_b:
            return

        if self.size[root_a] < self.size[root_b]:
            root_a, root_b = root_b, root_a

        self.parent[root_b] = root_a
        self.size[root_a] += self.size[root_b]


class Solution:
    def maxActivated(self, points: List[List[int]]) -> int:
        uf = UnionFind()

        for x, y in points:
            uf.union(("x", x), ("y", y))

        component_points = Counter()
        for x, _ in points:
            component_points[uf.find(("x", x))] += 1

        largest = second_largest = 0
        for size in component_points.values():
            if size > largest:
                largest, second_largest = size, largest
            elif size > second_largest:
                second_largest = size

        return largest + second_largest + 1


def brute_force(points: List[List[int]]) -> int:
    existing = {tuple(point) for point in points}
    candidates = set()

    xs = {x for x, _ in points}
    ys = {y for _, y in points}

    for x in xs:
        for y in ys:
            candidates.add((x, y))

    spare_x = max(xs) + 1
    spare_y = max(ys) + 1
    for x in xs:
        candidates.add((x, spare_y))
    for y in ys:
        candidates.add((spare_x, y))
    candidates.add((spare_x, spare_y))

    by_x = {}
    by_y = {}
    for point in existing:
        by_x.setdefault(point[0], []).append(point)
        by_y.setdefault(point[1], []).append(point)

    best = 0
    for added in candidates - existing:
        activated = {added}
        queue = deque([added])

        while queue:
            x, y = queue.popleft()
            for next_point in by_x.get(x, []):
                if next_point not in activated:
                    activated.add(next_point)
                    queue.append(next_point)
            for next_point in by_y.get(y, []):
                if next_point not in activated:
                    activated.add(next_point)
                    queue.append(next_point)

        best = max(best, len(activated))

    return best


def test_solution():
    solution = Solution()

    cases = [
        ([[1, 1], [1, 2], [2, 2]], 4),
        ([[2, 2], [1, 1], [3, 3]], 3),
        ([[2, 3], [2, 2], [1, 1], [4, 5]], 4),
        ([[0, 0]], 2),
        ([[0, 0], [1, 1], [2, 2], [3, 3]], 3),
        ([[0, 0], [0, 1], [2, 3], [2, 4]], 5),
    ]

    for points, expected in cases:
        assert solution.maxActivated(points) == expected, points

    import random

    coordinates = list(range(5))
    all_points = [(x, y) for x in coordinates for y in coordinates]

    for n in range(1, 9):
        for _ in range(500):
            points = [list(point) for point in random.sample(all_points, n)]
            expected = brute_force(points)
            actual = solution.maxActivated(points)
            assert actual == expected, (points, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()

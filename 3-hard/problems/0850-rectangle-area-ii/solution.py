from typing import List


class SegmentTree:
    def __init__(self, y_coords: List[int]) -> None:
        self.y_coords = y_coords
        self.size = len(y_coords)
        self.counts = [0] * (4 * self.size)
        self.lengths = [0] * (4 * self.size)

    def _push_up(self, node: int, left: int, right: int) -> None:
        if self.counts[node] > 0:
            self.lengths[node] = self.y_coords[right + 1] - self.y_coords[left]
        elif left == right:
            self.lengths[node] = 0
        else:
            self.lengths[node] = self.lengths[node * 2] + self.lengths[node * 2 + 1]

    def _update(self, node: int, left: int, right: int, ql: int, qr: int, delta: int) -> None:
        if ql > right or qr < left:
            return
        if ql <= left and right <= qr:
            self.counts[node] += delta
            self._push_up(node, left, right)
            return

        mid = (left + right) // 2
        self._update(node * 2, left, mid, ql, qr, delta)
        self._update(node * 2 + 1, mid + 1, right, ql, qr, delta)
        self._push_up(node, left, right)

    def update(self, left_index: int, right_index: int, delta: int) -> None:
        if left_index <= right_index:
            self._update(1, 0, self.size - 2, left_index, right_index, delta)

    def total_length(self) -> int:
        return self.lengths[1]


class Solution:
    def rectangleArea(self, rectangles: List[List[int]]) -> int:
        mod = 10**9 + 7
        events: List[tuple[int, int, int, int]] = []
        y_values = set()

        for x1, y1, x2, y2 in rectangles:
            events.append((x1, y1, y2, 1))
            events.append((x2, y1, y2, -1))
            y_values.add(y1)
            y_values.add(y2)

        y_coords = sorted(y_values)
        y_index = {value: index for index, value in enumerate(y_coords)}
        events.sort()
        tree = SegmentTree(y_coords)

        area = 0
        for index, (x, y1, y2, delta) in enumerate(events):
            if index:
                width = x - events[index - 1][0]
                area = (area + tree.total_length() * width) % mod

            tree.update(y_index[y1], y_index[y2] - 1, delta)

        return area


if __name__ == "__main__":
    solution = Solution()

    assert solution.rectangleArea([[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]]) == 6
    assert solution.rectangleArea([[0, 0, 2, 2], [0, 0, 2, 2]]) == 4
    assert solution.rectangleArea([[0, 0, 1000000000, 1000000000]]) == 49
    assert solution.rectangleArea([[0, 0, 1, 1]]) == 1

    print("All tests passed!")

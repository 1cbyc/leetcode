import heapq
from typing import List


class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        events = []
        for left, right, height in buildings:
            events.append((left, -height, right))
            events.append((right, 0, 0))

        events.sort()
        result: List[List[int]] = [[0, 0]]
        heap = [(0, float("inf"))]

        for position, negative_height, right in events:
            while heap[0][1] <= position:
                heapq.heappop(heap)
            if negative_height != 0:
                heapq.heappush(heap, (negative_height, right))

            highest = -heap[0][0]
            if result[-1][1] != highest:
                result.append([position, highest])

        return result[1:]


if __name__ == "__main__":
    solution = Solution()

    assert solution.getSkyline(
        [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]
    ) == [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]
    assert solution.getSkyline([[0, 2, 3], [2, 5, 3]]) == [[0, 3], [5, 0]]

    print("All tests passed!")

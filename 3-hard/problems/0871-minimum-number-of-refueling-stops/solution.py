import heapq
from typing import List


class Solution:
    def minRefuelStops(
        self, target: int, start_fuel: int, stations: List[List[int]]
    ) -> int:
        max_heap: List[int] = []
        stops = 0
        previous_position = 0

        for position, fuel in [*stations, [target, 0]]:
            distance = position - previous_position
            start_fuel -= distance

            while start_fuel < 0 and max_heap:
                start_fuel -= heapq.heappop(max_heap)
                stops += 1

            if start_fuel < 0:
                return -1

            if fuel:
                heapq.heappush(max_heap, -fuel)

            previous_position = position

        return stops


if __name__ == "__main__":
    solution = Solution()

    assert solution.minRefuelStops(1, 1, []) == 0
    assert solution.minRefuelStops(100, 1, [[10, 100]]) == -1
    assert solution.minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]) == 2
    assert solution.minRefuelStops(100, 100, [[10, 100]]) == 0

    print("All tests passed!")

from collections import defaultdict, deque
from typing import List


class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        if source == target:
            return 0

        stop_to_routes = defaultdict(list)
        for route_index, stops in enumerate(routes):
            for stop in stops:
                stop_to_routes[stop].append(route_index)

        queue = deque([(source, 0)])
        visited_stops = {source}
        visited_routes = set()

        while queue:
            stop, buses = queue.popleft()
            for route_index in stop_to_routes[stop]:
                if route_index in visited_routes:
                    continue
                visited_routes.add(route_index)
                for next_stop in routes[route_index]:
                    if next_stop == target:
                        return buses + 1
                    if next_stop not in visited_stops:
                        visited_stops.add(next_stop)
                        queue.append((next_stop, buses + 1))

        return -1


if __name__ == "__main__":
    solution = Solution()

    assert solution.numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6) == 2
    assert solution.numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12) == -1
    assert solution.numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 1) == 0

    print("All tests passed!")

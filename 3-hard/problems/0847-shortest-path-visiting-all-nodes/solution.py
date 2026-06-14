from collections import deque
from typing import List


class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        node_count = len(graph)
        goal = (1 << node_count) - 1
        queue = deque((node, 1 << node) for node in range(node_count))
        seen = {(node, 1 << node) for node in range(node_count)}
        steps = 0

        while queue:
            for _ in range(len(queue)):
                node, visited = queue.popleft()
                if visited == goal:
                    return steps

                for neighbor in graph[node]:
                    next_visited = visited | (1 << neighbor)
                    state = (neighbor, next_visited)
                    if state not in seen:
                        seen.add(state)
                        queue.append(state)

            steps += 1

        return -1


if __name__ == "__main__":
    solution = Solution()

    assert solution.shortestPathLength([[1, 2, 3], [0], [0], [0]]) == 4
    assert solution.shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]) == 4
    assert solution.shortestPathLength([[]]) == 0
    assert solution.shortestPathLength([[1], [0]]) == 1

    print("All tests passed!")

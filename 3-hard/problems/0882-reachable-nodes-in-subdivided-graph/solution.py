import heapq
from collections import defaultdict
from typing import List


class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
        graph = defaultdict(dict)
        for u, v, count in edges:
            graph[u][v] = count
            graph[v][u] = count

        distances = {}
        heap = [(0, 0)]

        while heap:
            dist, node = heapq.heappop(heap)
            if node in distances:
                continue
            distances[node] = dist
            for neighbor, count in graph[node].items():
                next_dist = dist + count + 1
                if neighbor not in distances and next_dist <= maxMoves:
                    heapq.heappush(heap, (next_dist, neighbor))

        reached = len(distances)

        for u, v, count in edges:
            from_u = max(0, maxMoves - distances[u]) if u in distances else 0
            from_v = max(0, maxMoves - distances[v]) if v in distances else 0
            reached += min(count, from_u + from_v)

        return reached


if __name__ == "__main__":
    solution = Solution()

    assert solution.reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3) == 13
    assert solution.reachableNodes([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4) == 23
    assert solution.reachableNodes([[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5) == 1

    print("All tests passed!")

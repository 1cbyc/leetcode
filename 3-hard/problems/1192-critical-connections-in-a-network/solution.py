from typing import List


class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        graph = [[] for _ in range(n)]
        for a, b in connections:
            graph[a].append(b)
            graph[b].append(a)

        discovery = [-1] * n
        low = [0] * n
        bridges = []
        timer = [0]

        def dfs(node: int, parent: int) -> None:
            discovery[node] = low[node] = timer[0]
            timer[0] += 1
            for neighbor in graph[node]:
                if neighbor == parent:
                    continue
                if discovery[neighbor] == -1:
                    dfs(neighbor, node)
                    low[node] = min(low[node], low[neighbor])
                    if low[neighbor] > discovery[node]:
                        bridges.append([node, neighbor])
                else:
                    low[node] = min(low[node], discovery[neighbor])

        import sys
        sys.setrecursionlimit(10**6)
        for start in range(n):
            if discovery[start] == -1:
                dfs(start, -1)

        return bridges


if __name__ == "__main__":
    solution = Solution()

    result = solution.criticalConnections(4, [[0, 1], [1, 2], [2, 0], [1, 3]])
    assert sorted(sorted(edge) for edge in result) == [[1, 3]]

    result2 = solution.criticalConnections(2, [[0, 1]])
    assert sorted(sorted(edge) for edge in result2) == [[0, 1]]

    print("All tests passed!")

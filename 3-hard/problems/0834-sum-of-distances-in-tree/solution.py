from typing import List


class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
        graph = [[] for _ in range(n)]
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        count = [1] * n
        answer = [0] * n

        order = []
        parent = [-1] * n
        stack = [0]
        visited = [False] * n
        visited[0] = True
        while stack:
            node = stack.pop()
            order.append(node)
            for neighbor in graph[node]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    parent[neighbor] = node
                    stack.append(neighbor)

        for node in reversed(order):
            if parent[node] != -1:
                count[parent[node]] += count[node]
                answer[parent[node]] += answer[node] + count[node]

        for node in order:
            if parent[node] != -1:
                answer[node] = answer[parent[node]] - count[node] + (n - count[node])

        return answer


if __name__ == "__main__":
    solution = Solution()

    assert solution.sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]) == [8, 12, 6, 10, 10, 10]
    assert solution.sumOfDistancesInTree(1, []) == [0]
    assert solution.sumOfDistancesInTree(2, [[1, 0]]) == [1, 1]

    print("All tests passed!")

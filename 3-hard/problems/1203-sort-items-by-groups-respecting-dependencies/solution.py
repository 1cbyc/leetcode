from collections import defaultdict
from typing import List


class Solution:
    def sortItems(
        self, n: int, m: int, group: List[int], beforeItems: List[List[int]]
    ) -> List[int]:
        for i in range(n):
            if group[i] == -1:
                group[i] = m
                m += 1

        item_graph = defaultdict(list)
        group_graph = defaultdict(list)
        item_indegree = [0] * n
        group_indegree = [0] * m

        for item, befores in enumerate(beforeItems):
            for before in befores:
                item_graph[before].append(item)
                item_indegree[item] += 1
                if group[before] != group[item]:
                    group_graph[group[before]].append(group[item])
                    group_indegree[group[item]] += 1

        def topo_sort(nodes, graph, indegree):
            order = []
            stack = [node for node in nodes if indegree[node] == 0]
            while stack:
                node = stack.pop()
                order.append(node)
                for neighbor in graph[node]:
                    indegree[neighbor] -= 1
                    if indegree[neighbor] == 0:
                        stack.append(neighbor)
            return order if len(order) == len(nodes) else []

        item_order = topo_sort(range(n), item_graph, item_indegree)
        group_order = topo_sort(range(m), group_graph, group_indegree)

        if not item_order or not group_order:
            return []

        grouped = defaultdict(list)
        for item in item_order:
            grouped[group[item]].append(item)

        result = []
        for grp in group_order:
            result.extend(grouped[grp])

        return result


if __name__ == "__main__":
    solution = Solution()

    def valid(result, n, group, beforeItems):
        if len(result) != n:
            return False
        position = {item: i for i, item in enumerate(result)}
        for item, befores in enumerate(beforeItems):
            for before in befores:
                if position[before] > position[item]:
                    return False
        return True

    n, m = 8, 2
    group = [-1, -1, 1, 0, 0, 1, 0, -1]
    before = [[], [6], [5], [6], [3, 6], [], [], []]
    result = solution.sortItems(n, m, list(group), before)
    assert valid(result, n, group, before)

    assert solution.sortItems(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3], [], [4], []]) == []

    print("All tests passed!")

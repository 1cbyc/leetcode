from collections import deque
from typing import List


class Solution:
    def evenSumSubgraphs(self, nums: List[int], edges: List[List[int]]) -> int:
        n = len(nums)
        adjacent = [0] * n

        for u, v in edges:
            adjacent[u] |= 1 << v
            adjacent[v] |= 1 << u

        size = 1 << n
        connected = [False] * size
        parity = [0] * size
        answer = 0

        for mask in range(1, size):
            bit = mask & -mask
            node = bit.bit_length() - 1
            rest = mask ^ bit
            parity[mask] = parity[rest] ^ nums[node]

            if rest == 0:
                connected[mask] = True
            else:
                submask = mask
                while submask:
                    node_bit = submask & -submask
                    node = node_bit.bit_length() - 1
                    without_node = mask ^ node_bit

                    if connected[without_node] and adjacent[node] & without_node:
                        connected[mask] = True
                        break

                    submask ^= node_bit

            if connected[mask] and parity[mask] == 0:
                answer += 1

        return answer


def brute_force(nums: List[int], edges: List[List[int]]) -> int:
    n = len(nums)
    graph = [[] for _ in range(n)]

    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)

    answer = 0

    for mask in range(1, 1 << n):
        total = sum(nums[i] for i in range(n) if mask >> i & 1)
        if total % 2:
            continue

        start = next(i for i in range(n) if mask >> i & 1)
        seen = 1 << start
        queue = deque([start])

        while queue:
            node = queue.popleft()
            for nei in graph[node]:
                if mask >> nei & 1 and not (seen >> nei & 1):
                    seen |= 1 << nei
                    queue.append(nei)

        if seen == mask:
            answer += 1

    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([1, 0, 1], [[0, 1], [1, 2]], 2),
        ([1], [], 0),
        ([0], [], 1),
        ([0, 0], [], 2),
        ([0, 0], [[0, 1]], 3),
        ([1, 1], [[0, 1]], 1),
        ([1, 0, 1, 0], [[0, 1], [1, 2], [2, 3]], 4),
    ]

    for nums, edges, expected in cases:
        assert solution.evenSumSubgraphs(nums, edges) == expected, (nums, edges)

    import random

    for n in range(1, 12):
        all_edges = [(i, j) for i in range(n) for j in range(i + 1, n)]

        for _ in range(300):
            nums = [random.randint(0, 1) for _ in range(n)]
            edges = [list(edge) for edge in all_edges if random.random() < 0.25]
            expected = brute_force(nums, edges)
            actual = solution.evenSumSubgraphs(nums, edges)
            assert actual == expected, (nums, edges, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()

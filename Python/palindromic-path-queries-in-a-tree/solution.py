from collections import deque
from typing import List


class FenwickXor:
    def __init__(self, n: int):
        self.n = n
        self.tree = [0] * (n + 2)

    def add(self, index: int, value: int) -> None:
        index += 1
        while index <= self.n + 1:
            self.tree[index] ^= value
            index += index & -index

    def range_xor(self, left: int, right: int, value: int) -> None:
        self.add(left, value)
        self.add(right, value)

    def get(self, index: int) -> int:
        index += 1
        result = 0
        while index:
            result ^= self.tree[index]
            index -= index & -index
        return result


class Solution:
    def palindromePath(
        self,
        n: int,
        edges: List[List[int]],
        s: str,
        queries: List[str],
    ) -> List[bool]:
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        log = n.bit_length()
        depth = [0] * n
        tin = [0] * n
        tout = [0] * n
        parent = [0] * n
        base_mask = [0] * n
        timer = 0

        stack = [(0, 0, 0, 0, 0)]
        while stack:
            node, par, dep, mask, state = stack.pop()

            if state:
                tout[node] = timer
                continue

            parent[node] = par
            depth[node] = dep
            mask ^= 1 << (ord(s[node]) - ord("a"))
            base_mask[node] = mask
            tin[node] = timer
            timer += 1

            stack.append((node, par, dep, mask, 1))
            for nei in reversed(graph[node]):
                if nei != par:
                    stack.append((nei, node, dep + 1, mask, 0))

        up = [parent]
        for level in range(1, log):
            prev = up[-1]
            up.append([prev[prev[node]] for node in range(n)])

        def lca(u: int, v: int) -> int:
            if depth[u] < depth[v]:
                u, v = v, u

            diff = depth[u] - depth[v]
            bit = 0
            while diff:
                if diff & 1:
                    u = up[bit][u]
                diff >>= 1
                bit += 1

            if u == v:
                return u

            for level in range(log - 1, -1, -1):
                if up[level][u] != up[level][v]:
                    u = up[level][u]
                    v = up[level][v]

            return up[0][u]

        fenwick = FenwickXor(n)
        node_bits = [1 << (ord(c) - ord("a")) for c in s]
        letters = list(s)
        answer = []

        def current_prefix(node: int) -> int:
            return base_mask[node] ^ fenwick.get(tin[node])

        for query in queries:
            parts = query.split()

            if parts[0] == "update":
                node = int(parts[1])
                char = parts[2]

                if letters[node] == char:
                    continue

                old_bit = node_bits[node]
                new_bit = 1 << (ord(char) - ord("a"))
                delta = old_bit ^ new_bit

                letters[node] = char
                node_bits[node] = new_bit
                fenwick.range_xor(tin[node], tout[node], delta)
            else:
                u = int(parts[1])
                v = int(parts[2])
                ancestor = lca(u, v)
                mask = current_prefix(u) ^ current_prefix(v) ^ node_bits[ancestor]
                answer.append(mask & (mask - 1) == 0)

        return answer

    def pathQueries(
        self,
        n: int,
        edges: List[List[int]],
        s: str,
        queries: List[str],
    ) -> List[bool]:
        return self.palindromePath(n, edges, s, queries)


def brute_force(n: int, edges: List[List[int]], s: str, queries: List[str]) -> List[bool]:
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)

    letters = list(s)
    answer = []

    for query in queries:
        parts = query.split()

        if parts[0] == "update":
            letters[int(parts[1])] = parts[2]
            continue

        start, target = int(parts[1]), int(parts[2])
        parent = [-1] * n
        queue = deque([start])
        parent[start] = start

        while queue:
            node = queue.popleft()
            if node == target:
                break
            for nei in graph[node]:
                if parent[nei] == -1:
                    parent[nei] = node
                    queue.append(nei)

        mask = 0
        node = target
        while node != start:
            mask ^= 1 << (ord(letters[node]) - ord("a"))
            node = parent[node]
        mask ^= 1 << (ord(letters[start]) - ord("a"))
        answer.append(mask & (mask - 1) == 0)

    return answer


def test_solution():
    solution = Solution()

    assert solution.palindromePath(
        3,
        [[0, 1], [1, 2]],
        "aac",
        ["query 0 2", "update 1 b", "query 0 2"],
    ) == [True, False]

    assert solution.palindromePath(
        4,
        [[0, 1], [0, 2], [0, 3]],
        "abca",
        ["query 1 2", "update 0 b", "query 2 3", "update 3 a", "query 1 3"],
    ) == [False, False, True]

    import random

    for n in range(1, 20):
        for _ in range(200):
            edges = [[i, random.randrange(i)] for i in range(1, n)]
            s = "".join(random.choice("abc") for _ in range(n))
            queries = []

            for _ in range(40):
                if random.random() < 0.35:
                    queries.append(f"update {random.randrange(n)} {random.choice('abc')}")
                else:
                    queries.append(f"query {random.randrange(n)} {random.randrange(n)}")

            expected = brute_force(n, edges, s, queries)
            actual = solution.palindromePath(n, edges, s, queries)
            assert actual == expected, (n, edges, s, queries, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()

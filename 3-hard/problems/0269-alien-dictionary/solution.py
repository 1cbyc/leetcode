from collections import defaultdict, deque
from typing import List


class Solution:
    def alienOrder(self, words: List[str]) -> str:
        adjacency: dict[str, set[str]] = defaultdict(set)
        indegree = {char: 0 for word in words for char in word}

        for first, second in zip(words, words[1:]):
            for a, b in zip(first, second):
                if a != b:
                    if b not in adjacency[a]:
                        adjacency[a].add(b)
                        indegree[b] += 1
                    break
            else:
                if len(first) > len(second):
                    return ""

        queue = deque([char for char in indegree if indegree[char] == 0])
        order = []

        while queue:
            char = queue.popleft()
            order.append(char)
            for neighbor in adjacency[char]:
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0:
                    queue.append(neighbor)

        if len(order) != len(indegree):
            return ""
        return "".join(order)


if __name__ == "__main__":
    solution = Solution()

    assert solution.alienOrder(["wrt", "wrf", "er", "ett", "rftt"]) == "wertf"
    assert solution.alienOrder(["z", "x"]) == "zx"
    assert solution.alienOrder(["z", "x", "z"]) == ""
    assert solution.alienOrder(["abc", "ab"]) == ""

    print("All tests passed!")

from collections import deque
from typing import List


class Solution:
    def catMouseGame(self, graph: List[List[int]]) -> int:
        n = len(graph)
        DRAW, MOUSE, CAT = 0, 1, 2

        # color[mouse][cat][turn], turn 0 = mouse moves, 1 = cat moves
        color = [[[DRAW] * 2 for _ in range(n)] for _ in range(n)]
        degree = [[[0] * 2 for _ in range(n)] for _ in range(n)]

        for mouse in range(n):
            for cat in range(n):
                degree[mouse][cat][0] = len(graph[mouse])
                degree[mouse][cat][1] = len(graph[cat])
                for neighbor in graph[cat]:
                    if neighbor == 0:
                        degree[mouse][cat][1] -= 1

        queue = deque()
        for cat in range(n):
            for turn in range(2):
                color[0][cat][turn] = MOUSE
                queue.append((0, cat, turn, MOUSE))
                if cat > 0:
                    color[cat][cat][turn] = CAT
                    queue.append((cat, cat, turn, CAT))

        while queue:
            mouse, cat, turn, result = queue.popleft()
            for prev_mouse, prev_cat, prev_turn in self._parents(graph, mouse, cat, turn):
                if color[prev_mouse][prev_cat][prev_turn] != DRAW:
                    continue
                winning_player = MOUSE if prev_turn == 0 else CAT
                if result == winning_player:
                    color[prev_mouse][prev_cat][prev_turn] = result
                    queue.append((prev_mouse, prev_cat, prev_turn, result))
                else:
                    degree[prev_mouse][prev_cat][prev_turn] -= 1
                    if degree[prev_mouse][prev_cat][prev_turn] == 0:
                        color[prev_mouse][prev_cat][prev_turn] = result
                        queue.append((prev_mouse, prev_cat, prev_turn, result))

        return color[1][2][0]

    def _parents(self, graph, mouse, cat, turn):
        result = []
        if turn == 0:
            for prev_cat in graph[cat]:
                if prev_cat != 0:
                    result.append((mouse, prev_cat, 1))
        else:
            for prev_mouse in graph[mouse]:
                result.append((prev_mouse, cat, 0))
        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.catMouseGame([[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]]) == 0
    assert solution.catMouseGame([[1, 3], [0], [3], [0, 2]]) == 1

    print("All tests passed!")

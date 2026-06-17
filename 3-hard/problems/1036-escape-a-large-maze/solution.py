from typing import List


class Solution:
    def isEscapePossible(
        self, blocked: List[List[int]], source: List[int], target: List[int]
    ) -> bool:
        if not blocked:
            return True

        block_set = {(r, c) for r, c in blocked}
        bound = 10**6
        # With B blocked cells, the maximum enclosed area is B*(B-1)/2.
        max_area = len(blocked) * (len(blocked) - 1) // 2

        def bfs(start: List[int], goal: List[int]) -> bool:
            visited = set()
            stack = [(start[0], start[1])]
            visited.add((start[0], start[1]))

            while stack:
                r, c = stack.pop()
                if (r, c) == (goal[0], goal[1]):
                    return True
                if len(visited) > max_area:
                    return True
                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nr, nc = r + dr, c + dc
                    if (
                        0 <= nr < bound
                        and 0 <= nc < bound
                        and (nr, nc) not in visited
                        and (nr, nc) not in block_set
                    ):
                        visited.add((nr, nc))
                        stack.append((nr, nc))

            return False

        return bfs(source, target) and bfs(target, source)


if __name__ == "__main__":
    solution = Solution()

    assert solution.isEscapePossible([[0, 1], [1, 0]], [0, 0], [0, 2]) is False
    assert solution.isEscapePossible([], [0, 0], [999999, 999999]) is True
    assert solution.isEscapePossible([[100, 100]], [0, 0], [999999, 999999]) is True

    print("All tests passed!")

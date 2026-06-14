from typing import List, Set, Tuple


class Solution:
    def containVirus(self, is_infected: List[List[int]]) -> int:
        rows = len(is_infected)
        cols = len(is_infected[0])
        walls = 0
        directions = ((0, -1), (0, 1), (-1, 0), (1, 0))

        while True:
            visited = [[False] * cols for _ in range(rows)]
            regions: List[List[Tuple[int, int]]] = []
            wall_counts: List[int] = []
            threatened: List[Set[Tuple[int, int]]] = []

            def dfs(row: int, col: int) -> None:
                visited[row][col] = True
                regions[-1].append((row, col))
                region_index = len(regions) - 1

                for delta_row, delta_col in directions:
                    next_row = row + delta_row
                    next_col = col + delta_col
                    if not (0 <= next_row < rows and 0 <= next_col < cols):
                        continue

                    if is_infected[next_row][next_col] == 1 and not visited[next_row][next_col]:
                        dfs(next_row, next_col)
                    elif is_infected[next_row][next_col] == 0:
                        wall_counts[region_index] += 1
                        threatened[region_index].add((next_row, next_col))

            for row in range(rows):
                for col in range(cols):
                    if is_infected[row][col] == 1 and not visited[row][col]:
                        regions.append([])
                        wall_counts.append(0)
                        threatened.append(set())
                        dfs(row, col)

            if not regions:
                break

            quarantine_index = max(
                range(len(threatened)), key=lambda index: len(threatened[index])
            )
            walls += wall_counts[quarantine_index]

            for index, region in enumerate(regions):
                if index == quarantine_index:
                    for row, col in region:
                        is_infected[row][col] = -1
                else:
                    for row, col in region:
                        for delta_row, delta_col in directions:
                            next_row = row + delta_row
                            next_col = col + delta_col
                            if (
                                0 <= next_row < rows
                                and 0 <= next_col < cols
                                and is_infected[next_row][next_col] == 0
                            ):
                                is_infected[next_row][next_col] = 1

        return walls


if __name__ == "__main__":
    solution = Solution()

    assert solution.containVirus(
        [
            [0, 1, 0, 0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    ) == 10

    assert solution.containVirus([[1, 1, 1], [1, 0, 1], [1, 1, 1]]) == 4

    assert solution.containVirus(
        [
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
        ]
    ) == 13

    print("All tests passed!")

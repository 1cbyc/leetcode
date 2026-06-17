from typing import List


class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]
        empties = []

        for row in range(9):
            for col in range(9):
                value = board[row][col]
                if value == ".":
                    empties.append((row, col))
                else:
                    rows[row].add(value)
                    cols[col].add(value)
                    boxes[(row // 3) * 3 + col // 3].add(value)

        def backtrack(index: int) -> bool:
            if index == len(empties):
                return True

            row, col = empties[index]
            box = (row // 3) * 3 + col // 3
            for digit in "123456789":
                if digit in rows[row] or digit in cols[col] or digit in boxes[box]:
                    continue

                board[row][col] = digit
                rows[row].add(digit)
                cols[col].add(digit)
                boxes[box].add(digit)

                if backtrack(index + 1):
                    return True

                board[row][col] = "."
                rows[row].remove(digit)
                cols[col].remove(digit)
                boxes[box].remove(digit)

            return False

        backtrack(0)


def is_valid_solution(board: List[List[str]]) -> bool:
    for index in range(9):
        row = [board[index][col] for col in range(9)]
        col = [board[r][index] for r in range(9)]
        if sorted(row) != list("123456789") or sorted(col) != list("123456789"):
            return False

    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):
            cells = [
                board[box_row + r][box_col + c] for r in range(3) for c in range(3)
            ]
            if sorted(cells) != list("123456789"):
                return False

    return True


if __name__ == "__main__":
    solution = Solution()

    grid = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]
    solution.solveSudoku(grid)
    assert is_valid_solution(grid)

    print("All tests passed!")

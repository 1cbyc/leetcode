from typing import List


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        solutions: List[List[str]] = []
        columns = set()
        diagonals = set()
        anti_diagonals = set()
        placement = [-1] * n

        def backtrack(row: int) -> None:
            if row == n:
                board = [
                    "." * placement[r] + "Q" + "." * (n - placement[r] - 1)
                    for r in range(n)
                ]
                solutions.append(board)
                return

            for col in range(n):
                if col in columns or (row - col) in diagonals or (row + col) in anti_diagonals:
                    continue

                columns.add(col)
                diagonals.add(row - col)
                anti_diagonals.add(row + col)
                placement[row] = col

                backtrack(row + 1)

                columns.remove(col)
                diagonals.remove(row - col)
                anti_diagonals.remove(row + col)

        backtrack(0)
        return solutions


if __name__ == "__main__":
    solution = Solution()

    result = solution.solveNQueens(4)
    assert len(result) == 2
    assert [".Q..", "...Q", "Q...", "..Q."] in result
    assert len(solution.solveNQueens(1)) == 1
    assert len(solution.solveNQueens(8)) == 92

    print("All tests passed!")

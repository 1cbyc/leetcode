class Solution:
    def totalNQueens(self, n: int) -> int:
        columns = set()
        diagonals = set()
        anti_diagonals = set()

        def backtrack(row: int) -> int:
            if row == n:
                return 1

            count = 0
            for col in range(n):
                if col in columns or (row - col) in diagonals or (row + col) in anti_diagonals:
                    continue

                columns.add(col)
                diagonals.add(row - col)
                anti_diagonals.add(row + col)

                count += backtrack(row + 1)

                columns.remove(col)
                diagonals.remove(row - col)
                anti_diagonals.remove(row + col)

            return count

        return backtrack(0)


if __name__ == "__main__":
    solution = Solution()

    assert solution.totalNQueens(4) == 2
    assert solution.totalNQueens(1) == 1
    assert solution.totalNQueens(8) == 92

    print("All tests passed!")

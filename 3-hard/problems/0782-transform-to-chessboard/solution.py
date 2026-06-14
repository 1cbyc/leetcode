from typing import List


class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        size = len(board)

        if any(
            board[0][0] ^ board[row][0] ^ board[0][col] ^ board[row][col]
            for row in range(size)
            for col in range(size)
        ):
            return -1

        row_sum = sum(board[0])
        col_sum = sum(board[row][0] for row in range(size))

        if row_sum not in (size // 2, (size + 1) // 2):
            return -1
        if col_sum not in (size // 2, (size + 1) // 2):
            return -1

        row_swaps = sum(board[row][0] == (row & 1) for row in range(size))
        col_swaps = sum(board[0][col] == (col & 1) for col in range(size))

        if size % 2 == 1:
            if row_swaps % 2 == 1:
                row_swaps = size - row_swaps
            if col_swaps % 2 == 1:
                col_swaps = size - col_swaps
        else:
            row_swaps = min(row_swaps, size - row_swaps)
            col_swaps = min(col_swaps, size - col_swaps)

        return (row_swaps + col_swaps) // 2


if __name__ == "__main__":
    solution = Solution()

    assert (
        solution.movesToChessboard(
            [[0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1]]
        )
        == 2
    )
    assert solution.movesToChessboard([[0, 1], [1, 0]]) == 0
    assert solution.movesToChessboard([[1, 0], [1, 0]]) == -1

    print("All tests passed!")

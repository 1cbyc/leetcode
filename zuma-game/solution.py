from collections import Counter

class Solution:
    def findMinStep(self, board: str, hand: str) -> int:
        def dfs(board, hand):
            if not board:
                return 0
            if not hand:
                return float('inf')

            res = float('inf')
            i = 0
            while i < len(board):
                j = i + 1
                while j < len(board) and board[j] == board[i]:
                    j += 1
                need = 3 - (j - i)
                if hand[board[i]] >= need:
                    new_hand = hand.copy()
                    new_hand[board[i]] -= need
                    new_board = board[:i] + board[j:]
                    new_board = Solution.shrink(new_board)
                    res = min(res, need + dfs(new_board, new_hand))
                i = j

            return res

        board_count = Counter(board)
        hand_count = Counter(hand)
        result = dfs(board, hand_count)
        return -1 if result == float('inf') else result

    @staticmethod
    def shrink(board):
        i = 0
        while i < len(board):
            j = i + 1
            while j < len(board) and board[j] == board[i]:
                j += 1
            if j - i >= 3:
                return Solution.shrink(board[:i] + board[j:])
            i = j
        return board

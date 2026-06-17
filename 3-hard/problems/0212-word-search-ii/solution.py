from typing import Dict, List


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie: Dict = {}
        for word in words:
            node = trie
            for char in word:
                node = node.setdefault(char, {})
            node["$"] = word

        rows, cols = len(board), len(board[0])
        found: List[str] = []

        def dfs(row: int, col: int, node: Dict) -> None:
            char = board[row][col]
            if char not in node:
                return

            next_node = node[char]
            word = next_node.pop("$", None)
            if word is not None:
                found.append(word)

            board[row][col] = "#"
            for delta_row, delta_col in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                next_row, next_col = row + delta_row, col + delta_col
                if 0 <= next_row < rows and 0 <= next_col < cols and board[next_row][next_col] != "#":
                    dfs(next_row, next_col, next_node)
            board[row][col] = char

            if not next_node:
                node.pop(char, None)

        for row in range(rows):
            for col in range(cols):
                dfs(row, col, trie)

        return found


if __name__ == "__main__":
    solution = Solution()

    assert sorted(
        solution.findWords(
            [
                ["o", "a", "a", "n"],
                ["e", "t", "a", "e"],
                ["i", "h", "k", "r"],
                ["i", "f", "l", "v"],
            ],
            ["oath", "pea", "eat", "rain"],
        )
    ) == ["eat", "oath"]
    assert solution.findWords([["a", "b"], ["c", "d"]], ["abcb"]) == []

    print("All tests passed!")

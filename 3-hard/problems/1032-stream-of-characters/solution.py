from typing import List, Optional


class TrieNode:
    def __init__(self) -> None:
        self.children: List[Optional["TrieNode"]] = [None] * 26
        self.is_end = False


class StreamChecker:
    def __init__(self, words: List[str]) -> None:
        self.root = TrieNode()
        self.stream: List[str] = []
        self.limit = max((len(word) for word in words), default=0)

        for word in words:
            node = self.root
            for char in reversed(word):
                index = ord(char) - ord("a")
                if node.children[index] is None:
                    node.children[index] = TrieNode()
                node = node.children[index]
            node.is_end = True

    def query(self, letter: str) -> bool:
        self.stream.append(letter)
        node = self.root

        for char in reversed(self.stream[-self.limit :]):
            index = ord(char) - ord("a")
            if node.children[index] is None:
                return False
            node = node.children[index]
            if node.is_end:
                return True

        return False


if __name__ == "__main__":
    checker = StreamChecker(["cd", "f", "kl"])
    expected = [
        False,
        False,
        False,
        True,
        False,
        True,
        False,
        False,
        False,
        False,
        False,
        True,
    ]
    letters = list("abcdefghijkl")

    for letter, want in zip(letters, expected):
        assert checker.query(letter) == want

    xyz_checker = StreamChecker(["abc", "xyz"])
    assert xyz_checker.query("a") is False
    assert xyz_checker.query("x") is False
    assert xyz_checker.query("y") is False
    assert xyz_checker.query("z") is True

    print("All tests passed!")

class WordFilter:
    def __init__(self, words: list[str]):
        self.trie = {}
        for i, word in enumerate(words):
            word_len = len(word)
            for j in range(word_len + 1):
                suffix = word[j:]
                current = self.trie
                key = suffix + '#' + word
                for char in key:
                    if char not in current:
                        current[char] = {}
                    current = current[char]
                    current['weight'] = i

    def f(self, pref: str, suff: str) -> int:
        current = self.trie
        key = suff + '#' + pref
        for char in key:
            if char not in current:
                return -1
            current = current[char]
        return current['weight']

def test_solution():
    wf = WordFilter(["apple"])
    assert wf.f("a", "e") == 0
    assert wf.f("ap", "le") == 0
    assert wf.f("b", "e") == -1
    
    wf2 = WordFilter(["apple", "apply"])
    assert wf2.f("a", "y") == 1
    assert wf2.f("a", "e") == 0
    print("Tests passed")

if __name__ == "__main__":
    test_solution()

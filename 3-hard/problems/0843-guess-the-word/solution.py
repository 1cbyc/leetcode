from typing import List


class Master:
    def __init__(self, secret: str, words: List[str]) -> None:
        self._secret = secret
        self._allowed = set(words)
        self.guesses = 0

    def guess(self, word: str) -> int:
        self.guesses += 1
        if word not in self._allowed:
            return -1
        return sum(a == b for a, b in zip(word, self._secret))


class Solution:
    def findSecretWord(self, words: List[str], master: "Master") -> None:
        def matches(a: str, b: str) -> int:
            return sum(x == y for x, y in zip(a, b))

        candidates = words
        for _ in range(10):
            if not candidates:
                return
            guess = self._pick(candidates, matches)
            score = master.guess(guess)
            if score == 6:
                return
            candidates = [word for word in candidates if matches(word, guess) == score]

    def _pick(self, candidates: List[str], matches) -> str:
        best_word = candidates[0]
        best_worst = len(candidates) + 1

        for candidate in candidates:
            buckets = [0] * 7
            for other in candidates:
                buckets[matches(candidate, other)] += 1
            worst = max(buckets)
            if worst < best_worst:
                best_worst = worst
                best_word = candidate

        return best_word


if __name__ == "__main__":
    solution = Solution()

    words = ["acckzz", "ccbazz", "eiowzz", "abcczz"]
    master = Master("acckzz", words)
    solution.findSecretWord(words, master)
    assert master.guess("acckzz") == 6
    assert master.guesses <= 11

    words2 = ["hamada", "khaled"]
    master2 = Master("hamada", words2)
    solution.findSecretWord(words2, master2)
    assert master2.guess("hamada") == 6

    print("All tests passed!")

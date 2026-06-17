from collections import Counter
from typing import List


class Solution:
    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:
        word_masks = Counter()
        for word in words:
            mask = 0
            for char in word:
                mask |= 1 << (ord(char) - ord("a"))
            word_masks[mask] += 1

        result = []
        for puzzle in puzzles:
            first = 1 << (ord(puzzle[0]) - ord("a"))
            rest = puzzle[1:]
            total = 0

            rest_bits = [ord(c) - ord("a") for c in rest]
            k = len(rest_bits)
            for subset in range(1 << k):
                mask = first
                bits = subset
                index = 0
                while bits:
                    if bits & 1:
                        mask |= 1 << rest_bits[index]
                    bits >>= 1
                    index += 1
                total += word_masks.get(mask, 0)

            result.append(total)

        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.findNumOfValidWords(
        ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
        ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"],
    ) == [1, 1, 3, 2, 4, 0]
    assert solution.findNumOfValidWords(["apple", "pleas", "please"], ["aelwxyz", "aelpxyz", "aelpsxy", "saelpxy", "xaelpsy"]) == [0, 1, 3, 2, 0]

    print("All tests passed!")

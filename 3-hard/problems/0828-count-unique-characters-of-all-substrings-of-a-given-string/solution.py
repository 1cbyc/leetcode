from collections import defaultdict


class Solution:
    def uniqueLetterString(self, s: str) -> int:
        last_two = defaultdict(lambda: [-1, -1])
        total = 0

        for index, char in enumerate(s):
            previous, before_previous = last_two[char]
            total += (previous - before_previous) * (index - previous)
            last_two[char] = [index, previous]

        n = len(s)
        for char, (previous, before_previous) in last_two.items():
            total += (previous - before_previous) * (n - previous)

        return total


if __name__ == "__main__":
    solution = Solution()

    assert solution.uniqueLetterString("ABC") == 10
    assert solution.uniqueLetterString("ABA") == 8
    assert solution.uniqueLetterString("LEETCODE") == 92

    print("All tests passed!")

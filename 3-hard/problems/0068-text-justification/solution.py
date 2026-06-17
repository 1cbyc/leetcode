from typing import List


class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result: List[str] = []
        line: List[str] = []
        line_length = 0

        for word in words:
            if line_length + len(line) + len(word) > maxWidth:
                slots = max(1, len(line) - 1)
                spaces = maxWidth - line_length
                for index in range(spaces):
                    line[index % slots] += " "
                result.append("".join(line))
                line = []
                line_length = 0

            line.append(word)
            line_length += len(word)

        last = " ".join(line)
        last += " " * (maxWidth - len(last))
        result.append(last)
        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.fullJustify(
        ["This", "is", "an", "example", "of", "text", "justification."], 16
    ) == ["This    is    an", "example  of text", "justification.  "]

    assert solution.fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16) == [
        "What   must   be",
        "acknowledgment  ",
        "shall be        ",
    ]

    print("All tests passed!")

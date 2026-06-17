from typing import List


class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        def is_valid(text: str) -> bool:
            balance = 0
            for char in text:
                if char == "(":
                    balance += 1
                elif char == ")":
                    balance -= 1
                    if balance < 0:
                        return False
            return balance == 0

        level = {s}
        while True:
            valid = [text for text in level if is_valid(text)]
            if valid:
                return valid

            next_level = set()
            for text in level:
                for index in range(len(text)):
                    if text[index] in "()":
                        next_level.add(text[:index] + text[index + 1:])
            level = next_level


if __name__ == "__main__":
    solution = Solution()

    assert sorted(solution.removeInvalidParentheses("()())()")) == sorted(["(())()", "()()()"])
    assert sorted(solution.removeInvalidParentheses("(a)())()")) == sorted(["(a())()", "(a)()()"])
    assert solution.removeInvalidParentheses(")(") == [""]

    print("All tests passed!")

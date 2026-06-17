class Solution:
    def calculate(self, s: str) -> int:
        result = 0
        number = 0
        sign = 1
        stack = [1]
        index = 0

        while index < len(s):
            char = s[index]
            if char.isdigit():
                number = number * 10 + int(char)
            elif char in "+-":
                result += sign * number
                number = 0
                sign = stack[-1] * (1 if char == "+" else -1)
            elif char == "(":
                stack.append(sign)
            elif char == ")":
                stack.pop()
            index += 1

        return result + sign * number


if __name__ == "__main__":
    solution = Solution()

    assert solution.calculate("1 + 1") == 2
    assert solution.calculate(" 2-1 + 2 ") == 3
    assert solution.calculate("(1+(4+5+2)-3)+(6+8)") == 23
    assert solution.calculate("-(3+4)") == -7

    print("All tests passed!")

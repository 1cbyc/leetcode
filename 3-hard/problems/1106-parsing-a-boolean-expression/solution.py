class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        stack = []

        for char in expression:
            if char == ",":
                continue
            if char != ")":
                stack.append(char)
                continue

            operands = []
            while stack[-1] != "(":
                operands.append(stack.pop())
            stack.pop()  # remove '('
            operator = stack.pop()

            values = [token == "t" for token in operands]
            if operator == "!":
                result = not values[0]
            elif operator == "&":
                result = all(values)
            else:
                result = any(values)

            stack.append("t" if result else "f")

        return stack[-1] == "t"


if __name__ == "__main__":
    solution = Solution()

    assert solution.parseBoolExpr("&(|(f))") is False
    assert solution.parseBoolExpr("|(f,f,f,t)") is True
    assert solution.parseBoolExpr("!(&(f,t))") is True
    assert solution.parseBoolExpr("t") is True

    print("All tests passed!")

class Solution:
    def longestValidParentheses(self, s: str) -> int:
        longest = 0
        stack = [-1]

        for index, char in enumerate(s):
            if char == "(":
                stack.append(index)
            else:
                stack.pop()
                if not stack:
                    stack.append(index)
                else:
                    longest = max(longest, index - stack[-1])

        return longest


if __name__ == "__main__":
    solution = Solution()

    assert solution.longestValidParentheses("(()") == 2
    assert solution.longestValidParentheses(")()())") == 4
    assert solution.longestValidParentheses("") == 0
    assert solution.longestValidParentheses("()(()") == 2

    print("All tests passed!")

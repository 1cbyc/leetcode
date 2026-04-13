class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {')':'(', ']':'[', '}':'{'}
        for c in s:
            if c in '([{': stack.append(c)
            elif not stack or stack[-1] != pairs[c]: return False
            else: stack.pop()
        return not stack

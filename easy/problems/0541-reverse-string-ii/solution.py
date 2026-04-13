class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        chars = list(s)
        for start in range(0, len(chars), 2 * k):
            chars[start:start + k] = reversed(chars[start:start + k])
        return "".join(chars)

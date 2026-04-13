class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = ""
        while columnNumber > 0:
            columnNumber -= 1
            result = chr(ord('A') + columnNumber % 26) + result
            columnNumber //= 26
        return result

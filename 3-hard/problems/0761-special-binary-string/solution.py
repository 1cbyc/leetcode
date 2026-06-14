class Solution:
    def makeLargestSpecial(self, s: str) -> str:
        if not s:
            return ""

        primitives: list[str] = []
        balance = 0
        start = 0

        for index, char in enumerate(s):
            balance += 1 if char == "1" else -1
            if balance == 0:
                inner = self.makeLargestSpecial(s[start + 1 : index])
                primitives.append("1" + inner + "0")
                start = index + 1

        primitives.sort(reverse=True)
        return "".join(primitives)


if __name__ == "__main__":
    solution = Solution()

    assert solution.makeLargestSpecial("11011000") == "11100100"
    assert solution.makeLargestSpecial("10") == "10"
    assert solution.makeLargestSpecial("1100") == "1100"

    print("All tests passed!")

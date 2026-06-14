class Solution:
    def crackSafe(self, n: int, k: int) -> str:
        if n == 1:
            return "".join(str(digit) for digit in range(k))

        seen: set[str] = set()
        digits: list[str] = []
        start = "0" * (n - 1)

        def dfs(prefix: str) -> None:
            for digit in range(k):
                password = prefix + str(digit)
                if password in seen:
                    continue
                seen.add(password)
                dfs(password[1:])
                digits.append(str(digit))

        dfs(start)
        return "".join(digits) + start


if __name__ == "__main__":
    solution = Solution()

    assert solution.crackSafe(1, 2) == "01"
    assert solution.crackSafe(2, 2) == "01100"
    assert solution.crackSafe(2, 1) == "00"
    assert solution.crackSafe(3, 2) == "0011101000"

    print("All tests passed!")

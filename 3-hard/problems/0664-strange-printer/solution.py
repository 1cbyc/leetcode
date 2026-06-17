from functools import lru_cache


class Solution:
    def strangePrinter(self, s: str) -> int:
        compressed = []
        for char in s:
            if not compressed or compressed[-1] != char:
                compressed.append(char)
        s = "".join(compressed)
        n = len(s)
        if n == 0:
            return 0

        @lru_cache(maxsize=None)
        def solve(left: int, right: int) -> int:
            if left > right:
                return 0

            best = solve(left + 1, right) + 1
            for middle in range(left + 1, right + 1):
                if s[middle] == s[left]:
                    best = min(best, solve(left, middle - 1) + solve(middle + 1, right))
            return best

        return solve(0, n - 1)


if __name__ == "__main__":
    solution = Solution()

    assert solution.strangePrinter("aaabbb") == 2
    assert solution.strangePrinter("aba") == 2
    assert solution.strangePrinter("") == 0
    assert solution.strangePrinter("tbt") == 2

    print("All tests passed!")

from functools import lru_cache


class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        if len(s1) != len(s2):
            return False

        @lru_cache(maxsize=None)
        def solve(a: str, b: str) -> bool:
            if a == b:
                return True
            if sorted(a) != sorted(b):
                return False

            n = len(a)
            for split in range(1, n):
                if solve(a[:split], b[:split]) and solve(a[split:], b[split:]):
                    return True
                if solve(a[:split], b[n - split:]) and solve(a[split:], b[: n - split]):
                    return True
            return False

        return solve(s1, s2)


if __name__ == "__main__":
    solution = Solution()

    assert solution.isScramble("great", "rgeat") is True
    assert solution.isScramble("abcde", "caebd") is False
    assert solution.isScramble("a", "a") is True

    print("All tests passed!")
